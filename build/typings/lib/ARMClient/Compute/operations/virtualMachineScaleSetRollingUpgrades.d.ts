import * as msRest from "ms-rest-js";
import * as Models from "../models";
import { ComputeManagementClientContext } from "../computeManagementClientContext";
/** Class representing a VirtualMachineScaleSetRollingUpgrades. */
export declare class VirtualMachineScaleSetRollingUpgrades {
    private readonly client;
    private readonly serializer;
    /**
     * Create a VirtualMachineScaleSetRollingUpgrades.
     * @param {ComputeManagementClientContext} client Reference to the service client.
     */
    constructor(client: ComputeManagementClientContext);
    /**
     * Cancels the current virtual machine scale set rolling upgrade.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmScaleSetName The name of the VM scale set.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    cancelWithHttpOperationResponse(resourceGroupName: string, vmScaleSetName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Starts a rolling upgrade to move all virtual machine scale set instances to the latest available
     * Platform Image OS version. Instances which are already running the latest available OS version
     * are not affected.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmScaleSetName The name of the VM scale set.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    startOSUpgradeWithHttpOperationResponse(resourceGroupName: string, vmScaleSetName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Gets the status of the latest virtual machine scale set rolling upgrade.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmScaleSetName The name of the VM scale set.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    getLatestWithHttpOperationResponse(resourceGroupName: string, vmScaleSetName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.RollingUpgradeStatusInfo>>;
    /**
     * Cancels the current virtual machine scale set rolling upgrade.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmScaleSetName The name of the VM scale set.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginCancelWithHttpOperationResponse(resourceGroupName: string, vmScaleSetName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.OperationStatusResponse>>;
    /**
     * Starts a rolling upgrade to move all virtual machine scale set instances to the latest available
     * Platform Image OS version. Instances which are already running the latest available OS version
     * are not affected.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmScaleSetName The name of the VM scale set.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginStartOSUpgradeWithHttpOperationResponse(resourceGroupName: string, vmScaleSetName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.OperationStatusResponse>>;
    /**
     * Cancels the current virtual machine scale set rolling upgrade.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmScaleSetName The name of the VM scale set.
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
    cancel(resourceGroupName: string, vmScaleSetName: string): Promise<Models.OperationStatusResponse>;
    cancel(resourceGroupName: string, vmScaleSetName: string, options: msRest.RequestOptionsBase): Promise<Models.OperationStatusResponse>;
    cancel(resourceGroupName: string, vmScaleSetName: string, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    cancel(resourceGroupName: string, vmScaleSetName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    /**
     * Starts a rolling upgrade to move all virtual machine scale set instances to the latest available
     * Platform Image OS version. Instances which are already running the latest available OS version
     * are not affected.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmScaleSetName The name of the VM scale set.
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
    startOSUpgrade(resourceGroupName: string, vmScaleSetName: string): Promise<Models.OperationStatusResponse>;
    startOSUpgrade(resourceGroupName: string, vmScaleSetName: string, options: msRest.RequestOptionsBase): Promise<Models.OperationStatusResponse>;
    startOSUpgrade(resourceGroupName: string, vmScaleSetName: string, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    startOSUpgrade(resourceGroupName: string, vmScaleSetName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    /**
     * Gets the status of the latest virtual machine scale set rolling upgrade.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmScaleSetName The name of the VM scale set.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.RollingUpgradeStatusInfo} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.RollingUpgradeStatusInfo} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    getLatest(resourceGroupName: string, vmScaleSetName: string): Promise<Models.RollingUpgradeStatusInfo>;
    getLatest(resourceGroupName: string, vmScaleSetName: string, options: msRest.RequestOptionsBase): Promise<Models.RollingUpgradeStatusInfo>;
    getLatest(resourceGroupName: string, vmScaleSetName: string, callback: msRest.ServiceCallback<Models.RollingUpgradeStatusInfo>): void;
    getLatest(resourceGroupName: string, vmScaleSetName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RollingUpgradeStatusInfo>): void;
    /**
     * Cancels the current virtual machine scale set rolling upgrade.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmScaleSetName The name of the VM scale set.
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
    beginCancel(resourceGroupName: string, vmScaleSetName: string): Promise<Models.OperationStatusResponse>;
    beginCancel(resourceGroupName: string, vmScaleSetName: string, options: msRest.RequestOptionsBase): Promise<Models.OperationStatusResponse>;
    beginCancel(resourceGroupName: string, vmScaleSetName: string, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    beginCancel(resourceGroupName: string, vmScaleSetName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    /**
     * Starts a rolling upgrade to move all virtual machine scale set instances to the latest available
     * Platform Image OS version. Instances which are already running the latest available OS version
     * are not affected.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmScaleSetName The name of the VM scale set.
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
    beginStartOSUpgrade(resourceGroupName: string, vmScaleSetName: string): Promise<Models.OperationStatusResponse>;
    beginStartOSUpgrade(resourceGroupName: string, vmScaleSetName: string, options: msRest.RequestOptionsBase): Promise<Models.OperationStatusResponse>;
    beginStartOSUpgrade(resourceGroupName: string, vmScaleSetName: string, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    beginStartOSUpgrade(resourceGroupName: string, vmScaleSetName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
}
