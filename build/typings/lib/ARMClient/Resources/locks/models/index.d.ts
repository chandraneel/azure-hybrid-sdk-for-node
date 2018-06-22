import { BaseResource, CloudError } from "ms-rest-azure-js";
import * as msRest from "ms-rest-js";
export { BaseResource, CloudError };
/**
 * @interface
 * An interface representing ManagementLockOwner.
 * Lock owner properties.
 *
 */
export interface ManagementLockOwner {
    /**
     * @member {string} [applicationId] The application ID of the lock owner.
     */
    applicationId?: string;
}
/**
 * @interface
 * An interface representing ManagementLockObject.
 * The lock information.
 *
 * @extends BaseResource
 */
export interface ManagementLockObject extends BaseResource {
    /**
     * @member {LockLevel} level The level of the lock. Possible values are:
     * NotSpecified, CanNotDelete, ReadOnly. CanNotDelete means authorized users
     * are able to read and modify the resources, but not delete. ReadOnly means
     * authorized users can only read from a resource, but they can't modify or
     * delete it. Possible values include: 'NotSpecified', 'CanNotDelete',
     * 'ReadOnly'
     */
    level: LockLevel;
    /**
     * @member {string} [notes] Notes about the lock. Maximum of 512 characters.
     */
    notes?: string;
    /**
     * @member {ManagementLockOwner[]} [owners] The owners of the lock.
     */
    owners?: ManagementLockOwner[];
    /**
     * @member {string} [id] The resource ID of the lock.
     */
    readonly id?: string;
    /**
     * @member {string} [type] The resource type of the lock -
     * Microsoft.Authorization/locks.
     */
    readonly type?: string;
    /**
     * @member {string} [name] The name of the lock.
     */
    name?: string;
}
/**
 * @interface
 * An interface representing ManagementLocksListAtResourceGroupLevelOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface ManagementLocksListAtResourceGroupLevelOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {string} [filter] The filter to apply on the operation.
     */
    filter?: string;
}
/**
 * @interface
 * An interface representing ManagementLocksListAtResourceLevelOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface ManagementLocksListAtResourceLevelOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {string} [filter] The filter to apply on the operation.
     */
    filter?: string;
}
/**
 * @interface
 * An interface representing ManagementLocksListAtSubscriptionLevelOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface ManagementLocksListAtSubscriptionLevelOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {string} [filter] The filter to apply on the operation.
     */
    filter?: string;
}
/**
 * @interface
 * An interface representing the ManagementLockListResult.
 * The list of locks.
 *
 * @extends Array<ManagementLockObject>
 */
export interface ManagementLockListResult extends Array<ManagementLockObject> {
    /**
     * @member {string} [nextLink] The URL to use for getting the next set of
     * results.
     */
    nextLink?: string;
}
/**
 * Defines values for LockLevel.
 * Possible values include: 'NotSpecified', 'CanNotDelete', 'ReadOnly'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: LockLevel = <LockLevel>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
export declare enum LockLevel {
    NotSpecified = "NotSpecified",
    CanNotDelete = "CanNotDelete",
    ReadOnly = "ReadOnly"
}
