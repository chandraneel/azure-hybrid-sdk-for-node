/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/availabilitySetsMappers";
import { ComputeManagementClientContext } from "../computeManagementClientContext";

const WebResource = msRest.WebResource;

/** Class representing a AvailabilitySets. */
export class AvailabilitySets {
  private readonly client: ComputeManagementClientContext;
  private readonly serializer = new msRest.Serializer(Mappers);
  /**
   * Create a AvailabilitySets.
   * @param {ComputeManagementClientContext} client Reference to the service client.
   */
  constructor(client: ComputeManagementClientContext) {
    this.client = client;
  }

  /**
   * Create or update an availability set.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} availabilitySetName The name of the availability set.
   *
   * @param {AvailabilitySet} parameters Parameters supplied to the Create Availability Set
   * operation.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  async createOrUpdateWithHttpOperationResponse(resourceGroupName: string, availabilitySetName: string, parameters: Models.AvailabilitySet, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.AvailabilitySet>> {

    // Create HTTP transport objects
    const httpRequest = new WebResource();
    let operationRes: msRest.HttpOperationResponse;
    try {
      const operationArguments: msRest.OperationArguments = msRest.createOperationArguments(
        {
          resourceGroupName,
          availabilitySetName,
          parameters,
          "this.client.apiVersion": this.client.apiVersion,
          "this.client.subscriptionId": this.client.subscriptionId,
          "this.client.acceptLanguage": this.client.acceptLanguage
        },
        options);
      operationRes = await this.client.sendOperationRequest(
        httpRequest,
        operationArguments,
        {
          httpMethod: "PUT",
          baseUrl: this.client.baseUri,
          path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/availabilitySets/{availabilitySetName}",
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
              parameterPath: "availabilitySetName",
              mapper: {
                required: true,
                serializedName: "availabilitySetName",
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
              parameterPath: "this.client.apiVersion",
              mapper: {
                required: true,
                serializedName: "api-version",
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
          requestBody: {
            parameterPath: "parameters",
            mapper: {
              ...Mappers.AvailabilitySet,
              required: true
            }
          },
          contentType: "application/json; charset=utf-8",
          responses: {
            200: {
              bodyMapper: Mappers.AvailabilitySet
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
            const resultMapper = Mappers.AvailabilitySet;
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
   * Delete an availability set.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} availabilitySetName The name of the availability set.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  async deleteMethodWithHttpOperationResponse(resourceGroupName: string, availabilitySetName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.OperationStatusResponse>> {

    // Create HTTP transport objects
    const httpRequest = new WebResource();
    let operationRes: msRest.HttpOperationResponse;
    try {
      const operationArguments: msRest.OperationArguments = msRest.createOperationArguments(
        {
          resourceGroupName,
          availabilitySetName,
          "this.client.apiVersion": this.client.apiVersion,
          "this.client.subscriptionId": this.client.subscriptionId,
          "this.client.acceptLanguage": this.client.acceptLanguage
        },
        options);
      operationRes = await this.client.sendOperationRequest(
        httpRequest,
        operationArguments,
        {
          httpMethod: "DELETE",
          baseUrl: this.client.baseUri,
          path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/availabilitySets/{availabilitySetName}",
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
              parameterPath: "availabilitySetName",
              mapper: {
                required: true,
                serializedName: "availabilitySetName",
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
              parameterPath: "this.client.apiVersion",
              mapper: {
                required: true,
                serializedName: "api-version",
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
              bodyMapper: Mappers.OperationStatusResponse
            },
            204: {},
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
            const resultMapper = Mappers.OperationStatusResponse;
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
   * Retrieves information about an availability set.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} availabilitySetName The name of the availability set.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  async getWithHttpOperationResponse(resourceGroupName: string, availabilitySetName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.AvailabilitySet>> {

    // Create HTTP transport objects
    const httpRequest = new WebResource();
    let operationRes: msRest.HttpOperationResponse;
    try {
      const operationArguments: msRest.OperationArguments = msRest.createOperationArguments(
        {
          resourceGroupName,
          availabilitySetName,
          "this.client.apiVersion": this.client.apiVersion,
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
          path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/availabilitySets/{availabilitySetName}",
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
              parameterPath: "availabilitySetName",
              mapper: {
                required: true,
                serializedName: "availabilitySetName",
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
              parameterPath: "this.client.apiVersion",
              mapper: {
                required: true,
                serializedName: "api-version",
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
              bodyMapper: Mappers.AvailabilitySet
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
            const resultMapper = Mappers.AvailabilitySet;
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
   * Lists all availability sets in a resource group.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  async listWithHttpOperationResponse(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.AvailabilitySetListResult>> {

    // Create HTTP transport objects
    const httpRequest = new WebResource();
    let operationRes: msRest.HttpOperationResponse;
    try {
      const operationArguments: msRest.OperationArguments = msRest.createOperationArguments(
        {
          resourceGroupName,
          "this.client.apiVersion": this.client.apiVersion,
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
          path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/availabilitySets",
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
              parameterPath: "this.client.apiVersion",
              mapper: {
                required: true,
                serializedName: "api-version",
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
              bodyMapper: Mappers.AvailabilitySetListResult
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
            const resultMapper = Mappers.AvailabilitySetListResult;
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
   * Lists all available virtual machine sizes that can be used to create a new virtual machine in an
   * existing availability set.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} availabilitySetName The name of the availability set.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  async listAvailableSizesWithHttpOperationResponse(resourceGroupName: string, availabilitySetName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.VirtualMachineSizeListResult>> {

    // Create HTTP transport objects
    const httpRequest = new WebResource();
    let operationRes: msRest.HttpOperationResponse;
    try {
      const operationArguments: msRest.OperationArguments = msRest.createOperationArguments(
        {
          resourceGroupName,
          availabilitySetName,
          "this.client.apiVersion": this.client.apiVersion,
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
          path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/availabilitySets/{availabilitySetName}/vmSizes",
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
              parameterPath: "availabilitySetName",
              mapper: {
                required: true,
                serializedName: "availabilitySetName",
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
              parameterPath: "this.client.apiVersion",
              mapper: {
                required: true,
                serializedName: "api-version",
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
              bodyMapper: Mappers.VirtualMachineSizeListResult
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
            const resultMapper = Mappers.VirtualMachineSizeListResult;
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
   * Create or update an availability set.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} availabilitySetName The name of the availability set.
   *
   * @param {AvailabilitySet} parameters Parameters supplied to the Create Availability Set
   * operation.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {Models.AvailabilitySet} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Models.AvailabilitySet} for more information.
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  createOrUpdate(resourceGroupName: string, availabilitySetName: string, parameters: Models.AvailabilitySet): Promise<Models.AvailabilitySet>;
  createOrUpdate(resourceGroupName: string, availabilitySetName: string, parameters: Models.AvailabilitySet, options: msRest.RequestOptionsBase): Promise<Models.AvailabilitySet>;
  createOrUpdate(resourceGroupName: string, availabilitySetName: string, parameters: Models.AvailabilitySet, callback: msRest.ServiceCallback<Models.AvailabilitySet>): void;
  createOrUpdate(resourceGroupName: string, availabilitySetName: string, parameters: Models.AvailabilitySet, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AvailabilitySet>): void;
  createOrUpdate(resourceGroupName: string, availabilitySetName: string, parameters: Models.AvailabilitySet, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.AvailabilitySet>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    let cb = callback as msRest.ServiceCallback<Models.AvailabilitySet>;
    if (!callback) {
      return this.createOrUpdateWithHttpOperationResponse(resourceGroupName, availabilitySetName, parameters, options).then((operationRes: msRest.HttpOperationResponse) => {
        return Promise.resolve(operationRes.parsedBody as Models.AvailabilitySet);
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.createOrUpdateWithHttpOperationResponse(resourceGroupName, availabilitySetName, parameters, options))((err: Error, data: msRest.HttpOperationResponse) => {
        if (err) {
          return cb(err);
        }
        let result = data.parsedBody as Models.AvailabilitySet;
        return cb(err, result, data.request, data);
      });
    }
  }

  /**
   * Delete an availability set.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} availabilitySetName The name of the availability set.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {Models.OperationStatusResponse} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Models.OperationStatusResponse} for more information.
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  deleteMethod(resourceGroupName: string, availabilitySetName: string): Promise<Models.OperationStatusResponse>;
  deleteMethod(resourceGroupName: string, availabilitySetName: string, options: msRest.RequestOptionsBase): Promise<Models.OperationStatusResponse>;
  deleteMethod(resourceGroupName: string, availabilitySetName: string, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
  deleteMethod(resourceGroupName: string, availabilitySetName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OperationStatusResponse>): void;
  deleteMethod(resourceGroupName: string, availabilitySetName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.OperationStatusResponse>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    let cb = callback as msRest.ServiceCallback<Models.OperationStatusResponse>;
    if (!callback) {
      return this.deleteMethodWithHttpOperationResponse(resourceGroupName, availabilitySetName, options).then((operationRes: msRest.HttpOperationResponse) => {
        return Promise.resolve(operationRes.parsedBody as Models.OperationStatusResponse);
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.deleteMethodWithHttpOperationResponse(resourceGroupName, availabilitySetName, options))((err: Error, data: msRest.HttpOperationResponse) => {
        if (err) {
          return cb(err);
        }
        let result = data.parsedBody as Models.OperationStatusResponse;
        return cb(err, result, data.request, data);
      });
    }
  }

  /**
   * Retrieves information about an availability set.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} availabilitySetName The name of the availability set.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {Models.AvailabilitySet} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Models.AvailabilitySet} for more information.
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  get(resourceGroupName: string, availabilitySetName: string): Promise<Models.AvailabilitySet>;
  get(resourceGroupName: string, availabilitySetName: string, options: msRest.RequestOptionsBase): Promise<Models.AvailabilitySet>;
  get(resourceGroupName: string, availabilitySetName: string, callback: msRest.ServiceCallback<Models.AvailabilitySet>): void;
  get(resourceGroupName: string, availabilitySetName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AvailabilitySet>): void;
  get(resourceGroupName: string, availabilitySetName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.AvailabilitySet>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    let cb = callback as msRest.ServiceCallback<Models.AvailabilitySet>;
    if (!callback) {
      return this.getWithHttpOperationResponse(resourceGroupName, availabilitySetName, options).then((operationRes: msRest.HttpOperationResponse) => {
        return Promise.resolve(operationRes.parsedBody as Models.AvailabilitySet);
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.getWithHttpOperationResponse(resourceGroupName, availabilitySetName, options))((err: Error, data: msRest.HttpOperationResponse) => {
        if (err) {
          return cb(err);
        }
        let result = data.parsedBody as Models.AvailabilitySet;
        return cb(err, result, data.request, data);
      });
    }
  }

  /**
   * Lists all availability sets in a resource group.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {Models.AvailabilitySetListResult} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Models.AvailabilitySetListResult} for more information.
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  list(resourceGroupName: string): Promise<Models.AvailabilitySetListResult>;
  list(resourceGroupName: string, options: msRest.RequestOptionsBase): Promise<Models.AvailabilitySetListResult>;
  list(resourceGroupName: string, callback: msRest.ServiceCallback<Models.AvailabilitySetListResult>): void;
  list(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AvailabilitySetListResult>): void;
  list(resourceGroupName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.AvailabilitySetListResult>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    let cb = callback as msRest.ServiceCallback<Models.AvailabilitySetListResult>;
    if (!callback) {
      return this.listWithHttpOperationResponse(resourceGroupName, options).then((operationRes: msRest.HttpOperationResponse) => {
        return Promise.resolve(operationRes.parsedBody as Models.AvailabilitySetListResult);
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.listWithHttpOperationResponse(resourceGroupName, options))((err: Error, data: msRest.HttpOperationResponse) => {
        if (err) {
          return cb(err);
        }
        let result = data.parsedBody as Models.AvailabilitySetListResult;
        return cb(err, result, data.request, data);
      });
    }
  }

  /**
   * Lists all available virtual machine sizes that can be used to create a new virtual machine in an
   * existing availability set.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} availabilitySetName The name of the availability set.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {Models.VirtualMachineSizeListResult} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Models.VirtualMachineSizeListResult} for more information.
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  listAvailableSizes(resourceGroupName: string, availabilitySetName: string): Promise<Models.VirtualMachineSizeListResult>;
  listAvailableSizes(resourceGroupName: string, availabilitySetName: string, options: msRest.RequestOptionsBase): Promise<Models.VirtualMachineSizeListResult>;
  listAvailableSizes(resourceGroupName: string, availabilitySetName: string, callback: msRest.ServiceCallback<Models.VirtualMachineSizeListResult>): void;
  listAvailableSizes(resourceGroupName: string, availabilitySetName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VirtualMachineSizeListResult>): void;
  listAvailableSizes(resourceGroupName: string, availabilitySetName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.VirtualMachineSizeListResult>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    let cb = callback as msRest.ServiceCallback<Models.VirtualMachineSizeListResult>;
    if (!callback) {
      return this.listAvailableSizesWithHttpOperationResponse(resourceGroupName, availabilitySetName, options).then((operationRes: msRest.HttpOperationResponse) => {
        return Promise.resolve(operationRes.parsedBody as Models.VirtualMachineSizeListResult);
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.listAvailableSizesWithHttpOperationResponse(resourceGroupName, availabilitySetName, options))((err: Error, data: msRest.HttpOperationResponse) => {
        if (err) {
          return cb(err);
        }
        let result = data.parsedBody as Models.VirtualMachineSizeListResult;
        return cb(err, result, data.request, data);
      });
    }
  }

}
