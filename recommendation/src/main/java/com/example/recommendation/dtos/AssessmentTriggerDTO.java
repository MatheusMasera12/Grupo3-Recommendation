package com.example.recommendation.dtos;

import com.example.recommendation.model.ResourceLevel;
import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
@Valid
public class AssessmentTriggerDTO {

    @NotNull
    @Schema(description = "ID do usuário avaliado", example = "42")
    private Long userId;

    @NotNull
    @Schema(description = "ID da competência avaliada", example = "3")
    private Long competencyId;

    @NotNull
    @Schema(description = "Nível atingido pelo usuário", example = "INTERMEDIATE")
    private ResourceLevel level;
}
