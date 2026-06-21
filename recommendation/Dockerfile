# Estágio 1: Build (Compila o código usando o Maven)
FROM maven:3.9.6-eclipse-temurin-21-alpine AS build
WORKDIR /app
# Copia o arquivo de dependências e baixa tudo
COPY pom.xml .
RUN mvn dependency:go-offline -B
# Copia o código fonte e gera o arquivo .jar
COPY src ./src
RUN mvn clean package -DskipTests

# Estágio 2: Run (Roda o .jar gerado em uma imagem mais leve)
FROM eclipse-temurin:21-jre-alpine
WORKDIR /app
# Pega o .jar gerado no passo anterior e joga para essa imagem final
COPY --from=build /app/target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]