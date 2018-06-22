import * as msRest from "ms-rest-js";
import * as Models from "../models";
import { ComputeManagementClientContext } from "../computeManagementClientContext";
/** Class representing a VirtualMachines. */
export declare class VirtualMachines {
    private readonly client;
    private readonly serializer;
    /**
     * Create a VirtualMachines.
     * @param {ComputeManagementClientContext} client Reference to the service client.
     */
    constructor(client: ComputeManagementClientContext);
    /**
     * The operation to get all extensions of a Virtual Machine.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmName The name of the virtual machine containing the extension.
     *
     * @param {VirtualMachinesGetExtensionsOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    getExtensionsWithHttpOperationResponse(resourceGroupName: string, vmName: string, options?: Models.VirtualMachinesGetExtensionsOptionalParams): Promise<msRest.HttpOperationResponse<Models.VirtualMachineExtensionsListResult>>;
    /**
     * Captures the VM by copying virtual hard disks of the VM and outputs a template that can be used
     * to create similar VMs.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmName The name of the virtual machine.
     *
     * @param {VirtualMachineCaptureParameters} parameters Parameters supplied to the Capture Virtual
     * Machine operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    captureWithHttpOperationResponse(resourceGroupName: string, vmName: string, parameters: Models.VirtualMachineCaptureParameters, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * The operation to create or update a virtual machine.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmName The name of the virtual machine.
     *
     * @param {VirtualMachine} parameters Parameters supplied to the Create Virtual Machine operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    createOrUpdateWithHttpOperationResponse(resourceGroupName: string, vmName: string, parameters: Models.VirtualMachine, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * The operation to delete a virtual machine.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmName The name of the virtual machine.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    deleteMethodWithHttpOperationResponse(resourceGroupName: string, vmName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Retrieves information about the model view or the instance view of a virtual machine.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmName The name of the virtual machine.
     *
     * @param {VirtualMachinesGetOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    getWithHttpOperationResponse(resourceGroupName: string, vmName: string, options?: Models.VirtualMachinesGetOptionalParams): Promise<msRest.HttpOperationResponse<Models.VirtualMachine>>;
    /**
     * Retrieves information about the run-time state of a virtual machine.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmName The name of the virtual machine.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    instanceViewWithHttpOperationResponse(resourceGroupName: string, vmName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.VirtualMachineInstanceView>>;
    /**
     * Converts virtual machine disks from blob-based to managed disks. Virtual machine must be
     * stop-deallocated before invoking this operation.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmName The name of the virtual machine.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    convertToManagedDisksWithHttpOperationResponse(resourceGroupName: string, vmName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Shuts down the virtual machine and releases the compute resources. You are not billed for the
     * compute resources that this virtual machine uses.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmName The name of the virtual machine.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    deallocateWithHttpOperationResponse(resourceGroupName: string, vmName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Sets the state of the virtual machine to generalized.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmName The name of the virtual machine.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    generalizeWithHttpOperationResponse(resourceGroupName: string, vmName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.OperationStatusResponse>>;
    /**
     * Lists all of the virtual machines in the specified resource group. Use the nextLink property in
     * the response to get the next page of virtual machines.
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
    listWithHttpOperationResponse(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.VirtualMachineListResult>>;
    /**
     * Lists all of the virtual machines in the specified subscription. Use the nextLink property in
     * the response to get the next page of virtual machines.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    listAllWithHttpOperationResponse(options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.VirtualMachineListResult>>;
    /**
     * Lists all available virtual machine sizes to which the specified virtual machine can be resized.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmName The name of the virtual machine.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    listAvailableSizesWithHttpOperationResponse(resourceGroupName: string, vmName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.VirtualMachineSizeListResult>>;
    /**
     * The operation to power off (stop) a virtual machine. The virtual machine can be restarted with
     * the same provisioned resources. You are still charged for this virtual machine.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmName The name of the virtual machine.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    powerOffWithHttpOperationResponse(resourceGroupName: string, vmName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * The operation to restart a virtual machine.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmName The name of the virtual machine.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    restartWithHttpOperationResponse(resourceGroupName: string, vmName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * The operation to start a virtual machine.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmName The name of the virtual machine.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    startWithHttpOperationResponse(resourceGroupName: string, vmName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * The operation to redeploy a virtual machine.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmName The name of the virtual machine.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    redeployWithHttpOperationResponse(resourceGroupName: string, vmName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * The operation to perform maintenance on a virtual machine.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmName The name of the virtual machine.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    performMaintenanceWithHttpOperationResponse(resourceGroupName: string, vmName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Run command on the VM.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmName The name of the virtual machine.
     *
     * @param {RunCommandInput} parameters Parameters supplied to the Run command operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    runCommandWithHttpOperationResponse(resourceGroupName: string, vmName: string, parameters: Models.RunCommandInput, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Captures the VM by copying virtual hard disks of the VM and outputs a template that can be used
     * to create similar VMs.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmName The name of the virtual machine.
     *
     * @param {VirtualMachineCaptureParameters} parameters Parameters supplied to the Capture Virtual
     * Machine operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginCaptureWithHttpOperationResponse(resourceGroupName: string, vmName: string, parameters: Models.VirtualMachineCaptureParameters, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.VirtualMachineCaptureResult>>;
    /**
     * The operation to create or update a virtual machine.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmName The name of the virtual machine.
     *
     * @param {VirtualMachine} parameters Parameters supplied to the Create Virtual Machine operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginCreateOrUpdateWithHttpOperationResponse(resourceGroupName: string, vmName: string, parameters: Models.VirtualMachine, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.VirtualMachine>>;
    /**
     * The operation to delete a virtual machine.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmName The name of the virtual machine.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginDeleteMethodWithHttpOperationResponse(resourceGroupName: string, vmName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.OperationStatusResponse>>;
    /**
     * Converts virtual machine disks from blob-based to managed disks. Virtual machine must be
     * stop-deallocated before invoking this operation.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmName The name of the virtual machine.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginConvertToManagedDisksWithHttpOperationResponse(resourceGroupName: string, vmName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.OperationStatusResponse>>;
    /**
     * Shuts down the virtual machine and releases the compute resources. You are not billed for the
     * compute resources that this virtual machine uses.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmName The name of the virtual machine.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginDeallocateWithHttpOperationResponse(resourceGroupName: string, vmName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.OperationStatusResponse>>;
    /**
     * The operation to power off (stop) a virtual machine. The virtual machine can be restarted with
     * the same provisioned resources. You are still charged for this virtual machine.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmName The name of the virtual machine.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginPowerOffWithHttpOperationResponse(resourceGroupName: string, vmName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.OperationStatusResponse>>;
    /**
     * The operation to restart a virtual machine.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmName The name of the virtual machine.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginRestartWithHttpOperationResponse(resourceGroupName: string, vmName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.OperationStatusResponse>>;
    /**
     * The operation to start a virtual machine.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmName The name of the virtual machine.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginStartWithHttpOperationResponse(resourceGroupName: string, vmName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.OperationStatusResponse>>;
    /**
     * The operation to redeploy a virtual machine.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmName The name of the virtual machine.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginRedeployWithHttpOperationResponse(resourceGroupName: string, vmName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.OperationStatusResponse>>;
    /**
     * The operation to perform maintenance on a virtual machine.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmName The name of the virtual machine.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginPerformMaintenanceWithHttpOperationResponse(resourceGroupName: string, vmName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.OperationStatusResponse>>;
    /**
     * Run command on the VM.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmName The name of the virtual machine.
     *
     * @param {RunCommandInput} parameters Parameters supplied to the Run command operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginRunCommandWithHttpOperationResponse(resourceGroupName: string, vmName: string, parameters: Models.RunCommandInput, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.RunCommandResult>>;
    /**
     * Lists all of the virtual machines in the specified resource group. Use the nextLink property in
     * the response to get the next page of virtual machines.
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
    listNextWithHttpOperationResponse(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.VirtualMachineListResult>>;
    /**
     * Lists all of the virtual machines in the specified subscription. Use the nextLink property in
     * the response to get the next page of virtual machines.
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
    listAllNextWithHttpOperationResponse(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.VirtualMachineListResult>>;
    /**
     * The operation to get all extensions of a Virtual Machine.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmName The name of the virtual machine containing the extension.
     *
     * @param {VirtualMachinesGetExtensionsOptionalParams} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.VirtualMachineExtensionsListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.VirtualMachineExtensionsListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    getExtensions(resourceGroupName: string, vmName: string): Promise<Models.VirtualMachineExtensionsListResult>;
    getExtensions(resourceGroupName: string, vmName: string, options: Models.VirtualMachinesGetExtensionsOptionalParams): Promise<Models.VirtualMachineExtensionsListResult>;
    getExtensions(resourceGroupName: string, vmName: string, callback: msRest.ServiceCallback<Models.VirtualMachineExtensionsListResult>): void;
    getExtensions(resourceGroupName: string, vmName: string, options: Models.VirtualMachinesGetExtensionsOptionalParams, callback: msRest.ServiceCallback<Models.VirtualMachineExtensionsListResult>): void;
    /**
     * Captures the VM by copying virtual hard disks of the VM and outputs a template that can be used
     * to create similar VMs.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmName The name of the virtual machine.
     *
     * @param {VirtualMachineCaptureParameters} parameters Parameters supplied to the Capture Virtual
     * Machine operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.VirtualMachineCaptureResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.VirtualMachineCaptureResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    capture(resourceGroupName: string, vmName: string, parameters: Models.VirtualMachineCaptureParameters): Promise<Models.VirtualMachineCaptureResult>;
    capture(resourceGroupName: string, vmName: string, parameters: Models.VirtualMachineCaptureParameters, options: msRest.RequestOptionsBase): Promise<Models.VirtualMachineCaptureResult>;
    capture(resourceGroupName: string, vmName: string, parameters: Models.VirtualMachineCaptureParameters, callback: msRest.ServiceCallback<Models.VirtualMachineCaptureResult>): void;
    capture(resourceGroupName: string, vmName: string, parameters: Models.VirtualMachineCaptureParameters, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VirtualMachineCaptureResult>): void;
    /**
     * The operation to create or update a virtual machine.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmName The name of the virtual machine.
     *
     * @param {VirtualMachine} parameters Parameters supplied to the Create Virtual Machine operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.VirtualMachine} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.VirtualMachine} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    createOrUpdate(resourceGroupName: string, vmName: string, parameters: Models.VirtualMachine): Promise<Models.VirtualMachine>;
    createOrUpdate(resourceGroupName: string, vmName: string, parameters: Models.VirtualMachine, options: msRest.RequestOptionsBase): Promise<Models.VirtualMachine>;
    createOrUpdate(resourceGroupName: string, vmName: string, parameters: Models.VirtualMachine, callback: msRest.ServiceCallback<Models.VirtualMachine>): void;
    createOrUpdate(resourceGroupName: string, vmName: string, parameters: Models.VirtualMachine, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VirtualMachine>): void;
    /**
     * The operation to delete a virtual machine.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmName The name of the virtual machine.
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
    deleteMethod(resourceGroupName: string, vmName: string): Promise<Models.OperationStatusResponse>;
    deleteMethod(resourceGroupName: string, vmName: string, options: msRest.RequestOptionsBase): Promise<Models.OperationStatusResponse>;
    deleteMethod(resourceGroupName: string, vmName: string, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    deleteMethod(resourceGroupName: string, vmName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    /**
     * Retrieves information about the model view or the instance view of a virtual machine.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmName The name of the virtual machine.
     *
     * @param {VirtualMachinesGetOptionalParams} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.VirtualMachine} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.VirtualMachine} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    get(resourceGroupName: string, vmName: string): Promise<Models.VirtualMachine>;
    get(resourceGroupName: string, vmName: string, options: Models.VirtualMachinesGetOptionalParams): Promise<Models.VirtualMachine>;
    get(resourceGroupName: string, vmName: string, callback: msRest.ServiceCallback<Models.VirtualMachine>): void;
    get(resourceGroupName: string, vmName: string, options: Models.VirtualMachinesGetOptionalParams, callback: msRest.ServiceCallback<Models.VirtualMachine>): void;
    /**
     * Retrieves information about the run-time state of a virtual machine.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmName The name of the virtual machine.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.VirtualMachineInstanceView} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.VirtualMachineInstanceView} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    instanceView(resourceGroupName: string, vmName: string): Promise<Models.VirtualMachineInstanceView>;
    instanceView(resourceGroupName: string, vmName: string, options: msRest.RequestOptionsBase): Promise<Models.VirtualMachineInstanceView>;
    instanceView(resourceGroupName: string, vmName: string, callback: msRest.ServiceCallback<Models.VirtualMachineInstanceView>): void;
    instanceView(resourceGroupName: string, vmName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VirtualMachineInstanceView>): void;
    /**
     * Converts virtual machine disks from blob-based to managed disks. Virtual machine must be
     * stop-deallocated before invoking this operation.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmName The name of the virtual machine.
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
    convertToManagedDisks(resourceGroupName: string, vmName: string): Promise<Models.OperationStatusResponse>;
    convertToManagedDisks(resourceGroupName: string, vmName: string, options: msRest.RequestOptionsBase): Promise<Models.OperationStatusResponse>;
    convertToManagedDisks(resourceGroupName: string, vmName: string, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    convertToManagedDisks(resourceGroupName: string, vmName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    /**
     * Shuts down the virtual machine and releases the compute resources. You are not billed for the
     * compute resources that this virtual machine uses.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmName The name of the virtual machine.
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
    deallocate(resourceGroupName: string, vmName: string): Promise<Models.OperationStatusResponse>;
    deallocate(resourceGroupName: string, vmName: string, options: msRest.RequestOptionsBase): Promise<Models.OperationStatusResponse>;
    deallocate(resourceGroupName: string, vmName: string, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    deallocate(resourceGroupName: string, vmName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    /**
     * Sets the state of the virtual machine to generalized.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmName The name of the virtual machine.
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
    generalize(resourceGroupName: string, vmName: string): Promise<Models.OperationStatusResponse>;
    generalize(resourceGroupName: string, vmName: string, options: msRest.RequestOptionsBase): Promise<Models.OperationStatusResponse>;
    generalize(resourceGroupName: string, vmName: string, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    generalize(resourceGroupName: string, vmName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    /**
     * Lists all of the virtual machines in the specified resource group. Use the nextLink property in
     * the response to get the next page of virtual machines.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.VirtualMachineListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.VirtualMachineListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    list(resourceGroupName: string): Promise<Models.VirtualMachineListResult>;
    list(resourceGroupName: string, options: msRest.RequestOptionsBase): Promise<Models.VirtualMachineListResult>;
    list(resourceGroupName: string, callback: msRest.ServiceCallback<Models.VirtualMachineListResult>): void;
    list(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VirtualMachineListResult>): void;
    /**
     * Lists all of the virtual machines in the specified subscription. Use the nextLink property in
     * the response to get the next page of virtual machines.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.VirtualMachineListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.VirtualMachineListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listAll(): Promise<Models.VirtualMachineListResult>;
    listAll(options: msRest.RequestOptionsBase): Promise<Models.VirtualMachineListResult>;
    listAll(callback: msRest.ServiceCallback<Models.VirtualMachineListResult>): void;
    listAll(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VirtualMachineListResult>): void;
    /**
     * Lists all available virtual machine sizes to which the specified virtual machine can be resized.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmName The name of the virtual machine.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.VirtualMachineSizeListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.VirtualMachineSizeListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listAvailableSizes(resourceGroupName: string, vmName: string): Promise<Models.VirtualMachineSizeListResult>;
    listAvailableSizes(resourceGroupName: string, vmName: string, options: msRest.RequestOptionsBase): Promise<Models.VirtualMachineSizeListResult>;
    listAvailableSizes(resourceGroupName: string, vmName: string, callback: msRest.ServiceCallback<Models.VirtualMachineSizeListResult>): void;
    listAvailableSizes(resourceGroupName: string, vmName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VirtualMachineSizeListResult>): void;
    /**
     * The operation to power off (stop) a virtual machine. The virtual machine can be restarted with
     * the same provisioned resources. You are still charged for this virtual machine.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmName The name of the virtual machine.
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
    powerOff(resourceGroupName: string, vmName: string): Promise<Models.OperationStatusResponse>;
    powerOff(resourceGroupName: string, vmName: string, options: msRest.RequestOptionsBase): Promise<Models.OperationStatusResponse>;
    powerOff(resourceGroupName: string, vmName: string, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    powerOff(resourceGroupName: string, vmName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    /**
     * The operation to restart a virtual machine.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmName The name of the virtual machine.
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
    restart(resourceGroupName: string, vmName: string): Promise<Models.OperationStatusResponse>;
    restart(resourceGroupName: string, vmName: string, options: msRest.RequestOptionsBase): Promise<Models.OperationStatusResponse>;
    restart(resourceGroupName: string, vmName: string, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    restart(resourceGroupName: string, vmName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    /**
     * The operation to start a virtual machine.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmName The name of the virtual machine.
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
    start(resourceGroupName: string, vmName: string): Promise<Models.OperationStatusResponse>;
    start(resourceGroupName: string, vmName: string, options: msRest.RequestOptionsBase): Promise<Models.OperationStatusResponse>;
    start(resourceGroupName: string, vmName: string, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    start(resourceGroupName: string, vmName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    /**
     * The operation to redeploy a virtual machine.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmName The name of the virtual machine.
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
    redeploy(resourceGroupName: string, vmName: string): Promise<Models.OperationStatusResponse>;
    redeploy(resourceGroupName: string, vmName: string, options: msRest.RequestOptionsBase): Promise<Models.OperationStatusResponse>;
    redeploy(resourceGroupName: string, vmName: string, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    redeploy(resourceGroupName: string, vmName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    /**
     * The operation to perform maintenance on a virtual machine.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmName The name of the virtual machine.
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
    performMaintenance(resourceGroupName: string, vmName: string): Promise<Models.OperationStatusResponse>;
    performMaintenance(resourceGroupName: string, vmName: string, options: msRest.RequestOptionsBase): Promise<Models.OperationStatusResponse>;
    performMaintenance(resourceGroupName: string, vmName: string, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    performMaintenance(resourceGroupName: string, vmName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    /**
     * Run command on the VM.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmName The name of the virtual machine.
     *
     * @param {RunCommandInput} parameters Parameters supplied to the Run command operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.RunCommandResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.RunCommandResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    runCommand(resourceGroupName: string, vmName: string, parameters: Models.RunCommandInput): Promise<Models.RunCommandResult>;
    runCommand(resourceGroupName: string, vmName: string, parameters: Models.RunCommandInput, options: msRest.RequestOptionsBase): Promise<Models.RunCommandResult>;
    runCommand(resourceGroupName: string, vmName: string, parameters: Models.RunCommandInput, callback: msRest.ServiceCallback<Models.RunCommandResult>): void;
    runCommand(resourceGroupName: string, vmName: string, parameters: Models.RunCommandInput, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RunCommandResult>): void;
    /**
     * Captures the VM by copying virtual hard disks of the VM and outputs a template that can be used
     * to create similar VMs.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmName The name of the virtual machine.
     *
     * @param {VirtualMachineCaptureParameters} parameters Parameters supplied to the Capture Virtual
     * Machine operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.VirtualMachineCaptureResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.VirtualMachineCaptureResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    beginCapture(resourceGroupName: string, vmName: string, parameters: Models.VirtualMachineCaptureParameters): Promise<Models.VirtualMachineCaptureResult>;
    beginCapture(resourceGroupName: string, vmName: string, parameters: Models.VirtualMachineCaptureParameters, options: msRest.RequestOptionsBase): Promise<Models.VirtualMachineCaptureResult>;
    beginCapture(resourceGroupName: string, vmName: string, parameters: Models.VirtualMachineCaptureParameters, callback: msRest.ServiceCallback<Models.VirtualMachineCaptureResult>): void;
    beginCapture(resourceGroupName: string, vmName: string, parameters: Models.VirtualMachineCaptureParameters, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VirtualMachineCaptureResult>): void;
    /**
     * The operation to create or update a virtual machine.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmName The name of the virtual machine.
     *
     * @param {VirtualMachine} parameters Parameters supplied to the Create Virtual Machine operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.VirtualMachine} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.VirtualMachine} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    beginCreateOrUpdate(resourceGroupName: string, vmName: string, parameters: Models.VirtualMachine): Promise<Models.VirtualMachine>;
    beginCreateOrUpdate(resourceGroupName: string, vmName: string, parameters: Models.VirtualMachine, options: msRest.RequestOptionsBase): Promise<Models.VirtualMachine>;
    beginCreateOrUpdate(resourceGroupName: string, vmName: string, parameters: Models.VirtualMachine, callback: msRest.ServiceCallback<Models.VirtualMachine>): void;
    beginCreateOrUpdate(resourceGroupName: string, vmName: string, parameters: Models.VirtualMachine, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VirtualMachine>): void;
    /**
     * The operation to delete a virtual machine.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmName The name of the virtual machine.
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
    beginDeleteMethod(resourceGroupName: string, vmName: string): Promise<Models.OperationStatusResponse>;
    beginDeleteMethod(resourceGroupName: string, vmName: string, options: msRest.RequestOptionsBase): Promise<Models.OperationStatusResponse>;
    beginDeleteMethod(resourceGroupName: string, vmName: string, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    beginDeleteMethod(resourceGroupName: string, vmName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    /**
     * Converts virtual machine disks from blob-based to managed disks. Virtual machine must be
     * stop-deallocated before invoking this operation.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmName The name of the virtual machine.
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
    beginConvertToManagedDisks(resourceGroupName: string, vmName: string): Promise<Models.OperationStatusResponse>;
    beginConvertToManagedDisks(resourceGroupName: string, vmName: string, options: msRest.RequestOptionsBase): Promise<Models.OperationStatusResponse>;
    beginConvertToManagedDisks(resourceGroupName: string, vmName: string, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    beginConvertToManagedDisks(resourceGroupName: string, vmName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    /**
     * Shuts down the virtual machine and releases the compute resources. You are not billed for the
     * compute resources that this virtual machine uses.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmName The name of the virtual machine.
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
    beginDeallocate(resourceGroupName: string, vmName: string): Promise<Models.OperationStatusResponse>;
    beginDeallocate(resourceGroupName: string, vmName: string, options: msRest.RequestOptionsBase): Promise<Models.OperationStatusResponse>;
    beginDeallocate(resourceGroupName: string, vmName: string, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    beginDeallocate(resourceGroupName: string, vmName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    /**
     * The operation to power off (stop) a virtual machine. The virtual machine can be restarted with
     * the same provisioned resources. You are still charged for this virtual machine.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmName The name of the virtual machine.
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
    beginPowerOff(resourceGroupName: string, vmName: string): Promise<Models.OperationStatusResponse>;
    beginPowerOff(resourceGroupName: string, vmName: string, options: msRest.RequestOptionsBase): Promise<Models.OperationStatusResponse>;
    beginPowerOff(resourceGroupName: string, vmName: string, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    beginPowerOff(resourceGroupName: string, vmName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    /**
     * The operation to restart a virtual machine.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmName The name of the virtual machine.
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
    beginRestart(resourceGroupName: string, vmName: string): Promise<Models.OperationStatusResponse>;
    beginRestart(resourceGroupName: string, vmName: string, options: msRest.RequestOptionsBase): Promise<Models.OperationStatusResponse>;
    beginRestart(resourceGroupName: string, vmName: string, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    beginRestart(resourceGroupName: string, vmName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    /**
     * The operation to start a virtual machine.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmName The name of the virtual machine.
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
    beginStart(resourceGroupName: string, vmName: string): Promise<Models.OperationStatusResponse>;
    beginStart(resourceGroupName: string, vmName: string, options: msRest.RequestOptionsBase): Promise<Models.OperationStatusResponse>;
    beginStart(resourceGroupName: string, vmName: string, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    beginStart(resourceGroupName: string, vmName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    /**
     * The operation to redeploy a virtual machine.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmName The name of the virtual machine.
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
    beginRedeploy(resourceGroupName: string, vmName: string): Promise<Models.OperationStatusResponse>;
    beginRedeploy(resourceGroupName: string, vmName: string, options: msRest.RequestOptionsBase): Promise<Models.OperationStatusResponse>;
    beginRedeploy(resourceGroupName: string, vmName: string, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    beginRedeploy(resourceGroupName: string, vmName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    /**
     * The operation to perform maintenance on a virtual machine.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmName The name of the virtual machine.
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
    beginPerformMaintenance(resourceGroupName: string, vmName: string): Promise<Models.OperationStatusResponse>;
    beginPerformMaintenance(resourceGroupName: string, vmName: string, options: msRest.RequestOptionsBase): Promise<Models.OperationStatusResponse>;
    beginPerformMaintenance(resourceGroupName: string, vmName: string, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    beginPerformMaintenance(resourceGroupName: string, vmName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    /**
     * Run command on the VM.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmName The name of the virtual machine.
     *
     * @param {RunCommandInput} parameters Parameters supplied to the Run command operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.RunCommandResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.RunCommandResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    beginRunCommand(resourceGroupName: string, vmName: string, parameters: Models.RunCommandInput): Promise<Models.RunCommandResult>;
    beginRunCommand(resourceGroupName: string, vmName: string, parameters: Models.RunCommandInput, options: msRest.RequestOptionsBase): Promise<Models.RunCommandResult>;
    beginRunCommand(resourceGroupName: string, vmName: string, parameters: Models.RunCommandInput, callback: msRest.ServiceCallback<Models.RunCommandResult>): void;
    beginRunCommand(resourceGroupName: string, vmName: string, parameters: Models.RunCommandInput, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RunCommandResult>): void;
    /**
     * Lists all of the virtual machines in the specified resource group. Use the nextLink property in
     * the response to get the next page of virtual machines.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call to List operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.VirtualMachineListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.VirtualMachineListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listNext(nextPageLink: string): Promise<Models.VirtualMachineListResult>;
    listNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.VirtualMachineListResult>;
    listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.VirtualMachineListResult>): void;
    listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VirtualMachineListResult>): void;
    /**
     * Lists all of the virtual machines in the specified subscription. Use the nextLink property in
     * the response to get the next page of virtual machines.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call to List operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.VirtualMachineListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.VirtualMachineListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listAllNext(nextPageLink: string): Promise<Models.VirtualMachineListResult>;
    listAllNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.VirtualMachineListResult>;
    listAllNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.VirtualMachineListResult>): void;
    listAllNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VirtualMachineListResult>): void;
}
