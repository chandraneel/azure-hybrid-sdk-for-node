/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/loadBalancerLoadBalancingRulesMappers";
import { NetworkManagementClientContext } from "../networkManagementClientContext";

const WebResource = msRest.WebResource;

/** Class representing a LoadBalancerLoadBalancingRules. */
export class LoadBalancerLoadBalancingRules {
  private readonly client: NetworkManagementClientContext;
  private readonly serializer = new msRest.Serializer(Mappers);
  /**
   * Create a LoadBalancerLoadBalancingRules.
   * @param {NetworkManagementClientContext} client Reference to the service client.
   */
  constructor(client: NetworkManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets all the load balancing rules in a load balancer.
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
  async listWithHttpOperationResponse(resourceGroupName: string, loadBalancerName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.LoadBalancerLoadBalancingRuleListResult>> {
    let apiVersion = '2017-10-01';

    // Create HTTP transport objects
    const httpRequest = new WebResource();
    let operationRes: msRest.HttpOperationResponse;
    try {
      const operationArguments: msRest.OperationArguments = msRest.createOperationArguments(
        {
          resourceGroupName,
          loadBalancerName,
          apiVersion,
          "this.client.subscriptionId": this.client.subscriptionId,
          "this.client.acceptLanguage": this.client.acceptLanguage
        },
        options);
      operationRes = await this.client.sendOperationRequest(
        httpRequest,
        operationArguments,
        {
          httpMethod: "GET",
          baseUrl: this.client.baseUri,
          path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/loadBalancers/{loadBalancerName}/loadBalancingRules",
          urlParameters: [
            {
              parameterPath: "resourceGroupName",
              mapper: {
                required: true,
                serializedName: "resourceGroupName",
                type: {
                  name: "String"
                }
              }
            },
            {
              parameterPath: "loadBalancerName",
              mapper: {
                required: true,
                serializedName: "loadBalancerName",
                type: {
                  name: "String"
                }
              }
            },
            {
              parameterPath: "this.client.subscriptionId",
              mapper: {
                required: true,
                serializedName: "subscriptionId",
                type: {
                  name: "String"
                }
              }
            }
          ],
          queryParameters: [
            {
              parameterPath: "apiVersion",
              mapper: {
                required: true,
                isConstant: true,
                serializedName: "api-version",
                defaultValue: '2017-10-01',
                type: {
                  name: "String"
                }
              }
            }
          ],
          headerParameters: [
            {
              parameterPath: "this.client.acceptLanguage",
              mapper: {
                serializedName: "accept-language",
                defaultValue: 'en-US',
                type: {
                  name: "String"
                }
              }
            }
          ],
          responses: {
            200: {
              bodyMapper: Mappers.LoadBalancerLoadBalancingRuleListResult
            },
            default: {
              bodyMapper: Mappers.CloudError
            }
          },
          serializer: this.serializer
        });
      // Deserialize Response
      let statusCode = operationRes.status;
      if (statusCode === 200) {
        let parsedResponse = operationRes.parsedBody as { [key: string]: any };
        try {
          if (parsedResponse != undefined) {
            const resultMapper = Mappers.LoadBalancerLoadBalancingRuleListResult;
            operationRes.parsedBody = this.serializer.deserialize(resultMapper, parsedResponse, 'operationRes.parsedBody');
          }
        } catch (error) {
          let deserializationError = new msRest.RestError(`Error ${error} occurred in deserializing the responseBody - ${operationRes.bodyAsText}`);
          deserializationError.request = msRest.stripRequest(httpRequest);
          deserializationError.response = msRest.stripResponse(operationRes);
          return Promise.reject(deserializationError);
        }
      }
    } catch (err) {
      return Promise.reject(err);
    }
    return Promise.resolve(operationRes);
  }

  /**
   * Gets the specified load balancer load balancing rule.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} loadBalancerName The name of the load balancer.
   *
   * @param {string} loadBalancingRuleName The name of the load balancing rule.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  async getWithHttpOperationResponse(resourceGroupName: string, loadBalancerName: string, loadBalancingRuleName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.LoadBalancingRule>> {
    let apiVersion = '2017-10-01';

    // Create HTTP transport objects
    const httpRequest = new WebResource();
    let operationRes: msRest.HttpOperationResponse;
    try {
      const operationArguments: msRest.OperationArguments = msRest.createOperationArguments(
        {
          resourceGroupName,
          loadBalancerName,
          loadBalancingRuleName,
          apiVersion,
          "this.client.subscriptionId": this.client.subscriptionId,
          "this.client.acceptLanguage": this.client.acceptLanguage
        },
        options);
      operationRes = await this.client.sendOperationRequest(
        httpRequest,
        operationArguments,
        {
          httpMethod: "GET",
          baseUrl: this.client.baseUri,
          path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/loadBalancers/{loadBalancerName}/loadBalancingRules/{loadBalancingRuleName}",
          urlParameters: [
            {
              parameterPath: "resourceGroupName",
              mapper: {
                required: true,
                serializedName: "resourceGroupName",
                type: {
                  name: "String"
                }
              }
            },
            {
              parameterPath: "loadBalancerName",
              mapper: {
                required: true,
                serializedName: "loadBalancerName",
                type: {
                  name: "String"
                }
              }
            },
            {
              parameterPath: "loadBalancingRuleName",
              mapper: {
                required: true,
                serializedName: "loadBalancingRuleName",
                type: {
                  name: "String"
                }
              }
            },
            {
              parameterPath: "this.client.subscriptionId",
              mapper: {
                required: true,
                serializedName: "subscriptionId",
                type: {
                  name: "String"
                }
              }
            }
          ],
          queryParameters: [
            {
              parameterPath: "apiVersion",
              mapper: {
                required: true,
                isConstant: true,
                serializedName: "api-version",
                defaultValue: '2017-10-01',
                type: {
                  name: "String"
                }
              }
            }
          ],
          headerParameters: [
            {
              parameterPath: "this.client.acceptLanguage",
              mapper: {
                serializedName: "accept-language",
                defaultValue: 'en-US',
                type: {
                  name: "String"
                }
              }
            }
          ],
          responses: {
            200: {
              bodyMapper: Mappers.LoadBalancingRule
            },
            default: {
              bodyMapper: Mappers.CloudError
            }
          },
          serializer: this.serializer
        });
      // Deserialize Response
      let statusCode = operationRes.status;
      if (statusCode === 200) {
        let parsedResponse = operationRes.parsedBody as { [key: string]: any };
        try {
          if (parsedResponse != undefined) {
            const resultMapper = Mappers.LoadBalancingRule;
            operationRes.parsedBody = this.serializer.deserialize(resultMapper, parsedResponse, 'operationRes.parsedBody');
          }
        } catch (error) {
          let deserializationError = new msRest.RestError(`Error ${error} occurred in deserializing the responseBody - ${operationRes.bodyAsText}`);
          deserializationError.request = msRest.stripRequest(httpRequest);
          deserializationError.response = msRest.stripResponse(operationRes);
          return Promise.reject(deserializationError);
        }
      }
    } catch (err) {
      return Promise.reject(err);
    }
    return Promise.resolve(operationRes);
  }

  /**
   * Gets all the load balancing rules in a load balancer.
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
  async listNextWithHttpOperationResponse(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.LoadBalancerLoadBalancingRuleListResult>> {

    // Create HTTP transport objects
    const httpRequest = new WebResource();
    let operationRes: msRest.HttpOperationResponse;
    try {
      const operationArguments: msRest.OperationArguments = msRest.createOperationArguments(
        {
          nextPageLink,
          "this.client.acceptLanguage": this.client.acceptLanguage
        },
        options);
      operationRes = await this.client.sendOperationRequest(
        httpRequest,
        operationArguments,
        {
          httpMethod: "GET",
          baseUrl: "https://management.azure.com",
          path: "{nextLink}",
          urlParameters: [
            {
              parameterPath: "nextPageLink",
              skipEncoding: true,
              mapper: {
                required: true,
                serializedName: "nextLink",
                type: {
                  name: "String"
                }
              }
            }
          ],
          headerParameters: [
            {
              parameterPath: "this.client.acceptLanguage",
              mapper: {
                serializedName: "accept-language",
                defaultValue: 'en-US',
                type: {
                  name: "String"
                }
              }
            }
          ],
          responses: {
            200: {
              bodyMapper: Mappers.LoadBalancerLoadBalancingRuleListResult
            },
            default: {
              bodyMapper: Mappers.CloudError
            }
          },
          serializer: this.serializer
        });
      // Deserialize Response
      let statusCode = operationRes.status;
      if (statusCode === 200) {
        let parsedResponse = operationRes.parsedBody as { [key: string]: any };
        try {
          if (parsedResponse != undefined) {
            const resultMapper = Mappers.LoadBalancerLoadBalancingRuleListResult;
            operationRes.parsedBody = this.serializer.deserialize(resultMapper, parsedResponse, 'operationRes.parsedBody');
          }
        } catch (error) {
          let deserializationError = new msRest.RestError(`Error ${error} occurred in deserializing the responseBody - ${operationRes.bodyAsText}`);
          deserializationError.request = msRest.stripRequest(httpRequest);
          deserializationError.response = msRest.stripResponse(operationRes);
          return Promise.reject(deserializationError);
        }
      }
    } catch (err) {
      return Promise.reject(err);
    }
    return Promise.resolve(operationRes);
  }

  /**
   * Gets all the load balancing rules in a load balancer.
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
   *                      {Models.LoadBalancerLoadBalancingRuleListResult} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Models.LoadBalancerLoadBalancingRuleListResult} for more information.
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  list(resourceGroupName: string, loadBalancerName: string): Promise<Models.LoadBalancerLoadBalancingRuleListResult>;
  list(resourceGroupName: string, loadBalancerName: string, options: msRest.RequestOptionsBase): Promise<Models.LoadBalancerLoadBalancingRuleListResult>;
  list(resourceGroupName: string, loadBalancerName: string, callback: msRest.ServiceCallback<Models.LoadBalancerLoadBalancingRuleListResult>): void;
  list(resourceGroupName: string, loadBalancerName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.LoadBalancerLoadBalancingRuleListResult>): void;
  list(resourceGroupName: string, loadBalancerName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.LoadBalancerLoadBalancingRuleListResult>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    let cb = callback as msRest.ServiceCallback<Models.LoadBalancerLoadBalancingRuleListResult>;
    if (!callback) {
      return this.listWithHttpOperationResponse(resourceGroupName, loadBalancerName, options).then((operationRes: msRest.HttpOperationResponse) => {
        return Promise.resolve(operationRes.parsedBody as Models.LoadBalancerLoadBalancingRuleListResult);
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.listWithHttpOperationResponse(resourceGroupName, loadBalancerName, options))((err: Error, data: msRest.HttpOperationResponse) => {
        if (err) {
          return cb(err);
        }
        let result = data.parsedBody as Models.LoadBalancerLoadBalancingRuleListResult;
        return cb(err, result, data.request, data);
      });
    }
  }

  /**
   * Gets the specified load balancer load balancing rule.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} loadBalancerName The name of the load balancer.
   *
   * @param {string} loadBalancingRuleName The name of the load balancing rule.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {Models.LoadBalancingRule} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Models.LoadBalancingRule} for more information.
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  get(resourceGroupName: string, loadBalancerName: string, loadBalancingRuleName: string): Promise<Models.LoadBalancingRule>;
  get(resourceGroupName: string, loadBalancerName: string, loadBalancingRuleName: string, options: msRest.RequestOptionsBase): Promise<Models.LoadBalancingRule>;
  get(resourceGroupName: string, loadBalancerName: string, loadBalancingRuleName: string, callback: msRest.ServiceCallback<Models.LoadBalancingRule>): void;
  get(resourceGroupName: string, loadBalancerName: string, loadBalancingRuleName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.LoadBalancingRule>): void;
  get(resourceGroupName: string, loadBalancerName: string, loadBalancingRuleName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.LoadBalancingRule>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    let cb = callback as msRest.ServiceCallback<Models.LoadBalancingRule>;
    if (!callback) {
      return this.getWithHttpOperationResponse(resourceGroupName, loadBalancerName, loadBalancingRuleName, options).then((operationRes: msRest.HttpOperationResponse) => {
        return Promise.resolve(operationRes.parsedBody as Models.LoadBalancingRule);
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.getWithHttpOperationResponse(resourceGroupName, loadBalancerName, loadBalancingRuleName, options))((err: Error, data: msRest.HttpOperationResponse) => {
        if (err) {
          return cb(err);
        }
        let result = data.parsedBody as Models.LoadBalancingRule;
        return cb(err, result, data.request, data);
      });
    }
  }

  /**
   * Gets all the load balancing rules in a load balancer.
   *
   * @param {string} nextPageLink The NextLink from the previous successful call to List operation.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {Models.LoadBalancerLoadBalancingRuleListResult} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Models.LoadBalancerLoadBalancingRuleListResult} for more information.
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  listNext(nextPageLink: string): Promise<Models.LoadBalancerLoadBalancingRuleListResult>;
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.LoadBalancerLoadBalancingRuleListResult>;
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.LoadBalancerLoadBalancingRuleListResult>): void;
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.LoadBalancerLoadBalancingRuleListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.LoadBalancerLoadBalancingRuleListResult>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    let cb = callback as msRest.ServiceCallback<Models.LoadBalancerLoadBalancingRuleListResult>;
    if (!callback) {
      return this.listNextWithHttpOperationResponse(nextPageLink, options).then((operationRes: msRest.HttpOperationResponse) => {
        return Promise.resolve(operationRes.parsedBody as Models.LoadBalancerLoadBalancingRuleListResult);
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.listNextWithHttpOperationResponse(nextPageLink, options))((err: Error, data: msRest.HttpOperationResponse) => {
        if (err) {
          return cb(err);
        }
        let result = data.parsedBody as Models.LoadBalancerLoadBalancingRuleListResult;
        return cb(err, result, data.request, data);
      });
    }
  }

}
