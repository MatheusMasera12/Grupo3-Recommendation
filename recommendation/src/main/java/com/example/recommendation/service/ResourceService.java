package com.example.recommendation.service;

import com.example.recommendation.dtos.ResourceDTO;
import com.example.recommendation.exception.ResourceNotFoundException;
import com.example.recommendation.model.Recommendation;
import com.example.recommendation.model.Resource;
import com.example.recommendation.repository.RecommendationRepository;
import com.example.recommendation.repository.ResourceRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

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
        Resource resource = new Resource();
        resource.setName(dto.getName());
        resource.setDescription(dto.getDescription());
        resource.setUrl(dto.getUrl());
        resource.setCompetencyId(dto.getCompetencyId());
        resource.setLevel(dto.getLevel());

        Resource savedResource = resourceRepository.save(resource);
        dto.setId(savedResource.getId());
        return dto;
    }

    public List<ResourceDTO> getAllResources() {
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
        Resource resource = resourceRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Recurso não encontrado com o ID: " + id));

        
        List<Recommendation> recommendations = recommendationRepository.findByResourceId(id);
        for (Recommendation rec : recommendations) {
            cacheService.evictUserCache(rec.getUserId());
        }

        
        recommendationRepository.deleteByResourceId(id);

      
        resourceRepository.delete(resource);
    }

    public ResourceDTO getResourceById(Long id) {
        Resource resource = resourceRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Recurso não encontrado com o ID: " + id));

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
        Resource resource = resourceRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Recurso não encontrado com o ID: " + id));

        resource.setName(dto.getName());
        resource.setDescription(dto.getDescription());
        resource.setUrl(dto.getUrl());
        resource.setCompetencyId(dto.getCompetencyId());
        resource.setLevel(dto.getLevel());

        Resource updatedResource = resourceRepository.save(resource);

        
        List<Recommendation> recommendations = recommendationRepository.findByResourceId(id);
        for (Recommendation rec : recommendations) {
            cacheService.evictUserCache(rec.getUserId());
        }

        dto.setId(updatedResource.getId());
        return dto;
    }    
}
