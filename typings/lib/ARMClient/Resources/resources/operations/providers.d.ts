import * as msRest from "ms-rest-js";
import * as Models from "../models";
import { ResourceManagementClientContext } from "../resourceManagementClientContext";
/** Class representing a Providers. */
export declare class Providers {
    private readonly client;
    private readonly serializer;
    /**
     * Create a Providers.
     * @param {ResourceManagementClientContext} client Reference to the service client.
     */
    constructor(client: ResourceManagementClientContext);
    /**
     * Unregisters a subscription from a resource provider.
     *
     * @param {string} resourceProviderNamespace The namespace of the resource provider to unregister.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    unregisterWithHttpOperationResponse(resourceProviderNamespace: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.Provider>>;
    /**
     * Registers a subscription with a resource provider.
     *
     * @param {string} resourceProviderNamespace The namespace of the resource provider to register.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    registerWithHttpOperationResponse(resourceProviderNamespace: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.Provider>>;
    /**
     * Gets all resource providers for a subscription.
     *
     * @param {ProvidersListOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    listWithHttpOperationResponse(options?: Models.ProvidersListOptionalParams): Promise<msRest.HttpOperationResponse<Models.ProviderListResult>>;
    /**
     * Gets the specified resource provider.
     *
     * @param {string} resourceProviderNamespace The namespace of the resource provider.
     *
     * @param {ProvidersGetOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    getWithHttpOperationResponse(resourceProviderNamespace: string, options?: Models.ProvidersGetOptionalParams): Promise<msRest.HttpOperationResponse<Models.Provider>>;
    /**
     * Gets all resource providers for a subscription.
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
    listNextWithHttpOperationResponse(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.ProviderListResult>>;
    /**
     * Unregisters a subscription from a resource provider.
     *
     * @param {string} resourceProviderNamespace The namespace of the resource provider to unregister.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.Provider} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.Provider} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    unregister(resourceProviderNamespace: string): Promise<Models.Provider>;
    unregister(resourceProviderNamespace: string, options: msRest.RequestOptionsBase): Promise<Models.Provider>;
    unregister(resourceProviderNamespace: string, callback: msRest.ServiceCallback<Models.Provider>): void;
    unregister(resourceProviderNamespace: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Provider>): void;
    /**
     * Registers a subscription with a resource provider.
     *
     * @param {string} resourceProviderNamespace The namespace of the resource provider to register.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.Provider} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.Provider} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    register(resourceProviderNamespace: string): Promise<Models.Provider>;
    register(resourceProviderNamespace: string, options: msRest.RequestOptionsBase): Promise<Models.Provider>;
    register(resourceProviderNamespace: string, callback: msRest.ServiceCallback<Models.Provider>): void;
    register(resourceProviderNamespace: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Provider>): void;
    /**
     * Gets all resource providers for a subscription.
     *
     * @param {ProvidersListOptionalParams} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.ProviderListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.ProviderListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    list(): Promise<Models.ProviderListResult>;
    list(options: Models.ProvidersListOptionalParams): Promise<Models.ProviderListResult>;
    list(callback: msRest.ServiceCallback<Models.ProviderListResult>): void;
    list(options: Models.ProvidersListOptionalParams, callback: msRest.ServiceCallback<Models.ProviderListResult>): void;
    /**
     * Gets the specified resource provider.
     *
     * @param {string} resourceProviderNamespace The namespace of the resource provider.
     *
     * @param {ProvidersGetOptionalParams} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.Provider} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.Provider} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    get(resourceProviderNamespace: string): Promise<Models.Provider>;
    get(resourceProviderNamespace: string, options: Models.ProvidersGetOptionalParams): Promise<Models.Provider>;
    get(resourceProviderNamespace: string, callback: msRest.ServiceCallback<Models.Provider>): void;
    get(resourceProviderNamespace: string, options: Models.ProvidersGetOptionalParams, callback: msRest.ServiceCallback<Models.Provider>): void;
    /**
     * Gets all resource providers for a subscription.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call to List operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.ProviderListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.ProviderListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listNext(nextPageLink: string): Promise<Models.ProviderListResult>;
    listNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.ProviderListResult>;
    listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ProviderListResult>): void;
    listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ProviderListResult>): void;
}
