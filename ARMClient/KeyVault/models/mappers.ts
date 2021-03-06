/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import {CloudErrorMapper, BaseResourceMapper } from "ms-rest-azure-js";

export const CloudError = CloudErrorMapper;
export const BaseResource = BaseResourceMapper;

export const Sku = {
  serializedName: "Sku",
  type: {
    name: "Composite",
    className: "Sku",
    modelProperties: {
      family: {
        required: true,
        isConstant: true,
        serializedName: "family",
        defaultValue: 'A',
        type: {
          name: "String"
        }
      },
      name: {
        required: true,
        serializedName: "name",
        type: {
          name: "Enum",
          allowedValues: [
            "standard",
            "premium"
          ]
        }
      }
    }
  }
};

export const Permissions = {
  serializedName: "Permissions",
  type: {
    name: "Composite",
    className: "Permissions",
    modelProperties: {
      keys: {
        serializedName: "keys",
        type: {
          name: "Sequence",
          element: {
            serializedName: "KeyPermissionsElementType",
            type: {
              name: "String"
            }
          }
        }
      },
      secrets: {
        serializedName: "secrets",
        type: {
          name: "Sequence",
          element: {
            serializedName: "SecretPermissionsElementType",
            type: {
              name: "String"
            }
          }
        }
      },
      certificates: {
        serializedName: "certificates",
        type: {
          name: "Sequence",
          element: {
            serializedName: "CertificatePermissionsElementType",
            type: {
              name: "String"
            }
          }
        }
      },
      storage: {
        serializedName: "storage",
        type: {
          name: "Sequence",
          element: {
            serializedName: "StoragePermissionsElementType",
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const AccessPolicyEntry = {
  serializedName: "AccessPolicyEntry",
  type: {
    name: "Composite",
    className: "AccessPolicyEntry",
    modelProperties: {
      tenantId: {
        required: true,
        serializedName: "tenantId",
        type: {
          name: "Uuid"
        }
      },
      objectId: {
        required: true,
        serializedName: "objectId",
        type: {
          name: "String"
        }
      },
      applicationId: {
        serializedName: "applicationId",
        type: {
          name: "Uuid"
        }
      },
      permissions: {
        required: true,
        serializedName: "permissions",
        type: {
          name: "Composite",
          className: "Permissions"
        }
      }
    }
  }
};

export const VaultProperties = {
  serializedName: "VaultProperties",
  type: {
    name: "Composite",
    className: "VaultProperties",
    modelProperties: {
      tenantId: {
        required: true,
        serializedName: "tenantId",
        type: {
          name: "Uuid"
        }
      },
      sku: {
        required: true,
        serializedName: "sku",
        defaultValue: {},
        type: {
          name: "Composite",
          className: "Sku"
        }
      },
      accessPolicies: {
        serializedName: "accessPolicies",
        type: {
          name: "Sequence",
          element: {
            serializedName: "AccessPolicyEntryElementType",
            type: {
              name: "Composite",
              className: "AccessPolicyEntry"
            }
          }
        }
      },
      vaultUri: {
        serializedName: "vaultUri",
        type: {
          name: "String"
        }
      },
      enabledForDeployment: {
        serializedName: "enabledForDeployment",
        type: {
          name: "Boolean"
        }
      },
      enabledForDiskEncryption: {
        serializedName: "enabledForDiskEncryption",
        type: {
          name: "Boolean"
        }
      },
      enabledForTemplateDeployment: {
        serializedName: "enabledForTemplateDeployment",
        type: {
          name: "Boolean"
        }
      },
      enableSoftDelete: {
        serializedName: "enableSoftDelete",
        type: {
          name: "Boolean"
        }
      },
      createMode: {
        serializedName: "createMode",
        type: {
          name: "Enum",
          allowedValues: [
            "recover",
            "default"
          ]
        }
      },
      enablePurgeProtection: {
        serializedName: "enablePurgeProtection",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const VaultPatchProperties = {
  serializedName: "VaultPatchProperties",
  type: {
    name: "Composite",
    className: "VaultPatchProperties",
    modelProperties: {
      tenantId: {
        serializedName: "tenantId",
        type: {
          name: "Uuid"
        }
      },
      sku: {
        serializedName: "sku",
        type: {
          name: "Composite",
          className: "Sku"
        }
      },
      accessPolicies: {
        serializedName: "accessPolicies",
        type: {
          name: "Sequence",
          element: {
            serializedName: "AccessPolicyEntryElementType",
            type: {
              name: "Composite",
              className: "AccessPolicyEntry"
            }
          }
        }
      },
      enabledForDeployment: {
        serializedName: "enabledForDeployment",
        type: {
          name: "Boolean"
        }
      },
      enabledForDiskEncryption: {
        serializedName: "enabledForDiskEncryption",
        type: {
          name: "Boolean"
        }
      },
      enabledForTemplateDeployment: {
        serializedName: "enabledForTemplateDeployment",
        type: {
          name: "Boolean"
        }
      },
      enableSoftDelete: {
        serializedName: "enableSoftDelete",
        type: {
          name: "Boolean"
        }
      },
      createMode: {
        serializedName: "createMode",
        type: {
          name: "Enum",
          allowedValues: [
            "recover",
            "default"
          ]
        }
      },
      enablePurgeProtection: {
        serializedName: "enablePurgeProtection",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const VaultAccessPolicyProperties = {
  serializedName: "VaultAccessPolicyProperties",
  type: {
    name: "Composite",
    className: "VaultAccessPolicyProperties",
    modelProperties: {
      accessPolicies: {
        required: true,
        serializedName: "accessPolicies",
        type: {
          name: "Sequence",
          element: {
            serializedName: "AccessPolicyEntryElementType",
            type: {
              name: "Composite",
              className: "AccessPolicyEntry"
            }
          }
        }
      }
    }
  }
};

export const DeletedVaultProperties = {
  serializedName: "DeletedVaultProperties",
  type: {
    name: "Composite",
    className: "DeletedVaultProperties",
    modelProperties: {
      vaultId: {
        readOnly: true,
        serializedName: "vaultId",
        type: {
          name: "String"
        }
      },
      location: {
        readOnly: true,
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      deletionDate: {
        readOnly: true,
        serializedName: "deletionDate",
        type: {
          name: "DateTime"
        }
      },
      scheduledPurgeDate: {
        readOnly: true,
        serializedName: "scheduledPurgeDate",
        type: {
          name: "DateTime"
        }
      },
      tags: {
        readOnly: true,
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: {
            serializedName: "stringElementType",
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const VaultCreateOrUpdateParameters = {
  serializedName: "VaultCreateOrUpdateParameters",
  type: {
    name: "Composite",
    className: "VaultCreateOrUpdateParameters",
    modelProperties: {
      location: {
        required: true,
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: {
            serializedName: "stringElementType",
            type: {
              name: "String"
            }
          }
        }
      },
      properties: {
        required: true,
        serializedName: "properties",
        defaultValue: {},
        type: {
          name: "Composite",
          className: "VaultProperties"
        }
      }
    }
  }
};

export const VaultPatchParameters = {
  serializedName: "VaultPatchParameters",
  type: {
    name: "Composite",
    className: "VaultPatchParameters",
    modelProperties: {
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: {
            serializedName: "stringElementType",
            type: {
              name: "String"
            }
          }
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "VaultPatchProperties"
        }
      }
    }
  }
};

export const VaultAccessPolicyParameters = {
  serializedName: "VaultAccessPolicyParameters",
  type: {
    name: "Composite",
    className: "VaultAccessPolicyParameters",
    modelProperties: {
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      name: {
        readOnly: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      type: {
        readOnly: true,
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      location: {
        readOnly: true,
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      properties: {
        required: true,
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "VaultAccessPolicyProperties"
        }
      }
    }
  }
};

export const Resource = {
  serializedName: "Resource",
  type: {
    name: "Composite",
    className: "Resource",
    modelProperties: {
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      name: {
        readOnly: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      type: {
        readOnly: true,
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      location: {
        required: true,
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: {
            serializedName: "stringElementType",
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const Vault = {
  serializedName: "Vault",
  type: {
    name: "Composite",
    className: "Vault",
    modelProperties: {
      ...Resource.type.modelProperties,
      properties: {
        required: true,
        serializedName: "properties",
        defaultValue: {},
        type: {
          name: "Composite",
          className: "VaultProperties"
        }
      }
    }
  }
};

export const DeletedVault = {
  serializedName: "DeletedVault",
  type: {
    name: "Composite",
    className: "DeletedVault",
    modelProperties: {
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      name: {
        readOnly: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      type: {
        readOnly: true,
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "DeletedVaultProperties"
        }
      }
    }
  }
};

export const VaultCheckNameAvailabilityParameters = {
  serializedName: "VaultCheckNameAvailabilityParameters",
  type: {
    name: "Composite",
    className: "VaultCheckNameAvailabilityParameters",
    modelProperties: {
      name: {
        required: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      type: {
        required: true,
        isConstant: true,
        serializedName: "type",
        defaultValue: 'Microsoft.KeyVault/vaults',
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CheckNameAvailabilityResult = {
  serializedName: "CheckNameAvailabilityResult",
  type: {
    name: "Composite",
    className: "CheckNameAvailabilityResult",
    modelProperties: {
      nameAvailable: {
        readOnly: true,
        serializedName: "nameAvailable",
        type: {
          name: "Boolean"
        }
      },
      reason: {
        readOnly: true,
        serializedName: "reason",
        type: {
          name: "Enum",
          allowedValues: [
            "AccountNameInvalid",
            "AlreadyExists"
          ]
        }
      },
      message: {
        readOnly: true,
        serializedName: "message",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OperationDisplay = {
  serializedName: "Operation_display",
  type: {
    name: "Composite",
    className: "OperationDisplay",
    modelProperties: {
      provider: {
        serializedName: "provider",
        type: {
          name: "String"
        }
      },
      resource: {
        serializedName: "resource",
        type: {
          name: "String"
        }
      },
      operation: {
        serializedName: "operation",
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const LogSpecification = {
  serializedName: "LogSpecification",
  type: {
    name: "Composite",
    className: "LogSpecification",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      displayName: {
        serializedName: "displayName",
        type: {
          name: "String"
        }
      },
      blobDuration: {
        serializedName: "blobDuration",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ServiceSpecification = {
  serializedName: "ServiceSpecification",
  type: {
    name: "Composite",
    className: "ServiceSpecification",
    modelProperties: {
      logSpecifications: {
        serializedName: "logSpecifications",
        type: {
          name: "Sequence",
          element: {
            serializedName: "LogSpecificationElementType",
            type: {
              name: "Composite",
              className: "LogSpecification"
            }
          }
        }
      }
    }
  }
};

export const Operation = {
  serializedName: "Operation",
  type: {
    name: "Composite",
    className: "Operation",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      display: {
        serializedName: "display",
        type: {
          name: "Composite",
          className: "OperationDisplay"
        }
      },
      origin: {
        serializedName: "origin",
        type: {
          name: "String"
        }
      },
      serviceSpecification: {
        serializedName: "properties.serviceSpecification",
        type: {
          name: "Composite",
          className: "ServiceSpecification"
        }
      }
    }
  }
};

export const VaultsListByResourceGroupOptionalParams = {
  serializedName: "ListByResourceGroupOptions",
  type: {
    name: "Composite",
    className: "VaultsListByResourceGroupOptionalParams",
    modelProperties: {
      top: {
        serializedName: "$top",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const VaultsListBySubscriptionOptionalParams = {
  serializedName: "ListBySubscriptionOptions",
  type: {
    name: "Composite",
    className: "VaultsListBySubscriptionOptionalParams",
    modelProperties: {
      top: {
        serializedName: "$top",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const VaultsListOptionalParams = {
  serializedName: "ListOptions",
  type: {
    name: "Composite",
    className: "VaultsListOptionalParams",
    modelProperties: {
      top: {
        serializedName: "$top",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const VaultListResult = {
  serializedName: "VaultListResult",
  type: {
    name: "Composite",
    className: "VaultListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            serializedName: "VaultElementType",
            type: {
              name: "Composite",
              className: "Vault"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DeletedVaultListResult = {
  serializedName: "DeletedVaultListResult",
  type: {
    name: "Composite",
    className: "DeletedVaultListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            serializedName: "DeletedVaultElementType",
            type: {
              name: "Composite",
              className: "DeletedVault"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ResourceListResult = {
  serializedName: "ResourceListResult",
  type: {
    name: "Composite",
    className: "ResourceListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            serializedName: "ResourceElementType",
            type: {
              name: "Composite",
              className: "Resource"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OperationListResult = {
  serializedName: "OperationListResult",
  type: {
    name: "Composite",
    className: "OperationListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            serializedName: "OperationElementType",
            type: {
              name: "Composite",
              className: "Operation"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};
