import * as msRest from "ms-rest-js";
import * as Models from "../models";
import { ResourceManagementClientContext } from "../resourceManagementClientContext";
/** Class representing a Resources. */
export declare class Resources {
    private readonly client;
    private readonly serializer;
    /**
     * Create a Resources.
     * @param {ResourceManagementClientContext} client Reference to the service client.
     */
    constructor(client: ResourceManagementClientContext);
    /**
     * Get all the resources for a resource group.
     *
     * @param {string} resourceGroupName The resource group with the resources to get.
     *
     * @param {ResourcesListByResourceGroupOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    listByResourceGroupWithHttpOperationResponse(resourceGroupName: string, options?: Models.ResourcesListByResourceGroupOptionalParams): Promise<msRest.HttpOperationResponse<Models.ResourceListResult>>;
    /**
     * @summary Moves resources from one resource group to another resource group.
     *
     * The resources to move must be in the same source resource group. The target resource group may
     * be in a different subscription. When moving resources, both the source group and the target
     * group are locked for the duration of the operation. Write and delete operations are blocked on
     * the groups until the move completes.
     *
     * @param {string} sourceResourceGroupName The name of the resource group containing the resources
     * to move.
     *
     * @param {ResourcesMoveInfo} parameters Parameters for moving resources.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    moveResourcesWithHttpOperationResponse(sourceResourceGroupName: string, parameters: Models.ResourcesMoveInfo, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * @summary Validates whether resources can be moved from one resource group to another resource
     * group.
     *
     * This operation checks whether the specified resources can be moved to the target. The resources
     * to move must be in the same source resource group. The target resource group may be in a
     * different subscription. If validation succeeds, it returns HTTP response code 204 (no content).
     * If validation fails, it returns HTTP response code 409 (Conflict) with an error message.
     * Retrieve the URL in the Location header value to check the result of the long-running operation.
     *
     * @param {string} sourceResourceGroupName The name of the resource group containing the resources
     * to validate for move.
     *
     * @param {ResourcesMoveInfo} parameters Parameters for moving resources.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    validateMoveResourcesWithHttpOperationResponse(sourceResourceGroupName: string, parameters: Models.ResourcesMoveInfo, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Get all the resources in a subscription.
     *
     * @param {ResourcesListOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    listWithHttpOperationResponse(options?: Models.ResourcesListOptionalParams): Promise<msRest.HttpOperationResponse<Models.ResourceListResult>>;
    /**
     * Checks whether a resource exists.
     *
     * @param {string} resourceGroupName The name of the resource group containing the resource to
     * check. The name is case insensitive.
     *
     * @param {string} resourceProviderNamespace The resource provider of the resource to check.
     *
     * @param {string} parentResourcePath The parent resource identity.
     *
     * @param {string} resourceType The resource type.
     *
     * @param {string} resourceName The name of the resource to check whether it exists.
     *
     * @param {string} apiVersion The API version to use for the operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    checkExistenceWithHttpOperationResponse(resourceGroupName: string, resourceProviderNamespace: string, parentResourcePath: string, resourceType: string, resourceName: string, apiVersion: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<boolean>>;
    /**
     * Deletes a resource.
     *
     * @param {string} resourceGroupName The name of the resource group that contains the resource to
     * delete. The name is case insensitive.
     *
     * @param {string} resourceProviderNamespace The namespace of the resource provider.
     *
     * @param {string} parentResourcePath The parent resource identity.
     *
     * @param {string} resourceType The resource type.
     *
     * @param {string} resourceName The name of the resource to delete.
     *
     * @param {string} apiVersion The API version to use for the operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    deleteMethodWithHttpOperationResponse(resourceGroupName: string, resourceProviderNamespace: string, parentResourcePath: string, resourceType: string, resourceName: string, apiVersion: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Creates a resource.
     *
     * @param {string} resourceGroupName The name of the resource group for the resource. The name is
     * case insensitive.
     *
     * @param {string} resourceProviderNamespace The namespace of the resource provider.
     *
     * @param {string} parentResourcePath The parent resource identity.
     *
     * @param {string} resourceType The resource type of the resource to create.
     *
     * @param {string} resourceName The name of the resource to create.
     *
     * @param {string} apiVersion The API version to use for the operation.
     *
     * @param {GenericResource} parameters Parameters for creating or updating the resource.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    createOrUpdateWithHttpOperationResponse(resourceGroupName: string, resourceProviderNamespace: string, parentResourcePath: string, resourceType: string, resourceName: string, apiVersion: string, parameters: Models.GenericResource, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Updates a resource.
     *
     * @param {string} resourceGroupName The name of the resource group for the resource. The name is
     * case insensitive.
     *
     * @param {string} resourceProviderNamespace The namespace of the resource provider.
     *
     * @param {string} parentResourcePath The parent resource identity.
     *
     * @param {string} resourceType The resource type of the resource to update.
     *
     * @param {string} resourceName The name of the resource to update.
     *
     * @param {string} apiVersion The API version to use for the operation.
     *
     * @param {GenericResource} parameters Parameters for updating the resource.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    updateWithHttpOperationResponse(resourceGroupName: string, resourceProviderNamespace: string, parentResourcePath: string, resourceType: string, resourceName: string, apiVersion: string, parameters: Models.GenericResource, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Gets a resource.
     *
     * @param {string} resourceGroupName The name of the resource group containing the resource to get.
     * The name is case insensitive.
     *
     * @param {string} resourceProviderNamespace The namespace of the resource provider.
     *
     * @param {string} parentResourcePath The parent resource identity.
     *
     * @param {string} resourceType The resource type of the resource.
     *
     * @param {string} resourceName The name of the resource to get.
     *
     * @param {string} apiVersion The API version to use for the operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    getWithHttpOperationResponse(resourceGroupName: string, resourceProviderNamespace: string, parentResourcePath: string, resourceType: string, resourceName: string, apiVersion: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.GenericResource>>;
    /**
     * Checks by ID whether a resource exists.
     *
     * @param {string} resourceId The fully qualified ID of the resource, including the resource name
     * and resource type. Use the format,
     * /subscriptions/{guid}/resourceGroups/{resource-group-name}/{resource-provider-namespace}/{resource-type}/{resource-name}
     *
     * @param {string} apiVersion The API version to use for the operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    checkExistenceByIdWithHttpOperationResponse(resourceId: string, apiVersion: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<boolean>>;
    /**
     * Deletes a resource by ID.
     *
     * @param {string} resourceId The fully qualified ID of the resource, including the resource name
     * and resource type. Use the format,
     * /subscriptions/{guid}/resourceGroups/{resource-group-name}/{resource-provider-namespace}/{resource-type}/{resource-name}
     *
     * @param {string} apiVersion The API version to use for the operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    deleteByIdWithHttpOperationResponse(resourceId: string, apiVersion: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Create a resource by ID.
     *
     * @param {string} resourceId The fully qualified ID of the resource, including the resource name
     * and resource type. Use the format,
     * /subscriptions/{guid}/resourceGroups/{resource-group-name}/{resource-provider-namespace}/{resource-type}/{resource-name}
     *
     * @param {string} apiVersion The API version to use for the operation.
     *
     * @param {GenericResource} parameters Create or update resource parameters.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    createOrUpdateByIdWithHttpOperationResponse(resourceId: string, apiVersion: string, parameters: Models.GenericResource, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Updates a resource by ID.
     *
     * @param {string} resourceId The fully qualified ID of the resource, including the resource name
     * and resource type. Use the format,
     * /subscriptions/{guid}/resourceGroups/{resource-group-name}/{resource-provider-namespace}/{resource-type}/{resource-name}
     *
     * @param {string} apiVersion The API version to use for the operation.
     *
     * @param {GenericResource} parameters Update resource parameters.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    updateByIdWithHttpOperationResponse(resourceId: string, apiVersion: string, parameters: Models.GenericResource, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Gets a resource by ID.
     *
     * @param {string} resourceId The fully qualified ID of the resource, including the resource name
     * and resource type. Use the format,
     * /subscriptions/{guid}/resourceGroups/{resource-group-name}/{resource-provider-namespace}/{resource-type}/{resource-name}
     *
     * @param {string} apiVersion The API version to use for the operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    getByIdWithHttpOperationResponse(resourceId: string, apiVersion: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.GenericResource>>;
    /**
     * @summary Moves resources from one resource group to another resource group.
     *
     * The resources to move must be in the same source resource group. The target resource group may
     * be in a different subscription. When moving resources, both the source group and the target
     * group are locked for the duration of the operation. Write and delete operations are blocked on
     * the groups until the move completes.
     *
     * @param {string} sourceResourceGroupName The name of the resource group containing the resources
     * to move.
     *
     * @param {ResourcesMoveInfo} parameters Parameters for moving resources.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginMoveResourcesWithHttpOperationResponse(sourceResourceGroupName: string, parameters: Models.ResourcesMoveInfo, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<void>>;
    /**
     * @summary Validates whether resources can be moved from one resource group to another resource
     * group.
     *
     * This operation checks whether the specified resources can be moved to the target. The resources
     * to move must be in the same source resource group. The target resource group may be in a
     * different subscription. If validation succeeds, it returns HTTP response code 204 (no content).
     * If validation fails, it returns HTTP response code 409 (Conflict) with an error message.
     * Retrieve the URL in the Location header value to check the result of the long-running operation.
     *
     * @param {string} sourceResourceGroupName The name of the resource group containing the resources
     * to validate for move.
     *
     * @param {ResourcesMoveInfo} parameters Parameters for moving resources.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginValidateMoveResourcesWithHttpOperationResponse(sourceResourceGroupName: string, parameters: Models.ResourcesMoveInfo, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<void>>;
    /**
     * Deletes a resource.
     *
     * @param {string} resourceGroupName The name of the resource group that contains the resource to
     * delete. The name is case insensitive.
     *
     * @param {string} resourceProviderNamespace The namespace of the resource provider.
     *
     * @param {string} parentResourcePath The parent resource identity.
     *
     * @param {string} resourceType The resource type.
     *
     * @param {string} resourceName The name of the resource to delete.
     *
     * @param {string} apiVersion The API version to use for the operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginDeleteMethodWithHttpOperationResponse(resourceGroupName: string, resourceProviderNamespace: string, parentResourcePath: string, resourceType: string, resourceName: string, apiVersion: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<void>>;
    /**
     * Creates a resource.
     *
     * @param {string} resourceGroupName The name of the resource group for the resource. The name is
     * case insensitive.
     *
     * @param {string} resourceProviderNamespace The namespace of the resource provider.
     *
     * @param {string} parentResourcePath The parent resource identity.
     *
     * @param {string} resourceType The resource type of the resource to create.
     *
     * @param {string} resourceName The name of the resource to create.
     *
     * @param {string} apiVersion The API version to use for the operation.
     *
     * @param {GenericResource} parameters Parameters for creating or updating the resource.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginCreateOrUpdateWithHttpOperationResponse(resourceGroupName: string, resourceProviderNamespace: string, parentResourcePath: string, resourceType: string, resourceName: string, apiVersion: string, parameters: Models.GenericResource, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.GenericResource>>;
    /**
     * Updates a resource.
     *
     * @param {string} resourceGroupName The name of the resource group for the resource. The name is
     * case insensitive.
     *
     * @param {string} resourceProviderNamespace The namespace of the resource provider.
     *
     * @param {string} parentResourcePath The parent resource identity.
     *
     * @param {string} resourceType The resource type of the resource to update.
     *
     * @param {string} resourceName The name of the resource to update.
     *
     * @param {string} apiVersion The API version to use for the operation.
     *
     * @param {GenericResource} parameters Parameters for updating the resource.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginUpdateWithHttpOperationResponse(resourceGroupName: string, resourceProviderNamespace: string, parentResourcePath: string, resourceType: string, resourceName: string, apiVersion: string, parameters: Models.GenericResource, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.GenericResource>>;
    /**
     * Deletes a resource by ID.
     *
     * @param {string} resourceId The fully qualified ID of the resource, including the resource name
     * and resource type. Use the format,
     * /subscriptions/{guid}/resourceGroups/{resource-group-name}/{resource-provider-namespace}/{resource-type}/{resource-name}
     *
     * @param {string} apiVersion The API version to use for the operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginDeleteByIdWithHttpOperationResponse(resourceId: string, apiVersion: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<void>>;
    /**
     * Create a resource by ID.
     *
     * @param {string} resourceId The fully qualified ID of the resource, including the resource name
     * and resource type. Use the format,
     * /subscriptions/{guid}/resourceGroups/{resource-group-name}/{resource-provider-namespace}/{resource-type}/{resource-name}
     *
     * @param {string} apiVersion The API version to use for the operation.
     *
     * @param {GenericResource} parameters Create or update resource parameters.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginCreateOrUpdateByIdWithHttpOperationResponse(resourceId: string, apiVersion: string, parameters: Models.GenericResource, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.GenericResource>>;
    /**
     * Updates a resource by ID.
     *
     * @param {string} resourceId The fully qualified ID of the resource, including the resource name
     * and resource type. Use the format,
     * /subscriptions/{guid}/resourceGroups/{resource-group-name}/{resource-provider-namespace}/{resource-type}/{resource-name}
     *
     * @param {string} apiVersion The API version to use for the operation.
     *
     * @param {GenericResource} parameters Update resource parameters.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginUpdateByIdWithHttpOperationResponse(resourceId: string, apiVersion: string, parameters: Models.GenericResource, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.GenericResource>>;
    /**
     * Get all the resources for a resource group.
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
    listByResourceGroupNextWithHttpOperationResponse(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.ResourceListResult>>;
    /**
     * Get all the resources in a subscription.
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
    listNextWithHttpOperationResponse(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.ResourceListResult>>;
    /**
     * Get all the resources for a resource group.
     *
     * @param {string} resourceGroupName The resource group with the resources to get.
     *
     * @param {ResourcesListByResourceGroupOptionalParams} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.ResourceListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.ResourceListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listByResourceGroup(resourceGroupName: string): Promise<Models.ResourceListResult>;
    listByResourceGroup(resourceGroupName: string, options: Models.ResourcesListByResourceGroupOptionalParams): Promise<Models.ResourceListResult>;
    listByResourceGroup(resourceGroupName: string, callback: msRest.ServiceCallback<Models.ResourceListResult>): void;
    listByResourceGroup(resourceGroupName: string, options: Models.ResourcesListByResourceGroupOptionalParams, callback: msRest.ServiceCallback<Models.ResourceListResult>): void;
    /**
     * @summary Moves resources from one resource group to another resource group.
     *
     * The resources to move must be in the same source resource group. The target resource group may
     * be in a different subscription. When moving resources, both the source group and the target
     * group are locked for the duration of the operation. Write and delete operations are blocked on
     * the groups until the move completes.
     *
     * @param {string} sourceResourceGroupName The name of the resource group containing the resources
     * to move.
     *
     * @param {ResourcesMoveInfo} parameters Parameters for moving resources.
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
    moveResources(sourceResourceGroupName: string, parameters: Models.ResourcesMoveInfo): Promise<void>;
    moveResources(sourceResourceGroupName: string, parameters: Models.ResourcesMoveInfo, options: msRest.RequestOptionsBase): Promise<void>;
    moveResources(sourceResourceGroupName: string, parameters: Models.ResourcesMoveInfo, callback: msRest.ServiceCallback<void>): void;
    moveResources(sourceResourceGroupName: string, parameters: Models.ResourcesMoveInfo, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Validates whether resources can be moved from one resource group to another resource
     * group.
     *
     * This operation checks whether the specified resources can be moved to the target. The resources
     * to move must be in the same source resource group. The target resource group may be in a
     * different subscription. If validation succeeds, it returns HTTP response code 204 (no content).
     * If validation fails, it returns HTTP response code 409 (Conflict) with an error message.
     * Retrieve the URL in the Location header value to check the result of the long-running operation.
     *
     * @param {string} sourceResourceGroupName The name of the resource group containing the resources
     * to validate for move.
     *
     * @param {ResourcesMoveInfo} parameters Parameters for moving resources.
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
    validateMoveResources(sourceResourceGroupName: string, parameters: Models.ResourcesMoveInfo): Promise<void>;
    validateMoveResources(sourceResourceGroupName: string, parameters: Models.ResourcesMoveInfo, options: msRest.RequestOptionsBase): Promise<void>;
    validateMoveResources(sourceResourceGroupName: string, parameters: Models.ResourcesMoveInfo, callback: msRest.ServiceCallback<void>): void;
    validateMoveResources(sourceResourceGroupName: string, parameters: Models.ResourcesMoveInfo, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * Get all the resources in a subscription.
     *
     * @param {ResourcesListOptionalParams} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.ResourceListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.ResourceListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    list(): Promise<Models.ResourceListResult>;
    list(options: Models.ResourcesListOptionalParams): Promise<Models.ResourceListResult>;
    list(callback: msRest.ServiceCallback<Models.ResourceListResult>): void;
    list(options: Models.ResourcesListOptionalParams, callback: msRest.ServiceCallback<Models.ResourceListResult>): void;
    /**
     * Checks whether a resource exists.
     *
     * @param {string} resourceGroupName The name of the resource group containing the resource to
     * check. The name is case insensitive.
     *
     * @param {string} resourceProviderNamespace The resource provider of the resource to check.
     *
     * @param {string} parentResourcePath The parent resource identity.
     *
     * @param {string} resourceType The resource type.
     *
     * @param {string} resourceName The name of the resource to check whether it exists.
     *
     * @param {string} apiVersion The API version to use for the operation.
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
    checkExistence(resourceGroupName: string, resourceProviderNamespace: string, parentResourcePath: string, resourceType: string, resourceName: string, apiVersion: string): Promise<boolean>;
    checkExistence(resourceGroupName: string, resourceProviderNamespace: string, parentResourcePath: string, resourceType: string, resourceName: string, apiVersion: string, options: msRest.RequestOptionsBase): Promise<boolean>;
    checkExistence(resourceGroupName: string, resourceProviderNamespace: string, parentResourcePath: string, resourceType: string, resourceName: string, apiVersion: string, callback: msRest.ServiceCallback<boolean>): void;
    checkExistence(resourceGroupName: string, resourceProviderNamespace: string, parentResourcePath: string, resourceType: string, resourceName: string, apiVersion: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<boolean>): void;
    /**
     * Deletes a resource.
     *
     * @param {string} resourceGroupName The name of the resource group that contains the resource to
     * delete. The name is case insensitive.
     *
     * @param {string} resourceProviderNamespace The namespace of the resource provider.
     *
     * @param {string} parentResourcePath The parent resource identity.
     *
     * @param {string} resourceType The resource type.
     *
     * @param {string} resourceName The name of the resource to delete.
     *
     * @param {string} apiVersion The API version to use for the operation.
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
    deleteMethod(resourceGroupName: string, resourceProviderNamespace: string, parentResourcePath: string, resourceType: string, resourceName: string, apiVersion: string): Promise<void>;
    deleteMethod(resourceGroupName: string, resourceProviderNamespace: string, parentResourcePath: string, resourceType: string, resourceName: string, apiVersion: string, options: msRest.RequestOptionsBase): Promise<void>;
    deleteMethod(resourceGroupName: string, resourceProviderNamespace: string, parentResourcePath: string, resourceType: string, resourceName: string, apiVersion: string, callback: msRest.ServiceCallback<void>): void;
    deleteMethod(resourceGroupName: string, resourceProviderNamespace: string, parentResourcePath: string, resourceType: string, resourceName: string, apiVersion: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * Creates a resource.
     *
     * @param {string} resourceGroupName The name of the resource group for the resource. The name is
     * case insensitive.
     *
     * @param {string} resourceProviderNamespace The namespace of the resource provider.
     *
     * @param {string} parentResourcePath The parent resource identity.
     *
     * @param {string} resourceType The resource type of the resource to create.
     *
     * @param {string} resourceName The name of the resource to create.
     *
     * @param {string} apiVersion The API version to use for the operation.
     *
     * @param {GenericResource} parameters Parameters for creating or updating the resource.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.GenericResource} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.GenericResource} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    createOrUpdate(resourceGroupName: string, resourceProviderNamespace: string, parentResourcePath: string, resourceType: string, resourceName: string, apiVersion: string, parameters: Models.GenericResource): Promise<Models.GenericResource>;
    createOrUpdate(resourceGroupName: string, resourceProviderNamespace: string, parentResourcePath: string, resourceType: string, resourceName: string, apiVersion: string, parameters: Models.GenericResource, options: msRest.RequestOptionsBase): Promise<Models.GenericResource>;
    createOrUpdate(resourceGroupName: string, resourceProviderNamespace: string, parentResourcePath: string, resourceType: string, resourceName: string, apiVersion: string, parameters: Models.GenericResource, callback: msRest.ServiceCallback<Models.GenericResource>): void;
    createOrUpdate(resourceGroupName: string, resourceProviderNamespace: string, parentResourcePath: string, resourceType: string, resourceName: string, apiVersion: string, parameters: Models.GenericResource, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.GenericResource>): void;
    /**
     * Updates a resource.
     *
     * @param {string} resourceGroupName The name of the resource group for the resource. The name is
     * case insensitive.
     *
     * @param {string} resourceProviderNamespace The namespace of the resource provider.
     *
     * @param {string} parentResourcePath The parent resource identity.
     *
     * @param {string} resourceType The resource type of the resource to update.
     *
     * @param {string} resourceName The name of the resource to update.
     *
     * @param {string} apiVersion The API version to use for the operation.
     *
     * @param {GenericResource} parameters Parameters for updating the resource.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.GenericResource} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.GenericResource} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    update(resourceGroupName: string, resourceProviderNamespace: string, parentResourcePath: string, resourceType: string, resourceName: string, apiVersion: string, parameters: Models.GenericResource): Promise<Models.GenericResource>;
    update(resourceGroupName: string, resourceProviderNamespace: string, parentResourcePath: string, resourceType: string, resourceName: string, apiVersion: string, parameters: Models.GenericResource, options: msRest.RequestOptionsBase): Promise<Models.GenericResource>;
    update(resourceGroupName: string, resourceProviderNamespace: string, parentResourcePath: string, resourceType: string, resourceName: string, apiVersion: string, parameters: Models.GenericResource, callback: msRest.ServiceCallback<Models.GenericResource>): void;
    update(resourceGroupName: string, resourceProviderNamespace: string, parentResourcePath: string, resourceType: string, resourceName: string, apiVersion: string, parameters: Models.GenericResource, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.GenericResource>): void;
    /**
     * Gets a resource.
     *
     * @param {string} resourceGroupName The name of the resource group containing the resource to get.
     * The name is case insensitive.
     *
     * @param {string} resourceProviderNamespace The namespace of the resource provider.
     *
     * @param {string} parentResourcePath The parent resource identity.
     *
     * @param {string} resourceType The resource type of the resource.
     *
     * @param {string} resourceName The name of the resource to get.
     *
     * @param {string} apiVersion The API version to use for the operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.GenericResource} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.GenericResource} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    get(resourceGroupName: string, resourceProviderNamespace: string, parentResourcePath: string, resourceType: string, resourceName: string, apiVersion: string): Promise<Models.GenericResource>;
    get(resourceGroupName: string, resourceProviderNamespace: string, parentResourcePath: string, resourceType: string, resourceName: string, apiVersion: string, options: msRest.RequestOptionsBase): Promise<Models.GenericResource>;
    get(resourceGroupName: string, resourceProviderNamespace: string, parentResourcePath: string, resourceType: string, resourceName: string, apiVersion: string, callback: msRest.ServiceCallback<Models.GenericResource>): void;
    get(resourceGroupName: string, resourceProviderNamespace: string, parentResourcePath: string, resourceType: string, resourceName: string, apiVersion: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.GenericResource>): void;
    /**
     * Checks by ID whether a resource exists.
     *
     * @param {string} resourceId The fully qualified ID of the resource, including the resource name
     * and resource type. Use the format,
     * /subscriptions/{guid}/resourceGroups/{resource-group-name}/{resource-provider-namespace}/{resource-type}/{resource-name}
     *
     * @param {string} apiVersion The API version to use for the operation.
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
    checkExistenceById(resourceId: string, apiVersion: string): Promise<boolean>;
    checkExistenceById(resourceId: string, apiVersion: string, options: msRest.RequestOptionsBase): Promise<boolean>;
    checkExistenceById(resourceId: string, apiVersion: string, callback: msRest.ServiceCallback<boolean>): void;
    checkExistenceById(resourceId: string, apiVersion: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<boolean>): void;
    /**
     * Deletes a resource by ID.
     *
     * @param {string} resourceId The fully qualified ID of the resource, including the resource name
     * and resource type. Use the format,
     * /subscriptions/{guid}/resourceGroups/{resource-group-name}/{resource-provider-namespace}/{resource-type}/{resource-name}
     *
     * @param {string} apiVersion The API version to use for the operation.
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
    deleteById(resourceId: string, apiVersion: string): Promise<void>;
    deleteById(resourceId: string, apiVersion: string, options: msRest.RequestOptionsBase): Promise<void>;
    deleteById(resourceId: string, apiVersion: string, callback: msRest.ServiceCallback<void>): void;
    deleteById(resourceId: string, apiVersion: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * Create a resource by ID.
     *
     * @param {string} resourceId The fully qualified ID of the resource, including the resource name
     * and resource type. Use the format,
     * /subscriptions/{guid}/resourceGroups/{resource-group-name}/{resource-provider-namespace}/{resource-type}/{resource-name}
     *
     * @param {string} apiVersion The API version to use for the operation.
     *
     * @param {GenericResource} parameters Create or update resource parameters.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.GenericResource} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.GenericResource} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    createOrUpdateById(resourceId: string, apiVersion: string, parameters: Models.GenericResource): Promise<Models.GenericResource>;
    createOrUpdateById(resourceId: string, apiVersion: string, parameters: Models.GenericResource, options: msRest.RequestOptionsBase): Promise<Models.GenericResource>;
    createOrUpdateById(resourceId: string, apiVersion: string, parameters: Models.GenericResource, callback: msRest.ServiceCallback<Models.GenericResource>): void;
    createOrUpdateById(resourceId: string, apiVersion: string, parameters: Models.GenericResource, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.GenericResource>): void;
    /**
     * Updates a resource by ID.
     *
     * @param {string} resourceId The fully qualified ID of the resource, including the resource name
     * and resource type. Use the format,
     * /subscriptions/{guid}/resourceGroups/{resource-group-name}/{resource-provider-namespace}/{resource-type}/{resource-name}
     *
     * @param {string} apiVersion The API version to use for the operation.
     *
     * @param {GenericResource} parameters Update resource parameters.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.GenericResource} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.GenericResource} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    updateById(resourceId: string, apiVersion: string, parameters: Models.GenericResource): Promise<Models.GenericResource>;
    updateById(resourceId: string, apiVersion: string, parameters: Models.GenericResource, options: msRest.RequestOptionsBase): Promise<Models.GenericResource>;
    updateById(resourceId: string, apiVersion: string, parameters: Models.GenericResource, callback: msRest.ServiceCallback<Models.GenericResource>): void;
    updateById(resourceId: string, apiVersion: string, parameters: Models.GenericResource, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.GenericResource>): void;
    /**
     * Gets a resource by ID.
     *
     * @param {string} resourceId The fully qualified ID of the resource, including the resource name
     * and resource type. Use the format,
     * /subscriptions/{guid}/resourceGroups/{resource-group-name}/{resource-provider-namespace}/{resource-type}/{resource-name}
     *
     * @param {string} apiVersion The API version to use for the operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.GenericResource} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.GenericResource} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    getById(resourceId: string, apiVersion: string): Promise<Models.GenericResource>;
    getById(resourceId: string, apiVersion: string, options: msRest.RequestOptionsBase): Promise<Models.GenericResource>;
    getById(resourceId: string, apiVersion: string, callback: msRest.ServiceCallback<Models.GenericResource>): void;
    getById(resourceId: string, apiVersion: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.GenericResource>): void;
    /**
     * @summary Moves resources from one resource group to another resource group.
     *
     * The resources to move must be in the same source resource group. The target resource group may
     * be in a different subscription. When moving resources, both the source group and the target
     * group are locked for the duration of the operation. Write and delete operations are blocked on
     * the groups until the move completes.
     *
     * @param {string} sourceResourceGroupName The name of the resource group containing the resources
     * to move.
     *
     * @param {ResourcesMoveInfo} parameters Parameters for moving resources.
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
    beginMoveResources(sourceResourceGroupName: string, parameters: Models.ResourcesMoveInfo): Promise<void>;
    beginMoveResources(sourceResourceGroupName: string, parameters: Models.ResourcesMoveInfo, options: msRest.RequestOptionsBase): Promise<void>;
    beginMoveResources(sourceResourceGroupName: string, parameters: Models.ResourcesMoveInfo, callback: msRest.ServiceCallback<void>): void;
    beginMoveResources(sourceResourceGroupName: string, parameters: Models.ResourcesMoveInfo, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Validates whether resources can be moved from one resource group to another resource
     * group.
     *
     * This operation checks whether the specified resources can be moved to the target. The resources
     * to move must be in the same source resource group. The target resource group may be in a
     * different subscription. If validation succeeds, it returns HTTP response code 204 (no content).
     * If validation fails, it returns HTTP response code 409 (Conflict) with an error message.
     * Retrieve the URL in the Location header value to check the result of the long-running operation.
     *
     * @param {string} sourceResourceGroupName The name of the resource group containing the resources
     * to validate for move.
     *
     * @param {ResourcesMoveInfo} parameters Parameters for moving resources.
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
    beginValidateMoveResources(sourceResourceGroupName: string, parameters: Models.ResourcesMoveInfo): Promise<void>;
    beginValidateMoveResources(sourceResourceGroupName: string, parameters: Models.ResourcesMoveInfo, options: msRest.RequestOptionsBase): Promise<void>;
    beginValidateMoveResources(sourceResourceGroupName: string, parameters: Models.ResourcesMoveInfo, callback: msRest.ServiceCallback<void>): void;
    beginValidateMoveResources(sourceResourceGroupName: string, parameters: Models.ResourcesMoveInfo, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * Deletes a resource.
     *
     * @param {string} resourceGroupName The name of the resource group that contains the resource to
     * delete. The name is case insensitive.
     *
     * @param {string} resourceProviderNamespace The namespace of the resource provider.
     *
     * @param {string} parentResourcePath The parent resource identity.
     *
     * @param {string} resourceType The resource type.
     *
     * @param {string} resourceName The name of the resource to delete.
     *
     * @param {string} apiVersion The API version to use for the operation.
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
    beginDeleteMethod(resourceGroupName: string, resourceProviderNamespace: string, parentResourcePath: string, resourceType: string, resourceName: string, apiVersion: string): Promise<void>;
    beginDeleteMethod(resourceGroupName: string, resourceProviderNamespace: string, parentResourcePath: string, resourceType: string, resourceName: string, apiVersion: string, options: msRest.RequestOptionsBase): Promise<void>;
    beginDeleteMethod(resourceGroupName: string, resourceProviderNamespace: string, parentResourcePath: string, resourceType: string, resourceName: string, apiVersion: string, callback: msRest.ServiceCallback<void>): void;
    beginDeleteMethod(resourceGroupName: string, resourceProviderNamespace: string, parentResourcePath: string, resourceType: string, resourceName: string, apiVersion: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * Creates a resource.
     *
     * @param {string} resourceGroupName The name of the resource group for the resource. The name is
     * case insensitive.
     *
     * @param {string} resourceProviderNamespace The namespace of the resource provider.
     *
     * @param {string} parentResourcePath The parent resource identity.
     *
     * @param {string} resourceType The resource type of the resource to create.
     *
     * @param {string} resourceName The name of the resource to create.
     *
     * @param {string} apiVersion The API version to use for the operation.
     *
     * @param {GenericResource} parameters Parameters for creating or updating the resource.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.GenericResource} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.GenericResource} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    beginCreateOrUpdate(resourceGroupName: string, resourceProviderNamespace: string, parentResourcePath: string, resourceType: string, resourceName: string, apiVersion: string, parameters: Models.GenericResource): Promise<Models.GenericResource>;
    beginCreateOrUpdate(resourceGroupName: string, resourceProviderNamespace: string, parentResourcePath: string, resourceType: string, resourceName: string, apiVersion: string, parameters: Models.GenericResource, options: msRest.RequestOptionsBase): Promise<Models.GenericResource>;
    beginCreateOrUpdate(resourceGroupName: string, resourceProviderNamespace: string, parentResourcePath: string, resourceType: string, resourceName: string, apiVersion: string, parameters: Models.GenericResource, callback: msRest.ServiceCallback<Models.GenericResource>): void;
    beginCreateOrUpdate(resourceGroupName: string, resourceProviderNamespace: string, parentResourcePath: string, resourceType: string, resourceName: string, apiVersion: string, parameters: Models.GenericResource, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.GenericResource>): void;
    /**
     * Updates a resource.
     *
     * @param {string} resourceGroupName The name of the resource group for the resource. The name is
     * case insensitive.
     *
     * @param {string} resourceProviderNamespace The namespace of the resource provider.
     *
     * @param {string} parentResourcePath The parent resource identity.
     *
     * @param {string} resourceType The resource type of the resource to update.
     *
     * @param {string} resourceName The name of the resource to update.
     *
     * @param {string} apiVersion The API version to use for the operation.
     *
     * @param {GenericResource} parameters Parameters for updating the resource.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.GenericResource} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.GenericResource} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    beginUpdate(resourceGroupName: string, resourceProviderNamespace: string, parentResourcePath: string, resourceType: string, resourceName: string, apiVersion: string, parameters: Models.GenericResource): Promise<Models.GenericResource>;
    beginUpdate(resourceGroupName: string, resourceProviderNamespace: string, parentResourcePath: string, resourceType: string, resourceName: string, apiVersion: string, parameters: Models.GenericResource, options: msRest.RequestOptionsBase): Promise<Models.GenericResource>;
    beginUpdate(resourceGroupName: string, resourceProviderNamespace: string, parentResourcePath: string, resourceType: string, resourceName: string, apiVersion: string, parameters: Models.GenericResource, callback: msRest.ServiceCallback<Models.GenericResource>): void;
    beginUpdate(resourceGroupName: string, resourceProviderNamespace: string, parentResourcePath: string, resourceType: string, resourceName: string, apiVersion: string, parameters: Models.GenericResource, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.GenericResource>): void;
    /**
     * Deletes a resource by ID.
     *
     * @param {string} resourceId The fully qualified ID of the resource, including the resource name
     * and resource type. Use the format,
     * /subscriptions/{guid}/resourceGroups/{resource-group-name}/{resource-provider-namespace}/{resource-type}/{resource-name}
     *
     * @param {string} apiVersion The API version to use for the operation.
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
    beginDeleteById(resourceId: string, apiVersion: string): Promise<void>;
    beginDeleteById(resourceId: string, apiVersion: string, options: msRest.RequestOptionsBase): Promise<void>;
    beginDeleteById(resourceId: string, apiVersion: string, callback: msRest.ServiceCallback<void>): void;
    beginDeleteById(resourceId: string, apiVersion: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * Create a resource by ID.
     *
     * @param {string} resourceId The fully qualified ID of the resource, including the resource name
     * and resource type. Use the format,
     * /subscriptions/{guid}/resourceGroups/{resource-group-name}/{resource-provider-namespace}/{resource-type}/{resource-name}
     *
     * @param {string} apiVersion The API version to use for the operation.
     *
     * @param {GenericResource} parameters Create or update resource parameters.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.GenericResource} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.GenericResource} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    beginCreateOrUpdateById(resourceId: string, apiVersion: string, parameters: Models.GenericResource): Promise<Models.GenericResource>;
    beginCreateOrUpdateById(resourceId: string, apiVersion: string, parameters: Models.GenericResource, options: msRest.RequestOptionsBase): Promise<Models.GenericResource>;
    beginCreateOrUpdateById(resourceId: string, apiVersion: string, parameters: Models.GenericResource, callback: msRest.ServiceCallback<Models.GenericResource>): void;
    beginCreateOrUpdateById(resourceId: string, apiVersion: string, parameters: Models.GenericResource, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.GenericResource>): void;
    /**
     * Updates a resource by ID.
     *
     * @param {string} resourceId The fully qualified ID of the resource, including the resource name
     * and resource type. Use the format,
     * /subscriptions/{guid}/resourceGroups/{resource-group-name}/{resource-provider-namespace}/{resource-type}/{resource-name}
     *
     * @param {string} apiVersion The API version to use for the operation.
     *
     * @param {GenericResource} parameters Update resource parameters.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.GenericResource} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.GenericResource} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    beginUpdateById(resourceId: string, apiVersion: string, parameters: Models.GenericResource): Promise<Models.GenericResource>;
    beginUpdateById(resourceId: string, apiVersion: string, parameters: Models.GenericResource, options: msRest.RequestOptionsBase): Promise<Models.GenericResource>;
    beginUpdateById(resourceId: string, apiVersion: string, parameters: Models.GenericResource, callback: msRest.ServiceCallback<Models.GenericResource>): void;
    beginUpdateById(resourceId: string, apiVersion: string, parameters: Models.GenericResource, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.GenericResource>): void;
    /**
     * Get all the resources for a resource group.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call to List operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.ResourceListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.ResourceListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listByResourceGroupNext(nextPageLink: string): Promise<Models.ResourceListResult>;
    listByResourceGroupNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.ResourceListResult>;
    listByResourceGroupNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ResourceListResult>): void;
    listByResourceGroupNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ResourceListResult>): void;
    /**
     * Get all the resources in a subscription.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call to List operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.ResourceListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.ResourceListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listNext(nextPageLink: string): Promise<Models.ResourceListResult>;
    listNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.ResourceListResult>;
    listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ResourceListResult>): void;
    listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ResourceListResult>): void;
}
