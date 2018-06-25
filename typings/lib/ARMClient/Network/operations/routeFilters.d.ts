import * as msRest from "ms-rest-js";
import * as Models from "../models";
import { NetworkManagementClientContext } from "../networkManagementClientContext";
/** Class representing a RouteFilters. */
export declare class RouteFilters {
    private readonly client;
    private readonly serializer;
    /**
     * Create a RouteFilters.
     * @param {NetworkManagementClientContext} client Reference to the service client.
     */
    constructor(client: NetworkManagementClientContext);
    /**
     * Deletes the specified route filter.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} routeFilterName The name of the route filter.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    deleteMethodWithHttpOperationResponse(resourceGroupName: string, routeFilterName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Gets the specified route filter.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} routeFilterName The name of the route filter.
     *
     * @param {RouteFiltersGetOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    getWithHttpOperationResponse(resourceGroupName: string, routeFilterName: string, options?: Models.RouteFiltersGetOptionalParams): Promise<msRest.HttpOperationResponse<Models.RouteFilter>>;
    /**
     * Creates or updates a route filter in a specified resource group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} routeFilterName The name of the route filter.
     *
     * @param {RouteFilter} routeFilterParameters Parameters supplied to the create or update route
     * filter operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    createOrUpdateWithHttpOperationResponse(resourceGroupName: string, routeFilterName: string, routeFilterParameters: Models.RouteFilter, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Updates a route filter in a specified resource group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} routeFilterName The name of the route filter.
     *
     * @param {PatchRouteFilter} routeFilterParameters Parameters supplied to the update route filter
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
    updateWithHttpOperationResponse(resourceGroupName: string, routeFilterName: string, routeFilterParameters: Models.PatchRouteFilter, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Gets all route filters in a resource group.
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
    listByResourceGroupWithHttpOperationResponse(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.RouteFilterListResult>>;
    /**
     * Gets all route filters in a subscription.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    listWithHttpOperationResponse(options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.RouteFilterListResult>>;
    /**
     * Deletes the specified route filter.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} routeFilterName The name of the route filter.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginDeleteMethodWithHttpOperationResponse(resourceGroupName: string, routeFilterName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<void>>;
    /**
     * Creates or updates a route filter in a specified resource group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} routeFilterName The name of the route filter.
     *
     * @param {RouteFilter} routeFilterParameters Parameters supplied to the create or update route
     * filter operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginCreateOrUpdateWithHttpOperationResponse(resourceGroupName: string, routeFilterName: string, routeFilterParameters: Models.RouteFilter, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.RouteFilter>>;
    /**
     * Updates a route filter in a specified resource group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} routeFilterName The name of the route filter.
     *
     * @param {PatchRouteFilter} routeFilterParameters Parameters supplied to the update route filter
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
    beginUpdateWithHttpOperationResponse(resourceGroupName: string, routeFilterName: string, routeFilterParameters: Models.PatchRouteFilter, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.RouteFilter>>;
    /**
     * Gets all route filters in a resource group.
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
    listByResourceGroupNextWithHttpOperationResponse(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.RouteFilterListResult>>;
    /**
     * Gets all route filters in a subscription.
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
    listNextWithHttpOperationResponse(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.RouteFilterListResult>>;
    /**
     * Deletes the specified route filter.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} routeFilterName The name of the route filter.
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
    deleteMethod(resourceGroupName: string, routeFilterName: string): Promise<void>;
    deleteMethod(resourceGroupName: string, routeFilterName: string, options: msRest.RequestOptionsBase): Promise<void>;
    deleteMethod(resourceGroupName: string, routeFilterName: string, callback: msRest.ServiceCallback<void>): void;
    deleteMethod(resourceGroupName: string, routeFilterName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * Gets the specified route filter.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} routeFilterName The name of the route filter.
     *
     * @param {RouteFiltersGetOptionalParams} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.RouteFilter} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.RouteFilter} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    get(resourceGroupName: string, routeFilterName: string): Promise<Models.RouteFilter>;
    get(resourceGroupName: string, routeFilterName: string, options: Models.RouteFiltersGetOptionalParams): Promise<Models.RouteFilter>;
    get(resourceGroupName: string, routeFilterName: string, callback: msRest.ServiceCallback<Models.RouteFilter>): void;
    get(resourceGroupName: string, routeFilterName: string, options: Models.RouteFiltersGetOptionalParams, callback: msRest.ServiceCallback<Models.RouteFilter>): void;
    /**
     * Creates or updates a route filter in a specified resource group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} routeFilterName The name of the route filter.
     *
     * @param {RouteFilter} routeFilterParameters Parameters supplied to the create or update route
     * filter operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.RouteFilter} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.RouteFilter} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    createOrUpdate(resourceGroupName: string, routeFilterName: string, routeFilterParameters: Models.RouteFilter): Promise<Models.RouteFilter>;
    createOrUpdate(resourceGroupName: string, routeFilterName: string, routeFilterParameters: Models.RouteFilter, options: msRest.RequestOptionsBase): Promise<Models.RouteFilter>;
    createOrUpdate(resourceGroupName: string, routeFilterName: string, routeFilterParameters: Models.RouteFilter, callback: msRest.ServiceCallback<Models.RouteFilter>): void;
    createOrUpdate(resourceGroupName: string, routeFilterName: string, routeFilterParameters: Models.RouteFilter, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RouteFilter>): void;
    /**
     * Updates a route filter in a specified resource group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} routeFilterName The name of the route filter.
     *
     * @param {PatchRouteFilter} routeFilterParameters Parameters supplied to the update route filter
     * operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.RouteFilter} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.RouteFilter} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    update(resourceGroupName: string, routeFilterName: string, routeFilterParameters: Models.PatchRouteFilter): Promise<Models.RouteFilter>;
    update(resourceGroupName: string, routeFilterName: string, routeFilterParameters: Models.PatchRouteFilter, options: msRest.RequestOptionsBase): Promise<Models.RouteFilter>;
    update(resourceGroupName: string, routeFilterName: string, routeFilterParameters: Models.PatchRouteFilter, callback: msRest.ServiceCallback<Models.RouteFilter>): void;
    update(resourceGroupName: string, routeFilterName: string, routeFilterParameters: Models.PatchRouteFilter, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RouteFilter>): void;
    /**
     * Gets all route filters in a resource group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.RouteFilterListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.RouteFilterListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listByResourceGroup(resourceGroupName: string): Promise<Models.RouteFilterListResult>;
    listByResourceGroup(resourceGroupName: string, options: msRest.RequestOptionsBase): Promise<Models.RouteFilterListResult>;
    listByResourceGroup(resourceGroupName: string, callback: msRest.ServiceCallback<Models.RouteFilterListResult>): void;
    listByResourceGroup(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RouteFilterListResult>): void;
    /**
     * Gets all route filters in a subscription.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.RouteFilterListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.RouteFilterListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    list(): Promise<Models.RouteFilterListResult>;
    list(options: msRest.RequestOptionsBase): Promise<Models.RouteFilterListResult>;
    list(callback: msRest.ServiceCallback<Models.RouteFilterListResult>): void;
    list(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RouteFilterListResult>): void;
    /**
     * Deletes the specified route filter.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} routeFilterName The name of the route filter.
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
    beginDeleteMethod(resourceGroupName: string, routeFilterName: string): Promise<void>;
    beginDeleteMethod(resourceGroupName: string, routeFilterName: string, options: msRest.RequestOptionsBase): Promise<void>;
    beginDeleteMethod(resourceGroupName: string, routeFilterName: string, callback: msRest.ServiceCallback<void>): void;
    beginDeleteMethod(resourceGroupName: string, routeFilterName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * Creates or updates a route filter in a specified resource group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} routeFilterName The name of the route filter.
     *
     * @param {RouteFilter} routeFilterParameters Parameters supplied to the create or update route
     * filter operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.RouteFilter} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.RouteFilter} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    beginCreateOrUpdate(resourceGroupName: string, routeFilterName: string, routeFilterParameters: Models.RouteFilter): Promise<Models.RouteFilter>;
    beginCreateOrUpdate(resourceGroupName: string, routeFilterName: string, routeFilterParameters: Models.RouteFilter, options: msRest.RequestOptionsBase): Promise<Models.RouteFilter>;
    beginCreateOrUpdate(resourceGroupName: string, routeFilterName: string, routeFilterParameters: Models.RouteFilter, callback: msRest.ServiceCallback<Models.RouteFilter>): void;
    beginCreateOrUpdate(resourceGroupName: string, routeFilterName: string, routeFilterParameters: Models.RouteFilter, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RouteFilter>): void;
    /**
     * Updates a route filter in a specified resource group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} routeFilterName The name of the route filter.
     *
     * @param {PatchRouteFilter} routeFilterParameters Parameters supplied to the update route filter
     * operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.RouteFilter} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.RouteFilter} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    beginUpdate(resourceGroupName: string, routeFilterName: string, routeFilterParameters: Models.PatchRouteFilter): Promise<Models.RouteFilter>;
    beginUpdate(resourceGroupName: string, routeFilterName: string, routeFilterParameters: Models.PatchRouteFilter, options: msRest.RequestOptionsBase): Promise<Models.RouteFilter>;
    beginUpdate(resourceGroupName: string, routeFilterName: string, routeFilterParameters: Models.PatchRouteFilter, callback: msRest.ServiceCallback<Models.RouteFilter>): void;
    beginUpdate(resourceGroupName: string, routeFilterName: string, routeFilterParameters: Models.PatchRouteFilter, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RouteFilter>): void;
    /**
     * Gets all route filters in a resource group.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call to List operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.RouteFilterListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.RouteFilterListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listByResourceGroupNext(nextPageLink: string): Promise<Models.RouteFilterListResult>;
    listByResourceGroupNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.RouteFilterListResult>;
    listByResourceGroupNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.RouteFilterListResult>): void;
    listByResourceGroupNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RouteFilterListResult>): void;
    /**
     * Gets all route filters in a subscription.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call to List operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.RouteFilterListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.RouteFilterListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listNext(nextPageLink: string): Promise<Models.RouteFilterListResult>;
    listNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.RouteFilterListResult>;
    listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.RouteFilterListResult>): void;
    listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RouteFilterListResult>): void;
}
