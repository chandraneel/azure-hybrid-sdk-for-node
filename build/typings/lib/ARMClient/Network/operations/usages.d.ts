import * as msRest from "ms-rest-js";
import * as Models from "../models";
import { NetworkManagementClientContext } from "../networkManagementClientContext";
/** Class representing a Usages. */
export declare class Usages {
    private readonly client;
    private readonly serializer;
    /**
     * Create a Usages.
     * @param {NetworkManagementClientContext} client Reference to the service client.
     */
    constructor(client: NetworkManagementClientContext);
    /**
     * List network usages for a subscription.
     *
     * @param {string} location The location where resource usage is queried.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    listWithHttpOperationResponse(location: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.UsagesListResult>>;
    /**
     * List network usages for a subscription.
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
    listNextWithHttpOperationResponse(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.UsagesListResult>>;
    /**
     * List network usages for a subscription.
     *
     * @param {string} location The location where resource usage is queried.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.UsagesListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.UsagesListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    list(location: string): Promise<Models.UsagesListResult>;
    list(location: string, options: msRest.RequestOptionsBase): Promise<Models.UsagesListResult>;
    list(location: string, callback: msRest.ServiceCallback<Models.UsagesListResult>): void;
    list(location: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.UsagesListResult>): void;
    /**
     * List network usages for a subscription.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call to List operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.UsagesListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.UsagesListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listNext(nextPageLink: string): Promise<Models.UsagesListResult>;
    listNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.UsagesListResult>;
    listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.UsagesListResult>): void;
    listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.UsagesListResult>): void;
}
