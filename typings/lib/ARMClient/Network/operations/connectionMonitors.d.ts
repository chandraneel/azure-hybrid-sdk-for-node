import * as msRest from "ms-rest-js";
import * as Models from "../models";
import { NetworkManagementClientContext } from "../networkManagementClientContext";
/** Class representing a ConnectionMonitors. */
export declare class ConnectionMonitors {
    private readonly client;
    private readonly serializer;
    /**
     * Create a ConnectionMonitors.
     * @param {NetworkManagementClientContext} client Reference to the service client.
     */
    constructor(client: NetworkManagementClientContext);
    /**
     * Create or update a connection monitor.
     *
     * @param {string} resourceGroupName The name of the resource group containing Network Watcher.
     *
     * @param {string} networkWatcherName The name of the Network Watcher resource.
     *
     * @param {string} connectionMonitorName The name of the connection monitor.
     *
     * @param {ConnectionMonitor} parameters Parameters that define the operation to create a
     * connection monitor.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    createOrUpdateWithHttpOperationResponse(resourceGroupName: string, networkWatcherName: string, connectionMonitorName: string, parameters: Models.ConnectionMonitor, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Gets a connection monitor by name.
     *
     * @param {string} resourceGroupName The name of the resource group containing Network Watcher.
     *
     * @param {string} networkWatcherName The name of the Network Watcher resource.
     *
     * @param {string} connectionMonitorName The name of the connection monitor.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    getWithHttpOperationResponse(resourceGroupName: string, networkWatcherName: string, connectionMonitorName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.ConnectionMonitorResult>>;
    /**
     * Deletes the specified connection monitor.
     *
     * @param {string} resourceGroupName The name of the resource group containing Network Watcher.
     *
     * @param {string} networkWatcherName The name of the Network Watcher resource.
     *
     * @param {string} connectionMonitorName The name of the connection monitor.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    deleteMethodWithHttpOperationResponse(resourceGroupName: string, networkWatcherName: string, connectionMonitorName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Stops the specified connection monitor.
     *
     * @param {string} resourceGroupName The name of the resource group containing Network Watcher.
     *
     * @param {string} networkWatcherName The name of the Network Watcher resource.
     *
     * @param {string} connectionMonitorName The name of the connection monitor.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    stopWithHttpOperationResponse(resourceGroupName: string, networkWatcherName: string, connectionMonitorName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Starts the specified connection monitor.
     *
     * @param {string} resourceGroupName The name of the resource group containing Network Watcher.
     *
     * @param {string} networkWatcherName The name of the Network Watcher resource.
     *
     * @param {string} connectionMonitorName The name of the connection monitor.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    startWithHttpOperationResponse(resourceGroupName: string, networkWatcherName: string, connectionMonitorName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Query a snapshot of the most recent connection states.
     *
     * @param {string} resourceGroupName The name of the resource group containing Network Watcher.
     *
     * @param {string} networkWatcherName The name of the Network Watcher resource.
     *
     * @param {string} connectionMonitorName The name given to the connection monitor.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    queryWithHttpOperationResponse(resourceGroupName: string, networkWatcherName: string, connectionMonitorName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Lists all connection monitors for the specified Network Watcher.
     *
     * @param {string} resourceGroupName The name of the resource group containing Network Watcher.
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
    listWithHttpOperationResponse(resourceGroupName: string, networkWatcherName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.ConnectionMonitorListResult>>;
    /**
     * Create or update a connection monitor.
     *
     * @param {string} resourceGroupName The name of the resource group containing Network Watcher.
     *
     * @param {string} networkWatcherName The name of the Network Watcher resource.
     *
     * @param {string} connectionMonitorName The name of the connection monitor.
     *
     * @param {ConnectionMonitor} parameters Parameters that define the operation to create a
     * connection monitor.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginCreateOrUpdateWithHttpOperationResponse(resourceGroupName: string, networkWatcherName: string, connectionMonitorName: string, parameters: Models.ConnectionMonitor, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.ConnectionMonitorResult>>;
    /**
     * Deletes the specified connection monitor.
     *
     * @param {string} resourceGroupName The name of the resource group containing Network Watcher.
     *
     * @param {string} networkWatcherName The name of the Network Watcher resource.
     *
     * @param {string} connectionMonitorName The name of the connection monitor.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginDeleteMethodWithHttpOperationResponse(resourceGroupName: string, networkWatcherName: string, connectionMonitorName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<void>>;
    /**
     * Stops the specified connection monitor.
     *
     * @param {string} resourceGroupName The name of the resource group containing Network Watcher.
     *
     * @param {string} networkWatcherName The name of the Network Watcher resource.
     *
     * @param {string} connectionMonitorName The name of the connection monitor.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginStopWithHttpOperationResponse(resourceGroupName: string, networkWatcherName: string, connectionMonitorName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<void>>;
    /**
     * Starts the specified connection monitor.
     *
     * @param {string} resourceGroupName The name of the resource group containing Network Watcher.
     *
     * @param {string} networkWatcherName The name of the Network Watcher resource.
     *
     * @param {string} connectionMonitorName The name of the connection monitor.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginStartWithHttpOperationResponse(resourceGroupName: string, networkWatcherName: string, connectionMonitorName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<void>>;
    /**
     * Query a snapshot of the most recent connection states.
     *
     * @param {string} resourceGroupName The name of the resource group containing Network Watcher.
     *
     * @param {string} networkWatcherName The name of the Network Watcher resource.
     *
     * @param {string} connectionMonitorName The name given to the connection monitor.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginQueryWithHttpOperationResponse(resourceGroupName: string, networkWatcherName: string, connectionMonitorName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.ConnectionMonitorQueryResult>>;
    /**
     * Create or update a connection monitor.
     *
     * @param {string} resourceGroupName The name of the resource group containing Network Watcher.
     *
     * @param {string} networkWatcherName The name of the Network Watcher resource.
     *
     * @param {string} connectionMonitorName The name of the connection monitor.
     *
     * @param {ConnectionMonitor} parameters Parameters that define the operation to create a
     * connection monitor.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.ConnectionMonitorResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.ConnectionMonitorResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    createOrUpdate(resourceGroupName: string, networkWatcherName: string, connectionMonitorName: string, parameters: Models.ConnectionMonitor): Promise<Models.ConnectionMonitorResult>;
    createOrUpdate(resourceGroupName: string, networkWatcherName: string, connectionMonitorName: string, parameters: Models.ConnectionMonitor, options: msRest.RequestOptionsBase): Promise<Models.ConnectionMonitorResult>;
    createOrUpdate(resourceGroupName: string, networkWatcherName: string, connectionMonitorName: string, parameters: Models.ConnectionMonitor, callback: msRest.ServiceCallback<Models.ConnectionMonitorResult>): void;
    createOrUpdate(resourceGroupName: string, networkWatcherName: string, connectionMonitorName: string, parameters: Models.ConnectionMonitor, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ConnectionMonitorResult>): void;
    /**
     * Gets a connection monitor by name.
     *
     * @param {string} resourceGroupName The name of the resource group containing Network Watcher.
     *
     * @param {string} networkWatcherName The name of the Network Watcher resource.
     *
     * @param {string} connectionMonitorName The name of the connection monitor.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.ConnectionMonitorResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.ConnectionMonitorResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    get(resourceGroupName: string, networkWatcherName: string, connectionMonitorName: string): Promise<Models.ConnectionMonitorResult>;
    get(resourceGroupName: string, networkWatcherName: string, connectionMonitorName: string, options: msRest.RequestOptionsBase): Promise<Models.ConnectionMonitorResult>;
    get(resourceGroupName: string, networkWatcherName: string, connectionMonitorName: string, callback: msRest.ServiceCallback<Models.ConnectionMonitorResult>): void;
    get(resourceGroupName: string, networkWatcherName: string, connectionMonitorName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ConnectionMonitorResult>): void;
    /**
     * Deletes the specified connection monitor.
     *
     * @param {string} resourceGroupName The name of the resource group containing Network Watcher.
     *
     * @param {string} networkWatcherName The name of the Network Watcher resource.
     *
     * @param {string} connectionMonitorName The name of the connection monitor.
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
    deleteMethod(resourceGroupName: string, networkWatcherName: string, connectionMonitorName: string): Promise<void>;
    deleteMethod(resourceGroupName: string, networkWatcherName: string, connectionMonitorName: string, options: msRest.RequestOptionsBase): Promise<void>;
    deleteMethod(resourceGroupName: string, networkWatcherName: string, connectionMonitorName: string, callback: msRest.ServiceCallback<void>): void;
    deleteMethod(resourceGroupName: string, networkWatcherName: string, connectionMonitorName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * Stops the specified connection monitor.
     *
     * @param {string} resourceGroupName The name of the resource group containing Network Watcher.
     *
     * @param {string} networkWatcherName The name of the Network Watcher resource.
     *
     * @param {string} connectionMonitorName The name of the connection monitor.
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
    stop(resourceGroupName: string, networkWatcherName: string, connectionMonitorName: string): Promise<void>;
    stop(resourceGroupName: string, networkWatcherName: string, connectionMonitorName: string, options: msRest.RequestOptionsBase): Promise<void>;
    stop(resourceGroupName: string, networkWatcherName: string, connectionMonitorName: string, callback: msRest.ServiceCallback<void>): void;
    stop(resourceGroupName: string, networkWatcherName: string, connectionMonitorName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * Starts the specified connection monitor.
     *
     * @param {string} resourceGroupName The name of the resource group containing Network Watcher.
     *
     * @param {string} networkWatcherName The name of the Network Watcher resource.
     *
     * @param {string} connectionMonitorName The name of the connection monitor.
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
    start(resourceGroupName: string, networkWatcherName: string, connectionMonitorName: string): Promise<void>;
    start(resourceGroupName: string, networkWatcherName: string, connectionMonitorName: string, options: msRest.RequestOptionsBase): Promise<void>;
    start(resourceGroupName: string, networkWatcherName: string, connectionMonitorName: string, callback: msRest.ServiceCallback<void>): void;
    start(resourceGroupName: string, networkWatcherName: string, connectionMonitorName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * Query a snapshot of the most recent connection states.
     *
     * @param {string} resourceGroupName The name of the resource group containing Network Watcher.
     *
     * @param {string} networkWatcherName The name of the Network Watcher resource.
     *
     * @param {string} connectionMonitorName The name given to the connection monitor.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.ConnectionMonitorQueryResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.ConnectionMonitorQueryResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    query(resourceGroupName: string, networkWatcherName: string, connectionMonitorName: string): Promise<Models.ConnectionMonitorQueryResult>;
    query(resourceGroupName: string, networkWatcherName: string, connectionMonitorName: string, options: msRest.RequestOptionsBase): Promise<Models.ConnectionMonitorQueryResult>;
    query(resourceGroupName: string, networkWatcherName: string, connectionMonitorName: string, callback: msRest.ServiceCallback<Models.ConnectionMonitorQueryResult>): void;
    query(resourceGroupName: string, networkWatcherName: string, connectionMonitorName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ConnectionMonitorQueryResult>): void;
    /**
     * Lists all connection monitors for the specified Network Watcher.
     *
     * @param {string} resourceGroupName The name of the resource group containing Network Watcher.
     *
     * @param {string} networkWatcherName The name of the Network Watcher resource.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.ConnectionMonitorListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.ConnectionMonitorListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    list(resourceGroupName: string, networkWatcherName: string): Promise<Models.ConnectionMonitorListResult>;
    list(resourceGroupName: string, networkWatcherName: string, options: msRest.RequestOptionsBase): Promise<Models.ConnectionMonitorListResult>;
    list(resourceGroupName: string, networkWatcherName: string, callback: msRest.ServiceCallback<Models.ConnectionMonitorListResult>): void;
    list(resourceGroupName: string, networkWatcherName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ConnectionMonitorListResult>): void;
    /**
     * Create or update a connection monitor.
     *
     * @param {string} resourceGroupName The name of the resource group containing Network Watcher.
     *
     * @param {string} networkWatcherName The name of the Network Watcher resource.
     *
     * @param {string} connectionMonitorName The name of the connection monitor.
     *
     * @param {ConnectionMonitor} parameters Parameters that define the operation to create a
     * connection monitor.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.ConnectionMonitorResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.ConnectionMonitorResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    beginCreateOrUpdate(resourceGroupName: string, networkWatcherName: string, connectionMonitorName: string, parameters: Models.ConnectionMonitor): Promise<Models.ConnectionMonitorResult>;
    beginCreateOrUpdate(resourceGroupName: string, networkWatcherName: string, connectionMonitorName: string, parameters: Models.ConnectionMonitor, options: msRest.RequestOptionsBase): Promise<Models.ConnectionMonitorResult>;
    beginCreateOrUpdate(resourceGroupName: string, networkWatcherName: string, connectionMonitorName: string, parameters: Models.ConnectionMonitor, callback: msRest.ServiceCallback<Models.ConnectionMonitorResult>): void;
    beginCreateOrUpdate(resourceGroupName: string, networkWatcherName: string, connectionMonitorName: string, parameters: Models.ConnectionMonitor, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ConnectionMonitorResult>): void;
    /**
     * Deletes the specified connection monitor.
     *
     * @param {string} resourceGroupName The name of the resource group containing Network Watcher.
     *
     * @param {string} networkWatcherName The name of the Network Watcher resource.
     *
     * @param {string} connectionMonitorName The name of the connection monitor.
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
    beginDeleteMethod(resourceGroupName: string, networkWatcherName: string, connectionMonitorName: string): Promise<void>;
    beginDeleteMethod(resourceGroupName: string, networkWatcherName: string, connectionMonitorName: string, options: msRest.RequestOptionsBase): Promise<void>;
    beginDeleteMethod(resourceGroupName: string, networkWatcherName: string, connectionMonitorName: string, callback: msRest.ServiceCallback<void>): void;
    beginDeleteMethod(resourceGroupName: string, networkWatcherName: string, connectionMonitorName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * Stops the specified connection monitor.
     *
     * @param {string} resourceGroupName The name of the resource group containing Network Watcher.
     *
     * @param {string} networkWatcherName The name of the Network Watcher resource.
     *
     * @param {string} connectionMonitorName The name of the connection monitor.
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
    beginStop(resourceGroupName: string, networkWatcherName: string, connectionMonitorName: string): Promise<void>;
    beginStop(resourceGroupName: string, networkWatcherName: string, connectionMonitorName: string, options: msRest.RequestOptionsBase): Promise<void>;
    beginStop(resourceGroupName: string, networkWatcherName: string, connectionMonitorName: string, callback: msRest.ServiceCallback<void>): void;
    beginStop(resourceGroupName: string, networkWatcherName: string, connectionMonitorName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * Starts the specified connection monitor.
     *
     * @param {string} resourceGroupName The name of the resource group containing Network Watcher.
     *
     * @param {string} networkWatcherName The name of the Network Watcher resource.
     *
     * @param {string} connectionMonitorName The name of the connection monitor.
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
    beginStart(resourceGroupName: string, networkWatcherName: string, connectionMonitorName: string): Promise<void>;
    beginStart(resourceGroupName: string, networkWatcherName: string, connectionMonitorName: string, options: msRest.RequestOptionsBase): Promise<void>;
    beginStart(resourceGroupName: string, networkWatcherName: string, connectionMonitorName: string, callback: msRest.ServiceCallback<void>): void;
    beginStart(resourceGroupName: string, networkWatcherName: string, connectionMonitorName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * Query a snapshot of the most recent connection states.
     *
     * @param {string} resourceGroupName The name of the resource group containing Network Watcher.
     *
     * @param {string} networkWatcherName The name of the Network Watcher resource.
     *
     * @param {string} connectionMonitorName The name given to the connection monitor.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.ConnectionMonitorQueryResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.ConnectionMonitorQueryResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    beginQuery(resourceGroupName: string, networkWatcherName: string, connectionMonitorName: string): Promise<Models.ConnectionMonitorQueryResult>;
    beginQuery(resourceGroupName: string, networkWatcherName: string, connectionMonitorName: string, options: msRest.RequestOptionsBase): Promise<Models.ConnectionMonitorQueryResult>;
    beginQuery(resourceGroupName: string, networkWatcherName: string, connectionMonitorName: string, callback: msRest.ServiceCallback<Models.ConnectionMonitorQueryResult>): void;
    beginQuery(resourceGroupName: string, networkWatcherName: string, connectionMonitorName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ConnectionMonitorQueryResult>): void;
}
