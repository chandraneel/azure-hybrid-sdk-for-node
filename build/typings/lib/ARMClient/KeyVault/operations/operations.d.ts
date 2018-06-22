import * as msRest from "ms-rest-js";
import * as Models from "../models";
import { KeyVaultManagementClientContext } from "../keyVaultManagementClientContext";
/** Class representing a Operations. */
export declare class Operations {
    private readonly client;
    private readonly serializer;
    /**
     * Create a Operations.
     * @param {KeyVaultManagementClientContext} client Reference to the service client.
     */
    constructor(client: KeyVaultManagementClientContext);
    /**
     * Lists all of the available Key Vault Rest API operations.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    listWithHttpOperationResponse(options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.OperationListResult>>;
    /**
     * Lists all of the available Key Vault Rest API operations.
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
    listNextWithHttpOperationResponse(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.OperationListResult>>;
    /**
     * Lists all of the available Key Vault Rest API operations.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.OperationListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.OperationListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    list(): Promise<Models.OperationListResult>;
    list(options: msRest.RequestOptionsBase): Promise<Models.OperationListResult>;
    list(callback: msRest.ServiceCallback<Models.OperationListResult>): void;
    list(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OperationListResult>): void;
    /**
     * Lists all of the available Key Vault Rest API operations.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call to List operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.OperationListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.OperationListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listNext(nextPageLink: string): Promise<Models.OperationListResult>;
    listNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.OperationListResult>;
    listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.OperationListResult>): void;
    listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OperationListResult>): void;
}
