import * as msRest from "ms-rest-js";
import * as Models from "../models";
import { ResourceManagementClientContext } from "../resourceManagementClientContext";
/** Class representing a Deployments. */
export declare class Deployments {
    private readonly client;
    private readonly serializer;
    /**
     * Create a Deployments.
     * @param {ResourceManagementClientContext} client Reference to the service client.
     */
    constructor(client: ResourceManagementClientContext);
    /**
     * @summary Deletes a deployment from the deployment history.
     *
     * A template deployment that is currently running cannot be deleted. Deleting a template
     * deployment removes the associated deployment operations. Deleting a template deployment does not
     * affect the state of the resource group. This is an asynchronous operation that returns a status
     * of 202 until the template deployment is successfully deleted. The Location response header
     * contains the URI that is used to obtain the status of the process. While the process is running,
     * a call to the URI in the Location header returns a status of 202. When the process finishes, the
     * URI in the Location header returns a status of 204 on success. If the asynchronous request
     * failed, the URI in the Location header returns an error-level status code.
     *
     * @param {string} resourceGroupName The name of the resource group with the deployment to delete.
     * The name is case insensitive.
     *
     * @param {string} deploymentName The name of the deployment to delete.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    deleteMethodWithHttpOperationResponse(resourceGroupName: string, deploymentName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Checks whether the deployment exists.
     *
     * @param {string} resourceGroupName The name of the resource group with the deployment to check.
     * The name is case insensitive.
     *
     * @param {string} deploymentName The name of the deployment to check.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    checkExistenceWithHttpOperationResponse(resourceGroupName: string, deploymentName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<boolean>>;
    /**
     * @summary Deploys resources to a resource group.
     *
     * You can provide the template and parameters directly in the request or link to JSON files.
     *
     * @param {string} resourceGroupName The name of the resource group to deploy the resources to. The
     * name is case insensitive. The resource group must already exist.
     *
     * @param {string} deploymentName The name of the deployment.
     *
     * @param {Deployment} parameters Additional parameters supplied to the operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    createOrUpdateWithHttpOperationResponse(resourceGroupName: string, deploymentName: string, parameters: Models.Deployment, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Gets a deployment.
     *
     * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
     *
     * @param {string} deploymentName The name of the deployment to get.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    getWithHttpOperationResponse(resourceGroupName: string, deploymentName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.DeploymentExtended>>;
    /**
     * @summary Cancels a currently running template deployment.
     *
     * You can cancel a deployment only if the provisioningState is Accepted or Running. After the
     * deployment is canceled, the provisioningState is set to Canceled. Canceling a template
     * deployment stops the currently running template deployment and leaves the resource group
     * partially deployed.
     *
     * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
     *
     * @param {string} deploymentName The name of the deployment to cancel.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    cancelWithHttpOperationResponse(resourceGroupName: string, deploymentName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<void>>;
    /**
     * Validates whether the specified template is syntactically correct and will be accepted by Azure
     * Resource Manager..
     *
     * @param {string} resourceGroupName The name of the resource group the template will be deployed
     * to. The name is case insensitive.
     *
     * @param {string} deploymentName The name of the deployment.
     *
     * @param {Deployment} parameters Parameters to validate.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    validateWithHttpOperationResponse(resourceGroupName: string, deploymentName: string, parameters: Models.Deployment, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.DeploymentValidateResult>>;
    /**
     * Exports the template used for specified deployment.
     *
     * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
     *
     * @param {string} deploymentName The name of the deployment from which to get the template.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    exportTemplateWithHttpOperationResponse(resourceGroupName: string, deploymentName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.DeploymentExportResult>>;
    /**
     * Get all the deployments for a resource group.
     *
     * @param {string} resourceGroupName The name of the resource group with the deployments to get.
     * The name is case insensitive.
     *
     * @param {DeploymentsListByResourceGroupOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    listByResourceGroupWithHttpOperationResponse(resourceGroupName: string, options?: Models.DeploymentsListByResourceGroupOptionalParams): Promise<msRest.HttpOperationResponse<Models.DeploymentListResult>>;
    /**
     * @summary Deletes a deployment from the deployment history.
     *
     * A template deployment that is currently running cannot be deleted. Deleting a template
     * deployment removes the associated deployment operations. Deleting a template deployment does not
     * affect the state of the resource group. This is an asynchronous operation that returns a status
     * of 202 until the template deployment is successfully deleted. The Location response header
     * contains the URI that is used to obtain the status of the process. While the process is running,
     * a call to the URI in the Location header returns a status of 202. When the process finishes, the
     * URI in the Location header returns a status of 204 on success. If the asynchronous request
     * failed, the URI in the Location header returns an error-level status code.
     *
     * @param {string} resourceGroupName The name of the resource group with the deployment to delete.
     * The name is case insensitive.
     *
     * @param {string} deploymentName The name of the deployment to delete.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginDeleteMethodWithHttpOperationResponse(resourceGroupName: string, deploymentName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<void>>;
    /**
     * @summary Deploys resources to a resource group.
     *
     * You can provide the template and parameters directly in the request or link to JSON files.
     *
     * @param {string} resourceGroupName The name of the resource group to deploy the resources to. The
     * name is case insensitive. The resource group must already exist.
     *
     * @param {string} deploymentName The name of the deployment.
     *
     * @param {Deployment} parameters Additional parameters supplied to the operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginCreateOrUpdateWithHttpOperationResponse(resourceGroupName: string, deploymentName: string, parameters: Models.Deployment, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.DeploymentExtended>>;
    /**
     * Get all the deployments for a resource group.
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
    listByResourceGroupNextWithHttpOperationResponse(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.DeploymentListResult>>;
    /**
     * @summary Deletes a deployment from the deployment history.
     *
     * A template deployment that is currently running cannot be deleted. Deleting a template
     * deployment removes the associated deployment operations. Deleting a template deployment does not
     * affect the state of the resource group. This is an asynchronous operation that returns a status
     * of 202 until the template deployment is successfully deleted. The Location response header
     * contains the URI that is used to obtain the status of the process. While the process is running,
     * a call to the URI in the Location header returns a status of 202. When the process finishes, the
     * URI in the Location header returns a status of 204 on success. If the asynchronous request
     * failed, the URI in the Location header returns an error-level status code.
     *
     * @param {string} resourceGroupName The name of the resource group with the deployment to delete.
     * The name is case insensitive.
     *
     * @param {string} deploymentName The name of the deployment to delete.
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
    deleteMethod(resourceGroupName: string, deploymentName: string): Promise<void>;
    deleteMethod(resourceGroupName: string, deploymentName: string, options: msRest.RequestOptionsBase): Promise<void>;
    deleteMethod(resourceGroupName: string, deploymentName: string, callback: msRest.ServiceCallback<void>): void;
    deleteMethod(resourceGroupName: string, deploymentName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * Checks whether the deployment exists.
     *
     * @param {string} resourceGroupName The name of the resource group with the deployment to check.
     * The name is case insensitive.
     *
     * @param {string} deploymentName The name of the deployment to check.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {boolean} [result]   - The deserialized result object if an error did not occur.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    checkExistence(resourceGroupName: string, deploymentName: string): Promise<boolean>;
    checkExistence(resourceGroupName: string, deploymentName: string, options: msRest.RequestOptionsBase): Promise<boolean>;
    checkExistence(resourceGroupName: string, deploymentName: string, callback: msRest.ServiceCallback<boolean>): void;
    checkExistence(resourceGroupName: string, deploymentName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<boolean>): void;
    /**
     * @summary Deploys resources to a resource group.
     *
     * You can provide the template and parameters directly in the request or link to JSON files.
     *
     * @param {string} resourceGroupName The name of the resource group to deploy the resources to. The
     * name is case insensitive. The resource group must already exist.
     *
     * @param {string} deploymentName The name of the deployment.
     *
     * @param {Deployment} parameters Additional parameters supplied to the operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.DeploymentExtended} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.DeploymentExtended} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    createOrUpdate(resourceGroupName: string, deploymentName: string, parameters: Models.Deployment): Promise<Models.DeploymentExtended>;
    createOrUpdate(resourceGroupName: string, deploymentName: string, parameters: Models.Deployment, options: msRest.RequestOptionsBase): Promise<Models.DeploymentExtended>;
    createOrUpdate(resourceGroupName: string, deploymentName: string, parameters: Models.Deployment, callback: msRest.ServiceCallback<Models.DeploymentExtended>): void;
    createOrUpdate(resourceGroupName: string, deploymentName: string, parameters: Models.Deployment, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DeploymentExtended>): void;
    /**
     * Gets a deployment.
     *
     * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
     *
     * @param {string} deploymentName The name of the deployment to get.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.DeploymentExtended} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.DeploymentExtended} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    get(resourceGroupName: string, deploymentName: string): Promise<Models.DeploymentExtended>;
    get(resourceGroupName: string, deploymentName: string, options: msRest.RequestOptionsBase): Promise<Models.DeploymentExtended>;
    get(resourceGroupName: string, deploymentName: string, callback: msRest.ServiceCallback<Models.DeploymentExtended>): void;
    get(resourceGroupName: string, deploymentName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DeploymentExtended>): void;
    /**
     * @summary Cancels a currently running template deployment.
     *
     * You can cancel a deployment only if the provisioningState is Accepted or Running. After the
     * deployment is canceled, the provisioningState is set to Canceled. Canceling a template
     * deployment stops the currently running template deployment and leaves the resource group
     * partially deployed.
     *
     * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
     *
     * @param {string} deploymentName The name of the deployment to cancel.
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
    cancel(resourceGroupName: string, deploymentName: string): Promise<void>;
    cancel(resourceGroupName: string, deploymentName: string, options: msRest.RequestOptionsBase): Promise<void>;
    cancel(resourceGroupName: string, deploymentName: string, callback: msRest.ServiceCallback<void>): void;
    cancel(resourceGroupName: string, deploymentName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * Validates whether the specified template is syntactically correct and will be accepted by Azure
     * Resource Manager..
     *
     * @param {string} resourceGroupName The name of the resource group the template will be deployed
     * to. The name is case insensitive.
     *
     * @param {string} deploymentName The name of the deployment.
     *
     * @param {Deployment} parameters Parameters to validate.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.DeploymentValidateResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.DeploymentValidateResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    validate(resourceGroupName: string, deploymentName: string, parameters: Models.Deployment): Promise<Models.DeploymentValidateResult>;
    validate(resourceGroupName: string, deploymentName: string, parameters: Models.Deployment, options: msRest.RequestOptionsBase): Promise<Models.DeploymentValidateResult>;
    validate(resourceGroupName: string, deploymentName: string, parameters: Models.Deployment, callback: msRest.ServiceCallback<Models.DeploymentValidateResult>): void;
    validate(resourceGroupName: string, deploymentName: string, parameters: Models.Deployment, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DeploymentValidateResult>): void;
    /**
     * Exports the template used for specified deployment.
     *
     * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
     *
     * @param {string} deploymentName The name of the deployment from which to get the template.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.DeploymentExportResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.DeploymentExportResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    exportTemplate(resourceGroupName: string, deploymentName: string): Promise<Models.DeploymentExportResult>;
    exportTemplate(resourceGroupName: string, deploymentName: string, options: msRest.RequestOptionsBase): Promise<Models.DeploymentExportResult>;
    exportTemplate(resourceGroupName: string, deploymentName: string, callback: msRest.ServiceCallback<Models.DeploymentExportResult>): void;
    exportTemplate(resourceGroupName: string, deploymentName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DeploymentExportResult>): void;
    /**
     * Get all the deployments for a resource group.
     *
     * @param {string} resourceGroupName The name of the resource group with the deployments to get.
     * The name is case insensitive.
     *
     * @param {DeploymentsListByResourceGroupOptionalParams} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.DeploymentListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.DeploymentListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listByResourceGroup(resourceGroupName: string): Promise<Models.DeploymentListResult>;
    listByResourceGroup(resourceGroupName: string, options: Models.DeploymentsListByResourceGroupOptionalParams): Promise<Models.DeploymentListResult>;
    listByResourceGroup(resourceGroupName: string, callback: msRest.ServiceCallback<Models.DeploymentListResult>): void;
    listByResourceGroup(resourceGroupName: string, options: Models.DeploymentsListByResourceGroupOptionalParams, callback: msRest.ServiceCallback<Models.DeploymentListResult>): void;
    /**
     * @summary Deletes a deployment from the deployment history.
     *
     * A template deployment that is currently running cannot be deleted. Deleting a template
     * deployment removes the associated deployment operations. Deleting a template deployment does not
     * affect the state of the resource group. This is an asynchronous operation that returns a status
     * of 202 until the template deployment is successfully deleted. The Location response header
     * contains the URI that is used to obtain the status of the process. While the process is running,
     * a call to the URI in the Location header returns a status of 202. When the process finishes, the
     * URI in the Location header returns a status of 204 on success. If the asynchronous request
     * failed, the URI in the Location header returns an error-level status code.
     *
     * @param {string} resourceGroupName The name of the resource group with the deployment to delete.
     * The name is case insensitive.
     *
     * @param {string} deploymentName The name of the deployment to delete.
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
    beginDeleteMethod(resourceGroupName: string, deploymentName: string): Promise<void>;
    beginDeleteMethod(resourceGroupName: string, deploymentName: string, options: msRest.RequestOptionsBase): Promise<void>;
    beginDeleteMethod(resourceGroupName: string, deploymentName: string, callback: msRest.ServiceCallback<void>): void;
    beginDeleteMethod(resourceGroupName: string, deploymentName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Deploys resources to a resource group.
     *
     * You can provide the template and parameters directly in the request or link to JSON files.
     *
     * @param {string} resourceGroupName The name of the resource group to deploy the resources to. The
     * name is case insensitive. The resource group must already exist.
     *
     * @param {string} deploymentName The name of the deployment.
     *
     * @param {Deployment} parameters Additional parameters supplied to the operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.DeploymentExtended} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.DeploymentExtended} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    beginCreateOrUpdate(resourceGroupName: string, deploymentName: string, parameters: Models.Deployment): Promise<Models.DeploymentExtended>;
    beginCreateOrUpdate(resourceGroupName: string, deploymentName: string, parameters: Models.Deployment, options: msRest.RequestOptionsBase): Promise<Models.DeploymentExtended>;
    beginCreateOrUpdate(resourceGroupName: string, deploymentName: string, parameters: Models.Deployment, callback: msRest.ServiceCallback<Models.DeploymentExtended>): void;
    beginCreateOrUpdate(resourceGroupName: string, deploymentName: string, parameters: Models.Deployment, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DeploymentExtended>): void;
    /**
     * Get all the deployments for a resource group.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call to List operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.DeploymentListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.DeploymentListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listByResourceGroupNext(nextPageLink: string): Promise<Models.DeploymentListResult>;
    listByResourceGroupNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.DeploymentListResult>;
    listByResourceGroupNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.DeploymentListResult>): void;
    listByResourceGroupNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DeploymentListResult>): void;
}
