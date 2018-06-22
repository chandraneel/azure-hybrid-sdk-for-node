import * as msRest from "ms-rest-js";
import * as Models from "../models";
import { DnsManagementClientContext } from "../dnsManagementClientContext";
/** Class representing a Zones. */
export declare class Zones {
    private readonly client;
    private readonly serializer;
    /**
     * Create a Zones.
     * @param {DnsManagementClientContext} client Reference to the service client.
     */
    constructor(client: DnsManagementClientContext);
    /**
     * Creates or updates a DNS zone. Does not modify DNS records within the zone.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} zoneName The name of the DNS zone (without a terminating dot).
     *
     * @param {Zone} parameters Parameters supplied to the CreateOrUpdate operation.
     *
     * @param {ZonesCreateOrUpdateOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    createOrUpdateWithHttpOperationResponse(resourceGroupName: string, zoneName: string, parameters: Models.Zone, options?: Models.ZonesCreateOrUpdateOptionalParams): Promise<msRest.HttpOperationResponse<Models.Zone>>;
    /**
     * Deletes a DNS zone. WARNING: All DNS records in the zone will also be deleted. This operation
     * cannot be undone.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} zoneName The name of the DNS zone (without a terminating dot).
     *
     * @param {ZonesDeleteMethodOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    deleteMethodWithHttpOperationResponse(resourceGroupName: string, zoneName: string, options?: Models.ZonesDeleteMethodOptionalParams): Promise<msRest.HttpOperationResponse>;
    /**
     * Gets a DNS zone. Retrieves the zone properties, but not the record sets within the zone.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} zoneName The name of the DNS zone (without a terminating dot).
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    getWithHttpOperationResponse(resourceGroupName: string, zoneName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.Zone>>;
    /**
     * Lists the DNS zones within a resource group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {ZonesListByResourceGroupOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    listByResourceGroupWithHttpOperationResponse(resourceGroupName: string, options?: Models.ZonesListByResourceGroupOptionalParams): Promise<msRest.HttpOperationResponse<Models.ZoneListResult>>;
    /**
     * Lists the DNS zones in all resource groups in a subscription.
     *
     * @param {ZonesListOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    listWithHttpOperationResponse(options?: Models.ZonesListOptionalParams): Promise<msRest.HttpOperationResponse<Models.ZoneListResult>>;
    /**
     * Deletes a DNS zone. WARNING: All DNS records in the zone will also be deleted. This operation
     * cannot be undone.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} zoneName The name of the DNS zone (without a terminating dot).
     *
     * @param {ZonesBeginDeleteMethodOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginDeleteMethodWithHttpOperationResponse(resourceGroupName: string, zoneName: string, options?: Models.ZonesBeginDeleteMethodOptionalParams): Promise<msRest.HttpOperationResponse<Models.ZoneDeleteResult>>;
    /**
     * Lists the DNS zones within a resource group.
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
    listByResourceGroupNextWithHttpOperationResponse(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.ZoneListResult>>;
    /**
     * Lists the DNS zones in all resource groups in a subscription.
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
    listNextWithHttpOperationResponse(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.ZoneListResult>>;
    /**
     * Creates or updates a DNS zone. Does not modify DNS records within the zone.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} zoneName The name of the DNS zone (without a terminating dot).
     *
     * @param {Zone} parameters Parameters supplied to the CreateOrUpdate operation.
     *
     * @param {ZonesCreateOrUpdateOptionalParams} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.Zone} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.Zone} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    createOrUpdate(resourceGroupName: string, zoneName: string, parameters: Models.Zone): Promise<Models.Zone>;
    createOrUpdate(resourceGroupName: string, zoneName: string, parameters: Models.Zone, options: Models.ZonesCreateOrUpdateOptionalParams): Promise<Models.Zone>;
    createOrUpdate(resourceGroupName: string, zoneName: string, parameters: Models.Zone, callback: msRest.ServiceCallback<Models.Zone>): void;
    createOrUpdate(resourceGroupName: string, zoneName: string, parameters: Models.Zone, options: Models.ZonesCreateOrUpdateOptionalParams, callback: msRest.ServiceCallback<Models.Zone>): void;
    /**
     * Deletes a DNS zone. WARNING: All DNS records in the zone will also be deleted. This operation
     * cannot be undone.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} zoneName The name of the DNS zone (without a terminating dot).
     *
     * @param {ZonesDeleteMethodOptionalParams} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.ZoneDeleteResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.ZoneDeleteResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    deleteMethod(resourceGroupName: string, zoneName: string): Promise<Models.ZoneDeleteResult>;
    deleteMethod(resourceGroupName: string, zoneName: string, options: Models.ZonesDeleteMethodOptionalParams): Promise<Models.ZoneDeleteResult>;
    deleteMethod(resourceGroupName: string, zoneName: string, callback: msRest.ServiceCallback<Models.ZoneDeleteResult>): void;
    deleteMethod(resourceGroupName: string, zoneName: string, options: Models.ZonesDeleteMethodOptionalParams, callback: msRest.ServiceCallback<Models.ZoneDeleteResult>): void;
    /**
     * Gets a DNS zone. Retrieves the zone properties, but not the record sets within the zone.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} zoneName The name of the DNS zone (without a terminating dot).
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.Zone} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.Zone} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    get(resourceGroupName: string, zoneName: string): Promise<Models.Zone>;
    get(resourceGroupName: string, zoneName: string, options: msRest.RequestOptionsBase): Promise<Models.Zone>;
    get(resourceGroupName: string, zoneName: string, callback: msRest.ServiceCallback<Models.Zone>): void;
    get(resourceGroupName: string, zoneName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Zone>): void;
    /**
     * Lists the DNS zones within a resource group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {ZonesListByResourceGroupOptionalParams} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.ZoneListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.ZoneListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listByResourceGroup(resourceGroupName: string): Promise<Models.ZoneListResult>;
    listByResourceGroup(resourceGroupName: string, options: Models.ZonesListByResourceGroupOptionalParams): Promise<Models.ZoneListResult>;
    listByResourceGroup(resourceGroupName: string, callback: msRest.ServiceCallback<Models.ZoneListResult>): void;
    listByResourceGroup(resourceGroupName: string, options: Models.ZonesListByResourceGroupOptionalParams, callback: msRest.ServiceCallback<Models.ZoneListResult>): void;
    /**
     * Lists the DNS zones in all resource groups in a subscription.
     *
     * @param {ZonesListOptionalParams} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.ZoneListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.ZoneListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    list(): Promise<Models.ZoneListResult>;
    list(options: Models.ZonesListOptionalParams): Promise<Models.ZoneListResult>;
    list(callback: msRest.ServiceCallback<Models.ZoneListResult>): void;
    list(options: Models.ZonesListOptionalParams, callback: msRest.ServiceCallback<Models.ZoneListResult>): void;
    /**
     * Deletes a DNS zone. WARNING: All DNS records in the zone will also be deleted. This operation
     * cannot be undone.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} zoneName The name of the DNS zone (without a terminating dot).
     *
     * @param {ZonesBeginDeleteMethodOptionalParams} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.ZoneDeleteResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.ZoneDeleteResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    beginDeleteMethod(resourceGroupName: string, zoneName: string): Promise<Models.ZoneDeleteResult>;
    beginDeleteMethod(resourceGroupName: string, zoneName: string, options: Models.ZonesBeginDeleteMethodOptionalParams): Promise<Models.ZoneDeleteResult>;
    beginDeleteMethod(resourceGroupName: string, zoneName: string, callback: msRest.ServiceCallback<Models.ZoneDeleteResult>): void;
    beginDeleteMethod(resourceGroupName: string, zoneName: string, options: Models.ZonesBeginDeleteMethodOptionalParams, callback: msRest.ServiceCallback<Models.ZoneDeleteResult>): void;
    /**
     * Lists the DNS zones within a resource group.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call to List operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.ZoneListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.ZoneListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listByResourceGroupNext(nextPageLink: string): Promise<Models.ZoneListResult>;
    listByResourceGroupNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.ZoneListResult>;
    listByResourceGroupNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ZoneListResult>): void;
    listByResourceGroupNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ZoneListResult>): void;
    /**
     * Lists the DNS zones in all resource groups in a subscription.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call to List operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.ZoneListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.ZoneListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listNext(nextPageLink: string): Promise<Models.ZoneListResult>;
    listNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.ZoneListResult>;
    listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ZoneListResult>): void;
    listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ZoneListResult>): void;
}
