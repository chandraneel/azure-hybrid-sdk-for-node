export declare const CloudError: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            code: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            message: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            target: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            details: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        required: boolean;
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
        };
    };
};
export declare const BaseResource: {
    required: boolean;
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {};
    };
};
export declare const Sku: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            family: {
                required: boolean;
                isConstant: boolean;
                serializedName: string;
                defaultValue: string;
                type: {
                    name: string;
                };
            };
            name: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
        };
    };
};
export declare const Permissions: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            keys: {
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        serializedName: string;
                        type: {
                            name: string;
                        };
                    };
                };
            };
            secrets: {
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        serializedName: string;
                        type: {
                            name: string;
                        };
                    };
                };
            };
            certificates: {
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        serializedName: string;
                        type: {
                            name: string;
                        };
                    };
                };
            };
            storage: {
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        serializedName: string;
                        type: {
                            name: string;
                        };
                    };
                };
            };
        };
    };
};
export declare const AccessPolicyEntry: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            tenantId: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            objectId: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            applicationId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            permissions: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const VaultProperties: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            tenantId: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            sku: {
                required: boolean;
                serializedName: string;
                defaultValue: {};
                type: {
                    name: string;
                    className: string;
                };
            };
            accessPolicies: {
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            vaultUri: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            enabledForDeployment: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            enabledForDiskEncryption: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            enabledForTemplateDeployment: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            enableSoftDelete: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            createMode: {
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
            enablePurgeProtection: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const VaultPatchProperties: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            tenantId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            sku: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            accessPolicies: {
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            enabledForDeployment: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            enabledForDiskEncryption: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            enabledForTemplateDeployment: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            enableSoftDelete: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            createMode: {
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
            enablePurgeProtection: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const VaultAccessPolicyProperties: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            accessPolicies: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
        };
    };
};
export declare const DeletedVaultProperties: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            vaultId: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            location: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            deletionDate: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            scheduledPurgeDate: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            tags: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                    value: {
                        serializedName: string;
                        type: {
                            name: string;
                        };
                    };
                };
            };
        };
    };
};
export declare const VaultCreateOrUpdateParameters: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            location: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            tags: {
                serializedName: string;
                type: {
                    name: string;
                    value: {
                        serializedName: string;
                        type: {
                            name: string;
                        };
                    };
                };
            };
            properties: {
                required: boolean;
                serializedName: string;
                defaultValue: {};
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const VaultPatchParameters: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            tags: {
                serializedName: string;
                type: {
                    name: string;
                    value: {
                        serializedName: string;
                        type: {
                            name: string;
                        };
                    };
                };
            };
            properties: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const VaultAccessPolicyParameters: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            id: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            name: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            type: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            location: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            properties: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const Resource: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            id: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            name: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            type: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            location: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            tags: {
                serializedName: string;
                type: {
                    name: string;
                    value: {
                        serializedName: string;
                        type: {
                            name: string;
                        };
                    };
                };
            };
        };
    };
};
export declare const Vault: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            properties: {
                required: boolean;
                serializedName: string;
                defaultValue: {};
                type: {
                    name: string;
                    className: string;
                };
            };
            id: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            name: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            type: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            location: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            tags: {
                serializedName: string;
                type: {
                    name: string;
                    value: {
                        serializedName: string;
                        type: {
                            name: string;
                        };
                    };
                };
            };
        };
    };
};
export declare const DeletedVault: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            id: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            name: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            type: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            properties: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const VaultCheckNameAvailabilityParameters: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            name: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            type: {
                required: boolean;
                isConstant: boolean;
                serializedName: string;
                defaultValue: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const CheckNameAvailabilityResult: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            nameAvailable: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            reason: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
            message: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const OperationDisplay: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            provider: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            resource: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            operation: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            description: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const LogSpecification: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            name: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            displayName: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            blobDuration: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ServiceSpecification: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            logSpecifications: {
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
        };
    };
};
export declare const Operation: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            name: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            display: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            origin: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            serviceSpecification: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const VaultsListByResourceGroupOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            top: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const VaultsListBySubscriptionOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            top: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const VaultsListOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            top: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const VaultListResult: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            value: {
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            nextLink: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const DeletedVaultListResult: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            value: {
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            nextLink: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ResourceListResult: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            value: {
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            nextLink: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const OperationListResult: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            value: {
                serializedName: string;
                type: {
                    name: string;
                    element: {
                        serializedName: string;
                        type: {
                            name: string;
                            className: string;
                        };
                    };
                };
            };
            nextLink: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
