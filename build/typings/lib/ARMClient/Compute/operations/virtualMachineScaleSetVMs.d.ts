import * as msRest from "ms-rest-js";
import * as Models from "../models";
import { ComputeManagementClientContext } from "../computeManagementClientContext";
/** Class representing a VirtualMachineScaleSetVMs. */
export declare class VirtualMachineScaleSetVMs {
    private readonly client;
    private readonly serializer;
    /**
     * Create a VirtualMachineScaleSetVMs.
     * @param {ComputeManagementClientContext} client Reference to the service client.
     */
    constructor(client: ComputeManagementClientContext);
    /**
     * Reimages (upgrade the operating system) a specific virtual machine in a VM scale set.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmScaleSetName The name of the VM scale set.
     *
     * @param {string} instanceId The instance ID of the virtual machine.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    reimageWithHttpOperationResponse(resourceGroupName: string, vmScaleSetName: string, instanceId: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Allows you to re-image all the disks ( including data disks ) in the a VM scale set instance.
     * This operation is only supported for managed disks.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmScaleSetName The name of the VM scale set.
     *
     * @param {string} instanceId The instance ID of the virtual machine.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    reimageAllWithHttpOperationResponse(resourceGroupName: string, vmScaleSetName: string, instanceId: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Deallocates a specific virtual machine in a VM scale set. Shuts down the virtual machine and
     * releases the compute resources it uses. You are not billed for the compute resources of this
     * virtual machine once it is deallocated.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmScaleSetName The name of the VM scale set.
     *
     * @param {string} instanceId The instance ID of the virtual machine.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    deallocateWithHttpOperationResponse(resourceGroupName: string, vmScaleSetName: string, instanceId: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Deletes a virtual machine from a VM scale set.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmScaleSetName The name of the VM scale set.
     *
     * @param {string} instanceId The instance ID of the virtual machine.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    deleteMethodWithHttpOperationResponse(resourceGroupName: string, vmScaleSetName: string, instanceId: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Gets a virtual machine from a VM scale set.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmScaleSetName The name of the VM scale set.
     *
     * @param {string} instanceId The instance ID of the virtual machine.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    getWithHttpOperationResponse(resourceGroupName: string, vmScaleSetName: string, instanceId: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.VirtualMachineScaleSetVM>>;
    /**
     * Gets the status of a virtual machine from a VM scale set.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmScaleSetName The name of the VM scale set.
     *
     * @param {string} instanceId The instance ID of the virtual machine.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    getInstanceViewWithHttpOperationResponse(resourceGroupName: string, vmScaleSetName: string, instanceId: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.VirtualMachineScaleSetVMInstanceView>>;
    /**
     * Gets a list of all virtual machines in a VM scale sets.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualMachineScaleSetName The name of the VM scale set.
     *
     * @param {VirtualMachineScaleSetVMsListOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    listWithHttpOperationResponse(resourceGroupName: string, virtualMachineScaleSetName: string, options?: Models.VirtualMachineScaleSetVMsListOptionalParams): Promise<msRest.HttpOperationResponse<Models.VirtualMachineScaleSetVMListResult>>;
    /**
     * Power off (stop) a virtual machine in a VM scale set. Note that resources are still attached and
     * you are getting charged for the resources. Instead, use deallocate to release resources and
     * avoid charges.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmScaleSetName The name of the VM scale set.
     *
     * @param {string} instanceId The instance ID of the virtual machine.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    powerOffWithHttpOperationResponse(resourceGroupName: string, vmScaleSetName: string, instanceId: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Restarts a virtual machine in a VM scale set.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmScaleSetName The name of the VM scale set.
     *
     * @param {string} instanceId The instance ID of the virtual machine.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    restartWithHttpOperationResponse(resourceGroupName: string, vmScaleSetName: string, instanceId: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Starts a virtual machine in a VM scale set.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmScaleSetName The name of the VM scale set.
     *
     * @param {string} instanceId The instance ID of the virtual machine.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    startWithHttpOperationResponse(resourceGroupName: string, vmScaleSetName: string, instanceId: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Reimages (upgrade the operating system) a specific virtual machine in a VM scale set.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmScaleSetName The name of the VM scale set.
     *
     * @param {string} instanceId The instance ID of the virtual machine.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginReimageWithHttpOperationResponse(resourceGroupName: string, vmScaleSetName: string, instanceId: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.OperationStatusResponse>>;
    /**
     * Allows you to re-image all the disks ( including data disks ) in the a VM scale set instance.
     * This operation is only supported for managed disks.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmScaleSetName The name of the VM scale set.
     *
     * @param {string} instanceId The instance ID of the virtual machine.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginReimageAllWithHttpOperationResponse(resourceGroupName: string, vmScaleSetName: string, instanceId: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.OperationStatusResponse>>;
    /**
     * Deallocates a specific virtual machine in a VM scale set. Shuts down the virtual machine and
     * releases the compute resources it uses. You are not billed for the compute resources of this
     * virtual machine once it is deallocated.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmScaleSetName The name of the VM scale set.
     *
     * @param {string} instanceId The instance ID of the virtual machine.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginDeallocateWithHttpOperationResponse(resourceGroupName: string, vmScaleSetName: string, instanceId: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.OperationStatusResponse>>;
    /**
     * Deletes a virtual machine from a VM scale set.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmScaleSetName The name of the VM scale set.
     *
     * @param {string} instanceId The instance ID of the virtual machine.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginDeleteMethodWithHttpOperationResponse(resourceGroupName: string, vmScaleSetName: string, instanceId: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.OperationStatusResponse>>;
    /**
     * Power off (stop) a virtual machine in a VM scale set. Note that resources are still attached and
     * you are getting charged for the resources. Instead, use deallocate to release resources and
     * avoid charges.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmScaleSetName The name of the VM scale set.
     *
     * @param {string} instanceId The instance ID of the virtual machine.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginPowerOffWithHttpOperationResponse(resourceGroupName: string, vmScaleSetName: string, instanceId: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.OperationStatusResponse>>;
    /**
     * Restarts a virtual machine in a VM scale set.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmScaleSetName The name of the VM scale set.
     *
     * @param {string} instanceId The instance ID of the virtual machine.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginRestartWithHttpOperationResponse(resourceGroupName: string, vmScaleSetName: string, instanceId: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.OperationStatusResponse>>;
    /**
     * Starts a virtual machine in a VM scale set.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmScaleSetName The name of the VM scale set.
     *
     * @param {string} instanceId The instance ID of the virtual machine.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginStartWithHttpOperationResponse(resourceGroupName: string, vmScaleSetName: string, instanceId: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.OperationStatusResponse>>;
    /**
     * Gets a list of all virtual machines in a VM scale sets.
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
    listNextWithHttpOperationResponse(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.VirtualMachineScaleSetVMListResult>>;
    /**
     * Reimages (upgrade the operating system) a specific virtual machine in a VM scale set.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmScaleSetName The name of the VM scale set.
     *
     * @param {string} instanceId The instance ID of the virtual machine.
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
    reimage(resourceGroupName: string, vmScaleSetName: string, instanceId: string): Promise<Models.OperationStatusResponse>;
    reimage(resourceGroupName: string, vmScaleSetName: string, instanceId: string, options: msRest.RequestOptionsBase): Promise<Models.OperationStatusResponse>;
    reimage(resourceGroupName: string, vmScaleSetName: string, instanceId: string, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    reimage(resourceGroupName: string, vmScaleSetName: string, instanceId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    /**
     * Allows you to re-image all the disks ( including data disks ) in the a VM scale set instance.
     * This operation is only supported for managed disks.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmScaleSetName The name of the VM scale set.
     *
     * @param {string} instanceId The instance ID of the virtual machine.
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
    reimageAll(resourceGroupName: string, vmScaleSetName: string, instanceId: string): Promise<Models.OperationStatusResponse>;
    reimageAll(resourceGroupName: string, vmScaleSetName: string, instanceId: string, options: msRest.RequestOptionsBase): Promise<Models.OperationStatusResponse>;
    reimageAll(resourceGroupName: string, vmScaleSetName: string, instanceId: string, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    reimageAll(resourceGroupName: string, vmScaleSetName: string, instanceId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    /**
     * Deallocates a specific virtual machine in a VM scale set. Shuts down the virtual machine and
     * releases the compute resources it uses. You are not billed for the compute resources of this
     * virtual machine once it is deallocated.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmScaleSetName The name of the VM scale set.
     *
     * @param {string} instanceId The instance ID of the virtual machine.
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
    deallocate(resourceGroupName: string, vmScaleSetName: string, instanceId: string): Promise<Models.OperationStatusResponse>;
    deallocate(resourceGroupName: string, vmScaleSetName: string, instanceId: string, options: msRest.RequestOptionsBase): Promise<Models.OperationStatusResponse>;
    deallocate(resourceGroupName: string, vmScaleSetName: string, instanceId: string, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    deallocate(resourceGroupName: string, vmScaleSetName: string, instanceId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    /**
     * Deletes a virtual machine from a VM scale set.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmScaleSetName The name of the VM scale set.
     *
     * @param {string} instanceId The instance ID of the virtual machine.
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
    deleteMethod(resourceGroupName: string, vmScaleSetName: string, instanceId: string): Promise<Models.OperationStatusResponse>;
    deleteMethod(resourceGroupName: string, vmScaleSetName: string, instanceId: string, options: msRest.RequestOptionsBase): Promise<Models.OperationStatusResponse>;
    deleteMethod(resourceGroupName: string, vmScaleSetName: string, instanceId: string, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    deleteMethod(resourceGroupName: string, vmScaleSetName: string, instanceId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    /**
     * Gets a virtual machine from a VM scale set.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmScaleSetName The name of the VM scale set.
     *
     * @param {string} instanceId The instance ID of the virtual machine.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.VirtualMachineScaleSetVM} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.VirtualMachineScaleSetVM} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    get(resourceGroupName: string, vmScaleSetName: string, instanceId: string): Promise<Models.VirtualMachineScaleSetVM>;
    get(resourceGroupName: string, vmScaleSetName: string, instanceId: string, options: msRest.RequestOptionsBase): Promise<Models.VirtualMachineScaleSetVM>;
    get(resourceGroupName: string, vmScaleSetName: string, instanceId: string, callback: msRest.ServiceCallback<Models.VirtualMachineScaleSetVM>): void;
    get(resourceGroupName: string, vmScaleSetName: string, instanceId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VirtualMachineScaleSetVM>): void;
    /**
     * Gets the status of a virtual machine from a VM scale set.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmScaleSetName The name of the VM scale set.
     *
     * @param {string} instanceId The instance ID of the virtual machine.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.VirtualMachineScaleSetVMInstanceView} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.VirtualMachineScaleSetVMInstanceView} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    getInstanceView(resourceGroupName: string, vmScaleSetName: string, instanceId: string): Promise<Models.VirtualMachineScaleSetVMInstanceView>;
    getInstanceView(resourceGroupName: string, vmScaleSetName: string, instanceId: string, options: msRest.RequestOptionsBase): Promise<Models.VirtualMachineScaleSetVMInstanceView>;
    getInstanceView(resourceGroupName: string, vmScaleSetName: string, instanceId: string, callback: msRest.ServiceCallback<Models.VirtualMachineScaleSetVMInstanceView>): void;
    getInstanceView(resourceGroupName: string, vmScaleSetName: string, instanceId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VirtualMachineScaleSetVMInstanceView>): void;
    /**
     * Gets a list of all virtual machines in a VM scale sets.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualMachineScaleSetName The name of the VM scale set.
     *
     * @param {VirtualMachineScaleSetVMsListOptionalParams} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.VirtualMachineScaleSetVMListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.VirtualMachineScaleSetVMListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    list(resourceGroupName: string, virtualMachineScaleSetName: string): Promise<Models.VirtualMachineScaleSetVMListResult>;
    list(resourceGroupName: string, virtualMachineScaleSetName: string, options: Models.VirtualMachineScaleSetVMsListOptionalParams): Promise<Models.VirtualMachineScaleSetVMListResult>;
    list(resourceGroupName: string, virtualMachineScaleSetName: string, callback: msRest.ServiceCallback<Models.VirtualMachineScaleSetVMListResult>): void;
    list(resourceGroupName: string, virtualMachineScaleSetName: string, options: Models.VirtualMachineScaleSetVMsListOptionalParams, callback: msRest.ServiceCallback<Models.VirtualMachineScaleSetVMListResult>): void;
    /**
     * Power off (stop) a virtual machine in a VM scale set. Note that resources are still attached and
     * you are getting charged for the resources. Instead, use deallocate to release resources and
     * avoid charges.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmScaleSetName The name of the VM scale set.
     *
     * @param {string} instanceId The instance ID of the virtual machine.
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
    powerOff(resourceGroupName: string, vmScaleSetName: string, instanceId: string): Promise<Models.OperationStatusResponse>;
    powerOff(resourceGroupName: string, vmScaleSetName: string, instanceId: string, options: msRest.RequestOptionsBase): Promise<Models.OperationStatusResponse>;
    powerOff(resourceGroupName: string, vmScaleSetName: string, instanceId: string, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    powerOff(resourceGroupName: string, vmScaleSetName: string, instanceId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    /**
     * Restarts a virtual machine in a VM scale set.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmScaleSetName The name of the VM scale set.
     *
     * @param {string} instanceId The instance ID of the virtual machine.
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
    restart(resourceGroupName: string, vmScaleSetName: string, instanceId: string): Promise<Models.OperationStatusResponse>;
    restart(resourceGroupName: string, vmScaleSetName: string, instanceId: string, options: msRest.RequestOptionsBase): Promise<Models.OperationStatusResponse>;
    restart(resourceGroupName: string, vmScaleSetName: string, instanceId: string, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    restart(resourceGroupName: string, vmScaleSetName: string, instanceId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    /**
     * Starts a virtual machine in a VM scale set.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmScaleSetName The name of the VM scale set.
     *
     * @param {string} instanceId The instance ID of the virtual machine.
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
    start(resourceGroupName: string, vmScaleSetName: string, instanceId: string): Promise<Models.OperationStatusResponse>;
    start(resourceGroupName: string, vmScaleSetName: string, instanceId: string, options: msRest.RequestOptionsBase): Promise<Models.OperationStatusResponse>;
    start(resourceGroupName: string, vmScaleSetName: string, instanceId: string, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    start(resourceGroupName: string, vmScaleSetName: string, instanceId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    /**
     * Reimages (upgrade the operating system) a specific virtual machine in a VM scale set.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmScaleSetName The name of the VM scale set.
     *
     * @param {string} instanceId The instance ID of the virtual machine.
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
    beginReimage(resourceGroupName: string, vmScaleSetName: string, instanceId: string): Promise<Models.OperationStatusResponse>;
    beginReimage(resourceGroupName: string, vmScaleSetName: string, instanceId: string, options: msRest.RequestOptionsBase): Promise<Models.OperationStatusResponse>;
    beginReimage(resourceGroupName: string, vmScaleSetName: string, instanceId: string, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    beginReimage(resourceGroupName: string, vmScaleSetName: string, instanceId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    /**
     * Allows you to re-image all the disks ( including data disks ) in the a VM scale set instance.
     * This operation is only supported for managed disks.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmScaleSetName The name of the VM scale set.
     *
     * @param {string} instanceId The instance ID of the virtual machine.
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
    beginReimageAll(resourceGroupName: string, vmScaleSetName: string, instanceId: string): Promise<Models.OperationStatusResponse>;
    beginReimageAll(resourceGroupName: string, vmScaleSetName: string, instanceId: string, options: msRest.RequestOptionsBase): Promise<Models.OperationStatusResponse>;
    beginReimageAll(resourceGroupName: string, vmScaleSetName: string, instanceId: string, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    beginReimageAll(resourceGroupName: string, vmScaleSetName: string, instanceId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    /**
     * Deallocates a specific virtual machine in a VM scale set. Shuts down the virtual machine and
     * releases the compute resources it uses. You are not billed for the compute resources of this
     * virtual machine once it is deallocated.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmScaleSetName The name of the VM scale set.
     *
     * @param {string} instanceId The instance ID of the virtual machine.
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
    beginDeallocate(resourceGroupName: string, vmScaleSetName: string, instanceId: string): Promise<Models.OperationStatusResponse>;
    beginDeallocate(resourceGroupName: string, vmScaleSetName: string, instanceId: string, options: msRest.RequestOptionsBase): Promise<Models.OperationStatusResponse>;
    beginDeallocate(resourceGroupName: string, vmScaleSetName: string, instanceId: string, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    beginDeallocate(resourceGroupName: string, vmScaleSetName: string, instanceId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    /**
     * Deletes a virtual machine from a VM scale set.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmScaleSetName The name of the VM scale set.
     *
     * @param {string} instanceId The instance ID of the virtual machine.
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
    beginDeleteMethod(resourceGroupName: string, vmScaleSetName: string, instanceId: string): Promise<Models.OperationStatusResponse>;
    beginDeleteMethod(resourceGroupName: string, vmScaleSetName: string, instanceId: string, options: msRest.RequestOptionsBase): Promise<Models.OperationStatusResponse>;
    beginDeleteMethod(resourceGroupName: string, vmScaleSetName: string, instanceId: string, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    beginDeleteMethod(resourceGroupName: string, vmScaleSetName: string, instanceId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    /**
     * Power off (stop) a virtual machine in a VM scale set. Note that resources are still attached and
     * you are getting charged for the resources. Instead, use deallocate to release resources and
     * avoid charges.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmScaleSetName The name of the VM scale set.
     *
     * @param {string} instanceId The instance ID of the virtual machine.
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
    beginPowerOff(resourceGroupName: string, vmScaleSetName: string, instanceId: string): Promise<Models.OperationStatusResponse>;
    beginPowerOff(resourceGroupName: string, vmScaleSetName: string, instanceId: string, options: msRest.RequestOptionsBase): Promise<Models.OperationStatusResponse>;
    beginPowerOff(resourceGroupName: string, vmScaleSetName: string, instanceId: string, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    beginPowerOff(resourceGroupName: string, vmScaleSetName: string, instanceId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    /**
     * Restarts a virtual machine in a VM scale set.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmScaleSetName The name of the VM scale set.
     *
     * @param {string} instanceId The instance ID of the virtual machine.
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
    beginRestart(resourceGroupName: string, vmScaleSetName: string, instanceId: string): Promise<Models.OperationStatusResponse>;
    beginRestart(resourceGroupName: string, vmScaleSetName: string, instanceId: string, options: msRest.RequestOptionsBase): Promise<Models.OperationStatusResponse>;
    beginRestart(resourceGroupName: string, vmScaleSetName: string, instanceId: string, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    beginRestart(resourceGroupName: string, vmScaleSetName: string, instanceId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    /**
     * Starts a virtual machine in a VM scale set.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmScaleSetName The name of the VM scale set.
     *
     * @param {string} instanceId The instance ID of the virtual machine.
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
    beginStart(resourceGroupName: string, vmScaleSetName: string, instanceId: string): Promise<Models.OperationStatusResponse>;
    beginStart(resourceGroupName: string, vmScaleSetName: string, instanceId: string, options: msRest.RequestOptionsBase): Promise<Models.OperationStatusResponse>;
    beginStart(resourceGroupName: string, vmScaleSetName: string, instanceId: string, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    beginStart(resourceGroupName: string, vmScaleSetName: string, instanceId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    /**
     * Gets a list of all virtual machines in a VM scale sets.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call to List operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.VirtualMachineScaleSetVMListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.VirtualMachineScaleSetVMListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listNext(nextPageLink: string): Promise<Models.VirtualMachineScaleSetVMListResult>;
    listNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.VirtualMachineScaleSetVMListResult>;
    listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.VirtualMachineScaleSetVMListResult>): void;
    listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VirtualMachineScaleSetVMListResult>): void;
}
