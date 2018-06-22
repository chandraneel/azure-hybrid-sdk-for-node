import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as msRest from "ms-rest-js";
import * as msRestAzure from "ms-rest-azure-js";
import { NetworkManagementClientContext } from "./networkManagementClientContext";
import * as operations from "./operations";
declare class NetworkManagementClient extends NetworkManagementClientContext {
    serializer: msRest.Serializer;
    loadBalancers: operations.LoadBalancers;
    loadBalancerBackendAddressPools: operations.LoadBalancerBackendAddressPools;
    loadBalancerFrontendIPConfigurations: operations.LoadBalancerFrontendIPConfigurations;
    inboundNatRules: operations.InboundNatRules;
    loadBalancerLoadBalancingRules: operations.LoadBalancerLoadBalancingRules;
    loadBalancerNetworkInterfaces: operations.LoadBalancerNetworkInterfaces;
    loadBalancerProbes: operations.LoadBalancerProbes;
    networkInterfaces: operations.NetworkInterfaces;
    networkInterfaceIPConfigurations: operations.NetworkInterfaceIPConfigurations;
    networkInterfaceLoadBalancers: operations.NetworkInterfaceLoadBalancers;
    networkSecurityGroups: operations.NetworkSecurityGroups;
    securityRules: operations.SecurityRules;
    defaultSecurityRules: operations.DefaultSecurityRules;
    networkWatchers: operations.NetworkWatchers;
    packetCaptures: operations.PacketCaptures;
    connectionMonitors: operations.ConnectionMonitors;
    operations: operations.Operations;
    publicIPAddresses: operations.PublicIPAddresses;
    routeFilters: operations.RouteFilters;
    routeFilterRules: operations.RouteFilterRules;
    routeTables: operations.RouteTables;
    routes: operations.Routes;
    usages: operations.Usages;
    virtualNetworks: operations.VirtualNetworks;
    subnets: operations.Subnets;
    virtualNetworkPeerings: operations.VirtualNetworkPeerings;
    virtualNetworkGateways: operations.VirtualNetworkGateways;
    virtualNetworkGatewayConnections: operations.VirtualNetworkGatewayConnections;
    localNetworkGateways: operations.LocalNetworkGateways;
    /**
     * @class
     * Initializes a new instance of the NetworkManagementClient class.
     * @constructor
     *
     * @param {msRest.ServiceClientCredentials} credentials - Credentials needed for the client to connect to Azure.
     *
     * @param {string} subscriptionId - The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
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
    /**
     * Checks whether a domain name in the cloudapp.azure.com zone is available for use.
     *
     * @param {string} location The location of the domain name.
     *
     * @param {string} domainNameLabel The domain name to be verified. It must conform to the following
     * regular expression: ^[a-z][a-z0-9-]{1,61}[a-z0-9]$.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    checkDnsNameAvailabilityWithHttpOperationResponse(location: string, domainNameLabel: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.DnsNameAvailabilityResult>>;
    /**
     * Checks whether a domain name in the cloudapp.azure.com zone is available for use.
     *
     * @param {string} location The location of the domain name.
     *
     * @param {string} domainNameLabel The domain name to be verified. It must conform to the following
     * regular expression: ^[a-z][a-z0-9-]{1,61}[a-z0-9]$.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @param {ServiceCallback} callback The callback.
     *
     * @returns {ServiceCallback} callback(err, result, request, operationRes)
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *                      {Models.DnsNameAvailabilityResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Models.DnsNameAvailabilityResult} for more information.
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
     */
    checkDnsNameAvailability(location: string, domainNameLabel: string): Promise<Models.DnsNameAvailabilityResult>;
    checkDnsNameAvailability(location: string, domainNameLabel: string, options: msRest.RequestOptionsBase): Promise<Models.DnsNameAvailabilityResult>;
    checkDnsNameAvailability(location: string, domainNameLabel: string, callback: msRest.ServiceCallback<Models.DnsNameAvailabilityResult>): void;
    checkDnsNameAvailability(location: string, domainNameLabel: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DnsNameAvailabilityResult>): void;
}
export { NetworkManagementClient, Models as NetworkManagementModels, Mappers as NetworkManagementMappers };
