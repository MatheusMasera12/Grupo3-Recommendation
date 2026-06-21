package com.example.recommendation.controller;

import com.example.recommendation.dtos.AssessmentTriggerDTO;
import com.example.recommendation.dtos.RecommendationDTO;
import com.example.recommendation.model.ResourceLevel;
import com.example.recommendation.service.RecommendationService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.http.MediaType;
import org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors;
import org.springframework.test.web.servlet.MockMvc;

import java.util.List;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@org.springframework.context.annotation.Import(com.example.recommendation.config.SecurityConfig.class)
@WebMvcTest(RecommendationController.class)
class RecommendationControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @MockBean
    private RecommendationService recommendationService;

    @Test
    void generateRecommendation_deveRetornar201_quandoDadosValidos() throws Exception {
        AssessmentTriggerDTO trigger = new AssessmentTriggerDTO();
        trigger.setUserId(1L);
        trigger.setCompetencyId(10L);
        trigger.setLevel(ResourceLevel.BEGINNER);

        mockMvc.perform(post("/api/recommendations/evaluate")
                        .with(SecurityMockMvcRequestPostProcessors.jwt()
                                .authorities(new org.springframework.security.core.authority.SimpleGrantedAuthority("ROLE_ADMIN")).jwt(jwt -> jwt.subject("1").claim("role", java.util.List.of("ADMIN"))))
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(trigger)))
                .andExpect(status().isCreated());
    }

    @Test
    void generateRecommendation_deveRetornar400_quandoCampoObrigatorioFaltando() throws Exception {
        AssessmentTriggerDTO trigger = new AssessmentTriggerDTO();
        trigger.setUserId(1L);
        // competencyId e level ausentes

        mockMvc.perform(post("/api/recommendations/evaluate")
                        .with(SecurityMockMvcRequestPostProcessors.jwt()
                                .authorities(new org.springframework.security.core.authority.SimpleGrantedAuthority("ROLE_ADMIN")).jwt(jwt -> jwt.subject("1").claim("role", java.util.List.of("ADMIN"))))
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(trigger)))
                .andExpect(status().isBadRequest());
    }

    @Test
    void getUserRecommendations_devePermitirQueUsuarioConsulteOProprioId() throws Exception {
        Page<RecommendationDTO> page = new PageImpl<>(List.of(new RecommendationDTO()));
        when(recommendationService.getUserRecommendations(any(), any())).thenReturn(page);

        mockMvc.perform(get("/api/recommendations/user/1")
                        .with(SecurityMockMvcRequestPostProcessors.jwt()
                                .authorities(new org.springframework.security.core.authority.SimpleGrantedAuthority("ROLE_USER")).jwt(jwt -> jwt.subject("1").claim("role", java.util.List.of("USER")))))
                .andExpect(status().isOk());
    }

    @Test
    void getUserRecommendations_deveRetornar403_quandoUsuarioComumConsultaIdDeOutroUsuario() throws Exception {
        mockMvc.perform(get("/api/recommendations/user/2")
                        .with(SecurityMockMvcRequestPostProcessors.jwt()
                                .authorities(new org.springframework.security.core.authority.SimpleGrantedAuthority("ROLE_USER")).jwt(jwt -> jwt.subject("1").claim("role", java.util.List.of("USER")))))
                .andExpect(status().isForbidden());

        verify(recommendationService, never()).getUserRecommendations(anyLong(), any());
    }

    @Test
    void getUserRecommendations_devePermitirQueAdminConsulteQualquerUsuario() throws Exception {
        Page<RecommendationDTO> page = new PageImpl<>(List.of(new RecommendationDTO()));
        when(recommendationService.getUserRecommendations(any(), any())).thenReturn(page);

        mockMvc.perform(get("/api/recommendations/user/2")
                        .with(SecurityMockMvcRequestPostProcessors.jwt()
                                .authorities(new org.springframework.security.core.authority.SimpleGrantedAuthority("ROLE_ADMIN")).jwt(jwt -> jwt.subject("1").claim("role", java.util.List.of("ADMIN")))))
                .andExpect(status().isOk());
    }

    @Test
    void deleteRecommendation_deveRetornar204_quandoSucesso() throws Exception {
        mockMvc.perform(delete("/api/recommendations/5")
                        .with(SecurityMockMvcRequestPostProcessors.jwt()
                                .authorities(new org.springframework.security.core.authority.SimpleGrantedAuthority("ROLE_USER")).jwt(jwt -> jwt.subject("1").claim("role", java.util.List.of("USER")))))
                .andExpect(status().isNoContent());

        verify(recommendationService).deleteRecommendation(5L, 1L, false);
    }

    @Test
    void deleteRecommendation_deveRetornar401_quandoSemAutenticacao() throws Exception {
        mockMvc.perform(delete("/api/recommendations/5"))
                .andExpect(status().isUnauthorized());
    }
}
