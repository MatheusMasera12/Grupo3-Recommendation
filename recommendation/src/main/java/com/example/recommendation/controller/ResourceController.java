import com.example.recommendation.dto.ResourceDTO;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;

@RestController
@RequestMapping("/api/resources")
@Tag(name = "Catálogo de Recursos", description = "CRUD completo para gerenciamento dos recursos recomendáveis")
public class ResourceController {

    @PostMapping
    @Operation(summary = "Criar recurso", description = "Cadastra un novo recurso no catálogo")
    public ResponseEntity<ResourceDTO> createResource(@RequestBody ResourceDTO dto) {
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @GetMapping
    @Operation(summary = "Listar todos os recursos", description = "Retorna uma lista com todos os recursos cadastrados")
    public ResponseEntity<List<ResourceDTO>> getAllResources() {
        return ResponseEntity.ok(Collections.emptyList());
    }

    @GetMapping("/{id}")
    @Operation(summary = "Buscar recurso por ID", description = "Retorna os detalhes de um recurso específico baseado no ID")
    public ResponseEntity<ResourceDTO> getResourceById(@PathVariable Long id) {
        return ResponseEntity.ok(new ResourceDTO());
    }

    @PutMapping("/{id}")
    @Operation(summary = "Atualizar recurso", description = "Edita os dados de um recurso existente no catálogo")
    public ResponseEntity<ResourceDTO> updateResource(@PathVariable Long id, @RequestBody ResourceDTO dto) {
        return ResponseEntity.ok(dto);
    }

    @DeleteMapping("/{id}")
    @Operation(summary = "Remover recurso", description = "Deleta um recurso específico do catálogo pelo ID")
    public ResponseEntity<Void> deleteResource(@PathVariable Long id) {
        return ResponseEntity.noContent().build();
    }
}