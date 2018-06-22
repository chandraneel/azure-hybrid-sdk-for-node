import * as msRest from "ms-rest-js";
import * as Models from "../models";
import { ComputeManagementClientContext } from "../computeManagementClientContext";
/** Class representing a VirtualMachineExtensions. */
export declare class VirtualMachineExtensions {
    private readonly client;
    private readonly serializer;
    /**
     * Create a VirtualMachineExtensions.
     * @param {ComputeManagementClientContext} client Reference to the service client.
     */
    constructor(client: ComputeManagementClientContext);
    /**
     * The operation to create or update the extension.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmName The name of the virtual machine where the extension should be created or
     * updated.
     *
     * @param {string} vmExtensionName The name of the virtual machine extension.
     *
     * @param {VirtualMachineExtension} extensionParameters Parameters supplied to the Create Virtual
     * Machine Extension operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    createOrUpdateWithHttpOperationResponse(resourceGroupName: string, vmName: string, vmExtensionName: string, extensionParameters: Models.VirtualMachineExtension, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * The operation to update the extension.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmName The name of the virtual machine where the extension should be updated.
     *
     * @param {string} vmExtensionName The name of the virtual machine extension.
     *
     * @param {VirtualMachineExtensionUpdate} extensionParameters Parameters supplied to the Update
     * Virtual Machine Extension operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    updateWithHttpOperationResponse(resourceGroupName: string, vmName: string, vmExtensionName: string, extensionParameters: Models.VirtualMachineExtensionUpdate, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * The operation to delete the extension.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmName The name of the virtual machine where the extension should be deleted.
     *
     * @param {string} vmExtensionName The name of the virtual machine extension.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    deleteMethodWithHttpOperationResponse(resourceGroupName: string, vmName: string, vmExtensionName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * The operation to get the extension.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmName The name of the virtual machine containing the extension.
     *
     * @param {string} vmExtensionName The name of the virtual machine extension.
     *
     * @param {VirtualMachineExtensionsGetOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    getWithHttpOperationResponse(resourceGroupName: string, vmName: string, vmExtensionName: string, options?: Models.VirtualMachineExtensionsGetOptionalParams): Promise<msRest.HttpOperationResponse<Models.VirtualMachineExtension>>;
    /**
     * The operation to create or update the extension.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmName The name of the virtual machine where the extension should be created or
     * updated.
     *
     * @param {string} vmExtensionName The name of the virtual machine extension.
     *
     * @param {VirtualMachineExtension} extensionParameters Parameters supplied to the Create Virtual
     * Machine Extension operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginCreateOrUpdateWithHttpOperationResponse(resourceGroupName: string, vmName: string, vmExtensionName: string, extensionParameters: Models.VirtualMachineExtension, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.VirtualMachineExtension>>;
    /**
     * The operation to update the extension.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmName The name of the virtual machine where the extension should be updated.
     *
     * @param {string} vmExtensionName The name of the virtual machine extension.
     *
     * @param {VirtualMachineExtensionUpdate} extensionParameters Parameters supplied to the Update
     * Virtual Machine Extension operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginUpdateWithHttpOperationResponse(resourceGroupName: string, vmName: string, vmExtensionName: string, extensionParameters: Models.VirtualMachineExtensionUpdate, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.VirtualMachineExtension>>;
    /**
     * The operation to delete the extension.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmName The name of the virtual machine where the extension should be deleted.
     *
     * @param {string} vmExtensionName The name of the virtual machine extension.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginDeleteMethodWithHttpOperationResponse(resourceGroupName: string, vmName: string, vmExtensionName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.OperationStatusResponse>>;
    /**
     * The operation to create or update the extension.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmName The name of the virtual machine where the extension should be created or
     * updated.
     *
     * @param {string} vmExtensionName The name of the virtual machine extension.
     *
     * @param {VirtualMachineExtension} extensionParameters Parameters supplied to the Create Virtual
     * Machine Extension operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.VirtualMachineExtension} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.VirtualMachineExtension} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    createOrUpdate(resourceGroupName: string, vmName: string, vmExtensionName: string, extensionParameters: Models.VirtualMachineExtension): Promise<Models.VirtualMachineExtension>;
    createOrUpdate(resourceGroupName: string, vmName: string, vmExtensionName: string, extensionParameters: Models.VirtualMachineExtension, options: msRest.RequestOptionsBase): Promise<Models.VirtualMachineExtension>;
    createOrUpdate(resourceGroupName: string, vmName: string, vmExtensionName: string, extensionParameters: Models.VirtualMachineExtension, callback: msRest.ServiceCallback<Models.VirtualMachineExtension>): void;
    createOrUpdate(resourceGroupName: string, vmName: string, vmExtensionName: string, extensionParameters: Models.VirtualMachineExtension, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VirtualMachineExtension>): void;
    /**
     * The operation to update the extension.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmName The name of the virtual machine where the extension should be updated.
     *
     * @param {string} vmExtensionName The name of the virtual machine extension.
     *
     * @param {VirtualMachineExtensionUpdate} extensionParameters Parameters supplied to the Update
     * Virtual Machine Extension operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.VirtualMachineExtension} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.VirtualMachineExtension} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    update(resourceGroupName: string, vmName: string, vmExtensionName: string, extensionParameters: Models.VirtualMachineExtensionUpdate): Promise<Models.VirtualMachineExtension>;
    update(resourceGroupName: string, vmName: string, vmExtensionName: string, extensionParameters: Models.VirtualMachineExtensionUpdate, options: msRest.RequestOptionsBase): Promise<Models.VirtualMachineExtension>;
    update(resourceGroupName: string, vmName: string, vmExtensionName: string, extensionParameters: Models.VirtualMachineExtensionUpdate, callback: msRest.ServiceCallback<Models.VirtualMachineExtension>): void;
    update(resourceGroupName: string, vmName: string, vmExtensionName: string, extensionParameters: Models.VirtualMachineExtensionUpdate, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VirtualMachineExtension>): void;
    /**
     * The operation to delete the extension.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmName The name of the virtual machine where the extension should be deleted.
     *
     * @param {string} vmExtensionName The name of the virtual machine extension.
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
    deleteMethod(resourceGroupName: string, vmName: string, vmExtensionName: string): Promise<Models.OperationStatusResponse>;
    deleteMethod(resourceGroupName: string, vmName: string, vmExtensionName: string, options: msRest.RequestOptionsBase): Promise<Models.OperationStatusResponse>;
    deleteMethod(resourceGroupName: string, vmName: string, vmExtensionName: string, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    deleteMethod(resourceGroupName: string, vmName: string, vmExtensionName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    /**
     * The operation to get the extension.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmName The name of the virtual machine containing the extension.
     *
     * @param {string} vmExtensionName The name of the virtual machine extension.
     *
     * @param {VirtualMachineExtensionsGetOptionalParams} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.VirtualMachineExtension} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.VirtualMachineExtension} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    get(resourceGroupName: string, vmName: string, vmExtensionName: string): Promise<Models.VirtualMachineExtension>;
    get(resourceGroupName: string, vmName: string, vmExtensionName: string, options: Models.VirtualMachineExtensionsGetOptionalParams): Promise<Models.VirtualMachineExtension>;
    get(resourceGroupName: string, vmName: string, vmExtensionName: string, callback: msRest.ServiceCallback<Models.VirtualMachineExtension>): void;
    get(resourceGroupName: string, vmName: string, vmExtensionName: string, options: Models.VirtualMachineExtensionsGetOptionalParams, callback: msRest.ServiceCallback<Models.VirtualMachineExtension>): void;
    /**
     * The operation to create or update the extension.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmName The name of the virtual machine where the extension should be created or
     * updated.
     *
     * @param {string} vmExtensionName The name of the virtual machine extension.
     *
     * @param {VirtualMachineExtension} extensionParameters Parameters supplied to the Create Virtual
     * Machine Extension operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.VirtualMachineExtension} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.VirtualMachineExtension} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    beginCreateOrUpdate(resourceGroupName: string, vmName: string, vmExtensionName: string, extensionParameters: Models.VirtualMachineExtension): Promise<Models.VirtualMachineExtension>;
    beginCreateOrUpdate(resourceGroupName: string, vmName: string, vmExtensionName: string, extensionParameters: Models.VirtualMachineExtension, options: msRest.RequestOptionsBase): Promise<Models.VirtualMachineExtension>;
    beginCreateOrUpdate(resourceGroupName: string, vmName: string, vmExtensionName: string, extensionParameters: Models.VirtualMachineExtension, callback: msRest.ServiceCallback<Models.VirtualMachineExtension>): void;
    beginCreateOrUpdate(resourceGroupName: string, vmName: string, vmExtensionName: string, extensionParameters: Models.VirtualMachineExtension, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VirtualMachineExtension>): void;
    /**
     * The operation to update the extension.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmName The name of the virtual machine where the extension should be updated.
     *
     * @param {string} vmExtensionName The name of the virtual machine extension.
     *
     * @param {VirtualMachineExtensionUpdate} extensionParameters Parameters supplied to the Update
     * Virtual Machine Extension operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.VirtualMachineExtension} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.VirtualMachineExtension} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    beginUpdate(resourceGroupName: string, vmName: string, vmExtensionName: string, extensionParameters: Models.VirtualMachineExtensionUpdate): Promise<Models.VirtualMachineExtension>;
    beginUpdate(resourceGroupName: string, vmName: string, vmExtensionName: string, extensionParameters: Models.VirtualMachineExtensionUpdate, options: msRest.RequestOptionsBase): Promise<Models.VirtualMachineExtension>;
    beginUpdate(resourceGroupName: string, vmName: string, vmExtensionName: string, extensionParameters: Models.VirtualMachineExtensionUpdate, callback: msRest.ServiceCallback<Models.VirtualMachineExtension>): void;
    beginUpdate(resourceGroupName: string, vmName: string, vmExtensionName: string, extensionParameters: Models.VirtualMachineExtensionUpdate, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VirtualMachineExtension>): void;
    /**
     * The operation to delete the extension.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmName The name of the virtual machine where the extension should be deleted.
     *
     * @param {string} vmExtensionName The name of the virtual machine extension.
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
    beginDeleteMethod(resourceGroupName: string, vmName: string, vmExtensionName: string): Promise<Models.OperationStatusResponse>;
    beginDeleteMethod(resourceGroupName: string, vmName: string, vmExtensionName: string, options: msRest.RequestOptionsBase): Promise<Models.OperationStatusResponse>;
    beginDeleteMethod(resourceGroupName: string, vmName: string, vmExtensionName: string, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    beginDeleteMethod(resourceGroupName: string, vmName: string, vmExtensionName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
}
