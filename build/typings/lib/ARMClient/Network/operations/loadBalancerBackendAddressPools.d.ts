import * as msRest from "ms-rest-js";
import * as Models from "../models";
import { NetworkManagementClientContext } from "../networkManagementClientContext";
/** Class representing a LoadBalancerBackendAddressPools. */
export declare class LoadBalancerBackendAddressPools {
    private readonly client;
    private readonly serializer;
    /**
     * Create a LoadBalancerBackendAddressPools.
     * @param {NetworkManagementClientContext} client Reference to the service client.
     */
    constructor(client: NetworkManagementClientContext);
    /**
     * Gets all the load balancer backed address pools.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} loadBalancerName The name of the load balancer.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    listWithHttpOperationResponse(resourceGroupName: string, loadBalancerName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.LoadBalancerBackendAddressPoolListResult>>;
    /**
     * Gets load balancer backend address pool.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} loadBalancerName The name of the load balancer.
     *
     * @param {string} backendAddressPoolName The name of the backend address pool.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    getWithHttpOperationResponse(resourceGroupName: string, loadBalancerName: string, backendAddressPoolName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.BackendAddressPool>>;
    /**
     * Gets all the load balancer backed address pools.
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
    listNextWithHttpOperationResponse(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.LoadBalancerBackendAddressPoolListResult>>;
    /**
     * Gets all the load balancer backed address pools.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} loadBalancerName The name of the load balancer.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.LoadBalancerBackendAddressPoolListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.LoadBalancerBackendAddressPoolListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    list(resourceGroupName: string, loadBalancerName: string): Promise<Models.LoadBalancerBackendAddressPoolListResult>;
    list(resourceGroupName: string, loadBalancerName: string, options: msRest.RequestOptionsBase): Promise<Models.LoadBalancerBackendAddressPoolListResult>;
    list(resourceGroupName: string, loadBalancerName: string, callback: msRest.ServiceCallback<Models.LoadBalancerBackendAddressPoolListResult>): void;
    list(resourceGroupName: string, loadBalancerName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.LoadBalancerBackendAddressPoolListResult>): void;
    /**
     * Gets load balancer backend address pool.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} loadBalancerName The name of the load balancer.
     *
     * @param {string} backendAddressPoolName The name of the backend address pool.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.BackendAddressPool} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.BackendAddressPool} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    get(resourceGroupName: string, loadBalancerName: string, backendAddressPoolName: string): Promise<Models.BackendAddressPool>;
    get(resourceGroupName: string, loadBalancerName: string, backendAddressPoolName: string, options: msRest.RequestOptionsBase): Promise<Models.BackendAddressPool>;
    get(resourceGroupName: string, loadBalancerName: string, backendAddressPoolName: string, callback: msRest.ServiceCallback<Models.BackendAddressPool>): void;
    get(resourceGroupName: string, loadBalancerName: string, backendAddressPoolName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.BackendAddressPool>): void;
    /**
     * Gets all the load balancer backed address pools.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call to List operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.LoadBalancerBackendAddressPoolListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.LoadBalancerBackendAddressPoolListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listNext(nextPageLink: string): Promise<Models.LoadBalancerBackendAddressPoolListResult>;
    listNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.LoadBalancerBackendAddressPoolListResult>;
    listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.LoadBalancerBackendAddressPoolListResult>): void;
    listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.LoadBalancerBackendAddressPoolListResult>): void;
}
