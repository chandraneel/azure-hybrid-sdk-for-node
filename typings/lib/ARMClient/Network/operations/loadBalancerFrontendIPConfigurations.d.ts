import * as msRest from "ms-rest-js";
import * as Models from "../models";
import { NetworkManagementClientContext } from "../networkManagementClientContext";
/** Class representing a LoadBalancerFrontendIPConfigurations. */
export declare class LoadBalancerFrontendIPConfigurations {
    private readonly client;
    private readonly serializer;
    /**
     * Create a LoadBalancerFrontendIPConfigurations.
     * @param {NetworkManagementClientContext} client Reference to the service client.
     */
    constructor(client: NetworkManagementClientContext);
    /**
     * Gets all the load balancer frontend IP configurations.
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
    listWithHttpOperationResponse(resourceGroupName: string, loadBalancerName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.LoadBalancerFrontendIPConfigurationListResult>>;
    /**
     * Gets load balancer frontend IP configuration.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} loadBalancerName The name of the load balancer.
     *
     * @param {string} frontendIPConfigurationName The name of the frontend IP configuration.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    getWithHttpOperationResponse(resourceGroupName: string, loadBalancerName: string, frontendIPConfigurationName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.FrontendIPConfiguration>>;
    /**
     * Gets all the load balancer frontend IP configurations.
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
    listNextWithHttpOperationResponse(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.LoadBalancerFrontendIPConfigurationListResult>>;
    /**
     * Gets all the load balancer frontend IP configurations.
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
     *                      {Models.LoadBalancerFrontendIPConfigurationListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.LoadBalancerFrontendIPConfigurationListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    list(resourceGroupName: string, loadBalancerName: string): Promise<Models.LoadBalancerFrontendIPConfigurationListResult>;
    list(resourceGroupName: string, loadBalancerName: string, options: msRest.RequestOptionsBase): Promise<Models.LoadBalancerFrontendIPConfigurationListResult>;
    list(resourceGroupName: string, loadBalancerName: string, callback: msRest.ServiceCallback<Models.LoadBalancerFrontendIPConfigurationListResult>): void;
    list(resourceGroupName: string, loadBalancerName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.LoadBalancerFrontendIPConfigurationListResult>): void;
    /**
     * Gets load balancer frontend IP configuration.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} loadBalancerName The name of the load balancer.
     *
     * @param {string} frontendIPConfigurationName The name of the frontend IP configuration.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.FrontendIPConfiguration} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.FrontendIPConfiguration} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    get(resourceGroupName: string, loadBalancerName: string, frontendIPConfigurationName: string): Promise<Models.FrontendIPConfiguration>;
    get(resourceGroupName: string, loadBalancerName: string, frontendIPConfigurationName: string, options: msRest.RequestOptionsBase): Promise<Models.FrontendIPConfiguration>;
    get(resourceGroupName: string, loadBalancerName: string, frontendIPConfigurationName: string, callback: msRest.ServiceCallback<Models.FrontendIPConfiguration>): void;
    get(resourceGroupName: string, loadBalancerName: string, frontendIPConfigurationName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.FrontendIPConfiguration>): void;
    /**
     * Gets all the load balancer frontend IP configurations.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call to List operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.LoadBalancerFrontendIPConfigurationListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.LoadBalancerFrontendIPConfigurationListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listNext(nextPageLink: string): Promise<Models.LoadBalancerFrontendIPConfigurationListResult>;
    listNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.LoadBalancerFrontendIPConfigurationListResult>;
    listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.LoadBalancerFrontendIPConfigurationListResult>): void;
    listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.LoadBalancerFrontendIPConfigurationListResult>): void;
}
