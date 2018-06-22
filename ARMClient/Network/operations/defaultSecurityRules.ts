/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/defaultSecurityRulesMappers";
import { NetworkManagementClientContext } from "../networkManagementClientContext";

const WebResource = msRest.WebResource;

/** Class representing a DefaultSecurityRules. */
export class DefaultSecurityRules {
  private readonly client: NetworkManagementClientContext;
  private readonly serializer = new msRest.Serializer(Mappers);
  /**
   * Create a DefaultSecurityRules.
   * @param {NetworkManagementClientContext} client Reference to the service client.
   */
  constructor(client: NetworkManagementClientContext) {
    this.client = client;
  }

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
  async listWithHttpOperationResponse(resourceGroupName: string, networkSecurityGroupName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.SecurityRuleListResult>> {
    let apiVersion = '2017-10-01';

    // Create HTTP transport objects
    const httpRequest = new WebResource();
    let operationRes: msRest.HttpOperationResponse;
    try {
      const operationArguments: msRest.OperationArguments = msRest.createOperationArguments(
        {
          resourceGroupName,
          networkSecurityGroupName,
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
          path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkSecurityGroups/{networkSecurityGroupName}/defaultSecurityRules",
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
              parameterPath: "networkSecurityGroupName",
              mapper: {
                required: true,
                serializedName: "networkSecurityGroupName",
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
              bodyMapper: Mappers.SecurityRuleListResult
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
            const resultMapper = Mappers.SecurityRuleListResult;
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
  async getWithHttpOperationResponse(resourceGroupName: string, networkSecurityGroupName: string, defaultSecurityRuleName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.SecurityRule>> {
    let apiVersion = '2017-10-01';

    // Create HTTP transport objects
    const httpRequest = new WebResource();
    let operationRes: msRest.HttpOperationResponse;
    try {
      const operationArguments: msRest.OperationArguments = msRest.createOperationArguments(
        {
          resourceGroupName,
          networkSecurityGroupName,
          defaultSecurityRuleName,
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
          path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkSecurityGroups/{networkSecurityGroupName}/defaultSecurityRules/{defaultSecurityRuleName}",
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
              parameterPath: "networkSecurityGroupName",
              mapper: {
                required: true,
                serializedName: "networkSecurityGroupName",
                type: {
                  name: "String"
                }
              }
            },
            {
              parameterPath: "defaultSecurityRuleName",
              mapper: {
                required: true,
                serializedName: "defaultSecurityRuleName",
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
              bodyMapper: Mappers.SecurityRule
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
            const resultMapper = Mappers.SecurityRule;
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
  async listNextWithHttpOperationResponse(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.SecurityRuleListResult>> {

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
              bodyMapper: Mappers.SecurityRuleListResult
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
            const resultMapper = Mappers.SecurityRuleListResult;
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
  list(resourceGroupName: string, networkSecurityGroupName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.SecurityRuleListResult>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    let cb = callback as msRest.ServiceCallback<Models.SecurityRuleListResult>;
    if (!callback) {
      return this.listWithHttpOperationResponse(resourceGroupName, networkSecurityGroupName, options).then((operationRes: msRest.HttpOperationResponse) => {
        return Promise.resolve(operationRes.parsedBody as Models.SecurityRuleListResult);
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.listWithHttpOperationResponse(resourceGroupName, networkSecurityGroupName, options))((err: Error, data: msRest.HttpOperationResponse) => {
        if (err) {
          return cb(err);
        }
        let result = data.parsedBody as Models.SecurityRuleListResult;
        return cb(err, result, data.request, data);
      });
    }
  }

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
  get(resourceGroupName: string, networkSecurityGroupName: string, defaultSecurityRuleName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.SecurityRule>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    let cb = callback as msRest.ServiceCallback<Models.SecurityRule>;
    if (!callback) {
      return this.getWithHttpOperationResponse(resourceGroupName, networkSecurityGroupName, defaultSecurityRuleName, options).then((operationRes: msRest.HttpOperationResponse) => {
        return Promise.resolve(operationRes.parsedBody as Models.SecurityRule);
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.getWithHttpOperationResponse(resourceGroupName, networkSecurityGroupName, defaultSecurityRuleName, options))((err: Error, data: msRest.HttpOperationResponse) => {
        if (err) {
          return cb(err);
        }
        let result = data.parsedBody as Models.SecurityRule;
        return cb(err, result, data.request, data);
      });
    }
  }

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
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.SecurityRuleListResult>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    let cb = callback as msRest.ServiceCallback<Models.SecurityRuleListResult>;
    if (!callback) {
      return this.listNextWithHttpOperationResponse(nextPageLink, options).then((operationRes: msRest.HttpOperationResponse) => {
        return Promise.resolve(operationRes.parsedBody as Models.SecurityRuleListResult);
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.listNextWithHttpOperationResponse(nextPageLink, options))((err: Error, data: msRest.HttpOperationResponse) => {
        if (err) {
          return cb(err);
        }
        let result = data.parsedBody as Models.SecurityRuleListResult;
        return cb(err, result, data.request, data);
      });
    }
  }

}