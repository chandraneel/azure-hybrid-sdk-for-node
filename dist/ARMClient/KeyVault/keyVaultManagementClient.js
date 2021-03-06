"use strict";
/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Models = require("./models");
exports.KeyVaultManagementModels = Models;
var Mappers = require("./models/mappers");
exports.KeyVaultManagementMappers = Mappers;
var msRest = require("ms-rest-js");
var keyVaultManagementClientContext_1 = require("./keyVaultManagementClientContext");
var operations = require("./operations");
var KeyVaultManagementClient = /** @class */ (function (_super) {
    __extends(KeyVaultManagementClient, _super);
    /**
     * @class
     * Initializes a new instance of the KeyVaultManagementClient class.
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
    function KeyVaultManagementClient(credentials, subscriptionId, baseUri, options) {
        var _this = _super.call(this, credentials, subscriptionId, baseUri, options) || this;
        _this.serializer = new msRest.Serializer(Mappers);
        _this.vaults = new operations.Vaults(_this);
        _this.operations = new operations.Operations(_this);
        return _this;
    }
    return KeyVaultManagementClient;
}(keyVaultManagementClientContext_1.KeyVaultManagementClientContext));
exports.KeyVaultManagementClient = KeyVaultManagementClient;
//# sourceMappingURL=keyVaultManagementClient.js.map