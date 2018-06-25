import * as msRest from "ms-rest-js";
import * as Models from "../models";
import { ComputeManagementClientContext } from "../computeManagementClientContext";
/** Class representing a VirtualMachineScaleSetExtensions. */
export declare class VirtualMachineScaleSetExtensions {
    private readonly client;
    private readonly serializer;
    /**
     * Create a VirtualMachineScaleSetExtensions.
     * @param {ComputeManagementClientContext} client Reference to the service client.
     */
    constructor(client: ComputeManagementClientContext);
    /**
     * The operation to create or update an extension.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmScaleSetName The name of the VM scale set where the extension should be create
     * or updated.
     *
     * @param {string} vmssExtensionName The name of the VM scale set extension.
     *
     * @param {VirtualMachineScaleSetExtension} extensionParameters Parameters supplied to the Create
     * VM scale set Extension operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    createOrUpdateWithHttpOperationResponse(resourceGroupName: string, vmScaleSetName: string, vmssExtensionName: string, extensionParameters: Models.VirtualMachineScaleSetExtension, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * The operation to delete the extension.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmScaleSetName The name of the VM scale set where the extension should be
     * deleted.
     *
     * @param {string} vmssExtensionName The name of the VM scale set extension.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    deleteMethodWithHttpOperationResponse(resourceGroupName: string, vmScaleSetName: string, vmssExtensionName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * The operation to get the extension.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmScaleSetName The name of the VM scale set containing the extension.
     *
     * @param {string} vmssExtensionName The name of the VM scale set extension.
     *
     * @param {VirtualMachineScaleSetExtensionsGetOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    getWithHttpOperationResponse(resourceGroupName: string, vmScaleSetName: string, vmssExtensionName: string, options?: Models.VirtualMachineScaleSetExtensionsGetOptionalParams): Promise<msRest.HttpOperationResponse<Models.VirtualMachineScaleSetExtension>>;
    /**
     * Gets a list of all extensions in a VM scale set.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmScaleSetName The name of the VM scale set containing the extension.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    listWithHttpOperationResponse(resourceGroupName: string, vmScaleSetName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.VirtualMachineScaleSetExtensionListResult>>;
    /**
     * The operation to create or update an extension.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmScaleSetName The name of the VM scale set where the extension should be create
     * or updated.
     *
     * @param {string} vmssExtensionName The name of the VM scale set extension.
     *
     * @param {VirtualMachineScaleSetExtension} extensionParameters Parameters supplied to the Create
     * VM scale set Extension operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginCreateOrUpdateWithHttpOperationResponse(resourceGroupName: string, vmScaleSetName: string, vmssExtensionName: string, extensionParameters: Models.VirtualMachineScaleSetExtension, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.VirtualMachineScaleSetExtension>>;
    /**
     * The operation to delete the extension.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmScaleSetName The name of the VM scale set where the extension should be
     * deleted.
     *
     * @param {string} vmssExtensionName The name of the VM scale set extension.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginDeleteMethodWithHttpOperationResponse(resourceGroupName: string, vmScaleSetName: string, vmssExtensionName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.OperationStatusResponse>>;
    /**
     * Gets a list of all extensions in a VM scale set.
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
    listNextWithHttpOperationResponse(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.VirtualMachineScaleSetExtensionListResult>>;
    /**
     * The operation to create or update an extension.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmScaleSetName The name of the VM scale set where the extension should be create
     * or updated.
     *
     * @param {string} vmssExtensionName The name of the VM scale set extension.
     *
     * @param {VirtualMachineScaleSetExtension} extensionParameters Parameters supplied to the Create
     * VM scale set Extension operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.VirtualMachineScaleSetExtension} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.VirtualMachineScaleSetExtension} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    createOrUpdate(resourceGroupName: string, vmScaleSetName: string, vmssExtensionName: string, extensionParameters: Models.VirtualMachineScaleSetExtension): Promise<Models.VirtualMachineScaleSetExtension>;
    createOrUpdate(resourceGroupName: string, vmScaleSetName: string, vmssExtensionName: string, extensionParameters: Models.VirtualMachineScaleSetExtension, options: msRest.RequestOptionsBase): Promise<Models.VirtualMachineScaleSetExtension>;
    createOrUpdate(resourceGroupName: string, vmScaleSetName: string, vmssExtensionName: string, extensionParameters: Models.VirtualMachineScaleSetExtension, callback: msRest.ServiceCallback<Models.VirtualMachineScaleSetExtension>): void;
    createOrUpdate(resourceGroupName: string, vmScaleSetName: string, vmssExtensionName: string, extensionParameters: Models.VirtualMachineScaleSetExtension, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VirtualMachineScaleSetExtension>): void;
    /**
     * The operation to delete the extension.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmScaleSetName The name of the VM scale set where the extension should be
     * deleted.
     *
     * @param {string} vmssExtensionName The name of the VM scale set extension.
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
    deleteMethod(resourceGroupName: string, vmScaleSetName: string, vmssExtensionName: string): Promise<Models.OperationStatusResponse>;
    deleteMethod(resourceGroupName: string, vmScaleSetName: string, vmssExtensionName: string, options: msRest.RequestOptionsBase): Promise<Models.OperationStatusResponse>;
    deleteMethod(resourceGroupName: string, vmScaleSetName: string, vmssExtensionName: string, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    deleteMethod(resourceGroupName: string, vmScaleSetName: string, vmssExtensionName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    /**
     * The operation to get the extension.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmScaleSetName The name of the VM scale set containing the extension.
     *
     * @param {string} vmssExtensionName The name of the VM scale set extension.
     *
     * @param {VirtualMachineScaleSetExtensionsGetOptionalParams} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.VirtualMachineScaleSetExtension} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.VirtualMachineScaleSetExtension} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    get(resourceGroupName: string, vmScaleSetName: string, vmssExtensionName: string): Promise<Models.VirtualMachineScaleSetExtension>;
    get(resourceGroupName: string, vmScaleSetName: string, vmssExtensionName: string, options: Models.VirtualMachineScaleSetExtensionsGetOptionalParams): Promise<Models.VirtualMachineScaleSetExtension>;
    get(resourceGroupName: string, vmScaleSetName: string, vmssExtensionName: string, callback: msRest.ServiceCallback<Models.VirtualMachineScaleSetExtension>): void;
    get(resourceGroupName: string, vmScaleSetName: string, vmssExtensionName: string, options: Models.VirtualMachineScaleSetExtensionsGetOptionalParams, callback: msRest.ServiceCallback<Models.VirtualMachineScaleSetExtension>): void;
    /**
     * Gets a list of all extensions in a VM scale set.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmScaleSetName The name of the VM scale set containing the extension.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.VirtualMachineScaleSetExtensionListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.VirtualMachineScaleSetExtensionListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    list(resourceGroupName: string, vmScaleSetName: string): Promise<Models.VirtualMachineScaleSetExtensionListResult>;
    list(resourceGroupName: string, vmScaleSetName: string, options: msRest.RequestOptionsBase): Promise<Models.VirtualMachineScaleSetExtensionListResult>;
    list(resourceGroupName: string, vmScaleSetName: string, callback: msRest.ServiceCallback<Models.VirtualMachineScaleSetExtensionListResult>): void;
    list(resourceGroupName: string, vmScaleSetName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VirtualMachineScaleSetExtensionListResult>): void;
    /**
     * The operation to create or update an extension.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmScaleSetName The name of the VM scale set where the extension should be create
     * or updated.
     *
     * @param {string} vmssExtensionName The name of the VM scale set extension.
     *
     * @param {VirtualMachineScaleSetExtension} extensionParameters Parameters supplied to the Create
     * VM scale set Extension operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.VirtualMachineScaleSetExtension} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.VirtualMachineScaleSetExtension} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    beginCreateOrUpdate(resourceGroupName: string, vmScaleSetName: string, vmssExtensionName: string, extensionParameters: Models.VirtualMachineScaleSetExtension): Promise<Models.VirtualMachineScaleSetExtension>;
    beginCreateOrUpdate(resourceGroupName: string, vmScaleSetName: string, vmssExtensionName: string, extensionParameters: Models.VirtualMachineScaleSetExtension, options: msRest.RequestOptionsBase): Promise<Models.VirtualMachineScaleSetExtension>;
    beginCreateOrUpdate(resourceGroupName: string, vmScaleSetName: string, vmssExtensionName: string, extensionParameters: Models.VirtualMachineScaleSetExtension, callback: msRest.ServiceCallback<Models.VirtualMachineScaleSetExtension>): void;
    beginCreateOrUpdate(resourceGroupName: string, vmScaleSetName: string, vmssExtensionName: string, extensionParameters: Models.VirtualMachineScaleSetExtension, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VirtualMachineScaleSetExtension>): void;
    /**
     * The operation to delete the extension.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmScaleSetName The name of the VM scale set where the extension should be
     * deleted.
     *
     * @param {string} vmssExtensionName The name of the VM scale set extension.
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
    beginDeleteMethod(resourceGroupName: string, vmScaleSetName: string, vmssExtensionName: string): Promise<Models.OperationStatusResponse>;
    beginDeleteMethod(resourceGroupName: string, vmScaleSetName: string, vmssExtensionName: string, options: msRest.RequestOptionsBase): Promise<Models.OperationStatusResponse>;
    beginDeleteMethod(resourceGroupName: string, vmScaleSetName: string, vmssExtensionName: string, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    beginDeleteMethod(resourceGroupName: string, vmScaleSetName: string, vmssExtensionName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    /**
     * Gets a list of all extensions in a VM scale set.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call to List operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.VirtualMachineScaleSetExtensionListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.VirtualMachineScaleSetExtensionListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listNext(nextPageLink: string): Promise<Models.VirtualMachineScaleSetExtensionListResult>;
    listNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.VirtualMachineScaleSetExtensionListResult>;
    listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.VirtualMachineScaleSetExtensionListResult>): void;
    listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VirtualMachineScaleSetExtensionListResult>): void;
}
