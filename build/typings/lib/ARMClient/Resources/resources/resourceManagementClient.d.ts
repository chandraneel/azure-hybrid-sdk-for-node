import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as msRest from "ms-rest-js";
import * as msRestAzure from "ms-rest-azure-js";
import { ResourceManagementClientContext } from "./resourceManagementClientContext";
import * as operations from "./operations";
declare class ResourceManagementClient extends ResourceManagementClientContext {
    serializer: msRest.Serializer;
    deployments: operations.Deployments;
    providers: operations.Providers;
    resources: operations.Resources;
    resourceGroups: operations.ResourceGroups;
    tags: operations.Tags;
    deploymentOperations: operations.DeploymentOperations;
    /**
     * @class
     * Initializes a new instance of the ResourceManagementClient class.
     * @constructor
     *
     * @param {msRest.ServiceClientCredentials} credentials - Credentials needed for the client to connect to Azure.
     *
     * @param {string} subscriptionId - The ID of the target subscription.
     *
     * @param {string} [baseUri] - The base URI of the service.
     *
     * @param {object} [options] - The parameter options
     *
     * @param {Array} [options.filters] - Filters to be added to the request pipeline
     *
     * @param {object} [options.requestOptions] - The request options. Detailed info can be found at
     * {@link https://github.github.io/fetch/#Request Options doc}
     *
     * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
     *
     * @param {string} [options.acceptLanguage] - The preferred language for the response.
     *
     * @param {number} [options.longRunningOperationRetryTimeout] - The retry timeout in seconds for Long Running Operations. Default value is 30.
     *
     * @param {boolean} [options.generateClientRequestId] - Whether a unique x-ms-client-request-id should be generated. When set to true a unique x-ms-client-request-id value is generated and included in each request. Default is true.
     *
     */
    constructor(credentials: msRest.ServiceClientCredentials, subscriptionId: string, baseUri?: string, options?: msRestAzure.AzureServiceClientOptions);
}
export { ResourceManagementClient, Models as ResourceManagementModels, Mappers as ResourceManagementMappers };
