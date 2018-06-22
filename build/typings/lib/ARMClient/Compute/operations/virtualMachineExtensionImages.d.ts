import * as msRest from "ms-rest-js";
import * as Models from "../models";
import { ComputeManagementClientContext } from "../computeManagementClientContext";
/** Class representing a VirtualMachineExtensionImages. */
export declare class VirtualMachineExtensionImages {
    private readonly client;
    private readonly serializer;
    /**
     * Create a VirtualMachineExtensionImages.
     * @param {ComputeManagementClientContext} client Reference to the service client.
     */
    constructor(client: ComputeManagementClientContext);
    /**
     * Gets a virtual machine extension image.
     *
     * @param {string} location The name of a supported Azure region.
     *
     * @param {string} publisherName
     *
     * @param {string} type
     *
     * @param {string} version
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    getWithHttpOperationResponse(location: string, publisherName: string, type: string, version: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.VirtualMachineExtensionImage>>;
    /**
     * Gets a list of virtual machine extension image types.
     *
     * @param {string} location The name of a supported Azure region.
     *
     * @param {string} publisherName
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    listTypesWithHttpOperationResponse(location: string, publisherName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.VirtualMachineExtensionImage[]>>;
    /**
     * Gets a list of virtual machine extension image versions.
     *
     * @param {string} location The name of a supported Azure region.
     *
     * @param {string} publisherName
     *
     * @param {string} type
     *
     * @param {VirtualMachineExtensionImagesListVersionsOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    listVersionsWithHttpOperationResponse(location: string, publisherName: string, type: string, options?: Models.VirtualMachineExtensionImagesListVersionsOptionalParams): Promise<msRest.HttpOperationResponse<Models.VirtualMachineExtensionImage[]>>;
    /**
     * Gets a virtual machine extension image.
     *
     * @param {string} location The name of a supported Azure region.
     *
     * @param {string} publisherName
     *
     * @param {string} type
     *
     * @param {string} version
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.VirtualMachineExtensionImage} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.VirtualMachineExtensionImage} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    get(location: string, publisherName: string, type: string, version: string): Promise<Models.VirtualMachineExtensionImage>;
    get(location: string, publisherName: string, type: string, version: string, options: msRest.RequestOptionsBase): Promise<Models.VirtualMachineExtensionImage>;
    get(location: string, publisherName: string, type: string, version: string, callback: msRest.ServiceCallback<Models.VirtualMachineExtensionImage>): void;
    get(location: string, publisherName: string, type: string, version: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VirtualMachineExtensionImage>): void;
    /**
     * Gets a list of virtual machine extension image types.
     *
     * @param {string} location The name of a supported Azure region.
     *
     * @param {string} publisherName
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.VirtualMachineExtensionImage[]} [result]   - The deserialized result object if an error did not occur.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listTypes(location: string, publisherName: string): Promise<Models.VirtualMachineExtensionImage[]>;
    listTypes(location: string, publisherName: string, options: msRest.RequestOptionsBase): Promise<Models.VirtualMachineExtensionImage[]>;
    listTypes(location: string, publisherName: string, callback: msRest.ServiceCallback<Models.VirtualMachineExtensionImage[]>): void;
    listTypes(location: string, publisherName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VirtualMachineExtensionImage[]>): void;
    /**
     * Gets a list of virtual machine extension image versions.
     *
     * @param {string} location The name of a supported Azure region.
     *
     * @param {string} publisherName
     *
     * @param {string} type
     *
     * @param {VirtualMachineExtensionImagesListVersionsOptionalParams} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.VirtualMachineExtensionImage[]} [result]   - The deserialized result object if an error did not occur.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listVersions(location: string, publisherName: string, type: string): Promise<Models.VirtualMachineExtensionImage[]>;
    listVersions(location: string, publisherName: string, type: string, options: Models.VirtualMachineExtensionImagesListVersionsOptionalParams): Promise<Models.VirtualMachineExtensionImage[]>;
    listVersions(location: string, publisherName: string, type: string, callback: msRest.ServiceCallback<Models.VirtualMachineExtensionImage[]>): void;
    listVersions(location: string, publisherName: string, type: string, options: Models.VirtualMachineExtensionImagesListVersionsOptionalParams, callback: msRest.ServiceCallback<Models.VirtualMachineExtensionImage[]>): void;
}
