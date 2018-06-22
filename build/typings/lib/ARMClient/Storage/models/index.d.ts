import { BaseResource, CloudError } from "ms-rest-azure-js";
export { BaseResource, CloudError };
/**
 * @interface
 * An interface representing StorageAccountCheckNameAvailabilityParameters.
 */
export interface StorageAccountCheckNameAvailabilityParameters {
    /**
     * @member {string} name
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
     * @member {boolean} [nameAvailable] Gets a boolean value that indicates
     * whether the name is available for you to use. If true, the name is
     * available. If false, the name has already been taken or is invalid and
     * cannot be used.
     */
    readonly nameAvailable?: boolean;
    /**
     * @member {Reason} [reason] Gets the reason that a storage account name
     * could not be used. The Reason element is only returned if NameAvailable is
     * false. Possible values include: 'AccountNameInvalid', 'AlreadyExists'
     */
    readonly reason?: Reason;
    /**
     * @member {string} [message] Gets an error message explaining the Reason
     * value in more detail.
     */
    readonly message?: string;
}
/**
 * @interface
 * An interface representing Sku.
 * The SKU of the storage account.
 *
 */
export interface Sku {
    /**
     * @member {SkuName} name Gets or sets the sku name. Required for account
     * creation; optional for update. Note that in older versions, sku name was
     * called accountType. Possible values include: 'Standard_LRS',
     * 'Standard_GRS', 'Standard_RAGRS', 'Standard_ZRS', 'Premium_LRS'
     */
    name: SkuName;
    /**
     * @member {SkuTier} [tier] Gets the sku tier. This is based on the SKU name.
     * Possible values include: 'Standard', 'Premium'
     */
    readonly tier?: SkuTier;
}
/**
 * @interface
 * An interface representing CustomDomain.
 * The custom domain assigned to this storage account. This can be set via
 * Update.
 *
 */
export interface CustomDomain {
    /**
     * @member {string} name Gets or sets the custom domain name assigned to the
     * storage account. Name is the CNAME source.
     */
    name: string;
    /**
     * @member {boolean} [useSubDomain] Indicates whether indirect CName
     * validation is enabled. Default value is false. This should only be set on
     * updates.
     */
    useSubDomain?: boolean;
}
/**
 * @interface
 * An interface representing EncryptionService.
 * A service that allows server-side encryption to be used.
 *
 */
export interface EncryptionService {
    /**
     * @member {boolean} [enabled] A boolean indicating whether or not the
     * service encrypts the data as it is stored.
     */
    enabled?: boolean;
    /**
     * @member {Date} [lastEnabledTime] Gets a rough estimate of the date/time
     * when the encryption was last enabled by the user. Only returned when
     * encryption is enabled. There might be some unencrypted blobs which were
     * written after this time, as it is just a rough estimate.
     */
    readonly lastEnabledTime?: Date;
}
/**
 * @interface
 * An interface representing EncryptionServices.
 * A list of services that support encryption.
 *
 */
export interface EncryptionServices {
    /**
     * @member {EncryptionService} [blob] The encryption function of the blob
     * storage service.
     */
    blob?: EncryptionService;
}
/**
 * @interface
 * An interface representing Encryption.
 * The encryption settings on the storage account.
 *
 */
export interface Encryption {
    /**
     * @member {EncryptionServices} [services] List of services which support
     * encryption.
     */
    services?: EncryptionServices;
}
/**
 * @interface
 * An interface representing StorageAccountCreateParameters.
 * The parameters used when creating a storage account.
 *
 */
export interface StorageAccountCreateParameters {
    /**
     * @member {Sku} sku Required. Gets or sets the sku name.
     */
    sku: Sku;
    /**
     * @member {Kind} kind Required. Indicates the type of storage account.
     * Possible values include: 'Storage', 'BlobStorage'
     */
    kind: Kind;
    /**
     * @member {string} location Required. Gets or sets the location of the
     * resource. This will be one of the supported and registered Azure Geo
     * Regions (e.g. West US, East US, Southeast Asia, etc.). The geo region of a
     * resource cannot be changed once it is created, but if an identical geo
     * region is specified on update, the request will succeed.
     */
    location: string;
    /**
     * @member {{ [propertyName: string]: string }} [tags] Gets or sets a list of
     * key value pairs that describe the resource. These tags can be used for
     * viewing and grouping this resource (across resource groups). A maximum of
     * 15 tags can be provided for a resource. Each tag must have a key with a
     * length no greater than 128 characters and a value with a length no greater
     * than 256 characters.
     */
    tags?: {
        [propertyName: string]: string;
    };
    /**
     * @member {CustomDomain} [customDomain] User domain assigned to the storage
     * account. Name is the CNAME source. Only one custom domain is supported per
     * storage account at this time. To clear the existing custom domain, use an
     * empty string for the custom domain name property.
     */
    customDomain?: CustomDomain;
    /**
     * @member {Encryption} [encryption] Provides the encryption settings on the
     * account. If left unspecified the account encryption settings will remain
     * the same. The default setting is unencrypted.
     */
    encryption?: Encryption;
    /**
     * @member {AccessTier} [accessTier] Required for storage accounts where kind
     * = BlobStorage. The access tier used for billing. Possible values include:
     * 'Hot', 'Cool'
     */
    accessTier?: AccessTier;
}
/**
 * @interface
 * An interface representing Endpoints.
 * The URIs that are used to perform a retrieval of a public blob, queue, or
 * table object.
 *
 */
export interface Endpoints {
    /**
     * @member {string} [blob] Gets the blob endpoint.
     */
    readonly blob?: string;
    /**
     * @member {string} [queue] Gets the queue endpoint.
     */
    readonly queue?: string;
    /**
     * @member {string} [table] Gets the table endpoint.
     */
    readonly table?: string;
    /**
     * @member {string} [file] Gets the file endpoint.
     */
    readonly file?: string;
}
/**
 * @interface
 * An interface representing Resource.
 * @extends BaseResource
 */
export interface Resource extends BaseResource {
    /**
     * @member {string} [id] Resource Id
     */
    readonly id?: string;
    /**
     * @member {string} [name] Resource name
     */
    readonly name?: string;
    /**
     * @member {string} [type] Resource type
     */
    readonly type?: string;
    /**
     * @member {string} [location] Resource location
     */
    location?: string;
    /**
     * @member {{ [propertyName: string]: string }} [tags] Tags assigned to a
     * resource; can be used for viewing and grouping a resource (across resource
     * groups).
     */
    tags?: {
        [propertyName: string]: string;
    };
}
/**
 * @interface
 * An interface representing StorageAccount.
 * The storage account.
 *
 * @extends Resource
 */
export interface StorageAccount extends Resource {
    /**
     * @member {Sku} [sku] Gets the SKU.
     */
    readonly sku?: Sku;
    /**
     * @member {Kind} [kind] Gets the Kind. Possible values include: 'Storage',
     * 'BlobStorage'
     */
    readonly kind?: Kind;
    /**
     * @member {ProvisioningState} [provisioningState] Gets the status of the
     * storage account at the time the operation was called. Possible values
     * include: 'Creating', 'ResolvingDNS', 'Succeeded'
     */
    readonly provisioningState?: ProvisioningState;
    /**
     * @member {Endpoints} [primaryEndpoints] Gets the URLs that are used to
     * perform a retrieval of a public blob, queue, or table object. Note that
     * Standard_ZRS and Premium_LRS accounts only return the blob endpoint.
     */
    readonly primaryEndpoints?: Endpoints;
    /**
     * @member {string} [primaryLocation] Gets the location of the primary data
     * center for the storage account.
     */
    readonly primaryLocation?: string;
    /**
     * @member {AccountStatus} [statusOfPrimary] Gets the status indicating
     * whether the primary location of the storage account is available or
     * unavailable. Possible values include: 'Available', 'Unavailable'
     */
    readonly statusOfPrimary?: AccountStatus;
    /**
     * @member {Date} [lastGeoFailoverTime] Gets the timestamp of the most recent
     * instance of a failover to the secondary location. Only the most recent
     * timestamp is retained. This element is not returned if there has never
     * been a failover instance. Only available if the accountType is
     * Standard_GRS or Standard_RAGRS.
     */
    readonly lastGeoFailoverTime?: Date;
    /**
     * @member {string} [secondaryLocation] Gets the location of the
     * geo-replicated secondary for the storage account. Only available if the
     * accountType is Standard_GRS or Standard_RAGRS.
     */
    readonly secondaryLocation?: string;
    /**
     * @member {AccountStatus} [statusOfSecondary] Gets the status indicating
     * whether the secondary location of the storage account is available or
     * unavailable. Only available if the SKU name is Standard_GRS or
     * Standard_RAGRS. Possible values include: 'Available', 'Unavailable'
     */
    readonly statusOfSecondary?: AccountStatus;
    /**
     * @member {Date} [creationTime] Gets the creation date and time of the
     * storage account in UTC.
     */
    readonly creationTime?: Date;
    /**
     * @member {CustomDomain} [customDomain] Gets the custom domain the user
     * assigned to this storage account.
     */
    readonly customDomain?: CustomDomain;
    /**
     * @member {Endpoints} [secondaryEndpoints] Gets the URLs that are used to
     * perform a retrieval of a public blob, queue, or table object from the
     * secondary location of the storage account. Only available if the SKU name
     * is Standard_RAGRS.
     */
    readonly secondaryEndpoints?: Endpoints;
    /**
     * @member {Encryption} [encryption] Gets the encryption settings on the
     * account. If unspecified, the account is unencrypted.
     */
    readonly encryption?: Encryption;
    /**
     * @member {AccessTier} [accessTier] Required for storage accounts where kind
     * = BlobStorage. The access tier used for billing. Possible values include:
     * 'Hot', 'Cool'
     */
    readonly accessTier?: AccessTier;
}
/**
 * @interface
 * An interface representing StorageAccountKey.
 * An access key for the storage account.
 *
 */
export interface StorageAccountKey {
    /**
     * @member {string} [keyName] Name of the key.
     */
    readonly keyName?: string;
    /**
     * @member {string} [value] Base 64-encoded value of the key.
     */
    readonly value?: string;
    /**
     * @member {KeyPermission} [permissions] Permissions for the key -- read-only
     * or full permissions. Possible values include: 'READ', 'FULL'
     */
    readonly permissions?: KeyPermission;
}
/**
 * @interface
 * An interface representing StorageAccountListKeysResult.
 * The response from the ListKeys operation.
 *
 */
export interface StorageAccountListKeysResult {
    /**
     * @member {StorageAccountKey[]} [keys] Gets the list of storage account keys
     * and their properties for the specified storage account.
     */
    readonly keys?: StorageAccountKey[];
}
/**
 * @interface
 * An interface representing StorageAccountRegenerateKeyParameters.
 */
export interface StorageAccountRegenerateKeyParameters {
    /**
     * @member {string} keyName
     */
    keyName: string;
}
/**
 * @interface
 * An interface representing StorageAccountUpdateParameters.
 * The parameters that can be provided when updating the storage account
 * properties.
 *
 */
export interface StorageAccountUpdateParameters {
    /**
     * @member {Sku} [sku] Gets or sets the SKU name. Note that the SKU name
     * cannot be updated to Standard_ZRS or Premium_LRS, nor can accounts of
     * those sku names be updated to any other value.
     */
    sku?: Sku;
    /**
     * @member {{ [propertyName: string]: string }} [tags] Gets or sets a list of
     * key value pairs that describe the resource. These tags can be used in
     * viewing and grouping this resource (across resource groups). A maximum of
     * 15 tags can be provided for a resource. Each tag must have a key no
     * greater in length than 128 characters and a value no greater in length
     * than 256 characters.
     */
    tags?: {
        [propertyName: string]: string;
    };
    /**
     * @member {CustomDomain} [customDomain] Custom domain assigned to the
     * storage account by the user. Name is the CNAME source. Only one custom
     * domain is supported per storage account at this time. To clear the
     * existing custom domain, use an empty string for the custom domain name
     * property.
     */
    customDomain?: CustomDomain;
    /**
     * @member {Encryption} [encryption] Provides the encryption settings on the
     * account. The default setting is unencrypted.
     */
    encryption?: Encryption;
    /**
     * @member {AccessTier} [accessTier] Required for storage accounts where kind
     * = BlobStorage. The access tier used for billing. Possible values include:
     * 'Hot', 'Cool'
     */
    accessTier?: AccessTier;
}
/**
 * @interface
 * An interface representing UsageName.
 * The usage names that can be used; currently limited to StorageAccount.
 *
 */
export interface UsageName {
    /**
     * @member {string} [value] Gets a string describing the resource name.
     */
    readonly value?: string;
    /**
     * @member {string} [localizedValue] Gets a localized string describing the
     * resource name.
     */
    readonly localizedValue?: string;
}
/**
 * @interface
 * An interface representing Usage.
 * Describes Storage Resource Usage.
 *
 */
export interface Usage {
    /**
     * @member {UsageUnit} [unit] Gets the unit of measurement. Possible values
     * include: 'Count', 'Bytes', 'Seconds', 'Percent', 'CountsPerSecond',
     * 'BytesPerSecond'
     */
    readonly unit?: UsageUnit;
    /**
     * @member {number} [currentValue] Gets the current count of the allocated
     * resources in the subscription.
     */
    readonly currentValue?: number;
    /**
     * @member {number} [limit] Gets the maximum count of the resources that can
     * be allocated in the subscription.
     */
    readonly limit?: number;
    /**
     * @member {UsageName} [name] Gets the name of the type of usage.
     */
    readonly name?: UsageName;
}
/**
 * @interface
 * An interface representing the StorageAccountListResult.
 * The response from the List Storage Accounts operation.
 *
 * @extends Array<StorageAccount>
 */
export interface StorageAccountListResult extends Array<StorageAccount> {
}
/**
 * @interface
 * An interface representing the UsageListResult.
 * The response from the List Usages operation.
 *
 * @extends Array<Usage>
 */
export interface UsageListResult extends Array<Usage> {
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
 * Defines values for SkuName.
 * Possible values include: 'Standard_LRS', 'Standard_GRS', 'Standard_RAGRS',
 * 'Standard_ZRS', 'Premium_LRS'
 * @readonly
 * @enum {string}
 */
export declare enum SkuName {
    StandardLRS = "Standard_LRS",
    StandardGRS = "Standard_GRS",
    StandardRAGRS = "Standard_RAGRS",
    StandardZRS = "Standard_ZRS",
    PremiumLRS = "Premium_LRS"
}
/**
 * Defines values for SkuTier.
 * Possible values include: 'Standard', 'Premium'
 * @readonly
 * @enum {string}
 */
export declare enum SkuTier {
    Standard = "Standard",
    Premium = "Premium"
}
/**
 * Defines values for AccessTier.
 * Possible values include: 'Hot', 'Cool'
 * @readonly
 * @enum {string}
 */
export declare enum AccessTier {
    Hot = "Hot",
    Cool = "Cool"
}
/**
 * Defines values for Kind.
 * Possible values include: 'Storage', 'BlobStorage'
 * @readonly
 * @enum {string}
 */
export declare enum Kind {
    Storage = "Storage",
    BlobStorage = "BlobStorage"
}
/**
 * Defines values for ProvisioningState.
 * Possible values include: 'Creating', 'ResolvingDNS', 'Succeeded'
 * @readonly
 * @enum {string}
 */
export declare enum ProvisioningState {
    Creating = "Creating",
    ResolvingDNS = "ResolvingDNS",
    Succeeded = "Succeeded"
}
/**
 * Defines values for AccountStatus.
 * Possible values include: 'Available', 'Unavailable'
 * @readonly
 * @enum {string}
 */
export declare enum AccountStatus {
    Available = "Available",
    Unavailable = "Unavailable"
}
/**
 * Defines values for KeyPermission.
 * Possible values include: 'READ', 'FULL'
 * @readonly
 * @enum {string}
 */
export declare enum KeyPermission {
    READ = "READ",
    FULL = "FULL"
}
/**
 * Defines values for UsageUnit.
 * Possible values include: 'Count', 'Bytes', 'Seconds', 'Percent',
 * 'CountsPerSecond', 'BytesPerSecond'
 * @readonly
 * @enum {string}
 */
export declare enum UsageUnit {
    Count = "Count",
    Bytes = "Bytes",
    Seconds = "Seconds",
    Percent = "Percent",
    CountsPerSecond = "CountsPerSecond",
    BytesPerSecond = "BytesPerSecond"
}
