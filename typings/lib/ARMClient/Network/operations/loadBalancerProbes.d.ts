import * as msRest from "ms-rest-js";
import * as Models from "../models";
import { NetworkManagementClientContext } from "../networkManagementClientContext";
/** Class representing a LoadBalancerProbes. */
export declare class LoadBalancerProbes {
    private readonly client;
    private readonly serializer;
    /**
     * Create a LoadBalancerProbes.
     * @param {NetworkManagementClientContext} client Reference to the service client.
     */
    constructor(client: NetworkManagementClientContext);
    /**
     * Gets all the load balancer probes.
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
    listWithHttpOperationResponse(resourceGroupName: string, loadBalancerName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.LoadBalancerProbeListResult>>;
    /**
     * Gets load balancer probe.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} loadBalancerName The name of the load balancer.
     *
     * @param {string} probeName The name of the probe.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    getWithHttpOperationResponse(resourceGroupName: string, loadBalancerName: string, probeName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.Probe>>;
    /**
     * Gets all the load balancer probes.
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
    listNextWithHttpOperationResponse(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.LoadBalancerProbeListResult>>;
    /**
     * Gets all the load balancer probes.
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
     *                      {Models.LoadBalancerProbeListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.LoadBalancerProbeListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    list(resourceGroupName: string, loadBalancerName: string): Promise<Models.LoadBalancerProbeListResult>;
    list(resourceGroupName: string, loadBalancerName: string, options: msRest.RequestOptionsBase): Promise<Models.LoadBalancerProbeListResult>;
    list(resourceGroupName: string, loadBalancerName: string, callback: msRest.ServiceCallback<Models.LoadBalancerProbeListResult>): void;
    list(resourceGroupName: string, loadBalancerName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.LoadBalancerProbeListResult>): void;
    /**
     * Gets load balancer probe.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} loadBalancerName The name of the load balancer.
     *
     * @param {string} probeName The name of the probe.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.Probe} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.Probe} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    get(resourceGroupName: string, loadBalancerName: string, probeName: string): Promise<Models.Probe>;
    get(resourceGroupName: string, loadBalancerName: string, probeName: string, options: msRest.RequestOptionsBase): Promise<Models.Probe>;
    get(resourceGroupName: string, loadBalancerName: string, probeName: string, callback: msRest.ServiceCallback<Models.Probe>): void;
    get(resourceGroupName: string, loadBalancerName: string, probeName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Probe>): void;
    /**
     * Gets all the load balancer probes.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call to List operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.LoadBalancerProbeListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.LoadBalancerProbeListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listNext(nextPageLink: string): Promise<Models.LoadBalancerProbeListResult>;
    listNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.LoadBalancerProbeListResult>;
    listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.LoadBalancerProbeListResult>): void;
    listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.LoadBalancerProbeListResult>): void;
}
