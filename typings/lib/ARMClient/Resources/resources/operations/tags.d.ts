import * as msRest from "ms-rest-js";
import * as Models from "../models";
import { ResourceManagementClientContext } from "../resourceManagementClientContext";
/** Class representing a Tags. */
export declare class Tags {
    private readonly client;
    private readonly serializer;
    /**
     * Create a Tags.
     * @param {ResourceManagementClientContext} client Reference to the service client.
     */
    constructor(client: ResourceManagementClientContext);
    /**
     * Deletes a tag value.
     *
     * @param {string} tagName The name of the tag.
     *
     * @param {string} tagValue The value of the tag to delete.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    deleteValueWithHttpOperationResponse(tagName: string, tagValue: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<void>>;
    /**
     * Creates a tag value. The name of the tag must already exist.
     *
     * @param {string} tagName The name of the tag.
     *
     * @param {string} tagValue The value of the tag to create.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    createOrUpdateValueWithHttpOperationResponse(tagName: string, tagValue: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.TagValue>>;
    /**
     * @summary Creates a tag in the subscription.
     *
     * The tag name can have a maximum of 512 characters and is case insensitive. Tag names created by
     * Azure have prefixes of microsoft, azure, or windows. You cannot create tags with one of these
     * prefixes.
     *
     * @param {string} tagName The name of the tag to create.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    createOrUpdateWithHttpOperationResponse(tagName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.TagDetails>>;
    /**
     * @summary Deletes a tag from the subscription.
     *
     * You must remove all values from a resource tag before you can delete it.
     *
     * @param {string} tagName The name of the tag.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    deleteMethodWithHttpOperationResponse(tagName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<void>>;
    /**
     * Gets the names and values of all resource tags that are defined in a subscription.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    listWithHttpOperationResponse(options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.TagsListResult>>;
    /**
     * Gets the names and values of all resource tags that are defined in a subscription.
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
    listNextWithHttpOperationResponse(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.TagsListResult>>;
    /**
     * Deletes a tag value.
     *
     * @param {string} tagName The name of the tag.
     *
     * @param {string} tagValue The value of the tag to delete.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {void} [result]   - The deserialized result object if an error did not occur.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    deleteValue(tagName: string, tagValue: string): Promise<void>;
    deleteValue(tagName: string, tagValue: string, options: msRest.RequestOptionsBase): Promise<void>;
    deleteValue(tagName: string, tagValue: string, callback: msRest.ServiceCallback<void>): void;
    deleteValue(tagName: string, tagValue: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * Creates a tag value. The name of the tag must already exist.
     *
     * @param {string} tagName The name of the tag.
     *
     * @param {string} tagValue The value of the tag to create.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.TagValue} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.TagValue} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    createOrUpdateValue(tagName: string, tagValue: string): Promise<Models.TagValue>;
    createOrUpdateValue(tagName: string, tagValue: string, options: msRest.RequestOptionsBase): Promise<Models.TagValue>;
    createOrUpdateValue(tagName: string, tagValue: string, callback: msRest.ServiceCallback<Models.TagValue>): void;
    createOrUpdateValue(tagName: string, tagValue: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.TagValue>): void;
    /**
     * @summary Creates a tag in the subscription.
     *
     * The tag name can have a maximum of 512 characters and is case insensitive. Tag names created by
     * Azure have prefixes of microsoft, azure, or windows. You cannot create tags with one of these
     * prefixes.
     *
     * @param {string} tagName The name of the tag to create.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.TagDetails} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.TagDetails} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    createOrUpdate(tagName: string): Promise<Models.TagDetails>;
    createOrUpdate(tagName: string, options: msRest.RequestOptionsBase): Promise<Models.TagDetails>;
    createOrUpdate(tagName: string, callback: msRest.ServiceCallback<Models.TagDetails>): void;
    createOrUpdate(tagName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.TagDetails>): void;
    /**
     * @summary Deletes a tag from the subscription.
     *
     * You must remove all values from a resource tag before you can delete it.
     *
     * @param {string} tagName The name of the tag.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {void} [result]   - The deserialized result object if an error did not occur.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    deleteMethod(tagName: string): Promise<void>;
    deleteMethod(tagName: string, options: msRest.RequestOptionsBase): Promise<void>;
    deleteMethod(tagName: string, callback: msRest.ServiceCallback<void>): void;
    deleteMethod(tagName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * Gets the names and values of all resource tags that are defined in a subscription.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.TagsListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.TagsListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    list(): Promise<Models.TagsListResult>;
    list(options: msRest.RequestOptionsBase): Promise<Models.TagsListResult>;
    list(callback: msRest.ServiceCallback<Models.TagsListResult>): void;
    list(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.TagsListResult>): void;
    /**
     * Gets the names and values of all resource tags that are defined in a subscription.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call to List operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.TagsListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.TagsListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listNext(nextPageLink: string): Promise<Models.TagsListResult>;
    listNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.TagsListResult>;
    listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.TagsListResult>): void;
    listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.TagsListResult>): void;
}
