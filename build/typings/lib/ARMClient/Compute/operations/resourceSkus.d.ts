import * as msRest from "ms-rest-js";
import * as Models from "../models";
import { ComputeManagementClientContext } from "../computeManagementClientContext";
/** Class representing a ResourceSkus. */
export declare class ResourceSkus {
    private readonly client;
    private readonly serializer;
    /**
     * Create a ResourceSkus.
     * @param {ComputeManagementClientContext} client Reference to the service client.
     */
    constructor(client: ComputeManagementClientContext);
    /**
     * Gets the list of Microsoft.Compute SKUs available for your Subscription.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    listWithHttpOperationResponse(options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.ResourceSkusResult>>;
    /**
     * Gets the list of Microsoft.Compute SKUs available for your Subscription.
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
    listNextWithHttpOperationResponse(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.ResourceSkusResult>>;
    /**
     * Gets the list of Microsoft.Compute SKUs available for your Subscription.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.ResourceSkusResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.ResourceSkusResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    list(): Promise<Models.ResourceSkusResult>;
    list(options: msRest.RequestOptionsBase): Promise<Models.ResourceSkusResult>;
    list(callback: msRest.ServiceCallback<Models.ResourceSkusResult>): void;
    list(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ResourceSkusResult>): void;
    /**
     * Gets the list of Microsoft.Compute SKUs available for your Subscription.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call to List operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.ResourceSkusResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.ResourceSkusResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listNext(nextPageLink: string): Promise<Models.ResourceSkusResult>;
    listNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.ResourceSkusResult>;
    listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ResourceSkusResult>): void;
    listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ResourceSkusResult>): void;
}
