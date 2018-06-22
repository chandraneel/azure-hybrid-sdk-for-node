import * as msRest from "ms-rest-js";
import * as Models from "../models";
import { NetworkManagementClientContext } from "../networkManagementClientContext";
/** Class representing a VirtualNetworkPeerings. */
export declare class VirtualNetworkPeerings {
    private readonly client;
    private readonly serializer;
    /**
     * Create a VirtualNetworkPeerings.
     * @param {NetworkManagementClientContext} client Reference to the service client.
     */
    constructor(client: NetworkManagementClientContext);
    /**
     * Deletes the specified virtual network peering.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualNetworkName The name of the virtual network.
     *
     * @param {string} virtualNetworkPeeringName The name of the virtual network peering.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    deleteMethodWithHttpOperationResponse(resourceGroupName: string, virtualNetworkName: string, virtualNetworkPeeringName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Gets the specified virtual network peering.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualNetworkName The name of the virtual network.
     *
     * @param {string} virtualNetworkPeeringName The name of the virtual network peering.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    getWithHttpOperationResponse(resourceGroupName: string, virtualNetworkName: string, virtualNetworkPeeringName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.VirtualNetworkPeering>>;
    /**
     * Creates or updates a peering in the specified virtual network.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualNetworkName The name of the virtual network.
     *
     * @param {string} virtualNetworkPeeringName The name of the peering.
     *
     * @param {VirtualNetworkPeering} virtualNetworkPeeringParameters Parameters supplied to the create
     * or update virtual network peering operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    createOrUpdateWithHttpOperationResponse(resourceGroupName: string, virtualNetworkName: string, virtualNetworkPeeringName: string, virtualNetworkPeeringParameters: Models.VirtualNetworkPeering, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Gets all virtual network peerings in a virtual network.
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
    listWithHttpOperationResponse(resourceGroupName: string, virtualNetworkName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.VirtualNetworkPeeringListResult>>;
    /**
     * Deletes the specified virtual network peering.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualNetworkName The name of the virtual network.
     *
     * @param {string} virtualNetworkPeeringName The name of the virtual network peering.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginDeleteMethodWithHttpOperationResponse(resourceGroupName: string, virtualNetworkName: string, virtualNetworkPeeringName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<void>>;
    /**
     * Creates or updates a peering in the specified virtual network.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualNetworkName The name of the virtual network.
     *
     * @param {string} virtualNetworkPeeringName The name of the peering.
     *
     * @param {VirtualNetworkPeering} virtualNetworkPeeringParameters Parameters supplied to the create
     * or update virtual network peering operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginCreateOrUpdateWithHttpOperationResponse(resourceGroupName: string, virtualNetworkName: string, virtualNetworkPeeringName: string, virtualNetworkPeeringParameters: Models.VirtualNetworkPeering, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.VirtualNetworkPeering>>;
    /**
     * Gets all virtual network peerings in a virtual network.
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
    listNextWithHttpOperationResponse(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.VirtualNetworkPeeringListResult>>;
    /**
     * Deletes the specified virtual network peering.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualNetworkName The name of the virtual network.
     *
     * @param {string} virtualNetworkPeeringName The name of the virtual network peering.
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
    deleteMethod(resourceGroupName: string, virtualNetworkName: string, virtualNetworkPeeringName: string): Promise<void>;
    deleteMethod(resourceGroupName: string, virtualNetworkName: string, virtualNetworkPeeringName: string, options: msRest.RequestOptionsBase): Promise<void>;
    deleteMethod(resourceGroupName: string, virtualNetworkName: string, virtualNetworkPeeringName: string, callback: msRest.ServiceCallback<void>): void;
    deleteMethod(resourceGroupName: string, virtualNetworkName: string, virtualNetworkPeeringName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * Gets the specified virtual network peering.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualNetworkName The name of the virtual network.
     *
     * @param {string} virtualNetworkPeeringName The name of the virtual network peering.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.VirtualNetworkPeering} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.VirtualNetworkPeering} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    get(resourceGroupName: string, virtualNetworkName: string, virtualNetworkPeeringName: string): Promise<Models.VirtualNetworkPeering>;
    get(resourceGroupName: string, virtualNetworkName: string, virtualNetworkPeeringName: string, options: msRest.RequestOptionsBase): Promise<Models.VirtualNetworkPeering>;
    get(resourceGroupName: string, virtualNetworkName: string, virtualNetworkPeeringName: string, callback: msRest.ServiceCallback<Models.VirtualNetworkPeering>): void;
    get(resourceGroupName: string, virtualNetworkName: string, virtualNetworkPeeringName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VirtualNetworkPeering>): void;
    /**
     * Creates or updates a peering in the specified virtual network.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualNetworkName The name of the virtual network.
     *
     * @param {string} virtualNetworkPeeringName The name of the peering.
     *
     * @param {VirtualNetworkPeering} virtualNetworkPeeringParameters Parameters supplied to the create
     * or update virtual network peering operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.VirtualNetworkPeering} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.VirtualNetworkPeering} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    createOrUpdate(resourceGroupName: string, virtualNetworkName: string, virtualNetworkPeeringName: string, virtualNetworkPeeringParameters: Models.VirtualNetworkPeering): Promise<Models.VirtualNetworkPeering>;
    createOrUpdate(resourceGroupName: string, virtualNetworkName: string, virtualNetworkPeeringName: string, virtualNetworkPeeringParameters: Models.VirtualNetworkPeering, options: msRest.RequestOptionsBase): Promise<Models.VirtualNetworkPeering>;
    createOrUpdate(resourceGroupName: string, virtualNetworkName: string, virtualNetworkPeeringName: string, virtualNetworkPeeringParameters: Models.VirtualNetworkPeering, callback: msRest.ServiceCallback<Models.VirtualNetworkPeering>): void;
    createOrUpdate(resourceGroupName: string, virtualNetworkName: string, virtualNetworkPeeringName: string, virtualNetworkPeeringParameters: Models.VirtualNetworkPeering, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VirtualNetworkPeering>): void;
    /**
     * Gets all virtual network peerings in a virtual network.
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
     *                      {Models.VirtualNetworkPeeringListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.VirtualNetworkPeeringListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    list(resourceGroupName: string, virtualNetworkName: string): Promise<Models.VirtualNetworkPeeringListResult>;
    list(resourceGroupName: string, virtualNetworkName: string, options: msRest.RequestOptionsBase): Promise<Models.VirtualNetworkPeeringListResult>;
    list(resourceGroupName: string, virtualNetworkName: string, callback: msRest.ServiceCallback<Models.VirtualNetworkPeeringListResult>): void;
    list(resourceGroupName: string, virtualNetworkName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VirtualNetworkPeeringListResult>): void;
    /**
     * Deletes the specified virtual network peering.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualNetworkName The name of the virtual network.
     *
     * @param {string} virtualNetworkPeeringName The name of the virtual network peering.
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
    beginDeleteMethod(resourceGroupName: string, virtualNetworkName: string, virtualNetworkPeeringName: string): Promise<void>;
    beginDeleteMethod(resourceGroupName: string, virtualNetworkName: string, virtualNetworkPeeringName: string, options: msRest.RequestOptionsBase): Promise<void>;
    beginDeleteMethod(resourceGroupName: string, virtualNetworkName: string, virtualNetworkPeeringName: string, callback: msRest.ServiceCallback<void>): void;
    beginDeleteMethod(resourceGroupName: string, virtualNetworkName: string, virtualNetworkPeeringName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * Creates or updates a peering in the specified virtual network.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualNetworkName The name of the virtual network.
     *
     * @param {string} virtualNetworkPeeringName The name of the peering.
     *
     * @param {VirtualNetworkPeering} virtualNetworkPeeringParameters Parameters supplied to the create
     * or update virtual network peering operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.VirtualNetworkPeering} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.VirtualNetworkPeering} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    beginCreateOrUpdate(resourceGroupName: string, virtualNetworkName: string, virtualNetworkPeeringName: string, virtualNetworkPeeringParameters: Models.VirtualNetworkPeering): Promise<Models.VirtualNetworkPeering>;
    beginCreateOrUpdate(resourceGroupName: string, virtualNetworkName: string, virtualNetworkPeeringName: string, virtualNetworkPeeringParameters: Models.VirtualNetworkPeering, options: msRest.RequestOptionsBase): Promise<Models.VirtualNetworkPeering>;
    beginCreateOrUpdate(resourceGroupName: string, virtualNetworkName: string, virtualNetworkPeeringName: string, virtualNetworkPeeringParameters: Models.VirtualNetworkPeering, callback: msRest.ServiceCallback<Models.VirtualNetworkPeering>): void;
    beginCreateOrUpdate(resourceGroupName: string, virtualNetworkName: string, virtualNetworkPeeringName: string, virtualNetworkPeeringParameters: Models.VirtualNetworkPeering, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VirtualNetworkPeering>): void;
    /**
     * Gets all virtual network peerings in a virtual network.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call to List operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.VirtualNetworkPeeringListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.VirtualNetworkPeeringListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listNext(nextPageLink: string): Promise<Models.VirtualNetworkPeeringListResult>;
    listNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.VirtualNetworkPeeringListResult>;
    listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.VirtualNetworkPeeringListResult>): void;
    listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VirtualNetworkPeeringListResult>): void;
}
