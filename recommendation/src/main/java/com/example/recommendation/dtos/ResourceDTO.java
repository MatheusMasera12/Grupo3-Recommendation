package com.example.recommendation.dtos;

import com.example.recommendation.model.ResourceLevel;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

import jakarta.validation.constraints.NotNull;

@Data
public class ResourceDTO {

    @Schema(description = "ID único do recurso (Gerado automaticamente)", accessMode = Schema.AccessMode.READ_ONLY)
    private Long id;

    @Schema(description = "Nome do recurso", example = "Introdução ao Smartphone")
    private String name;

    @Schema(description = "Descrição detalhada", example = "Vídeo tutorial de 10 min para iniciantes")
    private String description;

    @Schema(description = "Link de acesso ao recurso", example = "https://youtube.com/...")
    private String url;

    @Schema(description = "ID da competência associada", example = "1")
    private Long competencyId;

    @NotNull
    @Schema(description = "Nível de dificuldade", example = "BEGINNER")
    private ResourceLevel level;
}
