import * as msRest from "ms-rest-js";
import * as Models from "../models";
import { NetworkManagementClientContext } from "../networkManagementClientContext";
/** Class representing a SecurityRules. */
export declare class SecurityRules {
    private readonly client;
    private readonly serializer;
    /**
     * Create a SecurityRules.
     * @param {NetworkManagementClientContext} client Reference to the service client.
     */
    constructor(client: NetworkManagementClientContext);
    /**
     * Deletes the specified network security rule.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} networkSecurityGroupName The name of the network security group.
     *
     * @param {string} securityRuleName The name of the security rule.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    deleteMethodWithHttpOperationResponse(resourceGroupName: string, networkSecurityGroupName: string, securityRuleName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Get the specified network security rule.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} networkSecurityGroupName The name of the network security group.
     *
     * @param {string} securityRuleName The name of the security rule.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    getWithHttpOperationResponse(resourceGroupName: string, networkSecurityGroupName: string, securityRuleName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.SecurityRule>>;
    /**
     * Creates or updates a security rule in the specified network security group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} networkSecurityGroupName The name of the network security group.
     *
     * @param {string} securityRuleName The name of the security rule.
     *
     * @param {SecurityRule} securityRuleParameters Parameters supplied to the create or update network
     * security rule operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    createOrUpdateWithHttpOperationResponse(resourceGroupName: string, networkSecurityGroupName: string, securityRuleName: string, securityRuleParameters: Models.SecurityRule, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Gets all security rules in a network security group.
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
     * Deletes the specified network security rule.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} networkSecurityGroupName The name of the network security group.
     *
     * @param {string} securityRuleName The name of the security rule.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginDeleteMethodWithHttpOperationResponse(resourceGroupName: string, networkSecurityGroupName: string, securityRuleName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<void>>;
    /**
     * Creates or updates a security rule in the specified network security group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} networkSecurityGroupName The name of the network security group.
     *
     * @param {string} securityRuleName The name of the security rule.
     *
     * @param {SecurityRule} securityRuleParameters Parameters supplied to the create or update network
     * security rule operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginCreateOrUpdateWithHttpOperationResponse(resourceGroupName: string, networkSecurityGroupName: string, securityRuleName: string, securityRuleParameters: Models.SecurityRule, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.SecurityRule>>;
    /**
     * Gets all security rules in a network security group.
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
     * Deletes the specified network security rule.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} networkSecurityGroupName The name of the network security group.
     *
     * @param {string} securityRuleName The name of the security rule.
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
    deleteMethod(resourceGroupName: string, networkSecurityGroupName: string, securityRuleName: string): Promise<void>;
    deleteMethod(resourceGroupName: string, networkSecurityGroupName: string, securityRuleName: string, options: msRest.RequestOptionsBase): Promise<void>;
    deleteMethod(resourceGroupName: string, networkSecurityGroupName: string, securityRuleName: string, callback: msRest.ServiceCallback<void>): void;
    deleteMethod(resourceGroupName: string, networkSecurityGroupName: string, securityRuleName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * Get the specified network security rule.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} networkSecurityGroupName The name of the network security group.
     *
     * @param {string} securityRuleName The name of the security rule.
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
    get(resourceGroupName: string, networkSecurityGroupName: string, securityRuleName: string): Promise<Models.SecurityRule>;
    get(resourceGroupName: string, networkSecurityGroupName: string, securityRuleName: string, options: msRest.RequestOptionsBase): Promise<Models.SecurityRule>;
    get(resourceGroupName: string, networkSecurityGroupName: string, securityRuleName: string, callback: msRest.ServiceCallback<Models.SecurityRule>): void;
    get(resourceGroupName: string, networkSecurityGroupName: string, securityRuleName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SecurityRule>): void;
    /**
     * Creates or updates a security rule in the specified network security group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} networkSecurityGroupName The name of the network security group.
     *
     * @param {string} securityRuleName The name of the security rule.
     *
     * @param {SecurityRule} securityRuleParameters Parameters supplied to the create or update network
     * security rule operation.
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
    createOrUpdate(resourceGroupName: string, networkSecurityGroupName: string, securityRuleName: string, securityRuleParameters: Models.SecurityRule): Promise<Models.SecurityRule>;
    createOrUpdate(resourceGroupName: string, networkSecurityGroupName: string, securityRuleName: string, securityRuleParameters: Models.SecurityRule, options: msRest.RequestOptionsBase): Promise<Models.SecurityRule>;
    createOrUpdate(resourceGroupName: string, networkSecurityGroupName: string, securityRuleName: string, securityRuleParameters: Models.SecurityRule, callback: msRest.ServiceCallback<Models.SecurityRule>): void;
    createOrUpdate(resourceGroupName: string, networkSecurityGroupName: string, securityRuleName: string, securityRuleParameters: Models.SecurityRule, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SecurityRule>): void;
    /**
     * Gets all security rules in a network security group.
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
     * Deletes the specified network security rule.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} networkSecurityGroupName The name of the network security group.
     *
     * @param {string} securityRuleName The name of the security rule.
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
    beginDeleteMethod(resourceGroupName: string, networkSecurityGroupName: string, securityRuleName: string): Promise<void>;
    beginDeleteMethod(resourceGroupName: string, networkSecurityGroupName: string, securityRuleName: string, options: msRest.RequestOptionsBase): Promise<void>;
    beginDeleteMethod(resourceGroupName: string, networkSecurityGroupName: string, securityRuleName: string, callback: msRest.ServiceCallback<void>): void;
    beginDeleteMethod(resourceGroupName: string, networkSecurityGroupName: string, securityRuleName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * Creates or updates a security rule in the specified network security group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} networkSecurityGroupName The name of the network security group.
     *
     * @param {string} securityRuleName The name of the security rule.
     *
     * @param {SecurityRule} securityRuleParameters Parameters supplied to the create or update network
     * security rule operation.
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
    beginCreateOrUpdate(resourceGroupName: string, networkSecurityGroupName: string, securityRuleName: string, securityRuleParameters: Models.SecurityRule): Promise<Models.SecurityRule>;
    beginCreateOrUpdate(resourceGroupName: string, networkSecurityGroupName: string, securityRuleName: string, securityRuleParameters: Models.SecurityRule, options: msRest.RequestOptionsBase): Promise<Models.SecurityRule>;
    beginCreateOrUpdate(resourceGroupName: string, networkSecurityGroupName: string, securityRuleName: string, securityRuleParameters: Models.SecurityRule, callback: msRest.ServiceCallback<Models.SecurityRule>): void;
    beginCreateOrUpdate(resourceGroupName: string, networkSecurityGroupName: string, securityRuleName: string, securityRuleParameters: Models.SecurityRule, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SecurityRule>): void;
    /**
     * Gets all security rules in a network security group.
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
