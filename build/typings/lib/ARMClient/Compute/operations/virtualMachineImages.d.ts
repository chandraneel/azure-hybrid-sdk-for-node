import * as msRest from "ms-rest-js";
import * as Models from "../models";
import { ComputeManagementClientContext } from "../computeManagementClientContext";
/** Class representing a VirtualMachineImages. */
export declare class VirtualMachineImages {
    private readonly client;
    private readonly serializer;
    /**
     * Create a VirtualMachineImages.
     * @param {ComputeManagementClientContext} client Reference to the service client.
     */
    constructor(client: ComputeManagementClientContext);
    /**
     * Gets a virtual machine image.
     *
     * @param {string} location The name of a supported Azure region.
     *
     * @param {string} publisherName A valid image publisher.
     *
     * @param {string} offer A valid image publisher offer.
     *
     * @param {string} skus A valid image SKU.
     *
     * @param {string} version A valid image SKU version.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    getWithHttpOperationResponse(location: string, publisherName: string, offer: string, skus: string, version: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.VirtualMachineImage>>;
    /**
     * Gets a list of all virtual machine image versions for the specified location, publisher, offer,
     * and SKU.
     *
     * @param {string} location The name of a supported Azure region.
     *
     * @param {string} publisherName A valid image publisher.
     *
     * @param {string} offer A valid image publisher offer.
     *
     * @param {string} skus A valid image SKU.
     *
     * @param {VirtualMachineImagesListOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    listWithHttpOperationResponse(location: string, publisherName: string, offer: string, skus: string, options?: Models.VirtualMachineImagesListOptionalParams): Promise<msRest.HttpOperationResponse<Models.VirtualMachineImageResource[]>>;
    /**
     * Gets a list of virtual machine image offers for the specified location and publisher.
     *
     * @param {string} location The name of a supported Azure region.
     *
     * @param {string} publisherName A valid image publisher.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    listOffersWithHttpOperationResponse(location: string, publisherName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.VirtualMachineImageResource[]>>;
    /**
     * Gets a list of virtual machine image publishers for the specified Azure location.
     *
     * @param {string} location The name of a supported Azure region.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    listPublishersWithHttpOperationResponse(location: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.VirtualMachineImageResource[]>>;
    /**
     * Gets a list of virtual machine image SKUs for the specified location, publisher, and offer.
     *
     * @param {string} location The name of a supported Azure region.
     *
     * @param {string} publisherName A valid image publisher.
     *
     * @param {string} offer A valid image publisher offer.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    listSkusWithHttpOperationResponse(location: string, publisherName: string, offer: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.VirtualMachineImageResource[]>>;
    /**
     * Gets a virtual machine image.
     *
     * @param {string} location The name of a supported Azure region.
     *
     * @param {string} publisherName A valid image publisher.
     *
     * @param {string} offer A valid image publisher offer.
     *
     * @param {string} skus A valid image SKU.
     *
     * @param {string} version A valid image SKU version.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.VirtualMachineImage} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.VirtualMachineImage} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    get(location: string, publisherName: string, offer: string, skus: string, version: string): Promise<Models.VirtualMachineImage>;
    get(location: string, publisherName: string, offer: string, skus: string, version: string, options: msRest.RequestOptionsBase): Promise<Models.VirtualMachineImage>;
    get(location: string, publisherName: string, offer: string, skus: string, version: string, callback: msRest.ServiceCallback<Models.VirtualMachineImage>): void;
    get(location: string, publisherName: string, offer: string, skus: string, version: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VirtualMachineImage>): void;
    /**
     * Gets a list of all virtual machine image versions for the specified location, publisher, offer,
     * and SKU.
     *
     * @param {string} location The name of a supported Azure region.
     *
     * @param {string} publisherName A valid image publisher.
     *
     * @param {string} offer A valid image publisher offer.
     *
     * @param {string} skus A valid image SKU.
     *
     * @param {VirtualMachineImagesListOptionalParams} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.VirtualMachineImageResource[]} [result]   - The deserialized result object if an error did not occur.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    list(location: string, publisherName: string, offer: string, skus: string): Promise<Models.VirtualMachineImageResource[]>;
    list(location: string, publisherName: string, offer: string, skus: string, options: Models.VirtualMachineImagesListOptionalParams): Promise<Models.VirtualMachineImageResource[]>;
    list(location: string, publisherName: string, offer: string, skus: string, callback: msRest.ServiceCallback<Models.VirtualMachineImageResource[]>): void;
    list(location: string, publisherName: string, offer: string, skus: string, options: Models.VirtualMachineImagesListOptionalParams, callback: msRest.ServiceCallback<Models.VirtualMachineImageResource[]>): void;
    /**
     * Gets a list of virtual machine image offers for the specified location and publisher.
     *
     * @param {string} location The name of a supported Azure region.
     *
     * @param {string} publisherName A valid image publisher.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.VirtualMachineImageResource[]} [result]   - The deserialized result object if an error did not occur.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listOffers(location: string, publisherName: string): Promise<Models.VirtualMachineImageResource[]>;
    listOffers(location: string, publisherName: string, options: msRest.RequestOptionsBase): Promise<Models.VirtualMachineImageResource[]>;
    listOffers(location: string, publisherName: string, callback: msRest.ServiceCallback<Models.VirtualMachineImageResource[]>): void;
    listOffers(location: string, publisherName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VirtualMachineImageResource[]>): void;
    /**
     * Gets a list of virtual machine image publishers for the specified Azure location.
     *
     * @param {string} location The name of a supported Azure region.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.VirtualMachineImageResource[]} [result]   - The deserialized result object if an error did not occur.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listPublishers(location: string): Promise<Models.VirtualMachineImageResource[]>;
    listPublishers(location: string, options: msRest.RequestOptionsBase): Promise<Models.VirtualMachineImageResource[]>;
    listPublishers(location: string, callback: msRest.ServiceCallback<Models.VirtualMachineImageResource[]>): void;
    listPublishers(location: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VirtualMachineImageResource[]>): void;
    /**
     * Gets a list of virtual machine image SKUs for the specified location, publisher, and offer.
     *
     * @param {string} location The name of a supported Azure region.
     *
     * @param {string} publisherName A valid image publisher.
     *
     * @param {string} offer A valid image publisher offer.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.VirtualMachineImageResource[]} [result]   - The deserialized result object if an error did not occur.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listSkus(location: string, publisherName: string, offer: string): Promise<Models.VirtualMachineImageResource[]>;
    listSkus(location: string, publisherName: string, offer: string, options: msRest.RequestOptionsBase): Promise<Models.VirtualMachineImageResource[]>;
    listSkus(location: string, publisherName: string, offer: string, callback: msRest.ServiceCallback<Models.VirtualMachineImageResource[]>): void;
    listSkus(location: string, publisherName: string, offer: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VirtualMachineImageResource[]>): void;
}
