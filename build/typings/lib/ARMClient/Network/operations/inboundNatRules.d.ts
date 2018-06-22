import * as msRest from "ms-rest-js";
import * as Models from "../models";
import { NetworkManagementClientContext } from "../networkManagementClientContext";
/** Class representing a InboundNatRules. */
export declare class InboundNatRules {
    private readonly client;
    private readonly serializer;
    /**
     * Create a InboundNatRules.
     * @param {NetworkManagementClientContext} client Reference to the service client.
     */
    constructor(client: NetworkManagementClientContext);
    /**
     * Gets all the inbound nat rules in a load balancer.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} loadBalancerName The name of the load balancer.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    listWithHttpOperationResponse(resourceGroupName: string, loadBalancerName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.InboundNatRuleListResult>>;
    /**
     * Deletes the specified load balancer inbound nat rule.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} loadBalancerName The name of the load balancer.
     *
     * @param {string} inboundNatRuleName The name of the inbound nat rule.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    deleteMethodWithHttpOperationResponse(resourceGroupName: string, loadBalancerName: string, inboundNatRuleName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Gets the specified load balancer inbound nat rule.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} loadBalancerName The name of the load balancer.
     *
     * @param {string} inboundNatRuleName The name of the inbound nat rule.
     *
     * @param {InboundNatRulesGetOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    getWithHttpOperationResponse(resourceGroupName: string, loadBalancerName: string, inboundNatRuleName: string, options?: Models.InboundNatRulesGetOptionalParams): Promise<msRest.HttpOperationResponse<Models.InboundNatRule>>;
    /**
     * Creates or updates a load balancer inbound nat rule.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} loadBalancerName The name of the load balancer.
     *
     * @param {string} inboundNatRuleName The name of the inbound nat rule.
     *
     * @param {InboundNatRule} inboundNatRuleParameters Parameters supplied to the create or update
     * inbound nat rule operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    createOrUpdateWithHttpOperationResponse(resourceGroupName: string, loadBalancerName: string, inboundNatRuleName: string, inboundNatRuleParameters: Models.InboundNatRule, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Deletes the specified load balancer inbound nat rule.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} loadBalancerName The name of the load balancer.
     *
     * @param {string} inboundNatRuleName The name of the inbound nat rule.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginDeleteMethodWithHttpOperationResponse(resourceGroupName: string, loadBalancerName: string, inboundNatRuleName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<void>>;
    /**
     * Creates or updates a load balancer inbound nat rule.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} loadBalancerName The name of the load balancer.
     *
     * @param {string} inboundNatRuleName The name of the inbound nat rule.
     *
     * @param {InboundNatRule} inboundNatRuleParameters Parameters supplied to the create or update
     * inbound nat rule operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginCreateOrUpdateWithHttpOperationResponse(resourceGroupName: string, loadBalancerName: string, inboundNatRuleName: string, inboundNatRuleParameters: Models.InboundNatRule, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.InboundNatRule>>;
    /**
     * Gets all the inbound nat rules in a load balancer.
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
    listNextWithHttpOperationResponse(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.InboundNatRuleListResult>>;
    /**
     * Gets all the inbound nat rules in a load balancer.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} loadBalancerName The name of the load balancer.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.InboundNatRuleListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.InboundNatRuleListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    list(resourceGroupName: string, loadBalancerName: string): Promise<Models.InboundNatRuleListResult>;
    list(resourceGroupName: string, loadBalancerName: string, options: msRest.RequestOptionsBase): Promise<Models.InboundNatRuleListResult>;
    list(resourceGroupName: string, loadBalancerName: string, callback: msRest.ServiceCallback<Models.InboundNatRuleListResult>): void;
    list(resourceGroupName: string, loadBalancerName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.InboundNatRuleListResult>): void;
    /**
     * Deletes the specified load balancer inbound nat rule.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} loadBalancerName The name of the load balancer.
     *
     * @param {string} inboundNatRuleName The name of the inbound nat rule.
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
    deleteMethod(resourceGroupName: string, loadBalancerName: string, inboundNatRuleName: string): Promise<void>;
    deleteMethod(resourceGroupName: string, loadBalancerName: string, inboundNatRuleName: string, options: msRest.RequestOptionsBase): Promise<void>;
    deleteMethod(resourceGroupName: string, loadBalancerName: string, inboundNatRuleName: string, callback: msRest.ServiceCallback<void>): void;
    deleteMethod(resourceGroupName: string, loadBalancerName: string, inboundNatRuleName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * Gets the specified load balancer inbound nat rule.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} loadBalancerName The name of the load balancer.
     *
     * @param {string} inboundNatRuleName The name of the inbound nat rule.
     *
     * @param {InboundNatRulesGetOptionalParams} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.InboundNatRule} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.InboundNatRule} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    get(resourceGroupName: string, loadBalancerName: string, inboundNatRuleName: string): Promise<Models.InboundNatRule>;
    get(resourceGroupName: string, loadBalancerName: string, inboundNatRuleName: string, options: Models.InboundNatRulesGetOptionalParams): Promise<Models.InboundNatRule>;
    get(resourceGroupName: string, loadBalancerName: string, inboundNatRuleName: string, callback: msRest.ServiceCallback<Models.InboundNatRule>): void;
    get(resourceGroupName: string, loadBalancerName: string, inboundNatRuleName: string, options: Models.InboundNatRulesGetOptionalParams, callback: msRest.ServiceCallback<Models.InboundNatRule>): void;
    /**
     * Creates or updates a load balancer inbound nat rule.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} loadBalancerName The name of the load balancer.
     *
     * @param {string} inboundNatRuleName The name of the inbound nat rule.
     *
     * @param {InboundNatRule} inboundNatRuleParameters Parameters supplied to the create or update
     * inbound nat rule operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.InboundNatRule} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.InboundNatRule} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    createOrUpdate(resourceGroupName: string, loadBalancerName: string, inboundNatRuleName: string, inboundNatRuleParameters: Models.InboundNatRule): Promise<Models.InboundNatRule>;
    createOrUpdate(resourceGroupName: string, loadBalancerName: string, inboundNatRuleName: string, inboundNatRuleParameters: Models.InboundNatRule, options: msRest.RequestOptionsBase): Promise<Models.InboundNatRule>;
    createOrUpdate(resourceGroupName: string, loadBalancerName: string, inboundNatRuleName: string, inboundNatRuleParameters: Models.InboundNatRule, callback: msRest.ServiceCallback<Models.InboundNatRule>): void;
    createOrUpdate(resourceGroupName: string, loadBalancerName: string, inboundNatRuleName: string, inboundNatRuleParameters: Models.InboundNatRule, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.InboundNatRule>): void;
    /**
     * Deletes the specified load balancer inbound nat rule.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} loadBalancerName The name of the load balancer.
     *
     * @param {string} inboundNatRuleName The name of the inbound nat rule.
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
    beginDeleteMethod(resourceGroupName: string, loadBalancerName: string, inboundNatRuleName: string): Promise<void>;
    beginDeleteMethod(resourceGroupName: string, loadBalancerName: string, inboundNatRuleName: string, options: msRest.RequestOptionsBase): Promise<void>;
    beginDeleteMethod(resourceGroupName: string, loadBalancerName: string, inboundNatRuleName: string, callback: msRest.ServiceCallback<void>): void;
    beginDeleteMethod(resourceGroupName: string, loadBalancerName: string, inboundNatRuleName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * Creates or updates a load balancer inbound nat rule.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} loadBalancerName The name of the load balancer.
     *
     * @param {string} inboundNatRuleName The name of the inbound nat rule.
     *
     * @param {InboundNatRule} inboundNatRuleParameters Parameters supplied to the create or update
     * inbound nat rule operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.InboundNatRule} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.InboundNatRule} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    beginCreateOrUpdate(resourceGroupName: string, loadBalancerName: string, inboundNatRuleName: string, inboundNatRuleParameters: Models.InboundNatRule): Promise<Models.InboundNatRule>;
    beginCreateOrUpdate(resourceGroupName: string, loadBalancerName: string, inboundNatRuleName: string, inboundNatRuleParameters: Models.InboundNatRule, options: msRest.RequestOptionsBase): Promise<Models.InboundNatRule>;
    beginCreateOrUpdate(resourceGroupName: string, loadBalancerName: string, inboundNatRuleName: string, inboundNatRuleParameters: Models.InboundNatRule, callback: msRest.ServiceCallback<Models.InboundNatRule>): void;
    beginCreateOrUpdate(resourceGroupName: string, loadBalancerName: string, inboundNatRuleName: string, inboundNatRuleParameters: Models.InboundNatRule, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.InboundNatRule>): void;
    /**
     * Gets all the inbound nat rules in a load balancer.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call to List operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.InboundNatRuleListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.InboundNatRuleListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listNext(nextPageLink: string): Promise<Models.InboundNatRuleListResult>;
    listNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.InboundNatRuleListResult>;
    listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.InboundNatRuleListResult>): void;
    listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.InboundNatRuleListResult>): void;
}
