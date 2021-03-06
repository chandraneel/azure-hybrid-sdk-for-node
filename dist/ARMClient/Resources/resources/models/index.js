"use strict";
/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Defines values for DeploymentMode.
 * Possible values include: 'Incremental', 'Complete'
 * @readonly
 * @enum {string}
 */
var DeploymentMode;
(function (DeploymentMode) {
    DeploymentMode["Incremental"] = "Incremental";
    DeploymentMode["Complete"] = "Complete";
})(DeploymentMode = exports.DeploymentMode || (exports.DeploymentMode = {}));
/**
 * Defines values for OnErrorDeploymentType.
 * Possible values include: 'LastSuccessful', 'SpecificDeployment'
 * @readonly
 * @enum {string}
 */
var OnErrorDeploymentType;
(function (OnErrorDeploymentType) {
    OnErrorDeploymentType["LastSuccessful"] = "LastSuccessful";
    OnErrorDeploymentType["SpecificDeployment"] = "SpecificDeployment";
})(OnErrorDeploymentType = exports.OnErrorDeploymentType || (exports.OnErrorDeploymentType = {}));
/**
 * Defines values for ResourceIdentityType.
 * Possible values include: 'SystemAssigned', 'UserAssigned', 'SystemAssigned,
 * UserAssigned', 'None'
 * @readonly
 * @enum {string}
 */
var ResourceIdentityType;
(function (ResourceIdentityType) {
    ResourceIdentityType["SystemAssigned"] = "SystemAssigned";
    ResourceIdentityType["UserAssigned"] = "UserAssigned";
    ResourceIdentityType["SystemAssignedUserAssigned"] = "SystemAssigned, UserAssigned";
    ResourceIdentityType["None"] = "None";
})(ResourceIdentityType = exports.ResourceIdentityType || (exports.ResourceIdentityType = {}));
//# sourceMappingURL=index.js.map