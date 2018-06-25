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
exports.ManagementLockModels = Models;
var Mappers = require("./models/mappers");
exports.ManagementLockMappers = Mappers;
var msRest = require("ms-rest-js");
var managementLockClientContext_1 = require("./managementLockClientContext");
var operations = require("./operations");
var ManagementLockClient = /** @class */ (function (_super) {
    __extends(ManagementLockClient, _super);
    /**
     * @class
     * Initializes a new instance of the ManagementLockClient class.
     * @constructor
     *
     * @param {msRest.ServiceClientCredentials} credentials - Credentials needed for the client to connect to Azure.
     *
     * @param {string} subscriptionId - The ID of the target subscription.
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
    function ManagementLockClient(credentials, subscriptionId, baseUri, options) {
        var _this = _super.call(this, credentials, subscriptionId, baseUri, options) || this;
        _this.serializer = new msRest.Serializer(Mappers);
        _this.managementLocks = new operations.ManagementLocks(_this);
        return _this;
    }
    return ManagementLockClient;
}(managementLockClientContext_1.ManagementLockClientContext));
exports.ManagementLockClient = ManagementLockClient;
//# sourceMappingURL=managementLockClient.js.map