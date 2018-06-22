import * as msRest from "ms-rest-js";
import * as Models from "../models";
import { ComputeManagementClientContext } from "../computeManagementClientContext";
/** Class representing a Disks. */
export declare class Disks {
    private readonly client;
    private readonly serializer;
    /**
     * Create a Disks.
     * @param {ComputeManagementClientContext} client Reference to the service client.
     */
    constructor(client: ComputeManagementClientContext);
    /**
     * Creates or updates a disk.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} diskName The name of the managed disk that is being created. The name can't be
     * changed after the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _.
     * The maximum name length is 80 characters.
     *
     * @param {Disk} disk Disk object supplied in the body of the Put disk operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    createOrUpdateWithHttpOperationResponse(resourceGroupName: string, diskName: string, disk: Models.Disk, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Updates (patches) a disk.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} diskName The name of the managed disk that is being created. The name can't be
     * changed after the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _.
     * The maximum name length is 80 characters.
     *
     * @param {DiskUpdate} disk Disk object supplied in the body of the Patch disk operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    updateWithHttpOperationResponse(resourceGroupName: string, diskName: string, disk: Models.DiskUpdate, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Gets information about a disk.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} diskName The name of the managed disk that is being created. The name can't be
     * changed after the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _.
     * The maximum name length is 80 characters.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    getWithHttpOperationResponse(resourceGroupName: string, diskName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.Disk>>;
    /**
     * Deletes a disk.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} diskName The name of the managed disk that is being created. The name can't be
     * changed after the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _.
     * The maximum name length is 80 characters.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    deleteMethodWithHttpOperationResponse(resourceGroupName: string, diskName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Lists all the disks under a resource group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    listByResourceGroupWithHttpOperationResponse(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.DiskList>>;
    /**
     * Lists all the disks under a subscription.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    listWithHttpOperationResponse(options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.DiskList>>;
    /**
     * Grants access to a disk.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} diskName The name of the managed disk that is being created. The name can't be
     * changed after the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _.
     * The maximum name length is 80 characters.
     *
     * @param {GrantAccessData} grantAccessData Access data object supplied in the body of the get disk
     * access operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    grantAccessWithHttpOperationResponse(resourceGroupName: string, diskName: string, grantAccessData: Models.GrantAccessData, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Revokes access to a disk.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} diskName The name of the managed disk that is being created. The name can't be
     * changed after the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _.
     * The maximum name length is 80 characters.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    revokeAccessWithHttpOperationResponse(resourceGroupName: string, diskName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Creates or updates a disk.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} diskName The name of the managed disk that is being created. The name can't be
     * changed after the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _.
     * The maximum name length is 80 characters.
     *
     * @param {Disk} disk Disk object supplied in the body of the Put disk operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginCreateOrUpdateWithHttpOperationResponse(resourceGroupName: string, diskName: string, disk: Models.Disk, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.Disk>>;
    /**
     * Updates (patches) a disk.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} diskName The name of the managed disk that is being created. The name can't be
     * changed after the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _.
     * The maximum name length is 80 characters.
     *
     * @param {DiskUpdate} disk Disk object supplied in the body of the Patch disk operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginUpdateWithHttpOperationResponse(resourceGroupName: string, diskName: string, disk: Models.DiskUpdate, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.Disk>>;
    /**
     * Deletes a disk.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} diskName The name of the managed disk that is being created. The name can't be
     * changed after the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _.
     * The maximum name length is 80 characters.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginDeleteMethodWithHttpOperationResponse(resourceGroupName: string, diskName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.OperationStatusResponse>>;
    /**
     * Grants access to a disk.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} diskName The name of the managed disk that is being created. The name can't be
     * changed after the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _.
     * The maximum name length is 80 characters.
     *
     * @param {GrantAccessData} grantAccessData Access data object supplied in the body of the get disk
     * access operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginGrantAccessWithHttpOperationResponse(resourceGroupName: string, diskName: string, grantAccessData: Models.GrantAccessData, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.AccessUri>>;
    /**
     * Revokes access to a disk.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} diskName The name of the managed disk that is being created. The name can't be
     * changed after the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _.
     * The maximum name length is 80 characters.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginRevokeAccessWithHttpOperationResponse(resourceGroupName: string, diskName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.OperationStatusResponse>>;
    /**
     * Lists all the disks under a resource group.
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
    listByResourceGroupNextWithHttpOperationResponse(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.DiskList>>;
    /**
     * Lists all the disks under a subscription.
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
    listNextWithHttpOperationResponse(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.DiskList>>;
    /**
     * Creates or updates a disk.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} diskName The name of the managed disk that is being created. The name can't be
     * changed after the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _.
     * The maximum name length is 80 characters.
     *
     * @param {Disk} disk Disk object supplied in the body of the Put disk operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.Disk} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.Disk} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    createOrUpdate(resourceGroupName: string, diskName: string, disk: Models.Disk): Promise<Models.Disk>;
    createOrUpdate(resourceGroupName: string, diskName: string, disk: Models.Disk, options: msRest.RequestOptionsBase): Promise<Models.Disk>;
    createOrUpdate(resourceGroupName: string, diskName: string, disk: Models.Disk, callback: msRest.ServiceCallback<Models.Disk>): void;
    createOrUpdate(resourceGroupName: string, diskName: string, disk: Models.Disk, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Disk>): void;
    /**
     * Updates (patches) a disk.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} diskName The name of the managed disk that is being created. The name can't be
     * changed after the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _.
     * The maximum name length is 80 characters.
     *
     * @param {DiskUpdate} disk Disk object supplied in the body of the Patch disk operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.Disk} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.Disk} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    update(resourceGroupName: string, diskName: string, disk: Models.DiskUpdate): Promise<Models.Disk>;
    update(resourceGroupName: string, diskName: string, disk: Models.DiskUpdate, options: msRest.RequestOptionsBase): Promise<Models.Disk>;
    update(resourceGroupName: string, diskName: string, disk: Models.DiskUpdate, callback: msRest.ServiceCallback<Models.Disk>): void;
    update(resourceGroupName: string, diskName: string, disk: Models.DiskUpdate, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Disk>): void;
    /**
     * Gets information about a disk.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} diskName The name of the managed disk that is being created. The name can't be
     * changed after the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _.
     * The maximum name length is 80 characters.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.Disk} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.Disk} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    get(resourceGroupName: string, diskName: string): Promise<Models.Disk>;
    get(resourceGroupName: string, diskName: string, options: msRest.RequestOptionsBase): Promise<Models.Disk>;
    get(resourceGroupName: string, diskName: string, callback: msRest.ServiceCallback<Models.Disk>): void;
    get(resourceGroupName: string, diskName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Disk>): void;
    /**
     * Deletes a disk.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} diskName The name of the managed disk that is being created. The name can't be
     * changed after the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _.
     * The maximum name length is 80 characters.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.OperationStatusResponse} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.OperationStatusResponse} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    deleteMethod(resourceGroupName: string, diskName: string): Promise<Models.OperationStatusResponse>;
    deleteMethod(resourceGroupName: string, diskName: string, options: msRest.RequestOptionsBase): Promise<Models.OperationStatusResponse>;
    deleteMethod(resourceGroupName: string, diskName: string, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    deleteMethod(resourceGroupName: string, diskName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    /**
     * Lists all the disks under a resource group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.DiskList} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.DiskList} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listByResourceGroup(resourceGroupName: string): Promise<Models.DiskList>;
    listByResourceGroup(resourceGroupName: string, options: msRest.RequestOptionsBase): Promise<Models.DiskList>;
    listByResourceGroup(resourceGroupName: string, callback: msRest.ServiceCallback<Models.DiskList>): void;
    listByResourceGroup(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DiskList>): void;
    /**
     * Lists all the disks under a subscription.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.DiskList} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.DiskList} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    list(): Promise<Models.DiskList>;
    list(options: msRest.RequestOptionsBase): Promise<Models.DiskList>;
    list(callback: msRest.ServiceCallback<Models.DiskList>): void;
    list(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DiskList>): void;
    /**
     * Grants access to a disk.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} diskName The name of the managed disk that is being created. The name can't be
     * changed after the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _.
     * The maximum name length is 80 characters.
     *
     * @param {GrantAccessData} grantAccessData Access data object supplied in the body of the get disk
     * access operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.AccessUri} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.AccessUri} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    grantAccess(resourceGroupName: string, diskName: string, grantAccessData: Models.GrantAccessData): Promise<Models.AccessUri>;
    grantAccess(resourceGroupName: string, diskName: string, grantAccessData: Models.GrantAccessData, options: msRest.RequestOptionsBase): Promise<Models.AccessUri>;
    grantAccess(resourceGroupName: string, diskName: string, grantAccessData: Models.GrantAccessData, callback: msRest.ServiceCallback<Models.AccessUri>): void;
    grantAccess(resourceGroupName: string, diskName: string, grantAccessData: Models.GrantAccessData, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AccessUri>): void;
    /**
     * Revokes access to a disk.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} diskName The name of the managed disk that is being created. The name can't be
     * changed after the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _.
     * The maximum name length is 80 characters.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.OperationStatusResponse} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.OperationStatusResponse} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    revokeAccess(resourceGroupName: string, diskName: string): Promise<Models.OperationStatusResponse>;
    revokeAccess(resourceGroupName: string, diskName: string, options: msRest.RequestOptionsBase): Promise<Models.OperationStatusResponse>;
    revokeAccess(resourceGroupName: string, diskName: string, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    revokeAccess(resourceGroupName: string, diskName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    /**
     * Creates or updates a disk.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} diskName The name of the managed disk that is being created. The name can't be
     * changed after the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _.
     * The maximum name length is 80 characters.
     *
     * @param {Disk} disk Disk object supplied in the body of the Put disk operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.Disk} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.Disk} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    beginCreateOrUpdate(resourceGroupName: string, diskName: string, disk: Models.Disk): Promise<Models.Disk>;
    beginCreateOrUpdate(resourceGroupName: string, diskName: string, disk: Models.Disk, options: msRest.RequestOptionsBase): Promise<Models.Disk>;
    beginCreateOrUpdate(resourceGroupName: string, diskName: string, disk: Models.Disk, callback: msRest.ServiceCallback<Models.Disk>): void;
    beginCreateOrUpdate(resourceGroupName: string, diskName: string, disk: Models.Disk, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Disk>): void;
    /**
     * Updates (patches) a disk.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} diskName The name of the managed disk that is being created. The name can't be
     * changed after the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _.
     * The maximum name length is 80 characters.
     *
     * @param {DiskUpdate} disk Disk object supplied in the body of the Patch disk operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.Disk} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.Disk} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    beginUpdate(resourceGroupName: string, diskName: string, disk: Models.DiskUpdate): Promise<Models.Disk>;
    beginUpdate(resourceGroupName: string, diskName: string, disk: Models.DiskUpdate, options: msRest.RequestOptionsBase): Promise<Models.Disk>;
    beginUpdate(resourceGroupName: string, diskName: string, disk: Models.DiskUpdate, callback: msRest.ServiceCallback<Models.Disk>): void;
    beginUpdate(resourceGroupName: string, diskName: string, disk: Models.DiskUpdate, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Disk>): void;
    /**
     * Deletes a disk.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} diskName The name of the managed disk that is being created. The name can't be
     * changed after the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _.
     * The maximum name length is 80 characters.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.OperationStatusResponse} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.OperationStatusResponse} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    beginDeleteMethod(resourceGroupName: string, diskName: string): Promise<Models.OperationStatusResponse>;
    beginDeleteMethod(resourceGroupName: string, diskName: string, options: msRest.RequestOptionsBase): Promise<Models.OperationStatusResponse>;
    beginDeleteMethod(resourceGroupName: string, diskName: string, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    beginDeleteMethod(resourceGroupName: string, diskName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    /**
     * Grants access to a disk.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} diskName The name of the managed disk that is being created. The name can't be
     * changed after the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _.
     * The maximum name length is 80 characters.
     *
     * @param {GrantAccessData} grantAccessData Access data object supplied in the body of the get disk
     * access operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.AccessUri} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.AccessUri} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    beginGrantAccess(resourceGroupName: string, diskName: string, grantAccessData: Models.GrantAccessData): Promise<Models.AccessUri>;
    beginGrantAccess(resourceGroupName: string, diskName: string, grantAccessData: Models.GrantAccessData, options: msRest.RequestOptionsBase): Promise<Models.AccessUri>;
    beginGrantAccess(resourceGroupName: string, diskName: string, grantAccessData: Models.GrantAccessData, callback: msRest.ServiceCallback<Models.AccessUri>): void;
    beginGrantAccess(resourceGroupName: string, diskName: string, grantAccessData: Models.GrantAccessData, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AccessUri>): void;
    /**
     * Revokes access to a disk.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} diskName The name of the managed disk that is being created. The name can't be
     * changed after the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _.
     * The maximum name length is 80 characters.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.OperationStatusResponse} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.OperationStatusResponse} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    beginRevokeAccess(resourceGroupName: string, diskName: string): Promise<Models.OperationStatusResponse>;
    beginRevokeAccess(resourceGroupName: string, diskName: string, options: msRest.RequestOptionsBase): Promise<Models.OperationStatusResponse>;
    beginRevokeAccess(resourceGroupName: string, diskName: string, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    beginRevokeAccess(resourceGroupName: string, diskName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    /**
     * Lists all the disks under a resource group.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call to List operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.DiskList} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.DiskList} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listByResourceGroupNext(nextPageLink: string): Promise<Models.DiskList>;
    listByResourceGroupNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.DiskList>;
    listByResourceGroupNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.DiskList>): void;
    listByResourceGroupNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DiskList>): void;
    /**
     * Lists all the disks under a subscription.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call to List operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.DiskList} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.DiskList} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listNext(nextPageLink: string): Promise<Models.DiskList>;
    listNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.DiskList>;
    listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.DiskList>): void;
    listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DiskList>): void;
}
