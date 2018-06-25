import * as msRest from "ms-rest-js";
import * as Models from "../models";
import { ComputeManagementClientContext } from "../computeManagementClientContext";
/** Class representing a VirtualMachineScaleSets. */
export declare class VirtualMachineScaleSets {
    private readonly client;
    private readonly serializer;
    /**
     * Create a VirtualMachineScaleSets.
     * @param {ComputeManagementClientContext} client Reference to the service client.
     */
    constructor(client: ComputeManagementClientContext);
    /**
     * Create or update a VM scale set.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmScaleSetName The name of the VM scale set to create or update.
     *
     * @param {VirtualMachineScaleSet} parameters The scale set object.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    createOrUpdateWithHttpOperationResponse(resourceGroupName: string, vmScaleSetName: string, parameters: Models.VirtualMachineScaleSet, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Update a VM scale set.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmScaleSetName The name of the VM scale set to create or update.
     *
     * @param {VirtualMachineScaleSetUpdate} parameters The scale set object.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    updateWithHttpOperationResponse(resourceGroupName: string, vmScaleSetName: string, parameters: Models.VirtualMachineScaleSetUpdate, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Deletes a VM scale set.
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
    deleteMethodWithHttpOperationResponse(resourceGroupName: string, vmScaleSetName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Display information about a virtual machine scale set.
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
    getWithHttpOperationResponse(resourceGroupName: string, vmScaleSetName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.VirtualMachineScaleSet>>;
    /**
     * Deallocates specific virtual machines in a VM scale set. Shuts down the virtual machines and
     * releases the compute resources. You are not billed for the compute resources that this virtual
     * machine scale set deallocates.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmScaleSetName The name of the VM scale set.
     *
     * @param {VirtualMachineScaleSetsDeallocateOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    deallocateWithHttpOperationResponse(resourceGroupName: string, vmScaleSetName: string, options?: Models.VirtualMachineScaleSetsDeallocateOptionalParams): Promise<msRest.HttpOperationResponse>;
    /**
     * Deletes virtual machines in a VM scale set.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmScaleSetName The name of the VM scale set.
     *
     * @param {VirtualMachineScaleSetVMInstanceRequiredIDs} vmInstanceIDs A list of virtual machine
     * instance IDs from the VM scale set.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    deleteInstancesWithHttpOperationResponse(resourceGroupName: string, vmScaleSetName: string, vmInstanceIDs: Models.VirtualMachineScaleSetVMInstanceRequiredIDs, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Gets the status of a VM scale set instance.
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
    getInstanceViewWithHttpOperationResponse(resourceGroupName: string, vmScaleSetName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.VirtualMachineScaleSetInstanceView>>;
    /**
     * Gets a list of all VM scale sets under a resource group.
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
    listWithHttpOperationResponse(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.VirtualMachineScaleSetListResult>>;
    /**
     * Gets a list of all VM Scale Sets in the subscription, regardless of the associated resource
     * group. Use nextLink property in the response to get the next page of VM Scale Sets. Do this till
     * nextLink is null to fetch all the VM Scale Sets.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    listAllWithHttpOperationResponse(options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.VirtualMachineScaleSetListWithLinkResult>>;
    /**
     * Gets a list of SKUs available for your VM scale set, including the minimum and maximum VM
     * instances allowed for each SKU.
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
    listSkusWithHttpOperationResponse(resourceGroupName: string, vmScaleSetName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.VirtualMachineScaleSetListSkusResult>>;
    /**
     * Power off (stop) one or more virtual machines in a VM scale set. Note that resources are still
     * attached and you are getting charged for the resources. Instead, use deallocate to release
     * resources and avoid charges.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmScaleSetName The name of the VM scale set.
     *
     * @param {VirtualMachineScaleSetsPowerOffOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    powerOffWithHttpOperationResponse(resourceGroupName: string, vmScaleSetName: string, options?: Models.VirtualMachineScaleSetsPowerOffOptionalParams): Promise<msRest.HttpOperationResponse>;
    /**
     * Restarts one or more virtual machines in a VM scale set.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmScaleSetName The name of the VM scale set.
     *
     * @param {VirtualMachineScaleSetsRestartOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    restartWithHttpOperationResponse(resourceGroupName: string, vmScaleSetName: string, options?: Models.VirtualMachineScaleSetsRestartOptionalParams): Promise<msRest.HttpOperationResponse>;
    /**
     * Starts one or more virtual machines in a VM scale set.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmScaleSetName The name of the VM scale set.
     *
     * @param {VirtualMachineScaleSetsStartOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    startWithHttpOperationResponse(resourceGroupName: string, vmScaleSetName: string, options?: Models.VirtualMachineScaleSetsStartOptionalParams): Promise<msRest.HttpOperationResponse>;
    /**
     * Upgrades one or more virtual machines to the latest SKU set in the VM scale set model.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmScaleSetName The name of the VM scale set.
     *
     * @param {VirtualMachineScaleSetVMInstanceRequiredIDs} vmInstanceIDs A list of virtual machine
     * instance IDs from the VM scale set.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    updateInstancesWithHttpOperationResponse(resourceGroupName: string, vmScaleSetName: string, vmInstanceIDs: Models.VirtualMachineScaleSetVMInstanceRequiredIDs, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Reimages (upgrade the operating system) one or more virtual machines in a VM scale set.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmScaleSetName The name of the VM scale set.
     *
     * @param {VirtualMachineScaleSetsReimageOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    reimageWithHttpOperationResponse(resourceGroupName: string, vmScaleSetName: string, options?: Models.VirtualMachineScaleSetsReimageOptionalParams): Promise<msRest.HttpOperationResponse>;
    /**
     * Reimages all the disks ( including data disks ) in the virtual machines in a VM scale set. This
     * operation is only supported for managed disks.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmScaleSetName The name of the VM scale set.
     *
     * @param {VirtualMachineScaleSetsReimageAllOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    reimageAllWithHttpOperationResponse(resourceGroupName: string, vmScaleSetName: string, options?: Models.VirtualMachineScaleSetsReimageAllOptionalParams): Promise<msRest.HttpOperationResponse>;
    /**
     * Create or update a VM scale set.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmScaleSetName The name of the VM scale set to create or update.
     *
     * @param {VirtualMachineScaleSet} parameters The scale set object.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginCreateOrUpdateWithHttpOperationResponse(resourceGroupName: string, vmScaleSetName: string, parameters: Models.VirtualMachineScaleSet, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.VirtualMachineScaleSet>>;
    /**
     * Update a VM scale set.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmScaleSetName The name of the VM scale set to create or update.
     *
     * @param {VirtualMachineScaleSetUpdate} parameters The scale set object.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginUpdateWithHttpOperationResponse(resourceGroupName: string, vmScaleSetName: string, parameters: Models.VirtualMachineScaleSetUpdate, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.VirtualMachineScaleSet>>;
    /**
     * Deletes a VM scale set.
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
    beginDeleteMethodWithHttpOperationResponse(resourceGroupName: string, vmScaleSetName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.OperationStatusResponse>>;
    /**
     * Deallocates specific virtual machines in a VM scale set. Shuts down the virtual machines and
     * releases the compute resources. You are not billed for the compute resources that this virtual
     * machine scale set deallocates.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmScaleSetName The name of the VM scale set.
     *
     * @param {VirtualMachineScaleSetsBeginDeallocateOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginDeallocateWithHttpOperationResponse(resourceGroupName: string, vmScaleSetName: string, options?: Models.VirtualMachineScaleSetsBeginDeallocateOptionalParams): Promise<msRest.HttpOperationResponse<Models.OperationStatusResponse>>;
    /**
     * Deletes virtual machines in a VM scale set.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmScaleSetName The name of the VM scale set.
     *
     * @param {VirtualMachineScaleSetVMInstanceRequiredIDs} vmInstanceIDs A list of virtual machine
     * instance IDs from the VM scale set.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginDeleteInstancesWithHttpOperationResponse(resourceGroupName: string, vmScaleSetName: string, vmInstanceIDs: Models.VirtualMachineScaleSetVMInstanceRequiredIDs, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.OperationStatusResponse>>;
    /**
     * Power off (stop) one or more virtual machines in a VM scale set. Note that resources are still
     * attached and you are getting charged for the resources. Instead, use deallocate to release
     * resources and avoid charges.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmScaleSetName The name of the VM scale set.
     *
     * @param {VirtualMachineScaleSetsBeginPowerOffOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginPowerOffWithHttpOperationResponse(resourceGroupName: string, vmScaleSetName: string, options?: Models.VirtualMachineScaleSetsBeginPowerOffOptionalParams): Promise<msRest.HttpOperationResponse<Models.OperationStatusResponse>>;
    /**
     * Restarts one or more virtual machines in a VM scale set.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmScaleSetName The name of the VM scale set.
     *
     * @param {VirtualMachineScaleSetsBeginRestartOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginRestartWithHttpOperationResponse(resourceGroupName: string, vmScaleSetName: string, options?: Models.VirtualMachineScaleSetsBeginRestartOptionalParams): Promise<msRest.HttpOperationResponse<Models.OperationStatusResponse>>;
    /**
     * Starts one or more virtual machines in a VM scale set.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmScaleSetName The name of the VM scale set.
     *
     * @param {VirtualMachineScaleSetsBeginStartOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginStartWithHttpOperationResponse(resourceGroupName: string, vmScaleSetName: string, options?: Models.VirtualMachineScaleSetsBeginStartOptionalParams): Promise<msRest.HttpOperationResponse<Models.OperationStatusResponse>>;
    /**
     * Upgrades one or more virtual machines to the latest SKU set in the VM scale set model.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmScaleSetName The name of the VM scale set.
     *
     * @param {VirtualMachineScaleSetVMInstanceRequiredIDs} vmInstanceIDs A list of virtual machine
     * instance IDs from the VM scale set.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginUpdateInstancesWithHttpOperationResponse(resourceGroupName: string, vmScaleSetName: string, vmInstanceIDs: Models.VirtualMachineScaleSetVMInstanceRequiredIDs, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.OperationStatusResponse>>;
    /**
     * Reimages (upgrade the operating system) one or more virtual machines in a VM scale set.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmScaleSetName The name of the VM scale set.
     *
     * @param {VirtualMachineScaleSetsBeginReimageOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginReimageWithHttpOperationResponse(resourceGroupName: string, vmScaleSetName: string, options?: Models.VirtualMachineScaleSetsBeginReimageOptionalParams): Promise<msRest.HttpOperationResponse<Models.OperationStatusResponse>>;
    /**
     * Reimages all the disks ( including data disks ) in the virtual machines in a VM scale set. This
     * operation is only supported for managed disks.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmScaleSetName The name of the VM scale set.
     *
     * @param {VirtualMachineScaleSetsBeginReimageAllOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginReimageAllWithHttpOperationResponse(resourceGroupName: string, vmScaleSetName: string, options?: Models.VirtualMachineScaleSetsBeginReimageAllOptionalParams): Promise<msRest.HttpOperationResponse<Models.OperationStatusResponse>>;
    /**
     * Gets a list of all VM scale sets under a resource group.
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
    listNextWithHttpOperationResponse(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.VirtualMachineScaleSetListResult>>;
    /**
     * Gets a list of all VM Scale Sets in the subscription, regardless of the associated resource
     * group. Use nextLink property in the response to get the next page of VM Scale Sets. Do this till
     * nextLink is null to fetch all the VM Scale Sets.
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
    listAllNextWithHttpOperationResponse(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.VirtualMachineScaleSetListWithLinkResult>>;
    /**
     * Gets a list of SKUs available for your VM scale set, including the minimum and maximum VM
     * instances allowed for each SKU.
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
    listSkusNextWithHttpOperationResponse(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.VirtualMachineScaleSetListSkusResult>>;
    /**
     * Create or update a VM scale set.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmScaleSetName The name of the VM scale set to create or update.
     *
     * @param {VirtualMachineScaleSet} parameters The scale set object.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.VirtualMachineScaleSet} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.VirtualMachineScaleSet} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    createOrUpdate(resourceGroupName: string, vmScaleSetName: string, parameters: Models.VirtualMachineScaleSet): Promise<Models.VirtualMachineScaleSet>;
    createOrUpdate(resourceGroupName: string, vmScaleSetName: string, parameters: Models.VirtualMachineScaleSet, options: msRest.RequestOptionsBase): Promise<Models.VirtualMachineScaleSet>;
    createOrUpdate(resourceGroupName: string, vmScaleSetName: string, parameters: Models.VirtualMachineScaleSet, callback: msRest.ServiceCallback<Models.VirtualMachineScaleSet>): void;
    createOrUpdate(resourceGroupName: string, vmScaleSetName: string, parameters: Models.VirtualMachineScaleSet, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VirtualMachineScaleSet>): void;
    /**
     * Update a VM scale set.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmScaleSetName The name of the VM scale set to create or update.
     *
     * @param {VirtualMachineScaleSetUpdate} parameters The scale set object.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.VirtualMachineScaleSet} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.VirtualMachineScaleSet} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    update(resourceGroupName: string, vmScaleSetName: string, parameters: Models.VirtualMachineScaleSetUpdate): Promise<Models.VirtualMachineScaleSet>;
    update(resourceGroupName: string, vmScaleSetName: string, parameters: Models.VirtualMachineScaleSetUpdate, options: msRest.RequestOptionsBase): Promise<Models.VirtualMachineScaleSet>;
    update(resourceGroupName: string, vmScaleSetName: string, parameters: Models.VirtualMachineScaleSetUpdate, callback: msRest.ServiceCallback<Models.VirtualMachineScaleSet>): void;
    update(resourceGroupName: string, vmScaleSetName: string, parameters: Models.VirtualMachineScaleSetUpdate, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VirtualMachineScaleSet>): void;
    /**
     * Deletes a VM scale set.
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
    deleteMethod(resourceGroupName: string, vmScaleSetName: string): Promise<Models.OperationStatusResponse>;
    deleteMethod(resourceGroupName: string, vmScaleSetName: string, options: msRest.RequestOptionsBase): Promise<Models.OperationStatusResponse>;
    deleteMethod(resourceGroupName: string, vmScaleSetName: string, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    deleteMethod(resourceGroupName: string, vmScaleSetName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    /**
     * Display information about a virtual machine scale set.
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
     *                      {Models.VirtualMachineScaleSet} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.VirtualMachineScaleSet} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    get(resourceGroupName: string, vmScaleSetName: string): Promise<Models.VirtualMachineScaleSet>;
    get(resourceGroupName: string, vmScaleSetName: string, options: msRest.RequestOptionsBase): Promise<Models.VirtualMachineScaleSet>;
    get(resourceGroupName: string, vmScaleSetName: string, callback: msRest.ServiceCallback<Models.VirtualMachineScaleSet>): void;
    get(resourceGroupName: string, vmScaleSetName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VirtualMachineScaleSet>): void;
    /**
     * Deallocates specific virtual machines in a VM scale set. Shuts down the virtual machines and
     * releases the compute resources. You are not billed for the compute resources that this virtual
     * machine scale set deallocates.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmScaleSetName The name of the VM scale set.
     *
     * @param {VirtualMachineScaleSetsDeallocateOptionalParams} [options] Optional Parameters.
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
    deallocate(resourceGroupName: string, vmScaleSetName: string): Promise<Models.OperationStatusResponse>;
    deallocate(resourceGroupName: string, vmScaleSetName: string, options: Models.VirtualMachineScaleSetsDeallocateOptionalParams): Promise<Models.OperationStatusResponse>;
    deallocate(resourceGroupName: string, vmScaleSetName: string, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    deallocate(resourceGroupName: string, vmScaleSetName: string, options: Models.VirtualMachineScaleSetsDeallocateOptionalParams, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    /**
     * Deletes virtual machines in a VM scale set.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmScaleSetName The name of the VM scale set.
     *
     * @param {VirtualMachineScaleSetVMInstanceRequiredIDs} vmInstanceIDs A list of virtual machine
     * instance IDs from the VM scale set.
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
    deleteInstances(resourceGroupName: string, vmScaleSetName: string, vmInstanceIDs: Models.VirtualMachineScaleSetVMInstanceRequiredIDs): Promise<Models.OperationStatusResponse>;
    deleteInstances(resourceGroupName: string, vmScaleSetName: string, vmInstanceIDs: Models.VirtualMachineScaleSetVMInstanceRequiredIDs, options: msRest.RequestOptionsBase): Promise<Models.OperationStatusResponse>;
    deleteInstances(resourceGroupName: string, vmScaleSetName: string, vmInstanceIDs: Models.VirtualMachineScaleSetVMInstanceRequiredIDs, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    deleteInstances(resourceGroupName: string, vmScaleSetName: string, vmInstanceIDs: Models.VirtualMachineScaleSetVMInstanceRequiredIDs, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    /**
     * Gets the status of a VM scale set instance.
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
     *                      {Models.VirtualMachineScaleSetInstanceView} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.VirtualMachineScaleSetInstanceView} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    getInstanceView(resourceGroupName: string, vmScaleSetName: string): Promise<Models.VirtualMachineScaleSetInstanceView>;
    getInstanceView(resourceGroupName: string, vmScaleSetName: string, options: msRest.RequestOptionsBase): Promise<Models.VirtualMachineScaleSetInstanceView>;
    getInstanceView(resourceGroupName: string, vmScaleSetName: string, callback: msRest.ServiceCallback<Models.VirtualMachineScaleSetInstanceView>): void;
    getInstanceView(resourceGroupName: string, vmScaleSetName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VirtualMachineScaleSetInstanceView>): void;
    /**
     * Gets a list of all VM scale sets under a resource group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.VirtualMachineScaleSetListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.VirtualMachineScaleSetListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    list(resourceGroupName: string): Promise<Models.VirtualMachineScaleSetListResult>;
    list(resourceGroupName: string, options: msRest.RequestOptionsBase): Promise<Models.VirtualMachineScaleSetListResult>;
    list(resourceGroupName: string, callback: msRest.ServiceCallback<Models.VirtualMachineScaleSetListResult>): void;
    list(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VirtualMachineScaleSetListResult>): void;
    /**
     * Gets a list of all VM Scale Sets in the subscription, regardless of the associated resource
     * group. Use nextLink property in the response to get the next page of VM Scale Sets. Do this till
     * nextLink is null to fetch all the VM Scale Sets.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.VirtualMachineScaleSetListWithLinkResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.VirtualMachineScaleSetListWithLinkResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listAll(): Promise<Models.VirtualMachineScaleSetListWithLinkResult>;
    listAll(options: msRest.RequestOptionsBase): Promise<Models.VirtualMachineScaleSetListWithLinkResult>;
    listAll(callback: msRest.ServiceCallback<Models.VirtualMachineScaleSetListWithLinkResult>): void;
    listAll(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VirtualMachineScaleSetListWithLinkResult>): void;
    /**
     * Gets a list of SKUs available for your VM scale set, including the minimum and maximum VM
     * instances allowed for each SKU.
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
     *                      {Models.VirtualMachineScaleSetListSkusResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.VirtualMachineScaleSetListSkusResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listSkus(resourceGroupName: string, vmScaleSetName: string): Promise<Models.VirtualMachineScaleSetListSkusResult>;
    listSkus(resourceGroupName: string, vmScaleSetName: string, options: msRest.RequestOptionsBase): Promise<Models.VirtualMachineScaleSetListSkusResult>;
    listSkus(resourceGroupName: string, vmScaleSetName: string, callback: msRest.ServiceCallback<Models.VirtualMachineScaleSetListSkusResult>): void;
    listSkus(resourceGroupName: string, vmScaleSetName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VirtualMachineScaleSetListSkusResult>): void;
    /**
     * Power off (stop) one or more virtual machines in a VM scale set. Note that resources are still
     * attached and you are getting charged for the resources. Instead, use deallocate to release
     * resources and avoid charges.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmScaleSetName The name of the VM scale set.
     *
     * @param {VirtualMachineScaleSetsPowerOffOptionalParams} [options] Optional Parameters.
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
    powerOff(resourceGroupName: string, vmScaleSetName: string): Promise<Models.OperationStatusResponse>;
    powerOff(resourceGroupName: string, vmScaleSetName: string, options: Models.VirtualMachineScaleSetsPowerOffOptionalParams): Promise<Models.OperationStatusResponse>;
    powerOff(resourceGroupName: string, vmScaleSetName: string, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    powerOff(resourceGroupName: string, vmScaleSetName: string, options: Models.VirtualMachineScaleSetsPowerOffOptionalParams, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    /**
     * Restarts one or more virtual machines in a VM scale set.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmScaleSetName The name of the VM scale set.
     *
     * @param {VirtualMachineScaleSetsRestartOptionalParams} [options] Optional Parameters.
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
    restart(resourceGroupName: string, vmScaleSetName: string): Promise<Models.OperationStatusResponse>;
    restart(resourceGroupName: string, vmScaleSetName: string, options: Models.VirtualMachineScaleSetsRestartOptionalParams): Promise<Models.OperationStatusResponse>;
    restart(resourceGroupName: string, vmScaleSetName: string, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    restart(resourceGroupName: string, vmScaleSetName: string, options: Models.VirtualMachineScaleSetsRestartOptionalParams, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    /**
     * Starts one or more virtual machines in a VM scale set.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmScaleSetName The name of the VM scale set.
     *
     * @param {VirtualMachineScaleSetsStartOptionalParams} [options] Optional Parameters.
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
    start(resourceGroupName: string, vmScaleSetName: string): Promise<Models.OperationStatusResponse>;
    start(resourceGroupName: string, vmScaleSetName: string, options: Models.VirtualMachineScaleSetsStartOptionalParams): Promise<Models.OperationStatusResponse>;
    start(resourceGroupName: string, vmScaleSetName: string, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    start(resourceGroupName: string, vmScaleSetName: string, options: Models.VirtualMachineScaleSetsStartOptionalParams, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    /**
     * Upgrades one or more virtual machines to the latest SKU set in the VM scale set model.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmScaleSetName The name of the VM scale set.
     *
     * @param {VirtualMachineScaleSetVMInstanceRequiredIDs} vmInstanceIDs A list of virtual machine
     * instance IDs from the VM scale set.
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
    updateInstances(resourceGroupName: string, vmScaleSetName: string, vmInstanceIDs: Models.VirtualMachineScaleSetVMInstanceRequiredIDs): Promise<Models.OperationStatusResponse>;
    updateInstances(resourceGroupName: string, vmScaleSetName: string, vmInstanceIDs: Models.VirtualMachineScaleSetVMInstanceRequiredIDs, options: msRest.RequestOptionsBase): Promise<Models.OperationStatusResponse>;
    updateInstances(resourceGroupName: string, vmScaleSetName: string, vmInstanceIDs: Models.VirtualMachineScaleSetVMInstanceRequiredIDs, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    updateInstances(resourceGroupName: string, vmScaleSetName: string, vmInstanceIDs: Models.VirtualMachineScaleSetVMInstanceRequiredIDs, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    /**
     * Reimages (upgrade the operating system) one or more virtual machines in a VM scale set.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmScaleSetName The name of the VM scale set.
     *
     * @param {VirtualMachineScaleSetsReimageOptionalParams} [options] Optional Parameters.
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
    reimage(resourceGroupName: string, vmScaleSetName: string): Promise<Models.OperationStatusResponse>;
    reimage(resourceGroupName: string, vmScaleSetName: string, options: Models.VirtualMachineScaleSetsReimageOptionalParams): Promise<Models.OperationStatusResponse>;
    reimage(resourceGroupName: string, vmScaleSetName: string, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    reimage(resourceGroupName: string, vmScaleSetName: string, options: Models.VirtualMachineScaleSetsReimageOptionalParams, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    /**
     * Reimages all the disks ( including data disks ) in the virtual machines in a VM scale set. This
     * operation is only supported for managed disks.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmScaleSetName The name of the VM scale set.
     *
     * @param {VirtualMachineScaleSetsReimageAllOptionalParams} [options] Optional Parameters.
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
    reimageAll(resourceGroupName: string, vmScaleSetName: string): Promise<Models.OperationStatusResponse>;
    reimageAll(resourceGroupName: string, vmScaleSetName: string, options: Models.VirtualMachineScaleSetsReimageAllOptionalParams): Promise<Models.OperationStatusResponse>;
    reimageAll(resourceGroupName: string, vmScaleSetName: string, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    reimageAll(resourceGroupName: string, vmScaleSetName: string, options: Models.VirtualMachineScaleSetsReimageAllOptionalParams, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    /**
     * Create or update a VM scale set.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmScaleSetName The name of the VM scale set to create or update.
     *
     * @param {VirtualMachineScaleSet} parameters The scale set object.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.VirtualMachineScaleSet} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.VirtualMachineScaleSet} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    beginCreateOrUpdate(resourceGroupName: string, vmScaleSetName: string, parameters: Models.VirtualMachineScaleSet): Promise<Models.VirtualMachineScaleSet>;
    beginCreateOrUpdate(resourceGroupName: string, vmScaleSetName: string, parameters: Models.VirtualMachineScaleSet, options: msRest.RequestOptionsBase): Promise<Models.VirtualMachineScaleSet>;
    beginCreateOrUpdate(resourceGroupName: string, vmScaleSetName: string, parameters: Models.VirtualMachineScaleSet, callback: msRest.ServiceCallback<Models.VirtualMachineScaleSet>): void;
    beginCreateOrUpdate(resourceGroupName: string, vmScaleSetName: string, parameters: Models.VirtualMachineScaleSet, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VirtualMachineScaleSet>): void;
    /**
     * Update a VM scale set.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmScaleSetName The name of the VM scale set to create or update.
     *
     * @param {VirtualMachineScaleSetUpdate} parameters The scale set object.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.VirtualMachineScaleSet} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.VirtualMachineScaleSet} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    beginUpdate(resourceGroupName: string, vmScaleSetName: string, parameters: Models.VirtualMachineScaleSetUpdate): Promise<Models.VirtualMachineScaleSet>;
    beginUpdate(resourceGroupName: string, vmScaleSetName: string, parameters: Models.VirtualMachineScaleSetUpdate, options: msRest.RequestOptionsBase): Promise<Models.VirtualMachineScaleSet>;
    beginUpdate(resourceGroupName: string, vmScaleSetName: string, parameters: Models.VirtualMachineScaleSetUpdate, callback: msRest.ServiceCallback<Models.VirtualMachineScaleSet>): void;
    beginUpdate(resourceGroupName: string, vmScaleSetName: string, parameters: Models.VirtualMachineScaleSetUpdate, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VirtualMachineScaleSet>): void;
    /**
     * Deletes a VM scale set.
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
    beginDeleteMethod(resourceGroupName: string, vmScaleSetName: string): Promise<Models.OperationStatusResponse>;
    beginDeleteMethod(resourceGroupName: string, vmScaleSetName: string, options: msRest.RequestOptionsBase): Promise<Models.OperationStatusResponse>;
    beginDeleteMethod(resourceGroupName: string, vmScaleSetName: string, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    beginDeleteMethod(resourceGroupName: string, vmScaleSetName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    /**
     * Deallocates specific virtual machines in a VM scale set. Shuts down the virtual machines and
     * releases the compute resources. You are not billed for the compute resources that this virtual
     * machine scale set deallocates.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmScaleSetName The name of the VM scale set.
     *
     * @param {VirtualMachineScaleSetsBeginDeallocateOptionalParams} [options] Optional Parameters.
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
    beginDeallocate(resourceGroupName: string, vmScaleSetName: string): Promise<Models.OperationStatusResponse>;
    beginDeallocate(resourceGroupName: string, vmScaleSetName: string, options: Models.VirtualMachineScaleSetsBeginDeallocateOptionalParams): Promise<Models.OperationStatusResponse>;
    beginDeallocate(resourceGroupName: string, vmScaleSetName: string, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    beginDeallocate(resourceGroupName: string, vmScaleSetName: string, options: Models.VirtualMachineScaleSetsBeginDeallocateOptionalParams, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    /**
     * Deletes virtual machines in a VM scale set.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmScaleSetName The name of the VM scale set.
     *
     * @param {VirtualMachineScaleSetVMInstanceRequiredIDs} vmInstanceIDs A list of virtual machine
     * instance IDs from the VM scale set.
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
    beginDeleteInstances(resourceGroupName: string, vmScaleSetName: string, vmInstanceIDs: Models.VirtualMachineScaleSetVMInstanceRequiredIDs): Promise<Models.OperationStatusResponse>;
    beginDeleteInstances(resourceGroupName: string, vmScaleSetName: string, vmInstanceIDs: Models.VirtualMachineScaleSetVMInstanceRequiredIDs, options: msRest.RequestOptionsBase): Promise<Models.OperationStatusResponse>;
    beginDeleteInstances(resourceGroupName: string, vmScaleSetName: string, vmInstanceIDs: Models.VirtualMachineScaleSetVMInstanceRequiredIDs, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    beginDeleteInstances(resourceGroupName: string, vmScaleSetName: string, vmInstanceIDs: Models.VirtualMachineScaleSetVMInstanceRequiredIDs, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    /**
     * Power off (stop) one or more virtual machines in a VM scale set. Note that resources are still
     * attached and you are getting charged for the resources. Instead, use deallocate to release
     * resources and avoid charges.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmScaleSetName The name of the VM scale set.
     *
     * @param {VirtualMachineScaleSetsBeginPowerOffOptionalParams} [options] Optional Parameters.
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
    beginPowerOff(resourceGroupName: string, vmScaleSetName: string): Promise<Models.OperationStatusResponse>;
    beginPowerOff(resourceGroupName: string, vmScaleSetName: string, options: Models.VirtualMachineScaleSetsBeginPowerOffOptionalParams): Promise<Models.OperationStatusResponse>;
    beginPowerOff(resourceGroupName: string, vmScaleSetName: string, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    beginPowerOff(resourceGroupName: string, vmScaleSetName: string, options: Models.VirtualMachineScaleSetsBeginPowerOffOptionalParams, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    /**
     * Restarts one or more virtual machines in a VM scale set.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmScaleSetName The name of the VM scale set.
     *
     * @param {VirtualMachineScaleSetsBeginRestartOptionalParams} [options] Optional Parameters.
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
    beginRestart(resourceGroupName: string, vmScaleSetName: string): Promise<Models.OperationStatusResponse>;
    beginRestart(resourceGroupName: string, vmScaleSetName: string, options: Models.VirtualMachineScaleSetsBeginRestartOptionalParams): Promise<Models.OperationStatusResponse>;
    beginRestart(resourceGroupName: string, vmScaleSetName: string, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    beginRestart(resourceGroupName: string, vmScaleSetName: string, options: Models.VirtualMachineScaleSetsBeginRestartOptionalParams, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    /**
     * Starts one or more virtual machines in a VM scale set.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmScaleSetName The name of the VM scale set.
     *
     * @param {VirtualMachineScaleSetsBeginStartOptionalParams} [options] Optional Parameters.
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
    beginStart(resourceGroupName: string, vmScaleSetName: string): Promise<Models.OperationStatusResponse>;
    beginStart(resourceGroupName: string, vmScaleSetName: string, options: Models.VirtualMachineScaleSetsBeginStartOptionalParams): Promise<Models.OperationStatusResponse>;
    beginStart(resourceGroupName: string, vmScaleSetName: string, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    beginStart(resourceGroupName: string, vmScaleSetName: string, options: Models.VirtualMachineScaleSetsBeginStartOptionalParams, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    /**
     * Upgrades one or more virtual machines to the latest SKU set in the VM scale set model.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmScaleSetName The name of the VM scale set.
     *
     * @param {VirtualMachineScaleSetVMInstanceRequiredIDs} vmInstanceIDs A list of virtual machine
     * instance IDs from the VM scale set.
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
    beginUpdateInstances(resourceGroupName: string, vmScaleSetName: string, vmInstanceIDs: Models.VirtualMachineScaleSetVMInstanceRequiredIDs): Promise<Models.OperationStatusResponse>;
    beginUpdateInstances(resourceGroupName: string, vmScaleSetName: string, vmInstanceIDs: Models.VirtualMachineScaleSetVMInstanceRequiredIDs, options: msRest.RequestOptionsBase): Promise<Models.OperationStatusResponse>;
    beginUpdateInstances(resourceGroupName: string, vmScaleSetName: string, vmInstanceIDs: Models.VirtualMachineScaleSetVMInstanceRequiredIDs, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    beginUpdateInstances(resourceGroupName: string, vmScaleSetName: string, vmInstanceIDs: Models.VirtualMachineScaleSetVMInstanceRequiredIDs, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    /**
     * Reimages (upgrade the operating system) one or more virtual machines in a VM scale set.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmScaleSetName The name of the VM scale set.
     *
     * @param {VirtualMachineScaleSetsBeginReimageOptionalParams} [options] Optional Parameters.
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
    beginReimage(resourceGroupName: string, vmScaleSetName: string): Promise<Models.OperationStatusResponse>;
    beginReimage(resourceGroupName: string, vmScaleSetName: string, options: Models.VirtualMachineScaleSetsBeginReimageOptionalParams): Promise<Models.OperationStatusResponse>;
    beginReimage(resourceGroupName: string, vmScaleSetName: string, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    beginReimage(resourceGroupName: string, vmScaleSetName: string, options: Models.VirtualMachineScaleSetsBeginReimageOptionalParams, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    /**
     * Reimages all the disks ( including data disks ) in the virtual machines in a VM scale set. This
     * operation is only supported for managed disks.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmScaleSetName The name of the VM scale set.
     *
     * @param {VirtualMachineScaleSetsBeginReimageAllOptionalParams} [options] Optional Parameters.
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
    beginReimageAll(resourceGroupName: string, vmScaleSetName: string): Promise<Models.OperationStatusResponse>;
    beginReimageAll(resourceGroupName: string, vmScaleSetName: string, options: Models.VirtualMachineScaleSetsBeginReimageAllOptionalParams): Promise<Models.OperationStatusResponse>;
    beginReimageAll(resourceGroupName: string, vmScaleSetName: string, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    beginReimageAll(resourceGroupName: string, vmScaleSetName: string, options: Models.VirtualMachineScaleSetsBeginReimageAllOptionalParams, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    /**
     * Gets a list of all VM scale sets under a resource group.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call to List operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.VirtualMachineScaleSetListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.VirtualMachineScaleSetListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listNext(nextPageLink: string): Promise<Models.VirtualMachineScaleSetListResult>;
    listNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.VirtualMachineScaleSetListResult>;
    listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.VirtualMachineScaleSetListResult>): void;
    listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VirtualMachineScaleSetListResult>): void;
    /**
     * Gets a list of all VM Scale Sets in the subscription, regardless of the associated resource
     * group. Use nextLink property in the response to get the next page of VM Scale Sets. Do this till
     * nextLink is null to fetch all the VM Scale Sets.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call to List operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.VirtualMachineScaleSetListWithLinkResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.VirtualMachineScaleSetListWithLinkResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listAllNext(nextPageLink: string): Promise<Models.VirtualMachineScaleSetListWithLinkResult>;
    listAllNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.VirtualMachineScaleSetListWithLinkResult>;
    listAllNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.VirtualMachineScaleSetListWithLinkResult>): void;
    listAllNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VirtualMachineScaleSetListWithLinkResult>): void;
    /**
     * Gets a list of SKUs available for your VM scale set, including the minimum and maximum VM
     * instances allowed for each SKU.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call to List operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.VirtualMachineScaleSetListSkusResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.VirtualMachineScaleSetListSkusResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listSkusNext(nextPageLink: string): Promise<Models.VirtualMachineScaleSetListSkusResult>;
    listSkusNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.VirtualMachineScaleSetListSkusResult>;
    listSkusNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.VirtualMachineScaleSetListSkusResult>): void;
    listSkusNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VirtualMachineScaleSetListSkusResult>): void;
}
