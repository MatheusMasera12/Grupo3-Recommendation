package com.example.recommendation.Exception;

import org.junit.jupiter.api.Test;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.web.bind.MethodArgumentNotValidException;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

class GlobalExceptionHandlerTest {

    private final GlobalExceptionHandler handler = new GlobalExceptionHandler();

    @Test
    void handleResourceNotFound_deveRetornar404ComMensagemDaExcecao() {
        ResourceNotFoundException ex = new ResourceNotFoundException("Recurso não encontrado com o ID: 1");

        ResponseEntity<ApiError> response = handler.handleResourceNotFound(ex);

        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.NOT_FOUND);
        assertThat(response.getBody()).isNotNull();
        assertThat(response.getBody().getStatus()).isEqualTo(404);
        assertThat(response.getBody().getMessage()).isEqualTo("Recurso não encontrado com o ID: 1");
    }

    @Test
    void handleInvalidToken_deveRetornar401ComMensagemDaExcecao() {
        InvalidTokenException ex = new InvalidTokenException("Token inválido: subject não é um ID numérico");

        ResponseEntity<ApiError> response = handler.handleInvalidToken(ex);

        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.UNAUTHORIZED);
        assertThat(response.getBody()).isNotNull();
        assertThat(response.getBody().getMessage()).isEqualTo("Token inválido: subject não é um ID numérico");
    }

    @Test
    void handleAccessDenied_deveRetornar403ComMensagemPadrao() {
        AccessDeniedException ex = new AccessDeniedException("não importa o texto original");

        ResponseEntity<ApiError> response = handler.handleAccessDenied(ex);

        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.FORBIDDEN);
        assertThat(response.getBody()).isNotNull();
        assertThat(response.getBody().getMessage()).isEqualTo("Acesso negado");
    }

    @Test
    void handleValidation_deveRetornar400ComListaDeErrosPorCampo() {
        MethodArgumentNotValidException ex = mock(MethodArgumentNotValidException.class);
        org.springframework.validation.BindingResult bindingResult = mock(org.springframework.validation.BindingResult.class);
        org.springframework.validation.FieldError fieldError =
                new org.springframework.validation.FieldError("assessmentTriggerDTO", "competencyId", "must not be null");

        when(ex.getBindingResult()).thenReturn(bindingResult);
        when(bindingResult.getFieldErrors()).thenReturn(java.util.List.of(fieldError));

        ResponseEntity<ApiError> response = handler.handleValidation(ex);

        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.BAD_REQUEST);
        assertThat(response.getBody()).isNotNull();
        assertThat(response.getBody().getErrors()).containsExactly("competencyId: must not be null");
    }

    @Test
    void handleRuntime_deveRetornar500ComMensagemGenerica() {
        RuntimeException ex = new RuntimeException("falha inesperada interna");

        ResponseEntity<ApiError> response = handler.handleRuntime(ex);

        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.INTERNAL_SERVER_ERROR);
        assertThat(response.getBody()).isNotNull();
        assertThat(response.getBody().getMessage()).isEqualTo("Erro interno no servidor");
    }

    @Test
    void handleGeneric_deveRetornar500ComMensagemGenerica() {
        Exception ex = new Exception("erro totalmente inesperado");

        ResponseEntity<ApiError> response = handler.handleGeneric(ex);

        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.INTERNAL_SERVER_ERROR);
        assertThat(response.getBody()).isNotNull();
        assertThat(response.getBody().getMessage()).isEqualTo("Erro interno no servidor");
    }
}
