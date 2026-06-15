package com.example.recommendation.controller;

import com.example.recommendation.dtos.AssessmentTriggerDTO;
import com.example.recommendation.dtos.RecommendationDTO;
import com.example.recommendation.service.RecommendationService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/recommendations")
@Tag(name = "Recomendações", description = "Geração, consulta e remoção de recomendações")
public class RecommendationController {

    private final RecommendationService recommendationService;

    public RecommendationController(RecommendationService recommendationService) {
        this.recommendationService = recommendationService;
    }

    @PostMapping("/evaluate")
    @Operation(summary = "Acionar recomendação", description = "Recebe dados do serviço de avaliação e gera uma recomendação")
    public ResponseEntity<Void> generateRecommendation(@RequestBody AssessmentTriggerDTO trigger) {
        recommendationService.generateRecommendation(trigger);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @GetMapping("/user/{userId}")
    @Operation(summary = "Listar por usuário", description = "Retorna todas as recomendações vinculadas a um ID de usuário")
    public ResponseEntity<List<RecommendationDTO>> getUserRecommendations(@PathVariable Long userId) {
        return ResponseEntity.ok(recommendationService.getUserRecommendations(userId));
    }

    @DeleteMapping("/{id}")
    @Operation(summary = "Remover recomendação", description = "Deleta uma recomendação específica pelo ID")
    public ResponseEntity<Void> deleteRecommendation(@PathVariable Long id) {
        recommendationService.deleteRecommendation(id);
        return ResponseEntity.noContent().build();
    }
}
