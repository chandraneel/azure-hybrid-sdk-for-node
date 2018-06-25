import * as msRest from "ms-rest-js";
import * as Models from "../models";
import { NetworkManagementClientContext } from "../networkManagementClientContext";
/** Class representing a NetworkInterfaceLoadBalancers. */
export declare class NetworkInterfaceLoadBalancers {
    private readonly client;
    private readonly serializer;
    /**
     * Create a NetworkInterfaceLoadBalancers.
     * @param {NetworkManagementClientContext} client Reference to the service client.
     */
    constructor(client: NetworkManagementClientContext);
    /**
     * List all load balancers in a network interface.
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
    listWithHttpOperationResponse(resourceGroupName: string, networkInterfaceName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.NetworkInterfaceLoadBalancerListResult>>;
    /**
     * List all load balancers in a network interface.
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
    listNextWithHttpOperationResponse(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.NetworkInterfaceLoadBalancerListResult>>;
    /**
     * List all load balancers in a network interface.
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
     *                      {Models.NetworkInterfaceLoadBalancerListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.NetworkInterfaceLoadBalancerListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    list(resourceGroupName: string, networkInterfaceName: string): Promise<Models.NetworkInterfaceLoadBalancerListResult>;
    list(resourceGroupName: string, networkInterfaceName: string, options: msRest.RequestOptionsBase): Promise<Models.NetworkInterfaceLoadBalancerListResult>;
    list(resourceGroupName: string, networkInterfaceName: string, callback: msRest.ServiceCallback<Models.NetworkInterfaceLoadBalancerListResult>): void;
    list(resourceGroupName: string, networkInterfaceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.NetworkInterfaceLoadBalancerListResult>): void;
    /**
     * List all load balancers in a network interface.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call to List operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.NetworkInterfaceLoadBalancerListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.NetworkInterfaceLoadBalancerListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listNext(nextPageLink: string): Promise<Models.NetworkInterfaceLoadBalancerListResult>;
    listNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.NetworkInterfaceLoadBalancerListResult>;
    listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.NetworkInterfaceLoadBalancerListResult>): void;
    listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.NetworkInterfaceLoadBalancerListResult>): void;
}
