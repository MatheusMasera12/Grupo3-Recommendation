package com.example.recommendation.controller;

import com.example.recommendation.dtos.ResourceDTO;
import com.example.recommendation.exception.ResourceNotFoundException;
import com.example.recommendation.model.ResourceLevel;
import com.example.recommendation.service.ResourceService;
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
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@org.springframework.context.annotation.Import(com.example.recommendation.config.SecurityConfig.class)
@WebMvcTest(ResourceController.class)
class ResourceControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @MockBean
    private ResourceService resourceService;

    private ResourceDTO buildValidDto() {
        ResourceDTO dto = new ResourceDTO();
        dto.setName("Recurso de Teste");
        dto.setDescription("Descrição de teste");
        dto.setUrl("https://exemplo.com/recurso");
        dto.setCompetencyId(1L);
        dto.setLevel(ResourceLevel.BEGINNER);
        return dto;
    }

    @Test
    void createResource_deveRetornar201_quandoAdminEDadosValidos() throws Exception {
        ResourceDTO input = buildValidDto();
        ResourceDTO saved = buildValidDto();
        saved.setId(1L);

        when(resourceService.createResource(any(ResourceDTO.class))).thenReturn(saved);

        mockMvc.perform(post("/api/resources")
                        .with(SecurityMockMvcRequestPostProcessors.jwt()
                                .authorities(new org.springframework.security.core.authority.SimpleGrantedAuthority("ROLE_ADMIN")).jwt(jwt -> jwt.subject("1")))
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(input)))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.id").value(1L))
                .andExpect(jsonPath("$.name").value("Recurso de Teste"));
    }

    @Test
    void createResource_deveRetornar403_quandoUsuarioComumTentaCriar() throws Exception {
        ResourceDTO input = buildValidDto();

        mockMvc.perform(post("/api/resources")
                        .with(SecurityMockMvcRequestPostProcessors.jwt()
                                .authorities(new org.springframework.security.core.authority.SimpleGrantedAuthority("ROLE_USER")).jwt(jwt -> jwt.subject("1")))
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(input)))
                .andExpect(status().isForbidden());
    }

    @Test
    void createResource_deveRetornar400_quandoLevelAusente() throws Exception {
        ResourceDTO input = buildValidDto();
        input.setLevel(null);

        mockMvc.perform(post("/api/resources")
                        .with(SecurityMockMvcRequestPostProcessors.jwt()
                                .authorities(new org.springframework.security.core.authority.SimpleGrantedAuthority("ROLE_ADMIN")).jwt(jwt -> jwt.subject("1")))
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(input)))
                .andExpect(status().isBadRequest());
    }

    @Test
    void getAllResources_deveRetornar200_paraAdminOuUser() throws Exception {
        Page<ResourceDTO> page = new PageImpl<>(List.of(buildValidDto()));
        when(resourceService.getAllResources(any())).thenReturn(page);

        mockMvc.perform(get("/api/resources")
                        .with(SecurityMockMvcRequestPostProcessors.jwt()
                                .authorities(new org.springframework.security.core.authority.SimpleGrantedAuthority("ROLE_USER")).jwt(jwt -> jwt.subject("1"))))
                .andExpect(status().isOk());
    }

    @Test
    void getResourceById_deveRetornar200_quandoRecursoExiste() throws Exception {
        ResourceDTO dto = buildValidDto();
        dto.setId(1L);
        when(resourceService.getResourceById(1L)).thenReturn(dto);

        mockMvc.perform(get("/api/resources/1")
                        .with(SecurityMockMvcRequestPostProcessors.jwt()
                                .authorities(new org.springframework.security.core.authority.SimpleGrantedAuthority("ROLE_USER")).jwt(jwt -> jwt.subject("1"))))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value(1L));
    }

    @Test
    void getResourceById_deveRetornar404_quandoRecursoNaoExiste() throws Exception {
        when(resourceService.getResourceById(99L))
                .thenThrow(new ResourceNotFoundException("Recurso não encontrado com o ID: 99"));

        mockMvc.perform(get("/api/resources/99")
                        .with(SecurityMockMvcRequestPostProcessors.jwt()
                                .authorities(new org.springframework.security.core.authority.SimpleGrantedAuthority("ROLE_USER")).jwt(jwt -> jwt.subject("1"))))
                .andExpect(status().isNotFound());
    }

    @Test
    void updateResource_deveRetornar200_quandoAdminEDadosValidos() throws Exception {
        ResourceDTO input = buildValidDto();
        ResourceDTO updated = buildValidDto();
        updated.setId(1L);

        when(resourceService.updateResource(eq(1L), any(ResourceDTO.class))).thenReturn(updated);

        mockMvc.perform(put("/api/resources/1")
                        .with(SecurityMockMvcRequestPostProcessors.jwt()
                                .authorities(new org.springframework.security.core.authority.SimpleGrantedAuthority("ROLE_ADMIN")).jwt(jwt -> jwt.subject("1")))
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(input)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value(1L));
    }

    @Test
    void updateResource_deveRetornar403_quandoUsuarioComumTentaAtualizar() throws Exception {
        ResourceDTO input = buildValidDto();

        mockMvc.perform(put("/api/resources/1")
                        .with(SecurityMockMvcRequestPostProcessors.jwt()
                                .authorities(new org.springframework.security.core.authority.SimpleGrantedAuthority("ROLE_USER")).jwt(jwt -> jwt.subject("1")))
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(input)))
                .andExpect(status().isForbidden());
    }

    @Test
    void deleteResource_deveRetornar204_quandoAdmin() throws Exception {
        mockMvc.perform(delete("/api/resources/1")
                        .with(SecurityMockMvcRequestPostProcessors.jwt()
                                .authorities(new org.springframework.security.core.authority.SimpleGrantedAuthority("ROLE_ADMIN")).jwt(jwt -> jwt.subject("1"))))
                .andExpect(status().isNoContent());
    }

    @Test
    void deleteResource_deveRetornar403_quandoUsuarioComum() throws Exception {
        mockMvc.perform(delete("/api/resources/1")
                        .with(SecurityMockMvcRequestPostProcessors.jwt()
                                .authorities(new org.springframework.security.core.authority.SimpleGrantedAuthority("ROLE_USER")).jwt(jwt -> jwt.subject("1"))))
                .andExpect(status().isForbidden());
    }
}
