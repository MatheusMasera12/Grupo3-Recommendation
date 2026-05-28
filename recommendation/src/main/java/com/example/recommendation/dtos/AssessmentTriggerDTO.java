import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

@Data
public class AssessmentTriggerDTO {
    @Schema(description = "ID do usuário idoso")
    private Long userId;
    
    @Schema(description = "ID da competência")
    private Long competencyId;
}