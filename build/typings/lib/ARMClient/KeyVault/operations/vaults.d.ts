import * as msRest from "ms-rest-js";
import * as Models from "../models";
import { KeyVaultManagementClientContext } from "../keyVaultManagementClientContext";
/** Class representing a Vaults. */
export declare class Vaults {
    private readonly client;
    private readonly serializer;
    /**
     * Create a Vaults.
     * @param {KeyVaultManagementClientContext} client Reference to the service client.
     */
    constructor(client: KeyVaultManagementClientContext);
    /**
     * Create or update a key vault in the specified subscription.
     *
     * @param {string} resourceGroupName The name of the Resource Group to which the server belongs.
     *
     * @param {string} vaultName Name of the vault
     *
     * @param {VaultCreateOrUpdateParameters} parameters Parameters to create or update the vault
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    createOrUpdateWithHttpOperationResponse(resourceGroupName: string, vaultName: string, parameters: Models.VaultCreateOrUpdateParameters, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.Vault>>;
    /**
     * Update a key vault in the specified subscription.
     *
     * @param {string} resourceGroupName The name of the Resource Group to which the server belongs.
     *
     * @param {string} vaultName Name of the vault
     *
     * @param {VaultPatchParameters} parameters Parameters to patch the vault
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    updateWithHttpOperationResponse(resourceGroupName: string, vaultName: string, parameters: Models.VaultPatchParameters, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.Vault>>;
    /**
     * Deletes the specified Azure key vault.
     *
     * @param {string} resourceGroupName The name of the Resource Group to which the vault belongs.
     *
     * @param {string} vaultName The name of the vault to delete
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    deleteMethodWithHttpOperationResponse(resourceGroupName: string, vaultName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<void>>;
    /**
     * Gets the specified Azure key vault.
     *
     * @param {string} resourceGroupName The name of the Resource Group to which the vault belongs.
     *
     * @param {string} vaultName The name of the vault.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    getWithHttpOperationResponse(resourceGroupName: string, vaultName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.Vault>>;
    /**
     * Update access policies in a key vault in the specified subscription.
     *
     * @param {string} resourceGroupName The name of the Resource Group to which the vault belongs.
     *
     * @param {string} vaultName Name of the vault
     *
     * @param {AccessPolicyUpdateKind} operationKind Name of the operation. Possible values include:
     * 'add', 'replace', 'remove'
     *
     * @param {VaultAccessPolicyParameters} parameters Access policy to merge into the vault
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    updateAccessPolicyWithHttpOperationResponse(resourceGroupName: string, vaultName: string, operationKind: Models.AccessPolicyUpdateKind, parameters: Models.VaultAccessPolicyParameters, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.VaultAccessPolicyParameters>>;
    /**
     * The List operation gets information about the vaults associated with the subscription and within
     * the specified resource group.
     *
     * @param {string} resourceGroupName The name of the Resource Group to which the vault belongs.
     *
     * @param {VaultsListByResourceGroupOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    listByResourceGroupWithHttpOperationResponse(resourceGroupName: string, options?: Models.VaultsListByResourceGroupOptionalParams): Promise<msRest.HttpOperationResponse<Models.VaultListResult>>;
    /**
     * The List operation gets information about the vaults associated with the subscription.
     *
     * @param {VaultsListBySubscriptionOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    listBySubscriptionWithHttpOperationResponse(options?: Models.VaultsListBySubscriptionOptionalParams): Promise<msRest.HttpOperationResponse<Models.VaultListResult>>;
    /**
     * Gets information about the deleted vaults in a subscription.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    listDeletedWithHttpOperationResponse(options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.DeletedVaultListResult>>;
    /**
     * Gets the deleted Azure key vault.
     *
     * @param {string} vaultName The name of the vault.
     *
     * @param {string} location The location of the deleted vault.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    getDeletedWithHttpOperationResponse(vaultName: string, location: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.DeletedVault>>;
    /**
     * Permanently deletes the specified vault. aka Purges the deleted Azure key vault.
     *
     * @param {string} vaultName The name of the soft-deleted vault.
     *
     * @param {string} location The location of the soft-deleted vault.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    purgeDeletedWithHttpOperationResponse(vaultName: string, location: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * The List operation gets information about the vaults associated with the subscription.
     *
     * @param {VaultsListOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    listWithHttpOperationResponse(options?: Models.VaultsListOptionalParams): Promise<msRest.HttpOperationResponse<Models.ResourceListResult>>;
    /**
     * Checks that the vault name is valid and is not already in use.
     *
     * @param {VaultCheckNameAvailabilityParameters} vaultName The name of the vault.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    checkNameAvailabilityWithHttpOperationResponse(vaultName: Models.VaultCheckNameAvailabilityParameters, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.CheckNameAvailabilityResult>>;
    /**
     * Permanently deletes the specified vault. aka Purges the deleted Azure key vault.
     *
     * @param {string} vaultName The name of the soft-deleted vault.
     *
     * @param {string} location The location of the soft-deleted vault.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginPurgeDeletedWithHttpOperationResponse(vaultName: string, location: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<void>>;
    /**
     * The List operation gets information about the vaults associated with the subscription and within
     * the specified resource group.
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
    listByResourceGroupNextWithHttpOperationResponse(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.VaultListResult>>;
    /**
     * The List operation gets information about the vaults associated with the subscription.
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
    listBySubscriptionNextWithHttpOperationResponse(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.VaultListResult>>;
    /**
     * Gets information about the deleted vaults in a subscription.
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
    listDeletedNextWithHttpOperationResponse(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.DeletedVaultListResult>>;
    /**
     * The List operation gets information about the vaults associated with the subscription.
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
     * Create or update a key vault in the specified subscription.
     *
     * @param {string} resourceGroupName The name of the Resource Group to which the server belongs.
     *
     * @param {string} vaultName Name of the vault
     *
     * @param {VaultCreateOrUpdateParameters} parameters Parameters to create or update the vault
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.Vault} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.Vault} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    createOrUpdate(resourceGroupName: string, vaultName: string, parameters: Models.VaultCreateOrUpdateParameters): Promise<Models.Vault>;
    createOrUpdate(resourceGroupName: string, vaultName: string, parameters: Models.VaultCreateOrUpdateParameters, options: msRest.RequestOptionsBase): Promise<Models.Vault>;
    createOrUpdate(resourceGroupName: string, vaultName: string, parameters: Models.VaultCreateOrUpdateParameters, callback: msRest.ServiceCallback<Models.Vault>): void;
    createOrUpdate(resourceGroupName: string, vaultName: string, parameters: Models.VaultCreateOrUpdateParameters, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Vault>): void;
    /**
     * Update a key vault in the specified subscription.
     *
     * @param {string} resourceGroupName The name of the Resource Group to which the server belongs.
     *
     * @param {string} vaultName Name of the vault
     *
     * @param {VaultPatchParameters} parameters Parameters to patch the vault
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.Vault} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.Vault} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    update(resourceGroupName: string, vaultName: string, parameters: Models.VaultPatchParameters): Promise<Models.Vault>;
    update(resourceGroupName: string, vaultName: string, parameters: Models.VaultPatchParameters, options: msRest.RequestOptionsBase): Promise<Models.Vault>;
    update(resourceGroupName: string, vaultName: string, parameters: Models.VaultPatchParameters, callback: msRest.ServiceCallback<Models.Vault>): void;
    update(resourceGroupName: string, vaultName: string, parameters: Models.VaultPatchParameters, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Vault>): void;
    /**
     * Deletes the specified Azure key vault.
     *
     * @param {string} resourceGroupName The name of the Resource Group to which the vault belongs.
     *
     * @param {string} vaultName The name of the vault to delete
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
    deleteMethod(resourceGroupName: string, vaultName: string): Promise<void>;
    deleteMethod(resourceGroupName: string, vaultName: string, options: msRest.RequestOptionsBase): Promise<void>;
    deleteMethod(resourceGroupName: string, vaultName: string, callback: msRest.ServiceCallback<void>): void;
    deleteMethod(resourceGroupName: string, vaultName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * Gets the specified Azure key vault.
     *
     * @param {string} resourceGroupName The name of the Resource Group to which the vault belongs.
     *
     * @param {string} vaultName The name of the vault.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.Vault} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.Vault} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    get(resourceGroupName: string, vaultName: string): Promise<Models.Vault>;
    get(resourceGroupName: string, vaultName: string, options: msRest.RequestOptionsBase): Promise<Models.Vault>;
    get(resourceGroupName: string, vaultName: string, callback: msRest.ServiceCallback<Models.Vault>): void;
    get(resourceGroupName: string, vaultName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Vault>): void;
    /**
     * Update access policies in a key vault in the specified subscription.
     *
     * @param {string} resourceGroupName The name of the Resource Group to which the vault belongs.
     *
     * @param {string} vaultName Name of the vault
     *
     * @param {AccessPolicyUpdateKind} operationKind Name of the operation. Possible values include:
     * 'add', 'replace', 'remove'
     *
     * @param {VaultAccessPolicyParameters} parameters Access policy to merge into the vault
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.VaultAccessPolicyParameters} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.VaultAccessPolicyParameters} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    updateAccessPolicy(resourceGroupName: string, vaultName: string, operationKind: Models.AccessPolicyUpdateKind, parameters: Models.VaultAccessPolicyParameters): Promise<Models.VaultAccessPolicyParameters>;
    updateAccessPolicy(resourceGroupName: string, vaultName: string, operationKind: Models.AccessPolicyUpdateKind, parameters: Models.VaultAccessPolicyParameters, options: msRest.RequestOptionsBase): Promise<Models.VaultAccessPolicyParameters>;
    updateAccessPolicy(resourceGroupName: string, vaultName: string, operationKind: Models.AccessPolicyUpdateKind, parameters: Models.VaultAccessPolicyParameters, callback: msRest.ServiceCallback<Models.VaultAccessPolicyParameters>): void;
    updateAccessPolicy(resourceGroupName: string, vaultName: string, operationKind: Models.AccessPolicyUpdateKind, parameters: Models.VaultAccessPolicyParameters, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VaultAccessPolicyParameters>): void;
    /**
     * The List operation gets information about the vaults associated with the subscription and within
     * the specified resource group.
     *
     * @param {string} resourceGroupName The name of the Resource Group to which the vault belongs.
     *
     * @param {VaultsListByResourceGroupOptionalParams} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.VaultListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.VaultListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listByResourceGroup(resourceGroupName: string): Promise<Models.VaultListResult>;
    listByResourceGroup(resourceGroupName: string, options: Models.VaultsListByResourceGroupOptionalParams): Promise<Models.VaultListResult>;
    listByResourceGroup(resourceGroupName: string, callback: msRest.ServiceCallback<Models.VaultListResult>): void;
    listByResourceGroup(resourceGroupName: string, options: Models.VaultsListByResourceGroupOptionalParams, callback: msRest.ServiceCallback<Models.VaultListResult>): void;
    /**
     * The List operation gets information about the vaults associated with the subscription.
     *
     * @param {VaultsListBySubscriptionOptionalParams} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.VaultListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.VaultListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listBySubscription(): Promise<Models.VaultListResult>;
    listBySubscription(options: Models.VaultsListBySubscriptionOptionalParams): Promise<Models.VaultListResult>;
    listBySubscription(callback: msRest.ServiceCallback<Models.VaultListResult>): void;
    listBySubscription(options: Models.VaultsListBySubscriptionOptionalParams, callback: msRest.ServiceCallback<Models.VaultListResult>): void;
    /**
     * Gets information about the deleted vaults in a subscription.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.DeletedVaultListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.DeletedVaultListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listDeleted(): Promise<Models.DeletedVaultListResult>;
    listDeleted(options: msRest.RequestOptionsBase): Promise<Models.DeletedVaultListResult>;
    listDeleted(callback: msRest.ServiceCallback<Models.DeletedVaultListResult>): void;
    listDeleted(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DeletedVaultListResult>): void;
    /**
     * Gets the deleted Azure key vault.
     *
     * @param {string} vaultName The name of the vault.
     *
     * @param {string} location The location of the deleted vault.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.DeletedVault} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.DeletedVault} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    getDeleted(vaultName: string, location: string): Promise<Models.DeletedVault>;
    getDeleted(vaultName: string, location: string, options: msRest.RequestOptionsBase): Promise<Models.DeletedVault>;
    getDeleted(vaultName: string, location: string, callback: msRest.ServiceCallback<Models.DeletedVault>): void;
    getDeleted(vaultName: string, location: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DeletedVault>): void;
    /**
     * Permanently deletes the specified vault. aka Purges the deleted Azure key vault.
     *
     * @param {string} vaultName The name of the soft-deleted vault.
     *
     * @param {string} location The location of the soft-deleted vault.
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
    purgeDeleted(vaultName: string, location: string): Promise<void>;
    purgeDeleted(vaultName: string, location: string, options: msRest.RequestOptionsBase): Promise<void>;
    purgeDeleted(vaultName: string, location: string, callback: msRest.ServiceCallback<void>): void;
    purgeDeleted(vaultName: string, location: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * The List operation gets information about the vaults associated with the subscription.
     *
     * @param {VaultsListOptionalParams} [options] Optional Parameters.
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
    list(options: Models.VaultsListOptionalParams): Promise<Models.ResourceListResult>;
    list(callback: msRest.ServiceCallback<Models.ResourceListResult>): void;
    list(options: Models.VaultsListOptionalParams, callback: msRest.ServiceCallback<Models.ResourceListResult>): void;
    /**
     * Checks that the vault name is valid and is not already in use.
     *
     * @param {VaultCheckNameAvailabilityParameters} vaultName The name of the vault.
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
    checkNameAvailability(vaultName: Models.VaultCheckNameAvailabilityParameters): Promise<Models.CheckNameAvailabilityResult>;
    checkNameAvailability(vaultName: Models.VaultCheckNameAvailabilityParameters, options: msRest.RequestOptionsBase): Promise<Models.CheckNameAvailabilityResult>;
    checkNameAvailability(vaultName: Models.VaultCheckNameAvailabilityParameters, callback: msRest.ServiceCallback<Models.CheckNameAvailabilityResult>): void;
    checkNameAvailability(vaultName: Models.VaultCheckNameAvailabilityParameters, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CheckNameAvailabilityResult>): void;
    /**
     * Permanently deletes the specified vault. aka Purges the deleted Azure key vault.
     *
     * @param {string} vaultName The name of the soft-deleted vault.
     *
     * @param {string} location The location of the soft-deleted vault.
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
    beginPurgeDeleted(vaultName: string, location: string): Promise<void>;
    beginPurgeDeleted(vaultName: string, location: string, options: msRest.RequestOptionsBase): Promise<void>;
    beginPurgeDeleted(vaultName: string, location: string, callback: msRest.ServiceCallback<void>): void;
    beginPurgeDeleted(vaultName: string, location: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * The List operation gets information about the vaults associated with the subscription and within
     * the specified resource group.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call to List operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.VaultListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.VaultListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listByResourceGroupNext(nextPageLink: string): Promise<Models.VaultListResult>;
    listByResourceGroupNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.VaultListResult>;
    listByResourceGroupNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.VaultListResult>): void;
    listByResourceGroupNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VaultListResult>): void;
    /**
     * The List operation gets information about the vaults associated with the subscription.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call to List operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.VaultListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.VaultListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listBySubscriptionNext(nextPageLink: string): Promise<Models.VaultListResult>;
    listBySubscriptionNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.VaultListResult>;
    listBySubscriptionNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.VaultListResult>): void;
    listBySubscriptionNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VaultListResult>): void;
    /**
     * Gets information about the deleted vaults in a subscription.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call to List operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.DeletedVaultListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.DeletedVaultListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listDeletedNext(nextPageLink: string): Promise<Models.DeletedVaultListResult>;
    listDeletedNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.DeletedVaultListResult>;
    listDeletedNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.DeletedVaultListResult>): void;
    listDeletedNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DeletedVaultListResult>): void;
    /**
     * The List operation gets information about the vaults associated with the subscription.
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
