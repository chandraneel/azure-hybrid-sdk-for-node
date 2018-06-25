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
export declare const ManagementLockOwner: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            applicationId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ManagementLockObject: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            level: {
                required: boolean;
                serializedName: string;
                type: {
                    name: string;
                };
            };
            notes: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            owners: {
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
            type: {
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
        };
    };
};
export declare const ManagementLocksListAtResourceGroupLevelOptionalParams: {
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
        };
    };
};
export declare const ManagementLocksListAtResourceLevelOptionalParams: {
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
        };
    };
};
export declare const ManagementLocksListAtSubscriptionLevelOptionalParams: {
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
        };
    };
};
export declare const ManagementLockListResult: {
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
