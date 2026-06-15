package com.example.recommendation.client;

import com.example.recommendation.dtos.UserProfileDTO;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name = "auth-service", url = "${auth.service.url}")
public interface AuthServiceClient {

    @GetMapping("/auth/users/{id}")
    UserProfileDTO getUserProfile(@PathVariable("id") Long id);
}
