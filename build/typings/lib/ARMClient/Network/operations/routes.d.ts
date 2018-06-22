import * as msRest from "ms-rest-js";
import * as Models from "../models";
import { NetworkManagementClientContext } from "../networkManagementClientContext";
/** Class representing a Routes. */
export declare class Routes {
    private readonly client;
    private readonly serializer;
    /**
     * Create a Routes.
     * @param {NetworkManagementClientContext} client Reference to the service client.
     */
    constructor(client: NetworkManagementClientContext);
    /**
     * Deletes the specified route from a route table.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} routeTableName The name of the route table.
     *
     * @param {string} routeName The name of the route.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    deleteMethodWithHttpOperationResponse(resourceGroupName: string, routeTableName: string, routeName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Gets the specified route from a route table.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} routeTableName The name of the route table.
     *
     * @param {string} routeName The name of the route.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    getWithHttpOperationResponse(resourceGroupName: string, routeTableName: string, routeName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.Route>>;
    /**
     * Creates or updates a route in the specified route table.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} routeTableName The name of the route table.
     *
     * @param {string} routeName The name of the route.
     *
     * @param {Route} routeParameters Parameters supplied to the create or update route operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    createOrUpdateWithHttpOperationResponse(resourceGroupName: string, routeTableName: string, routeName: string, routeParameters: Models.Route, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Gets all routes in a route table.
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
    listWithHttpOperationResponse(resourceGroupName: string, routeTableName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.RouteListResult>>;
    /**
     * Deletes the specified route from a route table.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} routeTableName The name of the route table.
     *
     * @param {string} routeName The name of the route.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginDeleteMethodWithHttpOperationResponse(resourceGroupName: string, routeTableName: string, routeName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<void>>;
    /**
     * Creates or updates a route in the specified route table.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} routeTableName The name of the route table.
     *
     * @param {string} routeName The name of the route.
     *
     * @param {Route} routeParameters Parameters supplied to the create or update route operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginCreateOrUpdateWithHttpOperationResponse(resourceGroupName: string, routeTableName: string, routeName: string, routeParameters: Models.Route, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.Route>>;
    /**
     * Gets all routes in a route table.
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
    listNextWithHttpOperationResponse(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.RouteListResult>>;
    /**
     * Deletes the specified route from a route table.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} routeTableName The name of the route table.
     *
     * @param {string} routeName The name of the route.
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
    deleteMethod(resourceGroupName: string, routeTableName: string, routeName: string): Promise<void>;
    deleteMethod(resourceGroupName: string, routeTableName: string, routeName: string, options: msRest.RequestOptionsBase): Promise<void>;
    deleteMethod(resourceGroupName: string, routeTableName: string, routeName: string, callback: msRest.ServiceCallback<void>): void;
    deleteMethod(resourceGroupName: string, routeTableName: string, routeName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * Gets the specified route from a route table.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} routeTableName The name of the route table.
     *
     * @param {string} routeName The name of the route.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.Route} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.Route} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    get(resourceGroupName: string, routeTableName: string, routeName: string): Promise<Models.Route>;
    get(resourceGroupName: string, routeTableName: string, routeName: string, options: msRest.RequestOptionsBase): Promise<Models.Route>;
    get(resourceGroupName: string, routeTableName: string, routeName: string, callback: msRest.ServiceCallback<Models.Route>): void;
    get(resourceGroupName: string, routeTableName: string, routeName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Route>): void;
    /**
     * Creates or updates a route in the specified route table.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} routeTableName The name of the route table.
     *
     * @param {string} routeName The name of the route.
     *
     * @param {Route} routeParameters Parameters supplied to the create or update route operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.Route} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.Route} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    createOrUpdate(resourceGroupName: string, routeTableName: string, routeName: string, routeParameters: Models.Route): Promise<Models.Route>;
    createOrUpdate(resourceGroupName: string, routeTableName: string, routeName: string, routeParameters: Models.Route, options: msRest.RequestOptionsBase): Promise<Models.Route>;
    createOrUpdate(resourceGroupName: string, routeTableName: string, routeName: string, routeParameters: Models.Route, callback: msRest.ServiceCallback<Models.Route>): void;
    createOrUpdate(resourceGroupName: string, routeTableName: string, routeName: string, routeParameters: Models.Route, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Route>): void;
    /**
     * Gets all routes in a route table.
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
     *                      {Models.RouteListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.RouteListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    list(resourceGroupName: string, routeTableName: string): Promise<Models.RouteListResult>;
    list(resourceGroupName: string, routeTableName: string, options: msRest.RequestOptionsBase): Promise<Models.RouteListResult>;
    list(resourceGroupName: string, routeTableName: string, callback: msRest.ServiceCallback<Models.RouteListResult>): void;
    list(resourceGroupName: string, routeTableName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RouteListResult>): void;
    /**
     * Deletes the specified route from a route table.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} routeTableName The name of the route table.
     *
     * @param {string} routeName The name of the route.
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
    beginDeleteMethod(resourceGroupName: string, routeTableName: string, routeName: string): Promise<void>;
    beginDeleteMethod(resourceGroupName: string, routeTableName: string, routeName: string, options: msRest.RequestOptionsBase): Promise<void>;
    beginDeleteMethod(resourceGroupName: string, routeTableName: string, routeName: string, callback: msRest.ServiceCallback<void>): void;
    beginDeleteMethod(resourceGroupName: string, routeTableName: string, routeName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * Creates or updates a route in the specified route table.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} routeTableName The name of the route table.
     *
     * @param {string} routeName The name of the route.
     *
     * @param {Route} routeParameters Parameters supplied to the create or update route operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.Route} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.Route} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    beginCreateOrUpdate(resourceGroupName: string, routeTableName: string, routeName: string, routeParameters: Models.Route): Promise<Models.Route>;
    beginCreateOrUpdate(resourceGroupName: string, routeTableName: string, routeName: string, routeParameters: Models.Route, options: msRest.RequestOptionsBase): Promise<Models.Route>;
    beginCreateOrUpdate(resourceGroupName: string, routeTableName: string, routeName: string, routeParameters: Models.Route, callback: msRest.ServiceCallback<Models.Route>): void;
    beginCreateOrUpdate(resourceGroupName: string, routeTableName: string, routeName: string, routeParameters: Models.Route, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Route>): void;
    /**
     * Gets all routes in a route table.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call to List operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.RouteListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.RouteListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listNext(nextPageLink: string): Promise<Models.RouteListResult>;
    listNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.RouteListResult>;
    listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.RouteListResult>): void;
    listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RouteListResult>): void;
}
