/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/virtualMachineExtensionImagesMappers";
import { ComputeManagementClientContext } from "../computeManagementClientContext";

const WebResource = msRest.WebResource;

/** Class representing a VirtualMachineExtensionImages. */
export class VirtualMachineExtensionImages {
  private readonly client: ComputeManagementClientContext;
  private readonly serializer = new msRest.Serializer(Mappers);
  /**
   * Create a VirtualMachineExtensionImages.
   * @param {ComputeManagementClientContext} client Reference to the service client.
   */
  constructor(client: ComputeManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets a virtual machine extension image.
   *
   * @param {string} location The name of a supported Azure region.
   *
   * @param {string} publisherName
   *
   * @param {string} type
   *
   * @param {string} version
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  async getWithHttpOperationResponse(location: string, publisherName: string, type: string, version: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.VirtualMachineExtensionImage>> {

    // Create HTTP transport objects
    const httpRequest = new WebResource();
    let operationRes: msRest.HttpOperationResponse;
    try {
      const operationArguments: msRest.OperationArguments = msRest.createOperationArguments(
        {
          location,
          publisherName,
          type,
          version,
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
          path: "subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/publishers/{publisherName}/artifacttypes/vmextension/types/{type}/versions/{version}",
          urlParameters: [
            {
              parameterPath: "location",
              mapper: {
                required: true,
                serializedName: "location",
                type: {
                  name: "String"
                }
              }
            },
            {
              parameterPath: "publisherName",
              mapper: {
                required: true,
                serializedName: "publisherName",
                type: {
                  name: "String"
                }
              }
            },
            {
              parameterPath: "type",
              mapper: {
                required: true,
                serializedName: "type",
                type: {
                  name: "String"
                }
              }
            },
            {
              parameterPath: "version",
              mapper: {
                required: true,
                serializedName: "version",
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
              bodyMapper: Mappers.VirtualMachineExtensionImage
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
            const resultMapper = Mappers.VirtualMachineExtensionImage;
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
   * Gets a list of virtual machine extension image types.
   *
   * @param {string} location The name of a supported Azure region.
   *
   * @param {string} publisherName
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  async listTypesWithHttpOperationResponse(location: string, publisherName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.VirtualMachineExtensionImage[]>> {

    // Create HTTP transport objects
    const httpRequest = new WebResource();
    let operationRes: msRest.HttpOperationResponse;
    try {
      const operationArguments: msRest.OperationArguments = msRest.createOperationArguments(
        {
          location,
          publisherName,
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
          path: "subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/publishers/{publisherName}/artifacttypes/vmextension/types",
          urlParameters: [
            {
              parameterPath: "location",
              mapper: {
                required: true,
                serializedName: "location",
                type: {
                  name: "String"
                }
              }
            },
            {
              parameterPath: "publisherName",
              mapper: {
                required: true,
                serializedName: "publisherName",
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
              bodyMapper: {
                serializedName: "parsedResponse",
                type: {
                  name: "Sequence",
                  element: {
                    serializedName: "VirtualMachineExtensionImageElementType",
                    type: {
                      name: "Composite",
                      className: "VirtualMachineExtensionImage"
                    }
                  }
                }
              }
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
            const resultMapper = {
              serializedName: "parsedResponse",
              type: {
                name: "Sequence",
                element: {
                  serializedName: "VirtualMachineExtensionImageElementType",
                  type: {
                    name: "Composite",
                    className: "VirtualMachineExtensionImage"
                  }
                }
              }
            };
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
   * Gets a list of virtual machine extension image versions.
   *
   * @param {string} location The name of a supported Azure region.
   *
   * @param {string} publisherName
   *
   * @param {string} type
   *
   * @param {VirtualMachineExtensionImagesListVersionsOptionalParams} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  async listVersionsWithHttpOperationResponse(location: string, publisherName: string, type: string, options?: Models.VirtualMachineExtensionImagesListVersionsOptionalParams): Promise<msRest.HttpOperationResponse<Models.VirtualMachineExtensionImage[]>> {
    let filter = (options && options.filter !== undefined) ? options.filter : undefined;
    let top = (options && options.top !== undefined) ? options.top : undefined;
    let orderby = (options && options.orderby !== undefined) ? options.orderby : undefined;

    // Create HTTP transport objects
    const httpRequest = new WebResource();
    let operationRes: msRest.HttpOperationResponse;
    try {
      const operationArguments: msRest.OperationArguments = msRest.createOperationArguments(
        {
          location,
          publisherName,
          type,
          filter,
          top,
          orderby,
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
          path: "subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/publishers/{publisherName}/artifacttypes/vmextension/types/{type}/versions",
          urlParameters: [
            {
              parameterPath: "location",
              mapper: {
                required: true,
                serializedName: "location",
                type: {
                  name: "String"
                }
              }
            },
            {
              parameterPath: "publisherName",
              mapper: {
                required: true,
                serializedName: "publisherName",
                type: {
                  name: "String"
                }
              }
            },
            {
              parameterPath: "type",
              mapper: {
                required: true,
                serializedName: "type",
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
              parameterPath: "filter",
              mapper: {
                serializedName: "$filter",
                type: {
                  name: "String"
                }
              }
            },
            {
              parameterPath: "top",
              mapper: {
                serializedName: "$top",
                type: {
                  name: "Number"
                }
              }
            },
            {
              parameterPath: "orderby",
              mapper: {
                serializedName: "$orderby",
                type: {
                  name: "String"
                }
              }
            },
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
              bodyMapper: {
                serializedName: "parsedResponse",
                type: {
                  name: "Sequence",
                  element: {
                    serializedName: "VirtualMachineExtensionImageElementType",
                    type: {
                      name: "Composite",
                      className: "VirtualMachineExtensionImage"
                    }
                  }
                }
              }
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
            const resultMapper = {
              serializedName: "parsedResponse",
              type: {
                name: "Sequence",
                element: {
                  serializedName: "VirtualMachineExtensionImageElementType",
                  type: {
                    name: "Composite",
                    className: "VirtualMachineExtensionImage"
                  }
                }
              }
            };
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
   * Gets a virtual machine extension image.
   *
   * @param {string} location The name of a supported Azure region.
   *
   * @param {string} publisherName
   *
   * @param {string} type
   *
   * @param {string} version
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {Models.VirtualMachineExtensionImage} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Models.VirtualMachineExtensionImage} for more information.
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  get(location: string, publisherName: string, type: string, version: string): Promise<Models.VirtualMachineExtensionImage>;
  get(location: string, publisherName: string, type: string, version: string, options: msRest.RequestOptionsBase): Promise<Models.VirtualMachineExtensionImage>;
  get(location: string, publisherName: string, type: string, version: string, callback: msRest.ServiceCallback<Models.VirtualMachineExtensionImage>): void;
  get(location: string, publisherName: string, type: string, version: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VirtualMachineExtensionImage>): void;
  get(location: string, publisherName: string, type: string, version: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.VirtualMachineExtensionImage>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    let cb = callback as msRest.ServiceCallback<Models.VirtualMachineExtensionImage>;
    if (!callback) {
      return this.getWithHttpOperationResponse(location, publisherName, type, version, options).then((operationRes: msRest.HttpOperationResponse) => {
        return Promise.resolve(operationRes.parsedBody as Models.VirtualMachineExtensionImage);
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.getWithHttpOperationResponse(location, publisherName, type, version, options))((err: Error, data: msRest.HttpOperationResponse) => {
        if (err) {
          return cb(err);
        }
        let result = data.parsedBody as Models.VirtualMachineExtensionImage;
        return cb(err, result, data.request, data);
      });
    }
  }

  /**
   * Gets a list of virtual machine extension image types.
   *
   * @param {string} location The name of a supported Azure region.
   *
   * @param {string} publisherName
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {Models.VirtualMachineExtensionImage[]} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  listTypes(location: string, publisherName: string): Promise<Models.VirtualMachineExtensionImage[]>;
  listTypes(location: string, publisherName: string, options: msRest.RequestOptionsBase): Promise<Models.VirtualMachineExtensionImage[]>;
  listTypes(location: string, publisherName: string, callback: msRest.ServiceCallback<Models.VirtualMachineExtensionImage[]>): void;
  listTypes(location: string, publisherName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VirtualMachineExtensionImage[]>): void;
  listTypes(location: string, publisherName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.VirtualMachineExtensionImage[]>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    let cb = callback as msRest.ServiceCallback<Models.VirtualMachineExtensionImage[]>;
    if (!callback) {
      return this.listTypesWithHttpOperationResponse(location, publisherName, options).then((operationRes: msRest.HttpOperationResponse) => {
        return Promise.resolve(operationRes.parsedBody as Models.VirtualMachineExtensionImage[]);
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.listTypesWithHttpOperationResponse(location, publisherName, options))((err: Error, data: msRest.HttpOperationResponse) => {
        if (err) {
          return cb(err);
        }
        let result = data.parsedBody as Models.VirtualMachineExtensionImage[];
        return cb(err, result, data.request, data);
      });
    }
  }

  /**
   * Gets a list of virtual machine extension image versions.
   *
   * @param {string} location The name of a supported Azure region.
   *
   * @param {string} publisherName
   *
   * @param {string} type
   *
   * @param {VirtualMachineExtensionImagesListVersionsOptionalParams} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {Models.VirtualMachineExtensionImage[]} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  listVersions(location: string, publisherName: string, type: string): Promise<Models.VirtualMachineExtensionImage[]>;
  listVersions(location: string, publisherName: string, type: string, options: Models.VirtualMachineExtensionImagesListVersionsOptionalParams): Promise<Models.VirtualMachineExtensionImage[]>;
  listVersions(location: string, publisherName: string, type: string, callback: msRest.ServiceCallback<Models.VirtualMachineExtensionImage[]>): void;
  listVersions(location: string, publisherName: string, type: string, options: Models.VirtualMachineExtensionImagesListVersionsOptionalParams, callback: msRest.ServiceCallback<Models.VirtualMachineExtensionImage[]>): void;
  listVersions(location: string, publisherName: string, type: string, options?: Models.VirtualMachineExtensionImagesListVersionsOptionalParams, callback?: msRest.ServiceCallback<Models.VirtualMachineExtensionImage[]>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    let cb = callback as msRest.ServiceCallback<Models.VirtualMachineExtensionImage[]>;
    if (!callback) {
      return this.listVersionsWithHttpOperationResponse(location, publisherName, type, options).then((operationRes: msRest.HttpOperationResponse) => {
        return Promise.resolve(operationRes.parsedBody as Models.VirtualMachineExtensionImage[]);
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.listVersionsWithHttpOperationResponse(location, publisherName, type, options))((err: Error, data: msRest.HttpOperationResponse) => {
        if (err) {
          return cb(err);
        }
        let result = data.parsedBody as Models.VirtualMachineExtensionImage[];
        return cb(err, result, data.request, data);
      });
    }
  }

}
