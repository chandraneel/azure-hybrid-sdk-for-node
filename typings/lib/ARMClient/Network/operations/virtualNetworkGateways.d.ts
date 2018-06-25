import * as msRest from "ms-rest-js";
import * as Models from "../models";
import { NetworkManagementClientContext } from "../networkManagementClientContext";
/** Class representing a VirtualNetworkGateways. */
export declare class VirtualNetworkGateways {
    private readonly client;
    private readonly serializer;
    /**
     * Create a VirtualNetworkGateways.
     * @param {NetworkManagementClientContext} client Reference to the service client.
     */
    constructor(client: NetworkManagementClientContext);
    /**
     * Creates or updates a virtual network gateway in the specified resource group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualNetworkGatewayName The name of the virtual network gateway.
     *
     * @param {VirtualNetworkGateway} parameters Parameters supplied to create or update virtual
     * network gateway operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    createOrUpdateWithHttpOperationResponse(resourceGroupName: string, virtualNetworkGatewayName: string, parameters: Models.VirtualNetworkGateway, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Gets the specified virtual network gateway by resource group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualNetworkGatewayName The name of the virtual network gateway.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    getWithHttpOperationResponse(resourceGroupName: string, virtualNetworkGatewayName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.VirtualNetworkGateway>>;
    /**
     * Deletes the specified virtual network gateway.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualNetworkGatewayName The name of the virtual network gateway.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    deleteMethodWithHttpOperationResponse(resourceGroupName: string, virtualNetworkGatewayName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Updates a virtual network gateway tags.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualNetworkGatewayName The name of the virtual network gateway.
     *
     * @param {TagsObject} parameters Parameters supplied to update virtual network gateway tags.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    updateTagsWithHttpOperationResponse(resourceGroupName: string, virtualNetworkGatewayName: string, parameters: Models.TagsObject, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Gets all virtual network gateways by resource group.
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
    listWithHttpOperationResponse(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.VirtualNetworkGatewayListResult>>;
    /**
     * Gets all the connections in a virtual network gateway.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualNetworkGatewayName The name of the virtual network gateway.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    listConnectionsWithHttpOperationResponse(resourceGroupName: string, virtualNetworkGatewayName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.VirtualNetworkGatewayListConnectionsResult>>;
    /**
     * Resets the primary of the virtual network gateway in the specified resource group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualNetworkGatewayName The name of the virtual network gateway.
     *
     * @param {VirtualNetworkGatewaysResetOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    resetWithHttpOperationResponse(resourceGroupName: string, virtualNetworkGatewayName: string, options?: Models.VirtualNetworkGatewaysResetOptionalParams): Promise<msRest.HttpOperationResponse>;
    /**
     * Generates VPN client package for P2S client of the virtual network gateway in the specified
     * resource group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualNetworkGatewayName The name of the virtual network gateway.
     *
     * @param {VpnClientParameters} parameters Parameters supplied to the generate virtual network
     * gateway VPN client package operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    generatevpnclientpackageWithHttpOperationResponse(resourceGroupName: string, virtualNetworkGatewayName: string, parameters: Models.VpnClientParameters, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Generates VPN profile for P2S client of the virtual network gateway in the specified resource
     * group. Used for IKEV2 and radius based authentication.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualNetworkGatewayName The name of the virtual network gateway.
     *
     * @param {VpnClientParameters} parameters Parameters supplied to the generate virtual network
     * gateway VPN client package operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    generateVpnProfileWithHttpOperationResponse(resourceGroupName: string, virtualNetworkGatewayName: string, parameters: Models.VpnClientParameters, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Gets pre-generated VPN profile for P2S client of the virtual network gateway in the specified
     * resource group. The profile needs to be generated first using generateVpnProfile.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualNetworkGatewayName The name of the virtual network gateway.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    getVpnProfilePackageUrlWithHttpOperationResponse(resourceGroupName: string, virtualNetworkGatewayName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * The GetBgpPeerStatus operation retrieves the status of all BGP peers.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualNetworkGatewayName The name of the virtual network gateway.
     *
     * @param {VirtualNetworkGatewaysGetBgpPeerStatusOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    getBgpPeerStatusWithHttpOperationResponse(resourceGroupName: string, virtualNetworkGatewayName: string, options?: Models.VirtualNetworkGatewaysGetBgpPeerStatusOptionalParams): Promise<msRest.HttpOperationResponse>;
    /**
     * Gets a xml format representation for supported vpn devices.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualNetworkGatewayName The name of the virtual network gateway.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    supportedVpnDevicesWithHttpOperationResponse(resourceGroupName: string, virtualNetworkGatewayName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<string>>;
    /**
     * This operation retrieves a list of routes the virtual network gateway has learned, including
     * routes learned from BGP peers.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualNetworkGatewayName The name of the virtual network gateway.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    getLearnedRoutesWithHttpOperationResponse(resourceGroupName: string, virtualNetworkGatewayName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * This operation retrieves a list of routes the virtual network gateway is advertising to the
     * specified peer.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualNetworkGatewayName The name of the virtual network gateway.
     *
     * @param {string} peer The IP address of the peer
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    getAdvertisedRoutesWithHttpOperationResponse(resourceGroupName: string, virtualNetworkGatewayName: string, peer: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
    /**
     * Gets a xml format representation for vpn device configuration script.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualNetworkGatewayConnectionName The name of the virtual network gateway
     * connection for which the configuration script is generated.
     *
     * @param {VpnDeviceScriptParameters} parameters Parameters supplied to the generate vpn device
     * script operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    vpnDeviceConfigurationScriptWithHttpOperationResponse(resourceGroupName: string, virtualNetworkGatewayConnectionName: string, parameters: Models.VpnDeviceScriptParameters, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<string>>;
    /**
     * Creates or updates a virtual network gateway in the specified resource group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualNetworkGatewayName The name of the virtual network gateway.
     *
     * @param {VirtualNetworkGateway} parameters Parameters supplied to create or update virtual
     * network gateway operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginCreateOrUpdateWithHttpOperationResponse(resourceGroupName: string, virtualNetworkGatewayName: string, parameters: Models.VirtualNetworkGateway, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.VirtualNetworkGateway>>;
    /**
     * Deletes the specified virtual network gateway.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualNetworkGatewayName The name of the virtual network gateway.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginDeleteMethodWithHttpOperationResponse(resourceGroupName: string, virtualNetworkGatewayName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<void>>;
    /**
     * Updates a virtual network gateway tags.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualNetworkGatewayName The name of the virtual network gateway.
     *
     * @param {TagsObject} parameters Parameters supplied to update virtual network gateway tags.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginUpdateTagsWithHttpOperationResponse(resourceGroupName: string, virtualNetworkGatewayName: string, parameters: Models.TagsObject, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.VirtualNetworkGateway>>;
    /**
     * Resets the primary of the virtual network gateway in the specified resource group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualNetworkGatewayName The name of the virtual network gateway.
     *
     * @param {VirtualNetworkGatewaysBeginResetOptionalParams} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginResetWithHttpOperationResponse(resourceGroupName: string, virtualNetworkGatewayName: string, options?: Models.VirtualNetworkGatewaysBeginResetOptionalParams): Promise<msRest.HttpOperationResponse<Models.VirtualNetworkGateway>>;
    /**
     * Generates VPN client package for P2S client of the virtual network gateway in the specified
     * resource group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualNetworkGatewayName The name of the virtual network gateway.
     *
     * @param {VpnClientParameters} parameters Parameters supplied to the generate virtual network
     * gateway VPN client package operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginGeneratevpnclientpackageWithHttpOperationResponse(resourceGroupName: string, virtualNetworkGatewayName: string, parameters: Models.VpnClientParameters, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<string>>;
    /**
     * Generates VPN profile for P2S client of the virtual network gateway in the specified resource
     * group. Used for IKEV2 and radius based authentication.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualNetworkGatewayName The name of the virtual network gateway.
     *
     * @param {VpnClientParameters} parameters Parameters supplied to the generate virtual network
     * gateway VPN client package operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginGenerateVpnProfileWithHttpOperationResponse(resourceGroupName: string, virtualNetworkGatewayName: string, parameters: Models.VpnClientParameters, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<string>>;
    /**
     * Gets pre-generated VPN profile for P2S client of the virtual network gateway in the specified
     * resource group. The profile needs to be generated first using generateVpnProfile.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualNetworkGatewayName The name of the virtual network gateway.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginGetVpnProfilePackageUrlWithHttpOperationResponse(resourceGroupName: string, virtualNetworkGatewayName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<string>>;
    /**
     * The GetBgpPeerStatus operation retrieves the status of all BGP peers.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualNetworkGatewayName The name of the virtual network gateway.
     *
     * @param {VirtualNetworkGatewaysBeginGetBgpPeerStatusOptionalParams} [options] Optional
     * Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginGetBgpPeerStatusWithHttpOperationResponse(resourceGroupName: string, virtualNetworkGatewayName: string, options?: Models.VirtualNetworkGatewaysBeginGetBgpPeerStatusOptionalParams): Promise<msRest.HttpOperationResponse<Models.BgpPeerStatusListResult>>;
    /**
     * This operation retrieves a list of routes the virtual network gateway has learned, including
     * routes learned from BGP peers.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualNetworkGatewayName The name of the virtual network gateway.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginGetLearnedRoutesWithHttpOperationResponse(resourceGroupName: string, virtualNetworkGatewayName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.GatewayRouteListResult>>;
    /**
     * This operation retrieves a list of routes the virtual network gateway is advertising to the
     * specified peer.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualNetworkGatewayName The name of the virtual network gateway.
     *
     * @param {string} peer The IP address of the peer
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    beginGetAdvertisedRoutesWithHttpOperationResponse(resourceGroupName: string, virtualNetworkGatewayName: string, peer: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.GatewayRouteListResult>>;
    /**
     * Gets all virtual network gateways by resource group.
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
    listNextWithHttpOperationResponse(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.VirtualNetworkGatewayListResult>>;
    /**
     * Gets all the connections in a virtual network gateway.
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
    listConnectionsNextWithHttpOperationResponse(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.VirtualNetworkGatewayListConnectionsResult>>;
    /**
     * Creates or updates a virtual network gateway in the specified resource group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualNetworkGatewayName The name of the virtual network gateway.
     *
     * @param {VirtualNetworkGateway} parameters Parameters supplied to create or update virtual
     * network gateway operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.VirtualNetworkGateway} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.VirtualNetworkGateway} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    createOrUpdate(resourceGroupName: string, virtualNetworkGatewayName: string, parameters: Models.VirtualNetworkGateway): Promise<Models.VirtualNetworkGateway>;
    createOrUpdate(resourceGroupName: string, virtualNetworkGatewayName: string, parameters: Models.VirtualNetworkGateway, options: msRest.RequestOptionsBase): Promise<Models.VirtualNetworkGateway>;
    createOrUpdate(resourceGroupName: string, virtualNetworkGatewayName: string, parameters: Models.VirtualNetworkGateway, callback: msRest.ServiceCallback<Models.VirtualNetworkGateway>): void;
    createOrUpdate(resourceGroupName: string, virtualNetworkGatewayName: string, parameters: Models.VirtualNetworkGateway, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VirtualNetworkGateway>): void;
    /**
     * Gets the specified virtual network gateway by resource group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualNetworkGatewayName The name of the virtual network gateway.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.VirtualNetworkGateway} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.VirtualNetworkGateway} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    get(resourceGroupName: string, virtualNetworkGatewayName: string): Promise<Models.VirtualNetworkGateway>;
    get(resourceGroupName: string, virtualNetworkGatewayName: string, options: msRest.RequestOptionsBase): Promise<Models.VirtualNetworkGateway>;
    get(resourceGroupName: string, virtualNetworkGatewayName: string, callback: msRest.ServiceCallback<Models.VirtualNetworkGateway>): void;
    get(resourceGroupName: string, virtualNetworkGatewayName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VirtualNetworkGateway>): void;
    /**
     * Deletes the specified virtual network gateway.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualNetworkGatewayName The name of the virtual network gateway.
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
    deleteMethod(resourceGroupName: string, virtualNetworkGatewayName: string): Promise<void>;
    deleteMethod(resourceGroupName: string, virtualNetworkGatewayName: string, options: msRest.RequestOptionsBase): Promise<void>;
    deleteMethod(resourceGroupName: string, virtualNetworkGatewayName: string, callback: msRest.ServiceCallback<void>): void;
    deleteMethod(resourceGroupName: string, virtualNetworkGatewayName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * Updates a virtual network gateway tags.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualNetworkGatewayName The name of the virtual network gateway.
     *
     * @param {TagsObject} parameters Parameters supplied to update virtual network gateway tags.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.VirtualNetworkGateway} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.VirtualNetworkGateway} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    updateTags(resourceGroupName: string, virtualNetworkGatewayName: string, parameters: Models.TagsObject): Promise<Models.VirtualNetworkGateway>;
    updateTags(resourceGroupName: string, virtualNetworkGatewayName: string, parameters: Models.TagsObject, options: msRest.RequestOptionsBase): Promise<Models.VirtualNetworkGateway>;
    updateTags(resourceGroupName: string, virtualNetworkGatewayName: string, parameters: Models.TagsObject, callback: msRest.ServiceCallback<Models.VirtualNetworkGateway>): void;
    updateTags(resourceGroupName: string, virtualNetworkGatewayName: string, parameters: Models.TagsObject, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VirtualNetworkGateway>): void;
    /**
     * Gets all virtual network gateways by resource group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.VirtualNetworkGatewayListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.VirtualNetworkGatewayListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    list(resourceGroupName: string): Promise<Models.VirtualNetworkGatewayListResult>;
    list(resourceGroupName: string, options: msRest.RequestOptionsBase): Promise<Models.VirtualNetworkGatewayListResult>;
    list(resourceGroupName: string, callback: msRest.ServiceCallback<Models.VirtualNetworkGatewayListResult>): void;
    list(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VirtualNetworkGatewayListResult>): void;
    /**
     * Gets all the connections in a virtual network gateway.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualNetworkGatewayName The name of the virtual network gateway.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.VirtualNetworkGatewayListConnectionsResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.VirtualNetworkGatewayListConnectionsResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listConnections(resourceGroupName: string, virtualNetworkGatewayName: string): Promise<Models.VirtualNetworkGatewayListConnectionsResult>;
    listConnections(resourceGroupName: string, virtualNetworkGatewayName: string, options: msRest.RequestOptionsBase): Promise<Models.VirtualNetworkGatewayListConnectionsResult>;
    listConnections(resourceGroupName: string, virtualNetworkGatewayName: string, callback: msRest.ServiceCallback<Models.VirtualNetworkGatewayListConnectionsResult>): void;
    listConnections(resourceGroupName: string, virtualNetworkGatewayName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VirtualNetworkGatewayListConnectionsResult>): void;
    /**
     * Resets the primary of the virtual network gateway in the specified resource group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualNetworkGatewayName The name of the virtual network gateway.
     *
     * @param {VirtualNetworkGatewaysResetOptionalParams} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.VirtualNetworkGateway} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.VirtualNetworkGateway} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    reset(resourceGroupName: string, virtualNetworkGatewayName: string): Promise<Models.VirtualNetworkGateway>;
    reset(resourceGroupName: string, virtualNetworkGatewayName: string, options: Models.VirtualNetworkGatewaysResetOptionalParams): Promise<Models.VirtualNetworkGateway>;
    reset(resourceGroupName: string, virtualNetworkGatewayName: string, callback: msRest.ServiceCallback<Models.VirtualNetworkGateway>): void;
    reset(resourceGroupName: string, virtualNetworkGatewayName: string, options: Models.VirtualNetworkGatewaysResetOptionalParams, callback: msRest.ServiceCallback<Models.VirtualNetworkGateway>): void;
    /**
     * Generates VPN client package for P2S client of the virtual network gateway in the specified
     * resource group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualNetworkGatewayName The name of the virtual network gateway.
     *
     * @param {VpnClientParameters} parameters Parameters supplied to the generate virtual network
     * gateway VPN client package operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {string} [result]   - The deserialized result object if an error did not occur.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    generatevpnclientpackage(resourceGroupName: string, virtualNetworkGatewayName: string, parameters: Models.VpnClientParameters): Promise<string>;
    generatevpnclientpackage(resourceGroupName: string, virtualNetworkGatewayName: string, parameters: Models.VpnClientParameters, options: msRest.RequestOptionsBase): Promise<string>;
    generatevpnclientpackage(resourceGroupName: string, virtualNetworkGatewayName: string, parameters: Models.VpnClientParameters, callback: msRest.ServiceCallback<string>): void;
    generatevpnclientpackage(resourceGroupName: string, virtualNetworkGatewayName: string, parameters: Models.VpnClientParameters, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<string>): void;
    /**
     * Generates VPN profile for P2S client of the virtual network gateway in the specified resource
     * group. Used for IKEV2 and radius based authentication.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualNetworkGatewayName The name of the virtual network gateway.
     *
     * @param {VpnClientParameters} parameters Parameters supplied to the generate virtual network
     * gateway VPN client package operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {string} [result]   - The deserialized result object if an error did not occur.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    generateVpnProfile(resourceGroupName: string, virtualNetworkGatewayName: string, parameters: Models.VpnClientParameters): Promise<string>;
    generateVpnProfile(resourceGroupName: string, virtualNetworkGatewayName: string, parameters: Models.VpnClientParameters, options: msRest.RequestOptionsBase): Promise<string>;
    generateVpnProfile(resourceGroupName: string, virtualNetworkGatewayName: string, parameters: Models.VpnClientParameters, callback: msRest.ServiceCallback<string>): void;
    generateVpnProfile(resourceGroupName: string, virtualNetworkGatewayName: string, parameters: Models.VpnClientParameters, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<string>): void;
    /**
     * Gets pre-generated VPN profile for P2S client of the virtual network gateway in the specified
     * resource group. The profile needs to be generated first using generateVpnProfile.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualNetworkGatewayName The name of the virtual network gateway.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {string} [result]   - The deserialized result object if an error did not occur.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    getVpnProfilePackageUrl(resourceGroupName: string, virtualNetworkGatewayName: string): Promise<string>;
    getVpnProfilePackageUrl(resourceGroupName: string, virtualNetworkGatewayName: string, options: msRest.RequestOptionsBase): Promise<string>;
    getVpnProfilePackageUrl(resourceGroupName: string, virtualNetworkGatewayName: string, callback: msRest.ServiceCallback<string>): void;
    getVpnProfilePackageUrl(resourceGroupName: string, virtualNetworkGatewayName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<string>): void;
    /**
     * The GetBgpPeerStatus operation retrieves the status of all BGP peers.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualNetworkGatewayName The name of the virtual network gateway.
     *
     * @param {VirtualNetworkGatewaysGetBgpPeerStatusOptionalParams} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.BgpPeerStatusListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.BgpPeerStatusListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    getBgpPeerStatus(resourceGroupName: string, virtualNetworkGatewayName: string): Promise<Models.BgpPeerStatusListResult>;
    getBgpPeerStatus(resourceGroupName: string, virtualNetworkGatewayName: string, options: Models.VirtualNetworkGatewaysGetBgpPeerStatusOptionalParams): Promise<Models.BgpPeerStatusListResult>;
    getBgpPeerStatus(resourceGroupName: string, virtualNetworkGatewayName: string, callback: msRest.ServiceCallback<Models.BgpPeerStatusListResult>): void;
    getBgpPeerStatus(resourceGroupName: string, virtualNetworkGatewayName: string, options: Models.VirtualNetworkGatewaysGetBgpPeerStatusOptionalParams, callback: msRest.ServiceCallback<Models.BgpPeerStatusListResult>): void;
    /**
     * Gets a xml format representation for supported vpn devices.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualNetworkGatewayName The name of the virtual network gateway.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {string} [result]   - The deserialized result object if an error did not occur.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    supportedVpnDevices(resourceGroupName: string, virtualNetworkGatewayName: string): Promise<string>;
    supportedVpnDevices(resourceGroupName: string, virtualNetworkGatewayName: string, options: msRest.RequestOptionsBase): Promise<string>;
    supportedVpnDevices(resourceGroupName: string, virtualNetworkGatewayName: string, callback: msRest.ServiceCallback<string>): void;
    supportedVpnDevices(resourceGroupName: string, virtualNetworkGatewayName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<string>): void;
    /**
     * This operation retrieves a list of routes the virtual network gateway has learned, including
     * routes learned from BGP peers.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualNetworkGatewayName The name of the virtual network gateway.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.GatewayRouteListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.GatewayRouteListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    getLearnedRoutes(resourceGroupName: string, virtualNetworkGatewayName: string): Promise<Models.GatewayRouteListResult>;
    getLearnedRoutes(resourceGroupName: string, virtualNetworkGatewayName: string, options: msRest.RequestOptionsBase): Promise<Models.GatewayRouteListResult>;
    getLearnedRoutes(resourceGroupName: string, virtualNetworkGatewayName: string, callback: msRest.ServiceCallback<Models.GatewayRouteListResult>): void;
    getLearnedRoutes(resourceGroupName: string, virtualNetworkGatewayName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.GatewayRouteListResult>): void;
    /**
     * This operation retrieves a list of routes the virtual network gateway is advertising to the
     * specified peer.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualNetworkGatewayName The name of the virtual network gateway.
     *
     * @param {string} peer The IP address of the peer
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.GatewayRouteListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.GatewayRouteListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    getAdvertisedRoutes(resourceGroupName: string, virtualNetworkGatewayName: string, peer: string): Promise<Models.GatewayRouteListResult>;
    getAdvertisedRoutes(resourceGroupName: string, virtualNetworkGatewayName: string, peer: string, options: msRest.RequestOptionsBase): Promise<Models.GatewayRouteListResult>;
    getAdvertisedRoutes(resourceGroupName: string, virtualNetworkGatewayName: string, peer: string, callback: msRest.ServiceCallback<Models.GatewayRouteListResult>): void;
    getAdvertisedRoutes(resourceGroupName: string, virtualNetworkGatewayName: string, peer: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.GatewayRouteListResult>): void;
    /**
     * Gets a xml format representation for vpn device configuration script.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualNetworkGatewayConnectionName The name of the virtual network gateway
     * connection for which the configuration script is generated.
     *
     * @param {VpnDeviceScriptParameters} parameters Parameters supplied to the generate vpn device
     * script operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {string} [result]   - The deserialized result object if an error did not occur.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    vpnDeviceConfigurationScript(resourceGroupName: string, virtualNetworkGatewayConnectionName: string, parameters: Models.VpnDeviceScriptParameters): Promise<string>;
    vpnDeviceConfigurationScript(resourceGroupName: string, virtualNetworkGatewayConnectionName: string, parameters: Models.VpnDeviceScriptParameters, options: msRest.RequestOptionsBase): Promise<string>;
    vpnDeviceConfigurationScript(resourceGroupName: string, virtualNetworkGatewayConnectionName: string, parameters: Models.VpnDeviceScriptParameters, callback: msRest.ServiceCallback<string>): void;
    vpnDeviceConfigurationScript(resourceGroupName: string, virtualNetworkGatewayConnectionName: string, parameters: Models.VpnDeviceScriptParameters, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<string>): void;
    /**
     * Creates or updates a virtual network gateway in the specified resource group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualNetworkGatewayName The name of the virtual network gateway.
     *
     * @param {VirtualNetworkGateway} parameters Parameters supplied to create or update virtual
     * network gateway operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.VirtualNetworkGateway} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.VirtualNetworkGateway} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    beginCreateOrUpdate(resourceGroupName: string, virtualNetworkGatewayName: string, parameters: Models.VirtualNetworkGateway): Promise<Models.VirtualNetworkGateway>;
    beginCreateOrUpdate(resourceGroupName: string, virtualNetworkGatewayName: string, parameters: Models.VirtualNetworkGateway, options: msRest.RequestOptionsBase): Promise<Models.VirtualNetworkGateway>;
    beginCreateOrUpdate(resourceGroupName: string, virtualNetworkGatewayName: string, parameters: Models.VirtualNetworkGateway, callback: msRest.ServiceCallback<Models.VirtualNetworkGateway>): void;
    beginCreateOrUpdate(resourceGroupName: string, virtualNetworkGatewayName: string, parameters: Models.VirtualNetworkGateway, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VirtualNetworkGateway>): void;
    /**
     * Deletes the specified virtual network gateway.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualNetworkGatewayName The name of the virtual network gateway.
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
    beginDeleteMethod(resourceGroupName: string, virtualNetworkGatewayName: string): Promise<void>;
    beginDeleteMethod(resourceGroupName: string, virtualNetworkGatewayName: string, options: msRest.RequestOptionsBase): Promise<void>;
    beginDeleteMethod(resourceGroupName: string, virtualNetworkGatewayName: string, callback: msRest.ServiceCallback<void>): void;
    beginDeleteMethod(resourceGroupName: string, virtualNetworkGatewayName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * Updates a virtual network gateway tags.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualNetworkGatewayName The name of the virtual network gateway.
     *
     * @param {TagsObject} parameters Parameters supplied to update virtual network gateway tags.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.VirtualNetworkGateway} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.VirtualNetworkGateway} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    beginUpdateTags(resourceGroupName: string, virtualNetworkGatewayName: string, parameters: Models.TagsObject): Promise<Models.VirtualNetworkGateway>;
    beginUpdateTags(resourceGroupName: string, virtualNetworkGatewayName: string, parameters: Models.TagsObject, options: msRest.RequestOptionsBase): Promise<Models.VirtualNetworkGateway>;
    beginUpdateTags(resourceGroupName: string, virtualNetworkGatewayName: string, parameters: Models.TagsObject, callback: msRest.ServiceCallback<Models.VirtualNetworkGateway>): void;
    beginUpdateTags(resourceGroupName: string, virtualNetworkGatewayName: string, parameters: Models.TagsObject, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VirtualNetworkGateway>): void;
    /**
     * Resets the primary of the virtual network gateway in the specified resource group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualNetworkGatewayName The name of the virtual network gateway.
     *
     * @param {VirtualNetworkGatewaysBeginResetOptionalParams} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.VirtualNetworkGateway} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.VirtualNetworkGateway} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    beginReset(resourceGroupName: string, virtualNetworkGatewayName: string): Promise<Models.VirtualNetworkGateway>;
    beginReset(resourceGroupName: string, virtualNetworkGatewayName: string, options: Models.VirtualNetworkGatewaysBeginResetOptionalParams): Promise<Models.VirtualNetworkGateway>;
    beginReset(resourceGroupName: string, virtualNetworkGatewayName: string, callback: msRest.ServiceCallback<Models.VirtualNetworkGateway>): void;
    beginReset(resourceGroupName: string, virtualNetworkGatewayName: string, options: Models.VirtualNetworkGatewaysBeginResetOptionalParams, callback: msRest.ServiceCallback<Models.VirtualNetworkGateway>): void;
    /**
     * Generates VPN client package for P2S client of the virtual network gateway in the specified
     * resource group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualNetworkGatewayName The name of the virtual network gateway.
     *
     * @param {VpnClientParameters} parameters Parameters supplied to the generate virtual network
     * gateway VPN client package operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {string} [result]   - The deserialized result object if an error did not occur.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    beginGeneratevpnclientpackage(resourceGroupName: string, virtualNetworkGatewayName: string, parameters: Models.VpnClientParameters): Promise<string>;
    beginGeneratevpnclientpackage(resourceGroupName: string, virtualNetworkGatewayName: string, parameters: Models.VpnClientParameters, options: msRest.RequestOptionsBase): Promise<string>;
    beginGeneratevpnclientpackage(resourceGroupName: string, virtualNetworkGatewayName: string, parameters: Models.VpnClientParameters, callback: msRest.ServiceCallback<string>): void;
    beginGeneratevpnclientpackage(resourceGroupName: string, virtualNetworkGatewayName: string, parameters: Models.VpnClientParameters, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<string>): void;
    /**
     * Generates VPN profile for P2S client of the virtual network gateway in the specified resource
     * group. Used for IKEV2 and radius based authentication.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualNetworkGatewayName The name of the virtual network gateway.
     *
     * @param {VpnClientParameters} parameters Parameters supplied to the generate virtual network
     * gateway VPN client package operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {string} [result]   - The deserialized result object if an error did not occur.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    beginGenerateVpnProfile(resourceGroupName: string, virtualNetworkGatewayName: string, parameters: Models.VpnClientParameters): Promise<string>;
    beginGenerateVpnProfile(resourceGroupName: string, virtualNetworkGatewayName: string, parameters: Models.VpnClientParameters, options: msRest.RequestOptionsBase): Promise<string>;
    beginGenerateVpnProfile(resourceGroupName: string, virtualNetworkGatewayName: string, parameters: Models.VpnClientParameters, callback: msRest.ServiceCallback<string>): void;
    beginGenerateVpnProfile(resourceGroupName: string, virtualNetworkGatewayName: string, parameters: Models.VpnClientParameters, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<string>): void;
    /**
     * Gets pre-generated VPN profile for P2S client of the virtual network gateway in the specified
     * resource group. The profile needs to be generated first using generateVpnProfile.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualNetworkGatewayName The name of the virtual network gateway.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {string} [result]   - The deserialized result object if an error did not occur.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    beginGetVpnProfilePackageUrl(resourceGroupName: string, virtualNetworkGatewayName: string): Promise<string>;
    beginGetVpnProfilePackageUrl(resourceGroupName: string, virtualNetworkGatewayName: string, options: msRest.RequestOptionsBase): Promise<string>;
    beginGetVpnProfilePackageUrl(resourceGroupName: string, virtualNetworkGatewayName: string, callback: msRest.ServiceCallback<string>): void;
    beginGetVpnProfilePackageUrl(resourceGroupName: string, virtualNetworkGatewayName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<string>): void;
    /**
     * The GetBgpPeerStatus operation retrieves the status of all BGP peers.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualNetworkGatewayName The name of the virtual network gateway.
     *
     * @param {VirtualNetworkGatewaysBeginGetBgpPeerStatusOptionalParams} [options] Optional
     * Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.BgpPeerStatusListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.BgpPeerStatusListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    beginGetBgpPeerStatus(resourceGroupName: string, virtualNetworkGatewayName: string): Promise<Models.BgpPeerStatusListResult>;
    beginGetBgpPeerStatus(resourceGroupName: string, virtualNetworkGatewayName: string, options: Models.VirtualNetworkGatewaysBeginGetBgpPeerStatusOptionalParams): Promise<Models.BgpPeerStatusListResult>;
    beginGetBgpPeerStatus(resourceGroupName: string, virtualNetworkGatewayName: string, callback: msRest.ServiceCallback<Models.BgpPeerStatusListResult>): void;
    beginGetBgpPeerStatus(resourceGroupName: string, virtualNetworkGatewayName: string, options: Models.VirtualNetworkGatewaysBeginGetBgpPeerStatusOptionalParams, callback: msRest.ServiceCallback<Models.BgpPeerStatusListResult>): void;
    /**
     * This operation retrieves a list of routes the virtual network gateway has learned, including
     * routes learned from BGP peers.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualNetworkGatewayName The name of the virtual network gateway.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.GatewayRouteListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.GatewayRouteListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    beginGetLearnedRoutes(resourceGroupName: string, virtualNetworkGatewayName: string): Promise<Models.GatewayRouteListResult>;
    beginGetLearnedRoutes(resourceGroupName: string, virtualNetworkGatewayName: string, options: msRest.RequestOptionsBase): Promise<Models.GatewayRouteListResult>;
    beginGetLearnedRoutes(resourceGroupName: string, virtualNetworkGatewayName: string, callback: msRest.ServiceCallback<Models.GatewayRouteListResult>): void;
    beginGetLearnedRoutes(resourceGroupName: string, virtualNetworkGatewayName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.GatewayRouteListResult>): void;
    /**
     * This operation retrieves a list of routes the virtual network gateway is advertising to the
     * specified peer.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} virtualNetworkGatewayName The name of the virtual network gateway.
     *
     * @param {string} peer The IP address of the peer
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.GatewayRouteListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.GatewayRouteListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    beginGetAdvertisedRoutes(resourceGroupName: string, virtualNetworkGatewayName: string, peer: string): Promise<Models.GatewayRouteListResult>;
    beginGetAdvertisedRoutes(resourceGroupName: string, virtualNetworkGatewayName: string, peer: string, options: msRest.RequestOptionsBase): Promise<Models.GatewayRouteListResult>;
    beginGetAdvertisedRoutes(resourceGroupName: string, virtualNetworkGatewayName: string, peer: string, callback: msRest.ServiceCallback<Models.GatewayRouteListResult>): void;
    beginGetAdvertisedRoutes(resourceGroupName: string, virtualNetworkGatewayName: string, peer: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.GatewayRouteListResult>): void;
    /**
     * Gets all virtual network gateways by resource group.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call to List operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.VirtualNetworkGatewayListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.VirtualNetworkGatewayListResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listNext(nextPageLink: string): Promise<Models.VirtualNetworkGatewayListResult>;
    listNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.VirtualNetworkGatewayListResult>;
    listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.VirtualNetworkGatewayListResult>): void;
    listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VirtualNetworkGatewayListResult>): void;
    /**
     * Gets all the connections in a virtual network gateway.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call to List operation.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.VirtualNetworkGatewayListConnectionsResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.VirtualNetworkGatewayListConnectionsResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    listConnectionsNext(nextPageLink: string): Promise<Models.VirtualNetworkGatewayListConnectionsResult>;
    listConnectionsNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.VirtualNetworkGatewayListConnectionsResult>;
    listConnectionsNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.VirtualNetworkGatewayListConnectionsResult>): void;
    listConnectionsNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VirtualNetworkGatewayListConnectionsResult>): void;
}
