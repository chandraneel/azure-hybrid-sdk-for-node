/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as msRestAzure from "ms-rest-azure-js";

const packageName = "";
const packageVersion = "";

export class ResourceManagementClientContext extends msRestAzure.AzureServiceClient {

  credentials: msRest.ServiceClientCredentials;

  subscriptionId: string;

  apiVersion: string;

  acceptLanguage: string;

  longRunningOperationRetryTimeout: number;
  baseUri: string;

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
  constructor(credentials: msRest.ServiceClientCredentials, subscriptionId: string, baseUri?: string, options?: msRestAzure.AzureServiceClientOptions) {
    if (credentials == undefined) {
      throw new Error('\'credentials\' cannot be null.');
    }
    if (subscriptionId == undefined) {
      throw new Error('\'subscriptionId\' cannot be null.');
    }

    if (!options) {
      options = {};
    }
    super(credentials, options);

    this.apiVersion = '2018-02-01';
    this.acceptLanguage = 'en-US';
    this.longRunningOperationRetryTimeout = 30;
    this.baseUri = baseUri as string;
    if (!this.baseUri) {
      this.baseUri = 'https://management.azure.com';
    }
    this.credentials = credentials;
    this.subscriptionId = subscriptionId;

    this.addUserAgentInfo(`${packageName}/${packageVersion}`);
    if(options.acceptLanguage !== null && options.acceptLanguage !== undefined) {
      this.acceptLanguage = options.acceptLanguage;
    }
    if(options.longRunningOperationRetryTimeout !== null && options.longRunningOperationRetryTimeout !== undefined) {
      this.longRunningOperationRetryTimeout = options.longRunningOperationRetryTimeout;
    }
  }
}
