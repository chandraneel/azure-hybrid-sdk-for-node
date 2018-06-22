import * as msRest from "ms-rest-js";
import * as Models from "../models";
import { ComputeManagementClientContext } from "../computeManagementClientContext";
/** Class representing a AvailabilitySets. */
export declare class AvailabilitySets {
    private readonly client;
    private readonly serializer;
    /**
     * Create a AvailabilitySets.
     * @param {ComputeManagementClientContext} client Reference to the service client.
     */
    constructor(client: ComputeManagementClientContext);
    /**
     * Create or update an availability set.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} availabilitySetName The name of the availability set.
     *
     * @param {AvailabilitySet} parameters Parameters supplied to the Create Availability Set
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
    createOrUpdateWithHttpOperationResponse(resourceGroupName: string, availabilitySetName: string, parameters: Models.AvailabilitySet, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.AvailabilitySet>>;
    /**
     * Delete an availability set.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} availabilitySetName The name of the availability set.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    deleteMethodWithHttpOperationResponse(resourceGroupName: string, availabilitySetName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.OperationStatusResponse>>;
    /**
     * Retrieves information about an availability set.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} availabilitySetName The name of the availability set.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    getWithHttpOperationResponse(resourceGroupName: string, availabilitySetName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.AvailabilitySet>>;
    /**
     * Lists all availability sets in a resource group.
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
    listWithHttpOperationResponse(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.AvailabilitySetListResult>>;
    /**
     * Lists all available virtual machine sizes that can be used to create a new virtual machine in an
     * existing availability set.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} availabilitySetName The name of the availability set.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    listAvailableSizesWithHttpOperationResponse(resourceGroupName: string, availabilitySetName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.VirtualMachineSizeListResult>>;
    /**
     * Create or update an availability set.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} availabilitySetName The name of the availability set.
     *
     * @param {AvailabilitySet} parameters Parameters supplied to the Create Availability Set
     * operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.AvailabilitySet} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.AvailabilitySet} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    createOrUpdate(resourceGroupName: string, availabilitySetName: string, parameters: Models.AvailabilitySet): Promise<Models.AvailabilitySet>;
    createOrUpdate(resourceGroupName: string, availabilitySetName: string, parameters: Models.AvailabilitySet, options: msRest.RequestOptionsBase): Promise<Models.AvailabilitySet>;
    createOrUpdate(resourceGroupName: string, availabilitySetName: string, parameters: Models.AvailabilitySet, callback: msRest.ServiceCallback<Models.AvailabilitySet>): void;
    createOrUpdate(resourceGroupName: string, availabilitySetName: string, parameters: Models.AvailabilitySet, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AvailabilitySet>): void;
    /**
     * Delete an availability set.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} availabilitySetName The name of the availability set.
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
    deleteMethod(resourceGroupName: string, availabilitySetName: string): Promise<Models.OperationStatusResponse>;
    deleteMethod(resourceGroupName: string, availabilitySetName: string, options: msRest.RequestOptionsBase): Promise<Models.OperationStatusResponse>;
    deleteMethod(resourceGroupName: string, availabilitySetName: string, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    deleteMethod(resourceGroupName: string, availabilitySetName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    /**
     * Retrieves information about an availability set.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} availabilitySetName The name of the availability set.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.AvailabilitySet} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.AvailabilitySet} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    get(resourceGroupName: string, availabilitySetName: string): Promise<Models.AvailabilitySet>;
    get(resourceGroupName: string, availabilitySetName: string, options: msRest.RequestOptionsBase): Promise<Models.AvailabilitySet>;
    get(resourceGroupName: string, availabilitySetName: string, callback: msRest.ServiceCallback<Models.AvailabilitySet>): void;
    get(resourceGroupName: string, availabilitySetName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AvailabilitySet>): void;
    /**
     * Lists all availability sets in a resource group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.AvailabilitySetListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.AvailabilitySetListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    list(resourceGroupName: string): Promise<Models.AvailabilitySetListResult>;
    list(resourceGroupName: string, options: msRest.RequestOptionsBase): Promise<Models.AvailabilitySetListResult>;
    list(resourceGroupName: string, callback: msRest.ServiceCallback<Models.AvailabilitySetListResult>): void;
    list(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AvailabilitySetListResult>): void;
    /**
     * Lists all available virtual machine sizes that can be used to create a new virtual machine in an
     * existing availability set.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} availabilitySetName The name of the availability set.
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
    listAvailableSizes(resourceGroupName: string, availabilitySetName: string): Promise<Models.VirtualMachineSizeListResult>;
    listAvailableSizes(resourceGroupName: string, availabilitySetName: string, options: msRest.RequestOptionsBase): Promise<Models.VirtualMachineSizeListResult>;
    listAvailableSizes(resourceGroupName: string, availabilitySetName: string, callback: msRest.ServiceCallback<Models.VirtualMachineSizeListResult>): void;
    listAvailableSizes(resourceGroupName: string, availabilitySetName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VirtualMachineSizeListResult>): void;
}
