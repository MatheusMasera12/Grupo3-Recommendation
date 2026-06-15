package com.example.recommendation.client;

import com.example.recommendation.dtos.UserProfileDTO;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestClient;

@Component
public class AuthServiceClient {

    private final RestClient restClient;

    public AuthServiceClient(@Value("${auth.service.url}") String authServiceUrl) {
        this.restClient = RestClient.builder()
                .baseUrl(authServiceUrl)
                .build();
    }

    public UserProfileDTO getUserProfile(Long id) {
        return restClient.get()
                .uri("/auth/users/{id}", id)
                .retrieve()
                .body(UserProfileDTO.class);
    }
}
