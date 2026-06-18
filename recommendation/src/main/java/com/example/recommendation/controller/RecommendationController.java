package com.example.recommendation.controller;

import com.example.recommendation.dtos.AssessmentTriggerDTO;
import com.example.recommendation.dtos.RecommendationDTO;
import com.example.recommendation.exception.InvalidTokenException;
import com.example.recommendation.service.RecommendationService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.jwt.Jwt;
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
    public ResponseEntity<Void> generateRecommendation(@Valid @RequestBody AssessmentTriggerDTO trigger) {
        recommendationService.generateRecommendation(trigger);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @GetMapping("/user/{userId}")
    @Operation(summary = "Listar por usuário", description = "Retorna as recomendações do usuário. USER só pode consultar o próprio ID; ADMIN pode consultar qualquer um.")
    @ApiResponses({
        @ApiResponse(responseCode = "200", description = "Lista de recomendações"),
        @ApiResponse(responseCode = "401", description = "Token inválido ou ausente"),
        @ApiResponse(responseCode = "403", description = "Sem permissão para consultar este usuário")
    })
    public ResponseEntity<Page<RecommendationDTO>> getUserRecommendations(
            @PathVariable Long userId,
            @PageableDefault(size = 20) Pageable pageable,
            @AuthenticationPrincipal Jwt jwt) {
        Long callerUserId = extractUserId(jwt);
        boolean isAdmin = isAdmin(jwt);
        if (!isAdmin && !callerUserId.equals(userId)) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
        }
        return ResponseEntity.ok(recommendationService.getUserRecommendations(userId, pageable));
    }

    @DeleteMapping("/{id}")
    @Operation(summary = "Remover recomendação", description = "Deleta uma recomendação. USER só pode deletar as próprias; ADMIN pode deletar qualquer uma.")
    @ApiResponses({
        @ApiResponse(responseCode = "204", description = "Removido com sucesso"),
        @ApiResponse(responseCode = "401", description = "Token inválido ou ausente"),
        @ApiResponse(responseCode = "403", description = "Sem permissão para remover esta recomendação"),
        @ApiResponse(responseCode = "404", description = "Recomendação não encontrada")
    })
    public ResponseEntity<Void> deleteRecommendation(
            @PathVariable Long id,
            @AuthenticationPrincipal Jwt jwt) {
        Long callerUserId = extractUserId(jwt);
        recommendationService.deleteRecommendation(id, callerUserId, isAdmin(jwt));
        return ResponseEntity.noContent().build();
    }

    private Long extractUserId(Jwt jwt) {
        try {
            return Long.parseLong(jwt.getSubject());
        } catch (NumberFormatException e) {
            throw new InvalidTokenException("Token inválido: subject não é um ID numérico");
        }
    }

    private boolean isAdmin(Jwt jwt) {
        List<String> roles = jwt.getClaimAsStringList("role");
        return roles != null && roles.contains("ADMIN");
    }
}
