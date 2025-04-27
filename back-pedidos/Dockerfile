# Build stage
FROM eclipse-temurin:17-jdk-jammy as builder

WORKDIR /app

COPY .mvn/ .mvn
COPY mvnw .
COPY pom.xml .

RUN chmod +x mvnw && ./mvnw dependency:go-offline -B

COPY src ./src

RUN ./mvnw clean package -DskipTests

# Runtime stage
FROM eclipse-temurin:17-jre-alpine
WORKDIR /app
COPY --from=builder /app/target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-XX:+UseContainerSupport", "-XX:MaxRAMPercentage=75.0", "-jar", "app.jar"]
