import * as msRest from "ms-rest-js";
import * as Models from "../models";
import { ComputeManagementClientContext } from "../computeManagementClientContext";
/** Class representing a Snapshots. */
export declare class Snapshots {
    private readonly client;
    private readonly serializer;
    /**
     * Create a Snapshots.
     * @param {ComputeManagementClientContext} client Reference to the service client.
     */
    constructor(client: ComputeManagementClientContext);
    /**
     * Creates or updates a snapshot.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} snapshotName The name of the snapshot that is being created. The name can't be
     * changed after the snapshot is created. Supported characters for the name are a-z, A-Z, 0-9 and
     * _. The max name length is 80 characters.
     *
     * @param {Snapshot} snapshot Snapshot object supplied in the body of the Put disk operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    createOrUpdateWithHttpOperationResponse(resourceGroupName: string, snapshotName: string, snapshot: Models.Snapshot, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Updates (patches) a snapshot.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} snapshotName The name of the snapshot that is being created. The name can't be
     * changed after the snapshot is created. Supported characters for the name are a-z, A-Z, 0-9 and
     * _. The max name length is 80 characters.
     *
     * @param {SnapshotUpdate} snapshot Snapshot object supplied in the body of the Patch snapshot
     * operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    updateWithHttpOperationResponse(resourceGroupName: string, snapshotName: string, snapshot: Models.SnapshotUpdate, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Gets information about a snapshot.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} snapshotName The name of the snapshot that is being created. The name can't be
     * changed after the snapshot is created. Supported characters for the name are a-z, A-Z, 0-9 and
     * _. The max name length is 80 characters.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    getWithHttpOperationResponse(resourceGroupName: string, snapshotName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.Snapshot>>;
    /**
     * Deletes a snapshot.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} snapshotName The name of the snapshot that is being created. The name can't be
     * changed after the snapshot is created. Supported characters for the name are a-z, A-Z, 0-9 and
     * _. The max name length is 80 characters.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    deleteMethodWithHttpOperationResponse(resourceGroupName: string, snapshotName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Lists snapshots under a resource group.
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
    listByResourceGroupWithHttpOperationResponse(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.SnapshotList>>;
    /**
     * Lists snapshots under a subscription.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    listWithHttpOperationResponse(options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.SnapshotList>>;
    /**
     * Grants access to a snapshot.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} snapshotName The name of the snapshot that is being created. The name can't be
     * changed after the snapshot is created. Supported characters for the name are a-z, A-Z, 0-9 and
     * _. The max name length is 80 characters.
     *
     * @param {GrantAccessData} grantAccessData Access data object supplied in the body of the get
     * snapshot access operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    grantAccessWithHttpOperationResponse(resourceGroupName: string, snapshotName: string, grantAccessData: Models.GrantAccessData, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Revokes access to a snapshot.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} snapshotName The name of the snapshot that is being created. The name can't be
     * changed after the snapshot is created. Supported characters for the name are a-z, A-Z, 0-9 and
     * _. The max name length is 80 characters.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    revokeAccessWithHttpOperationResponse(resourceGroupName: string, snapshotName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Creates or updates a snapshot.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} snapshotName The name of the snapshot that is being created. The name can't be
     * changed after the snapshot is created. Supported characters for the name are a-z, A-Z, 0-9 and
     * _. The max name length is 80 characters.
     *
     * @param {Snapshot} snapshot Snapshot object supplied in the body of the Put disk operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginCreateOrUpdateWithHttpOperationResponse(resourceGroupName: string, snapshotName: string, snapshot: Models.Snapshot, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.Snapshot>>;
    /**
     * Updates (patches) a snapshot.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} snapshotName The name of the snapshot that is being created. The name can't be
     * changed after the snapshot is created. Supported characters for the name are a-z, A-Z, 0-9 and
     * _. The max name length is 80 characters.
     *
     * @param {SnapshotUpdate} snapshot Snapshot object supplied in the body of the Patch snapshot
     * operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginUpdateWithHttpOperationResponse(resourceGroupName: string, snapshotName: string, snapshot: Models.SnapshotUpdate, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.Snapshot>>;
    /**
     * Deletes a snapshot.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} snapshotName The name of the snapshot that is being created. The name can't be
     * changed after the snapshot is created. Supported characters for the name are a-z, A-Z, 0-9 and
     * _. The max name length is 80 characters.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginDeleteMethodWithHttpOperationResponse(resourceGroupName: string, snapshotName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.OperationStatusResponse>>;
    /**
     * Grants access to a snapshot.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} snapshotName The name of the snapshot that is being created. The name can't be
     * changed after the snapshot is created. Supported characters for the name are a-z, A-Z, 0-9 and
     * _. The max name length is 80 characters.
     *
     * @param {GrantAccessData} grantAccessData Access data object supplied in the body of the get
     * snapshot access operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginGrantAccessWithHttpOperationResponse(resourceGroupName: string, snapshotName: string, grantAccessData: Models.GrantAccessData, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.AccessUri>>;
    /**
     * Revokes access to a snapshot.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} snapshotName The name of the snapshot that is being created. The name can't be
     * changed after the snapshot is created. Supported characters for the name are a-z, A-Z, 0-9 and
     * _. The max name length is 80 characters.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginRevokeAccessWithHttpOperationResponse(resourceGroupName: string, snapshotName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.OperationStatusResponse>>;
    /**
     * Lists snapshots under a resource group.
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
    listByResourceGroupNextWithHttpOperationResponse(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.SnapshotList>>;
    /**
     * Lists snapshots under a subscription.
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
    listNextWithHttpOperationResponse(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.SnapshotList>>;
    /**
     * Creates or updates a snapshot.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} snapshotName The name of the snapshot that is being created. The name can't be
     * changed after the snapshot is created. Supported characters for the name are a-z, A-Z, 0-9 and
     * _. The max name length is 80 characters.
     *
     * @param {Snapshot} snapshot Snapshot object supplied in the body of the Put disk operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.Snapshot} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.Snapshot} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    createOrUpdate(resourceGroupName: string, snapshotName: string, snapshot: Models.Snapshot): Promise<Models.Snapshot>;
    createOrUpdate(resourceGroupName: string, snapshotName: string, snapshot: Models.Snapshot, options: msRest.RequestOptionsBase): Promise<Models.Snapshot>;
    createOrUpdate(resourceGroupName: string, snapshotName: string, snapshot: Models.Snapshot, callback: msRest.ServiceCallback<Models.Snapshot>): void;
    createOrUpdate(resourceGroupName: string, snapshotName: string, snapshot: Models.Snapshot, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Snapshot>): void;
    /**
     * Updates (patches) a snapshot.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} snapshotName The name of the snapshot that is being created. The name can't be
     * changed after the snapshot is created. Supported characters for the name are a-z, A-Z, 0-9 and
     * _. The max name length is 80 characters.
     *
     * @param {SnapshotUpdate} snapshot Snapshot object supplied in the body of the Patch snapshot
     * operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.Snapshot} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.Snapshot} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    update(resourceGroupName: string, snapshotName: string, snapshot: Models.SnapshotUpdate): Promise<Models.Snapshot>;
    update(resourceGroupName: string, snapshotName: string, snapshot: Models.SnapshotUpdate, options: msRest.RequestOptionsBase): Promise<Models.Snapshot>;
    update(resourceGroupName: string, snapshotName: string, snapshot: Models.SnapshotUpdate, callback: msRest.ServiceCallback<Models.Snapshot>): void;
    update(resourceGroupName: string, snapshotName: string, snapshot: Models.SnapshotUpdate, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Snapshot>): void;
    /**
     * Gets information about a snapshot.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} snapshotName The name of the snapshot that is being created. The name can't be
     * changed after the snapshot is created. Supported characters for the name are a-z, A-Z, 0-9 and
     * _. The max name length is 80 characters.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.Snapshot} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.Snapshot} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    get(resourceGroupName: string, snapshotName: string): Promise<Models.Snapshot>;
    get(resourceGroupName: string, snapshotName: string, options: msRest.RequestOptionsBase): Promise<Models.Snapshot>;
    get(resourceGroupName: string, snapshotName: string, callback: msRest.ServiceCallback<Models.Snapshot>): void;
    get(resourceGroupName: string, snapshotName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Snapshot>): void;
    /**
     * Deletes a snapshot.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} snapshotName The name of the snapshot that is being created. The name can't be
     * changed after the snapshot is created. Supported characters for the name are a-z, A-Z, 0-9 and
     * _. The max name length is 80 characters.
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
    deleteMethod(resourceGroupName: string, snapshotName: string): Promise<Models.OperationStatusResponse>;
    deleteMethod(resourceGroupName: string, snapshotName: string, options: msRest.RequestOptionsBase): Promise<Models.OperationStatusResponse>;
    deleteMethod(resourceGroupName: string, snapshotName: string, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    deleteMethod(resourceGroupName: string, snapshotName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    /**
     * Lists snapshots under a resource group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.SnapshotList} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.SnapshotList} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listByResourceGroup(resourceGroupName: string): Promise<Models.SnapshotList>;
    listByResourceGroup(resourceGroupName: string, options: msRest.RequestOptionsBase): Promise<Models.SnapshotList>;
    listByResourceGroup(resourceGroupName: string, callback: msRest.ServiceCallback<Models.SnapshotList>): void;
    listByResourceGroup(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SnapshotList>): void;
    /**
     * Lists snapshots under a subscription.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.SnapshotList} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.SnapshotList} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    list(): Promise<Models.SnapshotList>;
    list(options: msRest.RequestOptionsBase): Promise<Models.SnapshotList>;
    list(callback: msRest.ServiceCallback<Models.SnapshotList>): void;
    list(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SnapshotList>): void;
    /**
     * Grants access to a snapshot.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} snapshotName The name of the snapshot that is being created. The name can't be
     * changed after the snapshot is created. Supported characters for the name are a-z, A-Z, 0-9 and
     * _. The max name length is 80 characters.
     *
     * @param {GrantAccessData} grantAccessData Access data object supplied in the body of the get
     * snapshot access operation.
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
    grantAccess(resourceGroupName: string, snapshotName: string, grantAccessData: Models.GrantAccessData): Promise<Models.AccessUri>;
    grantAccess(resourceGroupName: string, snapshotName: string, grantAccessData: Models.GrantAccessData, options: msRest.RequestOptionsBase): Promise<Models.AccessUri>;
    grantAccess(resourceGroupName: string, snapshotName: string, grantAccessData: Models.GrantAccessData, callback: msRest.ServiceCallback<Models.AccessUri>): void;
    grantAccess(resourceGroupName: string, snapshotName: string, grantAccessData: Models.GrantAccessData, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AccessUri>): void;
    /**
     * Revokes access to a snapshot.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} snapshotName The name of the snapshot that is being created. The name can't be
     * changed after the snapshot is created. Supported characters for the name are a-z, A-Z, 0-9 and
     * _. The max name length is 80 characters.
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
    revokeAccess(resourceGroupName: string, snapshotName: string): Promise<Models.OperationStatusResponse>;
    revokeAccess(resourceGroupName: string, snapshotName: string, options: msRest.RequestOptionsBase): Promise<Models.OperationStatusResponse>;
    revokeAccess(resourceGroupName: string, snapshotName: string, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    revokeAccess(resourceGroupName: string, snapshotName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    /**
     * Creates or updates a snapshot.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} snapshotName The name of the snapshot that is being created. The name can't be
     * changed after the snapshot is created. Supported characters for the name are a-z, A-Z, 0-9 and
     * _. The max name length is 80 characters.
     *
     * @param {Snapshot} snapshot Snapshot object supplied in the body of the Put disk operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.Snapshot} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.Snapshot} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    beginCreateOrUpdate(resourceGroupName: string, snapshotName: string, snapshot: Models.Snapshot): Promise<Models.Snapshot>;
    beginCreateOrUpdate(resourceGroupName: string, snapshotName: string, snapshot: Models.Snapshot, options: msRest.RequestOptionsBase): Promise<Models.Snapshot>;
    beginCreateOrUpdate(resourceGroupName: string, snapshotName: string, snapshot: Models.Snapshot, callback: msRest.ServiceCallback<Models.Snapshot>): void;
    beginCreateOrUpdate(resourceGroupName: string, snapshotName: string, snapshot: Models.Snapshot, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Snapshot>): void;
    /**
     * Updates (patches) a snapshot.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} snapshotName The name of the snapshot that is being created. The name can't be
     * changed after the snapshot is created. Supported characters for the name are a-z, A-Z, 0-9 and
     * _. The max name length is 80 characters.
     *
     * @param {SnapshotUpdate} snapshot Snapshot object supplied in the body of the Patch snapshot
     * operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.Snapshot} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.Snapshot} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    beginUpdate(resourceGroupName: string, snapshotName: string, snapshot: Models.SnapshotUpdate): Promise<Models.Snapshot>;
    beginUpdate(resourceGroupName: string, snapshotName: string, snapshot: Models.SnapshotUpdate, options: msRest.RequestOptionsBase): Promise<Models.Snapshot>;
    beginUpdate(resourceGroupName: string, snapshotName: string, snapshot: Models.SnapshotUpdate, callback: msRest.ServiceCallback<Models.Snapshot>): void;
    beginUpdate(resourceGroupName: string, snapshotName: string, snapshot: Models.SnapshotUpdate, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Snapshot>): void;
    /**
     * Deletes a snapshot.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} snapshotName The name of the snapshot that is being created. The name can't be
     * changed after the snapshot is created. Supported characters for the name are a-z, A-Z, 0-9 and
     * _. The max name length is 80 characters.
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
    beginDeleteMethod(resourceGroupName: string, snapshotName: string): Promise<Models.OperationStatusResponse>;
    beginDeleteMethod(resourceGroupName: string, snapshotName: string, options: msRest.RequestOptionsBase): Promise<Models.OperationStatusResponse>;
    beginDeleteMethod(resourceGroupName: string, snapshotName: string, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    beginDeleteMethod(resourceGroupName: string, snapshotName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    /**
     * Grants access to a snapshot.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} snapshotName The name of the snapshot that is being created. The name can't be
     * changed after the snapshot is created. Supported characters for the name are a-z, A-Z, 0-9 and
     * _. The max name length is 80 characters.
     *
     * @param {GrantAccessData} grantAccessData Access data object supplied in the body of the get
     * snapshot access operation.
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
    beginGrantAccess(resourceGroupName: string, snapshotName: string, grantAccessData: Models.GrantAccessData): Promise<Models.AccessUri>;
    beginGrantAccess(resourceGroupName: string, snapshotName: string, grantAccessData: Models.GrantAccessData, options: msRest.RequestOptionsBase): Promise<Models.AccessUri>;
    beginGrantAccess(resourceGroupName: string, snapshotName: string, grantAccessData: Models.GrantAccessData, callback: msRest.ServiceCallback<Models.AccessUri>): void;
    beginGrantAccess(resourceGroupName: string, snapshotName: string, grantAccessData: Models.GrantAccessData, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AccessUri>): void;
    /**
     * Revokes access to a snapshot.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} snapshotName The name of the snapshot that is being created. The name can't be
     * changed after the snapshot is created. Supported characters for the name are a-z, A-Z, 0-9 and
     * _. The max name length is 80 characters.
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
    beginRevokeAccess(resourceGroupName: string, snapshotName: string): Promise<Models.OperationStatusResponse>;
    beginRevokeAccess(resourceGroupName: string, snapshotName: string, options: msRest.RequestOptionsBase): Promise<Models.OperationStatusResponse>;
    beginRevokeAccess(resourceGroupName: string, snapshotName: string, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    beginRevokeAccess(resourceGroupName: string, snapshotName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    /**
     * Lists snapshots under a resource group.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call to List operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.SnapshotList} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.SnapshotList} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listByResourceGroupNext(nextPageLink: string): Promise<Models.SnapshotList>;
    listByResourceGroupNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.SnapshotList>;
    listByResourceGroupNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.SnapshotList>): void;
    listByResourceGroupNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SnapshotList>): void;
    /**
     * Lists snapshots under a subscription.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call to List operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.SnapshotList} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.SnapshotList} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listNext(nextPageLink: string): Promise<Models.SnapshotList>;
    listNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.SnapshotList>;
    listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.SnapshotList>): void;
    listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SnapshotList>): void;
}
