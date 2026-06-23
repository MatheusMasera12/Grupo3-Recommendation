package com.example.recommendation.Service;

import com.example.recommendation.dtos.ResourceDTO;
import com.example.recommendation.exception.ResourceNotFoundException;
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

import java.util.Collections;
import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class ResourceServiceTest {

    @Mock
    private ResourceRepository resourceRepository;

    @Mock
    private RecommendationRepository recommendationRepository;

    @Mock
    private CacheService cacheService;

    @InjectMocks
    private ResourceService resourceService;

    private Resource resource;
    private ResourceDTO resourceDTO;

    @BeforeEach
    void setUp() {
        resource = new Resource();
        resource.setId(1L);
        resource.setName("Recurso Original");
        resource.setDescription("Descrição original");
        resource.setUrl("https://exemplo.com/original");
        resource.setCompetencyId(10L);
        resource.setLevel(ResourceLevel.BEGINNER);

        resourceDTO = new ResourceDTO();
        resourceDTO.setName("Recurso Atualizado");
        resourceDTO.setDescription("Descrição atualizada");
        resourceDTO.setUrl("https://exemplo.com/atualizado");
        resourceDTO.setCompetencyId(10L);
        resourceDTO.setLevel(ResourceLevel.INTERMEDIATE);
    }

    @Test
    void createResource_deveSalvarERetornarDTOCorrespondente() {
        ResourceDTO input = new ResourceDTO();
        input.setName("Novo Recurso");
        input.setDescription("Descrição");
        input.setUrl("https://exemplo.com/novo");
        input.setCompetencyId(5L);
        input.setLevel(ResourceLevel.BEGINNER);

        Resource saved = new Resource();
        saved.setId(42L);
        saved.setName(input.getName());
        saved.setDescription(input.getDescription());
        saved.setUrl(input.getUrl());
        saved.setCompetencyId(input.getCompetencyId());
        saved.setLevel(input.getLevel());

        when(resourceRepository.save(any(Resource.class))).thenReturn(saved);

        ResourceDTO result = resourceService.createResource(input);

        assertThat(result.getId()).isEqualTo(42L);
        assertThat(result.getName()).isEqualTo("Novo Recurso");
        assertThat(result.getLevel()).isEqualTo(ResourceLevel.BEGINNER);

        ArgumentCaptor<Resource> captor = ArgumentCaptor.forClass(Resource.class);
        verify(resourceRepository).save(captor.capture());
        assertThat(captor.getValue().getName()).isEqualTo("Novo Recurso");
    }

    @Test
    void getAllResources_deveRetornarPaginaDeDTOs() {
        Pageable pageable = PageRequest.of(0, 20);
        Page<Resource> page = new PageImpl<>(List.of(resource));

        when(resourceRepository.findAll(pageable)).thenReturn(page);

        Page<ResourceDTO> result = resourceService.getAllResources(pageable);

        assertThat(result.getContent()).hasSize(1);
        assertThat(result.getContent().get(0).getId()).isEqualTo(resource.getId());
        assertThat(result.getContent().get(0).getName()).isEqualTo(resource.getName());
    }

    @Test
    void getResourceById_deveRetornarDTO_quandoRecursoExiste() {
        when(resourceRepository.findById(1L)).thenReturn(Optional.of(resource));

        ResourceDTO result = resourceService.getResourceById(1L);

        assertThat(result.getId()).isEqualTo(1L);
        assertThat(result.getName()).isEqualTo("Recurso Original");
    }

    @Test
    void getResourceById_deveLancarResourceNotFound_quandoIdNaoExiste() {
        when(resourceRepository.findById(99L)).thenReturn(Optional.empty());

        assertThatThrownBy(() -> resourceService.getResourceById(99L))
                .isInstanceOf(ResourceNotFoundException.class);
    }

    @Test
    void updateResource_deveAtualizarCamposEInvalidarCacheDosUsuariosAfetados() {
        when(resourceRepository.findById(1L)).thenReturn(Optional.of(resource));
        when(resourceRepository.save(any(Resource.class))).thenAnswer(invocation -> invocation.getArgument(0));
        when(recommendationRepository.findUserIdsByResourceId(1L)).thenReturn(List.of(10L, 20L));

        ResourceDTO result = resourceService.updateResource(1L, resourceDTO);

        assertThat(result.getName()).isEqualTo("Recurso Atualizado");
        assertThat(result.getLevel()).isEqualTo(ResourceLevel.INTERMEDIATE);

        verify(cacheService, times(1)).evictUserCache(10L);
        verify(cacheService, times(1)).evictUserCache(20L);
    }

    @Test
    void updateResource_deveLancarResourceNotFound_quandoIdNaoExiste() {
        when(resourceRepository.findById(99L)).thenReturn(Optional.empty());

        assertThatThrownBy(() -> resourceService.updateResource(99L, resourceDTO))
                .isInstanceOf(ResourceNotFoundException.class);

        verify(resourceRepository, never()).save(any(Resource.class));
    }

    @Test
    void deleteResource_deveInvalidarCacheDosUsuariosAfetadosEDeletarRecomendacoesERecurso() {
        when(resourceRepository.findById(1L)).thenReturn(Optional.of(resource));
        when(recommendationRepository.findUserIdsByResourceId(1L)).thenReturn(List.of(10L, 20L));

        resourceService.deleteResource(1L);

        verify(cacheService, times(1)).evictUserCache(10L);
        verify(cacheService, times(1)).evictUserCache(20L);
        verify(recommendationRepository).deleteByResource_Id(1L);
        verify(resourceRepository).delete(resource);
    }

    @Test
    void deleteResource_deveLancarResourceNotFound_quandoIdNaoExiste() {
        when(resourceRepository.findById(99L)).thenReturn(Optional.empty());

        assertThatThrownBy(() -> resourceService.deleteResource(99L))
                .isInstanceOf(ResourceNotFoundException.class);

        verify(recommendationRepository, never()).deleteByResource_Id(any());
        verify(resourceRepository, never()).delete(any());
    }

    @Test
    void deleteResource_naoDeveChamarEvictCache_quandoNenhumUsuarioAfetado() {
        when(resourceRepository.findById(1L)).thenReturn(Optional.of(resource));
        when(recommendationRepository.findUserIdsByResourceId(1L)).thenReturn(Collections.emptyList());

        resourceService.deleteResource(1L);

        verify(cacheService, never()).evictUserCache(any());
        verify(recommendationRepository).deleteByResource_Id(1L);
        verify(resourceRepository).delete(resource);
    }
}
