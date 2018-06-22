import * as msRest from "ms-rest-js";
import * as Models from "../models";
import { ResourceManagementClientContext } from "../resourceManagementClientContext";
/** Class representing a DeploymentOperations. */
export declare class DeploymentOperations {
    private readonly client;
    private readonly serializer;
    /**
     * Create a DeploymentOperations.
     * @param {ResourceManagementClientContext} client Reference to the service client.
     */
    constructor(client: ResourceManagementClientContext);
    /**
     * Gets a deployments operation.
     *
     * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
     *
     * @param {string} deploymentName The name of the deployment.
     *
     * @param {string} operationId The ID of the operation to get.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    getWithHttpOperationResponse(resourceGroupName: string, deploymentName: string, operationId: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.DeploymentOperation>>;
    /**
     * Gets all deployments operations for a deployment.
     *
     * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
     *
     * @param {string} deploymentName The name of the deployment with the operation to get.
     *
     * @param {DeploymentOperationsListOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    listWithHttpOperationResponse(resourceGroupName: string, deploymentName: string, options?: Models.DeploymentOperationsListOptionalParams): Promise<msRest.HttpOperationResponse<Models.DeploymentOperationsListResult>>;
    /**
     * Gets all deployments operations for a deployment.
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
    listNextWithHttpOperationResponse(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.DeploymentOperationsListResult>>;
    /**
     * Gets a deployments operation.
     *
     * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
     *
     * @param {string} deploymentName The name of the deployment.
     *
     * @param {string} operationId The ID of the operation to get.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.DeploymentOperation} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.DeploymentOperation} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    get(resourceGroupName: string, deploymentName: string, operationId: string): Promise<Models.DeploymentOperation>;
    get(resourceGroupName: string, deploymentName: string, operationId: string, options: msRest.RequestOptionsBase): Promise<Models.DeploymentOperation>;
    get(resourceGroupName: string, deploymentName: string, operationId: string, callback: msRest.ServiceCallback<Models.DeploymentOperation>): void;
    get(resourceGroupName: string, deploymentName: string, operationId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DeploymentOperation>): void;
    /**
     * Gets all deployments operations for a deployment.
     *
     * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
     *
     * @param {string} deploymentName The name of the deployment with the operation to get.
     *
     * @param {DeploymentOperationsListOptionalParams} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.DeploymentOperationsListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.DeploymentOperationsListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    list(resourceGroupName: string, deploymentName: string): Promise<Models.DeploymentOperationsListResult>;
    list(resourceGroupName: string, deploymentName: string, options: Models.DeploymentOperationsListOptionalParams): Promise<Models.DeploymentOperationsListResult>;
    list(resourceGroupName: string, deploymentName: string, callback: msRest.ServiceCallback<Models.DeploymentOperationsListResult>): void;
    list(resourceGroupName: string, deploymentName: string, options: Models.DeploymentOperationsListOptionalParams, callback: msRest.ServiceCallback<Models.DeploymentOperationsListResult>): void;
    /**
     * Gets all deployments operations for a deployment.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call to List operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.DeploymentOperationsListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.DeploymentOperationsListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listNext(nextPageLink: string): Promise<Models.DeploymentOperationsListResult>;
    listNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.DeploymentOperationsListResult>;
    listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.DeploymentOperationsListResult>): void;
    listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DeploymentOperationsListResult>): void;
}
