# Build stage
FROM eclipse-temurin:17-jdk-jammy as builder

WORKDIR /app

# Copy only the files needed for dependency resolution
COPY .mvn/ .mvn
COPY mvnw .
COPY pom.xml .

# Make mvnw executable and download dependencies
RUN chmod +x mvnw && \
    ./mvnw dependency:go-offline -B

# Copy source files
COPY src ./src

# Build the application
RUN ./mvnw clean package -DskipTests

# Runtime stage
FROM eclipse-temurin:17-jre-jammy
WORKDIR /app
COPY --from=builder /app/target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]