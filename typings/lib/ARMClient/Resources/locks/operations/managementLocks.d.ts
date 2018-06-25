import * as msRest from "ms-rest-js";
import * as Models from "../models";
import { ManagementLockClientContext } from "../managementLockClientContext";
/** Class representing a ManagementLocks. */
export declare class ManagementLocks {
    private readonly client;
    private readonly serializer;
    /**
     * Create a ManagementLocks.
     * @param {ManagementLockClientContext} client Reference to the service client.
     */
    constructor(client: ManagementLockClientContext);
    /**
     * @summary Creates or updates a management lock at the resource group level.
     *
     * When you apply a lock at a parent scope, all child resources inherit the same lock. To create
     * management locks, you must have access to Microsoft.Authorization/* or
     * Microsoft.Authorization/locks/* actions. Of the built-in roles, only Owner and User Access
     * Administrator are granted those actions.
     *
     * @param {string} resourceGroupName The name of the resource group to lock.
     *
     * @param {string} lockName The lock name. The lock name can be a maximum of 260 characters. It
     * cannot contain <, > %, &, :, \, ?, /, or any control characters.
     *
     * @param {ManagementLockObject} parameters The management lock parameters.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    createOrUpdateAtResourceGroupLevelWithHttpOperationResponse(resourceGroupName: string, lockName: string, parameters: Models.ManagementLockObject, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.ManagementLockObject>>;
    /**
     * @summary Deletes a management lock at the resource group level.
     *
     * To delete management locks, you must have access to Microsoft.Authorization/* or
     * Microsoft.Authorization/locks/* actions. Of the built-in roles, only Owner and User Access
     * Administrator are granted those actions.
     *
     * @param {string} resourceGroupName The name of the resource group containing the lock.
     *
     * @param {string} lockName The name of lock to delete.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    deleteAtResourceGroupLevelWithHttpOperationResponse(resourceGroupName: string, lockName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<void>>;
    /**
     * Gets a management lock at the resource group level.
     *
     * @param {string} resourceGroupName The name of the locked resource group.
     *
     * @param {string} lockName The name of the lock to get.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    getAtResourceGroupLevelWithHttpOperationResponse(resourceGroupName: string, lockName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.ManagementLockObject>>;
    /**
     * Create or update a management lock by scope.
     *
     * @param {string} scope The scope for the lock. When providing a scope for the assignment, use
     * '/subscriptions/{subscriptionId}' for subscriptions,
     * '/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}' for resource groups, and
     * '/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{parentResourcePathIfPresent}/{resourceType}/{resourceName}'
     * for resources.
     *
     * @param {string} lockName The name of lock.
     *
     * @param {ManagementLockObject} parameters Create or update management lock parameters.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    createOrUpdateByScopeWithHttpOperationResponse(scope: string, lockName: string, parameters: Models.ManagementLockObject, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.ManagementLockObject>>;
    /**
     * Delete a management lock by scope.
     *
     * @param {string} scope The scope for the lock.
     *
     * @param {string} lockName The name of lock.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    deleteByScopeWithHttpOperationResponse(scope: string, lockName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<void>>;
    /**
     * Get a management lock by scope.
     *
     * @param {string} scope The scope for the lock.
     *
     * @param {string} lockName The name of lock.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    getByScopeWithHttpOperationResponse(scope: string, lockName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.ManagementLockObject>>;
    /**
     * @summary Creates or updates a management lock at the resource level or any level below the
     * resource.
     *
     * When you apply a lock at a parent scope, all child resources inherit the same lock. To create
     * management locks, you must have access to Microsoft.Authorization/* or
     * Microsoft.Authorization/locks/* actions. Of the built-in roles, only Owner and User Access
     * Administrator are granted those actions.
     *
     * @param {string} resourceGroupName The name of the resource group containing the resource to
     * lock.
     *
     * @param {string} resourceProviderNamespace The resource provider namespace of the resource to
     * lock.
     *
     * @param {string} parentResourcePath The parent resource identity.
     *
     * @param {string} resourceType The resource type of the resource to lock.
     *
     * @param {string} resourceName The name of the resource to lock.
     *
     * @param {string} lockName The name of lock. The lock name can be a maximum of 260 characters. It
     * cannot contain <, > %, &, :, \, ?, /, or any control characters.
     *
     * @param {ManagementLockObject} parameters Parameters for creating or updating a  management lock.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    createOrUpdateAtResourceLevelWithHttpOperationResponse(resourceGroupName: string, resourceProviderNamespace: string, parentResourcePath: string, resourceType: string, resourceName: string, lockName: string, parameters: Models.ManagementLockObject, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.ManagementLockObject>>;
    /**
     * @summary Deletes the management lock of a resource or any level below the resource.
     *
     * To delete management locks, you must have access to Microsoft.Authorization/* or
     * Microsoft.Authorization/locks/* actions. Of the built-in roles, only Owner and User Access
     * Administrator are granted those actions.
     *
     * @param {string} resourceGroupName The name of the resource group containing the resource with
     * the lock to delete.
     *
     * @param {string} resourceProviderNamespace The resource provider namespace of the resource with
     * the lock to delete.
     *
     * @param {string} parentResourcePath The parent resource identity.
     *
     * @param {string} resourceType The resource type of the resource with the lock to delete.
     *
     * @param {string} resourceName The name of the resource with the lock to delete.
     *
     * @param {string} lockName The name of the lock to delete.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    deleteAtResourceLevelWithHttpOperationResponse(resourceGroupName: string, resourceProviderNamespace: string, parentResourcePath: string, resourceType: string, resourceName: string, lockName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<void>>;
    /**
     * Get the management lock of a resource or any level below resource.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} resourceProviderNamespace The namespace of the resource provider.
     *
     * @param {string} parentResourcePath An extra path parameter needed in some services, like SQL
     * Databases.
     *
     * @param {string} resourceType The type of the resource.
     *
     * @param {string} resourceName The name of the resource.
     *
     * @param {string} lockName The name of lock.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    getAtResourceLevelWithHttpOperationResponse(resourceGroupName: string, resourceProviderNamespace: string, parentResourcePath: string, resourceType: string, resourceName: string, lockName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.ManagementLockObject>>;
    /**
     * @summary Creates or updates a management lock at the subscription level.
     *
     * When you apply a lock at a parent scope, all child resources inherit the same lock. To create
     * management locks, you must have access to Microsoft.Authorization/* or
     * Microsoft.Authorization/locks/* actions. Of the built-in roles, only Owner and User Access
     * Administrator are granted those actions.
     *
     * @param {string} lockName The name of lock. The lock name can be a maximum of 260 characters. It
     * cannot contain <, > %, &, :, \, ?, /, or any control characters.
     *
     * @param {ManagementLockObject} parameters The management lock parameters.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    createOrUpdateAtSubscriptionLevelWithHttpOperationResponse(lockName: string, parameters: Models.ManagementLockObject, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.ManagementLockObject>>;
    /**
     * @summary Deletes the management lock at the subscription level.
     *
     * To delete management locks, you must have access to Microsoft.Authorization/* or
     * Microsoft.Authorization/locks/* actions. Of the built-in roles, only Owner and User Access
     * Administrator are granted those actions.
     *
     * @param {string} lockName The name of lock to delete.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    deleteAtSubscriptionLevelWithHttpOperationResponse(lockName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<void>>;
    /**
     * Gets a management lock at the subscription level.
     *
     * @param {string} lockName The name of the lock to get.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    getAtSubscriptionLevelWithHttpOperationResponse(lockName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.ManagementLockObject>>;
    /**
     * Gets all the management locks for a resource group.
     *
     * @param {string} resourceGroupName The name of the resource group containing the locks to get.
     *
     * @param {ManagementLocksListAtResourceGroupLevelOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    listAtResourceGroupLevelWithHttpOperationResponse(resourceGroupName: string, options?: Models.ManagementLocksListAtResourceGroupLevelOptionalParams): Promise<msRest.HttpOperationResponse<Models.ManagementLockListResult>>;
    /**
     * Gets all the management locks for a resource or any level below resource.
     *
     * @param {string} resourceGroupName The name of the resource group containing the locked resource.
     * The name is case insensitive.
     *
     * @param {string} resourceProviderNamespace The namespace of the resource provider.
     *
     * @param {string} parentResourcePath The parent resource identity.
     *
     * @param {string} resourceType The resource type of the locked resource.
     *
     * @param {string} resourceName The name of the locked resource.
     *
     * @param {ManagementLocksListAtResourceLevelOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    listAtResourceLevelWithHttpOperationResponse(resourceGroupName: string, resourceProviderNamespace: string, parentResourcePath: string, resourceType: string, resourceName: string, options?: Models.ManagementLocksListAtResourceLevelOptionalParams): Promise<msRest.HttpOperationResponse<Models.ManagementLockListResult>>;
    /**
     * Gets all the management locks for a subscription.
     *
     * @param {ManagementLocksListAtSubscriptionLevelOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    listAtSubscriptionLevelWithHttpOperationResponse(options?: Models.ManagementLocksListAtSubscriptionLevelOptionalParams): Promise<msRest.HttpOperationResponse<Models.ManagementLockListResult>>;
    /**
     * Gets all the management locks for a resource group.
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
    listAtResourceGroupLevelNextWithHttpOperationResponse(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.ManagementLockListResult>>;
    /**
     * Gets all the management locks for a resource or any level below resource.
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
    listAtResourceLevelNextWithHttpOperationResponse(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.ManagementLockListResult>>;
    /**
     * Gets all the management locks for a subscription.
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
    listAtSubscriptionLevelNextWithHttpOperationResponse(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.ManagementLockListResult>>;
    /**
     * @summary Creates or updates a management lock at the resource group level.
     *
     * When you apply a lock at a parent scope, all child resources inherit the same lock. To create
     * management locks, you must have access to Microsoft.Authorization/* or
     * Microsoft.Authorization/locks/* actions. Of the built-in roles, only Owner and User Access
     * Administrator are granted those actions.
     *
     * @param {string} resourceGroupName The name of the resource group to lock.
     *
     * @param {string} lockName The lock name. The lock name can be a maximum of 260 characters. It
     * cannot contain <, > %, &, :, \, ?, /, or any control characters.
     *
     * @param {ManagementLockObject} parameters The management lock parameters.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.ManagementLockObject} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.ManagementLockObject} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    createOrUpdateAtResourceGroupLevel(resourceGroupName: string, lockName: string, parameters: Models.ManagementLockObject): Promise<Models.ManagementLockObject>;
    createOrUpdateAtResourceGroupLevel(resourceGroupName: string, lockName: string, parameters: Models.ManagementLockObject, options: msRest.RequestOptionsBase): Promise<Models.ManagementLockObject>;
    createOrUpdateAtResourceGroupLevel(resourceGroupName: string, lockName: string, parameters: Models.ManagementLockObject, callback: msRest.ServiceCallback<Models.ManagementLockObject>): void;
    createOrUpdateAtResourceGroupLevel(resourceGroupName: string, lockName: string, parameters: Models.ManagementLockObject, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ManagementLockObject>): void;
    /**
     * @summary Deletes a management lock at the resource group level.
     *
     * To delete management locks, you must have access to Microsoft.Authorization/* or
     * Microsoft.Authorization/locks/* actions. Of the built-in roles, only Owner and User Access
     * Administrator are granted those actions.
     *
     * @param {string} resourceGroupName The name of the resource group containing the lock.
     *
     * @param {string} lockName The name of lock to delete.
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
    deleteAtResourceGroupLevel(resourceGroupName: string, lockName: string): Promise<void>;
    deleteAtResourceGroupLevel(resourceGroupName: string, lockName: string, options: msRest.RequestOptionsBase): Promise<void>;
    deleteAtResourceGroupLevel(resourceGroupName: string, lockName: string, callback: msRest.ServiceCallback<void>): void;
    deleteAtResourceGroupLevel(resourceGroupName: string, lockName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * Gets a management lock at the resource group level.
     *
     * @param {string} resourceGroupName The name of the locked resource group.
     *
     * @param {string} lockName The name of the lock to get.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.ManagementLockObject} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.ManagementLockObject} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    getAtResourceGroupLevel(resourceGroupName: string, lockName: string): Promise<Models.ManagementLockObject>;
    getAtResourceGroupLevel(resourceGroupName: string, lockName: string, options: msRest.RequestOptionsBase): Promise<Models.ManagementLockObject>;
    getAtResourceGroupLevel(resourceGroupName: string, lockName: string, callback: msRest.ServiceCallback<Models.ManagementLockObject>): void;
    getAtResourceGroupLevel(resourceGroupName: string, lockName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ManagementLockObject>): void;
    /**
     * Create or update a management lock by scope.
     *
     * @param {string} scope The scope for the lock. When providing a scope for the assignment, use
     * '/subscriptions/{subscriptionId}' for subscriptions,
     * '/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}' for resource groups, and
     * '/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{parentResourcePathIfPresent}/{resourceType}/{resourceName}'
     * for resources.
     *
     * @param {string} lockName The name of lock.
     *
     * @param {ManagementLockObject} parameters Create or update management lock parameters.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.ManagementLockObject} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.ManagementLockObject} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    createOrUpdateByScope(scope: string, lockName: string, parameters: Models.ManagementLockObject): Promise<Models.ManagementLockObject>;
    createOrUpdateByScope(scope: string, lockName: string, parameters: Models.ManagementLockObject, options: msRest.RequestOptionsBase): Promise<Models.ManagementLockObject>;
    createOrUpdateByScope(scope: string, lockName: string, parameters: Models.ManagementLockObject, callback: msRest.ServiceCallback<Models.ManagementLockObject>): void;
    createOrUpdateByScope(scope: string, lockName: string, parameters: Models.ManagementLockObject, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ManagementLockObject>): void;
    /**
     * Delete a management lock by scope.
     *
     * @param {string} scope The scope for the lock.
     *
     * @param {string} lockName The name of lock.
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
    deleteByScope(scope: string, lockName: string): Promise<void>;
    deleteByScope(scope: string, lockName: string, options: msRest.RequestOptionsBase): Promise<void>;
    deleteByScope(scope: string, lockName: string, callback: msRest.ServiceCallback<void>): void;
    deleteByScope(scope: string, lockName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * Get a management lock by scope.
     *
     * @param {string} scope The scope for the lock.
     *
     * @param {string} lockName The name of lock.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.ManagementLockObject} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.ManagementLockObject} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    getByScope(scope: string, lockName: string): Promise<Models.ManagementLockObject>;
    getByScope(scope: string, lockName: string, options: msRest.RequestOptionsBase): Promise<Models.ManagementLockObject>;
    getByScope(scope: string, lockName: string, callback: msRest.ServiceCallback<Models.ManagementLockObject>): void;
    getByScope(scope: string, lockName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ManagementLockObject>): void;
    /**
     * @summary Creates or updates a management lock at the resource level or any level below the
     * resource.
     *
     * When you apply a lock at a parent scope, all child resources inherit the same lock. To create
     * management locks, you must have access to Microsoft.Authorization/* or
     * Microsoft.Authorization/locks/* actions. Of the built-in roles, only Owner and User Access
     * Administrator are granted those actions.
     *
     * @param {string} resourceGroupName The name of the resource group containing the resource to
     * lock.
     *
     * @param {string} resourceProviderNamespace The resource provider namespace of the resource to
     * lock.
     *
     * @param {string} parentResourcePath The parent resource identity.
     *
     * @param {string} resourceType The resource type of the resource to lock.
     *
     * @param {string} resourceName The name of the resource to lock.
     *
     * @param {string} lockName The name of lock. The lock name can be a maximum of 260 characters. It
     * cannot contain <, > %, &, :, \, ?, /, or any control characters.
     *
     * @param {ManagementLockObject} parameters Parameters for creating or updating a  management lock.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.ManagementLockObject} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.ManagementLockObject} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    createOrUpdateAtResourceLevel(resourceGroupName: string, resourceProviderNamespace: string, parentResourcePath: string, resourceType: string, resourceName: string, lockName: string, parameters: Models.ManagementLockObject): Promise<Models.ManagementLockObject>;
    createOrUpdateAtResourceLevel(resourceGroupName: string, resourceProviderNamespace: string, parentResourcePath: string, resourceType: string, resourceName: string, lockName: string, parameters: Models.ManagementLockObject, options: msRest.RequestOptionsBase): Promise<Models.ManagementLockObject>;
    createOrUpdateAtResourceLevel(resourceGroupName: string, resourceProviderNamespace: string, parentResourcePath: string, resourceType: string, resourceName: string, lockName: string, parameters: Models.ManagementLockObject, callback: msRest.ServiceCallback<Models.ManagementLockObject>): void;
    createOrUpdateAtResourceLevel(resourceGroupName: string, resourceProviderNamespace: string, parentResourcePath: string, resourceType: string, resourceName: string, lockName: string, parameters: Models.ManagementLockObject, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ManagementLockObject>): void;
    /**
     * @summary Deletes the management lock of a resource or any level below the resource.
     *
     * To delete management locks, you must have access to Microsoft.Authorization/* or
     * Microsoft.Authorization/locks/* actions. Of the built-in roles, only Owner and User Access
     * Administrator are granted those actions.
     *
     * @param {string} resourceGroupName The name of the resource group containing the resource with
     * the lock to delete.
     *
     * @param {string} resourceProviderNamespace The resource provider namespace of the resource with
     * the lock to delete.
     *
     * @param {string} parentResourcePath The parent resource identity.
     *
     * @param {string} resourceType The resource type of the resource with the lock to delete.
     *
     * @param {string} resourceName The name of the resource with the lock to delete.
     *
     * @param {string} lockName The name of the lock to delete.
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
    deleteAtResourceLevel(resourceGroupName: string, resourceProviderNamespace: string, parentResourcePath: string, resourceType: string, resourceName: string, lockName: string): Promise<void>;
    deleteAtResourceLevel(resourceGroupName: string, resourceProviderNamespace: string, parentResourcePath: string, resourceType: string, resourceName: string, lockName: string, options: msRest.RequestOptionsBase): Promise<void>;
    deleteAtResourceLevel(resourceGroupName: string, resourceProviderNamespace: string, parentResourcePath: string, resourceType: string, resourceName: string, lockName: string, callback: msRest.ServiceCallback<void>): void;
    deleteAtResourceLevel(resourceGroupName: string, resourceProviderNamespace: string, parentResourcePath: string, resourceType: string, resourceName: string, lockName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * Get the management lock of a resource or any level below resource.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} resourceProviderNamespace The namespace of the resource provider.
     *
     * @param {string} parentResourcePath An extra path parameter needed in some services, like SQL
     * Databases.
     *
     * @param {string} resourceType The type of the resource.
     *
     * @param {string} resourceName The name of the resource.
     *
     * @param {string} lockName The name of lock.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.ManagementLockObject} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.ManagementLockObject} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    getAtResourceLevel(resourceGroupName: string, resourceProviderNamespace: string, parentResourcePath: string, resourceType: string, resourceName: string, lockName: string): Promise<Models.ManagementLockObject>;
    getAtResourceLevel(resourceGroupName: string, resourceProviderNamespace: string, parentResourcePath: string, resourceType: string, resourceName: string, lockName: string, options: msRest.RequestOptionsBase): Promise<Models.ManagementLockObject>;
    getAtResourceLevel(resourceGroupName: string, resourceProviderNamespace: string, parentResourcePath: string, resourceType: string, resourceName: string, lockName: string, callback: msRest.ServiceCallback<Models.ManagementLockObject>): void;
    getAtResourceLevel(resourceGroupName: string, resourceProviderNamespace: string, parentResourcePath: string, resourceType: string, resourceName: string, lockName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ManagementLockObject>): void;
    /**
     * @summary Creates or updates a management lock at the subscription level.
     *
     * When you apply a lock at a parent scope, all child resources inherit the same lock. To create
     * management locks, you must have access to Microsoft.Authorization/* or
     * Microsoft.Authorization/locks/* actions. Of the built-in roles, only Owner and User Access
     * Administrator are granted those actions.
     *
     * @param {string} lockName The name of lock. The lock name can be a maximum of 260 characters. It
     * cannot contain <, > %, &, :, \, ?, /, or any control characters.
     *
     * @param {ManagementLockObject} parameters The management lock parameters.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.ManagementLockObject} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.ManagementLockObject} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    createOrUpdateAtSubscriptionLevel(lockName: string, parameters: Models.ManagementLockObject): Promise<Models.ManagementLockObject>;
    createOrUpdateAtSubscriptionLevel(lockName: string, parameters: Models.ManagementLockObject, options: msRest.RequestOptionsBase): Promise<Models.ManagementLockObject>;
    createOrUpdateAtSubscriptionLevel(lockName: string, parameters: Models.ManagementLockObject, callback: msRest.ServiceCallback<Models.ManagementLockObject>): void;
    createOrUpdateAtSubscriptionLevel(lockName: string, parameters: Models.ManagementLockObject, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ManagementLockObject>): void;
    /**
     * @summary Deletes the management lock at the subscription level.
     *
     * To delete management locks, you must have access to Microsoft.Authorization/* or
     * Microsoft.Authorization/locks/* actions. Of the built-in roles, only Owner and User Access
     * Administrator are granted those actions.
     *
     * @param {string} lockName The name of lock to delete.
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
    deleteAtSubscriptionLevel(lockName: string): Promise<void>;
    deleteAtSubscriptionLevel(lockName: string, options: msRest.RequestOptionsBase): Promise<void>;
    deleteAtSubscriptionLevel(lockName: string, callback: msRest.ServiceCallback<void>): void;
    deleteAtSubscriptionLevel(lockName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * Gets a management lock at the subscription level.
     *
     * @param {string} lockName The name of the lock to get.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.ManagementLockObject} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.ManagementLockObject} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    getAtSubscriptionLevel(lockName: string): Promise<Models.ManagementLockObject>;
    getAtSubscriptionLevel(lockName: string, options: msRest.RequestOptionsBase): Promise<Models.ManagementLockObject>;
    getAtSubscriptionLevel(lockName: string, callback: msRest.ServiceCallback<Models.ManagementLockObject>): void;
    getAtSubscriptionLevel(lockName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ManagementLockObject>): void;
    /**
     * Gets all the management locks for a resource group.
     *
     * @param {string} resourceGroupName The name of the resource group containing the locks to get.
     *
     * @param {ManagementLocksListAtResourceGroupLevelOptionalParams} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.ManagementLockListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.ManagementLockListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listAtResourceGroupLevel(resourceGroupName: string): Promise<Models.ManagementLockListResult>;
    listAtResourceGroupLevel(resourceGroupName: string, options: Models.ManagementLocksListAtResourceGroupLevelOptionalParams): Promise<Models.ManagementLockListResult>;
    listAtResourceGroupLevel(resourceGroupName: string, callback: msRest.ServiceCallback<Models.ManagementLockListResult>): void;
    listAtResourceGroupLevel(resourceGroupName: string, options: Models.ManagementLocksListAtResourceGroupLevelOptionalParams, callback: msRest.ServiceCallback<Models.ManagementLockListResult>): void;
    /**
     * Gets all the management locks for a resource or any level below resource.
     *
     * @param {string} resourceGroupName The name of the resource group containing the locked resource.
     * The name is case insensitive.
     *
     * @param {string} resourceProviderNamespace The namespace of the resource provider.
     *
     * @param {string} parentResourcePath The parent resource identity.
     *
     * @param {string} resourceType The resource type of the locked resource.
     *
     * @param {string} resourceName The name of the locked resource.
     *
     * @param {ManagementLocksListAtResourceLevelOptionalParams} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.ManagementLockListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.ManagementLockListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listAtResourceLevel(resourceGroupName: string, resourceProviderNamespace: string, parentResourcePath: string, resourceType: string, resourceName: string): Promise<Models.ManagementLockListResult>;
    listAtResourceLevel(resourceGroupName: string, resourceProviderNamespace: string, parentResourcePath: string, resourceType: string, resourceName: string, options: Models.ManagementLocksListAtResourceLevelOptionalParams): Promise<Models.ManagementLockListResult>;
    listAtResourceLevel(resourceGroupName: string, resourceProviderNamespace: string, parentResourcePath: string, resourceType: string, resourceName: string, callback: msRest.ServiceCallback<Models.ManagementLockListResult>): void;
    listAtResourceLevel(resourceGroupName: string, resourceProviderNamespace: string, parentResourcePath: string, resourceType: string, resourceName: string, options: Models.ManagementLocksListAtResourceLevelOptionalParams, callback: msRest.ServiceCallback<Models.ManagementLockListResult>): void;
    /**
     * Gets all the management locks for a subscription.
     *
     * @param {ManagementLocksListAtSubscriptionLevelOptionalParams} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.ManagementLockListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.ManagementLockListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listAtSubscriptionLevel(): Promise<Models.ManagementLockListResult>;
    listAtSubscriptionLevel(options: Models.ManagementLocksListAtSubscriptionLevelOptionalParams): Promise<Models.ManagementLockListResult>;
    listAtSubscriptionLevel(callback: msRest.ServiceCallback<Models.ManagementLockListResult>): void;
    listAtSubscriptionLevel(options: Models.ManagementLocksListAtSubscriptionLevelOptionalParams, callback: msRest.ServiceCallback<Models.ManagementLockListResult>): void;
    /**
     * Gets all the management locks for a resource group.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call to List operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.ManagementLockListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.ManagementLockListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listAtResourceGroupLevelNext(nextPageLink: string): Promise<Models.ManagementLockListResult>;
    listAtResourceGroupLevelNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.ManagementLockListResult>;
    listAtResourceGroupLevelNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ManagementLockListResult>): void;
    listAtResourceGroupLevelNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ManagementLockListResult>): void;
    /**
     * Gets all the management locks for a resource or any level below resource.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call to List operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.ManagementLockListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.ManagementLockListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listAtResourceLevelNext(nextPageLink: string): Promise<Models.ManagementLockListResult>;
    listAtResourceLevelNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.ManagementLockListResult>;
    listAtResourceLevelNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ManagementLockListResult>): void;
    listAtResourceLevelNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ManagementLockListResult>): void;
    /**
     * Gets all the management locks for a subscription.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call to List operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.ManagementLockListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.ManagementLockListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listAtSubscriptionLevelNext(nextPageLink: string): Promise<Models.ManagementLockListResult>;
    listAtSubscriptionLevelNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.ManagementLockListResult>;
    listAtSubscriptionLevelNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ManagementLockListResult>): void;
    listAtSubscriptionLevelNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ManagementLockListResult>): void;
}
