import * as msRest from "ms-rest-js";
import * as Models from "../models";
import { ComputeManagementClientContext } from "../computeManagementClientContext";
/** Class representing a VirtualMachineRunCommands. */
export declare class VirtualMachineRunCommands {
    private readonly client;
    private readonly serializer;
    /**
     * Create a VirtualMachineRunCommands.
     * @param {ComputeManagementClientContext} client Reference to the service client.
     */
    constructor(client: ComputeManagementClientContext);
    /**
     * Lists all available run commands for a subscription in a location.
     *
     * @param {string} location The location upon which run commands is queried.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    listWithHttpOperationResponse(location: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.RunCommandListResult>>;
    /**
     * Gets specific run command for a subscription in a location.
     *
     * @param {string} location The location upon which run commands is queried.
     *
     * @param {string} commandId The command id.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    getWithHttpOperationResponse(location: string, commandId: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.RunCommandDocument>>;
    /**
     * Lists all available run commands for a subscription in a location.
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
    listNextWithHttpOperationResponse(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.RunCommandListResult>>;
    /**
     * Lists all available run commands for a subscription in a location.
     *
     * @param {string} location The location upon which run commands is queried.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.RunCommandListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.RunCommandListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    list(location: string): Promise<Models.RunCommandListResult>;
    list(location: string, options: msRest.RequestOptionsBase): Promise<Models.RunCommandListResult>;
    list(location: string, callback: msRest.ServiceCallback<Models.RunCommandListResult>): void;
    list(location: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RunCommandListResult>): void;
    /**
     * Gets specific run command for a subscription in a location.
     *
     * @param {string} location The location upon which run commands is queried.
     *
     * @param {string} commandId The command id.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.RunCommandDocument} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.RunCommandDocument} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    get(location: string, commandId: string): Promise<Models.RunCommandDocument>;
    get(location: string, commandId: string, options: msRest.RequestOptionsBase): Promise<Models.RunCommandDocument>;
    get(location: string, commandId: string, callback: msRest.ServiceCallback<Models.RunCommandDocument>): void;
    get(location: string, commandId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RunCommandDocument>): void;
    /**
     * Lists all available run commands for a subscription in a location.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call to List operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.RunCommandListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.RunCommandListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listNext(nextPageLink: string): Promise<Models.RunCommandListResult>;
    listNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.RunCommandListResult>;
    listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.RunCommandListResult>): void;
    listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RunCommandListResult>): void;
}
