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
export declare const Location: {
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
            subscriptionId: {
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
            displayName: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            latitude: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            longitude: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const SubscriptionPolicies: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            locationPlacementId: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            quotaId: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            spendingLimit: {
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
export declare const Subscription: {
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
            subscriptionId: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            displayName: {
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
                    allowedValues: string[];
                };
            };
            subscriptionPolicies: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            authorizationSource: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const TenantIdDescription: {
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
            tenantId: {
                readOnly: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const LocationListResult: {
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
export declare const SubscriptionListResult: {
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
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const TenantListResult: {
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
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
