"use strict";
/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ms_rest_azure_js_1 = require("ms-rest-azure-js");
exports.CloudError = ms_rest_azure_js_1.CloudErrorMapper;
exports.BaseResource = ms_rest_azure_js_1.BaseResourceMapper;
exports.Sku = {
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
exports.Permissions = {
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
exports.AccessPolicyEntry = {
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
exports.VaultProperties = {
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
exports.VaultPatchProperties = {
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
exports.VaultAccessPolicyProperties = {
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
exports.DeletedVaultProperties = {
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
exports.VaultCreateOrUpdateParameters = {
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
exports.VaultPatchParameters = {
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
exports.VaultAccessPolicyParameters = {
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
exports.Resource = {
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
exports.Vault = {
    serializedName: "Vault",
    type: {
        name: "Composite",
        className: "Vault",
        modelProperties: __assign({}, exports.Resource.type.modelProperties, { properties: {
                required: true,
                serializedName: "properties",
                defaultValue: {},
                type: {
                    name: "Composite",
                    className: "VaultProperties"
                }
            } })
    }
};
exports.DeletedVault = {
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
exports.VaultCheckNameAvailabilityParameters = {
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
exports.CheckNameAvailabilityResult = {
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
exports.OperationDisplay = {
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
exports.LogSpecification = {
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
exports.ServiceSpecification = {
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
exports.Operation = {
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
exports.VaultsListByResourceGroupOptionalParams = {
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
exports.VaultsListBySubscriptionOptionalParams = {
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
exports.VaultsListOptionalParams = {
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
exports.VaultListResult = {
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
exports.DeletedVaultListResult = {
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
exports.ResourceListResult = {
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
exports.OperationListResult = {
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
//# sourceMappingURL=mappers.js.map