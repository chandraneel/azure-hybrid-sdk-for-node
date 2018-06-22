import { BaseResource, CloudError } from "ms-rest-azure-js";
import * as msRest from "ms-rest-js";
export { BaseResource, CloudError };
/**
 * @interface
 * An interface representing Sku.
 * SKU details
 *
 */
export interface Sku {
    /**
     * @member {SkuName} name SKU name to specify whether the key vault is a
     * standard vault or a premium vault. Possible values include: 'standard',
     * 'premium'
     */
    name: SkuName;
}
/**
 * @interface
 * An interface representing Permissions.
 * Permissions the identity has for keys, secrets, certificates and storage.
 *
 */
export interface Permissions {
    /**
     * @member {KeyPermissions[]} [keys] Permissions to keys
     */
    keys?: KeyPermissions[];
    /**
     * @member {SecretPermissions[]} [secrets] Permissions to secrets
     */
    secrets?: SecretPermissions[];
    /**
     * @member {CertificatePermissions[]} [certificates] Permissions to
     * certificates
     */
    certificates?: CertificatePermissions[];
    /**
     * @member {StoragePermissions[]} [storage] Permissions to storage accounts
     */
    storage?: StoragePermissions[];
}
/**
 * @interface
 * An interface representing AccessPolicyEntry.
 * An identity that have access to the key vault. All identities in the array
 * must use the same tenant ID as the key vault's tenant ID.
 *
 */
export interface AccessPolicyEntry {
    /**
     * @member {string} tenantId The Azure Active Directory tenant ID that should
     * be used for authenticating requests to the key vault.
     */
    tenantId: string;
    /**
     * @member {string} objectId The object ID of a user, service principal or
     * security group in the Azure Active Directory tenant for the vault. The
     * object ID must be unique for the list of access policies.
     */
    objectId: string;
    /**
     * @member {string} [applicationId] Application ID of the client making
     * request on behalf of a principal
     */
    applicationId?: string;
    /**
     * @member {Permissions} permissions Permissions the identity has for keys,
     * secrets and certificates.
     */
    permissions: Permissions;
}
/**
 * @interface
 * An interface representing VaultProperties.
 * Properties of the vault
 *
 */
export interface VaultProperties {
    /**
     * @member {string} tenantId The Azure Active Directory tenant ID that should
     * be used for authenticating requests to the key vault.
     */
    tenantId: string;
    /**
     * @member {Sku} sku SKU details
     */
    sku: Sku;
    /**
     * @member {AccessPolicyEntry[]} [accessPolicies] An array of 0 to 16
     * identities that have access to the key vault. All identities in the array
     * must use the same tenant ID as the key vault's tenant ID.
     */
    accessPolicies?: AccessPolicyEntry[];
    /**
     * @member {string} [vaultUri] The URI of the vault for performing operations
     * on keys and secrets.
     */
    vaultUri?: string;
    /**
     * @member {boolean} [enabledForDeployment] Property to specify whether Azure
     * Virtual Machines are permitted to retrieve certificates stored as secrets
     * from the key vault.
     */
    enabledForDeployment?: boolean;
    /**
     * @member {boolean} [enabledForDiskEncryption] Property to specify whether
     * Azure Disk Encryption is permitted to retrieve secrets from the vault and
     * unwrap keys.
     */
    enabledForDiskEncryption?: boolean;
    /**
     * @member {boolean} [enabledForTemplateDeployment] Property to specify
     * whether Azure Resource Manager is permitted to retrieve secrets from the
     * key vault.
     */
    enabledForTemplateDeployment?: boolean;
    /**
     * @member {boolean} [enableSoftDelete] Property specifying whether
     * recoverable deletion is enabled for this key vault. Setting this property
     * to true activates the soft delete feature, whereby vaults or vault
     * entities can be recovered after deletion. Enabling this functionality is
     * irreversible - that is, the property does not accept false as its value.
     */
    enableSoftDelete?: boolean;
    /**
     * @member {CreateMode} [createMode] The vault's create mode to indicate
     * whether the vault need to be recovered or not. Possible values include:
     * 'recover', 'default'
     */
    createMode?: CreateMode;
    /**
     * @member {boolean} [enablePurgeProtection] Property specifying whether
     * protection against purge is enabled for this vault. Setting this property
     * to true activates protection against purge for this vault and its content
     * - only the Key Vault service may initiate a hard, irrecoverable deletion.
     * The setting is effective only if soft delete is also enabled. Enabling
     * this functionality is irreversible - that is, the property does not accept
     * false as its value.
     */
    enablePurgeProtection?: boolean;
}
/**
 * @interface
 * An interface representing VaultPatchProperties.
 * Properties of the vault
 *
 */
export interface VaultPatchProperties {
    /**
     * @member {string} [tenantId] The Azure Active Directory tenant ID that
     * should be used for authenticating requests to the key vault.
     */
    tenantId?: string;
    /**
     * @member {Sku} [sku] SKU details
     */
    sku?: Sku;
    /**
     * @member {AccessPolicyEntry[]} [accessPolicies] An array of 0 to 16
     * identities that have access to the key vault. All identities in the array
     * must use the same tenant ID as the key vault's tenant ID.
     */
    accessPolicies?: AccessPolicyEntry[];
    /**
     * @member {boolean} [enabledForDeployment] Property to specify whether Azure
     * Virtual Machines are permitted to retrieve certificates stored as secrets
     * from the key vault.
     */
    enabledForDeployment?: boolean;
    /**
     * @member {boolean} [enabledForDiskEncryption] Property to specify whether
     * Azure Disk Encryption is permitted to retrieve secrets from the vault and
     * unwrap keys.
     */
    enabledForDiskEncryption?: boolean;
    /**
     * @member {boolean} [enabledForTemplateDeployment] Property to specify
     * whether Azure Resource Manager is permitted to retrieve secrets from the
     * key vault.
     */
    enabledForTemplateDeployment?: boolean;
    /**
     * @member {boolean} [enableSoftDelete] Property specifying whether
     * recoverable deletion ('soft' delete) is enabled for this key vault. The
     * property may not be set to false.
     */
    enableSoftDelete?: boolean;
    /**
     * @member {CreateMode} [createMode] The vault's create mode to indicate
     * whether the vault need to be recovered or not. Possible values include:
     * 'recover', 'default'
     */
    createMode?: CreateMode;
    /**
     * @member {boolean} [enablePurgeProtection] Property specifying whether
     * protection against purge is enabled for this vault; it is only effective
     * if soft delete is also enabled. Once activated, the property may no longer
     * be reset to false.
     */
    enablePurgeProtection?: boolean;
}
/**
 * @interface
 * An interface representing VaultAccessPolicyProperties.
 * Properties of the vault access policy
 *
 */
export interface VaultAccessPolicyProperties {
    /**
     * @member {AccessPolicyEntry[]} accessPolicies An array of 0 to 16
     * identities that have access to the key vault. All identities in the array
     * must use the same tenant ID as the key vault's tenant ID.
     */
    accessPolicies: AccessPolicyEntry[];
}
/**
 * @interface
 * An interface representing DeletedVaultProperties.
 * Properties of the deleted vault.
 *
 */
export interface DeletedVaultProperties {
    /**
     * @member {string} [vaultId] The resource id of the original vault.
     */
    readonly vaultId?: string;
    /**
     * @member {string} [location] The location of the original vault.
     */
    readonly location?: string;
    /**
     * @member {Date} [deletionDate] The deleted date.
     */
    readonly deletionDate?: Date;
    /**
     * @member {Date} [scheduledPurgeDate] The scheduled purged date.
     */
    readonly scheduledPurgeDate?: Date;
    /**
     * @member {{ [propertyName: string]: string }} [tags] Tags of the original
     * vault.
     */
    readonly tags?: {
        [propertyName: string]: string;
    };
}
/**
 * @interface
 * An interface representing VaultCreateOrUpdateParameters.
 * Parameters for creating or updating a vault
 *
 * @extends BaseResource
 */
export interface VaultCreateOrUpdateParameters extends BaseResource {
    /**
     * @member {string} location The supported Azure location where the key vault
     * should be created.
     */
    location: string;
    /**
     * @member {{ [propertyName: string]: string }} [tags] The tags that will be
     * assigned to the key vault.
     */
    tags?: {
        [propertyName: string]: string;
    };
    /**
     * @member {VaultProperties} properties Properties of the vault
     */
    properties: VaultProperties;
}
/**
 * @interface
 * An interface representing VaultPatchParameters.
 * Parameters for creating or updating a vault
 *
 * @extends BaseResource
 */
export interface VaultPatchParameters extends BaseResource {
    /**
     * @member {{ [propertyName: string]: string }} [tags] The tags that will be
     * assigned to the key vault.
     */
    tags?: {
        [propertyName: string]: string;
    };
    /**
     * @member {VaultPatchProperties} [properties] Properties of the vault
     */
    properties?: VaultPatchProperties;
}
/**
 * @interface
 * An interface representing VaultAccessPolicyParameters.
 * Parameters for updating the access policy in a vault
 *
 * @extends BaseResource
 */
export interface VaultAccessPolicyParameters extends BaseResource {
    /**
     * @member {string} [id] The resource id of the access policy.
     */
    readonly id?: string;
    /**
     * @member {string} [name] The resource name of the access policy.
     */
    readonly name?: string;
    /**
     * @member {string} [type] The resource name of the access policy.
     */
    readonly type?: string;
    /**
     * @member {string} [location] The resource type of the the access policy.
     */
    readonly location?: string;
    /**
     * @member {VaultAccessPolicyProperties} properties Properties of the access
     * policy
     */
    properties: VaultAccessPolicyProperties;
}
/**
 * @interface
 * An interface representing Resource.
 * Key Vault resource
 *
 * @extends BaseResource
 */
export interface Resource extends BaseResource {
    /**
     * @member {string} [id] The Azure Resource Manager resource ID for the key
     * vault.
     */
    readonly id?: string;
    /**
     * @member {string} [name] The name of the key vault.
     */
    readonly name?: string;
    /**
     * @member {string} [type] The resource type of the key vault.
     */
    readonly type?: string;
    /**
     * @member {string} location The supported Azure location where the key vault
     * should be created.
     */
    location: string;
    /**
     * @member {{ [propertyName: string]: string }} [tags] The tags that will be
     * assigned to the key vault.
     */
    tags?: {
        [propertyName: string]: string;
    };
}
/**
 * @interface
 * An interface representing Vault.
 * Resource information with extended details.
 *
 * @extends Resource
 */
export interface Vault extends Resource {
    /**
     * @member {VaultProperties} properties Properties of the vault
     */
    properties: VaultProperties;
}
/**
 * @interface
 * An interface representing DeletedVault.
 * Deleted vault information with extended details.
 *
 */
export interface DeletedVault {
    /**
     * @member {string} [id] The resource ID for the deleted key vault.
     */
    readonly id?: string;
    /**
     * @member {string} [name] The name of the key vault.
     */
    readonly name?: string;
    /**
     * @member {string} [type] The resource type of the key vault.
     */
    readonly type?: string;
    /**
     * @member {DeletedVaultProperties} [properties] Properties of the vault
     */
    properties?: DeletedVaultProperties;
}
/**
 * @interface
 * An interface representing VaultCheckNameAvailabilityParameters.
 * The parameters used to check the availabity of the vault name.
 *
 */
export interface VaultCheckNameAvailabilityParameters {
    /**
     * @member {string} name The vault name.
     */
    name: string;
}
/**
 * @interface
 * An interface representing CheckNameAvailabilityResult.
 * The CheckNameAvailability operation response.
 *
 */
export interface CheckNameAvailabilityResult {
    /**
     * @member {boolean} [nameAvailable] A boolean value that indicates whether
     * the name is available for you to use. If true, the name is available. If
     * false, the name has already been taken or is invalid and cannot be used.
     */
    readonly nameAvailable?: boolean;
    /**
     * @member {Reason} [reason] The reason that a vault name could not be used.
     * The Reason element is only returned if NameAvailable is false. Possible
     * values include: 'AccountNameInvalid', 'AlreadyExists'
     */
    readonly reason?: Reason;
    /**
     * @member {string} [message] An error message explaining the Reason value in
     * more detail.
     */
    readonly message?: string;
}
/**
 * @interface
 * An interface representing OperationDisplay.
 * Display metadata associated with the operation.
 *
 */
export interface OperationDisplay {
    /**
     * @member {string} [provider] Service provider: Microsoft Key Vault.
     */
    provider?: string;
    /**
     * @member {string} [resource] Resource on which the operation is performed
     * etc.
     */
    resource?: string;
    /**
     * @member {string} [operation] Type of operation: get, read, delete, etc.
     */
    operation?: string;
    /**
     * @member {string} [description] Decription of operation.
     */
    description?: string;
}
/**
 * @interface
 * An interface representing LogSpecification.
 * Log specification of operation.
 *
 */
export interface LogSpecification {
    /**
     * @member {string} [name] Name of log specification.
     */
    name?: string;
    /**
     * @member {string} [displayName] Display name of log specification.
     */
    displayName?: string;
    /**
     * @member {string} [blobDuration] Blob duration of specification.
     */
    blobDuration?: string;
}
/**
 * @interface
 * An interface representing ServiceSpecification.
 * One property of operation, include log specifications.
 *
 */
export interface ServiceSpecification {
    /**
     * @member {LogSpecification[]} [logSpecifications] Log specifications of
     * operation.
     */
    logSpecifications?: LogSpecification[];
}
/**
 * @interface
 * An interface representing Operation.
 * Key Vault REST API operation definition.
 *
 */
export interface Operation {
    /**
     * @member {string} [name] Operation name: {provider}/{resource}/{operation}
     */
    name?: string;
    /**
     * @member {OperationDisplay} [display] Display metadata associated with the
     * operation.
     */
    display?: OperationDisplay;
    /**
     * @member {string} [origin] The origin of operations.
     */
    origin?: string;
    /**
     * @member {ServiceSpecification} [serviceSpecification] One property of
     * operation, include metric specifications.
     */
    serviceSpecification?: ServiceSpecification;
}
/**
 * @interface
 * An interface representing VaultsListByResourceGroupOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface VaultsListByResourceGroupOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {number} [top] Maximum number of results to return.
     */
    top?: number;
}
/**
 * @interface
 * An interface representing VaultsListBySubscriptionOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface VaultsListBySubscriptionOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {number} [top] Maximum number of results to return.
     */
    top?: number;
}
/**
 * @interface
 * An interface representing VaultsListOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface VaultsListOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {number} [top] Maximum number of results to return.
     */
    top?: number;
}
/**
 * @interface
 * An interface representing the VaultListResult.
 * List of vaults
 *
 * @extends Array<Vault>
 */
export interface VaultListResult extends Array<Vault> {
    /**
     * @member {string} [nextLink] The URL to get the next set of vaults.
     */
    nextLink?: string;
}
/**
 * @interface
 * An interface representing the DeletedVaultListResult.
 * List of vaults
 *
 * @extends Array<DeletedVault>
 */
export interface DeletedVaultListResult extends Array<DeletedVault> {
    /**
     * @member {string} [nextLink] The URL to get the next set of deleted vaults.
     */
    nextLink?: string;
}
/**
 * @interface
 * An interface representing the ResourceListResult.
 * List of vault resources.
 *
 * @extends Array<Resource>
 */
export interface ResourceListResult extends Array<Resource> {
    /**
     * @member {string} [nextLink] The URL to get the next set of vault
     * resources.
     */
    nextLink?: string;
}
/**
 * @interface
 * An interface representing the OperationListResult.
 * Result of the request to list Storage operations. It contains a list of
 * operations and a URL link to get the next set of results.
 *
 * @extends Array<Operation>
 */
export interface OperationListResult extends Array<Operation> {
    /**
     * @member {string} [nextLink] The URL to get the next set of operations.
     */
    nextLink?: string;
}
/**
 * Defines values for SkuName.
 * Possible values include: 'standard', 'premium'
 * @readonly
 * @enum {string}
 */
export declare enum SkuName {
    Standard = "standard",
    Premium = "premium"
}
/**
 * Defines values for KeyPermissions.
 * Possible values include: 'encrypt', 'decrypt', 'wrapKey', 'unwrapKey',
 * 'sign', 'verify', 'get', 'list', 'create', 'update', 'import', 'delete',
 * 'backup', 'restore', 'recover', 'purge'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: KeyPermissions =
 * <KeyPermissions>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
export declare enum KeyPermissions {
    Encrypt = "encrypt",
    Decrypt = "decrypt",
    WrapKey = "wrapKey",
    UnwrapKey = "unwrapKey",
    Sign = "sign",
    Verify = "verify",
    Get = "get",
    List = "list",
    Create = "create",
    Update = "update",
    Import = "import",
    Delete = "delete",
    Backup = "backup",
    Restore = "restore",
    Recover = "recover",
    Purge = "purge"
}
/**
 * Defines values for SecretPermissions.
 * Possible values include: 'get', 'list', 'set', 'delete', 'backup',
 * 'restore', 'recover', 'purge'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: SecretPermissions =
 * <SecretPermissions>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
export declare enum SecretPermissions {
    Get = "get",
    List = "list",
    Set = "set",
    Delete = "delete",
    Backup = "backup",
    Restore = "restore",
    Recover = "recover",
    Purge = "purge"
}
/**
 * Defines values for CertificatePermissions.
 * Possible values include: 'get', 'list', 'delete', 'create', 'import',
 * 'update', 'managecontacts', 'getissuers', 'listissuers', 'setissuers',
 * 'deleteissuers', 'manageissuers', 'recover', 'purge'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: CertificatePermissions =
 * <CertificatePermissions>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
export declare enum CertificatePermissions {
    Get = "get",
    List = "list",
    Delete = "delete",
    Create = "create",
    Import = "import",
    Update = "update",
    Managecontacts = "managecontacts",
    Getissuers = "getissuers",
    Listissuers = "listissuers",
    Setissuers = "setissuers",
    Deleteissuers = "deleteissuers",
    Manageissuers = "manageissuers",
    Recover = "recover",
    Purge = "purge"
}
/**
 * Defines values for StoragePermissions.
 * Possible values include: 'get', 'list', 'delete', 'set', 'update',
 * 'regeneratekey', 'recover', 'purge', 'backup', 'restore', 'setsas',
 * 'listsas', 'getsas', 'deletesas'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: StoragePermissions =
 * <StoragePermissions>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
export declare enum StoragePermissions {
    Get = "get",
    List = "list",
    Delete = "delete",
    Set = "set",
    Update = "update",
    Regeneratekey = "regeneratekey",
    Recover = "recover",
    Purge = "purge",
    Backup = "backup",
    Restore = "restore",
    Setsas = "setsas",
    Listsas = "listsas",
    Getsas = "getsas",
    Deletesas = "deletesas"
}
/**
 * Defines values for CreateMode.
 * Possible values include: 'recover', 'default'
 * @readonly
 * @enum {string}
 */
export declare enum CreateMode {
    Recover = "recover",
    Default = "default"
}
/**
 * Defines values for Reason.
 * Possible values include: 'AccountNameInvalid', 'AlreadyExists'
 * @readonly
 * @enum {string}
 */
export declare enum Reason {
    AccountNameInvalid = "AccountNameInvalid",
    AlreadyExists = "AlreadyExists"
}
/**
 * Defines values for AccessPolicyUpdateKind.
 * Possible values include: 'add', 'replace', 'remove'
 * @readonly
 * @enum {string}
 */
export declare enum AccessPolicyUpdateKind {
    Add = "add",
    Replace = "replace",
    Remove = "remove"
}
