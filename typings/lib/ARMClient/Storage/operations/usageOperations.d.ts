import * as msRest from "ms-rest-js";
import * as Models from "../models";
import { StorageManagementClientContext } from "../storageManagementClientContext";
/** Class representing a UsageOperations. */
export declare class UsageOperations {
    private readonly client;
    private readonly serializer;
    /**
     * Create a UsageOperations.
     * @param {StorageManagementClientContext} client Reference to the service client.
     */
    constructor(client: StorageManagementClientContext);
    /**
     * Gets the current usage count and the limit for the resources under the subscription.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    listWithHttpOperationResponse(options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.UsageListResult>>;
    /**
     * Gets the current usage count and the limit for the resources under the subscription.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.UsageListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.UsageListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    list(): Promise<Models.UsageListResult>;
    list(options: msRest.RequestOptionsBase): Promise<Models.UsageListResult>;
    list(callback: msRest.ServiceCallback<Models.UsageListResult>): void;
    list(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.UsageListResult>): void;
}
