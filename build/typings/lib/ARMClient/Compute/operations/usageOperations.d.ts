import * as msRest from "ms-rest-js";
import * as Models from "../models";
import { ComputeManagementClientContext } from "../computeManagementClientContext";
/** Class representing a UsageOperations. */
export declare class UsageOperations {
    private readonly client;
    private readonly serializer;
    /**
     * Create a UsageOperations.
     * @param {ComputeManagementClientContext} client Reference to the service client.
     */
    constructor(client: ComputeManagementClientContext);
    /**
     * Gets, for the specified location, the current compute resource usage information as well as the
     * limits for compute resources under the subscription.
     *
     * @param {string} location The location for which resource usage is queried.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    listWithHttpOperationResponse(location: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.ListUsagesResult>>;
    /**
     * Gets, for the specified location, the current compute resource usage information as well as the
     * limits for compute resources under the subscription.
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
    listNextWithHttpOperationResponse(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.ListUsagesResult>>;
    /**
     * Gets, for the specified location, the current compute resource usage information as well as the
     * limits for compute resources under the subscription.
     *
     * @param {string} location The location for which resource usage is queried.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.ListUsagesResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.ListUsagesResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    list(location: string): Promise<Models.ListUsagesResult>;
    list(location: string, options: msRest.RequestOptionsBase): Promise<Models.ListUsagesResult>;
    list(location: string, callback: msRest.ServiceCallback<Models.ListUsagesResult>): void;
    list(location: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ListUsagesResult>): void;
    /**
     * Gets, for the specified location, the current compute resource usage information as well as the
     * limits for compute resources under the subscription.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call to List operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.ListUsagesResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.ListUsagesResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listNext(nextPageLink: string): Promise<Models.ListUsagesResult>;
    listNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.ListUsagesResult>;
    listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ListUsagesResult>): void;
    listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ListUsagesResult>): void;
}
