import * as msRest from "ms-rest-js";
import * as Models from "../models";
import { NetworkManagementClientContext } from "../networkManagementClientContext";
/** Class representing a DefaultSecurityRules. */
export declare class DefaultSecurityRules {
    private readonly client;
    private readonly serializer;
    /**
     * Create a DefaultSecurityRules.
     * @param {NetworkManagementClientContext} client Reference to the service client.
     */
    constructor(client: NetworkManagementClientContext);
    /**
     * Gets all default security rules in a network security group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} networkSecurityGroupName The name of the network security group.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    listWithHttpOperationResponse(resourceGroupName: string, networkSecurityGroupName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.SecurityRuleListResult>>;
    /**
     * Get the specified default network security rule.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} networkSecurityGroupName The name of the network security group.
     *
     * @param {string} defaultSecurityRuleName The name of the default security rule.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    getWithHttpOperationResponse(resourceGroupName: string, networkSecurityGroupName: string, defaultSecurityRuleName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.SecurityRule>>;
    /**
     * Gets all default security rules in a network security group.
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
    listNextWithHttpOperationResponse(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.SecurityRuleListResult>>;
    /**
     * Gets all default security rules in a network security group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} networkSecurityGroupName The name of the network security group.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.SecurityRuleListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.SecurityRuleListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    list(resourceGroupName: string, networkSecurityGroupName: string): Promise<Models.SecurityRuleListResult>;
    list(resourceGroupName: string, networkSecurityGroupName: string, options: msRest.RequestOptionsBase): Promise<Models.SecurityRuleListResult>;
    list(resourceGroupName: string, networkSecurityGroupName: string, callback: msRest.ServiceCallback<Models.SecurityRuleListResult>): void;
    list(resourceGroupName: string, networkSecurityGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SecurityRuleListResult>): void;
    /**
     * Get the specified default network security rule.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} networkSecurityGroupName The name of the network security group.
     *
     * @param {string} defaultSecurityRuleName The name of the default security rule.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.SecurityRule} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.SecurityRule} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    get(resourceGroupName: string, networkSecurityGroupName: string, defaultSecurityRuleName: string): Promise<Models.SecurityRule>;
    get(resourceGroupName: string, networkSecurityGroupName: string, defaultSecurityRuleName: string, options: msRest.RequestOptionsBase): Promise<Models.SecurityRule>;
    get(resourceGroupName: string, networkSecurityGroupName: string, defaultSecurityRuleName: string, callback: msRest.ServiceCallback<Models.SecurityRule>): void;
    get(resourceGroupName: string, networkSecurityGroupName: string, defaultSecurityRuleName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SecurityRule>): void;
    /**
     * Gets all default security rules in a network security group.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call to List operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.SecurityRuleListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.SecurityRuleListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listNext(nextPageLink: string): Promise<Models.SecurityRuleListResult>;
    listNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.SecurityRuleListResult>;
    listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.SecurityRuleListResult>): void;
    listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SecurityRuleListResult>): void;
}
