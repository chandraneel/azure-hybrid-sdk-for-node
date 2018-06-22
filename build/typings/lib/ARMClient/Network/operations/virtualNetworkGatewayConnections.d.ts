import * as msRest from "ms-rest-js";
import * as Models from "../models";
import { NetworkManagementClientContext } from "../networkManagementClientContext";
/** Class representing a VirtualNetworkGatewayConnections. */
export declare class VirtualNetworkGatewayConnections {
    private readonly client;
    private readonly serializer;
    /**
     * Create a VirtualNetworkGatewayConnections.
     * @param {NetworkManagementClientContext} client Reference to the service client.
     */
    constructor(client: NetworkManagementClientContext);
    /**
     * Creates or updates a virtual network gateway connection in the specified resource group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualNetworkGatewayConnectionName The name of the virtual network gateway
     * connection.
     *
     * @param {VirtualNetworkGatewayConnection} parameters Parameters supplied to the create or update
     * virtual network gateway connection operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    createOrUpdateWithHttpOperationResponse(resourceGroupName: string, virtualNetworkGatewayConnectionName: string, parameters: Models.VirtualNetworkGatewayConnection, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Gets the specified virtual network gateway connection by resource group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualNetworkGatewayConnectionName The name of the virtual network gateway
     * connection.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    getWithHttpOperationResponse(resourceGroupName: string, virtualNetworkGatewayConnectionName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.VirtualNetworkGatewayConnection>>;
    /**
     * Deletes the specified virtual network Gateway connection.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualNetworkGatewayConnectionName The name of the virtual network gateway
     * connection.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    deleteMethodWithHttpOperationResponse(resourceGroupName: string, virtualNetworkGatewayConnectionName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Updates a virtual network gateway connection tags.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualNetworkGatewayConnectionName The name of the virtual network gateway
     * connection.
     *
     * @param {TagsObject} parameters Parameters supplied to update virtual network gateway connection
     * tags.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    updateTagsWithHttpOperationResponse(resourceGroupName: string, virtualNetworkGatewayConnectionName: string, parameters: Models.TagsObject, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * The Put VirtualNetworkGatewayConnectionSharedKey operation sets the virtual network gateway
     * connection shared key for passed virtual network gateway connection in the specified resource
     * group through Network resource provider.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualNetworkGatewayConnectionName The virtual network gateway connection name.
     *
     * @param {ConnectionSharedKey} parameters Parameters supplied to the Begin Set Virtual Network
     * Gateway connection Shared key operation throughNetwork resource provider.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    setSharedKeyWithHttpOperationResponse(resourceGroupName: string, virtualNetworkGatewayConnectionName: string, parameters: Models.ConnectionSharedKey, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * The Get VirtualNetworkGatewayConnectionSharedKey operation retrieves information about the
     * specified virtual network gateway connection shared key through Network resource provider.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualNetworkGatewayConnectionName The virtual network gateway connection
     * shared key name.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    getSharedKeyWithHttpOperationResponse(resourceGroupName: string, virtualNetworkGatewayConnectionName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.ConnectionSharedKey>>;
    /**
     * The List VirtualNetworkGatewayConnections operation retrieves all the virtual network gateways
     * connections created.
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
    listWithHttpOperationResponse(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.VirtualNetworkGatewayConnectionListResult>>;
    /**
     * The VirtualNetworkGatewayConnectionResetSharedKey operation resets the virtual network gateway
     * connection shared key for passed virtual network gateway connection in the specified resource
     * group through Network resource provider.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualNetworkGatewayConnectionName The virtual network gateway connection reset
     * shared key Name.
     *
     * @param {ConnectionResetSharedKey} parameters Parameters supplied to the begin reset virtual
     * network gateway connection shared key operation through network resource provider.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    resetSharedKeyWithHttpOperationResponse(resourceGroupName: string, virtualNetworkGatewayConnectionName: string, parameters: Models.ConnectionResetSharedKey, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Creates or updates a virtual network gateway connection in the specified resource group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualNetworkGatewayConnectionName The name of the virtual network gateway
     * connection.
     *
     * @param {VirtualNetworkGatewayConnection} parameters Parameters supplied to the create or update
     * virtual network gateway connection operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginCreateOrUpdateWithHttpOperationResponse(resourceGroupName: string, virtualNetworkGatewayConnectionName: string, parameters: Models.VirtualNetworkGatewayConnection, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.VirtualNetworkGatewayConnection>>;
    /**
     * Deletes the specified virtual network Gateway connection.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualNetworkGatewayConnectionName The name of the virtual network gateway
     * connection.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginDeleteMethodWithHttpOperationResponse(resourceGroupName: string, virtualNetworkGatewayConnectionName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<void>>;
    /**
     * Updates a virtual network gateway connection tags.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualNetworkGatewayConnectionName The name of the virtual network gateway
     * connection.
     *
     * @param {TagsObject} parameters Parameters supplied to update virtual network gateway connection
     * tags.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginUpdateTagsWithHttpOperationResponse(resourceGroupName: string, virtualNetworkGatewayConnectionName: string, parameters: Models.TagsObject, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.VirtualNetworkGatewayConnectionListEntity>>;
    /**
     * The Put VirtualNetworkGatewayConnectionSharedKey operation sets the virtual network gateway
     * connection shared key for passed virtual network gateway connection in the specified resource
     * group through Network resource provider.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualNetworkGatewayConnectionName The virtual network gateway connection name.
     *
     * @param {ConnectionSharedKey} parameters Parameters supplied to the Begin Set Virtual Network
     * Gateway connection Shared key operation throughNetwork resource provider.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginSetSharedKeyWithHttpOperationResponse(resourceGroupName: string, virtualNetworkGatewayConnectionName: string, parameters: Models.ConnectionSharedKey, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.ConnectionSharedKey>>;
    /**
     * The VirtualNetworkGatewayConnectionResetSharedKey operation resets the virtual network gateway
     * connection shared key for passed virtual network gateway connection in the specified resource
     * group through Network resource provider.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualNetworkGatewayConnectionName The virtual network gateway connection reset
     * shared key Name.
     *
     * @param {ConnectionResetSharedKey} parameters Parameters supplied to the begin reset virtual
     * network gateway connection shared key operation through network resource provider.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginResetSharedKeyWithHttpOperationResponse(resourceGroupName: string, virtualNetworkGatewayConnectionName: string, parameters: Models.ConnectionResetSharedKey, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.ConnectionResetSharedKey>>;
    /**
     * The List VirtualNetworkGatewayConnections operation retrieves all the virtual network gateways
     * connections created.
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
    listNextWithHttpOperationResponse(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.VirtualNetworkGatewayConnectionListResult>>;
    /**
     * Creates or updates a virtual network gateway connection in the specified resource group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualNetworkGatewayConnectionName The name of the virtual network gateway
     * connection.
     *
     * @param {VirtualNetworkGatewayConnection} parameters Parameters supplied to the create or update
     * virtual network gateway connection operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.VirtualNetworkGatewayConnection} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.VirtualNetworkGatewayConnection} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    createOrUpdate(resourceGroupName: string, virtualNetworkGatewayConnectionName: string, parameters: Models.VirtualNetworkGatewayConnection): Promise<Models.VirtualNetworkGatewayConnection>;
    createOrUpdate(resourceGroupName: string, virtualNetworkGatewayConnectionName: string, parameters: Models.VirtualNetworkGatewayConnection, options: msRest.RequestOptionsBase): Promise<Models.VirtualNetworkGatewayConnection>;
    createOrUpdate(resourceGroupName: string, virtualNetworkGatewayConnectionName: string, parameters: Models.VirtualNetworkGatewayConnection, callback: msRest.ServiceCallback<Models.VirtualNetworkGatewayConnection>): void;
    createOrUpdate(resourceGroupName: string, virtualNetworkGatewayConnectionName: string, parameters: Models.VirtualNetworkGatewayConnection, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VirtualNetworkGatewayConnection>): void;
    /**
     * Gets the specified virtual network gateway connection by resource group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualNetworkGatewayConnectionName The name of the virtual network gateway
     * connection.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.VirtualNetworkGatewayConnection} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.VirtualNetworkGatewayConnection} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    get(resourceGroupName: string, virtualNetworkGatewayConnectionName: string): Promise<Models.VirtualNetworkGatewayConnection>;
    get(resourceGroupName: string, virtualNetworkGatewayConnectionName: string, options: msRest.RequestOptionsBase): Promise<Models.VirtualNetworkGatewayConnection>;
    get(resourceGroupName: string, virtualNetworkGatewayConnectionName: string, callback: msRest.ServiceCallback<Models.VirtualNetworkGatewayConnection>): void;
    get(resourceGroupName: string, virtualNetworkGatewayConnectionName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VirtualNetworkGatewayConnection>): void;
    /**
     * Deletes the specified virtual network Gateway connection.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualNetworkGatewayConnectionName The name of the virtual network gateway
     * connection.
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
    deleteMethod(resourceGroupName: string, virtualNetworkGatewayConnectionName: string): Promise<void>;
    deleteMethod(resourceGroupName: string, virtualNetworkGatewayConnectionName: string, options: msRest.RequestOptionsBase): Promise<void>;
    deleteMethod(resourceGroupName: string, virtualNetworkGatewayConnectionName: string, callback: msRest.ServiceCallback<void>): void;
    deleteMethod(resourceGroupName: string, virtualNetworkGatewayConnectionName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * Updates a virtual network gateway connection tags.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualNetworkGatewayConnectionName The name of the virtual network gateway
     * connection.
     *
     * @param {TagsObject} parameters Parameters supplied to update virtual network gateway connection
     * tags.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.VirtualNetworkGatewayConnectionListEntity} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.VirtualNetworkGatewayConnectionListEntity} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    updateTags(resourceGroupName: string, virtualNetworkGatewayConnectionName: string, parameters: Models.TagsObject): Promise<Models.VirtualNetworkGatewayConnectionListEntity>;
    updateTags(resourceGroupName: string, virtualNetworkGatewayConnectionName: string, parameters: Models.TagsObject, options: msRest.RequestOptionsBase): Promise<Models.VirtualNetworkGatewayConnectionListEntity>;
    updateTags(resourceGroupName: string, virtualNetworkGatewayConnectionName: string, parameters: Models.TagsObject, callback: msRest.ServiceCallback<Models.VirtualNetworkGatewayConnectionListEntity>): void;
    updateTags(resourceGroupName: string, virtualNetworkGatewayConnectionName: string, parameters: Models.TagsObject, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VirtualNetworkGatewayConnectionListEntity>): void;
    /**
     * The Put VirtualNetworkGatewayConnectionSharedKey operation sets the virtual network gateway
     * connection shared key for passed virtual network gateway connection in the specified resource
     * group through Network resource provider.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualNetworkGatewayConnectionName The virtual network gateway connection name.
     *
     * @param {ConnectionSharedKey} parameters Parameters supplied to the Begin Set Virtual Network
     * Gateway connection Shared key operation throughNetwork resource provider.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.ConnectionSharedKey} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.ConnectionSharedKey} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    setSharedKey(resourceGroupName: string, virtualNetworkGatewayConnectionName: string, parameters: Models.ConnectionSharedKey): Promise<Models.ConnectionSharedKey>;
    setSharedKey(resourceGroupName: string, virtualNetworkGatewayConnectionName: string, parameters: Models.ConnectionSharedKey, options: msRest.RequestOptionsBase): Promise<Models.ConnectionSharedKey>;
    setSharedKey(resourceGroupName: string, virtualNetworkGatewayConnectionName: string, parameters: Models.ConnectionSharedKey, callback: msRest.ServiceCallback<Models.ConnectionSharedKey>): void;
    setSharedKey(resourceGroupName: string, virtualNetworkGatewayConnectionName: string, parameters: Models.ConnectionSharedKey, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ConnectionSharedKey>): void;
    /**
     * The Get VirtualNetworkGatewayConnectionSharedKey operation retrieves information about the
     * specified virtual network gateway connection shared key through Network resource provider.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualNetworkGatewayConnectionName The virtual network gateway connection
     * shared key name.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.ConnectionSharedKey} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.ConnectionSharedKey} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    getSharedKey(resourceGroupName: string, virtualNetworkGatewayConnectionName: string): Promise<Models.ConnectionSharedKey>;
    getSharedKey(resourceGroupName: string, virtualNetworkGatewayConnectionName: string, options: msRest.RequestOptionsBase): Promise<Models.ConnectionSharedKey>;
    getSharedKey(resourceGroupName: string, virtualNetworkGatewayConnectionName: string, callback: msRest.ServiceCallback<Models.ConnectionSharedKey>): void;
    getSharedKey(resourceGroupName: string, virtualNetworkGatewayConnectionName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ConnectionSharedKey>): void;
    /**
     * The List VirtualNetworkGatewayConnections operation retrieves all the virtual network gateways
     * connections created.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.VirtualNetworkGatewayConnectionListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.VirtualNetworkGatewayConnectionListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    list(resourceGroupName: string): Promise<Models.VirtualNetworkGatewayConnectionListResult>;
    list(resourceGroupName: string, options: msRest.RequestOptionsBase): Promise<Models.VirtualNetworkGatewayConnectionListResult>;
    list(resourceGroupName: string, callback: msRest.ServiceCallback<Models.VirtualNetworkGatewayConnectionListResult>): void;
    list(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VirtualNetworkGatewayConnectionListResult>): void;
    /**
     * The VirtualNetworkGatewayConnectionResetSharedKey operation resets the virtual network gateway
     * connection shared key for passed virtual network gateway connection in the specified resource
     * group through Network resource provider.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualNetworkGatewayConnectionName The virtual network gateway connection reset
     * shared key Name.
     *
     * @param {ConnectionResetSharedKey} parameters Parameters supplied to the begin reset virtual
     * network gateway connection shared key operation through network resource provider.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.ConnectionResetSharedKey} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.ConnectionResetSharedKey} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    resetSharedKey(resourceGroupName: string, virtualNetworkGatewayConnectionName: string, parameters: Models.ConnectionResetSharedKey): Promise<Models.ConnectionResetSharedKey>;
    resetSharedKey(resourceGroupName: string, virtualNetworkGatewayConnectionName: string, parameters: Models.ConnectionResetSharedKey, options: msRest.RequestOptionsBase): Promise<Models.ConnectionResetSharedKey>;
    resetSharedKey(resourceGroupName: string, virtualNetworkGatewayConnectionName: string, parameters: Models.ConnectionResetSharedKey, callback: msRest.ServiceCallback<Models.ConnectionResetSharedKey>): void;
    resetSharedKey(resourceGroupName: string, virtualNetworkGatewayConnectionName: string, parameters: Models.ConnectionResetSharedKey, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ConnectionResetSharedKey>): void;
    /**
     * Creates or updates a virtual network gateway connection in the specified resource group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualNetworkGatewayConnectionName The name of the virtual network gateway
     * connection.
     *
     * @param {VirtualNetworkGatewayConnection} parameters Parameters supplied to the create or update
     * virtual network gateway connection operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.VirtualNetworkGatewayConnection} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.VirtualNetworkGatewayConnection} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    beginCreateOrUpdate(resourceGroupName: string, virtualNetworkGatewayConnectionName: string, parameters: Models.VirtualNetworkGatewayConnection): Promise<Models.VirtualNetworkGatewayConnection>;
    beginCreateOrUpdate(resourceGroupName: string, virtualNetworkGatewayConnectionName: string, parameters: Models.VirtualNetworkGatewayConnection, options: msRest.RequestOptionsBase): Promise<Models.VirtualNetworkGatewayConnection>;
    beginCreateOrUpdate(resourceGroupName: string, virtualNetworkGatewayConnectionName: string, parameters: Models.VirtualNetworkGatewayConnection, callback: msRest.ServiceCallback<Models.VirtualNetworkGatewayConnection>): void;
    beginCreateOrUpdate(resourceGroupName: string, virtualNetworkGatewayConnectionName: string, parameters: Models.VirtualNetworkGatewayConnection, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VirtualNetworkGatewayConnection>): void;
    /**
     * Deletes the specified virtual network Gateway connection.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualNetworkGatewayConnectionName The name of the virtual network gateway
     * connection.
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
    beginDeleteMethod(resourceGroupName: string, virtualNetworkGatewayConnectionName: string): Promise<void>;
    beginDeleteMethod(resourceGroupName: string, virtualNetworkGatewayConnectionName: string, options: msRest.RequestOptionsBase): Promise<void>;
    beginDeleteMethod(resourceGroupName: string, virtualNetworkGatewayConnectionName: string, callback: msRest.ServiceCallback<void>): void;
    beginDeleteMethod(resourceGroupName: string, virtualNetworkGatewayConnectionName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * Updates a virtual network gateway connection tags.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualNetworkGatewayConnectionName The name of the virtual network gateway
     * connection.
     *
     * @param {TagsObject} parameters Parameters supplied to update virtual network gateway connection
     * tags.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.VirtualNetworkGatewayConnectionListEntity} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.VirtualNetworkGatewayConnectionListEntity} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    beginUpdateTags(resourceGroupName: string, virtualNetworkGatewayConnectionName: string, parameters: Models.TagsObject): Promise<Models.VirtualNetworkGatewayConnectionListEntity>;
    beginUpdateTags(resourceGroupName: string, virtualNetworkGatewayConnectionName: string, parameters: Models.TagsObject, options: msRest.RequestOptionsBase): Promise<Models.VirtualNetworkGatewayConnectionListEntity>;
    beginUpdateTags(resourceGroupName: string, virtualNetworkGatewayConnectionName: string, parameters: Models.TagsObject, callback: msRest.ServiceCallback<Models.VirtualNetworkGatewayConnectionListEntity>): void;
    beginUpdateTags(resourceGroupName: string, virtualNetworkGatewayConnectionName: string, parameters: Models.TagsObject, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VirtualNetworkGatewayConnectionListEntity>): void;
    /**
     * The Put VirtualNetworkGatewayConnectionSharedKey operation sets the virtual network gateway
     * connection shared key for passed virtual network gateway connection in the specified resource
     * group through Network resource provider.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualNetworkGatewayConnectionName The virtual network gateway connection name.
     *
     * @param {ConnectionSharedKey} parameters Parameters supplied to the Begin Set Virtual Network
     * Gateway connection Shared key operation throughNetwork resource provider.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.ConnectionSharedKey} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.ConnectionSharedKey} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    beginSetSharedKey(resourceGroupName: string, virtualNetworkGatewayConnectionName: string, parameters: Models.ConnectionSharedKey): Promise<Models.ConnectionSharedKey>;
    beginSetSharedKey(resourceGroupName: string, virtualNetworkGatewayConnectionName: string, parameters: Models.ConnectionSharedKey, options: msRest.RequestOptionsBase): Promise<Models.ConnectionSharedKey>;
    beginSetSharedKey(resourceGroupName: string, virtualNetworkGatewayConnectionName: string, parameters: Models.ConnectionSharedKey, callback: msRest.ServiceCallback<Models.ConnectionSharedKey>): void;
    beginSetSharedKey(resourceGroupName: string, virtualNetworkGatewayConnectionName: string, parameters: Models.ConnectionSharedKey, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ConnectionSharedKey>): void;
    /**
     * The VirtualNetworkGatewayConnectionResetSharedKey operation resets the virtual network gateway
     * connection shared key for passed virtual network gateway connection in the specified resource
     * group through Network resource provider.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualNetworkGatewayConnectionName The virtual network gateway connection reset
     * shared key Name.
     *
     * @param {ConnectionResetSharedKey} parameters Parameters supplied to the begin reset virtual
     * network gateway connection shared key operation through network resource provider.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.ConnectionResetSharedKey} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.ConnectionResetSharedKey} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    beginResetSharedKey(resourceGroupName: string, virtualNetworkGatewayConnectionName: string, parameters: Models.ConnectionResetSharedKey): Promise<Models.ConnectionResetSharedKey>;
    beginResetSharedKey(resourceGroupName: string, virtualNetworkGatewayConnectionName: string, parameters: Models.ConnectionResetSharedKey, options: msRest.RequestOptionsBase): Promise<Models.ConnectionResetSharedKey>;
    beginResetSharedKey(resourceGroupName: string, virtualNetworkGatewayConnectionName: string, parameters: Models.ConnectionResetSharedKey, callback: msRest.ServiceCallback<Models.ConnectionResetSharedKey>): void;
    beginResetSharedKey(resourceGroupName: string, virtualNetworkGatewayConnectionName: string, parameters: Models.ConnectionResetSharedKey, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ConnectionResetSharedKey>): void;
    /**
     * The List VirtualNetworkGatewayConnections operation retrieves all the virtual network gateways
     * connections created.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call to List operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.VirtualNetworkGatewayConnectionListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.VirtualNetworkGatewayConnectionListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listNext(nextPageLink: string): Promise<Models.VirtualNetworkGatewayConnectionListResult>;
    listNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.VirtualNetworkGatewayConnectionListResult>;
    listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.VirtualNetworkGatewayConnectionListResult>): void;
    listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VirtualNetworkGatewayConnectionListResult>): void;
}
