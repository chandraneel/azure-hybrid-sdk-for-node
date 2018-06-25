import * as msRest from "ms-rest-js";
import * as Models from "../models";
import { NetworkManagementClientContext } from "../networkManagementClientContext";
/** Class representing a PacketCaptures. */
export declare class PacketCaptures {
    private readonly client;
    private readonly serializer;
    /**
     * Create a PacketCaptures.
     * @param {NetworkManagementClientContext} client Reference to the service client.
     */
    constructor(client: NetworkManagementClientContext);
    /**
     * Create and start a packet capture on the specified VM.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} networkWatcherName The name of the network watcher.
     *
     * @param {string} packetCaptureName The name of the packet capture session.
     *
     * @param {PacketCapture} parameters Parameters that define the create packet capture operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    createWithHttpOperationResponse(resourceGroupName: string, networkWatcherName: string, packetCaptureName: string, parameters: Models.PacketCapture, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Gets a packet capture session by name.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} networkWatcherName The name of the network watcher.
     *
     * @param {string} packetCaptureName The name of the packet capture session.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    getWithHttpOperationResponse(resourceGroupName: string, networkWatcherName: string, packetCaptureName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.PacketCaptureResult>>;
    /**
     * Deletes the specified packet capture session.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} networkWatcherName The name of the network watcher.
     *
     * @param {string} packetCaptureName The name of the packet capture session.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    deleteMethodWithHttpOperationResponse(resourceGroupName: string, networkWatcherName: string, packetCaptureName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Stops a specified packet capture session.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} networkWatcherName The name of the network watcher.
     *
     * @param {string} packetCaptureName The name of the packet capture session.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    stopWithHttpOperationResponse(resourceGroupName: string, networkWatcherName: string, packetCaptureName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Query the status of a running packet capture session.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} networkWatcherName The name of the Network Watcher resource.
     *
     * @param {string} packetCaptureName The name given to the packet capture session.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    getStatusWithHttpOperationResponse(resourceGroupName: string, networkWatcherName: string, packetCaptureName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Lists all packet capture sessions within the specified resource group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} networkWatcherName The name of the Network Watcher resource.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    listWithHttpOperationResponse(resourceGroupName: string, networkWatcherName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.PacketCaptureListResult>>;
    /**
     * Create and start a packet capture on the specified VM.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} networkWatcherName The name of the network watcher.
     *
     * @param {string} packetCaptureName The name of the packet capture session.
     *
     * @param {PacketCapture} parameters Parameters that define the create packet capture operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginCreateWithHttpOperationResponse(resourceGroupName: string, networkWatcherName: string, packetCaptureName: string, parameters: Models.PacketCapture, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.PacketCaptureResult>>;
    /**
     * Deletes the specified packet capture session.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} networkWatcherName The name of the network watcher.
     *
     * @param {string} packetCaptureName The name of the packet capture session.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginDeleteMethodWithHttpOperationResponse(resourceGroupName: string, networkWatcherName: string, packetCaptureName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<void>>;
    /**
     * Stops a specified packet capture session.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} networkWatcherName The name of the network watcher.
     *
     * @param {string} packetCaptureName The name of the packet capture session.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginStopWithHttpOperationResponse(resourceGroupName: string, networkWatcherName: string, packetCaptureName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<void>>;
    /**
     * Query the status of a running packet capture session.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} networkWatcherName The name of the Network Watcher resource.
     *
     * @param {string} packetCaptureName The name given to the packet capture session.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginGetStatusWithHttpOperationResponse(resourceGroupName: string, networkWatcherName: string, packetCaptureName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.PacketCaptureQueryStatusResult>>;
    /**
     * Create and start a packet capture on the specified VM.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} networkWatcherName The name of the network watcher.
     *
     * @param {string} packetCaptureName The name of the packet capture session.
     *
     * @param {PacketCapture} parameters Parameters that define the create packet capture operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.PacketCaptureResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.PacketCaptureResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    create(resourceGroupName: string, networkWatcherName: string, packetCaptureName: string, parameters: Models.PacketCapture): Promise<Models.PacketCaptureResult>;
    create(resourceGroupName: string, networkWatcherName: string, packetCaptureName: string, parameters: Models.PacketCapture, options: msRest.RequestOptionsBase): Promise<Models.PacketCaptureResult>;
    create(resourceGroupName: string, networkWatcherName: string, packetCaptureName: string, parameters: Models.PacketCapture, callback: msRest.ServiceCallback<Models.PacketCaptureResult>): void;
    create(resourceGroupName: string, networkWatcherName: string, packetCaptureName: string, parameters: Models.PacketCapture, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PacketCaptureResult>): void;
    /**
     * Gets a packet capture session by name.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} networkWatcherName The name of the network watcher.
     *
     * @param {string} packetCaptureName The name of the packet capture session.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.PacketCaptureResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.PacketCaptureResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    get(resourceGroupName: string, networkWatcherName: string, packetCaptureName: string): Promise<Models.PacketCaptureResult>;
    get(resourceGroupName: string, networkWatcherName: string, packetCaptureName: string, options: msRest.RequestOptionsBase): Promise<Models.PacketCaptureResult>;
    get(resourceGroupName: string, networkWatcherName: string, packetCaptureName: string, callback: msRest.ServiceCallback<Models.PacketCaptureResult>): void;
    get(resourceGroupName: string, networkWatcherName: string, packetCaptureName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PacketCaptureResult>): void;
    /**
     * Deletes the specified packet capture session.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} networkWatcherName The name of the network watcher.
     *
     * @param {string} packetCaptureName The name of the packet capture session.
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
    deleteMethod(resourceGroupName: string, networkWatcherName: string, packetCaptureName: string): Promise<void>;
    deleteMethod(resourceGroupName: string, networkWatcherName: string, packetCaptureName: string, options: msRest.RequestOptionsBase): Promise<void>;
    deleteMethod(resourceGroupName: string, networkWatcherName: string, packetCaptureName: string, callback: msRest.ServiceCallback<void>): void;
    deleteMethod(resourceGroupName: string, networkWatcherName: string, packetCaptureName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * Stops a specified packet capture session.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} networkWatcherName The name of the network watcher.
     *
     * @param {string} packetCaptureName The name of the packet capture session.
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
    stop(resourceGroupName: string, networkWatcherName: string, packetCaptureName: string): Promise<void>;
    stop(resourceGroupName: string, networkWatcherName: string, packetCaptureName: string, options: msRest.RequestOptionsBase): Promise<void>;
    stop(resourceGroupName: string, networkWatcherName: string, packetCaptureName: string, callback: msRest.ServiceCallback<void>): void;
    stop(resourceGroupName: string, networkWatcherName: string, packetCaptureName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * Query the status of a running packet capture session.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} networkWatcherName The name of the Network Watcher resource.
     *
     * @param {string} packetCaptureName The name given to the packet capture session.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.PacketCaptureQueryStatusResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.PacketCaptureQueryStatusResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    getStatus(resourceGroupName: string, networkWatcherName: string, packetCaptureName: string): Promise<Models.PacketCaptureQueryStatusResult>;
    getStatus(resourceGroupName: string, networkWatcherName: string, packetCaptureName: string, options: msRest.RequestOptionsBase): Promise<Models.PacketCaptureQueryStatusResult>;
    getStatus(resourceGroupName: string, networkWatcherName: string, packetCaptureName: string, callback: msRest.ServiceCallback<Models.PacketCaptureQueryStatusResult>): void;
    getStatus(resourceGroupName: string, networkWatcherName: string, packetCaptureName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PacketCaptureQueryStatusResult>): void;
    /**
     * Lists all packet capture sessions within the specified resource group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} networkWatcherName The name of the Network Watcher resource.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.PacketCaptureListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.PacketCaptureListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    list(resourceGroupName: string, networkWatcherName: string): Promise<Models.PacketCaptureListResult>;
    list(resourceGroupName: string, networkWatcherName: string, options: msRest.RequestOptionsBase): Promise<Models.PacketCaptureListResult>;
    list(resourceGroupName: string, networkWatcherName: string, callback: msRest.ServiceCallback<Models.PacketCaptureListResult>): void;
    list(resourceGroupName: string, networkWatcherName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PacketCaptureListResult>): void;
    /**
     * Create and start a packet capture on the specified VM.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} networkWatcherName The name of the network watcher.
     *
     * @param {string} packetCaptureName The name of the packet capture session.
     *
     * @param {PacketCapture} parameters Parameters that define the create packet capture operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.PacketCaptureResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.PacketCaptureResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    beginCreate(resourceGroupName: string, networkWatcherName: string, packetCaptureName: string, parameters: Models.PacketCapture): Promise<Models.PacketCaptureResult>;
    beginCreate(resourceGroupName: string, networkWatcherName: string, packetCaptureName: string, parameters: Models.PacketCapture, options: msRest.RequestOptionsBase): Promise<Models.PacketCaptureResult>;
    beginCreate(resourceGroupName: string, networkWatcherName: string, packetCaptureName: string, parameters: Models.PacketCapture, callback: msRest.ServiceCallback<Models.PacketCaptureResult>): void;
    beginCreate(resourceGroupName: string, networkWatcherName: string, packetCaptureName: string, parameters: Models.PacketCapture, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PacketCaptureResult>): void;
    /**
     * Deletes the specified packet capture session.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} networkWatcherName The name of the network watcher.
     *
     * @param {string} packetCaptureName The name of the packet capture session.
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
    beginDeleteMethod(resourceGroupName: string, networkWatcherName: string, packetCaptureName: string): Promise<void>;
    beginDeleteMethod(resourceGroupName: string, networkWatcherName: string, packetCaptureName: string, options: msRest.RequestOptionsBase): Promise<void>;
    beginDeleteMethod(resourceGroupName: string, networkWatcherName: string, packetCaptureName: string, callback: msRest.ServiceCallback<void>): void;
    beginDeleteMethod(resourceGroupName: string, networkWatcherName: string, packetCaptureName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * Stops a specified packet capture session.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} networkWatcherName The name of the network watcher.
     *
     * @param {string} packetCaptureName The name of the packet capture session.
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
    beginStop(resourceGroupName: string, networkWatcherName: string, packetCaptureName: string): Promise<void>;
    beginStop(resourceGroupName: string, networkWatcherName: string, packetCaptureName: string, options: msRest.RequestOptionsBase): Promise<void>;
    beginStop(resourceGroupName: string, networkWatcherName: string, packetCaptureName: string, callback: msRest.ServiceCallback<void>): void;
    beginStop(resourceGroupName: string, networkWatcherName: string, packetCaptureName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * Query the status of a running packet capture session.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} networkWatcherName The name of the Network Watcher resource.
     *
     * @param {string} packetCaptureName The name given to the packet capture session.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.PacketCaptureQueryStatusResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.PacketCaptureQueryStatusResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    beginGetStatus(resourceGroupName: string, networkWatcherName: string, packetCaptureName: string): Promise<Models.PacketCaptureQueryStatusResult>;
    beginGetStatus(resourceGroupName: string, networkWatcherName: string, packetCaptureName: string, options: msRest.RequestOptionsBase): Promise<Models.PacketCaptureQueryStatusResult>;
    beginGetStatus(resourceGroupName: string, networkWatcherName: string, packetCaptureName: string, callback: msRest.ServiceCallback<Models.PacketCaptureQueryStatusResult>): void;
    beginGetStatus(resourceGroupName: string, networkWatcherName: string, packetCaptureName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PacketCaptureQueryStatusResult>): void;
}
