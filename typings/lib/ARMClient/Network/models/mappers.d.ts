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
export declare const DnsNameAvailabilityResult: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            available: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const LoadBalancerSku: {
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
export declare const Resource: {
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
export declare const ApplicationSecurityGroup: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            resourceGuid: {
                readOnly: boolean;
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
            etag: {
                readOnly: boolean;
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
export declare const SecurityRule: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            description: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            protocol: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            sourcePortRange: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            destinationPortRange: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            sourceAddressPrefix: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            sourceAddressPrefixes: {
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
            sourceApplicationSecurityGroups: {
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
            destinationAddressPrefix: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            destinationAddressPrefixes: {
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
            destinationApplicationSecurityGroups: {
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
            sourcePortRanges: {
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
            destinationPortRanges: {
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
            access: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            priority: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            direction: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            provisioningState: {
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
            etag: {
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
export declare const ApplicationGatewayBackendAddress: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            fqdn: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            ipAddress: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ApplicationGatewayBackendAddressPool: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            backendIPConfigurations: {
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
            backendAddresses: {
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
            provisioningState: {
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
            etag: {
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
            id: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const BackendAddressPool: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            backendIPConfigurations: {
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
            loadBalancingRules: {
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
            outboundNatRule: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            provisioningState: {
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
            etag: {
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
export declare const InboundNatRule: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            frontendIPConfiguration: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            backendIPConfiguration: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            protocol: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            frontendPort: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            backendPort: {
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
            enableFloatingIP: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            provisioningState: {
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
            etag: {
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
export declare const PublicIPAddressSku: {
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
        };
    };
};
export declare const IPConfiguration: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            privateIPAddress: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            privateIPAllocationMethod: {
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
            publicIPAddress: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            provisioningState: {
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
            etag: {
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
export declare const PublicIPAddressDnsSettings: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            domainNameLabel: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            fqdn: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            reverseFqdn: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const PublicIPAddress: {
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
            publicIPAllocationMethod: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            publicIPAddressVersion: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            ipConfiguration: {
                readOnly: boolean;
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
            ipAddress: {
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
            resourceGuid: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            provisioningState: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            etag: {
                serializedName: string;
                type: {
                    name: string;
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
export declare const NetworkInterfaceIPConfiguration: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
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
            loadBalancerInboundNatRules: {
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
            privateIPAddress: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            privateIPAllocationMethod: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            privateIPAddressVersion: {
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
            publicIPAddress: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            applicationSecurityGroups: {
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
            provisioningState: {
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
            etag: {
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
export declare const NetworkInterfaceDnsSettings: {
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
            appliedDnsServers: {
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
            internalDnsNameLabel: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            internalFqdn: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            internalDomainNameSuffix: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const NetworkInterface: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            virtualMachine: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            networkSecurityGroup: {
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
            dnsSettings: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            macAddress: {
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
            enableIPForwarding: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            resourceGuid: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            provisioningState: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            etag: {
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
export declare const NetworkSecurityGroup: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            securityRules: {
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
            defaultSecurityRules: {
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
            networkInterfaces: {
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
            subnets: {
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
            resourceGuid: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            provisioningState: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            etag: {
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
export declare const Route: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            addressPrefix: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            nextHopType: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            nextHopIpAddress: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            provisioningState: {
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
            etag: {
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
export declare const RouteTable: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            routes: {
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
            subnets: {
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
            disableBgpRoutePropagation: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            provisioningState: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            etag: {
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
export declare const ServiceEndpointPropertiesFormat: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            service: {
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
            provisioningState: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ResourceNavigationLink: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            linkedResourceType: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            link: {
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
            name: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            etag: {
                readOnly: boolean;
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
export declare const Subnet: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            addressPrefix: {
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
            routeTable: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            serviceEndpoints: {
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
            ipConfigurations: {
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
            resourceNavigationLinks: {
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
            provisioningState: {
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
            etag: {
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
export declare const FrontendIPConfiguration: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            inboundNatRules: {
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
            inboundNatPools: {
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
            outboundNatRules: {
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
            loadBalancingRules: {
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
            privateIPAddress: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            privateIPAllocationMethod: {
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
            publicIPAddress: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            provisioningState: {
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
            etag: {
                serializedName: string;
                type: {
                    name: string;
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
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const LoadBalancingRule: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            frontendIPConfiguration: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            backendAddressPool: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            probe: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            protocol: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            loadDistribution: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            frontendPort: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            backendPort: {
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
            enableFloatingIP: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            disableOutboundSnat: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            provisioningState: {
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
            etag: {
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
export declare const Probe: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            loadBalancingRules: {
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
            protocol: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            port: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            intervalInSeconds: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            numberOfProbes: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            requestPath: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            provisioningState: {
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
            etag: {
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
export declare const InboundNatPool: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            frontendIPConfiguration: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            protocol: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            frontendPortRangeStart: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            frontendPortRangeEnd: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            backendPort: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            provisioningState: {
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
            etag: {
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
export declare const OutboundNatRule: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            allocatedOutboundPorts: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            frontendIPConfigurations: {
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
            backendAddressPool: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            provisioningState: {
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
            etag: {
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
export declare const LoadBalancer: {
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
            frontendIPConfigurations: {
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
            backendAddressPools: {
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
            loadBalancingRules: {
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
            probes: {
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
            inboundNatRules: {
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
            inboundNatPools: {
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
            outboundNatRules: {
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
            resourceGuid: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            provisioningState: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            etag: {
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
export declare const TagsObject: {
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
export declare const ErrorDetails: {
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
export declare const ErrorModel: {
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
            message: {
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
            innerError: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const AzureAsyncOperationResult: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            status: {
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
export declare const EffectiveNetworkSecurityGroupAssociation: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            subnet: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            networkInterface: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const EffectiveNetworkSecurityRule: {
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
            protocol: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            sourcePortRange: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            destinationPortRange: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            sourcePortRanges: {
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
            destinationPortRanges: {
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
            sourceAddressPrefix: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            destinationAddressPrefix: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            sourceAddressPrefixes: {
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
            destinationAddressPrefixes: {
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
            expandedSourceAddressPrefix: {
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
            expandedDestinationAddressPrefix: {
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
            access: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            priority: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            direction: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const EffectiveNetworkSecurityGroup: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            networkSecurityGroup: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            association: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            effectiveSecurityRules: {
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
            tagMap: {
                serializedName: string;
                type: {
                    name: string;
                    value: {
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
    };
};
export declare const EffectiveNetworkSecurityGroupListResult: {
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
export declare const EffectiveRoute: {
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
            source: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            state: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            addressPrefix: {
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
            nextHopIpAddress: {
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
            nextHopType: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const EffectiveRouteListResult: {
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
export declare const NetworkWatcher: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            etag: {
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
export declare const TopologyParameters: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            targetResourceGroupName: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            targetVirtualNetwork: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            targetSubnet: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const TopologyAssociation: {
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
            resourceId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            associationType: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const TopologyResource: {
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
            id: {
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
            associations: {
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
export declare const Topology: {
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
            createdDateTime: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            lastModified: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            resources: {
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
export declare const VerificationIPFlowParameters: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            targetResourceId: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            direction: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            protocol: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            localPort: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            remotePort: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            localIPAddress: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            remoteIPAddress: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            targetNicResourceId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const VerificationIPFlowResult: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            access: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            ruleName: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const NextHopParameters: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            targetResourceId: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            sourceIPAddress: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            destinationIPAddress: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            targetNicResourceId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const NextHopResult: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            nextHopType: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            nextHopIpAddress: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            routeTableId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const SecurityGroupViewParameters: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            targetResourceId: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const NetworkInterfaceAssociation: {
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
            securityRules: {
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
export declare const SubnetAssociation: {
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
            securityRules: {
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
export declare const SecurityRuleAssociations: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            networkInterfaceAssociation: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            subnetAssociation: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            defaultSecurityRules: {
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
            effectiveSecurityRules: {
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
export declare const SecurityGroupNetworkInterface: {
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
            securityRuleAssociations: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const SecurityGroupViewResult: {
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
export declare const PacketCaptureStorageLocation: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            storageId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            storagePath: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            filePath: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const PacketCaptureFilter: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            protocol: {
                serializedName: string;
                defaultValue: string;
                type: {
                    name: string;
                };
            };
            localIPAddress: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            remoteIPAddress: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            localPort: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            remotePort: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const PacketCaptureParameters: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            target: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            bytesToCapturePerPacket: {
                serializedName: string;
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            totalBytesPerSession: {
                serializedName: string;
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            timeLimitInSeconds: {
                serializedName: string;
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            storageLocation: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            filters: {
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
export declare const PacketCapture: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            target: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            bytesToCapturePerPacket: {
                serializedName: string;
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            totalBytesPerSession: {
                serializedName: string;
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            timeLimitInSeconds: {
                serializedName: string;
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            storageLocation: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            filters: {
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
export declare const PacketCaptureResult: {
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
            id: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            etag: {
                serializedName: string;
                defaultValue: string;
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
            bytesToCapturePerPacket: {
                serializedName: string;
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            totalBytesPerSession: {
                serializedName: string;
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            timeLimitInSeconds: {
                serializedName: string;
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            storageLocation: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            filters: {
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
            provisioningState: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const PacketCaptureQueryStatusResult: {
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
            id: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            captureStartTime: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            packetCaptureStatus: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            stopReason: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            packetCaptureError: {
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
export declare const TroubleshootingParameters: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            targetResourceId: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            storageId: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            storagePath: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const QueryTroubleshootingParameters: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            targetResourceId: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const TroubleshootingRecommendedActions: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            actionId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            actionText: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            actionUri: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            actionUriText: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const TroubleshootingDetails: {
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
            reasonType: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            summary: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            detail: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            recommendedActions: {
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
export declare const TroubleshootingResult: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            startTime: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            endTime: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            code: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            results: {
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
export declare const RetentionPolicyParameters: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            days: {
                serializedName: string;
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            enabled: {
                serializedName: string;
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const FlowLogStatusParameters: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            targetResourceId: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const FlowLogInformation: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            targetResourceId: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            storageId: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            enabled: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            retentionPolicy: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const ConnectivitySource: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            resourceId: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            port: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ConnectivityDestination: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            resourceId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            address: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            port: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ConnectivityParameters: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            source: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            destination: {
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
export declare const ConnectivityIssue: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            origin: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            severity: {
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
            context: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                    element: {
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
    };
};
export declare const ConnectivityHop: {
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
                };
            };
            id: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            address: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            resourceId: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            nextHopIds: {
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
            issues: {
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
export declare const ConnectivityInformation: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            hops: {
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
            connectionStatus: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            avgLatencyInMs: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            minLatencyInMs: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            maxLatencyInMs: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            probesSent: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            probesFailed: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const AzureReachabilityReportLocation: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            country: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            state: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            city: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const AzureReachabilityReportParameters: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            providerLocation: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
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
                        };
                    };
                };
            };
            azureLocations: {
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
            startTime: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            endTime: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const AzureReachabilityReportLatencyInfo: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            timeStamp: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            score: {
                serializedName: string;
                constraints: {
                    InclusiveMaximum: number;
                    InclusiveMinimum: number;
                };
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const AzureReachabilityReportItem: {
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
            azureLocation: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            latencies: {
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
export declare const AzureReachabilityReport: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            aggregationLevel: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            providerLocation: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            reachabilityReport: {
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
export declare const AvailableProvidersListParameters: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            azureLocations: {
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
            country: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            state: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            city: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const AvailableProvidersListCity: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            cityName: {
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
                        };
                    };
                };
            };
        };
    };
};
export declare const AvailableProvidersListState: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            stateName: {
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
                        };
                    };
                };
            };
            cities: {
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
export declare const AvailableProvidersListCountry: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            countryName: {
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
                        };
                    };
                };
            };
            states: {
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
export declare const AvailableProvidersList: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            countries: {
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
export declare const ConnectionMonitorSource: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            resourceId: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            port: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ConnectionMonitorDestination: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            resourceId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            address: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            port: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ConnectionMonitorParameters: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            source: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            destination: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            autoStart: {
                serializedName: string;
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            monitoringIntervalInSeconds: {
                serializedName: string;
                defaultValue: number;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ConnectionMonitor: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
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
            source: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            destination: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            autoStart: {
                serializedName: string;
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            monitoringIntervalInSeconds: {
                serializedName: string;
                defaultValue: number;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ConnectionMonitorResult: {
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
            id: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            etag: {
                serializedName: string;
                defaultValue: string;
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
            source: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            destination: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            autoStart: {
                serializedName: string;
                defaultValue: boolean;
                type: {
                    name: string;
                };
            };
            monitoringIntervalInSeconds: {
                serializedName: string;
                defaultValue: number;
                type: {
                    name: string;
                };
            };
            provisioningState: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            startTime: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            monitoringStatus: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ConnectionStateSnapshot: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            connectionState: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            startTime: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            endTime: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            evaluationState: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            hops: {
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
export declare const ConnectionMonitorQueryResult: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            states: {
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
export declare const Availability: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            timeGrain: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            retention: {
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
export declare const Dimension: {
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
            internalName: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const MetricSpecification: {
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
            displayDescription: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            unit: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            aggregationType: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            availabilities: {
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
            enableRegionalMdmAccount: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            fillGapWithZero: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            metricFilterPattern: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            dimensions: {
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
            isInternal: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            sourceMdmAccount: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            sourceMdmNamespace: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            resourceIdDimensionNameOverride: {
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
export declare const OperationPropertiesFormatServiceSpecification: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            metricSpecifications: {
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
export declare const RouteFilterRule: {
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
                };
            };
            routeFilterRuleType: {
                required: boolean;
                isConstant: boolean;
                serializedName: string;
                defaultValue: string;
                type: {
                    name: string;
                };
            };
            communities: {
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
            provisioningState: {
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
            location: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            etag: {
                readOnly: boolean;
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
export declare const PatchRouteFilterRule: {
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
                };
            };
            routeFilterRuleType: {
                required: boolean;
                isConstant: boolean;
                serializedName: string;
                defaultValue: string;
                type: {
                    name: string;
                };
            };
            communities: {
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
            provisioningState: {
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
            etag: {
                readOnly: boolean;
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
export declare const ExpressRouteCircuitPeeringConfig: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            advertisedPublicPrefixes: {
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
            advertisedCommunities: {
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
            advertisedPublicPrefixesState: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            legacyMode: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            customerASN: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            routingRegistryName: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ExpressRouteCircuitStats: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            primarybytesIn: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            primarybytesOut: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            secondarybytesIn: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            secondarybytesOut: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const RouteFilter: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            rules: {
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
            peerings: {
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
            provisioningState: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            etag: {
                readOnly: boolean;
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
export declare const Ipv6ExpressRouteCircuitPeeringConfig: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            primaryPeerAddressPrefix: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            secondaryPeerAddressPrefix: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            microsoftPeeringConfig: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            routeFilter: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            state: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ExpressRouteCircuitPeering: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            peeringType: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            state: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            azureASN: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            peerASN: {
                serializedName: string;
                constraints: {
                    InclusiveMaximum: number;
                    InclusiveMinimum: number;
                };
                type: {
                    name: string;
                };
            };
            primaryPeerAddressPrefix: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            secondaryPeerAddressPrefix: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            primaryAzurePort: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            secondaryAzurePort: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            sharedKey: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            vlanId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            microsoftPeeringConfig: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            stats: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            provisioningState: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            gatewayManagerEtag: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            lastModifiedBy: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            routeFilter: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            ipv6PeeringConfig: {
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
            etag: {
                readOnly: boolean;
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
export declare const PatchRouteFilter: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            rules: {
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
            peerings: {
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
            provisioningState: {
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
            etag: {
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
            id: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
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
export declare const AddressSpace: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            addressPrefixes: {
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
export declare const VirtualNetworkPeering: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            allowVirtualNetworkAccess: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            allowForwardedTraffic: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            allowGatewayTransit: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            useRemoteGateways: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            remoteVirtualNetwork: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            remoteAddressSpace: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            peeringState: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            provisioningState: {
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
            etag: {
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
export declare const DhcpOptions: {
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
export declare const VirtualNetwork: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            addressSpace: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            dhcpOptions: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            subnets: {
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
            virtualNetworkPeerings: {
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
            resourceGuid: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            provisioningState: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            enableDdosProtection: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            enableVmProtection: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            etag: {
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
export declare const IPAddressAvailabilityResult: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            available: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            availableIPAddresses: {
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
export declare const VirtualNetworkUsageName: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            localizedValue: {
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
export declare const VirtualNetworkUsage: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            currentValue: {
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
            unit: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const VirtualNetworkGatewayIPConfiguration: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            privateIPAllocationMethod: {
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
            publicIPAddress: {
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
            name: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            etag: {
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
export declare const VirtualNetworkGatewaySku: {
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
export declare const VpnClientRootCertificate: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            publicCertData: {
                required: boolean;
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
            name: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            etag: {
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
export declare const VpnClientRevokedCertificate: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            thumbprint: {
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
            name: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            etag: {
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
export declare const VpnClientConfiguration: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            vpnClientAddressPool: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            vpnClientRootCertificates: {
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
            vpnClientRevokedCertificates: {
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
            vpnClientProtocols: {
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
            radiusServerAddress: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            radiusServerSecret: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const BgpSettings: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            asn: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            bgpPeeringAddress: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            peerWeight: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const BgpPeerStatus: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            localAddress: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            neighbor: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            asn: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            state: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            connectedDuration: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            routesReceived: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            messagesSent: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            messagesReceived: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const GatewayRoute: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            localAddress: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            network: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            nextHop: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            sourcePeer: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            origin: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            asPath: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            weight: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const VirtualNetworkGateway: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
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
            gatewayType: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            vpnType: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            enableBgp: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            activeActive: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            gatewayDefaultSite: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            sku: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            vpnClientConfiguration: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            bgpSettings: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            resourceGuid: {
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
            etag: {
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
export declare const VpnClientParameters: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            processorArchitecture: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            authenticationMethod: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            radiusServerAuthCertificate: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            clientRootCertificates: {
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
export declare const BgpPeerStatusListResult: {
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
export declare const GatewayRouteListResult: {
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
export declare const TunnelConnectionHealth: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            tunnel: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            connectionStatus: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            ingressBytesTransferred: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            egressBytesTransferred: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            lastConnectionEstablishedUtcTime: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const LocalNetworkGateway: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            localNetworkAddressSpace: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            gatewayIpAddress: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            bgpSettings: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            resourceGuid: {
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
            etag: {
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
export declare const IpsecPolicy: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            saLifeTimeSeconds: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            saDataSizeKilobytes: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            ipsecEncryption: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            ipsecIntegrity: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            ikeEncryption: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            ikeIntegrity: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            dhGroup: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            pfsGroup: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const VirtualNetworkGatewayConnection: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            authorizationKey: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            virtualNetworkGateway1: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            virtualNetworkGateway2: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            localNetworkGateway2: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            connectionType: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            routingWeight: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            sharedKey: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            connectionStatus: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            tunnelConnectionStatus: {
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
            egressBytesTransferred: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            ingressBytesTransferred: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            peer: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            enableBgp: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            usePolicyBasedTrafficSelectors: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            ipsecPolicies: {
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
            resourceGuid: {
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
            etag: {
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
export declare const ConnectionResetSharedKey: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            keyLength: {
                required: boolean;
                serializedName: string;
                constraints: {
                    InclusiveMaximum: number;
                    InclusiveMinimum: number;
                };
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ConnectionSharedKey: {
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
                };
            };
        };
    };
};
export declare const VirtualNetworkConnectionGatewayReference: {
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
        };
    };
};
export declare const VirtualNetworkGatewayConnectionListEntity: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            authorizationKey: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            virtualNetworkGateway1: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            virtualNetworkGateway2: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            localNetworkGateway2: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            connectionType: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            routingWeight: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            sharedKey: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            connectionStatus: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            tunnelConnectionStatus: {
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
            egressBytesTransferred: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            ingressBytesTransferred: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            peer: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            enableBgp: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            usePolicyBasedTrafficSelectors: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            ipsecPolicies: {
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
            resourceGuid: {
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
            etag: {
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
export declare const VpnDeviceScriptParameters: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            vendor: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            deviceFamily: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            firmwareVersion: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const LoadBalancersGetOptionalParams: {
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
export declare const InboundNatRulesGetOptionalParams: {
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
export declare const NetworkInterfacesGetOptionalParams: {
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
export declare const NetworkInterfacesGetVirtualMachineScaleSetNetworkInterfaceOptionalParams: {
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
export declare const NetworkInterfacesListVirtualMachineScaleSetIpConfigurationsOptionalParams: {
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
export declare const NetworkInterfacesGetVirtualMachineScaleSetIpConfigurationOptionalParams: {
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
export declare const NetworkSecurityGroupsGetOptionalParams: {
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
export declare const PublicIPAddressesGetOptionalParams: {
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
export declare const PublicIPAddressesGetVirtualMachineScaleSetPublicIPAddressOptionalParams: {
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
export declare const RouteFiltersGetOptionalParams: {
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
export declare const RouteTablesGetOptionalParams: {
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
export declare const VirtualNetworksGetOptionalParams: {
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
export declare const VirtualNetworksCheckIPAddressAvailabilityOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            ipAddress: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const SubnetsGetOptionalParams: {
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
export declare const VirtualNetworkGatewaysResetOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            gatewayVip: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const VirtualNetworkGatewaysGetBgpPeerStatusOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            peer: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const VirtualNetworkGatewaysBeginResetOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            gatewayVip: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const VirtualNetworkGatewaysBeginGetBgpPeerStatusOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            peer: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const LoadBalancerListResult: {
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
export declare const LoadBalancerBackendAddressPoolListResult: {
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
export declare const LoadBalancerFrontendIPConfigurationListResult: {
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
export declare const InboundNatRuleListResult: {
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
export declare const LoadBalancerLoadBalancingRuleListResult: {
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
export declare const NetworkInterfaceListResult: {
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
export declare const LoadBalancerProbeListResult: {
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
export declare const NetworkInterfaceIPConfigurationListResult: {
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
export declare const NetworkInterfaceLoadBalancerListResult: {
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
export declare const NetworkSecurityGroupListResult: {
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
export declare const SecurityRuleListResult: {
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
export declare const NetworkWatcherListResult: {
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
export declare const PacketCaptureListResult: {
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
export declare const ConnectionMonitorListResult: {
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
export declare const PublicIPAddressListResult: {
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
export declare const RouteFilterListResult: {
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
export declare const RouteFilterRuleListResult: {
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
export declare const RouteTableListResult: {
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
export declare const RouteListResult: {
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
export declare const UsagesListResult: {
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
export declare const VirtualNetworkListResult: {
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
export declare const VirtualNetworkListUsageResult: {
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
            nextLink: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const SubnetListResult: {
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
export declare const VirtualNetworkPeeringListResult: {
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
export declare const VirtualNetworkGatewayListResult: {
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
export declare const VirtualNetworkGatewayListConnectionsResult: {
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
export declare const VirtualNetworkGatewayConnectionListResult: {
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
export declare const LocalNetworkGatewayListResult: {
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
