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
export declare const InstanceViewStatus: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            code: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            level: {
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
            displayStatus: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            message: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            time: {
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
            capacity: {
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
export declare const AvailabilitySet: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            platformUpdateDomainCount: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            platformFaultDomainCount: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            virtualMachines: {
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
            statuses: {
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
            sku: {
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
export declare const VirtualMachineSize: {
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
            numberOfCores: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            osDiskSizeInMB: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            resourceDiskSizeInMB: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            memoryInMB: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            maxDataDiskCount: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const VirtualMachineExtensionImage: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            operatingSystem: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            computeRole: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            handlerSchema: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            vmScaleSetEnabled: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            supportsMultipleExtensions: {
                serializedName: string;
                type: {
                    name: string;
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
export declare const VirtualMachineImageResource: {
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
            id: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const VirtualMachineExtensionInstanceView: {
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
            type: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            typeHandlerVersion: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            substatuses: {
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
            statuses: {
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
export declare const VirtualMachineExtension: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            forceUpdateTag: {
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
            virtualMachineExtensionType: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            typeHandlerVersion: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            autoUpgradeMinorVersion: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            settings: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            protectedSettings: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            provisioningState: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            instanceView: {
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
export declare const UpdateResource: {
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
        };
    };
};
export declare const VirtualMachineExtensionUpdate: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            forceUpdateTag: {
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
            type: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            typeHandlerVersion: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            autoUpgradeMinorVersion: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            settings: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            protectedSettings: {
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
export declare const VirtualMachineExtensionsListResult: {
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
export declare const PurchasePlan: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            publisher: {
                required: boolean;
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
            product: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const OSDiskImage: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            operatingSystem: {
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
export declare const DataDiskImage: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            lun: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const VirtualMachineImage: {
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
            osDiskImage: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            dataDiskImages: {
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
            name: {
                required: boolean;
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
            id: {
                serializedName: string;
                type: {
                    name: string;
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
                serializedName: string;
                type: {
                    name: string;
                };
            };
            localizedValue: {
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
                required: boolean;
                isConstant: boolean;
                serializedName: string;
                defaultValue: string;
                type: {
                    name: string;
                };
            };
            currentValue: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            limit: {
                required: boolean;
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
                    className: string;
                };
            };
        };
    };
};
export declare const VirtualMachineCaptureParameters: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            vhdPrefix: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            destinationContainerName: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            overwriteVhds: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const VirtualMachineCaptureResult: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            output: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            id: {
                serializedName: string;
                type: {
                    name: string;
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
        };
    };
};
export declare const HardwareProfile: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            vmSize: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ImageReference: {
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
            offer: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            sku: {
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
            id: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const KeyVaultSecretReference: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            secretUrl: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            sourceVault: {
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
export declare const KeyVaultKeyReference: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            keyUrl: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            sourceVault: {
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
export declare const DiskEncryptionSettings: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            diskEncryptionKey: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            keyEncryptionKey: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            enabled: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const VirtualHardDisk: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            uri: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ManagedDiskParameters: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            storageAccountType: {
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
            id: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const OSDisk: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            osType: {
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
            encryptionSettings: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            name: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            vhd: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            image: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            caching: {
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
            createOption: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
            diskSizeGB: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            managedDisk: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const DataDisk: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            lun: {
                required: boolean;
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
            vhd: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            image: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            caching: {
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
            createOption: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
            diskSizeGB: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            managedDisk: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const StorageProfile: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            imageReference: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            osDisk: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            dataDisks: {
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
export declare const AdditionalUnattendContent: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            passName: {
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
            componentName: {
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
            settingName: {
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
            content: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const WinRMListener: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            protocol: {
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
            certificateUrl: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const WinRMConfiguration: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            listeners: {
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
export declare const WindowsConfiguration: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            provisionVMAgent: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            enableAutomaticUpdates: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            timeZone: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            additionalUnattendContent: {
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
            winRM: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const SshPublicKey: {
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
            keyData: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const SshConfiguration: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            publicKeys: {
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
export declare const LinuxConfiguration: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            disablePasswordAuthentication: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            ssh: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const VaultCertificate: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            certificateUrl: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            certificateStore: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const VaultSecretGroup: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            sourceVault: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            vaultCertificates: {
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
export declare const OSProfile: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            computerName: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            adminUsername: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            adminPassword: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            customData: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            windowsConfiguration: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            linuxConfiguration: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
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
                            className: string;
                        };
                    };
                };
            };
        };
    };
};
export declare const NetworkInterfaceReference: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            primary: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            id: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const NetworkProfile: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            networkInterfaces: {
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
export declare const BootDiagnostics: {
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
            storageUri: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const DiagnosticsProfile: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            bootDiagnostics: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const VirtualMachineExtensionHandlerInstanceView: {
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
            typeHandlerVersion: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            status: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const VirtualMachineAgentInstanceView: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            vmAgentVersion: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            extensionHandlers: {
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
            statuses: {
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
export declare const DiskInstanceView: {
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
            encryptionSettings: {
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
            statuses: {
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
export declare const BootDiagnosticsInstanceView: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            consoleScreenshotBlobUri: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            serialConsoleLogBlobUri: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const VirtualMachineIdentity: {
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
export declare const MaintenanceRedeployStatus: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            isCustomerInitiatedMaintenanceAllowed: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            preMaintenanceWindowStartTime: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            preMaintenanceWindowEndTime: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            maintenanceWindowStartTime: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            maintenanceWindowEndTime: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            lastOperationResultCode: {
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
            lastOperationMessage: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const VirtualMachineInstanceView: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            platformUpdateDomain: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            platformFaultDomain: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            rdpThumbPrint: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            vmAgent: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            maintenanceRedeployStatus: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            disks: {
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
            extensions: {
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
            bootDiagnostics: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            statuses: {
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
export declare const VirtualMachine: {
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
            hardwareProfile: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            storageProfile: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            osProfile: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            networkProfile: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            diagnosticsProfile: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            availabilitySet: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            provisioningState: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            instanceView: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            licenseType: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            vmId: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            resources: {
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
            identity: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            zones: {
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
export declare const RollingUpgradePolicy: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            maxBatchInstancePercent: {
                serializedName: string;
                constraints: {
                    InclusiveMaximum: number;
                    InclusiveMinimum: number;
                };
                type: {
                    name: string;
                };
            };
            maxUnhealthyInstancePercent: {
                serializedName: string;
                constraints: {
                    InclusiveMaximum: number;
                    InclusiveMinimum: number;
                };
                type: {
                    name: string;
                };
            };
            maxUnhealthyUpgradedInstancePercent: {
                serializedName: string;
                constraints: {
                    InclusiveMaximum: number;
                    InclusiveMinimum: number;
                };
                type: {
                    name: string;
                };
            };
            pauseTimeBetweenBatches: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const UpgradePolicy: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            mode: {
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
            rollingUpgradePolicy: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            automaticOSUpgrade: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ImageOSDisk: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            osType: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
            osState: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
            snapshot: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            managedDisk: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            blobUri: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            caching: {
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
            diskSizeGB: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            storageAccountType: {
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
        };
    };
};
export declare const ImageDataDisk: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            lun: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            snapshot: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            managedDisk: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            blobUri: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            caching: {
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
            diskSizeGB: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            storageAccountType: {
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
        };
    };
};
export declare const ImageStorageProfile: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            osDisk: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            dataDisks: {
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
export declare const Image: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            sourceVirtualMachine: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            storageProfile: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            provisioningState: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
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
export declare const VirtualMachineScaleSetIdentity: {
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
export declare const ResourceSkuCapacity: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            minimum: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            maximum: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            default: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            scaleType: {
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
export declare const ResourceSkuCosts: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            meterID: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            quantity: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            extendedUnit: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ResourceSkuCapabilities: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            name: {
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
        };
    };
};
export declare const ResourceSkuRestrictions: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            type: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
            values: {
                readOnly: boolean;
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
            reasonCode: {
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
export declare const ResourceSku: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            resourceType: {
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
            tier: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            size: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            family: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            kind: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            capacity: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            locations: {
                readOnly: boolean;
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
            apiVersions: {
                readOnly: boolean;
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
            costs: {
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
            capabilities: {
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
            restrictions: {
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
export declare const VirtualMachineScaleSetOSProfile: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            computerNamePrefix: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            adminUsername: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            adminPassword: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            customData: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            windowsConfiguration: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            linuxConfiguration: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
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
                            className: string;
                        };
                    };
                };
            };
        };
    };
};
export declare const VirtualMachineScaleSetUpdateOSProfile: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            customData: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            windowsConfiguration: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            linuxConfiguration: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
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
                            className: string;
                        };
                    };
                };
            };
        };
    };
};
export declare const VirtualMachineScaleSetManagedDiskParameters: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            storageAccountType: {
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
        };
    };
};
export declare const VirtualMachineScaleSetOSDisk: {
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
            caching: {
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
            createOption: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
            osType: {
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
            image: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            vhdContainers: {
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
            managedDisk: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const VirtualMachineScaleSetUpdateOSDisk: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            caching: {
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
            image: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            vhdContainers: {
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
            managedDisk: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const VirtualMachineScaleSetDataDisk: {
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
            lun: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            caching: {
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
            createOption: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
            diskSizeGB: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            managedDisk: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const VirtualMachineScaleSetStorageProfile: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            imageReference: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            osDisk: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            dataDisks: {
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
export declare const VirtualMachineScaleSetUpdateStorageProfile: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            imageReference: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            osDisk: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            dataDisks: {
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
export declare const ApiEntityReference: {
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
export declare const VirtualMachineScaleSetPublicIPAddressConfigurationDnsSettings: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            domainNameLabel: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const VirtualMachineScaleSetPublicIPAddressConfiguration: {
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
            idleTimeoutInMinutes: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            dnsSettings: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const VirtualMachineScaleSetUpdatePublicIPAddressConfiguration: {
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
            idleTimeoutInMinutes: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            dnsSettings: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const VirtualMachineScaleSetIPConfiguration: {
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
            subnet: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            primary: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            publicIPAddressConfiguration: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            privateIPAddressVersion: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            applicationGatewayBackendAddressPools: {
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
            loadBalancerBackendAddressPools: {
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
            loadBalancerInboundNatPools: {
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
        };
    };
};
export declare const VirtualMachineScaleSetUpdateIPConfiguration: {
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
            subnet: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            primary: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            publicIPAddressConfiguration: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            privateIPAddressVersion: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            applicationGatewayBackendAddressPools: {
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
            loadBalancerBackendAddressPools: {
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
            loadBalancerInboundNatPools: {
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
        };
    };
};
export declare const VirtualMachineScaleSetNetworkConfigurationDnsSettings: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            dnsServers: {
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
export declare const VirtualMachineScaleSetNetworkConfiguration: {
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
            primary: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            enableAcceleratedNetworking: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            networkSecurityGroup: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            dnsSettings: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            ipConfigurations: {
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
            id: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const VirtualMachineScaleSetUpdateNetworkConfiguration: {
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
            primary: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            enableAcceleratedNetworking: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            networkSecurityGroup: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            dnsSettings: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            ipConfigurations: {
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
        };
    };
};
export declare const VirtualMachineScaleSetNetworkProfile: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            healthProbe: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            networkInterfaceConfigurations: {
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
export declare const VirtualMachineScaleSetUpdateNetworkProfile: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            networkInterfaceConfigurations: {
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
export declare const SubResourceReadOnly: {
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
        };
    };
};
export declare const VirtualMachineScaleSetExtension: {
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
            forceUpdateTag: {
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
            type: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            typeHandlerVersion: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            autoUpgradeMinorVersion: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            settings: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            protectedSettings: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            provisioningState: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            id: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const VirtualMachineScaleSetExtensionProfile: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            extensions: {
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
export declare const VirtualMachineScaleSetVMProfile: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            osProfile: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            storageProfile: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            networkProfile: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            diagnosticsProfile: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            extensionProfile: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            licenseType: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const VirtualMachineScaleSetUpdateVMProfile: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            osProfile: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            storageProfile: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            networkProfile: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            diagnosticsProfile: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            extensionProfile: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            licenseType: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const VirtualMachineScaleSet: {
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
            plan: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            upgradePolicy: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            virtualMachineProfile: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            provisioningState: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            overprovision: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            uniqueId: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            singlePlacementGroup: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            identity: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            zones: {
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
export declare const VirtualMachineScaleSetUpdate: {
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
            plan: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            upgradePolicy: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            virtualMachineProfile: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            overprovision: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            singlePlacementGroup: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            identity: {
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
        };
    };
};
export declare const VirtualMachineScaleSetVMInstanceIDs: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            instanceIds: {
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
export declare const VirtualMachineScaleSetVMInstanceRequiredIDs: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            instanceIds: {
                required: boolean;
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
export declare const VirtualMachineStatusCodeCount: {
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
            count: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const VirtualMachineScaleSetInstanceViewStatusesSummary: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            statusesSummary: {
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
export declare const VirtualMachineScaleSetVMExtensionsSummary: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            name: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            statusesSummary: {
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
export declare const VirtualMachineScaleSetInstanceView: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            virtualMachine: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            extensions: {
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
            statuses: {
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
export declare const VirtualMachineScaleSetSkuCapacity: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            minimum: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            maximum: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            defaultCapacity: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            scaleType: {
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
export declare const VirtualMachineScaleSetSku: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            resourceType: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            sku: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            capacity: {
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
export declare const VirtualMachineScaleSetVM: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            instanceId: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            sku: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            latestModelApplied: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            vmId: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            instanceView: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            hardwareProfile: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            storageProfile: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            osProfile: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            networkProfile: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            diagnosticsProfile: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            availabilitySet: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            provisioningState: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            licenseType: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            plan: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            resources: {
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
export declare const VirtualMachineHealthStatus: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            status: {
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
export declare const VirtualMachineScaleSetVMInstanceView: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            platformUpdateDomain: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            platformFaultDomain: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            rdpThumbPrint: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            vmAgent: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            disks: {
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
            extensions: {
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
            vmHealth: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            bootDiagnostics: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            statuses: {
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
            placementGroupId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const RollingUpgradeRunningStatus: {
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
                    allowedValues: string[];
                };
            };
            startTime: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            lastAction: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
            lastActionTime: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const RollingUpgradeProgressInfo: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            successfulInstanceCount: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            failedInstanceCount: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            inProgressInstanceCount: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            pendingInstanceCount: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ApiErrorBase: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            code: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            target: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            message: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const InnerError: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            exceptiontype: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            errordetail: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ApiError: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            details: {
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
            innererror: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            code: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            target: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            message: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const RollingUpgradeStatusInfo: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            policy: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            runningStatus: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            progress: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            error: {
                readOnly: boolean;
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
export declare const ComputeLongRunningOperationProperties: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            output: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const OperationStatusResponse: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            name: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            status: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            startTime: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            endTime: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            error: {
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
export declare const DiskSku: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            name: {
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
            tier: {
                readOnly: boolean;
                serializedName: string;
                defaultValue: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ResourceUpdate: {
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
            sku: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const ImageDiskReference: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            id: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            lun: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const CreationData: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            createOption: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
            storageAccountId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            imageReference: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            sourceUri: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            sourceResourceId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const SourceVault: {
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
export declare const KeyVaultAndSecretReference: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            sourceVault: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            secretUrl: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const KeyVaultAndKeyReference: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            sourceVault: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            keyUrl: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const EncryptionSettings: {
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
            diskEncryptionKey: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            keyEncryptionKey: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const Disk: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            managedBy: {
                readOnly: boolean;
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
            zones: {
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
            timeCreated: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            osType: {
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
            creationData: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            diskSizeGB: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            encryptionSettings: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            provisioningState: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
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
export declare const DiskUpdate: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            osType: {
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
            diskSizeGB: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            encryptionSettings: {
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
            sku: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const GrantAccessData: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            access: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
            durationInSeconds: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const AccessUri: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            accessSAS: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const Snapshot: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            managedBy: {
                readOnly: boolean;
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
            timeCreated: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            osType: {
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
            creationData: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            diskSizeGB: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            encryptionSettings: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            provisioningState: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
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
export declare const SnapshotUpdate: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            osType: {
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
            diskSizeGB: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            encryptionSettings: {
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
            sku: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const RunCommandInputParameter: {
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
            value: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const RunCommandInput: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            commandId: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            script: {
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
            parameters: {
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
export declare const RunCommandParameterDefinition: {
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
                serializedName: string;
                type: {
                    name: string;
                };
            };
            defaultValue: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            required: {
                serializedName: string;
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const RunCommandDocumentBase: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            schema: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            id: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            osType: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
            label: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            description: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const RunCommandDocument: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            script: {
                required: boolean;
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
            parameters: {
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
            schema: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            id: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            osType: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
            label: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            description: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const RunCommandResult: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            output: {
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
            status: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            startTime: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            endTime: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            error: {
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
export declare const VirtualMachineExtensionImagesListVersionsOptionalParams: {
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
            orderby: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const VirtualMachineExtensionsGetOptionalParams: {
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
export declare const VirtualMachinesGetExtensionsOptionalParams: {
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
export declare const VirtualMachinesGetOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            expand: {
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
        };
    };
};
export declare const VirtualMachineImagesListOptionalParams: {
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
            orderby: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ImagesGetOptionalParams: {
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
export declare const VirtualMachineScaleSetsDeallocateOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            vmInstanceIDs: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const VirtualMachineScaleSetsPowerOffOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            vmInstanceIDs: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const VirtualMachineScaleSetsRestartOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            vmInstanceIDs: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const VirtualMachineScaleSetsStartOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            vmInstanceIDs: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const VirtualMachineScaleSetsReimageOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            vmInstanceIDs: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const VirtualMachineScaleSetsReimageAllOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            vmInstanceIDs: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const VirtualMachineScaleSetsBeginDeallocateOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            vmInstanceIDs: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const VirtualMachineScaleSetsBeginPowerOffOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            vmInstanceIDs: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const VirtualMachineScaleSetsBeginRestartOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            vmInstanceIDs: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const VirtualMachineScaleSetsBeginStartOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            vmInstanceIDs: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const VirtualMachineScaleSetsBeginReimageOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            vmInstanceIDs: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const VirtualMachineScaleSetsBeginReimageAllOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            vmInstanceIDs: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const VirtualMachineScaleSetExtensionsGetOptionalParams: {
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
export declare const VirtualMachineScaleSetVMsListOptionalParams: {
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
            select: {
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
export declare const AvailabilitySetListResult: {
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
export declare const VirtualMachineSizeListResult: {
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
export declare const VirtualMachineListResult: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            value: {
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
            nextLink: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ListUsagesResult: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            value: {
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
            nextLink: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ImageListResult: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            value: {
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
            nextLink: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ResourceSkusResult: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            value: {
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
            nextLink: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const VirtualMachineScaleSetListResult: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            value: {
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
            nextLink: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const VirtualMachineScaleSetListWithLinkResult: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            value: {
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
            nextLink: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const VirtualMachineScaleSetListSkusResult: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            value: {
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
            nextLink: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const VirtualMachineScaleSetExtensionListResult: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            value: {
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
            nextLink: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const VirtualMachineScaleSetVMListResult: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            value: {
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
            nextLink: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const DiskList: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            value: {
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
            nextLink: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const SnapshotList: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            value: {
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
            nextLink: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const RunCommandListResult: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            value: {
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
            nextLink: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
