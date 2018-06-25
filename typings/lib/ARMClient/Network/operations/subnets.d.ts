import * as msRest from "ms-rest-js";
import * as Models from "../models";
import { NetworkManagementClientContext } from "../networkManagementClientContext";
/** Class representing a Subnets. */
export declare class Subnets {
    private readonly client;
    private readonly serializer;
    /**
     * Create a Subnets.
     * @param {NetworkManagementClientContext} client Reference to the service client.
     */
    constructor(client: NetworkManagementClientContext);
    /**
     * Deletes the specified subnet.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualNetworkName The name of the virtual network.
     *
     * @param {string} subnetName The name of the subnet.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    deleteMethodWithHttpOperationResponse(resourceGroupName: string, virtualNetworkName: string, subnetName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Gets the specified subnet by virtual network and resource group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualNetworkName The name of the virtual network.
     *
     * @param {string} subnetName The name of the subnet.
     *
     * @param {SubnetsGetOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    getWithHttpOperationResponse(resourceGroupName: string, virtualNetworkName: string, subnetName: string, options?: Models.SubnetsGetOptionalParams): Promise<msRest.HttpOperationResponse<Models.Subnet>>;
    /**
     * Creates or updates a subnet in the specified virtual network.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualNetworkName The name of the virtual network.
     *
     * @param {string} subnetName The name of the subnet.
     *
     * @param {Subnet} subnetParameters Parameters supplied to the create or update subnet operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    createOrUpdateWithHttpOperationResponse(resourceGroupName: string, virtualNetworkName: string, subnetName: string, subnetParameters: Models.Subnet, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Gets all subnets in a virtual network.
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
    listWithHttpOperationResponse(resourceGroupName: string, virtualNetworkName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.SubnetListResult>>;
    /**
     * Deletes the specified subnet.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualNetworkName The name of the virtual network.
     *
     * @param {string} subnetName The name of the subnet.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginDeleteMethodWithHttpOperationResponse(resourceGroupName: string, virtualNetworkName: string, subnetName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<void>>;
    /**
     * Creates or updates a subnet in the specified virtual network.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualNetworkName The name of the virtual network.
     *
     * @param {string} subnetName The name of the subnet.
     *
     * @param {Subnet} subnetParameters Parameters supplied to the create or update subnet operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginCreateOrUpdateWithHttpOperationResponse(resourceGroupName: string, virtualNetworkName: string, subnetName: string, subnetParameters: Models.Subnet, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.Subnet>>;
    /**
     * Gets all subnets in a virtual network.
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
    listNextWithHttpOperationResponse(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.SubnetListResult>>;
    /**
     * Deletes the specified subnet.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualNetworkName The name of the virtual network.
     *
     * @param {string} subnetName The name of the subnet.
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
    deleteMethod(resourceGroupName: string, virtualNetworkName: string, subnetName: string): Promise<void>;
    deleteMethod(resourceGroupName: string, virtualNetworkName: string, subnetName: string, options: msRest.RequestOptionsBase): Promise<void>;
    deleteMethod(resourceGroupName: string, virtualNetworkName: string, subnetName: string, callback: msRest.ServiceCallback<void>): void;
    deleteMethod(resourceGroupName: string, virtualNetworkName: string, subnetName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * Gets the specified subnet by virtual network and resource group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualNetworkName The name of the virtual network.
     *
     * @param {string} subnetName The name of the subnet.
     *
     * @param {SubnetsGetOptionalParams} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.Subnet} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.Subnet} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    get(resourceGroupName: string, virtualNetworkName: string, subnetName: string): Promise<Models.Subnet>;
    get(resourceGroupName: string, virtualNetworkName: string, subnetName: string, options: Models.SubnetsGetOptionalParams): Promise<Models.Subnet>;
    get(resourceGroupName: string, virtualNetworkName: string, subnetName: string, callback: msRest.ServiceCallback<Models.Subnet>): void;
    get(resourceGroupName: string, virtualNetworkName: string, subnetName: string, options: Models.SubnetsGetOptionalParams, callback: msRest.ServiceCallback<Models.Subnet>): void;
    /**
     * Creates or updates a subnet in the specified virtual network.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualNetworkName The name of the virtual network.
     *
     * @param {string} subnetName The name of the subnet.
     *
     * @param {Subnet} subnetParameters Parameters supplied to the create or update subnet operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.Subnet} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.Subnet} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    createOrUpdate(resourceGroupName: string, virtualNetworkName: string, subnetName: string, subnetParameters: Models.Subnet): Promise<Models.Subnet>;
    createOrUpdate(resourceGroupName: string, virtualNetworkName: string, subnetName: string, subnetParameters: Models.Subnet, options: msRest.RequestOptionsBase): Promise<Models.Subnet>;
    createOrUpdate(resourceGroupName: string, virtualNetworkName: string, subnetName: string, subnetParameters: Models.Subnet, callback: msRest.ServiceCallback<Models.Subnet>): void;
    createOrUpdate(resourceGroupName: string, virtualNetworkName: string, subnetName: string, subnetParameters: Models.Subnet, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Subnet>): void;
    /**
     * Gets all subnets in a virtual network.
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
     *                      {Models.SubnetListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.SubnetListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    list(resourceGroupName: string, virtualNetworkName: string): Promise<Models.SubnetListResult>;
    list(resourceGroupName: string, virtualNetworkName: string, options: msRest.RequestOptionsBase): Promise<Models.SubnetListResult>;
    list(resourceGroupName: string, virtualNetworkName: string, callback: msRest.ServiceCallback<Models.SubnetListResult>): void;
    list(resourceGroupName: string, virtualNetworkName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SubnetListResult>): void;
    /**
     * Deletes the specified subnet.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualNetworkName The name of the virtual network.
     *
     * @param {string} subnetName The name of the subnet.
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
    beginDeleteMethod(resourceGroupName: string, virtualNetworkName: string, subnetName: string): Promise<void>;
    beginDeleteMethod(resourceGroupName: string, virtualNetworkName: string, subnetName: string, options: msRest.RequestOptionsBase): Promise<void>;
    beginDeleteMethod(resourceGroupName: string, virtualNetworkName: string, subnetName: string, callback: msRest.ServiceCallback<void>): void;
    beginDeleteMethod(resourceGroupName: string, virtualNetworkName: string, subnetName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * Creates or updates a subnet in the specified virtual network.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualNetworkName The name of the virtual network.
     *
     * @param {string} subnetName The name of the subnet.
     *
     * @param {Subnet} subnetParameters Parameters supplied to the create or update subnet operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.Subnet} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.Subnet} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    beginCreateOrUpdate(resourceGroupName: string, virtualNetworkName: string, subnetName: string, subnetParameters: Models.Subnet): Promise<Models.Subnet>;
    beginCreateOrUpdate(resourceGroupName: string, virtualNetworkName: string, subnetName: string, subnetParameters: Models.Subnet, options: msRest.RequestOptionsBase): Promise<Models.Subnet>;
    beginCreateOrUpdate(resourceGroupName: string, virtualNetworkName: string, subnetName: string, subnetParameters: Models.Subnet, callback: msRest.ServiceCallback<Models.Subnet>): void;
    beginCreateOrUpdate(resourceGroupName: string, virtualNetworkName: string, subnetName: string, subnetParameters: Models.Subnet, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Subnet>): void;
    /**
     * Gets all subnets in a virtual network.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call to List operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.SubnetListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.SubnetListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listNext(nextPageLink: string): Promise<Models.SubnetListResult>;
    listNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.SubnetListResult>;
    listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.SubnetListResult>): void;
    listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SubnetListResult>): void;
}
