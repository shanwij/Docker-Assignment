terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "=2.46.0"
    }
  }
}

# Configure the Microsoft Azure Provider
provider "azurerm" {
  features {}
}

# Create a resource group
resource "azurerm_resource_group" "ccrg" {
  name     = "assignmentResourceGroup"
  location = "eastus"
}

#create acr
resource "azurerm_container_registry" "acr" {
  name                = "shanwij"
  resource_group_name = azurerm_resource_group.ccrg.name
  location            = azurerm_resource_group.ccrg.location
  sku                 = "Basic"
  admin_enabled       = false
}

#create AKS
resource "azurerm_kubernetes_cluster" "aks" {
  name                = "assignmentAKS"
  location            = azurerm_resource_group.ccrg.location
  resource_group_name = azurerm_resource_group.ccrg.name
  dns_prefix          = "assignmentaks"

  default_node_pool {
    name       = "default"
    node_count = 1
    vm_size    = "Standard_D2_v2"
  }

  identity {
    type = "SystemAssigned"
  }

  role_based_access_control {
    enabled = true
  }
}

resource "azurerm_role_assignment" "AKS_TO_ACR" {
    scope = azurerm_container_registry.acr.id
    role_definition_name = "AcrPull"
    principal_id = azurerm_kubernetes_cluster.aks.kubelet_identity[0].object_id
  
}
output "client_certificate" {
  value = azurerm_kubernetes_cluster.aks.kube_config.0.client_certificate
}

output "kube_config" {
  value = azurerm_kubernetes_cluster.aks.kube_config_raw

  sensitive = true
}