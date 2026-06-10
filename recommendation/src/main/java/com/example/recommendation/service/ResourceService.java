package com.example.recommendation.service;

import com.example.recommendation.dtos.ResourceDTO;
import com.example.recommendation.model.Resource;
import com.example.recommendation.repository.ResourceRepository;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ResourceService {
    
    private final ResourceRepository resourceRepository;

    public ResourceService(ResourceRepository resourceRepository) {
        this.resourceRepository = resourceRepository;
    }

    public ResourceDTO createResource(ResourceDTO dto) {
        Resource resource = new Resource();
        resource.setName(dto.getName());
        resource.setDescription(dto.getDescription());
        resource.setUrl(dto.getUrl());
        resource.setCompetencyId(dto.getCompetencyId());

        Resource savedResource = resourceRepository.save(resource);
        dto.setId(savedResource.getId());
        return dto;
    }

    public List<ResourceDTO> getAllResources() {
        List<Resource> resources = resourceRepository.findAll();

        return resources.stream().map(entity -> {
            ResourceDTO dto = new ResourceDTO();
            dto.setId(entity.getId());
            dto.setName(entity.getName());
            dto.setDescription(entity.getDescription());
            dto.setUrl(entity.getUrl());
            dto.setCompetencyId(entity.getCompetencyId());
            return dto;
        }).collect(Collectors.toList());
    }

    public void deleteResource(Long id) {
        resourceRepository.deleteById(id);
    }

    public ResourceDTO getResourceById(Long id) {
        Resource resource = resourceRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Recurso não encontrado com o ID: " + id));

        ResourceDTO dto = new ResourceDTO();
        dto.setId(resource.getId());
        dto.setName(resource.getName());
        dto.setDescription(resource.getDescription());
        dto.setUrl(resource.getUrl());
        dto.setCompetencyId(resource.getCompetencyId());
        
        return dto;
    }

    public ResourceDTO updateResource(Long id, ResourceDTO dto) {
        Resource resource = resourceRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Recurso não encontrado com o ID: " + id));

        resource.setName(dto.getName());
        resource.setDescription(dto.getDescription());
        resource.setUrl(dto.getUrl());
        resource.setCompetencyId(dto.getCompetencyId());

        Resource updatedResource = resourceRepository.save(resource);

        dto.setId(updatedResource.getId());
        return dto;
    }    
}
