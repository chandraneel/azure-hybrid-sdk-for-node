import * as msRest from "ms-rest-js";
import * as Models from "../models";
import { NetworkManagementClientContext } from "../networkManagementClientContext";
/** Class representing a RouteFilterRules. */
export declare class RouteFilterRules {
    private readonly client;
    private readonly serializer;
    /**
     * Create a RouteFilterRules.
     * @param {NetworkManagementClientContext} client Reference to the service client.
     */
    constructor(client: NetworkManagementClientContext);
    /**
     * Deletes the specified rule from a route filter.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} routeFilterName The name of the route filter.
     *
     * @param {string} ruleName The name of the rule.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    deleteMethodWithHttpOperationResponse(resourceGroupName: string, routeFilterName: string, ruleName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Gets the specified rule from a route filter.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} routeFilterName The name of the route filter.
     *
     * @param {string} ruleName The name of the rule.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    getWithHttpOperationResponse(resourceGroupName: string, routeFilterName: string, ruleName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.RouteFilterRule>>;
    /**
     * Creates or updates a route in the specified route filter.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} routeFilterName The name of the route filter.
     *
     * @param {string} ruleName The name of the route filter rule.
     *
     * @param {RouteFilterRule} routeFilterRuleParameters Parameters supplied to the create or update
     * route filter rule operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    createOrUpdateWithHttpOperationResponse(resourceGroupName: string, routeFilterName: string, ruleName: string, routeFilterRuleParameters: Models.RouteFilterRule, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Updates a route in the specified route filter.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} routeFilterName The name of the route filter.
     *
     * @param {string} ruleName The name of the route filter rule.
     *
     * @param {PatchRouteFilterRule} routeFilterRuleParameters Parameters supplied to the update route
     * filter rule operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    updateWithHttpOperationResponse(resourceGroupName: string, routeFilterName: string, ruleName: string, routeFilterRuleParameters: Models.PatchRouteFilterRule, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Gets all RouteFilterRules in a route filter.
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
    listByRouteFilterWithHttpOperationResponse(resourceGroupName: string, routeFilterName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.RouteFilterRuleListResult>>;
    /**
     * Deletes the specified rule from a route filter.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} routeFilterName The name of the route filter.
     *
     * @param {string} ruleName The name of the rule.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginDeleteMethodWithHttpOperationResponse(resourceGroupName: string, routeFilterName: string, ruleName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<void>>;
    /**
     * Creates or updates a route in the specified route filter.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} routeFilterName The name of the route filter.
     *
     * @param {string} ruleName The name of the route filter rule.
     *
     * @param {RouteFilterRule} routeFilterRuleParameters Parameters supplied to the create or update
     * route filter rule operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginCreateOrUpdateWithHttpOperationResponse(resourceGroupName: string, routeFilterName: string, ruleName: string, routeFilterRuleParameters: Models.RouteFilterRule, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.RouteFilterRule>>;
    /**
     * Updates a route in the specified route filter.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} routeFilterName The name of the route filter.
     *
     * @param {string} ruleName The name of the route filter rule.
     *
     * @param {PatchRouteFilterRule} routeFilterRuleParameters Parameters supplied to the update route
     * filter rule operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginUpdateWithHttpOperationResponse(resourceGroupName: string, routeFilterName: string, ruleName: string, routeFilterRuleParameters: Models.PatchRouteFilterRule, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.RouteFilterRule>>;
    /**
     * Gets all RouteFilterRules in a route filter.
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
    listByRouteFilterNextWithHttpOperationResponse(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.RouteFilterRuleListResult>>;
    /**
     * Deletes the specified rule from a route filter.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} routeFilterName The name of the route filter.
     *
     * @param {string} ruleName The name of the rule.
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
    deleteMethod(resourceGroupName: string, routeFilterName: string, ruleName: string): Promise<void>;
    deleteMethod(resourceGroupName: string, routeFilterName: string, ruleName: string, options: msRest.RequestOptionsBase): Promise<void>;
    deleteMethod(resourceGroupName: string, routeFilterName: string, ruleName: string, callback: msRest.ServiceCallback<void>): void;
    deleteMethod(resourceGroupName: string, routeFilterName: string, ruleName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * Gets the specified rule from a route filter.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} routeFilterName The name of the route filter.
     *
     * @param {string} ruleName The name of the rule.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.RouteFilterRule} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.RouteFilterRule} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    get(resourceGroupName: string, routeFilterName: string, ruleName: string): Promise<Models.RouteFilterRule>;
    get(resourceGroupName: string, routeFilterName: string, ruleName: string, options: msRest.RequestOptionsBase): Promise<Models.RouteFilterRule>;
    get(resourceGroupName: string, routeFilterName: string, ruleName: string, callback: msRest.ServiceCallback<Models.RouteFilterRule>): void;
    get(resourceGroupName: string, routeFilterName: string, ruleName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RouteFilterRule>): void;
    /**
     * Creates or updates a route in the specified route filter.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} routeFilterName The name of the route filter.
     *
     * @param {string} ruleName The name of the route filter rule.
     *
     * @param {RouteFilterRule} routeFilterRuleParameters Parameters supplied to the create or update
     * route filter rule operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.RouteFilterRule} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.RouteFilterRule} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    createOrUpdate(resourceGroupName: string, routeFilterName: string, ruleName: string, routeFilterRuleParameters: Models.RouteFilterRule): Promise<Models.RouteFilterRule>;
    createOrUpdate(resourceGroupName: string, routeFilterName: string, ruleName: string, routeFilterRuleParameters: Models.RouteFilterRule, options: msRest.RequestOptionsBase): Promise<Models.RouteFilterRule>;
    createOrUpdate(resourceGroupName: string, routeFilterName: string, ruleName: string, routeFilterRuleParameters: Models.RouteFilterRule, callback: msRest.ServiceCallback<Models.RouteFilterRule>): void;
    createOrUpdate(resourceGroupName: string, routeFilterName: string, ruleName: string, routeFilterRuleParameters: Models.RouteFilterRule, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RouteFilterRule>): void;
    /**
     * Updates a route in the specified route filter.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} routeFilterName The name of the route filter.
     *
     * @param {string} ruleName The name of the route filter rule.
     *
     * @param {PatchRouteFilterRule} routeFilterRuleParameters Parameters supplied to the update route
     * filter rule operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.RouteFilterRule} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.RouteFilterRule} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    update(resourceGroupName: string, routeFilterName: string, ruleName: string, routeFilterRuleParameters: Models.PatchRouteFilterRule): Promise<Models.RouteFilterRule>;
    update(resourceGroupName: string, routeFilterName: string, ruleName: string, routeFilterRuleParameters: Models.PatchRouteFilterRule, options: msRest.RequestOptionsBase): Promise<Models.RouteFilterRule>;
    update(resourceGroupName: string, routeFilterName: string, ruleName: string, routeFilterRuleParameters: Models.PatchRouteFilterRule, callback: msRest.ServiceCallback<Models.RouteFilterRule>): void;
    update(resourceGroupName: string, routeFilterName: string, ruleName: string, routeFilterRuleParameters: Models.PatchRouteFilterRule, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RouteFilterRule>): void;
    /**
     * Gets all RouteFilterRules in a route filter.
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
     *                      {Models.RouteFilterRuleListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.RouteFilterRuleListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listByRouteFilter(resourceGroupName: string, routeFilterName: string): Promise<Models.RouteFilterRuleListResult>;
    listByRouteFilter(resourceGroupName: string, routeFilterName: string, options: msRest.RequestOptionsBase): Promise<Models.RouteFilterRuleListResult>;
    listByRouteFilter(resourceGroupName: string, routeFilterName: string, callback: msRest.ServiceCallback<Models.RouteFilterRuleListResult>): void;
    listByRouteFilter(resourceGroupName: string, routeFilterName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RouteFilterRuleListResult>): void;
    /**
     * Deletes the specified rule from a route filter.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} routeFilterName The name of the route filter.
     *
     * @param {string} ruleName The name of the rule.
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
    beginDeleteMethod(resourceGroupName: string, routeFilterName: string, ruleName: string): Promise<void>;
    beginDeleteMethod(resourceGroupName: string, routeFilterName: string, ruleName: string, options: msRest.RequestOptionsBase): Promise<void>;
    beginDeleteMethod(resourceGroupName: string, routeFilterName: string, ruleName: string, callback: msRest.ServiceCallback<void>): void;
    beginDeleteMethod(resourceGroupName: string, routeFilterName: string, ruleName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * Creates or updates a route in the specified route filter.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} routeFilterName The name of the route filter.
     *
     * @param {string} ruleName The name of the route filter rule.
     *
     * @param {RouteFilterRule} routeFilterRuleParameters Parameters supplied to the create or update
     * route filter rule operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.RouteFilterRule} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.RouteFilterRule} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    beginCreateOrUpdate(resourceGroupName: string, routeFilterName: string, ruleName: string, routeFilterRuleParameters: Models.RouteFilterRule): Promise<Models.RouteFilterRule>;
    beginCreateOrUpdate(resourceGroupName: string, routeFilterName: string, ruleName: string, routeFilterRuleParameters: Models.RouteFilterRule, options: msRest.RequestOptionsBase): Promise<Models.RouteFilterRule>;
    beginCreateOrUpdate(resourceGroupName: string, routeFilterName: string, ruleName: string, routeFilterRuleParameters: Models.RouteFilterRule, callback: msRest.ServiceCallback<Models.RouteFilterRule>): void;
    beginCreateOrUpdate(resourceGroupName: string, routeFilterName: string, ruleName: string, routeFilterRuleParameters: Models.RouteFilterRule, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RouteFilterRule>): void;
    /**
     * Updates a route in the specified route filter.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} routeFilterName The name of the route filter.
     *
     * @param {string} ruleName The name of the route filter rule.
     *
     * @param {PatchRouteFilterRule} routeFilterRuleParameters Parameters supplied to the update route
     * filter rule operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.RouteFilterRule} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.RouteFilterRule} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    beginUpdate(resourceGroupName: string, routeFilterName: string, ruleName: string, routeFilterRuleParameters: Models.PatchRouteFilterRule): Promise<Models.RouteFilterRule>;
    beginUpdate(resourceGroupName: string, routeFilterName: string, ruleName: string, routeFilterRuleParameters: Models.PatchRouteFilterRule, options: msRest.RequestOptionsBase): Promise<Models.RouteFilterRule>;
    beginUpdate(resourceGroupName: string, routeFilterName: string, ruleName: string, routeFilterRuleParameters: Models.PatchRouteFilterRule, callback: msRest.ServiceCallback<Models.RouteFilterRule>): void;
    beginUpdate(resourceGroupName: string, routeFilterName: string, ruleName: string, routeFilterRuleParameters: Models.PatchRouteFilterRule, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RouteFilterRule>): void;
    /**
     * Gets all RouteFilterRules in a route filter.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call to List operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.RouteFilterRuleListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.RouteFilterRuleListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listByRouteFilterNext(nextPageLink: string): Promise<Models.RouteFilterRuleListResult>;
    listByRouteFilterNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.RouteFilterRuleListResult>;
    listByRouteFilterNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.RouteFilterRuleListResult>): void;
    listByRouteFilterNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RouteFilterRuleListResult>): void;
}
