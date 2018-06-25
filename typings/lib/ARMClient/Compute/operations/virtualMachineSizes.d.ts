import * as msRest from "ms-rest-js";
import * as Models from "../models";
import { ComputeManagementClientContext } from "../computeManagementClientContext";
/** Class representing a VirtualMachineSizes. */
export declare class VirtualMachineSizes {
    private readonly client;
    private readonly serializer;
    /**
     * Create a VirtualMachineSizes.
     * @param {ComputeManagementClientContext} client Reference to the service client.
     */
    constructor(client: ComputeManagementClientContext);
    /**
     * Lists all available virtual machine sizes for a subscription in a location.
     *
     * @param {string} location The location upon which virtual-machine-sizes is queried.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    listWithHttpOperationResponse(location: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.VirtualMachineSizeListResult>>;
    /**
     * Lists all available virtual machine sizes for a subscription in a location.
     *
     * @param {string} location The location upon which virtual-machine-sizes is queried.
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
    list(location: string): Promise<Models.VirtualMachineSizeListResult>;
    list(location: string, options: msRest.RequestOptionsBase): Promise<Models.VirtualMachineSizeListResult>;
    list(location: string, callback: msRest.ServiceCallback<Models.VirtualMachineSizeListResult>): void;
    list(location: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VirtualMachineSizeListResult>): void;
}
