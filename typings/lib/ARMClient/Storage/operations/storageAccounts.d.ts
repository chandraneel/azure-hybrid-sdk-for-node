import * as msRest from "ms-rest-js";
import * as Models from "../models";
import { StorageManagementClientContext } from "../storageManagementClientContext";
/** Class representing a StorageAccounts. */
export declare class StorageAccounts {
    private readonly client;
    private readonly serializer;
    /**
     * Create a StorageAccounts.
     * @param {StorageManagementClientContext} client Reference to the service client.
     */
    constructor(client: StorageManagementClientContext);
    /**
     * Checks that the storage account name is valid and is not already in use.
     *
     * @param {StorageAccountCheckNameAvailabilityParameters} accountName The name of the storage
     * account within the specified resource group. Storage account names must be between 3 and 24
     * characters in length and use numbers and lower-case letters only.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    checkNameAvailabilityWithHttpOperationResponse(accountName: Models.StorageAccountCheckNameAvailabilityParameters, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.CheckNameAvailabilityResult>>;
    /**
     * Asynchronously creates a new storage account with the specified parameters. If an account is
     * already created and a subsequent create request is issued with different properties, the account
     * properties will be updated. If an account is already created and a subsequent create or update
     * request is issued with the exact same set of properties, the request will succeed.
     *
     * @param {string} resourceGroupName The name of the resource group within the user's subscription.
     *
     * @param {string} accountName The name of the storage account within the specified resource group.
     * Storage account names must be between 3 and 24 characters in length and use numbers and
     * lower-case letters only.
     *
     * @param {StorageAccountCreateParameters} parameters The parameters to provide for the created
     * account.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    createWithHttpOperationResponse(resourceGroupName: string, accountName: string, parameters: Models.StorageAccountCreateParameters, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Deletes a storage account in Microsoft Azure.
     *
     * @param {string} resourceGroupName The name of the resource group within the user's subscription.
     *
     * @param {string} accountName The name of the storage account within the specified resource group.
     * Storage account names must be between 3 and 24 characters in length and use numbers and
     * lower-case letters only.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    deleteMethodWithHttpOperationResponse(resourceGroupName: string, accountName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<void>>;
    /**
     * Returns the properties for the specified storage account including but not limited to name, SKU
     * name, location, and account status. The ListKeys operation should be used to retrieve storage
     * keys.
     *
     * @param {string} resourceGroupName The name of the resource group within the user's subscription.
     *
     * @param {string} accountName The name of the storage account within the specified resource group.
     * Storage account names must be between 3 and 24 characters in length and use numbers and
     * lower-case letters only.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    getPropertiesWithHttpOperationResponse(resourceGroupName: string, accountName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.StorageAccount>>;
    /**
     * The update operation can be used to update the SKU, encryption, access tier, or tags for a
     * storage account. It can also be used to map the account to a custom domain. Only one custom
     * domain is supported per storage account; the replacement/change of custom domain is not
     * supported. In order to replace an old custom domain, the old value must be cleared/unregistered
     * before a new value can be set. The update of multiple properties is supported. This call does
     * not change the storage keys for the account. If you want to change the storage account keys, use
     * the regenerate keys operation. The location and name of the storage account cannot be changed
     * after creation.
     *
     * @param {string} resourceGroupName The name of the resource group within the user's subscription.
     *
     * @param {string} accountName The name of the storage account within the specified resource group.
     * Storage account names must be between 3 and 24 characters in length and use numbers and
     * lower-case letters only.
     *
     * @param {StorageAccountUpdateParameters} parameters The parameters to provide for the updated
     * account.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    updateWithHttpOperationResponse(resourceGroupName: string, accountName: string, parameters: Models.StorageAccountUpdateParameters, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.StorageAccount>>;
    /**
     * Lists all the storage accounts available under the subscription. Note that storage keys are not
     * returned; use the ListKeys operation for this.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    listWithHttpOperationResponse(options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.StorageAccountListResult>>;
    /**
     * Lists all the storage accounts available under the given resource group. Note that storage keys
     * are not returned; use the ListKeys operation for this.
     *
     * @param {string} resourceGroupName The name of the resource group within the user's subscription.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    listByResourceGroupWithHttpOperationResponse(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.StorageAccountListResult>>;
    /**
     * Lists the access keys for the specified storage account.
     *
     * @param {string} resourceGroupName The name of the resource group within the user's subscription.
     *
     * @param {string} accountName The name of the storage account within the specified resource group.
     * Storage account names must be between 3 and 24 characters in length and use numbers and
     * lower-case letters only.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    listKeysWithHttpOperationResponse(resourceGroupName: string, accountName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.StorageAccountListKeysResult>>;
    /**
     * Regenerates one of the access keys for the specified storage account.
     *
     * @param {string} resourceGroupName The name of the resource group within the user's subscription.
     *
     * @param {string} accountName The name of the storage account within the specified resource group.
     * Storage account names must be between 3 and 24 characters in length and use numbers and
     * lower-case letters only.
     *
     * @param {StorageAccountRegenerateKeyParameters} regenerateKeyParameter Specifies name of the key
     * which should be regenerated -- key1 or key2.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    regenerateKeyWithHttpOperationResponse(resourceGroupName: string, accountName: string, regenerateKeyParameter: Models.StorageAccountRegenerateKeyParameters, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.StorageAccountListKeysResult>>;
    /**
     * Asynchronously creates a new storage account with the specified parameters. If an account is
     * already created and a subsequent create request is issued with different properties, the account
     * properties will be updated. If an account is already created and a subsequent create or update
     * request is issued with the exact same set of properties, the request will succeed.
     *
     * @param {string} resourceGroupName The name of the resource group within the user's subscription.
     *
     * @param {string} accountName The name of the storage account within the specified resource group.
     * Storage account names must be between 3 and 24 characters in length and use numbers and
     * lower-case letters only.
     *
     * @param {StorageAccountCreateParameters} parameters The parameters to provide for the created
     * account.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginCreateWithHttpOperationResponse(resourceGroupName: string, accountName: string, parameters: Models.StorageAccountCreateParameters, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.StorageAccount>>;
    /**
     * Checks that the storage account name is valid and is not already in use.
     *
     * @param {StorageAccountCheckNameAvailabilityParameters} accountName The name of the storage
     * account within the specified resource group. Storage account names must be between 3 and 24
     * characters in length and use numbers and lower-case letters only.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.CheckNameAvailabilityResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.CheckNameAvailabilityResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    checkNameAvailability(accountName: Models.StorageAccountCheckNameAvailabilityParameters): Promise<Models.CheckNameAvailabilityResult>;
    checkNameAvailability(accountName: Models.StorageAccountCheckNameAvailabilityParameters, options: msRest.RequestOptionsBase): Promise<Models.CheckNameAvailabilityResult>;
    checkNameAvailability(accountName: Models.StorageAccountCheckNameAvailabilityParameters, callback: msRest.ServiceCallback<Models.CheckNameAvailabilityResult>): void;
    checkNameAvailability(accountName: Models.StorageAccountCheckNameAvailabilityParameters, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CheckNameAvailabilityResult>): void;
    /**
     * Asynchronously creates a new storage account with the specified parameters. If an account is
     * already created and a subsequent create request is issued with different properties, the account
     * properties will be updated. If an account is already created and a subsequent create or update
     * request is issued with the exact same set of properties, the request will succeed.
     *
     * @param {string} resourceGroupName The name of the resource group within the user's subscription.
     *
     * @param {string} accountName The name of the storage account within the specified resource group.
     * Storage account names must be between 3 and 24 characters in length and use numbers and
     * lower-case letters only.
     *
     * @param {StorageAccountCreateParameters} parameters The parameters to provide for the created
     * account.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.StorageAccount} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.StorageAccount} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    create(resourceGroupName: string, accountName: string, parameters: Models.StorageAccountCreateParameters): Promise<Models.StorageAccount>;
    create(resourceGroupName: string, accountName: string, parameters: Models.StorageAccountCreateParameters, options: msRest.RequestOptionsBase): Promise<Models.StorageAccount>;
    create(resourceGroupName: string, accountName: string, parameters: Models.StorageAccountCreateParameters, callback: msRest.ServiceCallback<Models.StorageAccount>): void;
    create(resourceGroupName: string, accountName: string, parameters: Models.StorageAccountCreateParameters, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.StorageAccount>): void;
    /**
     * Deletes a storage account in Microsoft Azure.
     *
     * @param {string} resourceGroupName The name of the resource group within the user's subscription.
     *
     * @param {string} accountName The name of the storage account within the specified resource group.
     * Storage account names must be between 3 and 24 characters in length and use numbers and
     * lower-case letters only.
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
    deleteMethod(resourceGroupName: string, accountName: string): Promise<void>;
    deleteMethod(resourceGroupName: string, accountName: string, options: msRest.RequestOptionsBase): Promise<void>;
    deleteMethod(resourceGroupName: string, accountName: string, callback: msRest.ServiceCallback<void>): void;
    deleteMethod(resourceGroupName: string, accountName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * Returns the properties for the specified storage account including but not limited to name, SKU
     * name, location, and account status. The ListKeys operation should be used to retrieve storage
     * keys.
     *
     * @param {string} resourceGroupName The name of the resource group within the user's subscription.
     *
     * @param {string} accountName The name of the storage account within the specified resource group.
     * Storage account names must be between 3 and 24 characters in length and use numbers and
     * lower-case letters only.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.StorageAccount} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.StorageAccount} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    getProperties(resourceGroupName: string, accountName: string): Promise<Models.StorageAccount>;
    getProperties(resourceGroupName: string, accountName: string, options: msRest.RequestOptionsBase): Promise<Models.StorageAccount>;
    getProperties(resourceGroupName: string, accountName: string, callback: msRest.ServiceCallback<Models.StorageAccount>): void;
    getProperties(resourceGroupName: string, accountName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.StorageAccount>): void;
    /**
     * The update operation can be used to update the SKU, encryption, access tier, or tags for a
     * storage account. It can also be used to map the account to a custom domain. Only one custom
     * domain is supported per storage account; the replacement/change of custom domain is not
     * supported. In order to replace an old custom domain, the old value must be cleared/unregistered
     * before a new value can be set. The update of multiple properties is supported. This call does
     * not change the storage keys for the account. If you want to change the storage account keys, use
     * the regenerate keys operation. The location and name of the storage account cannot be changed
     * after creation.
     *
     * @param {string} resourceGroupName The name of the resource group within the user's subscription.
     *
     * @param {string} accountName The name of the storage account within the specified resource group.
     * Storage account names must be between 3 and 24 characters in length and use numbers and
     * lower-case letters only.
     *
     * @param {StorageAccountUpdateParameters} parameters The parameters to provide for the updated
     * account.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.StorageAccount} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.StorageAccount} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    update(resourceGroupName: string, accountName: string, parameters: Models.StorageAccountUpdateParameters): Promise<Models.StorageAccount>;
    update(resourceGroupName: string, accountName: string, parameters: Models.StorageAccountUpdateParameters, options: msRest.RequestOptionsBase): Promise<Models.StorageAccount>;
    update(resourceGroupName: string, accountName: string, parameters: Models.StorageAccountUpdateParameters, callback: msRest.ServiceCallback<Models.StorageAccount>): void;
    update(resourceGroupName: string, accountName: string, parameters: Models.StorageAccountUpdateParameters, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.StorageAccount>): void;
    /**
     * Lists all the storage accounts available under the subscription. Note that storage keys are not
     * returned; use the ListKeys operation for this.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.StorageAccountListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.StorageAccountListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    list(): Promise<Models.StorageAccountListResult>;
    list(options: msRest.RequestOptionsBase): Promise<Models.StorageAccountListResult>;
    list(callback: msRest.ServiceCallback<Models.StorageAccountListResult>): void;
    list(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.StorageAccountListResult>): void;
    /**
     * Lists all the storage accounts available under the given resource group. Note that storage keys
     * are not returned; use the ListKeys operation for this.
     *
     * @param {string} resourceGroupName The name of the resource group within the user's subscription.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.StorageAccountListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.StorageAccountListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listByResourceGroup(resourceGroupName: string): Promise<Models.StorageAccountListResult>;
    listByResourceGroup(resourceGroupName: string, options: msRest.RequestOptionsBase): Promise<Models.StorageAccountListResult>;
    listByResourceGroup(resourceGroupName: string, callback: msRest.ServiceCallback<Models.StorageAccountListResult>): void;
    listByResourceGroup(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.StorageAccountListResult>): void;
    /**
     * Lists the access keys for the specified storage account.
     *
     * @param {string} resourceGroupName The name of the resource group within the user's subscription.
     *
     * @param {string} accountName The name of the storage account within the specified resource group.
     * Storage account names must be between 3 and 24 characters in length and use numbers and
     * lower-case letters only.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.StorageAccountListKeysResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.StorageAccountListKeysResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listKeys(resourceGroupName: string, accountName: string): Promise<Models.StorageAccountListKeysResult>;
    listKeys(resourceGroupName: string, accountName: string, options: msRest.RequestOptionsBase): Promise<Models.StorageAccountListKeysResult>;
    listKeys(resourceGroupName: string, accountName: string, callback: msRest.ServiceCallback<Models.StorageAccountListKeysResult>): void;
    listKeys(resourceGroupName: string, accountName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.StorageAccountListKeysResult>): void;
    /**
     * Regenerates one of the access keys for the specified storage account.
     *
     * @param {string} resourceGroupName The name of the resource group within the user's subscription.
     *
     * @param {string} accountName The name of the storage account within the specified resource group.
     * Storage account names must be between 3 and 24 characters in length and use numbers and
     * lower-case letters only.
     *
     * @param {StorageAccountRegenerateKeyParameters} regenerateKeyParameter Specifies name of the key
     * which should be regenerated -- key1 or key2.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.StorageAccountListKeysResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.StorageAccountListKeysResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    regenerateKey(resourceGroupName: string, accountName: string, regenerateKeyParameter: Models.StorageAccountRegenerateKeyParameters): Promise<Models.StorageAccountListKeysResult>;
    regenerateKey(resourceGroupName: string, accountName: string, regenerateKeyParameter: Models.StorageAccountRegenerateKeyParameters, options: msRest.RequestOptionsBase): Promise<Models.StorageAccountListKeysResult>;
    regenerateKey(resourceGroupName: string, accountName: string, regenerateKeyParameter: Models.StorageAccountRegenerateKeyParameters, callback: msRest.ServiceCallback<Models.StorageAccountListKeysResult>): void;
    regenerateKey(resourceGroupName: string, accountName: string, regenerateKeyParameter: Models.StorageAccountRegenerateKeyParameters, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.StorageAccountListKeysResult>): void;
    /**
     * Asynchronously creates a new storage account with the specified parameters. If an account is
     * already created and a subsequent create request is issued with different properties, the account
     * properties will be updated. If an account is already created and a subsequent create or update
     * request is issued with the exact same set of properties, the request will succeed.
     *
     * @param {string} resourceGroupName The name of the resource group within the user's subscription.
     *
     * @param {string} accountName The name of the storage account within the specified resource group.
     * Storage account names must be between 3 and 24 characters in length and use numbers and
     * lower-case letters only.
     *
     * @param {StorageAccountCreateParameters} parameters The parameters to provide for the created
     * account.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.StorageAccount} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.StorageAccount} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    beginCreate(resourceGroupName: string, accountName: string, parameters: Models.StorageAccountCreateParameters): Promise<Models.StorageAccount>;
    beginCreate(resourceGroupName: string, accountName: string, parameters: Models.StorageAccountCreateParameters, options: msRest.RequestOptionsBase): Promise<Models.StorageAccount>;
    beginCreate(resourceGroupName: string, accountName: string, parameters: Models.StorageAccountCreateParameters, callback: msRest.ServiceCallback<Models.StorageAccount>): void;
    beginCreate(resourceGroupName: string, accountName: string, parameters: Models.StorageAccountCreateParameters, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.StorageAccount>): void;
}
