/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/networkInterfaceLoadBalancersMappers";
import { NetworkManagementClientContext } from "../networkManagementClientContext";

const WebResource = msRest.WebResource;

/** Class representing a NetworkInterfaceLoadBalancers. */
export class NetworkInterfaceLoadBalancers {
  private readonly client: NetworkManagementClientContext;
  private readonly serializer = new msRest.Serializer(Mappers);
  /**
   * Create a NetworkInterfaceLoadBalancers.
   * @param {NetworkManagementClientContext} client Reference to the service client.
   */
  constructor(client: NetworkManagementClientContext) {
    this.client = client;
  }

  /**
   * List all load balancers in a network interface.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} networkInterfaceName The name of the network interface.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  async listWithHttpOperationResponse(resourceGroupName: string, networkInterfaceName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.NetworkInterfaceLoadBalancerListResult>> {
    let apiVersion = '2017-10-01';

    // Create HTTP transport objects
    const httpRequest = new WebResource();
    let operationRes: msRest.HttpOperationResponse;
    try {
      const operationArguments: msRest.OperationArguments = msRest.createOperationArguments(
        {
          resourceGroupName,
          networkInterfaceName,
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
          path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkInterfaces/{networkInterfaceName}/loadBalancers",
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
              parameterPath: "networkInterfaceName",
              mapper: {
                required: true,
                serializedName: "networkInterfaceName",
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
              bodyMapper: Mappers.NetworkInterfaceLoadBalancerListResult
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
            const resultMapper = Mappers.NetworkInterfaceLoadBalancerListResult;
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
   * List all load balancers in a network interface.
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
  async listNextWithHttpOperationResponse(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.NetworkInterfaceLoadBalancerListResult>> {

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
              bodyMapper: Mappers.NetworkInterfaceLoadBalancerListResult
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
            const resultMapper = Mappers.NetworkInterfaceLoadBalancerListResult;
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
   * List all load balancers in a network interface.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} networkInterfaceName The name of the network interface.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {Models.NetworkInterfaceLoadBalancerListResult} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Models.NetworkInterfaceLoadBalancerListResult} for more information.
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  list(resourceGroupName: string, networkInterfaceName: string): Promise<Models.NetworkInterfaceLoadBalancerListResult>;
  list(resourceGroupName: string, networkInterfaceName: string, options: msRest.RequestOptionsBase): Promise<Models.NetworkInterfaceLoadBalancerListResult>;
  list(resourceGroupName: string, networkInterfaceName: string, callback: msRest.ServiceCallback<Models.NetworkInterfaceLoadBalancerListResult>): void;
  list(resourceGroupName: string, networkInterfaceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.NetworkInterfaceLoadBalancerListResult>): void;
  list(resourceGroupName: string, networkInterfaceName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.NetworkInterfaceLoadBalancerListResult>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    let cb = callback as msRest.ServiceCallback<Models.NetworkInterfaceLoadBalancerListResult>;
    if (!callback) {
      return this.listWithHttpOperationResponse(resourceGroupName, networkInterfaceName, options).then((operationRes: msRest.HttpOperationResponse) => {
        return Promise.resolve(operationRes.parsedBody as Models.NetworkInterfaceLoadBalancerListResult);
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.listWithHttpOperationResponse(resourceGroupName, networkInterfaceName, options))((err: Error, data: msRest.HttpOperationResponse) => {
        if (err) {
          return cb(err);
        }
        let result = data.parsedBody as Models.NetworkInterfaceLoadBalancerListResult;
        return cb(err, result, data.request, data);
      });
    }
  }

  /**
   * List all load balancers in a network interface.
   *
   * @param {string} nextPageLink The NextLink from the previous successful call to List operation.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {Models.NetworkInterfaceLoadBalancerListResult} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Models.NetworkInterfaceLoadBalancerListResult} for more information.
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  listNext(nextPageLink: string): Promise<Models.NetworkInterfaceLoadBalancerListResult>;
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.NetworkInterfaceLoadBalancerListResult>;
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.NetworkInterfaceLoadBalancerListResult>): void;
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.NetworkInterfaceLoadBalancerListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.NetworkInterfaceLoadBalancerListResult>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    let cb = callback as msRest.ServiceCallback<Models.NetworkInterfaceLoadBalancerListResult>;
    if (!callback) {
      return this.listNextWithHttpOperationResponse(nextPageLink, options).then((operationRes: msRest.HttpOperationResponse) => {
        return Promise.resolve(operationRes.parsedBody as Models.NetworkInterfaceLoadBalancerListResult);
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.listNextWithHttpOperationResponse(nextPageLink, options))((err: Error, data: msRest.HttpOperationResponse) => {
        if (err) {
          return cb(err);
        }
        let result = data.parsedBody as Models.NetworkInterfaceLoadBalancerListResult;
        return cb(err, result, data.request, data);
      });
    }
  }

}
