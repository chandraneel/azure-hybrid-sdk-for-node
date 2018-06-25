import * as msRest from "ms-rest-js";
import * as Models from "../models";
import { ComputeManagementClientContext } from "../computeManagementClientContext";
/** Class representing a Images. */
export declare class Images {
    private readonly client;
    private readonly serializer;
    /**
     * Create a Images.
     * @param {ComputeManagementClientContext} client Reference to the service client.
     */
    constructor(client: ComputeManagementClientContext);
    /**
     * Create or update an image.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} imageName The name of the image.
     *
     * @param {Image} parameters Parameters supplied to the Create Image operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    createOrUpdateWithHttpOperationResponse(resourceGroupName: string, imageName: string, parameters: Models.Image, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Deletes an Image.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} imageName The name of the image.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    deleteMethodWithHttpOperationResponse(resourceGroupName: string, imageName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Gets an image.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} imageName The name of the image.
     *
     * @param {ImagesGetOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    getWithHttpOperationResponse(resourceGroupName: string, imageName: string, options?: Models.ImagesGetOptionalParams): Promise<msRest.HttpOperationResponse<Models.Image>>;
    /**
     * Gets the list of images under a resource group.
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
    listByResourceGroupWithHttpOperationResponse(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.ImageListResult>>;
    /**
     * Gets the list of Images in the subscription. Use nextLink property in the response to get the
     * next page of Images. Do this till nextLink is null to fetch all the Images.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    listWithHttpOperationResponse(options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.ImageListResult>>;
    /**
     * Create or update an image.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} imageName The name of the image.
     *
     * @param {Image} parameters Parameters supplied to the Create Image operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginCreateOrUpdateWithHttpOperationResponse(resourceGroupName: string, imageName: string, parameters: Models.Image, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.Image>>;
    /**
     * Deletes an Image.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} imageName The name of the image.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginDeleteMethodWithHttpOperationResponse(resourceGroupName: string, imageName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.OperationStatusResponse>>;
    /**
     * Gets the list of images under a resource group.
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
    listByResourceGroupNextWithHttpOperationResponse(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.ImageListResult>>;
    /**
     * Gets the list of Images in the subscription. Use nextLink property in the response to get the
     * next page of Images. Do this till nextLink is null to fetch all the Images.
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
    listNextWithHttpOperationResponse(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.ImageListResult>>;
    /**
     * Create or update an image.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} imageName The name of the image.
     *
     * @param {Image} parameters Parameters supplied to the Create Image operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.Image} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.Image} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    createOrUpdate(resourceGroupName: string, imageName: string, parameters: Models.Image): Promise<Models.Image>;
    createOrUpdate(resourceGroupName: string, imageName: string, parameters: Models.Image, options: msRest.RequestOptionsBase): Promise<Models.Image>;
    createOrUpdate(resourceGroupName: string, imageName: string, parameters: Models.Image, callback: msRest.ServiceCallback<Models.Image>): void;
    createOrUpdate(resourceGroupName: string, imageName: string, parameters: Models.Image, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Image>): void;
    /**
     * Deletes an Image.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} imageName The name of the image.
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
    deleteMethod(resourceGroupName: string, imageName: string): Promise<Models.OperationStatusResponse>;
    deleteMethod(resourceGroupName: string, imageName: string, options: msRest.RequestOptionsBase): Promise<Models.OperationStatusResponse>;
    deleteMethod(resourceGroupName: string, imageName: string, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    deleteMethod(resourceGroupName: string, imageName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    /**
     * Gets an image.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} imageName The name of the image.
     *
     * @param {ImagesGetOptionalParams} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.Image} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.Image} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    get(resourceGroupName: string, imageName: string): Promise<Models.Image>;
    get(resourceGroupName: string, imageName: string, options: Models.ImagesGetOptionalParams): Promise<Models.Image>;
    get(resourceGroupName: string, imageName: string, callback: msRest.ServiceCallback<Models.Image>): void;
    get(resourceGroupName: string, imageName: string, options: Models.ImagesGetOptionalParams, callback: msRest.ServiceCallback<Models.Image>): void;
    /**
     * Gets the list of images under a resource group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.ImageListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.ImageListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listByResourceGroup(resourceGroupName: string): Promise<Models.ImageListResult>;
    listByResourceGroup(resourceGroupName: string, options: msRest.RequestOptionsBase): Promise<Models.ImageListResult>;
    listByResourceGroup(resourceGroupName: string, callback: msRest.ServiceCallback<Models.ImageListResult>): void;
    listByResourceGroup(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ImageListResult>): void;
    /**
     * Gets the list of Images in the subscription. Use nextLink property in the response to get the
     * next page of Images. Do this till nextLink is null to fetch all the Images.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.ImageListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.ImageListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    list(): Promise<Models.ImageListResult>;
    list(options: msRest.RequestOptionsBase): Promise<Models.ImageListResult>;
    list(callback: msRest.ServiceCallback<Models.ImageListResult>): void;
    list(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ImageListResult>): void;
    /**
     * Create or update an image.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} imageName The name of the image.
     *
     * @param {Image} parameters Parameters supplied to the Create Image operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.Image} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.Image} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    beginCreateOrUpdate(resourceGroupName: string, imageName: string, parameters: Models.Image): Promise<Models.Image>;
    beginCreateOrUpdate(resourceGroupName: string, imageName: string, parameters: Models.Image, options: msRest.RequestOptionsBase): Promise<Models.Image>;
    beginCreateOrUpdate(resourceGroupName: string, imageName: string, parameters: Models.Image, callback: msRest.ServiceCallback<Models.Image>): void;
    beginCreateOrUpdate(resourceGroupName: string, imageName: string, parameters: Models.Image, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Image>): void;
    /**
     * Deletes an Image.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} imageName The name of the image.
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
    beginDeleteMethod(resourceGroupName: string, imageName: string): Promise<Models.OperationStatusResponse>;
    beginDeleteMethod(resourceGroupName: string, imageName: string, options: msRest.RequestOptionsBase): Promise<Models.OperationStatusResponse>;
    beginDeleteMethod(resourceGroupName: string, imageName: string, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    beginDeleteMethod(resourceGroupName: string, imageName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
    /**
     * Gets the list of images under a resource group.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call to List operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.ImageListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.ImageListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listByResourceGroupNext(nextPageLink: string): Promise<Models.ImageListResult>;
    listByResourceGroupNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.ImageListResult>;
    listByResourceGroupNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ImageListResult>): void;
    listByResourceGroupNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ImageListResult>): void;
    /**
     * Gets the list of Images in the subscription. Use nextLink property in the response to get the
     * next page of Images. Do this till nextLink is null to fetch all the Images.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call to List operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.ImageListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.ImageListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listNext(nextPageLink: string): Promise<Models.ImageListResult>;
    listNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.ImageListResult>;
    listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ImageListResult>): void;
    listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ImageListResult>): void;
}
