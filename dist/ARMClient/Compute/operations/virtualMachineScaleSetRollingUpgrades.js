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
var Mappers = require("../models/virtualMachineScaleSetRollingUpgradesMappers");
var WebResource = msRest.WebResource;
/** Class representing a VirtualMachineScaleSetRollingUpgrades. */
var VirtualMachineScaleSetRollingUpgrades = /** @class */ (function () {
    /**
     * Create a VirtualMachineScaleSetRollingUpgrades.
     * @param {ComputeManagementClientContext} client Reference to the service client.
     */
    function VirtualMachineScaleSetRollingUpgrades(client) {
        this.serializer = new msRest.Serializer(Mappers);
        this.client = client;
    }
    /**
     * Cancels the current virtual machine scale set rolling upgrade.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmScaleSetName The name of the VM scale set.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    VirtualMachineScaleSetRollingUpgrades.prototype.cancelWithHttpOperationResponse = function (resourceGroupName, vmScaleSetName, options) {
        return __awaiter(this, void 0, void 0, function () {
            var client, initialResult, err_1, operationRes, httpRequest, parsedResponse, resultMapper, deserializationError, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        client = this.client;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.beginCancelWithHttpOperationResponse(resourceGroupName, vmScaleSetName, options)];
                    case 2:
                        initialResult = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        return [2 /*return*/, Promise.reject(err_1)];
                    case 4:
                        _a.trys.push([4, 6, , 7]);
                        return [4 /*yield*/, client.getLongRunningOperationResult(initialResult, options)];
                    case 5:
                        operationRes = _a.sent();
                        httpRequest = operationRes.request;
                        parsedResponse = operationRes.parsedBody;
                        try {
                            if (parsedResponse != undefined) {
                                resultMapper = Mappers.OperationStatusResponse;
                                operationRes.parsedBody = this.serializer.deserialize(resultMapper, parsedResponse, 'operationRes.parsedBody');
                            }
                        }
                        catch (error) {
                            deserializationError = new msRest.RestError("Error " + error + " occurred in deserializing the responseBody - " + operationRes.bodyAsText);
                            deserializationError.request = msRest.stripRequest(httpRequest);
                            deserializationError.response = msRest.stripResponse(operationRes);
                            return [2 /*return*/, Promise.reject(deserializationError)];
                        }
                        return [3 /*break*/, 7];
                    case 6:
                        err_2 = _a.sent();
                        return [2 /*return*/, Promise.reject(err_2)];
                    case 7: return [2 /*return*/, Promise.resolve(operationRes)];
                }
            });
        });
    };
    /**
     * Starts a rolling upgrade to move all virtual machine scale set instances to the latest available
     * Platform Image OS version. Instances which are already running the latest available OS version
     * are not affected.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmScaleSetName The name of the VM scale set.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    VirtualMachineScaleSetRollingUpgrades.prototype.startOSUpgradeWithHttpOperationResponse = function (resourceGroupName, vmScaleSetName, options) {
        return __awaiter(this, void 0, void 0, function () {
            var client, initialResult, err_3, operationRes, httpRequest, parsedResponse, resultMapper, deserializationError, err_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        client = this.client;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.beginStartOSUpgradeWithHttpOperationResponse(resourceGroupName, vmScaleSetName, options)];
                    case 2:
                        initialResult = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_3 = _a.sent();
                        return [2 /*return*/, Promise.reject(err_3)];
                    case 4:
                        _a.trys.push([4, 6, , 7]);
                        return [4 /*yield*/, client.getLongRunningOperationResult(initialResult, options)];
                    case 5:
                        operationRes = _a.sent();
                        httpRequest = operationRes.request;
                        parsedResponse = operationRes.parsedBody;
                        try {
                            if (parsedResponse != undefined) {
                                resultMapper = Mappers.OperationStatusResponse;
                                operationRes.parsedBody = this.serializer.deserialize(resultMapper, parsedResponse, 'operationRes.parsedBody');
                            }
                        }
                        catch (error) {
                            deserializationError = new msRest.RestError("Error " + error + " occurred in deserializing the responseBody - " + operationRes.bodyAsText);
                            deserializationError.request = msRest.stripRequest(httpRequest);
                            deserializationError.response = msRest.stripResponse(operationRes);
                            return [2 /*return*/, Promise.reject(deserializationError)];
                        }
                        return [3 /*break*/, 7];
                    case 6:
                        err_4 = _a.sent();
                        return [2 /*return*/, Promise.reject(err_4)];
                    case 7: return [2 /*return*/, Promise.resolve(operationRes)];
                }
            });
        });
    };
    /**
     * Gets the status of the latest virtual machine scale set rolling upgrade.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmScaleSetName The name of the VM scale set.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    VirtualMachineScaleSetRollingUpgrades.prototype.getLatestWithHttpOperationResponse = function (resourceGroupName, vmScaleSetName, options) {
        return __awaiter(this, void 0, void 0, function () {
            var httpRequest, operationRes, operationArguments, statusCode, parsedResponse, resultMapper, deserializationError, err_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        httpRequest = new WebResource();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        operationArguments = msRest.createOperationArguments({
                            resourceGroupName: resourceGroupName,
                            vmScaleSetName: vmScaleSetName,
                            "this.client.apiVersion": this.client.apiVersion,
                            "this.client.subscriptionId": this.client.subscriptionId,
                            "this.client.acceptLanguage": this.client.acceptLanguage
                        }, options);
                        return [4 /*yield*/, this.client.sendOperationRequest(httpRequest, operationArguments, {
                                httpMethod: "GET",
                                baseUrl: this.client.baseUri,
                                path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/rollingUpgrades/latest",
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
                                        parameterPath: "vmScaleSetName",
                                        mapper: {
                                            required: true,
                                            serializedName: "vmScaleSetName",
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
                                        bodyMapper: Mappers.RollingUpgradeStatusInfo
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
                                    resultMapper = Mappers.RollingUpgradeStatusInfo;
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
                        err_5 = _a.sent();
                        return [2 /*return*/, Promise.reject(err_5)];
                    case 4: return [2 /*return*/, Promise.resolve(operationRes)];
                }
            });
        });
    };
    /**
     * Cancels the current virtual machine scale set rolling upgrade.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmScaleSetName The name of the VM scale set.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    VirtualMachineScaleSetRollingUpgrades.prototype.beginCancelWithHttpOperationResponse = function (resourceGroupName, vmScaleSetName, options) {
        return __awaiter(this, void 0, void 0, function () {
            var httpRequest, operationRes, operationArguments, statusCode, parsedResponse, resultMapper, deserializationError, err_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        httpRequest = new WebResource();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        operationArguments = msRest.createOperationArguments({
                            resourceGroupName: resourceGroupName,
                            vmScaleSetName: vmScaleSetName,
                            "this.client.apiVersion": this.client.apiVersion,
                            "this.client.subscriptionId": this.client.subscriptionId,
                            "this.client.acceptLanguage": this.client.acceptLanguage
                        }, options);
                        return [4 /*yield*/, this.client.sendOperationRequest(httpRequest, operationArguments, {
                                httpMethod: "POST",
                                baseUrl: this.client.baseUri,
                                path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/rollingUpgrades/cancel",
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
                                        parameterPath: "vmScaleSetName",
                                        mapper: {
                                            required: true,
                                            serializedName: "vmScaleSetName",
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
                                    202: {},
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
                                    resultMapper = Mappers.OperationStatusResponse;
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
                        err_6 = _a.sent();
                        return [2 /*return*/, Promise.reject(err_6)];
                    case 4: return [2 /*return*/, Promise.resolve(operationRes)];
                }
            });
        });
    };
    /**
     * Starts a rolling upgrade to move all virtual machine scale set instances to the latest available
     * Platform Image OS version. Instances which are already running the latest available OS version
     * are not affected.
     *
     * @param {string} resourceGroupName The name of the resource group.
     *
     * @param {string} vmScaleSetName The name of the VM scale set.
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} The deserialized result object.
     *
     * @reject {Error|ServiceError} The error object.
     */
    VirtualMachineScaleSetRollingUpgrades.prototype.beginStartOSUpgradeWithHttpOperationResponse = function (resourceGroupName, vmScaleSetName, options) {
        return __awaiter(this, void 0, void 0, function () {
            var httpRequest, operationRes, operationArguments, statusCode, parsedResponse, resultMapper, deserializationError, err_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        httpRequest = new WebResource();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        operationArguments = msRest.createOperationArguments({
                            resourceGroupName: resourceGroupName,
                            vmScaleSetName: vmScaleSetName,
                            "this.client.apiVersion": this.client.apiVersion,
                            "this.client.subscriptionId": this.client.subscriptionId,
                            "this.client.acceptLanguage": this.client.acceptLanguage
                        }, options);
                        return [4 /*yield*/, this.client.sendOperationRequest(httpRequest, operationArguments, {
                                httpMethod: "POST",
                                baseUrl: this.client.baseUri,
                                path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/osRollingUpgrade",
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
                                        parameterPath: "vmScaleSetName",
                                        mapper: {
                                            required: true,
                                            serializedName: "vmScaleSetName",
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
                                    202: {},
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
                                    resultMapper = Mappers.OperationStatusResponse;
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
                        err_7 = _a.sent();
                        return [2 /*return*/, Promise.reject(err_7)];
                    case 4: return [2 /*return*/, Promise.resolve(operationRes)];
                }
            });
        });
    };
    VirtualMachineScaleSetRollingUpgrades.prototype.cancel = function (resourceGroupName, vmScaleSetName, options, callback) {
        if (!callback && typeof options === 'function') {
            callback = options;
            options = undefined;
        }
        var cb = callback;
        if (!callback) {
            return this.cancelWithHttpOperationResponse(resourceGroupName, vmScaleSetName, options).then(function (operationRes) {
                return Promise.resolve(operationRes.parsedBody);
            }).catch(function (err) {
                return Promise.reject(err);
            });
        }
        else {
            msRest.promiseToCallback(this.cancelWithHttpOperationResponse(resourceGroupName, vmScaleSetName, options))(function (err, data) {
                if (err) {
                    return cb(err);
                }
                var result = data.parsedBody;
                return cb(err, result, data.request, data);
            });
        }
    };
    VirtualMachineScaleSetRollingUpgrades.prototype.startOSUpgrade = function (resourceGroupName, vmScaleSetName, options, callback) {
        if (!callback && typeof options === 'function') {
            callback = options;
            options = undefined;
        }
        var cb = callback;
        if (!callback) {
            return this.startOSUpgradeWithHttpOperationResponse(resourceGroupName, vmScaleSetName, options).then(function (operationRes) {
                return Promise.resolve(operationRes.parsedBody);
            }).catch(function (err) {
                return Promise.reject(err);
            });
        }
        else {
            msRest.promiseToCallback(this.startOSUpgradeWithHttpOperationResponse(resourceGroupName, vmScaleSetName, options))(function (err, data) {
                if (err) {
                    return cb(err);
                }
                var result = data.parsedBody;
                return cb(err, result, data.request, data);
            });
        }
    };
    VirtualMachineScaleSetRollingUpgrades.prototype.getLatest = function (resourceGroupName, vmScaleSetName, options, callback) {
        if (!callback && typeof options === 'function') {
            callback = options;
            options = undefined;
        }
        var cb = callback;
        if (!callback) {
            return this.getLatestWithHttpOperationResponse(resourceGroupName, vmScaleSetName, options).then(function (operationRes) {
                return Promise.resolve(operationRes.parsedBody);
            }).catch(function (err) {
                return Promise.reject(err);
            });
        }
        else {
            msRest.promiseToCallback(this.getLatestWithHttpOperationResponse(resourceGroupName, vmScaleSetName, options))(function (err, data) {
                if (err) {
                    return cb(err);
                }
                var result = data.parsedBody;
                return cb(err, result, data.request, data);
            });
        }
    };
    VirtualMachineScaleSetRollingUpgrades.prototype.beginCancel = function (resourceGroupName, vmScaleSetName, options, callback) {
        if (!callback && typeof options === 'function') {
            callback = options;
            options = undefined;
        }
        var cb = callback;
        if (!callback) {
            return this.beginCancelWithHttpOperationResponse(resourceGroupName, vmScaleSetName, options).then(function (operationRes) {
                return Promise.resolve(operationRes.parsedBody);
            }).catch(function (err) {
                return Promise.reject(err);
            });
        }
        else {
            msRest.promiseToCallback(this.beginCancelWithHttpOperationResponse(resourceGroupName, vmScaleSetName, options))(function (err, data) {
                if (err) {
                    return cb(err);
                }
                var result = data.parsedBody;
                return cb(err, result, data.request, data);
            });
        }
    };
    VirtualMachineScaleSetRollingUpgrades.prototype.beginStartOSUpgrade = function (resourceGroupName, vmScaleSetName, options, callback) {
        if (!callback && typeof options === 'function') {
            callback = options;
            options = undefined;
        }
        var cb = callback;
        if (!callback) {
            return this.beginStartOSUpgradeWithHttpOperationResponse(resourceGroupName, vmScaleSetName, options).then(function (operationRes) {
                return Promise.resolve(operationRes.parsedBody);
            }).catch(function (err) {
                return Promise.reject(err);
            });
        }
        else {
            msRest.promiseToCallback(this.beginStartOSUpgradeWithHttpOperationResponse(resourceGroupName, vmScaleSetName, options))(function (err, data) {
                if (err) {
                    return cb(err);
                }
                var result = data.parsedBody;
                return cb(err, result, data.request, data);
            });
        }
    };
    return VirtualMachineScaleSetRollingUpgrades;
}());
exports.VirtualMachineScaleSetRollingUpgrades = VirtualMachineScaleSetRollingUpgrades;
//# sourceMappingURL=virtualMachineScaleSetRollingUpgrades.js.map