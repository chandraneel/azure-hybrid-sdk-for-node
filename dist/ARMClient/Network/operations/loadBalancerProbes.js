"use strict";
/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var msRest = require("ms-rest-js");
var Mappers = require("../models/loadBalancerProbesMappers");
var WebResource = msRest.WebResource;
/** Class representing a LoadBalancerProbes. */
var LoadBalancerProbes = /** @class */ (function () {
    /**
     * Create a LoadBalancerProbes.
     * @param {NetworkManagementClientContext} client Reference to the service client.
     */
    function LoadBalancerProbes(client) {
        this.serializer = new msRest.Serializer(Mappers);
        this.client = client;
    }
    /**
     * Gets all the load balancer probes.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} loadBalancerName The name of the load balancer.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    LoadBalancerProbes.prototype.listWithHttpOperationResponse = function (resourceGroupName, loadBalancerName, options) {
        return __awaiter(this, void 0, void 0, function () {
            var apiVersion, httpRequest, operationRes, operationArguments, statusCode, parsedResponse, resultMapper, deserializationError, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        apiVersion = '2017-10-01';
                        httpRequest = new WebResource();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        operationArguments = msRest.createOperationArguments({
                            resourceGroupName: resourceGroupName,
                            loadBalancerName: loadBalancerName,
                            apiVersion: apiVersion,
                            "this.client.subscriptionId": this.client.subscriptionId,
                            "this.client.acceptLanguage": this.client.acceptLanguage
                        }, options);
                        return [4 /*yield*/, this.client.sendOperationRequest(httpRequest, operationArguments, {
                                httpMethod: "GET",
                                baseUrl: this.client.baseUri,
                                path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/loadBalancers/{loadBalancerName}/probes",
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
                                        parameterPath: "loadBalancerName",
                                        mapper: {
                                            required: true,
                                            serializedName: "loadBalancerName",
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
                                        bodyMapper: Mappers.LoadBalancerProbeListResult
                                    },
                                    default: {
                                        bodyMapper: Mappers.CloudError
                                    }
                                },
                                serializer: this.serializer
                            })];
                    case 2:
                        operationRes = _a.sent();
                        statusCode = operationRes.status;
                        if (statusCode === 200) {
                            parsedResponse = operationRes.parsedBody;
                            try {
                                if (parsedResponse != undefined) {
                                    resultMapper = Mappers.LoadBalancerProbeListResult;
                                    operationRes.parsedBody = this.serializer.deserialize(resultMapper, parsedResponse, 'operationRes.parsedBody');
                                }
                            }
                            catch (error) {
                                deserializationError = new msRest.RestError("Error " + error + " occurred in deserializing the responseBody - " + operationRes.bodyAsText);
                                deserializationError.request = msRest.stripRequest(httpRequest);
                                deserializationError.response = msRest.stripResponse(operationRes);
                                return [2 /*return*/, Promise.reject(deserializationError)];
                            }
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        return [2 /*return*/, Promise.reject(err_1)];
                    case 4: return [2 /*return*/, Promise.resolve(operationRes)];
                }
            });
        });
    };
    /**
     * Gets load balancer probe.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} loadBalancerName The name of the load balancer.
     *
     * @param {string} probeName The name of the probe.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    LoadBalancerProbes.prototype.getWithHttpOperationResponse = function (resourceGroupName, loadBalancerName, probeName, options) {
        return __awaiter(this, void 0, void 0, function () {
            var apiVersion, httpRequest, operationRes, operationArguments, statusCode, parsedResponse, resultMapper, deserializationError, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        apiVersion = '2017-10-01';
                        httpRequest = new WebResource();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        operationArguments = msRest.createOperationArguments({
                            resourceGroupName: resourceGroupName,
                            loadBalancerName: loadBalancerName,
                            probeName: probeName,
                            apiVersion: apiVersion,
                            "this.client.subscriptionId": this.client.subscriptionId,
                            "this.client.acceptLanguage": this.client.acceptLanguage
                        }, options);
                        return [4 /*yield*/, this.client.sendOperationRequest(httpRequest, operationArguments, {
                                httpMethod: "GET",
                                baseUrl: this.client.baseUri,
                                path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/loadBalancers/{loadBalancerName}/probes/{probeName}",
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
                                        parameterPath: "loadBalancerName",
                                        mapper: {
                                            required: true,
                                            serializedName: "loadBalancerName",
                                            type: {
                                                name: "String"
                                            }
                                        }
                                    },
                                    {
                                        parameterPath: "probeName",
                                        mapper: {
                                            required: true,
                                            serializedName: "probeName",
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
                                        bodyMapper: Mappers.Probe
                                    },
                                    default: {
                                        bodyMapper: Mappers.CloudError
                                    }
                                },
                                serializer: this.serializer
                            })];
                    case 2:
                        operationRes = _a.sent();
                        statusCode = operationRes.status;
                        if (statusCode === 200) {
                            parsedResponse = operationRes.parsedBody;
                            try {
                                if (parsedResponse != undefined) {
                                    resultMapper = Mappers.Probe;
                                    operationRes.parsedBody = this.serializer.deserialize(resultMapper, parsedResponse, 'operationRes.parsedBody');
                                }
                            }
                            catch (error) {
                                deserializationError = new msRest.RestError("Error " + error + " occurred in deserializing the responseBody - " + operationRes.bodyAsText);
                                deserializationError.request = msRest.stripRequest(httpRequest);
                                deserializationError.response = msRest.stripResponse(operationRes);
                                return [2 /*return*/, Promise.reject(deserializationError)];
                            }
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        err_2 = _a.sent();
                        return [2 /*return*/, Promise.reject(err_2)];
                    case 4: return [2 /*return*/, Promise.resolve(operationRes)];
                }
            });
        });
    };
    /**
     * Gets all the load balancer probes.
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
    LoadBalancerProbes.prototype.listNextWithHttpOperationResponse = function (nextPageLink, options) {
        return __awaiter(this, void 0, void 0, function () {
            var httpRequest, operationRes, operationArguments, statusCode, parsedResponse, resultMapper, deserializationError, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        httpRequest = new WebResource();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        operationArguments = msRest.createOperationArguments({
                            nextPageLink: nextPageLink,
                            "this.client.acceptLanguage": this.client.acceptLanguage
                        }, options);
                        return [4 /*yield*/, this.client.sendOperationRequest(httpRequest, operationArguments, {
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
                                        bodyMapper: Mappers.LoadBalancerProbeListResult
                                    },
                                    default: {
                                        bodyMapper: Mappers.CloudError
                                    }
                                },
                                serializer: this.serializer
                            })];
                    case 2:
                        operationRes = _a.sent();
                        statusCode = operationRes.status;
                        if (statusCode === 200) {
                            parsedResponse = operationRes.parsedBody;
                            try {
                                if (parsedResponse != undefined) {
                                    resultMapper = Mappers.LoadBalancerProbeListResult;
                                    operationRes.parsedBody = this.serializer.deserialize(resultMapper, parsedResponse, 'operationRes.parsedBody');
                                }
                            }
                            catch (error) {
                                deserializationError = new msRest.RestError("Error " + error + " occurred in deserializing the responseBody - " + operationRes.bodyAsText);
                                deserializationError.request = msRest.stripRequest(httpRequest);
                                deserializationError.response = msRest.stripResponse(operationRes);
                                return [2 /*return*/, Promise.reject(deserializationError)];
                            }
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        err_3 = _a.sent();
                        return [2 /*return*/, Promise.reject(err_3)];
                    case 4: return [2 /*return*/, Promise.resolve(operationRes)];
                }
            });
        });
    };
    LoadBalancerProbes.prototype.list = function (resourceGroupName, loadBalancerName, options, callback) {
        if (!callback && typeof options === 'function') {
            callback = options;
            options = undefined;
        }
        var cb = callback;
        if (!callback) {
            return this.listWithHttpOperationResponse(resourceGroupName, loadBalancerName, options).then(function (operationRes) {
                return Promise.resolve(operationRes.parsedBody);
            }).catch(function (err) {
                return Promise.reject(err);
            });
        }
        else {
            msRest.promiseToCallback(this.listWithHttpOperationResponse(resourceGroupName, loadBalancerName, options))(function (err, data) {
                if (err) {
                    return cb(err);
                }
                var result = data.parsedBody;
                return cb(err, result, data.request, data);
            });
        }
    };
    LoadBalancerProbes.prototype.get = function (resourceGroupName, loadBalancerName, probeName, options, callback) {
        if (!callback && typeof options === 'function') {
            callback = options;
            options = undefined;
        }
        var cb = callback;
        if (!callback) {
            return this.getWithHttpOperationResponse(resourceGroupName, loadBalancerName, probeName, options).then(function (operationRes) {
                return Promise.resolve(operationRes.parsedBody);
            }).catch(function (err) {
                return Promise.reject(err);
            });
        }
        else {
            msRest.promiseToCallback(this.getWithHttpOperationResponse(resourceGroupName, loadBalancerName, probeName, options))(function (err, data) {
                if (err) {
                    return cb(err);
                }
                var result = data.parsedBody;
                return cb(err, result, data.request, data);
            });
        }
    };
    LoadBalancerProbes.prototype.listNext = function (nextPageLink, options, callback) {
        if (!callback && typeof options === 'function') {
            callback = options;
            options = undefined;
        }
        var cb = callback;
        if (!callback) {
            return this.listNextWithHttpOperationResponse(nextPageLink, options).then(function (operationRes) {
                return Promise.resolve(operationRes.parsedBody);
            }).catch(function (err) {
                return Promise.reject(err);
            });
        }
        else {
            msRest.promiseToCallback(this.listNextWithHttpOperationResponse(nextPageLink, options))(function (err, data) {
                if (err) {
                    return cb(err);
                }
                var result = data.parsedBody;
                return cb(err, result, data.request, data);
            });
        }
    };
    return LoadBalancerProbes;
}());
exports.LoadBalancerProbes = LoadBalancerProbes;
//# sourceMappingURL=loadBalancerProbes.js.map