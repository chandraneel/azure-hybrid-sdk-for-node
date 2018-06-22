/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import {CloudErrorMapper, BaseResourceMapper } from "ms-rest-azure-js";

export const CloudError = CloudErrorMapper;
export const BaseResource = BaseResourceMapper;

export const DeploymentExtendedFilter = {
  serializedName: "DeploymentExtendedFilter",
  type: {
    name: "Composite",
    className: "DeploymentExtendedFilter",
    modelProperties: {
      provisioningState: {
        serializedName: "provisioningState",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GenericResourceFilter = {
  serializedName: "GenericResourceFilter",
  type: {
    name: "Composite",
    className: "GenericResourceFilter",
    modelProperties: {
      resourceType: {
        serializedName: "resourceType",
        type: {
          name: "String"
        }
      },
      tagname: {
        serializedName: "tagname",
        type: {
          name: "String"
        }
      },
      tagvalue: {
        serializedName: "tagvalue",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ResourceGroupFilter = {
  serializedName: "ResourceGroupFilter",
  type: {
    name: "Composite",
    className: "ResourceGroupFilter",
    modelProperties: {
      tagName: {
        serializedName: "tagName",
        type: {
          name: "String"
        }
      },
      tagValue: {
        serializedName: "tagValue",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const TemplateLink = {
  serializedName: "TemplateLink",
  type: {
    name: "Composite",
    className: "TemplateLink",
    modelProperties: {
      uri: {
        required: true,
        serializedName: "uri",
        type: {
          name: "String"
        }
      },
      contentVersion: {
        serializedName: "contentVersion",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ParametersLink = {
  serializedName: "ParametersLink",
  type: {
    name: "Composite",
    className: "ParametersLink",
    modelProperties: {
      uri: {
        required: true,
        serializedName: "uri",
        type: {
          name: "String"
        }
      },
      contentVersion: {
        serializedName: "contentVersion",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DebugSetting = {
  serializedName: "DebugSetting",
  type: {
    name: "Composite",
    className: "DebugSetting",
    modelProperties: {
      detailLevel: {
        serializedName: "detailLevel",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OnErrorDeployment = {
  serializedName: "OnErrorDeployment",
  type: {
    name: "Composite",
    className: "OnErrorDeployment",
    modelProperties: {
      type: {
        serializedName: "type",
        type: {
          name: "Enum",
          allowedValues: [
            "LastSuccessful",
            "SpecificDeployment"
          ]
        }
      },
      deploymentName: {
        serializedName: "deploymentName",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DeploymentProperties = {
  serializedName: "DeploymentProperties",
  type: {
    name: "Composite",
    className: "DeploymentProperties",
    modelProperties: {
      template: {
        serializedName: "template",
        type: {
          name: "Object"
        }
      },
      templateLink: {
        serializedName: "templateLink",
        type: {
          name: "Composite",
          className: "TemplateLink"
        }
      },
      parameters: {
        serializedName: "parameters",
        type: {
          name: "Object"
        }
      },
      parametersLink: {
        serializedName: "parametersLink",
        type: {
          name: "Composite",
          className: "ParametersLink"
        }
      },
      mode: {
        required: true,
        serializedName: "mode",
        type: {
          name: "Enum",
          allowedValues: [
            "Incremental",
            "Complete"
          ]
        }
      },
      debugSetting: {
        serializedName: "debugSetting",
        type: {
          name: "Composite",
          className: "DebugSetting"
        }
      },
      onErrorDeployment: {
        serializedName: "onErrorDeployment",
        type: {
          name: "Composite",
          className: "OnErrorDeployment"
        }
      }
    }
  }
};

export const Deployment = {
  serializedName: "Deployment",
  type: {
    name: "Composite",
    className: "Deployment",
    modelProperties: {
      properties: {
        required: true,
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "DeploymentProperties"
        }
      }
    }
  }
};

export const DeploymentExportResult = {
  serializedName: "DeploymentExportResult",
  type: {
    name: "Composite",
    className: "DeploymentExportResult",
    modelProperties: {
      template: {
        serializedName: "template",
        type: {
          name: "Object"
        }
      }
    }
  }
};

export const ResourceManagementErrorWithDetails = {
  serializedName: "ResourceManagementErrorWithDetails",
  type: {
    name: "Composite",
    className: "ResourceManagementErrorWithDetails",
    modelProperties: {
      code: {
        readOnly: true,
        serializedName: "code",
        type: {
          name: "String"
        }
      },
      message: {
        readOnly: true,
        serializedName: "message",
        type: {
          name: "String"
        }
      },
      target: {
        readOnly: true,
        serializedName: "target",
        type: {
          name: "String"
        }
      },
      details: {
        readOnly: true,
        serializedName: "details",
        type: {
          name: "Sequence",
          element: {
            serializedName: "ResourceManagementErrorWithDetailsElementType",
            type: {
              name: "Composite",
              className: "ResourceManagementErrorWithDetails"
            }
          }
        }
      }
    }
  }
};

export const AliasPathType = {
  serializedName: "AliasPathType",
  type: {
    name: "Composite",
    className: "AliasPathType",
    modelProperties: {
      path: {
        serializedName: "path",
        type: {
          name: "String"
        }
      },
      apiVersions: {
        serializedName: "apiVersions",
        type: {
          name: "Sequence",
          element: {
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

export const AliasType = {
  serializedName: "AliasType",
  type: {
    name: "Composite",
    className: "AliasType",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      paths: {
        serializedName: "paths",
        type: {
          name: "Sequence",
          element: {
            serializedName: "AliasPathTypeElementType",
            type: {
              name: "Composite",
              className: "AliasPathType"
            }
          }
        }
      }
    }
  }
};

export const ProviderResourceType = {
  serializedName: "ProviderResourceType",
  type: {
    name: "Composite",
    className: "ProviderResourceType",
    modelProperties: {
      resourceType: {
        serializedName: "resourceType",
        type: {
          name: "String"
        }
      },
      locations: {
        serializedName: "locations",
        type: {
          name: "Sequence",
          element: {
            serializedName: "stringElementType",
            type: {
              name: "String"
            }
          }
        }
      },
      aliases: {
        serializedName: "aliases",
        type: {
          name: "Sequence",
          element: {
            serializedName: "AliasTypeElementType",
            type: {
              name: "Composite",
              className: "AliasType"
            }
          }
        }
      },
      apiVersions: {
        serializedName: "apiVersions",
        type: {
          name: "Sequence",
          element: {
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

export const Provider = {
  serializedName: "Provider",
  type: {
    name: "Composite",
    className: "Provider",
    modelProperties: {
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      namespace: {
        serializedName: "namespace",
        type: {
          name: "String"
        }
      },
      registrationState: {
        readOnly: true,
        serializedName: "registrationState",
        type: {
          name: "String"
        }
      },
      resourceTypes: {
        readOnly: true,
        serializedName: "resourceTypes",
        type: {
          name: "Sequence",
          element: {
            serializedName: "ProviderResourceTypeElementType",
            type: {
              name: "Composite",
              className: "ProviderResourceType"
            }
          }
        }
      }
    }
  }
};

export const BasicDependency = {
  serializedName: "BasicDependency",
  type: {
    name: "Composite",
    className: "BasicDependency",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      resourceType: {
        serializedName: "resourceType",
        type: {
          name: "String"
        }
      },
      resourceName: {
        serializedName: "resourceName",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Dependency = {
  serializedName: "Dependency",
  type: {
    name: "Composite",
    className: "Dependency",
    modelProperties: {
      dependsOn: {
        serializedName: "dependsOn",
        type: {
          name: "Sequence",
          element: {
            serializedName: "BasicDependencyElementType",
            type: {
              name: "Composite",
              className: "BasicDependency"
            }
          }
        }
      },
      id: {
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      resourceType: {
        serializedName: "resourceType",
        type: {
          name: "String"
        }
      },
      resourceName: {
        serializedName: "resourceName",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OnErrorDeploymentExtended = {
  serializedName: "OnErrorDeploymentExtended",
  type: {
    name: "Composite",
    className: "OnErrorDeploymentExtended",
    modelProperties: {
      provisioningState: {
        readOnly: true,
        serializedName: "provisioningState",
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        type: {
          name: "Enum",
          allowedValues: [
            "LastSuccessful",
            "SpecificDeployment"
          ]
        }
      },
      deploymentName: {
        serializedName: "deploymentName",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DeploymentPropertiesExtended = {
  serializedName: "DeploymentPropertiesExtended",
  type: {
    name: "Composite",
    className: "DeploymentPropertiesExtended",
    modelProperties: {
      provisioningState: {
        readOnly: true,
        serializedName: "provisioningState",
        type: {
          name: "String"
        }
      },
      correlationId: {
        readOnly: true,
        serializedName: "correlationId",
        type: {
          name: "String"
        }
      },
      timestamp: {
        readOnly: true,
        serializedName: "timestamp",
        type: {
          name: "DateTime"
        }
      },
      outputs: {
        serializedName: "outputs",
        type: {
          name: "Object"
        }
      },
      providers: {
        serializedName: "providers",
        type: {
          name: "Sequence",
          element: {
            serializedName: "ProviderElementType",
            type: {
              name: "Composite",
              className: "Provider"
            }
          }
        }
      },
      dependencies: {
        serializedName: "dependencies",
        type: {
          name: "Sequence",
          element: {
            serializedName: "DependencyElementType",
            type: {
              name: "Composite",
              className: "Dependency"
            }
          }
        }
      },
      template: {
        serializedName: "template",
        type: {
          name: "Object"
        }
      },
      templateLink: {
        serializedName: "templateLink",
        type: {
          name: "Composite",
          className: "TemplateLink"
        }
      },
      parameters: {
        serializedName: "parameters",
        type: {
          name: "Object"
        }
      },
      parametersLink: {
        serializedName: "parametersLink",
        type: {
          name: "Composite",
          className: "ParametersLink"
        }
      },
      mode: {
        serializedName: "mode",
        type: {
          name: "Enum",
          allowedValues: [
            "Incremental",
            "Complete"
          ]
        }
      },
      debugSetting: {
        serializedName: "debugSetting",
        type: {
          name: "Composite",
          className: "DebugSetting"
        }
      },
      onErrorDeployment: {
        serializedName: "onErrorDeployment",
        type: {
          name: "Composite",
          className: "OnErrorDeploymentExtended"
        }
      }
    }
  }
};

export const DeploymentValidateResult = {
  serializedName: "DeploymentValidateResult",
  type: {
    name: "Composite",
    className: "DeploymentValidateResult",
    modelProperties: {
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "ResourceManagementErrorWithDetails"
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "DeploymentPropertiesExtended"
        }
      }
    }
  }
};

export const DeploymentExtended = {
  serializedName: "DeploymentExtended",
  type: {
    name: "Composite",
    className: "DeploymentExtended",
    modelProperties: {
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      name: {
        required: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "DeploymentPropertiesExtended"
        }
      }
    }
  }
};

export const Plan = {
  serializedName: "Plan",
  type: {
    name: "Composite",
    className: "Plan",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      publisher: {
        serializedName: "publisher",
        type: {
          name: "String"
        }
      },
      product: {
        serializedName: "product",
        type: {
          name: "String"
        }
      },
      promotionCode: {
        serializedName: "promotionCode",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "version",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Sku = {
  serializedName: "Sku",
  type: {
    name: "Composite",
    className: "Sku",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      tier: {
        serializedName: "tier",
        type: {
          name: "String"
        }
      },
      size: {
        serializedName: "size",
        type: {
          name: "String"
        }
      },
      family: {
        serializedName: "family",
        type: {
          name: "String"
        }
      },
      model: {
        serializedName: "model",
        type: {
          name: "String"
        }
      },
      capacity: {
        serializedName: "capacity",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const Identity = {
  serializedName: "Identity",
  type: {
    name: "Composite",
    className: "Identity",
    modelProperties: {
      principalId: {
        readOnly: true,
        serializedName: "principalId",
        type: {
          name: "String"
        }
      },
      tenantId: {
        readOnly: true,
        serializedName: "tenantId",
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        type: {
          name: "Enum",
          allowedValues: [
            "SystemAssigned",
            "UserAssigned",
            "SystemAssigned, UserAssigned",
            "None"
          ]
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

export const GenericResource = {
  serializedName: "GenericResource",
  type: {
    name: "Composite",
    className: "GenericResource",
    modelProperties: {
      ...Resource.type.modelProperties,
      plan: {
        serializedName: "plan",
        type: {
          name: "Composite",
          className: "Plan"
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Object"
        }
      },
      kind: {
        serializedName: "kind",
        constraints: {
          Pattern: /^[-\w\._,\(\)]+$/
        },
        type: {
          name: "String"
        }
      },
      managedBy: {
        serializedName: "managedBy",
        type: {
          name: "String"
        }
      },
      sku: {
        serializedName: "sku",
        type: {
          name: "Composite",
          className: "Sku"
        }
      },
      identity: {
        serializedName: "identity",
        type: {
          name: "Composite",
          className: "Identity"
        }
      }
    }
  }
};

export const ResourceGroupProperties = {
  serializedName: "ResourceGroupProperties",
  type: {
    name: "Composite",
    className: "ResourceGroupProperties",
    modelProperties: {
      provisioningState: {
        readOnly: true,
        serializedName: "provisioningState",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ResourceGroup = {
  serializedName: "ResourceGroup",
  type: {
    name: "Composite",
    className: "ResourceGroup",
    modelProperties: {
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "ResourceGroupProperties"
        }
      },
      location: {
        required: true,
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      managedBy: {
        serializedName: "managedBy",
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

export const ResourceGroupPatchable = {
  serializedName: "ResourceGroupPatchable",
  type: {
    name: "Composite",
    className: "ResourceGroupPatchable",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "ResourceGroupProperties"
        }
      },
      managedBy: {
        serializedName: "managedBy",
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

export const ResourcesMoveInfo = {
  serializedName: "ResourcesMoveInfo",
  type: {
    name: "Composite",
    className: "ResourcesMoveInfo",
    modelProperties: {
      resources: {
        serializedName: "resources",
        type: {
          name: "Sequence",
          element: {
            serializedName: "stringElementType",
            type: {
              name: "String"
            }
          }
        }
      },
      targetResourceGroup: {
        serializedName: "targetResourceGroup",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ExportTemplateRequest = {
  serializedName: "ExportTemplateRequest",
  type: {
    name: "Composite",
    className: "ExportTemplateRequest",
    modelProperties: {
      resources: {
        serializedName: "resources",
        type: {
          name: "Sequence",
          element: {
            serializedName: "stringElementType",
            type: {
              name: "String"
            }
          }
        }
      },
      options: {
        serializedName: "options",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const TagCount = {
  serializedName: "TagCount",
  type: {
    name: "Composite",
    className: "TagCount",
    modelProperties: {
      type: {
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "value",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const TagValue = {
  serializedName: "TagValue",
  type: {
    name: "Composite",
    className: "TagValue",
    modelProperties: {
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      tagValue: {
        serializedName: "tagValue",
        type: {
          name: "String"
        }
      },
      count: {
        serializedName: "count",
        type: {
          name: "Composite",
          className: "TagCount"
        }
      }
    }
  }
};

export const TagDetails = {
  serializedName: "TagDetails",
  type: {
    name: "Composite",
    className: "TagDetails",
    modelProperties: {
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      tagName: {
        serializedName: "tagName",
        type: {
          name: "String"
        }
      },
      count: {
        serializedName: "count",
        type: {
          name: "Composite",
          className: "TagCount"
        }
      },
      values: {
        serializedName: "values",
        type: {
          name: "Sequence",
          element: {
            serializedName: "TagValueElementType",
            type: {
              name: "Composite",
              className: "TagValue"
            }
          }
        }
      }
    }
  }
};

export const TargetResource = {
  serializedName: "TargetResource",
  type: {
    name: "Composite",
    className: "TargetResource",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      resourceName: {
        serializedName: "resourceName",
        type: {
          name: "String"
        }
      },
      resourceType: {
        serializedName: "resourceType",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const HttpMessage = {
  serializedName: "HttpMessage",
  type: {
    name: "Composite",
    className: "HttpMessage",
    modelProperties: {
      content: {
        serializedName: "content",
        type: {
          name: "Object"
        }
      }
    }
  }
};

export const DeploymentOperationProperties = {
  serializedName: "DeploymentOperationProperties",
  type: {
    name: "Composite",
    className: "DeploymentOperationProperties",
    modelProperties: {
      provisioningState: {
        readOnly: true,
        serializedName: "provisioningState",
        type: {
          name: "String"
        }
      },
      timestamp: {
        readOnly: true,
        serializedName: "timestamp",
        type: {
          name: "DateTime"
        }
      },
      serviceRequestId: {
        readOnly: true,
        serializedName: "serviceRequestId",
        type: {
          name: "String"
        }
      },
      statusCode: {
        readOnly: true,
        serializedName: "statusCode",
        type: {
          name: "String"
        }
      },
      statusMessage: {
        readOnly: true,
        serializedName: "statusMessage",
        type: {
          name: "Object"
        }
      },
      targetResource: {
        readOnly: true,
        serializedName: "targetResource",
        type: {
          name: "Composite",
          className: "TargetResource"
        }
      },
      request: {
        readOnly: true,
        serializedName: "request",
        type: {
          name: "Composite",
          className: "HttpMessage"
        }
      },
      response: {
        readOnly: true,
        serializedName: "response",
        type: {
          name: "Composite",
          className: "HttpMessage"
        }
      }
    }
  }
};

export const DeploymentOperation = {
  serializedName: "DeploymentOperation",
  type: {
    name: "Composite",
    className: "DeploymentOperation",
    modelProperties: {
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      operationId: {
        readOnly: true,
        serializedName: "operationId",
        type: {
          name: "String"
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "DeploymentOperationProperties"
        }
      }
    }
  }
};

export const ResourceProviderOperationDisplayProperties = {
  serializedName: "ResourceProviderOperationDisplayProperties",
  type: {
    name: "Composite",
    className: "ResourceProviderOperationDisplayProperties",
    modelProperties: {
      publisher: {
        serializedName: "publisher",
        type: {
          name: "String"
        }
      },
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

export const SubResource = {
  serializedName: "SubResource",
  type: {
    name: "Composite",
    className: "SubResource",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ResourceGroupExportResult = {
  serializedName: "ResourceGroupExportResult",
  type: {
    name: "Composite",
    className: "ResourceGroupExportResult",
    modelProperties: {
      template: {
        serializedName: "template",
        type: {
          name: "Object"
        }
      },
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "ResourceManagementErrorWithDetails"
        }
      }
    }
  }
};

export const DeploymentsListByResourceGroupOptionalParams = {
  serializedName: "ListByResourceGroupOptions",
  type: {
    name: "Composite",
    className: "DeploymentsListByResourceGroupOptionalParams",
    modelProperties: {
      filter: {
        serializedName: "$filter",
        type: {
          name: "String"
        }
      },
      top: {
        serializedName: "$top",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const ProvidersListOptionalParams = {
  serializedName: "ListOptions",
  type: {
    name: "Composite",
    className: "ProvidersListOptionalParams",
    modelProperties: {
      top: {
        serializedName: "$top",
        type: {
          name: "Number"
        }
      },
      expand: {
        serializedName: "$expand",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ProvidersGetOptionalParams = {
  serializedName: "GetOptions",
  type: {
    name: "Composite",
    className: "ProvidersGetOptionalParams",
    modelProperties: {
      expand: {
        serializedName: "$expand",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ResourcesListByResourceGroupOptionalParams = {
  serializedName: "ListByResourceGroupOptions",
  type: {
    name: "Composite",
    className: "ResourcesListByResourceGroupOptionalParams",
    modelProperties: {
      filter: {
        serializedName: "$filter",
        type: {
          name: "String"
        }
      },
      expand: {
        serializedName: "$expand",
        type: {
          name: "String"
        }
      },
      top: {
        serializedName: "$top",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const ResourcesListOptionalParams = {
  serializedName: "ListOptions",
  type: {
    name: "Composite",
    className: "ResourcesListOptionalParams",
    modelProperties: {
      filter: {
        serializedName: "$filter",
        type: {
          name: "String"
        }
      },
      expand: {
        serializedName: "$expand",
        type: {
          name: "String"
        }
      },
      top: {
        serializedName: "$top",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const ResourceGroupsListOptionalParams = {
  serializedName: "ListOptions",
  type: {
    name: "Composite",
    className: "ResourceGroupsListOptionalParams",
    modelProperties: {
      filter: {
        serializedName: "$filter",
        type: {
          name: "String"
        }
      },
      top: {
        serializedName: "$top",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const DeploymentOperationsListOptionalParams = {
  serializedName: "ListOptions",
  type: {
    name: "Composite",
    className: "DeploymentOperationsListOptionalParams",
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

export const DeploymentListResult = {
  serializedName: "DeploymentListResult",
  type: {
    name: "Composite",
    className: "DeploymentListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            serializedName: "DeploymentExtendedElementType",
            type: {
              name: "Composite",
              className: "DeploymentExtended"
            }
          }
        }
      },
      nextLink: {
        readOnly: true,
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ProviderListResult = {
  serializedName: "ProviderListResult",
  type: {
    name: "Composite",
    className: "ProviderListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            serializedName: "ProviderElementType",
            type: {
              name: "Composite",
              className: "Provider"
            }
          }
        }
      },
      nextLink: {
        readOnly: true,
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
            serializedName: "GenericResourceElementType",
            type: {
              name: "Composite",
              className: "GenericResource"
            }
          }
        }
      },
      nextLink: {
        readOnly: true,
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ResourceGroupListResult = {
  serializedName: "ResourceGroupListResult",
  type: {
    name: "Composite",
    className: "ResourceGroupListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            serializedName: "ResourceGroupElementType",
            type: {
              name: "Composite",
              className: "ResourceGroup"
            }
          }
        }
      },
      nextLink: {
        readOnly: true,
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const TagsListResult = {
  serializedName: "TagsListResult",
  type: {
    name: "Composite",
    className: "TagsListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            serializedName: "TagDetailsElementType",
            type: {
              name: "Composite",
              className: "TagDetails"
            }
          }
        }
      },
      nextLink: {
        readOnly: true,
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DeploymentOperationsListResult = {
  serializedName: "DeploymentOperationsListResult",
  type: {
    name: "Composite",
    className: "DeploymentOperationsListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            serializedName: "DeploymentOperationElementType",
            type: {
              name: "Composite",
              className: "DeploymentOperation"
            }
          }
        }
      },
      nextLink: {
        readOnly: true,
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};