import * as msRest from "ms-rest-js";
import * as Models from "../models";
import { NetworkManagementClientContext } from "../networkManagementClientContext";
/** Class representing a LoadBalancerNetworkInterfaces. */
export declare class LoadBalancerNetworkInterfaces {
    private readonly client;
    private readonly serializer;
    /**
     * Create a LoadBalancerNetworkInterfaces.
     * @param {NetworkManagementClientContext} client Reference to the service client.
     */
    constructor(client: NetworkManagementClientContext);
    /**
     * Gets associated load balancer network interfaces.
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
    listWithHttpOperationResponse(resourceGroupName: string, loadBalancerName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.NetworkInterfaceListResult>>;
    /**
     * Gets associated load balancer network interfaces.
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
    listNextWithHttpOperationResponse(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.NetworkInterfaceListResult>>;
    /**
     * Gets associated load balancer network interfaces.
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
     *                      {Models.NetworkInterfaceListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.NetworkInterfaceListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    list(resourceGroupName: string, loadBalancerName: string): Promise<Models.NetworkInterfaceListResult>;
    list(resourceGroupName: string, loadBalancerName: string, options: msRest.RequestOptionsBase): Promise<Models.NetworkInterfaceListResult>;
    list(resourceGroupName: string, loadBalancerName: string, callback: msRest.ServiceCallback<Models.NetworkInterfaceListResult>): void;
    list(resourceGroupName: string, loadBalancerName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.NetworkInterfaceListResult>): void;
    /**
     * Gets associated load balancer network interfaces.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call to List operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.NetworkInterfaceListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.NetworkInterfaceListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listNext(nextPageLink: string): Promise<Models.NetworkInterfaceListResult>;
    listNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.NetworkInterfaceListResult>;
    listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.NetworkInterfaceListResult>): void;
    listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.NetworkInterfaceListResult>): void;
}
