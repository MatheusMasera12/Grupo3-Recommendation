package com.example.recommendation.dtos;

import com.example.recommendation.model.ResourceLevel;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

@Data
public class AssessmentTriggerDTO {

    @Schema(description = "ID do usuário avaliado", example = "42")
    private Long userId;

    @Schema(description = "ID da competência avaliada", example = "3")
    private Long competencyId;

    @Schema(description = "Nível atingido pelo usuário", example = "INTERMEDIATE")
    private ResourceLevel level;
}
