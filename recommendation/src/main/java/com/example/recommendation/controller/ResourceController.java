package com.example.recommendation.controller;

import com.example.recommendation.dtos.ResourceDTO;
import com.example.recommendation.service.ResourceService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/resources")
@Tag(name = "Catálogo de Recursos", description = "CRUD completo para gerenciamento dos recursos recomendáveis")
public class ResourceController {

    private final ResourceService resourceService;

    public ResourceController(ResourceService resourceService) {
        this.resourceService = resourceService;
    }

    @PostMapping
    @Operation(summary = "Criar recurso", description = "Cadastra un novo recurso no catálogo")
    public ResponseEntity<ResourceDTO> createResource(@Valid @RequestBody ResourceDTO dto) {
        ResourceDTO savedResource = resourceService.createResource(dto);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedResource);
    }

    @GetMapping
    @Operation(summary = "Listar todos os recursos", description = "Retorna os recursos cadastrados com paginação (padrão: 20 por página)")
    public ResponseEntity<Page<ResourceDTO>> getAllResources(
            @PageableDefault(size = 20) Pageable pageable) {
        return ResponseEntity.ok(resourceService.getAllResources(pageable));
    }

    @GetMapping("/{id}")
    @Operation(summary = "Buscar recurso por ID", description = "Retorna os detalhes de um recurso específico baseado no ID")
    public ResponseEntity<ResourceDTO> getResourceById(@PathVariable Long id) {
        ResourceDTO resource = resourceService.getResourceById(id);
        return ResponseEntity.ok(resource);
    }

    @PutMapping("/{id}")
    @Operation(summary = "Atualizar recurso", description = "Edita os dados de um recurso existente no catálogo")
    public ResponseEntity<ResourceDTO> updateResource(@PathVariable Long id, @Valid @RequestBody ResourceDTO dto) {
        ResourceDTO updatedResource = resourceService.updateResource(id, dto);
        return ResponseEntity.ok(updatedResource);
    }

    @DeleteMapping("/{id}")
    @Operation(summary = "Remover recurso", description = "Deleta um recurso específico do catálogo pelo ID")
    public ResponseEntity<Void> deleteResource(@PathVariable Long id) {
        resourceService.deleteResource(id);
        return ResponseEntity.noContent().build();
    }
}