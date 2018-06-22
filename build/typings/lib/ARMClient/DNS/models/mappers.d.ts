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
export declare const ARecord: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            ipv4Address: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const AaaaRecord: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            ipv6Address: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const MxRecord: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            preference: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            exchange: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const NsRecord: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            nsdname: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const PtrRecord: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            ptrdname: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const SrvRecord: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            priority: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            weight: {
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
            target: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const TxtRecord: {
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
                        };
                    };
                };
            };
        };
    };
};
export declare const CnameRecord: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            cname: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const SoaRecord: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            host: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            email: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            serialNumber: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            refreshTime: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            retryTime: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            expireTime: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            minimumTtl: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const RecordSet: {
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
            etag: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            metadata: {
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
            tTL: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            aRecords: {
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
            aaaaRecords: {
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
            mxRecords: {
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
            nsRecords: {
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
            ptrRecords: {
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
            srvRecords: {
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
            txtRecords: {
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
            cnameRecord: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
            soaRecord: {
                serializedName: string;
                type: {
                    name: string;
                    className: string;
                };
            };
        };
    };
};
export declare const RecordSetUpdateParameters: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            recordSet: {
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
export declare const Zone: {
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
            maxNumberOfRecordSets: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            numberOfRecordSets: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            nameServers: {
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
export declare const ZoneDeleteResult: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            azureAsyncOperation: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            status: {
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
            statusCode: {
                serializedName: string;
                type: {
                    name: string;
                    allowedValues: string[];
                };
            };
            requestId: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const RecordSetsUpdateOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            ifMatch: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const RecordSetsCreateOrUpdateOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            ifMatch: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            ifNoneMatch: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const RecordSetsDeleteMethodOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            ifMatch: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const RecordSetsListByTypeOptionalParams: {
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
            recordsetnamesuffix: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const RecordSetsListByDnsZoneOptionalParams: {
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
            recordsetnamesuffix: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ZonesCreateOrUpdateOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            ifMatch: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
            ifNoneMatch: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ZonesDeleteMethodOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            ifMatch: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const ZonesListByResourceGroupOptionalParams: {
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
export declare const ZonesListOptionalParams: {
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
export declare const ZonesBeginDeleteMethodOptionalParams: {
    serializedName: string;
    type: {
        name: string;
        className: string;
        modelProperties: {
            ifMatch: {
                serializedName: string;
                type: {
                    name: string;
                };
            };
        };
    };
};
export declare const RecordSetListResult: {
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
export declare const ZoneListResult: {
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
