package com.example.recommendation.service;

import com.example.recommendation.dtos.AssessmentTriggerDTO;
import com.example.recommendation.dtos.RecommendationDTO;
import com.example.recommendation.exception.ResourceNotFoundException;
import com.example.recommendation.model.Recommendation;
import com.example.recommendation.model.Resource;
import com.example.recommendation.model.ResourceLevel;
import com.example.recommendation.repository.RecommendationRepository;
import com.example.recommendation.repository.ResourceRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.security.access.AccessDeniedException;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyList;
import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class RecommendationServiceTest {

    @Mock
    private RecommendationRepository recommendationRepository;

    @Mock
    private ResourceRepository resourceRepository;

    @Mock
    private CacheService cacheService;

    @InjectMocks
    private RecommendationService recommendationService;

    private AssessmentTriggerDTO trigger;
    private Resource resource1;
    private Resource resource2;

    @BeforeEach
    void setUp() {
        trigger = new AssessmentTriggerDTO();
        trigger.setUserId(1L);
        trigger.setCompetencyId(10L);
        trigger.setLevel(ResourceLevel.BEGINNER);

        resource1 = new Resource();
        resource1.setId(100L);
        resource1.setName("Recurso 1");
        resource1.setCompetencyId(10L);
        resource1.setLevel(ResourceLevel.BEGINNER);

        resource2 = new Resource();
        resource2.setId(200L);
        resource2.setName("Recurso 2");
        resource2.setCompetencyId(10L);
        resource2.setLevel(ResourceLevel.BEGINNER);
    }

    @Test
    void generateRecommendation_deveLancarExcecao_quandoNaoHaRecursosParaCompetenciaENivel() {
        when(resourceRepository.findByCompetencyIdAndLevel(trigger.getCompetencyId(), trigger.getLevel()))
                .thenReturn(Collections.emptyList());

        assertThatThrownBy(() -> recommendationService.generateRecommendation(trigger))
                .isInstanceOf(ResourceNotFoundException.class);

        verify(recommendationRepository, never()).saveAll(anyList());
        verify(cacheService, never()).evictUserCache(anyLong());
    }

    @Test
    void generateRecommendation_deveSalvarApenasRecursosAindaNaoRecomendados() {
        when(resourceRepository.findByCompetencyIdAndLevel(trigger.getCompetencyId(), trigger.getLevel()))
                .thenReturn(List.of(resource1, resource2));
        // resource1 já foi recomendado anteriormente para esse usuário
        when(recommendationRepository.findExistingResourceIdsForUser(eq(trigger.getUserId()), anyList()))
                .thenReturn(List.of(resource1.getId()));

        recommendationService.generateRecommendation(trigger);

        ArgumentCaptor<List<Recommendation>> captor = ArgumentCaptor.forClass(List.class);
        verify(recommendationRepository).saveAll(captor.capture());

        List<Recommendation> saved = captor.getValue();
        assertThat(saved).hasSize(1);
        assertThat(saved.get(0).getResource().getId()).isEqualTo(resource2.getId());
        assertThat(saved.get(0).getUserId()).isEqualTo(trigger.getUserId());

        verify(cacheService, times(1)).evictUserCache(trigger.getUserId());
    }

    @Test
    void generateRecommendation_naoDeveSalvarNemLimparCache_quandoTodosRecursosJaForamRecomendados() {
        when(resourceRepository.findByCompetencyIdAndLevel(trigger.getCompetencyId(), trigger.getLevel()))
                .thenReturn(List.of(resource1, resource2));
        when(recommendationRepository.findExistingResourceIdsForUser(eq(trigger.getUserId()), anyList()))
                .thenReturn(List.of(resource1.getId(), resource2.getId()));

        recommendationService.generateRecommendation(trigger);

        verify(recommendationRepository, never()).saveAll(anyList());
        verify(cacheService, never()).evictUserCache(anyLong());
    }

    @Test
    void getUserRecommendations_deveMapearEntidadeParaDTOIncluindoRecurso() {
        Recommendation rec = new Recommendation();
        rec.setId(1L);
        rec.setUserId(1L);
        rec.setDescription("Recomendado com base na competência ID: 10");
        rec.setResource(resource1);

        Page<Recommendation> page = new PageImpl<>(List.of(rec));
        Pageable pageable = PageRequest.of(0, 20);

        when(recommendationRepository.findByUserId(1L, pageable)).thenReturn(page);

        Page<RecommendationDTO> result = recommendationService.getUserRecommendations(1L, pageable);

        assertThat(result.getContent()).hasSize(1);
        RecommendationDTO dto = result.getContent().get(0);
        assertThat(dto.getId()).isEqualTo(1L);
        assertThat(dto.getUserId()).isEqualTo(1L);
        assertThat(dto.getResource()).isNotNull();
        assertThat(dto.getResource().getId()).isEqualTo(resource1.getId());
        assertThat(dto.getResource().getName()).isEqualTo(resource1.getName());
    }

    @Test
    void getUserRecommendations_deveRetornarResourceNulo_quandoRecomendacaoSemRecursoAssociado() {
        Recommendation rec = new Recommendation();
        rec.setId(2L);
        rec.setUserId(1L);
        rec.setDescription("desc");
        rec.setResource(null);

        Page<Recommendation> page = new PageImpl<>(List.of(rec));
        Pageable pageable = PageRequest.of(0, 20);

        when(recommendationRepository.findByUserId(1L, pageable)).thenReturn(page);

        Page<RecommendationDTO> result = recommendationService.getUserRecommendations(1L, pageable);

        assertThat(result.getContent().get(0).getResource()).isNull();
    }

    @Test
    void deleteRecommendation_deveLancarResourceNotFound_quandoIdNaoExiste() {
        when(recommendationRepository.findById(99L)).thenReturn(Optional.empty());

        assertThatThrownBy(() -> recommendationService.deleteRecommendation(99L, 1L, false))
                .isInstanceOf(ResourceNotFoundException.class);

        verify(recommendationRepository, never()).delete(any());
    }

    @Test
    void deleteRecommendation_deveLancarAccessDenied_quandoUsuarioComumTentaDeletarDeOutroUsuario() {
        Recommendation rec = new Recommendation();
        rec.setId(5L);
        rec.setUserId(2L); // pertence a outro usuário

        when(recommendationRepository.findById(5L)).thenReturn(Optional.of(rec));

        assertThatThrownBy(() -> recommendationService.deleteRecommendation(5L, 1L, false))
                .isInstanceOf(AccessDeniedException.class);

        verify(recommendationRepository, never()).delete(any());
        verify(cacheService, never()).evictUserCache(anyLong());
    }

    @Test
    void deleteRecommendation_devePermitirQueProprietarioDeleteSuaPropriaRecomendacao() {
        Recommendation rec = new Recommendation();
        rec.setId(5L);
        rec.setUserId(1L);

        when(recommendationRepository.findById(5L)).thenReturn(Optional.of(rec));

        recommendationService.deleteRecommendation(5L, 1L, false);

        verify(recommendationRepository).delete(rec);
        verify(cacheService).evictUserCache(1L);
    }

    @Test
    void deleteRecommendation_devePermitirQueAdminDeleteRecomendacaoDeQualquerUsuario() {
        Recommendation rec = new Recommendation();
        rec.setId(5L);
        rec.setUserId(2L); // não é o admin que está chamando

        when(recommendationRepository.findById(5L)).thenReturn(Optional.of(rec));

        recommendationService.deleteRecommendation(5L, 1L, true);

        verify(recommendationRepository).delete(rec);
        verify(cacheService).evictUserCache(2L);
    }
}
