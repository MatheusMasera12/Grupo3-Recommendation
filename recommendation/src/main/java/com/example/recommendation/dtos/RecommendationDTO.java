package com.example.recommendation.dtos;

import com.example.recommendation.dtos.ResourceDTO;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

@Data
public class RecommendationDTO {
    
    @Schema(description = "ID único da recomendação", accessMode = Schema.AccessMode.READ_ONLY)
    private Long id;
    
    @Schema(description = "ID do usuário")
    private Long userId;
    
    @Schema(description = "Recurso que foi recomendado")
    private ResourceDTO resource;
    
    @Schema(description = "Justificativa da recomendação")
    private String description;
}