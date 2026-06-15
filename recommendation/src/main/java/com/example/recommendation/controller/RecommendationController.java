package com.example.recommendation.controller;

import com.example.recommendation.dtos.AssessmentTriggerDTO;
import com.example.recommendation.dtos.RecommendationDTO;
import com.example.recommendation.service.RecommendationService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
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
    @ApiResponses({
        @ApiResponse(responseCode = "201", description = "Recomendações geradas"),
        @ApiResponse(responseCode = "400", description = "Dados inválidos"),
        @ApiResponse(responseCode = "401", description = "Token inválido ou ausente"),
        @ApiResponse(responseCode = "404", description = "Competência sem recursos")
    })
    public ResponseEntity<Void> generateRecommendation(@RequestBody AssessmentTriggerDTO trigger) {
        recommendationService.generateRecommendation(trigger);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @GetMapping("/user/{userId}")
    @Operation(summary = "Listar por usuário", description = "Retorna todas as recomendações vinculadas a um ID de usuário")
    @ApiResponses({
        @ApiResponse(responseCode = "200", description = "Lista de recomendações"),
        @ApiResponse(responseCode = "401", description = "Token inválido ou ausente")
    })
    public ResponseEntity<List<RecommendationDTO>> getUserRecommendations(
            @PathVariable Long userId,
            @PageableDefault(size = 20) Pageable pageable) {
        return ResponseEntity.ok(recommendationService.getUserRecommendations(userId, pageable));
    }

    @DeleteMapping("/{id}")
    @Operation(summary = "Remover recomendação", description = "Deleta uma recomendação específica pelo ID")
    @ApiResponses({
        @ApiResponse(responseCode = "204", description = "Removido com sucesso"),
        @ApiResponse(responseCode = "401", description = "Token inválido ou ausente"),
        @ApiResponse(responseCode = "404", description = "Recomendação não encontrada")
    })
    public ResponseEntity<Void> deleteRecommendation(@PathVariable Long id) {
        recommendationService.deleteRecommendation(id);
        return ResponseEntity.noContent().build();
    }
}
