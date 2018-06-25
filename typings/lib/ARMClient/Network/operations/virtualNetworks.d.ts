import * as msRest from "ms-rest-js";
import * as Models from "../models";
import { NetworkManagementClientContext } from "../networkManagementClientContext";
/** Class representing a VirtualNetworks. */
export declare class VirtualNetworks {
    private readonly client;
    private readonly serializer;
    /**
     * Create a VirtualNetworks.
     * @param {NetworkManagementClientContext} client Reference to the service client.
     */
    constructor(client: NetworkManagementClientContext);
    /**
     * Deletes the specified virtual network.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualNetworkName The name of the virtual network.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    deleteMethodWithHttpOperationResponse(resourceGroupName: string, virtualNetworkName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Gets the specified virtual network by resource group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualNetworkName The name of the virtual network.
     *
     * @param {VirtualNetworksGetOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    getWithHttpOperationResponse(resourceGroupName: string, virtualNetworkName: string, options?: Models.VirtualNetworksGetOptionalParams): Promise<msRest.HttpOperationResponse<Models.VirtualNetwork>>;
    /**
     * Creates or updates a virtual network in the specified resource group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualNetworkName The name of the virtual network.
     *
     * @param {VirtualNetwork} parameters Parameters supplied to the create or update virtual network
     * operation
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    createOrUpdateWithHttpOperationResponse(resourceGroupName: string, virtualNetworkName: string, parameters: Models.VirtualNetwork, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Updates a virtual network tags.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualNetworkName The name of the virtual network.
     *
     * @param {TagsObject} parameters Parameters supplied to update virtual network tags.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    updateTagsWithHttpOperationResponse(resourceGroupName: string, virtualNetworkName: string, parameters: Models.TagsObject, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Gets all virtual networks in a subscription.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    listAllWithHttpOperationResponse(options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.VirtualNetworkListResult>>;
    /**
     * Gets all virtual networks in a resource group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    listWithHttpOperationResponse(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.VirtualNetworkListResult>>;
    /**
     * Checks whether a private IP address is available for use.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualNetworkName The name of the virtual network.
     *
     * @param {VirtualNetworksCheckIPAddressAvailabilityOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    checkIPAddressAvailabilityWithHttpOperationResponse(resourceGroupName: string, virtualNetworkName: string, options?: Models.VirtualNetworksCheckIPAddressAvailabilityOptionalParams): Promise<msRest.HttpOperationResponse<Models.IPAddressAvailabilityResult>>;
    /**
     * Lists usage stats.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualNetworkName The name of the virtual network.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    listUsageWithHttpOperationResponse(resourceGroupName: string, virtualNetworkName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.VirtualNetworkListUsageResult>>;
    /**
     * Deletes the specified virtual network.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualNetworkName The name of the virtual network.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginDeleteMethodWithHttpOperationResponse(resourceGroupName: string, virtualNetworkName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<void>>;
    /**
     * Creates or updates a virtual network in the specified resource group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualNetworkName The name of the virtual network.
     *
     * @param {VirtualNetwork} parameters Parameters supplied to the create or update virtual network
     * operation
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginCreateOrUpdateWithHttpOperationResponse(resourceGroupName: string, virtualNetworkName: string, parameters: Models.VirtualNetwork, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.VirtualNetwork>>;
    /**
     * Updates a virtual network tags.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualNetworkName The name of the virtual network.
     *
     * @param {TagsObject} parameters Parameters supplied to update virtual network tags.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginUpdateTagsWithHttpOperationResponse(resourceGroupName: string, virtualNetworkName: string, parameters: Models.TagsObject, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.VirtualNetwork>>;
    /**
     * Gets all virtual networks in a subscription.
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
    listAllNextWithHttpOperationResponse(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.VirtualNetworkListResult>>;
    /**
     * Gets all virtual networks in a resource group.
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
    listNextWithHttpOperationResponse(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.VirtualNetworkListResult>>;
    /**
     * Lists usage stats.
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
    listUsageNextWithHttpOperationResponse(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.VirtualNetworkListUsageResult>>;
    /**
     * Deletes the specified virtual network.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualNetworkName The name of the virtual network.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
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
    deleteMethod(resourceGroupName: string, virtualNetworkName: string): Promise<void>;
    deleteMethod(resourceGroupName: string, virtualNetworkName: string, options: msRest.RequestOptionsBase): Promise<void>;
    deleteMethod(resourceGroupName: string, virtualNetworkName: string, callback: msRest.ServiceCallback<void>): void;
    deleteMethod(resourceGroupName: string, virtualNetworkName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * Gets the specified virtual network by resource group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualNetworkName The name of the virtual network.
     *
     * @param {VirtualNetworksGetOptionalParams} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.VirtualNetwork} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.VirtualNetwork} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    get(resourceGroupName: string, virtualNetworkName: string): Promise<Models.VirtualNetwork>;
    get(resourceGroupName: string, virtualNetworkName: string, options: Models.VirtualNetworksGetOptionalParams): Promise<Models.VirtualNetwork>;
    get(resourceGroupName: string, virtualNetworkName: string, callback: msRest.ServiceCallback<Models.VirtualNetwork>): void;
    get(resourceGroupName: string, virtualNetworkName: string, options: Models.VirtualNetworksGetOptionalParams, callback: msRest.ServiceCallback<Models.VirtualNetwork>): void;
    /**
     * Creates or updates a virtual network in the specified resource group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualNetworkName The name of the virtual network.
     *
     * @param {VirtualNetwork} parameters Parameters supplied to the create or update virtual network
     * operation
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.VirtualNetwork} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.VirtualNetwork} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    createOrUpdate(resourceGroupName: string, virtualNetworkName: string, parameters: Models.VirtualNetwork): Promise<Models.VirtualNetwork>;
    createOrUpdate(resourceGroupName: string, virtualNetworkName: string, parameters: Models.VirtualNetwork, options: msRest.RequestOptionsBase): Promise<Models.VirtualNetwork>;
    createOrUpdate(resourceGroupName: string, virtualNetworkName: string, parameters: Models.VirtualNetwork, callback: msRest.ServiceCallback<Models.VirtualNetwork>): void;
    createOrUpdate(resourceGroupName: string, virtualNetworkName: string, parameters: Models.VirtualNetwork, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VirtualNetwork>): void;
    /**
     * Updates a virtual network tags.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualNetworkName The name of the virtual network.
     *
     * @param {TagsObject} parameters Parameters supplied to update virtual network tags.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.VirtualNetwork} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.VirtualNetwork} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    updateTags(resourceGroupName: string, virtualNetworkName: string, parameters: Models.TagsObject): Promise<Models.VirtualNetwork>;
    updateTags(resourceGroupName: string, virtualNetworkName: string, parameters: Models.TagsObject, options: msRest.RequestOptionsBase): Promise<Models.VirtualNetwork>;
    updateTags(resourceGroupName: string, virtualNetworkName: string, parameters: Models.TagsObject, callback: msRest.ServiceCallback<Models.VirtualNetwork>): void;
    updateTags(resourceGroupName: string, virtualNetworkName: string, parameters: Models.TagsObject, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VirtualNetwork>): void;
    /**
     * Gets all virtual networks in a subscription.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.VirtualNetworkListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.VirtualNetworkListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listAll(): Promise<Models.VirtualNetworkListResult>;
    listAll(options: msRest.RequestOptionsBase): Promise<Models.VirtualNetworkListResult>;
    listAll(callback: msRest.ServiceCallback<Models.VirtualNetworkListResult>): void;
    listAll(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VirtualNetworkListResult>): void;
    /**
     * Gets all virtual networks in a resource group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.VirtualNetworkListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.VirtualNetworkListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    list(resourceGroupName: string): Promise<Models.VirtualNetworkListResult>;
    list(resourceGroupName: string, options: msRest.RequestOptionsBase): Promise<Models.VirtualNetworkListResult>;
    list(resourceGroupName: string, callback: msRest.ServiceCallback<Models.VirtualNetworkListResult>): void;
    list(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VirtualNetworkListResult>): void;
    /**
     * Checks whether a private IP address is available for use.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualNetworkName The name of the virtual network.
     *
     * @param {VirtualNetworksCheckIPAddressAvailabilityOptionalParams} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.IPAddressAvailabilityResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.IPAddressAvailabilityResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    checkIPAddressAvailability(resourceGroupName: string, virtualNetworkName: string): Promise<Models.IPAddressAvailabilityResult>;
    checkIPAddressAvailability(resourceGroupName: string, virtualNetworkName: string, options: Models.VirtualNetworksCheckIPAddressAvailabilityOptionalParams): Promise<Models.IPAddressAvailabilityResult>;
    checkIPAddressAvailability(resourceGroupName: string, virtualNetworkName: string, callback: msRest.ServiceCallback<Models.IPAddressAvailabilityResult>): void;
    checkIPAddressAvailability(resourceGroupName: string, virtualNetworkName: string, options: Models.VirtualNetworksCheckIPAddressAvailabilityOptionalParams, callback: msRest.ServiceCallback<Models.IPAddressAvailabilityResult>): void;
    /**
     * Lists usage stats.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualNetworkName The name of the virtual network.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.VirtualNetworkListUsageResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.VirtualNetworkListUsageResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listUsage(resourceGroupName: string, virtualNetworkName: string): Promise<Models.VirtualNetworkListUsageResult>;
    listUsage(resourceGroupName: string, virtualNetworkName: string, options: msRest.RequestOptionsBase): Promise<Models.VirtualNetworkListUsageResult>;
    listUsage(resourceGroupName: string, virtualNetworkName: string, callback: msRest.ServiceCallback<Models.VirtualNetworkListUsageResult>): void;
    listUsage(resourceGroupName: string, virtualNetworkName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VirtualNetworkListUsageResult>): void;
    /**
     * Deletes the specified virtual network.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualNetworkName The name of the virtual network.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
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
    beginDeleteMethod(resourceGroupName: string, virtualNetworkName: string): Promise<void>;
    beginDeleteMethod(resourceGroupName: string, virtualNetworkName: string, options: msRest.RequestOptionsBase): Promise<void>;
    beginDeleteMethod(resourceGroupName: string, virtualNetworkName: string, callback: msRest.ServiceCallback<void>): void;
    beginDeleteMethod(resourceGroupName: string, virtualNetworkName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * Creates or updates a virtual network in the specified resource group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualNetworkName The name of the virtual network.
     *
     * @param {VirtualNetwork} parameters Parameters supplied to the create or update virtual network
     * operation
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.VirtualNetwork} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.VirtualNetwork} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    beginCreateOrUpdate(resourceGroupName: string, virtualNetworkName: string, parameters: Models.VirtualNetwork): Promise<Models.VirtualNetwork>;
    beginCreateOrUpdate(resourceGroupName: string, virtualNetworkName: string, parameters: Models.VirtualNetwork, options: msRest.RequestOptionsBase): Promise<Models.VirtualNetwork>;
    beginCreateOrUpdate(resourceGroupName: string, virtualNetworkName: string, parameters: Models.VirtualNetwork, callback: msRest.ServiceCallback<Models.VirtualNetwork>): void;
    beginCreateOrUpdate(resourceGroupName: string, virtualNetworkName: string, parameters: Models.VirtualNetwork, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VirtualNetwork>): void;
    /**
     * Updates a virtual network tags.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualNetworkName The name of the virtual network.
     *
     * @param {TagsObject} parameters Parameters supplied to update virtual network tags.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.VirtualNetwork} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.VirtualNetwork} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    beginUpdateTags(resourceGroupName: string, virtualNetworkName: string, parameters: Models.TagsObject): Promise<Models.VirtualNetwork>;
    beginUpdateTags(resourceGroupName: string, virtualNetworkName: string, parameters: Models.TagsObject, options: msRest.RequestOptionsBase): Promise<Models.VirtualNetwork>;
    beginUpdateTags(resourceGroupName: string, virtualNetworkName: string, parameters: Models.TagsObject, callback: msRest.ServiceCallback<Models.VirtualNetwork>): void;
    beginUpdateTags(resourceGroupName: string, virtualNetworkName: string, parameters: Models.TagsObject, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VirtualNetwork>): void;
    /**
     * Gets all virtual networks in a subscription.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call to List operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.VirtualNetworkListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.VirtualNetworkListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listAllNext(nextPageLink: string): Promise<Models.VirtualNetworkListResult>;
    listAllNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.VirtualNetworkListResult>;
    listAllNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.VirtualNetworkListResult>): void;
    listAllNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VirtualNetworkListResult>): void;
    /**
     * Gets all virtual networks in a resource group.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call to List operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.VirtualNetworkListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.VirtualNetworkListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listNext(nextPageLink: string): Promise<Models.VirtualNetworkListResult>;
    listNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.VirtualNetworkListResult>;
    listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.VirtualNetworkListResult>): void;
    listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VirtualNetworkListResult>): void;
    /**
     * Lists usage stats.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call to List operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.VirtualNetworkListUsageResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.VirtualNetworkListUsageResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listUsageNext(nextPageLink: string): Promise<Models.VirtualNetworkListUsageResult>;
    listUsageNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.VirtualNetworkListUsageResult>;
    listUsageNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.VirtualNetworkListUsageResult>): void;
    listUsageNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VirtualNetworkListUsageResult>): void;
}
