import * as msRest from "ms-rest-js";
import * as Models from "../models";
import { SubscriptionClientContext } from "../subscriptionClientContext";
/** Class representing a Subscriptions. */
export declare class Subscriptions {
    private readonly client;
    private readonly serializer;
    /**
     * Create a Subscriptions.
     * @param {SubscriptionClientContext} client Reference to the service client.
     */
    constructor(client: SubscriptionClientContext);
    /**
     * @summary Gets all available geo-locations.
     *
     * This operation provides all the locations that are available for resource providers; however,
     * each resource provider may support a subset of this list.
     *
     * @param {string} subscriptionId The ID of the target subscription.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    listLocationsWithHttpOperationResponse(subscriptionId: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.LocationListResult>>;
    /**
     * Gets details about a specified subscription.
     *
     * @param {string} subscriptionId The ID of the target subscription.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    getWithHttpOperationResponse(subscriptionId: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.Subscription>>;
    /**
     * Gets all subscriptions for a tenant.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    listWithHttpOperationResponse(options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.SubscriptionListResult>>;
    /**
     * Gets all subscriptions for a tenant.
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
    listNextWithHttpOperationResponse(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.SubscriptionListResult>>;
    /**
     * @summary Gets all available geo-locations.
     *
     * This operation provides all the locations that are available for resource providers; however,
     * each resource provider may support a subset of this list.
     *
     * @param {string} subscriptionId The ID of the target subscription.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.LocationListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.LocationListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listLocations(subscriptionId: string): Promise<Models.LocationListResult>;
    listLocations(subscriptionId: string, options: msRest.RequestOptionsBase): Promise<Models.LocationListResult>;
    listLocations(subscriptionId: string, callback: msRest.ServiceCallback<Models.LocationListResult>): void;
    listLocations(subscriptionId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.LocationListResult>): void;
    /**
     * Gets details about a specified subscription.
     *
     * @param {string} subscriptionId The ID of the target subscription.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.Subscription} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.Subscription} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    get(subscriptionId: string): Promise<Models.Subscription>;
    get(subscriptionId: string, options: msRest.RequestOptionsBase): Promise<Models.Subscription>;
    get(subscriptionId: string, callback: msRest.ServiceCallback<Models.Subscription>): void;
    get(subscriptionId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Subscription>): void;
    /**
     * Gets all subscriptions for a tenant.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.SubscriptionListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.SubscriptionListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    list(): Promise<Models.SubscriptionListResult>;
    list(options: msRest.RequestOptionsBase): Promise<Models.SubscriptionListResult>;
    list(callback: msRest.ServiceCallback<Models.SubscriptionListResult>): void;
    list(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SubscriptionListResult>): void;
    /**
     * Gets all subscriptions for a tenant.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call to List operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.SubscriptionListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.SubscriptionListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listNext(nextPageLink: string): Promise<Models.SubscriptionListResult>;
    listNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.SubscriptionListResult>;
    listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.SubscriptionListResult>): void;
    listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SubscriptionListResult>): void;
}
