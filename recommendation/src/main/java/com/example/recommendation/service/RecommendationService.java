package com.example.recommendation.service;

import com.example.recommendation.dtos.AssessmentTriggerDTO;
import com.example.recommendation.dtos.RecommendationDTO;
import com.example.recommendation.dtos.ResourceDTO;
import com.example.recommendation.model.Recommendation;
import com.example.recommendation.model.Resource;
import com.example.recommendation.repository.RecommendationRepository;
import com.example.recommendation.repository.ResourceRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class RecommendationService {

    private final RecommendationRepository recommendationRepository;
    private final ResourceRepository resourceRepository;

    public RecommendationService(RecommendationRepository recommendationRepository,
                                 ResourceRepository resourceRepository) {
        this.recommendationRepository = recommendationRepository;
        this.resourceRepository = resourceRepository;
    }

    public void generateRecommendation(AssessmentTriggerDTO trigger) {
        List<Resource> resources = resourceRepository.findByCompetencyId(trigger.getCompetencyId());

        if (resources.isEmpty()) {
            throw new RuntimeException("Nenhum recurso encontrado para a competência ID: " 
                + trigger.getCompetencyId());
        }

        List<Recommendation> recommendations = resources.stream().map(resource -> {
            Recommendation rec = new Recommendation();
            rec.setUserId(trigger.getUserId());
            rec.setResource(resource);
            rec.setDescription("Recomendado com base na competência ID: " 
                + trigger.getCompetencyId());
            return rec;
        }).collect(Collectors.toList());

        recommendationRepository.saveAll(recommendations);
    }

    public List<RecommendationDTO> getUserRecommendations(Long userId) {
        return recommendationRepository.findByUserId(userId)
                .stream()
                .map(this::toDTO)
                .collect(Collectors.toList());
    }

    public void deleteRecommendation(Long id) {
        recommendationRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Recomendação não encontrada com ID: " + id));
        recommendationRepository.deleteById(id);
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
            dto.setResource(resourceDTO);
        }

        return dto;
    }
}