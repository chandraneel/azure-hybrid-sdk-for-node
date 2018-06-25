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
export declare const DeploymentExtendedFilter: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            provisioningState: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const GenericResourceFilter: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            resourceType: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            tagname: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            tagvalue: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ResourceGroupFilter: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            tagName: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            tagValue: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const TemplateLink: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            uri: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            contentVersion: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ParametersLink: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            uri: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            contentVersion: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const DebugSetting: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            detailLevel: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const OnErrorDeployment: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            type: {
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
            deploymentName: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const DeploymentProperties: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            template: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            templateLink: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            parameters: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            parametersLink: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            mode: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
            debugSetting: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            onErrorDeployment: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const Deployment: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
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
export declare const DeploymentExportResult: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            template: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ResourceManagementErrorWithDetails: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            code: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            message: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            target: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            details: {
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
export declare const AliasPathType: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            path: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            apiVersions: {
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
export declare const AliasType: {
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
            paths: {
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
export declare const ProviderResourceType: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            resourceType: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            locations: {
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
            aliases: {
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
            apiVersions: {
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
            properties: {
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
export declare const Provider: {
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
            namespace: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            registrationState: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            resourceTypes: {
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
export declare const BasicDependency: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            id: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            resourceType: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            resourceName: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const Dependency: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            dependsOn: {
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
            id: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            resourceType: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            resourceName: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const OnErrorDeploymentExtended: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            provisioningState: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            type: {
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
            deploymentName: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const DeploymentPropertiesExtended: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            provisioningState: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            correlationId: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            timestamp: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            outputs: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            providers: {
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
            dependencies: {
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
            template: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            templateLink: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            parameters: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            parametersLink: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            mode: {
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
            debugSetting: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            onErrorDeployment: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const DeploymentValidateResult: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            error: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
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
export declare const DeploymentExtended: {
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
                required: boolean;
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
export declare const Plan: {
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
            publisher: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            product: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            promotionCode: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            version: {
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
                serializedName: string;
                type: {
                    name: string;
                };
            };
            tier: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            size: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            family: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            model: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            capacity: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const Identity: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            principalId: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            tenantId: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            type: {
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
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
export declare const GenericResource: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            plan: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            properties: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            kind: {
                serializedName: string;
                constraints: {
                    Pattern: RegExp;
                };
                type: {
                    name: string;
                };
            };
            managedBy: {
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
            identity: {
                serializedName: string;
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
export declare const ResourceGroupProperties: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            provisioningState: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ResourceGroup: {
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
            location: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            managedBy: {
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
export declare const ResourceGroupPatchable: {
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
            properties: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            managedBy: {
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
export declare const ResourcesMoveInfo: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            resources: {
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
            targetResourceGroup: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ExportTemplateRequest: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            resources: {
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
            options: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const TagCount: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            type: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            value: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const TagValue: {
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
            tagValue: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            count: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const TagDetails: {
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
            tagName: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            count: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            values: {
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
export declare const TargetResource: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            id: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            resourceName: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            resourceType: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const HttpMessage: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            content: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const DeploymentOperationProperties: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            provisioningState: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            timestamp: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            serviceRequestId: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            statusCode: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            statusMessage: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            targetResource: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            request: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            response: {
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
export declare const DeploymentOperation: {
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
            operationId: {
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
export declare const ResourceProviderOperationDisplayProperties: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            publisher: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
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
export declare const SubResource: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            id: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ResourceGroupExportResult: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            template: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            error: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const DeploymentsListByResourceGroupOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            filter: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            top: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ProvidersListOptionalParams: {
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
            expand: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ProvidersGetOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            expand: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ResourcesListByResourceGroupOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            filter: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            expand: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            top: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ResourcesListOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            filter: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            expand: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            top: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ResourceGroupsListOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            filter: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            top: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const DeploymentOperationsListOptionalParams: {
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
export declare const DeploymentListResult: {
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
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ProviderListResult: {
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
                readOnly: boolean;
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
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ResourceGroupListResult: {
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
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const TagsListResult: {
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
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const DeploymentOperationsListResult: {
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
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
