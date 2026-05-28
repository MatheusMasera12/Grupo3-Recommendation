package com.example.recommendation.dtos;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

@Data
public class ResourceDTO {
    
    @Schema(description = "ID único do recurso (Gerado automaticamente)", accessMode = Schema.AccessMode.READ_ONLY)
    private Long id;
    
    @Schema(description = "Nome do recurso")
    private String name;
    
    @Schema(description = "Descrição do recurso")
    private String description;
    
    @Schema(description = "Link para algum conteúdo", requiredMode = Schema.RequiredMode.NOT_REQUIRED)
    private String url;
    
    @Schema(description = "ID da competência")
    private Long competencyId;
}