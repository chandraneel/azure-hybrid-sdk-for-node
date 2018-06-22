import * as msRest from "ms-rest-js";
import * as Models from "../models";
import { NetworkManagementClientContext } from "../networkManagementClientContext";
/** Class representing a NetworkInterfaces. */
export declare class NetworkInterfaces {
    private readonly client;
    private readonly serializer;
    /**
     * Create a NetworkInterfaces.
     * @param {NetworkManagementClientContext} client Reference to the service client.
     */
    constructor(client: NetworkManagementClientContext);
    /**
     * Deletes the specified network interface.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} networkInterfaceName The name of the network interface.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    deleteMethodWithHttpOperationResponse(resourceGroupName: string, networkInterfaceName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Gets information about the specified network interface.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} networkInterfaceName The name of the network interface.
     *
     * @param {NetworkInterfacesGetOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    getWithHttpOperationResponse(resourceGroupName: string, networkInterfaceName: string, options?: Models.NetworkInterfacesGetOptionalParams): Promise<msRest.HttpOperationResponse<Models.NetworkInterface>>;
    /**
     * Creates or updates a network interface.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} networkInterfaceName The name of the network interface.
     *
     * @param {NetworkInterface} parameters Parameters supplied to the create or update network
     * interface operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    createOrUpdateWithHttpOperationResponse(resourceGroupName: string, networkInterfaceName: string, parameters: Models.NetworkInterface, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Updates a network interface tags.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} networkInterfaceName The name of the network interface.
     *
     * @param {TagsObject} parameters Parameters supplied to update network interface tags.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    updateTagsWithHttpOperationResponse(resourceGroupName: string, networkInterfaceName: string, parameters: Models.TagsObject, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Gets all network interfaces in a subscription.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    listAllWithHttpOperationResponse(options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.NetworkInterfaceListResult>>;
    /**
     * Gets all network interfaces in a resource group.
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
    listWithHttpOperationResponse(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.NetworkInterfaceListResult>>;
    /**
     * Gets all route tables applied to a network interface.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} networkInterfaceName The name of the network interface.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    getEffectiveRouteTableWithHttpOperationResponse(resourceGroupName: string, networkInterfaceName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Gets all network security groups applied to a network interface.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} networkInterfaceName The name of the network interface.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    listEffectiveNetworkSecurityGroupsWithHttpOperationResponse(resourceGroupName: string, networkInterfaceName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Gets information about all network interfaces in a virtual machine in a virtual machine scale
     * set.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualMachineScaleSetName The name of the virtual machine scale set.
     *
     * @param {string} virtualmachineIndex The virtual machine index.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    listVirtualMachineScaleSetVMNetworkInterfacesWithHttpOperationResponse(resourceGroupName: string, virtualMachineScaleSetName: string, virtualmachineIndex: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.NetworkInterfaceListResult>>;
    /**
     * Gets all network interfaces in a virtual machine scale set.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualMachineScaleSetName The name of the virtual machine scale set.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    listVirtualMachineScaleSetNetworkInterfacesWithHttpOperationResponse(resourceGroupName: string, virtualMachineScaleSetName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.NetworkInterfaceListResult>>;
    /**
     * Get the specified network interface in a virtual machine scale set.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualMachineScaleSetName The name of the virtual machine scale set.
     *
     * @param {string} virtualmachineIndex The virtual machine index.
     *
     * @param {string} networkInterfaceName The name of the network interface.
     *
     * @param {NetworkInterfacesGetVirtualMachineScaleSetNetworkInterfaceOptionalParams} [options]
     * Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    getVirtualMachineScaleSetNetworkInterfaceWithHttpOperationResponse(resourceGroupName: string, virtualMachineScaleSetName: string, virtualmachineIndex: string, networkInterfaceName: string, options?: Models.NetworkInterfacesGetVirtualMachineScaleSetNetworkInterfaceOptionalParams): Promise<msRest.HttpOperationResponse<Models.NetworkInterface>>;
    /**
     * Get the specified network interface ip configuration in a virtual machine scale set.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualMachineScaleSetName The name of the virtual machine scale set.
     *
     * @param {string} virtualmachineIndex The virtual machine index.
     *
     * @param {string} networkInterfaceName The name of the network interface.
     *
     * @param {NetworkInterfacesListVirtualMachineScaleSetIpConfigurationsOptionalParams} [options]
     * Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    listVirtualMachineScaleSetIpConfigurationsWithHttpOperationResponse(resourceGroupName: string, virtualMachineScaleSetName: string, virtualmachineIndex: string, networkInterfaceName: string, options?: Models.NetworkInterfacesListVirtualMachineScaleSetIpConfigurationsOptionalParams): Promise<msRest.HttpOperationResponse<Models.NetworkInterfaceIPConfigurationListResult>>;
    /**
     * Get the specified network interface ip configuration in a virtual machine scale set.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualMachineScaleSetName The name of the virtual machine scale set.
     *
     * @param {string} virtualmachineIndex The virtual machine index.
     *
     * @param {string} networkInterfaceName The name of the network interface.
     *
     * @param {string} ipConfigurationName The name of the ip configuration.
     *
     * @param {NetworkInterfacesGetVirtualMachineScaleSetIpConfigurationOptionalParams} [options]
     * Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    getVirtualMachineScaleSetIpConfigurationWithHttpOperationResponse(resourceGroupName: string, virtualMachineScaleSetName: string, virtualmachineIndex: string, networkInterfaceName: string, ipConfigurationName: string, options?: Models.NetworkInterfacesGetVirtualMachineScaleSetIpConfigurationOptionalParams): Promise<msRest.HttpOperationResponse<Models.NetworkInterfaceIPConfiguration>>;
    /**
     * Deletes the specified network interface.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} networkInterfaceName The name of the network interface.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginDeleteMethodWithHttpOperationResponse(resourceGroupName: string, networkInterfaceName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<void>>;
    /**
     * Creates or updates a network interface.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} networkInterfaceName The name of the network interface.
     *
     * @param {NetworkInterface} parameters Parameters supplied to the create or update network
     * interface operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginCreateOrUpdateWithHttpOperationResponse(resourceGroupName: string, networkInterfaceName: string, parameters: Models.NetworkInterface, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.NetworkInterface>>;
    /**
     * Updates a network interface tags.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} networkInterfaceName The name of the network interface.
     *
     * @param {TagsObject} parameters Parameters supplied to update network interface tags.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginUpdateTagsWithHttpOperationResponse(resourceGroupName: string, networkInterfaceName: string, parameters: Models.TagsObject, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.NetworkInterface>>;
    /**
     * Gets all route tables applied to a network interface.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} networkInterfaceName The name of the network interface.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginGetEffectiveRouteTableWithHttpOperationResponse(resourceGroupName: string, networkInterfaceName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.EffectiveRouteListResult>>;
    /**
     * Gets all network security groups applied to a network interface.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} networkInterfaceName The name of the network interface.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginListEffectiveNetworkSecurityGroupsWithHttpOperationResponse(resourceGroupName: string, networkInterfaceName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.EffectiveNetworkSecurityGroupListResult>>;
    /**
     * Gets all network interfaces in a subscription.
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
    listAllNextWithHttpOperationResponse(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.NetworkInterfaceListResult>>;
    /**
     * Gets all network interfaces in a resource group.
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
    listNextWithHttpOperationResponse(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.NetworkInterfaceListResult>>;
    /**
     * Gets information about all network interfaces in a virtual machine in a virtual machine scale
     * set.
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
    listVirtualMachineScaleSetVMNetworkInterfacesNextWithHttpOperationResponse(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.NetworkInterfaceListResult>>;
    /**
     * Gets all network interfaces in a virtual machine scale set.
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
    listVirtualMachineScaleSetNetworkInterfacesNextWithHttpOperationResponse(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.NetworkInterfaceListResult>>;
    /**
     * Get the specified network interface ip configuration in a virtual machine scale set.
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
    listVirtualMachineScaleSetIpConfigurationsNextWithHttpOperationResponse(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.NetworkInterfaceIPConfigurationListResult>>;
    /**
     * Deletes the specified network interface.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} networkInterfaceName The name of the network interface.
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
    deleteMethod(resourceGroupName: string, networkInterfaceName: string): Promise<void>;
    deleteMethod(resourceGroupName: string, networkInterfaceName: string, options: msRest.RequestOptionsBase): Promise<void>;
    deleteMethod(resourceGroupName: string, networkInterfaceName: string, callback: msRest.ServiceCallback<void>): void;
    deleteMethod(resourceGroupName: string, networkInterfaceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * Gets information about the specified network interface.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} networkInterfaceName The name of the network interface.
     *
     * @param {NetworkInterfacesGetOptionalParams} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.NetworkInterface} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.NetworkInterface} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    get(resourceGroupName: string, networkInterfaceName: string): Promise<Models.NetworkInterface>;
    get(resourceGroupName: string, networkInterfaceName: string, options: Models.NetworkInterfacesGetOptionalParams): Promise<Models.NetworkInterface>;
    get(resourceGroupName: string, networkInterfaceName: string, callback: msRest.ServiceCallback<Models.NetworkInterface>): void;
    get(resourceGroupName: string, networkInterfaceName: string, options: Models.NetworkInterfacesGetOptionalParams, callback: msRest.ServiceCallback<Models.NetworkInterface>): void;
    /**
     * Creates or updates a network interface.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} networkInterfaceName The name of the network interface.
     *
     * @param {NetworkInterface} parameters Parameters supplied to the create or update network
     * interface operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.NetworkInterface} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.NetworkInterface} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    createOrUpdate(resourceGroupName: string, networkInterfaceName: string, parameters: Models.NetworkInterface): Promise<Models.NetworkInterface>;
    createOrUpdate(resourceGroupName: string, networkInterfaceName: string, parameters: Models.NetworkInterface, options: msRest.RequestOptionsBase): Promise<Models.NetworkInterface>;
    createOrUpdate(resourceGroupName: string, networkInterfaceName: string, parameters: Models.NetworkInterface, callback: msRest.ServiceCallback<Models.NetworkInterface>): void;
    createOrUpdate(resourceGroupName: string, networkInterfaceName: string, parameters: Models.NetworkInterface, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.NetworkInterface>): void;
    /**
     * Updates a network interface tags.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} networkInterfaceName The name of the network interface.
     *
     * @param {TagsObject} parameters Parameters supplied to update network interface tags.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.NetworkInterface} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.NetworkInterface} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    updateTags(resourceGroupName: string, networkInterfaceName: string, parameters: Models.TagsObject): Promise<Models.NetworkInterface>;
    updateTags(resourceGroupName: string, networkInterfaceName: string, parameters: Models.TagsObject, options: msRest.RequestOptionsBase): Promise<Models.NetworkInterface>;
    updateTags(resourceGroupName: string, networkInterfaceName: string, parameters: Models.TagsObject, callback: msRest.ServiceCallback<Models.NetworkInterface>): void;
    updateTags(resourceGroupName: string, networkInterfaceName: string, parameters: Models.TagsObject, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.NetworkInterface>): void;
    /**
     * Gets all network interfaces in a subscription.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.NetworkInterfaceListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.NetworkInterfaceListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listAll(): Promise<Models.NetworkInterfaceListResult>;
    listAll(options: msRest.RequestOptionsBase): Promise<Models.NetworkInterfaceListResult>;
    listAll(callback: msRest.ServiceCallback<Models.NetworkInterfaceListResult>): void;
    listAll(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.NetworkInterfaceListResult>): void;
    /**
     * Gets all network interfaces in a resource group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.NetworkInterfaceListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.NetworkInterfaceListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    list(resourceGroupName: string): Promise<Models.NetworkInterfaceListResult>;
    list(resourceGroupName: string, options: msRest.RequestOptionsBase): Promise<Models.NetworkInterfaceListResult>;
    list(resourceGroupName: string, callback: msRest.ServiceCallback<Models.NetworkInterfaceListResult>): void;
    list(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.NetworkInterfaceListResult>): void;
    /**
     * Gets all route tables applied to a network interface.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} networkInterfaceName The name of the network interface.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.EffectiveRouteListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.EffectiveRouteListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    getEffectiveRouteTable(resourceGroupName: string, networkInterfaceName: string): Promise<Models.EffectiveRouteListResult>;
    getEffectiveRouteTable(resourceGroupName: string, networkInterfaceName: string, options: msRest.RequestOptionsBase): Promise<Models.EffectiveRouteListResult>;
    getEffectiveRouteTable(resourceGroupName: string, networkInterfaceName: string, callback: msRest.ServiceCallback<Models.EffectiveRouteListResult>): void;
    getEffectiveRouteTable(resourceGroupName: string, networkInterfaceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.EffectiveRouteListResult>): void;
    /**
     * Gets all network security groups applied to a network interface.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} networkInterfaceName The name of the network interface.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.EffectiveNetworkSecurityGroupListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.EffectiveNetworkSecurityGroupListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listEffectiveNetworkSecurityGroups(resourceGroupName: string, networkInterfaceName: string): Promise<Models.EffectiveNetworkSecurityGroupListResult>;
    listEffectiveNetworkSecurityGroups(resourceGroupName: string, networkInterfaceName: string, options: msRest.RequestOptionsBase): Promise<Models.EffectiveNetworkSecurityGroupListResult>;
    listEffectiveNetworkSecurityGroups(resourceGroupName: string, networkInterfaceName: string, callback: msRest.ServiceCallback<Models.EffectiveNetworkSecurityGroupListResult>): void;
    listEffectiveNetworkSecurityGroups(resourceGroupName: string, networkInterfaceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.EffectiveNetworkSecurityGroupListResult>): void;
    /**
     * Gets information about all network interfaces in a virtual machine in a virtual machine scale
     * set.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualMachineScaleSetName The name of the virtual machine scale set.
     *
     * @param {string} virtualmachineIndex The virtual machine index.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.NetworkInterfaceListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.NetworkInterfaceListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listVirtualMachineScaleSetVMNetworkInterfaces(resourceGroupName: string, virtualMachineScaleSetName: string, virtualmachineIndex: string): Promise<Models.NetworkInterfaceListResult>;
    listVirtualMachineScaleSetVMNetworkInterfaces(resourceGroupName: string, virtualMachineScaleSetName: string, virtualmachineIndex: string, options: msRest.RequestOptionsBase): Promise<Models.NetworkInterfaceListResult>;
    listVirtualMachineScaleSetVMNetworkInterfaces(resourceGroupName: string, virtualMachineScaleSetName: string, virtualmachineIndex: string, callback: msRest.ServiceCallback<Models.NetworkInterfaceListResult>): void;
    listVirtualMachineScaleSetVMNetworkInterfaces(resourceGroupName: string, virtualMachineScaleSetName: string, virtualmachineIndex: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.NetworkInterfaceListResult>): void;
    /**
     * Gets all network interfaces in a virtual machine scale set.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualMachineScaleSetName The name of the virtual machine scale set.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.NetworkInterfaceListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.NetworkInterfaceListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listVirtualMachineScaleSetNetworkInterfaces(resourceGroupName: string, virtualMachineScaleSetName: string): Promise<Models.NetworkInterfaceListResult>;
    listVirtualMachineScaleSetNetworkInterfaces(resourceGroupName: string, virtualMachineScaleSetName: string, options: msRest.RequestOptionsBase): Promise<Models.NetworkInterfaceListResult>;
    listVirtualMachineScaleSetNetworkInterfaces(resourceGroupName: string, virtualMachineScaleSetName: string, callback: msRest.ServiceCallback<Models.NetworkInterfaceListResult>): void;
    listVirtualMachineScaleSetNetworkInterfaces(resourceGroupName: string, virtualMachineScaleSetName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.NetworkInterfaceListResult>): void;
    /**
     * Get the specified network interface in a virtual machine scale set.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualMachineScaleSetName The name of the virtual machine scale set.
     *
     * @param {string} virtualmachineIndex The virtual machine index.
     *
     * @param {string} networkInterfaceName The name of the network interface.
     *
     * @param {NetworkInterfacesGetVirtualMachineScaleSetNetworkInterfaceOptionalParams} [options]
     * Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.NetworkInterface} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.NetworkInterface} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    getVirtualMachineScaleSetNetworkInterface(resourceGroupName: string, virtualMachineScaleSetName: string, virtualmachineIndex: string, networkInterfaceName: string): Promise<Models.NetworkInterface>;
    getVirtualMachineScaleSetNetworkInterface(resourceGroupName: string, virtualMachineScaleSetName: string, virtualmachineIndex: string, networkInterfaceName: string, options: Models.NetworkInterfacesGetVirtualMachineScaleSetNetworkInterfaceOptionalParams): Promise<Models.NetworkInterface>;
    getVirtualMachineScaleSetNetworkInterface(resourceGroupName: string, virtualMachineScaleSetName: string, virtualmachineIndex: string, networkInterfaceName: string, callback: msRest.ServiceCallback<Models.NetworkInterface>): void;
    getVirtualMachineScaleSetNetworkInterface(resourceGroupName: string, virtualMachineScaleSetName: string, virtualmachineIndex: string, networkInterfaceName: string, options: Models.NetworkInterfacesGetVirtualMachineScaleSetNetworkInterfaceOptionalParams, callback: msRest.ServiceCallback<Models.NetworkInterface>): void;
    /**
     * Get the specified network interface ip configuration in a virtual machine scale set.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualMachineScaleSetName The name of the virtual machine scale set.
     *
     * @param {string} virtualmachineIndex The virtual machine index.
     *
     * @param {string} networkInterfaceName The name of the network interface.
     *
     * @param {NetworkInterfacesListVirtualMachineScaleSetIpConfigurationsOptionalParams} [options]
     * Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.NetworkInterfaceIPConfigurationListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.NetworkInterfaceIPConfigurationListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listVirtualMachineScaleSetIpConfigurations(resourceGroupName: string, virtualMachineScaleSetName: string, virtualmachineIndex: string, networkInterfaceName: string): Promise<Models.NetworkInterfaceIPConfigurationListResult>;
    listVirtualMachineScaleSetIpConfigurations(resourceGroupName: string, virtualMachineScaleSetName: string, virtualmachineIndex: string, networkInterfaceName: string, options: Models.NetworkInterfacesListVirtualMachineScaleSetIpConfigurationsOptionalParams): Promise<Models.NetworkInterfaceIPConfigurationListResult>;
    listVirtualMachineScaleSetIpConfigurations(resourceGroupName: string, virtualMachineScaleSetName: string, virtualmachineIndex: string, networkInterfaceName: string, callback: msRest.ServiceCallback<Models.NetworkInterfaceIPConfigurationListResult>): void;
    listVirtualMachineScaleSetIpConfigurations(resourceGroupName: string, virtualMachineScaleSetName: string, virtualmachineIndex: string, networkInterfaceName: string, options: Models.NetworkInterfacesListVirtualMachineScaleSetIpConfigurationsOptionalParams, callback: msRest.ServiceCallback<Models.NetworkInterfaceIPConfigurationListResult>): void;
    /**
     * Get the specified network interface ip configuration in a virtual machine scale set.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualMachineScaleSetName The name of the virtual machine scale set.
     *
     * @param {string} virtualmachineIndex The virtual machine index.
     *
     * @param {string} networkInterfaceName The name of the network interface.
     *
     * @param {string} ipConfigurationName The name of the ip configuration.
     *
     * @param {NetworkInterfacesGetVirtualMachineScaleSetIpConfigurationOptionalParams} [options]
     * Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.NetworkInterfaceIPConfiguration} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.NetworkInterfaceIPConfiguration} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    getVirtualMachineScaleSetIpConfiguration(resourceGroupName: string, virtualMachineScaleSetName: string, virtualmachineIndex: string, networkInterfaceName: string, ipConfigurationName: string): Promise<Models.NetworkInterfaceIPConfiguration>;
    getVirtualMachineScaleSetIpConfiguration(resourceGroupName: string, virtualMachineScaleSetName: string, virtualmachineIndex: string, networkInterfaceName: string, ipConfigurationName: string, options: Models.NetworkInterfacesGetVirtualMachineScaleSetIpConfigurationOptionalParams): Promise<Models.NetworkInterfaceIPConfiguration>;
    getVirtualMachineScaleSetIpConfiguration(resourceGroupName: string, virtualMachineScaleSetName: string, virtualmachineIndex: string, networkInterfaceName: string, ipConfigurationName: string, callback: msRest.ServiceCallback<Models.NetworkInterfaceIPConfiguration>): void;
    getVirtualMachineScaleSetIpConfiguration(resourceGroupName: string, virtualMachineScaleSetName: string, virtualmachineIndex: string, networkInterfaceName: string, ipConfigurationName: string, options: Models.NetworkInterfacesGetVirtualMachineScaleSetIpConfigurationOptionalParams, callback: msRest.ServiceCallback<Models.NetworkInterfaceIPConfiguration>): void;
    /**
     * Deletes the specified network interface.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} networkInterfaceName The name of the network interface.
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
    beginDeleteMethod(resourceGroupName: string, networkInterfaceName: string): Promise<void>;
    beginDeleteMethod(resourceGroupName: string, networkInterfaceName: string, options: msRest.RequestOptionsBase): Promise<void>;
    beginDeleteMethod(resourceGroupName: string, networkInterfaceName: string, callback: msRest.ServiceCallback<void>): void;
    beginDeleteMethod(resourceGroupName: string, networkInterfaceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * Creates or updates a network interface.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} networkInterfaceName The name of the network interface.
     *
     * @param {NetworkInterface} parameters Parameters supplied to the create or update network
     * interface operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.NetworkInterface} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.NetworkInterface} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    beginCreateOrUpdate(resourceGroupName: string, networkInterfaceName: string, parameters: Models.NetworkInterface): Promise<Models.NetworkInterface>;
    beginCreateOrUpdate(resourceGroupName: string, networkInterfaceName: string, parameters: Models.NetworkInterface, options: msRest.RequestOptionsBase): Promise<Models.NetworkInterface>;
    beginCreateOrUpdate(resourceGroupName: string, networkInterfaceName: string, parameters: Models.NetworkInterface, callback: msRest.ServiceCallback<Models.NetworkInterface>): void;
    beginCreateOrUpdate(resourceGroupName: string, networkInterfaceName: string, parameters: Models.NetworkInterface, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.NetworkInterface>): void;
    /**
     * Updates a network interface tags.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} networkInterfaceName The name of the network interface.
     *
     * @param {TagsObject} parameters Parameters supplied to update network interface tags.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.NetworkInterface} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.NetworkInterface} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    beginUpdateTags(resourceGroupName: string, networkInterfaceName: string, parameters: Models.TagsObject): Promise<Models.NetworkInterface>;
    beginUpdateTags(resourceGroupName: string, networkInterfaceName: string, parameters: Models.TagsObject, options: msRest.RequestOptionsBase): Promise<Models.NetworkInterface>;
    beginUpdateTags(resourceGroupName: string, networkInterfaceName: string, parameters: Models.TagsObject, callback: msRest.ServiceCallback<Models.NetworkInterface>): void;
    beginUpdateTags(resourceGroupName: string, networkInterfaceName: string, parameters: Models.TagsObject, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.NetworkInterface>): void;
    /**
     * Gets all route tables applied to a network interface.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} networkInterfaceName The name of the network interface.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.EffectiveRouteListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.EffectiveRouteListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    beginGetEffectiveRouteTable(resourceGroupName: string, networkInterfaceName: string): Promise<Models.EffectiveRouteListResult>;
    beginGetEffectiveRouteTable(resourceGroupName: string, networkInterfaceName: string, options: msRest.RequestOptionsBase): Promise<Models.EffectiveRouteListResult>;
    beginGetEffectiveRouteTable(resourceGroupName: string, networkInterfaceName: string, callback: msRest.ServiceCallback<Models.EffectiveRouteListResult>): void;
    beginGetEffectiveRouteTable(resourceGroupName: string, networkInterfaceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.EffectiveRouteListResult>): void;
    /**
     * Gets all network security groups applied to a network interface.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} networkInterfaceName The name of the network interface.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.EffectiveNetworkSecurityGroupListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.EffectiveNetworkSecurityGroupListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    beginListEffectiveNetworkSecurityGroups(resourceGroupName: string, networkInterfaceName: string): Promise<Models.EffectiveNetworkSecurityGroupListResult>;
    beginListEffectiveNetworkSecurityGroups(resourceGroupName: string, networkInterfaceName: string, options: msRest.RequestOptionsBase): Promise<Models.EffectiveNetworkSecurityGroupListResult>;
    beginListEffectiveNetworkSecurityGroups(resourceGroupName: string, networkInterfaceName: string, callback: msRest.ServiceCallback<Models.EffectiveNetworkSecurityGroupListResult>): void;
    beginListEffectiveNetworkSecurityGroups(resourceGroupName: string, networkInterfaceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.EffectiveNetworkSecurityGroupListResult>): void;
    /**
     * Gets all network interfaces in a subscription.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call to List operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.NetworkInterfaceListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.NetworkInterfaceListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listAllNext(nextPageLink: string): Promise<Models.NetworkInterfaceListResult>;
    listAllNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.NetworkInterfaceListResult>;
    listAllNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.NetworkInterfaceListResult>): void;
    listAllNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.NetworkInterfaceListResult>): void;
    /**
     * Gets all network interfaces in a resource group.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call to List operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.NetworkInterfaceListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.NetworkInterfaceListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listNext(nextPageLink: string): Promise<Models.NetworkInterfaceListResult>;
    listNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.NetworkInterfaceListResult>;
    listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.NetworkInterfaceListResult>): void;
    listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.NetworkInterfaceListResult>): void;
    /**
     * Gets information about all network interfaces in a virtual machine in a virtual machine scale
     * set.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call to List operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.NetworkInterfaceListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.NetworkInterfaceListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listVirtualMachineScaleSetVMNetworkInterfacesNext(nextPageLink: string): Promise<Models.NetworkInterfaceListResult>;
    listVirtualMachineScaleSetVMNetworkInterfacesNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.NetworkInterfaceListResult>;
    listVirtualMachineScaleSetVMNetworkInterfacesNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.NetworkInterfaceListResult>): void;
    listVirtualMachineScaleSetVMNetworkInterfacesNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.NetworkInterfaceListResult>): void;
    /**
     * Gets all network interfaces in a virtual machine scale set.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call to List operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.NetworkInterfaceListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.NetworkInterfaceListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listVirtualMachineScaleSetNetworkInterfacesNext(nextPageLink: string): Promise<Models.NetworkInterfaceListResult>;
    listVirtualMachineScaleSetNetworkInterfacesNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.NetworkInterfaceListResult>;
    listVirtualMachineScaleSetNetworkInterfacesNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.NetworkInterfaceListResult>): void;
    listVirtualMachineScaleSetNetworkInterfacesNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.NetworkInterfaceListResult>): void;
    /**
     * Get the specified network interface ip configuration in a virtual machine scale set.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call to List operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.NetworkInterfaceIPConfigurationListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.NetworkInterfaceIPConfigurationListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listVirtualMachineScaleSetIpConfigurationsNext(nextPageLink: string): Promise<Models.NetworkInterfaceIPConfigurationListResult>;
    listVirtualMachineScaleSetIpConfigurationsNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.NetworkInterfaceIPConfigurationListResult>;
    listVirtualMachineScaleSetIpConfigurationsNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.NetworkInterfaceIPConfigurationListResult>): void;
    listVirtualMachineScaleSetIpConfigurationsNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.NetworkInterfaceIPConfigurationListResult>): void;
}
