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
export declare const StorageAccountCheckNameAvailabilityParameters: {
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
export declare const Sku: {
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
                    allowedValues: string[];
                };
            };
            tier: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
        };
    };
};
export declare const CustomDomain: {
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
            useSubDomain: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const EncryptionService: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            enabled: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            lastEnabledTime: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const EncryptionServices: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            blob: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const Encryption: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            services: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            keySource: {
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
export declare const StorageAccountCreateParameters: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            sku: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            kind: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
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
            customDomain: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            encryption: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            accessTier: {
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
        };
    };
};
export declare const Endpoints: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            blob: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            queue: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            table: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            file: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
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
export declare const StorageAccount: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            sku: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            kind: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
            provisioningState: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
            primaryEndpoints: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            primaryLocation: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            statusOfPrimary: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
            lastGeoFailoverTime: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            secondaryLocation: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            statusOfSecondary: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
            creationTime: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            customDomain: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            secondaryEndpoints: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            encryption: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            accessTier: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
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
export declare const StorageAccountKey: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            keyName: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            value: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            permissions: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
        };
    };
};
export declare const StorageAccountListKeysResult: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            keys: {
                readOnly: boolean;
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
export declare const StorageAccountRegenerateKeyParameters: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            keyName: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const StorageAccountUpdateParameters: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            sku: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
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
            customDomain: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            encryption: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            accessTier: {
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
        };
    };
};
export declare const UsageName: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            value: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            localizedValue: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const Usage: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            unit: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
            currentValue: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            limit: {
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
                    className: string;
                };
            };
        };
    };
};
export declare const StorageAccountListResult: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            value: {
                readOnly: boolean;
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
export declare const UsageListResult: {
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
        };
    };
};
