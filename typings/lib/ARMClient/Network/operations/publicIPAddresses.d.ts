import * as msRest from "ms-rest-js";
import * as Models from "../models";
import { NetworkManagementClientContext } from "../networkManagementClientContext";
/** Class representing a PublicIPAddresses. */
export declare class PublicIPAddresses {
    private readonly client;
    private readonly serializer;
    /**
     * Create a PublicIPAddresses.
     * @param {NetworkManagementClientContext} client Reference to the service client.
     */
    constructor(client: NetworkManagementClientContext);
    /**
     * Deletes the specified public IP address.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} publicIpAddressName The name of the subnet.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    deleteMethodWithHttpOperationResponse(resourceGroupName: string, publicIpAddressName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Gets the specified public IP address in a specified resource group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} publicIpAddressName The name of the subnet.
     *
     * @param {PublicIPAddressesGetOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    getWithHttpOperationResponse(resourceGroupName: string, publicIpAddressName: string, options?: Models.PublicIPAddressesGetOptionalParams): Promise<msRest.HttpOperationResponse<Models.PublicIPAddress>>;
    /**
     * Creates or updates a static or dynamic public IP address.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} publicIpAddressName The name of the public IP address.
     *
     * @param {PublicIPAddress} parameters Parameters supplied to the create or update public IP
     * address operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    createOrUpdateWithHttpOperationResponse(resourceGroupName: string, publicIpAddressName: string, parameters: Models.PublicIPAddress, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Updates public IP address tags.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} publicIpAddressName The name of the public IP address.
     *
     * @param {TagsObject} parameters Parameters supplied to update public IP address tags.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    updateTagsWithHttpOperationResponse(resourceGroupName: string, publicIpAddressName: string, parameters: Models.TagsObject, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Gets all the public IP addresses in a subscription.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    listAllWithHttpOperationResponse(options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.PublicIPAddressListResult>>;
    /**
     * Gets all public IP addresses in a resource group.
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
    listWithHttpOperationResponse(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.PublicIPAddressListResult>>;
    /**
     * Gets information about all public IP addresses on a virtual machine scale set level.
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
    listVirtualMachineScaleSetPublicIPAddressesWithHttpOperationResponse(resourceGroupName: string, virtualMachineScaleSetName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.PublicIPAddressListResult>>;
    /**
     * Gets information about all public IP addresses in a virtual machine IP configuration in a
     * virtual machine scale set.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualMachineScaleSetName The name of the virtual machine scale set.
     *
     * @param {string} virtualmachineIndex The virtual machine index.
     *
     * @param {string} networkInterfaceName The network interface name.
     *
     * @param {string} ipConfigurationName The IP configuration name.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    listVirtualMachineScaleSetVMPublicIPAddressesWithHttpOperationResponse(resourceGroupName: string, virtualMachineScaleSetName: string, virtualmachineIndex: string, networkInterfaceName: string, ipConfigurationName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.PublicIPAddressListResult>>;
    /**
     * Get the specified public IP address in a virtual machine scale set.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualMachineScaleSetName The name of the virtual machine scale set.
     *
     * @param {string} virtualmachineIndex The virtual machine index.
     *
     * @param {string} networkInterfaceName The name of the network interface.
     *
     * @param {string} ipConfigurationName The name of the IP configuration.
     *
     * @param {string} publicIpAddressName The name of the public IP Address.
     *
     * @param {PublicIPAddressesGetVirtualMachineScaleSetPublicIPAddressOptionalParams} [options]
     * Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    getVirtualMachineScaleSetPublicIPAddressWithHttpOperationResponse(resourceGroupName: string, virtualMachineScaleSetName: string, virtualmachineIndex: string, networkInterfaceName: string, ipConfigurationName: string, publicIpAddressName: string, options?: Models.PublicIPAddressesGetVirtualMachineScaleSetPublicIPAddressOptionalParams): Promise<msRest.HttpOperationResponse<Models.PublicIPAddress>>;
    /**
     * Deletes the specified public IP address.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} publicIpAddressName The name of the subnet.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginDeleteMethodWithHttpOperationResponse(resourceGroupName: string, publicIpAddressName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<void>>;
    /**
     * Creates or updates a static or dynamic public IP address.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} publicIpAddressName The name of the public IP address.
     *
     * @param {PublicIPAddress} parameters Parameters supplied to the create or update public IP
     * address operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginCreateOrUpdateWithHttpOperationResponse(resourceGroupName: string, publicIpAddressName: string, parameters: Models.PublicIPAddress, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.PublicIPAddress>>;
    /**
     * Updates public IP address tags.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} publicIpAddressName The name of the public IP address.
     *
     * @param {TagsObject} parameters Parameters supplied to update public IP address tags.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginUpdateTagsWithHttpOperationResponse(resourceGroupName: string, publicIpAddressName: string, parameters: Models.TagsObject, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.PublicIPAddress>>;
    /**
     * Gets all the public IP addresses in a subscription.
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
    listAllNextWithHttpOperationResponse(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.PublicIPAddressListResult>>;
    /**
     * Gets all public IP addresses in a resource group.
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
    listNextWithHttpOperationResponse(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.PublicIPAddressListResult>>;
    /**
     * Gets information about all public IP addresses on a virtual machine scale set level.
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
    listVirtualMachineScaleSetPublicIPAddressesNextWithHttpOperationResponse(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.PublicIPAddressListResult>>;
    /**
     * Gets information about all public IP addresses in a virtual machine IP configuration in a
     * virtual machine scale set.
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
    listVirtualMachineScaleSetVMPublicIPAddressesNextWithHttpOperationResponse(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.PublicIPAddressListResult>>;
    /**
     * Deletes the specified public IP address.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} publicIpAddressName The name of the subnet.
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
    deleteMethod(resourceGroupName: string, publicIpAddressName: string): Promise<void>;
    deleteMethod(resourceGroupName: string, publicIpAddressName: string, options: msRest.RequestOptionsBase): Promise<void>;
    deleteMethod(resourceGroupName: string, publicIpAddressName: string, callback: msRest.ServiceCallback<void>): void;
    deleteMethod(resourceGroupName: string, publicIpAddressName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * Gets the specified public IP address in a specified resource group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} publicIpAddressName The name of the subnet.
     *
     * @param {PublicIPAddressesGetOptionalParams} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.PublicIPAddress} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.PublicIPAddress} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    get(resourceGroupName: string, publicIpAddressName: string): Promise<Models.PublicIPAddress>;
    get(resourceGroupName: string, publicIpAddressName: string, options: Models.PublicIPAddressesGetOptionalParams): Promise<Models.PublicIPAddress>;
    get(resourceGroupName: string, publicIpAddressName: string, callback: msRest.ServiceCallback<Models.PublicIPAddress>): void;
    get(resourceGroupName: string, publicIpAddressName: string, options: Models.PublicIPAddressesGetOptionalParams, callback: msRest.ServiceCallback<Models.PublicIPAddress>): void;
    /**
     * Creates or updates a static or dynamic public IP address.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} publicIpAddressName The name of the public IP address.
     *
     * @param {PublicIPAddress} parameters Parameters supplied to the create or update public IP
     * address operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.PublicIPAddress} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.PublicIPAddress} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    createOrUpdate(resourceGroupName: string, publicIpAddressName: string, parameters: Models.PublicIPAddress): Promise<Models.PublicIPAddress>;
    createOrUpdate(resourceGroupName: string, publicIpAddressName: string, parameters: Models.PublicIPAddress, options: msRest.RequestOptionsBase): Promise<Models.PublicIPAddress>;
    createOrUpdate(resourceGroupName: string, publicIpAddressName: string, parameters: Models.PublicIPAddress, callback: msRest.ServiceCallback<Models.PublicIPAddress>): void;
    createOrUpdate(resourceGroupName: string, publicIpAddressName: string, parameters: Models.PublicIPAddress, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PublicIPAddress>): void;
    /**
     * Updates public IP address tags.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} publicIpAddressName The name of the public IP address.
     *
     * @param {TagsObject} parameters Parameters supplied to update public IP address tags.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.PublicIPAddress} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.PublicIPAddress} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    updateTags(resourceGroupName: string, publicIpAddressName: string, parameters: Models.TagsObject): Promise<Models.PublicIPAddress>;
    updateTags(resourceGroupName: string, publicIpAddressName: string, parameters: Models.TagsObject, options: msRest.RequestOptionsBase): Promise<Models.PublicIPAddress>;
    updateTags(resourceGroupName: string, publicIpAddressName: string, parameters: Models.TagsObject, callback: msRest.ServiceCallback<Models.PublicIPAddress>): void;
    updateTags(resourceGroupName: string, publicIpAddressName: string, parameters: Models.TagsObject, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PublicIPAddress>): void;
    /**
     * Gets all the public IP addresses in a subscription.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.PublicIPAddressListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.PublicIPAddressListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listAll(): Promise<Models.PublicIPAddressListResult>;
    listAll(options: msRest.RequestOptionsBase): Promise<Models.PublicIPAddressListResult>;
    listAll(callback: msRest.ServiceCallback<Models.PublicIPAddressListResult>): void;
    listAll(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PublicIPAddressListResult>): void;
    /**
     * Gets all public IP addresses in a resource group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.PublicIPAddressListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.PublicIPAddressListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    list(resourceGroupName: string): Promise<Models.PublicIPAddressListResult>;
    list(resourceGroupName: string, options: msRest.RequestOptionsBase): Promise<Models.PublicIPAddressListResult>;
    list(resourceGroupName: string, callback: msRest.ServiceCallback<Models.PublicIPAddressListResult>): void;
    list(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PublicIPAddressListResult>): void;
    /**
     * Gets information about all public IP addresses on a virtual machine scale set level.
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
     *                      {Models.PublicIPAddressListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.PublicIPAddressListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listVirtualMachineScaleSetPublicIPAddresses(resourceGroupName: string, virtualMachineScaleSetName: string): Promise<Models.PublicIPAddressListResult>;
    listVirtualMachineScaleSetPublicIPAddresses(resourceGroupName: string, virtualMachineScaleSetName: string, options: msRest.RequestOptionsBase): Promise<Models.PublicIPAddressListResult>;
    listVirtualMachineScaleSetPublicIPAddresses(resourceGroupName: string, virtualMachineScaleSetName: string, callback: msRest.ServiceCallback<Models.PublicIPAddressListResult>): void;
    listVirtualMachineScaleSetPublicIPAddresses(resourceGroupName: string, virtualMachineScaleSetName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PublicIPAddressListResult>): void;
    /**
     * Gets information about all public IP addresses in a virtual machine IP configuration in a
     * virtual machine scale set.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualMachineScaleSetName The name of the virtual machine scale set.
     *
     * @param {string} virtualmachineIndex The virtual machine index.
     *
     * @param {string} networkInterfaceName The network interface name.
     *
     * @param {string} ipConfigurationName The IP configuration name.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.PublicIPAddressListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.PublicIPAddressListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listVirtualMachineScaleSetVMPublicIPAddresses(resourceGroupName: string, virtualMachineScaleSetName: string, virtualmachineIndex: string, networkInterfaceName: string, ipConfigurationName: string): Promise<Models.PublicIPAddressListResult>;
    listVirtualMachineScaleSetVMPublicIPAddresses(resourceGroupName: string, virtualMachineScaleSetName: string, virtualmachineIndex: string, networkInterfaceName: string, ipConfigurationName: string, options: msRest.RequestOptionsBase): Promise<Models.PublicIPAddressListResult>;
    listVirtualMachineScaleSetVMPublicIPAddresses(resourceGroupName: string, virtualMachineScaleSetName: string, virtualmachineIndex: string, networkInterfaceName: string, ipConfigurationName: string, callback: msRest.ServiceCallback<Models.PublicIPAddressListResult>): void;
    listVirtualMachineScaleSetVMPublicIPAddresses(resourceGroupName: string, virtualMachineScaleSetName: string, virtualmachineIndex: string, networkInterfaceName: string, ipConfigurationName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PublicIPAddressListResult>): void;
    /**
     * Get the specified public IP address in a virtual machine scale set.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualMachineScaleSetName The name of the virtual machine scale set.
     *
     * @param {string} virtualmachineIndex The virtual machine index.
     *
     * @param {string} networkInterfaceName The name of the network interface.
     *
     * @param {string} ipConfigurationName The name of the IP configuration.
     *
     * @param {string} publicIpAddressName The name of the public IP Address.
     *
     * @param {PublicIPAddressesGetVirtualMachineScaleSetPublicIPAddressOptionalParams} [options]
     * Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.PublicIPAddress} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.PublicIPAddress} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    getVirtualMachineScaleSetPublicIPAddress(resourceGroupName: string, virtualMachineScaleSetName: string, virtualmachineIndex: string, networkInterfaceName: string, ipConfigurationName: string, publicIpAddressName: string): Promise<Models.PublicIPAddress>;
    getVirtualMachineScaleSetPublicIPAddress(resourceGroupName: string, virtualMachineScaleSetName: string, virtualmachineIndex: string, networkInterfaceName: string, ipConfigurationName: string, publicIpAddressName: string, options: Models.PublicIPAddressesGetVirtualMachineScaleSetPublicIPAddressOptionalParams): Promise<Models.PublicIPAddress>;
    getVirtualMachineScaleSetPublicIPAddress(resourceGroupName: string, virtualMachineScaleSetName: string, virtualmachineIndex: string, networkInterfaceName: string, ipConfigurationName: string, publicIpAddressName: string, callback: msRest.ServiceCallback<Models.PublicIPAddress>): void;
    getVirtualMachineScaleSetPublicIPAddress(resourceGroupName: string, virtualMachineScaleSetName: string, virtualmachineIndex: string, networkInterfaceName: string, ipConfigurationName: string, publicIpAddressName: string, options: Models.PublicIPAddressesGetVirtualMachineScaleSetPublicIPAddressOptionalParams, callback: msRest.ServiceCallback<Models.PublicIPAddress>): void;
    /**
     * Deletes the specified public IP address.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} publicIpAddressName The name of the subnet.
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
    beginDeleteMethod(resourceGroupName: string, publicIpAddressName: string): Promise<void>;
    beginDeleteMethod(resourceGroupName: string, publicIpAddressName: string, options: msRest.RequestOptionsBase): Promise<void>;
    beginDeleteMethod(resourceGroupName: string, publicIpAddressName: string, callback: msRest.ServiceCallback<void>): void;
    beginDeleteMethod(resourceGroupName: string, publicIpAddressName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * Creates or updates a static or dynamic public IP address.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} publicIpAddressName The name of the public IP address.
     *
     * @param {PublicIPAddress} parameters Parameters supplied to the create or update public IP
     * address operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.PublicIPAddress} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.PublicIPAddress} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    beginCreateOrUpdate(resourceGroupName: string, publicIpAddressName: string, parameters: Models.PublicIPAddress): Promise<Models.PublicIPAddress>;
    beginCreateOrUpdate(resourceGroupName: string, publicIpAddressName: string, parameters: Models.PublicIPAddress, options: msRest.RequestOptionsBase): Promise<Models.PublicIPAddress>;
    beginCreateOrUpdate(resourceGroupName: string, publicIpAddressName: string, parameters: Models.PublicIPAddress, callback: msRest.ServiceCallback<Models.PublicIPAddress>): void;
    beginCreateOrUpdate(resourceGroupName: string, publicIpAddressName: string, parameters: Models.PublicIPAddress, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PublicIPAddress>): void;
    /**
     * Updates public IP address tags.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} publicIpAddressName The name of the public IP address.
     *
     * @param {TagsObject} parameters Parameters supplied to update public IP address tags.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.PublicIPAddress} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.PublicIPAddress} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    beginUpdateTags(resourceGroupName: string, publicIpAddressName: string, parameters: Models.TagsObject): Promise<Models.PublicIPAddress>;
    beginUpdateTags(resourceGroupName: string, publicIpAddressName: string, parameters: Models.TagsObject, options: msRest.RequestOptionsBase): Promise<Models.PublicIPAddress>;
    beginUpdateTags(resourceGroupName: string, publicIpAddressName: string, parameters: Models.TagsObject, callback: msRest.ServiceCallback<Models.PublicIPAddress>): void;
    beginUpdateTags(resourceGroupName: string, publicIpAddressName: string, parameters: Models.TagsObject, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PublicIPAddress>): void;
    /**
     * Gets all the public IP addresses in a subscription.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call to List operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.PublicIPAddressListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.PublicIPAddressListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listAllNext(nextPageLink: string): Promise<Models.PublicIPAddressListResult>;
    listAllNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.PublicIPAddressListResult>;
    listAllNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.PublicIPAddressListResult>): void;
    listAllNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PublicIPAddressListResult>): void;
    /**
     * Gets all public IP addresses in a resource group.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call to List operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.PublicIPAddressListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.PublicIPAddressListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listNext(nextPageLink: string): Promise<Models.PublicIPAddressListResult>;
    listNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.PublicIPAddressListResult>;
    listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.PublicIPAddressListResult>): void;
    listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PublicIPAddressListResult>): void;
    /**
     * Gets information about all public IP addresses on a virtual machine scale set level.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call to List operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.PublicIPAddressListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.PublicIPAddressListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listVirtualMachineScaleSetPublicIPAddressesNext(nextPageLink: string): Promise<Models.PublicIPAddressListResult>;
    listVirtualMachineScaleSetPublicIPAddressesNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.PublicIPAddressListResult>;
    listVirtualMachineScaleSetPublicIPAddressesNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.PublicIPAddressListResult>): void;
    listVirtualMachineScaleSetPublicIPAddressesNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PublicIPAddressListResult>): void;
    /**
     * Gets information about all public IP addresses in a virtual machine IP configuration in a
     * virtual machine scale set.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call to List operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.PublicIPAddressListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.PublicIPAddressListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listVirtualMachineScaleSetVMPublicIPAddressesNext(nextPageLink: string): Promise<Models.PublicIPAddressListResult>;
    listVirtualMachineScaleSetVMPublicIPAddressesNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.PublicIPAddressListResult>;
    listVirtualMachineScaleSetVMPublicIPAddressesNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.PublicIPAddressListResult>): void;
    listVirtualMachineScaleSetVMPublicIPAddressesNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PublicIPAddressListResult>): void;
}
