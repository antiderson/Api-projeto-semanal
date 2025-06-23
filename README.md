
# API Projeto Semanal

Este repositório contém uma API desenvolvida como parte do Projeto Semanal, com foco em práticas de desenvolvimento, CI/CD, conteinerização e deploy em nuvem.

## 🚀 Tecnologias Utilizadas

- Java Spring Boot
- PostgreSQL
- Docker
- Kubernetes (GKE - Google Kubernetes Engine)
- GitHub Actions (CI/CD)

---

## 📦 Instruções de Uso

### ✅ Executando Localmente

1. Clone o repositório:

```bash
git clone https://github.com/antiderson/Api-projeto-semanal.git
cd Api-projeto-semanal
```

2. Configure o banco de dados PostgreSQL localmente:

- Crie um banco chamado `db_pedidos` (ou altere no `application.properties`).

3. Execute a API:

```bash
./mvnw spring-boot:run
```

A API estará disponível em:  
📍 `http://localhost:8080`

---

### 🐳 Executando com Docker

1. Build da imagem:

```bash
docker build -t nome-da-sua-imagem .
```

2. Execute o container:

```bash
docker run -p 8080:8080 nome-da-sua-imagem
```

---

### ☸️ Deploy com Kubernetes

1. Acesse a pasta do ambiente desejado:

- `k8s/stage/` → Ambiente de homologação
- `k8s/production/` → Ambiente de produção

2. Aplique os manifests:

```bash
kubectl apply -f .
```

3. O serviço estará disponível no endpoint gerado pelo LoadBalancer do GKE.

---

## 🌎 Descrição dos Ambientes

| Ambiente    | Descrição                                | Namespace  |
|--------------|------------------------------------------|-------------|
| **Stage**    | Ambiente de homologação e testes        | `app-stage` |
| **Production**| Ambiente de produção, usuários reais  | `app-prod`  |

Cada ambiente possui seus próprios arquivos de deploy dentro da pasta `k8s/`, garantindo isolamento e controle de versões.

---

## ⚙️ CI/CD

O projeto utiliza **GitHub Actions** para automação dos processos:

- Build e push das imagens Docker para o Docker Hub
- Deploy automático no cluster Kubernetes (GKE) nos ambientes `stage` e `production` via tags ou branch `main`.

---

## ⚠️ Observações Adicionais

- 🔐 Certifique-se de configurar corretamente as `secrets` no GitHub Actions para autenticação com GCP e Docker Hub:
  - `DOCKER_USERNAME`
  - `DOCKER_PASSWORD`
  - `GCP_PROJECT`
  - `GKE_CLUSTER`
  - `GKE_ZONE`
  - `GCP_SA_KEY` (chave JSON da conta de serviço do GCP)

- 🗂️ Os manifests Kubernetes estão organizados em:
  - `k8s/stage/`
  - `k8s/production/`

- 🗄️ Banco de dados PostgreSQL é requerido e pode ser provisionado localmente, via Docker ou como serviço no GCP.

- 💡 Em caso de erros ou melhorias, contribuições são bem-vindas via pull request.

---

## 🤝 Contribuição

Sinta-se à vontade para abrir issues e pull requests.

---

## 📝 Licença

Este projeto está sob a licença MIT.
