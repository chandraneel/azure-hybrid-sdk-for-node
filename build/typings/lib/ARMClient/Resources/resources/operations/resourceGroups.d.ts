import * as msRest from "ms-rest-js";
import * as Models from "../models";
import { ResourceManagementClientContext } from "../resourceManagementClientContext";
/** Class representing a ResourceGroups. */
export declare class ResourceGroups {
    private readonly client;
    private readonly serializer;
    /**
     * Create a ResourceGroups.
     * @param {ResourceManagementClientContext} client Reference to the service client.
     */
    constructor(client: ResourceManagementClientContext);
    /**
     * Checks whether a resource group exists.
     *
     * @param {string} resourceGroupName The name of the resource group to check. The name is case
     * insensitive.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    checkExistenceWithHttpOperationResponse(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<boolean>>;
    /**
     * Creates or updates a resource group.
     *
     * @param {string} resourceGroupName The name of the resource group to create or update.
     *
     * @param {ResourceGroup} parameters Parameters supplied to the create or update a resource group.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    createOrUpdateWithHttpOperationResponse(resourceGroupName: string, parameters: Models.ResourceGroup, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.ResourceGroup>>;
    /**
     * @summary Deletes a resource group.
     *
     * When you delete a resource group, all of its resources are also deleted. Deleting a resource
     * group deletes all of its template deployments and currently stored operations.
     *
     * @param {string} resourceGroupName The name of the resource group to delete. The name is case
     * insensitive.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    deleteMethodWithHttpOperationResponse(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Gets a resource group.
     *
     * @param {string} resourceGroupName The name of the resource group to get. The name is case
     * insensitive.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    getWithHttpOperationResponse(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.ResourceGroup>>;
    /**
     * @summary Updates a resource group.
     *
     * Resource groups can be updated through a simple PATCH operation to a group address. The format
     * of the request is the same as that for creating a resource group. If a field is unspecified, the
     * current value is retained.
     *
     * @param {string} resourceGroupName The name of the resource group to update. The name is case
     * insensitive.
     *
     * @param {ResourceGroupPatchable} parameters Parameters supplied to update a resource group.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    updateWithHttpOperationResponse(resourceGroupName: string, parameters: Models.ResourceGroupPatchable, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.ResourceGroup>>;
    /**
     * Captures the specified resource group as a template.
     *
     * @param {string} resourceGroupName The name of the resource group to export as a template.
     *
     * @param {ExportTemplateRequest} parameters Parameters for exporting the template.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    exportTemplateWithHttpOperationResponse(resourceGroupName: string, parameters: Models.ExportTemplateRequest, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.ResourceGroupExportResult>>;
    /**
     * Gets all the resource groups for a subscription.
     *
     * @param {ResourceGroupsListOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    listWithHttpOperationResponse(options?: Models.ResourceGroupsListOptionalParams): Promise<msRest.HttpOperationResponse<Models.ResourceGroupListResult>>;
    /**
     * @summary Deletes a resource group.
     *
     * When you delete a resource group, all of its resources are also deleted. Deleting a resource
     * group deletes all of its template deployments and currently stored operations.
     *
     * @param {string} resourceGroupName The name of the resource group to delete. The name is case
     * insensitive.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginDeleteMethodWithHttpOperationResponse(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<void>>;
    /**
     * Gets all the resource groups for a subscription.
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
    listNextWithHttpOperationResponse(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.ResourceGroupListResult>>;
    /**
     * Checks whether a resource group exists.
     *
     * @param {string} resourceGroupName The name of the resource group to check. The name is case
     * insensitive.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {boolean} [result]   - The deserialized result object if an error did not occur.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    checkExistence(resourceGroupName: string): Promise<boolean>;
    checkExistence(resourceGroupName: string, options: msRest.RequestOptionsBase): Promise<boolean>;
    checkExistence(resourceGroupName: string, callback: msRest.ServiceCallback<boolean>): void;
    checkExistence(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<boolean>): void;
    /**
     * Creates or updates a resource group.
     *
     * @param {string} resourceGroupName The name of the resource group to create or update.
     *
     * @param {ResourceGroup} parameters Parameters supplied to the create or update a resource group.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.ResourceGroup} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.ResourceGroup} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    createOrUpdate(resourceGroupName: string, parameters: Models.ResourceGroup): Promise<Models.ResourceGroup>;
    createOrUpdate(resourceGroupName: string, parameters: Models.ResourceGroup, options: msRest.RequestOptionsBase): Promise<Models.ResourceGroup>;
    createOrUpdate(resourceGroupName: string, parameters: Models.ResourceGroup, callback: msRest.ServiceCallback<Models.ResourceGroup>): void;
    createOrUpdate(resourceGroupName: string, parameters: Models.ResourceGroup, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ResourceGroup>): void;
    /**
     * @summary Deletes a resource group.
     *
     * When you delete a resource group, all of its resources are also deleted. Deleting a resource
     * group deletes all of its template deployments and currently stored operations.
     *
     * @param {string} resourceGroupName The name of the resource group to delete. The name is case
     * insensitive.
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
    deleteMethod(resourceGroupName: string): Promise<void>;
    deleteMethod(resourceGroupName: string, options: msRest.RequestOptionsBase): Promise<void>;
    deleteMethod(resourceGroupName: string, callback: msRest.ServiceCallback<void>): void;
    deleteMethod(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * Gets a resource group.
     *
     * @param {string} resourceGroupName The name of the resource group to get. The name is case
     * insensitive.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.ResourceGroup} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.ResourceGroup} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    get(resourceGroupName: string): Promise<Models.ResourceGroup>;
    get(resourceGroupName: string, options: msRest.RequestOptionsBase): Promise<Models.ResourceGroup>;
    get(resourceGroupName: string, callback: msRest.ServiceCallback<Models.ResourceGroup>): void;
    get(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ResourceGroup>): void;
    /**
     * @summary Updates a resource group.
     *
     * Resource groups can be updated through a simple PATCH operation to a group address. The format
     * of the request is the same as that for creating a resource group. If a field is unspecified, the
     * current value is retained.
     *
     * @param {string} resourceGroupName The name of the resource group to update. The name is case
     * insensitive.
     *
     * @param {ResourceGroupPatchable} parameters Parameters supplied to update a resource group.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.ResourceGroup} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.ResourceGroup} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    update(resourceGroupName: string, parameters: Models.ResourceGroupPatchable): Promise<Models.ResourceGroup>;
    update(resourceGroupName: string, parameters: Models.ResourceGroupPatchable, options: msRest.RequestOptionsBase): Promise<Models.ResourceGroup>;
    update(resourceGroupName: string, parameters: Models.ResourceGroupPatchable, callback: msRest.ServiceCallback<Models.ResourceGroup>): void;
    update(resourceGroupName: string, parameters: Models.ResourceGroupPatchable, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ResourceGroup>): void;
    /**
     * Captures the specified resource group as a template.
     *
     * @param {string} resourceGroupName The name of the resource group to export as a template.
     *
     * @param {ExportTemplateRequest} parameters Parameters for exporting the template.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.ResourceGroupExportResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.ResourceGroupExportResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    exportTemplate(resourceGroupName: string, parameters: Models.ExportTemplateRequest): Promise<Models.ResourceGroupExportResult>;
    exportTemplate(resourceGroupName: string, parameters: Models.ExportTemplateRequest, options: msRest.RequestOptionsBase): Promise<Models.ResourceGroupExportResult>;
    exportTemplate(resourceGroupName: string, parameters: Models.ExportTemplateRequest, callback: msRest.ServiceCallback<Models.ResourceGroupExportResult>): void;
    exportTemplate(resourceGroupName: string, parameters: Models.ExportTemplateRequest, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ResourceGroupExportResult>): void;
    /**
     * Gets all the resource groups for a subscription.
     *
     * @param {ResourceGroupsListOptionalParams} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.ResourceGroupListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.ResourceGroupListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    list(): Promise<Models.ResourceGroupListResult>;
    list(options: Models.ResourceGroupsListOptionalParams): Promise<Models.ResourceGroupListResult>;
    list(callback: msRest.ServiceCallback<Models.ResourceGroupListResult>): void;
    list(options: Models.ResourceGroupsListOptionalParams, callback: msRest.ServiceCallback<Models.ResourceGroupListResult>): void;
    /**
     * @summary Deletes a resource group.
     *
     * When you delete a resource group, all of its resources are also deleted. Deleting a resource
     * group deletes all of its template deployments and currently stored operations.
     *
     * @param {string} resourceGroupName The name of the resource group to delete. The name is case
     * insensitive.
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
    beginDeleteMethod(resourceGroupName: string): Promise<void>;
    beginDeleteMethod(resourceGroupName: string, options: msRest.RequestOptionsBase): Promise<void>;
    beginDeleteMethod(resourceGroupName: string, callback: msRest.ServiceCallback<void>): void;
    beginDeleteMethod(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * Gets all the resource groups for a subscription.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call to List operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.ResourceGroupListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.ResourceGroupListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listNext(nextPageLink: string): Promise<Models.ResourceGroupListResult>;
    listNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.ResourceGroupListResult>;
    listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ResourceGroupListResult>): void;
    listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ResourceGroupListResult>): void;
}
