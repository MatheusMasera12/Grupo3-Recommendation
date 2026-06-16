package com.example.recommendation.service;

import com.example.recommendation.dtos.AssessmentTriggerDTO;
import com.example.recommendation.dtos.RecommendationDTO;
import com.example.recommendation.dtos.ResourceDTO;
import com.example.recommendation.exception.ResourceNotFoundException;
import com.example.recommendation.model.Recommendation;
import com.example.recommendation.model.Resource;
import com.example.recommendation.repository.RecommendationRepository;
import com.example.recommendation.repository.ResourceRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Slf4j
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
        log.info("Iniciando geração de recomendações para o usuário ID: {}, competência ID: {}, nível: {}", 
                trigger.getUserId(), trigger.getCompetencyId(), trigger.getLevel());
        
        long startTime = System.currentTimeMillis();

        List<Resource> resources = resourceRepository.findByCompetencyIdAndLevel(
                trigger.getCompetencyId(), trigger.getLevel());

        if (resources.isEmpty()) {
            log.warn("Nenhum recurso cadastrado para a competência ID: {} e nível: {}", 
                    trigger.getCompetencyId(), trigger.getLevel());
            throw new ResourceNotFoundException("Nenhum recurso encontrado para a competência ID: "
                + trigger.getCompetencyId() + " e nível: " + trigger.getLevel());
        }

        List<Recommendation> recommendations = new ArrayList<>();
        for (Resource resource : resources) {
            boolean exists = recommendationRepository.existsByUserIdAndResource_Id(
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
            log.info("Salvas {} novas recomendações para o usuário ID: {} e limpo cache", 
                    recommendations.size(), trigger.getUserId());
        } else {
            log.info("Nenhuma nova recomendação para salvar (recomendações já existentes) para o usuário ID: {}", 
                    trigger.getUserId());
        }

        long duration = System.currentTimeMillis() - startTime;
        log.info("Tempo de execução da geração de recomendações para userId {}: {} ms", 
                trigger.getUserId(), duration);
    }

    @Cacheable(value = "recommendations", key = "#userId + ':' + #pageable.pageNumber")
    public List<RecommendationDTO> getUserRecommendations(Long userId, Pageable pageable) {
        log.info("Buscando recomendações para o usuário ID: {}, página: {}", userId, pageable.getPageNumber());
        return recommendationRepository.findByUserId(userId, pageable)
                .stream()
                .map(this::toDTO)
                .collect(Collectors.toList());
    }

    @Transactional
    public void deleteRecommendation(Long id) {
        log.info("Iniciando exclusão da recomendação ID: {}", id);
        Recommendation rec = recommendationRepository.findById(id)
                .orElseThrow(() -> {
                    log.warn("Recomendação ID: {} não encontrada para exclusão", id);
                    return new ResourceNotFoundException("Recomendação não encontrada com ID: " + id);
                });
        recommendationRepository.delete(rec);
        cacheService.evictUserCache(rec.getUserId());
        log.info("Recomendação ID: {} excluída e cache limpo para o usuário ID: {}", id, rec.getUserId());
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
