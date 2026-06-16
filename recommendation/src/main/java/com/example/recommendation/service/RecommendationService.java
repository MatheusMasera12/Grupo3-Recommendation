package com.example.recommendation.service;

import com.example.recommendation.dtos.AssessmentTriggerDTO;
import com.example.recommendation.dtos.RecommendationDTO;
import com.example.recommendation.dtos.ResourceDTO;
import com.example.recommendation.exception.ResourceNotFoundException;
import com.example.recommendation.model.Recommendation;
import com.example.recommendation.model.Resource;
import com.example.recommendation.repository.RecommendationRepository;
import com.example.recommendation.repository.ResourceRepository;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional(readOnly = true)
public class RecommendationService {

    private final RecommendationRepository recommendationRepository;
    private final ResourceRepository resourceRepository;
    private final CacheService cacheService;

    public RecommendationService(RecommendationRepository recommendationRepository,
                                 ResourceRepository resourceRepository,
                                 CacheService cacheService) {
        this.recommendationRepository = recommendationRepository;
        this.resourceRepository = resourceRepository;
        this.cacheService = cacheService;
    }

    @Transactional
    public void generateRecommendation(AssessmentTriggerDTO trigger) {
        List<Resource> resources = resourceRepository.findByCompetencyIdAndLevel(
                trigger.getCompetencyId(), trigger.getLevel());

        if (resources.isEmpty()) {
            throw new ResourceNotFoundException("Nenhum recurso encontrado para a competência ID: "
                + trigger.getCompetencyId() + " e nível: " + trigger.getLevel());
        }

        List<Recommendation> recommendations = new ArrayList<>();
        for (Resource resource : resources) {
            boolean exists = recommendationRepository.existsByUserIdAndResourceId(
                    trigger.getUserId(), resource.getId());
            if (!exists) {
                Recommendation rec = new Recommendation();
                rec.setUserId(trigger.getUserId());
                rec.setResource(resource);
                rec.setDescription("Recomendado com base na competência ID: "
                    + trigger.getCompetencyId());
                recommendations.add(rec);
            }
        }

        if (!recommendations.isEmpty()) {
            recommendationRepository.saveAll(recommendations);
            cacheService.evictUserCache(trigger.getUserId());
        }
    }

    @Cacheable(value = "recommendations", key = "#userId + ':' + #pageable.pageNumber")
    public List<RecommendationDTO> getUserRecommendations(Long userId, Pageable pageable) {
        return recommendationRepository.findByUserId(userId, pageable)
                .stream()
                .map(this::toDTO)
                .collect(Collectors.toList());
    }

    @Transactional
    public void deleteRecommendation(Long id) {
        Recommendation rec = recommendationRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Recomendação não encontrada com ID: " + id));
        recommendationRepository.delete(rec);
        cacheService.evictUserCache(rec.getUserId());
    }

    private RecommendationDTO toDTO(Recommendation rec) {
        RecommendationDTO dto = new RecommendationDTO();
        dto.setId(rec.getId());
        dto.setUserId(rec.getUserId());
        dto.setDescription(rec.getDescription());

        if (rec.getResource() != null) {
            ResourceDTO resourceDTO = new ResourceDTO();
            resourceDTO.setId(rec.getResource().getId());
            resourceDTO.setName(rec.getResource().getName());
            resourceDTO.setDescription(rec.getResource().getDescription());
            resourceDTO.setUrl(rec.getResource().getUrl());
            resourceDTO.setCompetencyId(rec.getResource().getCompetencyId());
            resourceDTO.setLevel(rec.getResource().getLevel());
            dto.setResource(resourceDTO);
        }

        return dto;
    }
}
