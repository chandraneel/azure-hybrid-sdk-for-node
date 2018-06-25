import * as msRest from "ms-rest-js";
import * as Models from "../models";
import { NetworkManagementClientContext } from "../networkManagementClientContext";
/** Class representing a RouteTables. */
export declare class RouteTables {
    private readonly client;
    private readonly serializer;
    /**
     * Create a RouteTables.
     * @param {NetworkManagementClientContext} client Reference to the service client.
     */
    constructor(client: NetworkManagementClientContext);
    /**
     * Deletes the specified route table.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} routeTableName The name of the route table.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    deleteMethodWithHttpOperationResponse(resourceGroupName: string, routeTableName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Gets the specified route table.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} routeTableName The name of the route table.
     *
     * @param {RouteTablesGetOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    getWithHttpOperationResponse(resourceGroupName: string, routeTableName: string, options?: Models.RouteTablesGetOptionalParams): Promise<msRest.HttpOperationResponse<Models.RouteTable>>;
    /**
     * Create or updates a route table in a specified resource group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} routeTableName The name of the route table.
     *
     * @param {RouteTable} parameters Parameters supplied to the create or update route table
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
    createOrUpdateWithHttpOperationResponse(resourceGroupName: string, routeTableName: string, parameters: Models.RouteTable, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Updates a route table tags.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} routeTableName The name of the route table.
     *
     * @param {TagsObject} parameters Parameters supplied to update route table tags.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    updateTagsWithHttpOperationResponse(resourceGroupName: string, routeTableName: string, parameters: Models.TagsObject, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Gets all route tables in a resource group.
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
    listWithHttpOperationResponse(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.RouteTableListResult>>;
    /**
     * Gets all route tables in a subscription.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    listAllWithHttpOperationResponse(options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.RouteTableListResult>>;
    /**
     * Deletes the specified route table.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} routeTableName The name of the route table.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginDeleteMethodWithHttpOperationResponse(resourceGroupName: string, routeTableName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<void>>;
    /**
     * Create or updates a route table in a specified resource group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} routeTableName The name of the route table.
     *
     * @param {RouteTable} parameters Parameters supplied to the create or update route table
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
    beginCreateOrUpdateWithHttpOperationResponse(resourceGroupName: string, routeTableName: string, parameters: Models.RouteTable, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.RouteTable>>;
    /**
     * Updates a route table tags.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} routeTableName The name of the route table.
     *
     * @param {TagsObject} parameters Parameters supplied to update route table tags.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginUpdateTagsWithHttpOperationResponse(resourceGroupName: string, routeTableName: string, parameters: Models.TagsObject, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.RouteTable>>;
    /**
     * Gets all route tables in a resource group.
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
    listNextWithHttpOperationResponse(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.RouteTableListResult>>;
    /**
     * Gets all route tables in a subscription.
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
    listAllNextWithHttpOperationResponse(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.RouteTableListResult>>;
    /**
     * Deletes the specified route table.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} routeTableName The name of the route table.
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
    deleteMethod(resourceGroupName: string, routeTableName: string): Promise<void>;
    deleteMethod(resourceGroupName: string, routeTableName: string, options: msRest.RequestOptionsBase): Promise<void>;
    deleteMethod(resourceGroupName: string, routeTableName: string, callback: msRest.ServiceCallback<void>): void;
    deleteMethod(resourceGroupName: string, routeTableName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * Gets the specified route table.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} routeTableName The name of the route table.
     *
     * @param {RouteTablesGetOptionalParams} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.RouteTable} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.RouteTable} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    get(resourceGroupName: string, routeTableName: string): Promise<Models.RouteTable>;
    get(resourceGroupName: string, routeTableName: string, options: Models.RouteTablesGetOptionalParams): Promise<Models.RouteTable>;
    get(resourceGroupName: string, routeTableName: string, callback: msRest.ServiceCallback<Models.RouteTable>): void;
    get(resourceGroupName: string, routeTableName: string, options: Models.RouteTablesGetOptionalParams, callback: msRest.ServiceCallback<Models.RouteTable>): void;
    /**
     * Create or updates a route table in a specified resource group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} routeTableName The name of the route table.
     *
     * @param {RouteTable} parameters Parameters supplied to the create or update route table
     * operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.RouteTable} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.RouteTable} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    createOrUpdate(resourceGroupName: string, routeTableName: string, parameters: Models.RouteTable): Promise<Models.RouteTable>;
    createOrUpdate(resourceGroupName: string, routeTableName: string, parameters: Models.RouteTable, options: msRest.RequestOptionsBase): Promise<Models.RouteTable>;
    createOrUpdate(resourceGroupName: string, routeTableName: string, parameters: Models.RouteTable, callback: msRest.ServiceCallback<Models.RouteTable>): void;
    createOrUpdate(resourceGroupName: string, routeTableName: string, parameters: Models.RouteTable, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RouteTable>): void;
    /**
     * Updates a route table tags.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} routeTableName The name of the route table.
     *
     * @param {TagsObject} parameters Parameters supplied to update route table tags.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.RouteTable} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.RouteTable} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    updateTags(resourceGroupName: string, routeTableName: string, parameters: Models.TagsObject): Promise<Models.RouteTable>;
    updateTags(resourceGroupName: string, routeTableName: string, parameters: Models.TagsObject, options: msRest.RequestOptionsBase): Promise<Models.RouteTable>;
    updateTags(resourceGroupName: string, routeTableName: string, parameters: Models.TagsObject, callback: msRest.ServiceCallback<Models.RouteTable>): void;
    updateTags(resourceGroupName: string, routeTableName: string, parameters: Models.TagsObject, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RouteTable>): void;
    /**
     * Gets all route tables in a resource group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.RouteTableListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.RouteTableListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    list(resourceGroupName: string): Promise<Models.RouteTableListResult>;
    list(resourceGroupName: string, options: msRest.RequestOptionsBase): Promise<Models.RouteTableListResult>;
    list(resourceGroupName: string, callback: msRest.ServiceCallback<Models.RouteTableListResult>): void;
    list(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RouteTableListResult>): void;
    /**
     * Gets all route tables in a subscription.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.RouteTableListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.RouteTableListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listAll(): Promise<Models.RouteTableListResult>;
    listAll(options: msRest.RequestOptionsBase): Promise<Models.RouteTableListResult>;
    listAll(callback: msRest.ServiceCallback<Models.RouteTableListResult>): void;
    listAll(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RouteTableListResult>): void;
    /**
     * Deletes the specified route table.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} routeTableName The name of the route table.
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
    beginDeleteMethod(resourceGroupName: string, routeTableName: string): Promise<void>;
    beginDeleteMethod(resourceGroupName: string, routeTableName: string, options: msRest.RequestOptionsBase): Promise<void>;
    beginDeleteMethod(resourceGroupName: string, routeTableName: string, callback: msRest.ServiceCallback<void>): void;
    beginDeleteMethod(resourceGroupName: string, routeTableName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * Create or updates a route table in a specified resource group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} routeTableName The name of the route table.
     *
     * @param {RouteTable} parameters Parameters supplied to the create or update route table
     * operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.RouteTable} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.RouteTable} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    beginCreateOrUpdate(resourceGroupName: string, routeTableName: string, parameters: Models.RouteTable): Promise<Models.RouteTable>;
    beginCreateOrUpdate(resourceGroupName: string, routeTableName: string, parameters: Models.RouteTable, options: msRest.RequestOptionsBase): Promise<Models.RouteTable>;
    beginCreateOrUpdate(resourceGroupName: string, routeTableName: string, parameters: Models.RouteTable, callback: msRest.ServiceCallback<Models.RouteTable>): void;
    beginCreateOrUpdate(resourceGroupName: string, routeTableName: string, parameters: Models.RouteTable, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RouteTable>): void;
    /**
     * Updates a route table tags.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} routeTableName The name of the route table.
     *
     * @param {TagsObject} parameters Parameters supplied to update route table tags.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.RouteTable} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.RouteTable} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    beginUpdateTags(resourceGroupName: string, routeTableName: string, parameters: Models.TagsObject): Promise<Models.RouteTable>;
    beginUpdateTags(resourceGroupName: string, routeTableName: string, parameters: Models.TagsObject, options: msRest.RequestOptionsBase): Promise<Models.RouteTable>;
    beginUpdateTags(resourceGroupName: string, routeTableName: string, parameters: Models.TagsObject, callback: msRest.ServiceCallback<Models.RouteTable>): void;
    beginUpdateTags(resourceGroupName: string, routeTableName: string, parameters: Models.TagsObject, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RouteTable>): void;
    /**
     * Gets all route tables in a resource group.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call to List operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.RouteTableListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.RouteTableListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listNext(nextPageLink: string): Promise<Models.RouteTableListResult>;
    listNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.RouteTableListResult>;
    listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.RouteTableListResult>): void;
    listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RouteTableListResult>): void;
    /**
     * Gets all route tables in a subscription.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call to List operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.RouteTableListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.RouteTableListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listAllNext(nextPageLink: string): Promise<Models.RouteTableListResult>;
    listAllNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.RouteTableListResult>;
    listAllNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.RouteTableListResult>): void;
    listAllNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RouteTableListResult>): void;
}
