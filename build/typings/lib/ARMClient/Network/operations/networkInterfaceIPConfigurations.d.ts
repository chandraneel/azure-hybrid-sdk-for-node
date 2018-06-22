import * as msRest from "ms-rest-js";
import * as Models from "../models";
import { NetworkManagementClientContext } from "../networkManagementClientContext";
/** Class representing a NetworkInterfaceIPConfigurations. */
export declare class NetworkInterfaceIPConfigurations {
    private readonly client;
    private readonly serializer;
    /**
     * Create a NetworkInterfaceIPConfigurations.
     * @param {NetworkManagementClientContext} client Reference to the service client.
     */
    constructor(client: NetworkManagementClientContext);
    /**
     * Get all ip configurations in a network interface
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} networkInterfaceName The name of the network interface.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    listWithHttpOperationResponse(resourceGroupName: string, networkInterfaceName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.NetworkInterfaceIPConfigurationListResult>>;
    /**
     * Gets the specified network interface ip configuration.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} networkInterfaceName The name of the network interface.
     *
     * @param {string} ipConfigurationName The name of the ip configuration name.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    getWithHttpOperationResponse(resourceGroupName: string, networkInterfaceName: string, ipConfigurationName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.NetworkInterfaceIPConfiguration>>;
    /**
     * Get all ip configurations in a network interface
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
    listNextWithHttpOperationResponse(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.NetworkInterfaceIPConfigurationListResult>>;
    /**
     * Get all ip configurations in a network interface
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} networkInterfaceName The name of the network interface.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.NetworkInterfaceIPConfigurationListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.NetworkInterfaceIPConfigurationListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    list(resourceGroupName: string, networkInterfaceName: string): Promise<Models.NetworkInterfaceIPConfigurationListResult>;
    list(resourceGroupName: string, networkInterfaceName: string, options: msRest.RequestOptionsBase): Promise<Models.NetworkInterfaceIPConfigurationListResult>;
    list(resourceGroupName: string, networkInterfaceName: string, callback: msRest.ServiceCallback<Models.NetworkInterfaceIPConfigurationListResult>): void;
    list(resourceGroupName: string, networkInterfaceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.NetworkInterfaceIPConfigurationListResult>): void;
    /**
     * Gets the specified network interface ip configuration.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} networkInterfaceName The name of the network interface.
     *
     * @param {string} ipConfigurationName The name of the ip configuration name.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.NetworkInterfaceIPConfiguration} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.NetworkInterfaceIPConfiguration} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    get(resourceGroupName: string, networkInterfaceName: string, ipConfigurationName: string): Promise<Models.NetworkInterfaceIPConfiguration>;
    get(resourceGroupName: string, networkInterfaceName: string, ipConfigurationName: string, options: msRest.RequestOptionsBase): Promise<Models.NetworkInterfaceIPConfiguration>;
    get(resourceGroupName: string, networkInterfaceName: string, ipConfigurationName: string, callback: msRest.ServiceCallback<Models.NetworkInterfaceIPConfiguration>): void;
    get(resourceGroupName: string, networkInterfaceName: string, ipConfigurationName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.NetworkInterfaceIPConfiguration>): void;
    /**
     * Get all ip configurations in a network interface
     *
     * @param {string} nextPageLink The NextLink from the previous successful call to List operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.NetworkInterfaceIPConfigurationListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.NetworkInterfaceIPConfigurationListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listNext(nextPageLink: string): Promise<Models.NetworkInterfaceIPConfigurationListResult>;
    listNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.NetworkInterfaceIPConfigurationListResult>;
    listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.NetworkInterfaceIPConfigurationListResult>): void;
    listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.NetworkInterfaceIPConfigurationListResult>): void;
}
