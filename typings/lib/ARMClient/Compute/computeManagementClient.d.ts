import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as msRest from "ms-rest-js";
import * as msRestAzure from "ms-rest-azure-js";
import { ComputeManagementClientContext } from "./computeManagementClientContext";
import * as operations from "./operations";
declare class ComputeManagementClient extends ComputeManagementClientContext {
    serializer: msRest.Serializer;
    availabilitySets: operations.AvailabilitySets;
    virtualMachineExtensionImages: operations.VirtualMachineExtensionImages;
    virtualMachineExtensions: operations.VirtualMachineExtensions;
    virtualMachines: operations.VirtualMachines;
    virtualMachineImages: operations.VirtualMachineImages;
    usage: operations.UsageOperations;
    virtualMachineSizes: operations.VirtualMachineSizes;
    images: operations.Images;
    resourceSkus: operations.ResourceSkus;
    virtualMachineScaleSets: operations.VirtualMachineScaleSets;
    virtualMachineScaleSetExtensions: operations.VirtualMachineScaleSetExtensions;
    virtualMachineScaleSetRollingUpgrades: operations.VirtualMachineScaleSetRollingUpgrades;
    virtualMachineScaleSetVMs: operations.VirtualMachineScaleSetVMs;
    disks: operations.Disks;
    snapshots: operations.Snapshots;
    virtualMachineRunCommands: operations.VirtualMachineRunCommands;
    /**
     * @class
     * Initializes a new instance of the ComputeManagementClient class.
     * @constructor
     *
     * @param {msRest.ServiceClientCredentials} credentials - Credentials needed for the client to connect to Azure.
     *
     * @param {string} subscriptionId - Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
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
}
export { ComputeManagementClient, Models as ComputeManagementModels, Mappers as ComputeManagementMappers };
