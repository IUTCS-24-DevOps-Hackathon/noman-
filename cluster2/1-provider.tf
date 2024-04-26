# https://registry.terraform.io/providers/hashicorp/google/latest/docs
provider "google" {
  project = "k8s-staging-418429"
  region  = "us-central1"
}

# https://www.terraform.io/language/settings/backends/gcs
terraform {
  backend "gcs" {
    bucket = "devops_bucket_shreshto"
    prefix = "terraform/state"
  }
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "~> 3.1"
    }
  }
}
