variable "project_id" {
  description = "ID do projeto GCP"
  type        = string
}

variable "region" {
  description = "Região do cluster"
  type        = string
}

variable "cluster_name" {
  description = "Nome do cluster GKE existente"
  type        = string
}

variable "namespace" {
  description = "Nome da namespace a criar"
  type        = string
}
