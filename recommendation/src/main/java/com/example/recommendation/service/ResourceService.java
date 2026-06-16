package com.example.recommendation.service;

import com.example.recommendation.dtos.ResourceDTO;
import com.example.recommendation.exception.ResourceNotFoundException;
import com.example.recommendation.model.Resource;
import com.example.recommendation.repository.RecommendationRepository;
import com.example.recommendation.repository.ResourceRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@Service
@Transactional(readOnly = true)
public class ResourceService {
    
    private final ResourceRepository resourceRepository;
    private final RecommendationRepository recommendationRepository;
    private final CacheService cacheService;

    public ResourceService(ResourceRepository resourceRepository,
                           RecommendationRepository recommendationRepository,
                           CacheService cacheService) {
        this.resourceRepository = resourceRepository;
        this.recommendationRepository = recommendationRepository;
        this.cacheService = cacheService;
    }

    @Transactional
    public ResourceDTO createResource(ResourceDTO dto) {
        log.info("Iniciando cadastro de novo recurso com nome: '{}'", dto.getName());
        Resource resource = new Resource();
        resource.setName(dto.getName());
        resource.setDescription(dto.getDescription());
        resource.setUrl(dto.getUrl());
        resource.setCompetencyId(dto.getCompetencyId());
        resource.setLevel(dto.getLevel());

        Resource savedResource = resourceRepository.save(resource);
        dto.setId(savedResource.getId());
        log.info("Recurso cadastrado com sucesso. ID gerado: {}", savedResource.getId());
        return dto;
    }

    public List<ResourceDTO> getAllResources() {
        log.info("Buscando todos os recursos cadastrados");
        List<Resource> resources = resourceRepository.findAll();

        return resources.stream().map(entity -> {
            ResourceDTO dto = new ResourceDTO();
            dto.setId(entity.getId());
            dto.setName(entity.getName());
            dto.setDescription(entity.getDescription());
            dto.setUrl(entity.getUrl());
            dto.setCompetencyId(entity.getCompetencyId());
            dto.setLevel(entity.getLevel());
            return dto;
        }).collect(Collectors.toList());
    }

    @Transactional
    public void deleteResource(Long id) {
        log.info("Iniciando exclusão do recurso ID: {}", id);
        Resource resource = resourceRepository.findById(id)
                .orElseThrow(() -> {
                    log.warn("Falha ao excluir: Recurso ID: {} não encontrado", id);
                    return new ResourceNotFoundException("Recurso não encontrado com o ID: " + id);
                });

        List<Long> userIds = recommendationRepository.findUserIdsByResourceId(id);
        log.info("Invalidações de cache necessárias para {} usuários afetados pelo recurso ID: {}", userIds.size(), id);
        for (Long userId : userIds) {
            cacheService.evictUserCache(userId);
        }

        recommendationRepository.deleteByResource_Id(id);
        log.info("Excluídas todas as recomendações vinculadas ao recurso ID: {}", id);

        resourceRepository.delete(resource);
        log.info("Recurso ID: {} excluído com sucesso", id);
    }

    public ResourceDTO getResourceById(Long id) {
        log.info("Buscando detalhes do recurso ID: {}", id);
        Resource resource = resourceRepository.findById(id)
                .orElseThrow(() -> {
                    log.warn("Recurso ID: {} não encontrado", id);
                    return new ResourceNotFoundException("Recurso não encontrado com o ID: " + id);
                });

        ResourceDTO dto = new ResourceDTO();
        dto.setId(resource.getId());
        dto.setName(resource.getName());
        dto.setDescription(resource.getDescription());
        dto.setUrl(resource.getUrl());
        dto.setCompetencyId(resource.getCompetencyId());
        dto.setLevel(resource.getLevel());

        return dto;
    }

    @Transactional
    public ResourceDTO updateResource(Long id, ResourceDTO dto) {
        log.info("Iniciando atualização do recurso ID: {}", id);
        Resource resource = resourceRepository.findById(id)
                .orElseThrow(() -> {
                    log.warn("Falha ao atualizar: Recurso ID: {} não encontrado", id);
                    return new ResourceNotFoundException("Recurso não encontrado com o ID: " + id);
                });

        resource.setName(dto.getName());
        resource.setDescription(dto.getDescription());
        resource.setUrl(dto.getUrl());
        resource.setCompetencyId(dto.getCompetencyId());
        resource.setLevel(dto.getLevel());

        Resource updatedResource = resourceRepository.save(resource);

        List<Long> userIds = recommendationRepository.findUserIdsByResourceId(id);
        log.info("Invalidações de cache necessárias para {} usuários devido à atualização do recurso ID: {}", userIds.size(), id);
        for (Long userId : userIds) {
            cacheService.evictUserCache(userId);
        }

        dto.setId(updatedResource.getId());
        log.info("Recurso ID: {} atualizado com sucesso", id);
        return dto;
    }    
}
