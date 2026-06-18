package com.example.recommendation;

import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
@Disabled("Requer infraestrutura: PostgreSQL (porta 5433), Redis e auth service rodando")
class RecommendationApplicationTests {

	@Test
	void contextLoads() {
	}

}
