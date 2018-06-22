import * as msRest from "ms-rest-js";
import * as Models from "../models";
import { DnsManagementClientContext } from "../dnsManagementClientContext";
/** Class representing a RecordSets. */
export declare class RecordSets {
    private readonly client;
    private readonly serializer;
    /**
     * Create a RecordSets.
     * @param {DnsManagementClientContext} client Reference to the service client.
     */
    constructor(client: DnsManagementClientContext);
    /**
     * Updates a record set within a DNS zone.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} zoneName The name of the DNS zone (without a terminating dot).
     *
     * @param {string} relativeRecordSetName The name of the record set, relative to the name of the
     * zone.
     *
     * @param {RecordType} recordType The type of DNS record in this record set. Possible values
     * include: 'A', 'AAAA', 'CNAME', 'MX', 'NS', 'PTR', 'SOA', 'SRV', 'TXT'
     *
     * @param {RecordSet} parameters Parameters supplied to the Update operation.
     *
     * @param {RecordSetsUpdateOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    updateWithHttpOperationResponse(resourceGroupName: string, zoneName: string, relativeRecordSetName: string, recordType: Models.RecordType, parameters: Models.RecordSet, options?: Models.RecordSetsUpdateOptionalParams): Promise<msRest.HttpOperationResponse<Models.RecordSet>>;
    /**
     * Creates or updates a record set within a DNS zone.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} zoneName The name of the DNS zone (without a terminating dot).
     *
     * @param {string} relativeRecordSetName The name of the record set, relative to the name of the
     * zone.
     *
     * @param {RecordType} recordType The type of DNS record in this record set. Record sets of type
     * SOA can be updated but not created (they are created when the DNS zone is created). Possible
     * values include: 'A', 'AAAA', 'CNAME', 'MX', 'NS', 'PTR', 'SOA', 'SRV', 'TXT'
     *
     * @param {RecordSet} parameters Parameters supplied to the CreateOrUpdate operation.
     *
     * @param {RecordSetsCreateOrUpdateOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    createOrUpdateWithHttpOperationResponse(resourceGroupName: string, zoneName: string, relativeRecordSetName: string, recordType: Models.RecordType, parameters: Models.RecordSet, options?: Models.RecordSetsCreateOrUpdateOptionalParams): Promise<msRest.HttpOperationResponse<Models.RecordSet>>;
    /**
     * Deletes a record set from a DNS zone. This operation cannot be undone.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} zoneName The name of the DNS zone (without a terminating dot).
     *
     * @param {string} relativeRecordSetName The name of the record set, relative to the name of the
     * zone.
     *
     * @param {RecordType} recordType The type of DNS record in this record set. Record sets of type
     * SOA cannot be deleted (they are deleted when the DNS zone is deleted). Possible values include:
     * 'A', 'AAAA', 'CNAME', 'MX', 'NS', 'PTR', 'SOA', 'SRV', 'TXT'
     *
     * @param {RecordSetsDeleteMethodOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    deleteMethodWithHttpOperationResponse(resourceGroupName: string, zoneName: string, relativeRecordSetName: string, recordType: Models.RecordType, options?: Models.RecordSetsDeleteMethodOptionalParams): Promise<msRest.HttpOperationResponse<void>>;
    /**
     * Gets a record set.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} zoneName The name of the DNS zone (without a terminating dot).
     *
     * @param {string} relativeRecordSetName The name of the record set, relative to the name of the
     * zone.
     *
     * @param {RecordType} recordType The type of DNS record in this record set. Possible values
     * include: 'A', 'AAAA', 'CNAME', 'MX', 'NS', 'PTR', 'SOA', 'SRV', 'TXT'
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    getWithHttpOperationResponse(resourceGroupName: string, zoneName: string, relativeRecordSetName: string, recordType: Models.RecordType, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.RecordSet>>;
    /**
     * Lists the record sets of a specified type in a DNS zone.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} zoneName The name of the DNS zone (without a terminating dot).
     *
     * @param {RecordType} recordType The type of record sets to enumerate. Possible values include:
     * 'A', 'AAAA', 'CNAME', 'MX', 'NS', 'PTR', 'SOA', 'SRV', 'TXT'
     *
     * @param {RecordSetsListByTypeOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    listByTypeWithHttpOperationResponse(resourceGroupName: string, zoneName: string, recordType: Models.RecordType, options?: Models.RecordSetsListByTypeOptionalParams): Promise<msRest.HttpOperationResponse<Models.RecordSetListResult>>;
    /**
     * Lists all record sets in a DNS zone.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} zoneName The name of the DNS zone (without a terminating dot).
     *
     * @param {RecordSetsListByDnsZoneOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    listByDnsZoneWithHttpOperationResponse(resourceGroupName: string, zoneName: string, options?: Models.RecordSetsListByDnsZoneOptionalParams): Promise<msRest.HttpOperationResponse<Models.RecordSetListResult>>;
    /**
     * Lists the record sets of a specified type in a DNS zone.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call to List operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    listByTypeNextWithHttpOperationResponse(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.RecordSetListResult>>;
    /**
     * Lists all record sets in a DNS zone.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call to List operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    listByDnsZoneNextWithHttpOperationResponse(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.RecordSetListResult>>;
    /**
     * Updates a record set within a DNS zone.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} zoneName The name of the DNS zone (without a terminating dot).
     *
     * @param {string} relativeRecordSetName The name of the record set, relative to the name of the
     * zone.
     *
     * @param {RecordType} recordType The type of DNS record in this record set. Possible values
     * include: 'A', 'AAAA', 'CNAME', 'MX', 'NS', 'PTR', 'SOA', 'SRV', 'TXT'
     *
     * @param {RecordSet} parameters Parameters supplied to the Update operation.
     *
     * @param {RecordSetsUpdateOptionalParams} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.RecordSet} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.RecordSet} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    update(resourceGroupName: string, zoneName: string, relativeRecordSetName: string, recordType: Models.RecordType, parameters: Models.RecordSet): Promise<Models.RecordSet>;
    update(resourceGroupName: string, zoneName: string, relativeRecordSetName: string, recordType: Models.RecordType, parameters: Models.RecordSet, options: Models.RecordSetsUpdateOptionalParams): Promise<Models.RecordSet>;
    update(resourceGroupName: string, zoneName: string, relativeRecordSetName: string, recordType: Models.RecordType, parameters: Models.RecordSet, callback: msRest.ServiceCallback<Models.RecordSet>): void;
    update(resourceGroupName: string, zoneName: string, relativeRecordSetName: string, recordType: Models.RecordType, parameters: Models.RecordSet, options: Models.RecordSetsUpdateOptionalParams, callback: msRest.ServiceCallback<Models.RecordSet>): void;
    /**
     * Creates or updates a record set within a DNS zone.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} zoneName The name of the DNS zone (without a terminating dot).
     *
     * @param {string} relativeRecordSetName The name of the record set, relative to the name of the
     * zone.
     *
     * @param {RecordType} recordType The type of DNS record in this record set. Record sets of type
     * SOA can be updated but not created (they are created when the DNS zone is created). Possible
     * values include: 'A', 'AAAA', 'CNAME', 'MX', 'NS', 'PTR', 'SOA', 'SRV', 'TXT'
     *
     * @param {RecordSet} parameters Parameters supplied to the CreateOrUpdate operation.
     *
     * @param {RecordSetsCreateOrUpdateOptionalParams} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.RecordSet} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.RecordSet} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    createOrUpdate(resourceGroupName: string, zoneName: string, relativeRecordSetName: string, recordType: Models.RecordType, parameters: Models.RecordSet): Promise<Models.RecordSet>;
    createOrUpdate(resourceGroupName: string, zoneName: string, relativeRecordSetName: string, recordType: Models.RecordType, parameters: Models.RecordSet, options: Models.RecordSetsCreateOrUpdateOptionalParams): Promise<Models.RecordSet>;
    createOrUpdate(resourceGroupName: string, zoneName: string, relativeRecordSetName: string, recordType: Models.RecordType, parameters: Models.RecordSet, callback: msRest.ServiceCallback<Models.RecordSet>): void;
    createOrUpdate(resourceGroupName: string, zoneName: string, relativeRecordSetName: string, recordType: Models.RecordType, parameters: Models.RecordSet, options: Models.RecordSetsCreateOrUpdateOptionalParams, callback: msRest.ServiceCallback<Models.RecordSet>): void;
    /**
     * Deletes a record set from a DNS zone. This operation cannot be undone.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} zoneName The name of the DNS zone (without a terminating dot).
     *
     * @param {string} relativeRecordSetName The name of the record set, relative to the name of the
     * zone.
     *
     * @param {RecordType} recordType The type of DNS record in this record set. Record sets of type
     * SOA cannot be deleted (they are deleted when the DNS zone is deleted). Possible values include:
     * 'A', 'AAAA', 'CNAME', 'MX', 'NS', 'PTR', 'SOA', 'SRV', 'TXT'
     *
     * @param {RecordSetsDeleteMethodOptionalParams} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {void} [result]   - The deserialized result object if an error did not occur.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    deleteMethod(resourceGroupName: string, zoneName: string, relativeRecordSetName: string, recordType: Models.RecordType): Promise<void>;
    deleteMethod(resourceGroupName: string, zoneName: string, relativeRecordSetName: string, recordType: Models.RecordType, options: Models.RecordSetsDeleteMethodOptionalParams): Promise<void>;
    deleteMethod(resourceGroupName: string, zoneName: string, relativeRecordSetName: string, recordType: Models.RecordType, callback: msRest.ServiceCallback<void>): void;
    deleteMethod(resourceGroupName: string, zoneName: string, relativeRecordSetName: string, recordType: Models.RecordType, options: Models.RecordSetsDeleteMethodOptionalParams, callback: msRest.ServiceCallback<void>): void;
    /**
     * Gets a record set.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} zoneName The name of the DNS zone (without a terminating dot).
     *
     * @param {string} relativeRecordSetName The name of the record set, relative to the name of the
     * zone.
     *
     * @param {RecordType} recordType The type of DNS record in this record set. Possible values
     * include: 'A', 'AAAA', 'CNAME', 'MX', 'NS', 'PTR', 'SOA', 'SRV', 'TXT'
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.RecordSet} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.RecordSet} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    get(resourceGroupName: string, zoneName: string, relativeRecordSetName: string, recordType: Models.RecordType): Promise<Models.RecordSet>;
    get(resourceGroupName: string, zoneName: string, relativeRecordSetName: string, recordType: Models.RecordType, options: msRest.RequestOptionsBase): Promise<Models.RecordSet>;
    get(resourceGroupName: string, zoneName: string, relativeRecordSetName: string, recordType: Models.RecordType, callback: msRest.ServiceCallback<Models.RecordSet>): void;
    get(resourceGroupName: string, zoneName: string, relativeRecordSetName: string, recordType: Models.RecordType, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RecordSet>): void;
    /**
     * Lists the record sets of a specified type in a DNS zone.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} zoneName The name of the DNS zone (without a terminating dot).
     *
     * @param {RecordType} recordType The type of record sets to enumerate. Possible values include:
     * 'A', 'AAAA', 'CNAME', 'MX', 'NS', 'PTR', 'SOA', 'SRV', 'TXT'
     *
     * @param {RecordSetsListByTypeOptionalParams} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.RecordSetListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.RecordSetListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listByType(resourceGroupName: string, zoneName: string, recordType: Models.RecordType): Promise<Models.RecordSetListResult>;
    listByType(resourceGroupName: string, zoneName: string, recordType: Models.RecordType, options: Models.RecordSetsListByTypeOptionalParams): Promise<Models.RecordSetListResult>;
    listByType(resourceGroupName: string, zoneName: string, recordType: Models.RecordType, callback: msRest.ServiceCallback<Models.RecordSetListResult>): void;
    listByType(resourceGroupName: string, zoneName: string, recordType: Models.RecordType, options: Models.RecordSetsListByTypeOptionalParams, callback: msRest.ServiceCallback<Models.RecordSetListResult>): void;
    /**
     * Lists all record sets in a DNS zone.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} zoneName The name of the DNS zone (without a terminating dot).
     *
     * @param {RecordSetsListByDnsZoneOptionalParams} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.RecordSetListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.RecordSetListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listByDnsZone(resourceGroupName: string, zoneName: string): Promise<Models.RecordSetListResult>;
    listByDnsZone(resourceGroupName: string, zoneName: string, options: Models.RecordSetsListByDnsZoneOptionalParams): Promise<Models.RecordSetListResult>;
    listByDnsZone(resourceGroupName: string, zoneName: string, callback: msRest.ServiceCallback<Models.RecordSetListResult>): void;
    listByDnsZone(resourceGroupName: string, zoneName: string, options: Models.RecordSetsListByDnsZoneOptionalParams, callback: msRest.ServiceCallback<Models.RecordSetListResult>): void;
    /**
     * Lists the record sets of a specified type in a DNS zone.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call to List operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.RecordSetListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.RecordSetListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listByTypeNext(nextPageLink: string): Promise<Models.RecordSetListResult>;
    listByTypeNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.RecordSetListResult>;
    listByTypeNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.RecordSetListResult>): void;
    listByTypeNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RecordSetListResult>): void;
    /**
     * Lists all record sets in a DNS zone.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call to List operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.RecordSetListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.RecordSetListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listByDnsZoneNext(nextPageLink: string): Promise<Models.RecordSetListResult>;
    listByDnsZoneNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.RecordSetListResult>;
    listByDnsZoneNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.RecordSetListResult>): void;
    listByDnsZoneNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RecordSetListResult>): void;
}
