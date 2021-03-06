import { BaseResource, CloudError } from "ms-rest-azure-js";
import * as msRest from "ms-rest-js";
export { BaseResource, CloudError };
/**
 * @interface
 * An interface representing ARecord.
 * An A record.
 *
 */
export interface ARecord {
    /**
     * @member {string} [ipv4Address] The IPv4 address of this A record.
     */
    ipv4Address?: string;
}
/**
 * @interface
 * An interface representing AaaaRecord.
 * An AAAA record.
 *
 */
export interface AaaaRecord {
    /**
     * @member {string} [ipv6Address] The IPv6 address of this AAAA record.
     */
    ipv6Address?: string;
}
/**
 * @interface
 * An interface representing MxRecord.
 * An MX record.
 *
 */
export interface MxRecord {
    /**
     * @member {number} [preference] The preference value for this MX record.
     */
    preference?: number;
    /**
     * @member {string} [exchange] The domain name of the mail host for this MX
     * record.
     */
    exchange?: string;
}
/**
 * @interface
 * An interface representing NsRecord.
 * An NS record.
 *
 */
export interface NsRecord {
    /**
     * @member {string} [nsdname] The name server name for this NS record.
     */
    nsdname?: string;
}
/**
 * @interface
 * An interface representing PtrRecord.
 * A PTR record.
 *
 */
export interface PtrRecord {
    /**
     * @member {string} [ptrdname] The PTR target domain name for this PTR
     * record.
     */
    ptrdname?: string;
}
/**
 * @interface
 * An interface representing SrvRecord.
 * An SRV record.
 *
 */
export interface SrvRecord {
    /**
     * @member {number} [priority] The priority value for this SRV record.
     */
    priority?: number;
    /**
     * @member {number} [weight] The weight value for this SRV record.
     */
    weight?: number;
    /**
     * @member {number} [port] The port value for this SRV record.
     */
    port?: number;
    /**
     * @member {string} [target] The target domain name for this SRV record.
     */
    target?: string;
}
/**
 * @interface
 * An interface representing TxtRecord.
 * A TXT record.
 *
 */
export interface TxtRecord {
    /**
     * @member {string[]} [value] The text value of this TXT record.
     */
    value?: string[];
}
/**
 * @interface
 * An interface representing CnameRecord.
 * A CNAME record.
 *
 */
export interface CnameRecord {
    /**
     * @member {string} [cname] The canonical name for this CNAME record.
     */
    cname?: string;
}
/**
 * @interface
 * An interface representing SoaRecord.
 * An SOA record.
 *
 */
export interface SoaRecord {
    /**
     * @member {string} [host] The domain name of the authoritative name server
     * for this SOA record.
     */
    host?: string;
    /**
     * @member {string} [email] The email contact for this SOA record.
     */
    email?: string;
    /**
     * @member {number} [serialNumber] The serial number for this SOA record.
     */
    serialNumber?: number;
    /**
     * @member {number} [refreshTime] The refresh value for this SOA record.
     */
    refreshTime?: number;
    /**
     * @member {number} [retryTime] The retry time for this SOA record.
     */
    retryTime?: number;
    /**
     * @member {number} [expireTime] The expire time for this SOA record.
     */
    expireTime?: number;
    /**
     * @member {number} [minimumTtl] The minimum value for this SOA record. By
     * convention this is used to determine the negative caching duration.
     */
    minimumTtl?: number;
}
/**
 * @interface
 * An interface representing RecordSet.
 * Describes a DNS record set (a collection of DNS records with the same name
 * and type).
 *
 */
export interface RecordSet {
    /**
     * @member {string} [id] The ID of the record set.
     */
    id?: string;
    /**
     * @member {string} [name] The name of the record set.
     */
    name?: string;
    /**
     * @member {string} [type] The type of the record set.
     */
    type?: string;
    /**
     * @member {string} [etag] The etag of the record set.
     */
    etag?: string;
    /**
     * @member {{ [propertyName: string]: string }} [metadata] The metadata
     * attached to the record set.
     */
    metadata?: {
        [propertyName: string]: string;
    };
    /**
     * @member {number} [tTL] The TTL (time-to-live) of the records in the record
     * set.
     */
    tTL?: number;
    /**
     * @member {ARecord[]} [aRecords] The list of A records in the record set.
     */
    aRecords?: ARecord[];
    /**
     * @member {AaaaRecord[]} [aaaaRecords] The list of AAAA records in the
     * record set.
     */
    aaaaRecords?: AaaaRecord[];
    /**
     * @member {MxRecord[]} [mxRecords] The list of MX records in the record set.
     */
    mxRecords?: MxRecord[];
    /**
     * @member {NsRecord[]} [nsRecords] The list of NS records in the record set.
     */
    nsRecords?: NsRecord[];
    /**
     * @member {PtrRecord[]} [ptrRecords] The list of PTR records in the record
     * set.
     */
    ptrRecords?: PtrRecord[];
    /**
     * @member {SrvRecord[]} [srvRecords] The list of SRV records in the record
     * set.
     */
    srvRecords?: SrvRecord[];
    /**
     * @member {TxtRecord[]} [txtRecords] The list of TXT records in the record
     * set.
     */
    txtRecords?: TxtRecord[];
    /**
     * @member {CnameRecord} [cnameRecord] The CNAME record in the  record set.
     */
    cnameRecord?: CnameRecord;
    /**
     * @member {SoaRecord} [soaRecord] The SOA record in the record set.
     */
    soaRecord?: SoaRecord;
}
/**
 * @interface
 * An interface representing RecordSetUpdateParameters.
 * Parameters supplied to update a record set.
 *
 */
export interface RecordSetUpdateParameters {
    /**
     * @member {RecordSet} [recordSet] Specifies information about the record set
     * being updated.
     */
    recordSet?: RecordSet;
}
/**
 * @interface
 * An interface representing Resource.
 * @extends BaseResource
 */
export interface Resource extends BaseResource {
    /**
     * @member {string} [id] Resource ID.
     */
    readonly id?: string;
    /**
     * @member {string} [name] Resource name.
     */
    readonly name?: string;
    /**
     * @member {string} [type] Resource type.
     */
    readonly type?: string;
    /**
     * @member {string} location Resource location.
     */
    location: string;
    /**
     * @member {{ [propertyName: string]: string }} [tags] Resource tags.
     */
    tags?: {
        [propertyName: string]: string;
    };
}
/**
 * @interface
 * An interface representing Zone.
 * Describes a DNS zone.
 *
 * @extends Resource
 */
export interface Zone extends Resource {
    /**
     * @member {string} [etag] The etag of the zone.
     */
    etag?: string;
    /**
     * @member {number} [maxNumberOfRecordSets] The maximum number of record sets
     * that can be created in this DNS zone.  This is a read-only property and
     * any attempt to set this value will be ignored.
     */
    maxNumberOfRecordSets?: number;
    /**
     * @member {number} [numberOfRecordSets] The current number of record sets in
     * this DNS zone.  This is a read-only property and any attempt to set this
     * value will be ignored.
     */
    numberOfRecordSets?: number;
    /**
     * @member {string[]} [nameServers] The name servers for this DNS zone. This
     * is a read-only property and any attempt to set this value will be ignored.
     */
    readonly nameServers?: string[];
}
/**
 * @interface
 * An interface representing ZoneDeleteResult.
 * The response to a Zone Delete operation.
 *
 */
export interface ZoneDeleteResult {
    /**
     * @member {string} [azureAsyncOperation] Users can perform a Get on
     * Azure-AsyncOperation to get the status of their delete Zone operations.
     */
    azureAsyncOperation?: string;
    /**
     * @member {OperationStatus} [status] Possible values include: 'InProgress',
     * 'Succeeded', 'Failed'
     */
    status?: OperationStatus;
    /**
     * @member {HttpStatusCode} [statusCode] Possible values include: 'Continue',
     * 'SwitchingProtocols', 'OK', 'Created', 'Accepted',
     * 'NonAuthoritativeInformation', 'NoContent', 'ResetContent',
     * 'PartialContent', 'MultipleChoices', 'Ambiguous', 'MovedPermanently',
     * 'Moved', 'Found', 'Redirect', 'SeeOther', 'RedirectMethod', 'NotModified',
     * 'UseProxy', 'Unused', 'TemporaryRedirect', 'RedirectKeepVerb',
     * 'BadRequest', 'Unauthorized', 'PaymentRequired', 'Forbidden', 'NotFound',
     * 'MethodNotAllowed', 'NotAcceptable', 'ProxyAuthenticationRequired',
     * 'RequestTimeout', 'Conflict', 'Gone', 'LengthRequired',
     * 'PreconditionFailed', 'RequestEntityTooLarge', 'RequestUriTooLong',
     * 'UnsupportedMediaType', 'RequestedRangeNotSatisfiable',
     * 'ExpectationFailed', 'UpgradeRequired', 'InternalServerError',
     * 'NotImplemented', 'BadGateway', 'ServiceUnavailable', 'GatewayTimeout',
     * 'HttpVersionNotSupported'
     */
    statusCode?: HttpStatusCode;
    /**
     * @member {string} [requestId]
     */
    requestId?: string;
}
/**
 * @interface
 * An interface representing RecordSetsUpdateOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface RecordSetsUpdateOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {string} [ifMatch] The etag of the record set. Omit this value to
     * always overwrite the current record set. Specify the last-seen etag value
     * to prevent accidentally overwritting concurrent changes.
     */
    ifMatch?: string;
}
/**
 * @interface
 * An interface representing RecordSetsCreateOrUpdateOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface RecordSetsCreateOrUpdateOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {string} [ifMatch] The etag of the record set. Omit this value to
     * always overwrite the current record set. Specify the last-seen etag value
     * to prevent accidentally overwritting any concurrent changes.
     */
    ifMatch?: string;
    /**
     * @member {string} [ifNoneMatch] Set to '*' to allow a new record set to be
     * created, but to prevent updating an existing record set. Other values will
     * be ignored.
     */
    ifNoneMatch?: string;
}
/**
 * @interface
 * An interface representing RecordSetsDeleteMethodOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface RecordSetsDeleteMethodOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {string} [ifMatch] The etag of the record set. Omit this value to
     * always delete the current record set. Specify the last-seen etag value to
     * prevent accidentally deleting any concurrent changes.
     */
    ifMatch?: string;
}
/**
 * @interface
 * An interface representing RecordSetsListByTypeOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface RecordSetsListByTypeOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {number} [top] The maximum number of record sets to return. If not
     * specified, returns up to 100 record sets.
     */
    top?: number;
    /**
     * @member {string} [recordsetnamesuffix] The suffix label of the record set
     * name that has to be used to filter the record set enumerations. If this
     * parameter is specified, Enumeration will return only records that end with
     * .<recordSetNameSuffix>
     */
    recordsetnamesuffix?: string;
}
/**
 * @interface
 * An interface representing RecordSetsListByDnsZoneOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface RecordSetsListByDnsZoneOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {number} [top] The maximum number of record sets to return. If not
     * specified, returns up to 100 record sets.
     */
    top?: number;
    /**
     * @member {string} [recordsetnamesuffix] The suffix label of the record set
     * name that has to be used to filter the record set enumerations. If this
     * parameter is specified, Enumeration will return only records that end with
     * .<recordSetNameSuffix>
     */
    recordsetnamesuffix?: string;
}
/**
 * @interface
 * An interface representing ZonesCreateOrUpdateOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface ZonesCreateOrUpdateOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {string} [ifMatch] The etag of the DNS zone. Omit this value to
     * always overwrite the current zone. Specify the last-seen etag value to
     * prevent accidentally overwritting any concurrent changes.
     */
    ifMatch?: string;
    /**
     * @member {string} [ifNoneMatch] Set to '*' to allow a new DNS zone to be
     * created, but to prevent updating an existing zone. Other values will be
     * ignored.
     */
    ifNoneMatch?: string;
}
/**
 * @interface
 * An interface representing ZonesDeleteMethodOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface ZonesDeleteMethodOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {string} [ifMatch] The etag of the DNS zone. Omit this value to
     * always delete the current zone. Specify the last-seen etag value to
     * prevent accidentally deleting any concurrent changes.
     */
    ifMatch?: string;
}
/**
 * @interface
 * An interface representing ZonesListByResourceGroupOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface ZonesListByResourceGroupOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {number} [top] The maximum number of record sets to return. If not
     * specified, returns up to 100 record sets.
     */
    top?: number;
}
/**
 * @interface
 * An interface representing ZonesListOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface ZonesListOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {number} [top] The maximum number of DNS zones to return. If not
     * specified, returns up to 100 zones.
     */
    top?: number;
}
/**
 * @interface
 * An interface representing ZonesBeginDeleteMethodOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface ZonesBeginDeleteMethodOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {string} [ifMatch] The etag of the DNS zone. Omit this value to
     * always delete the current zone. Specify the last-seen etag value to
     * prevent accidentally deleting any concurrent changes.
     */
    ifMatch?: string;
}
/**
 * @interface
 * An interface representing the RecordSetListResult.
 * The response to a record set List operation.
 *
 * @extends Array<RecordSet>
 */
export interface RecordSetListResult extends Array<RecordSet> {
    /**
     * @member {string} [nextLink] The continuation token for the next page of
     * results.
     */
    nextLink?: string;
}
/**
 * @interface
 * An interface representing the ZoneListResult.
 * The response to a Zone List or ListAll operation.
 *
 * @extends Array<Zone>
 */
export interface ZoneListResult extends Array<Zone> {
    /**
     * @member {string} [nextLink] The continuation token for the next page of
     * results.
     */
    nextLink?: string;
}
/**
 * Defines values for OperationStatus.
 * Possible values include: 'InProgress', 'Succeeded', 'Failed'
 * @readonly
 * @enum {string}
 */
export declare enum OperationStatus {
    InProgress = "InProgress",
    Succeeded = "Succeeded",
    Failed = "Failed"
}
/**
 * Defines values for HttpStatusCode.
 * Possible values include: 'Continue', 'SwitchingProtocols', 'OK', 'Created',
 * 'Accepted', 'NonAuthoritativeInformation', 'NoContent', 'ResetContent',
 * 'PartialContent', 'MultipleChoices', 'Ambiguous', 'MovedPermanently',
 * 'Moved', 'Found', 'Redirect', 'SeeOther', 'RedirectMethod', 'NotModified',
 * 'UseProxy', 'Unused', 'TemporaryRedirect', 'RedirectKeepVerb', 'BadRequest',
 * 'Unauthorized', 'PaymentRequired', 'Forbidden', 'NotFound',
 * 'MethodNotAllowed', 'NotAcceptable', 'ProxyAuthenticationRequired',
 * 'RequestTimeout', 'Conflict', 'Gone', 'LengthRequired',
 * 'PreconditionFailed', 'RequestEntityTooLarge', 'RequestUriTooLong',
 * 'UnsupportedMediaType', 'RequestedRangeNotSatisfiable', 'ExpectationFailed',
 * 'UpgradeRequired', 'InternalServerError', 'NotImplemented', 'BadGateway',
 * 'ServiceUnavailable', 'GatewayTimeout', 'HttpVersionNotSupported'
 * @readonly
 * @enum {string}
 */
export declare enum HttpStatusCode {
    Continue = "Continue",
    SwitchingProtocols = "SwitchingProtocols",
    OK = "OK",
    Created = "Created",
    Accepted = "Accepted",
    NonAuthoritativeInformation = "NonAuthoritativeInformation",
    NoContent = "NoContent",
    ResetContent = "ResetContent",
    PartialContent = "PartialContent",
    MultipleChoices = "MultipleChoices",
    Ambiguous = "Ambiguous",
    MovedPermanently = "MovedPermanently",
    Moved = "Moved",
    Found = "Found",
    Redirect = "Redirect",
    SeeOther = "SeeOther",
    RedirectMethod = "RedirectMethod",
    NotModified = "NotModified",
    UseProxy = "UseProxy",
    Unused = "Unused",
    TemporaryRedirect = "TemporaryRedirect",
    RedirectKeepVerb = "RedirectKeepVerb",
    BadRequest = "BadRequest",
    Unauthorized = "Unauthorized",
    PaymentRequired = "PaymentRequired",
    Forbidden = "Forbidden",
    NotFound = "NotFound",
    MethodNotAllowed = "MethodNotAllowed",
    NotAcceptable = "NotAcceptable",
    ProxyAuthenticationRequired = "ProxyAuthenticationRequired",
    RequestTimeout = "RequestTimeout",
    Conflict = "Conflict",
    Gone = "Gone",
    LengthRequired = "LengthRequired",
    PreconditionFailed = "PreconditionFailed",
    RequestEntityTooLarge = "RequestEntityTooLarge",
    RequestUriTooLong = "RequestUriTooLong",
    UnsupportedMediaType = "UnsupportedMediaType",
    RequestedRangeNotSatisfiable = "RequestedRangeNotSatisfiable",
    ExpectationFailed = "ExpectationFailed",
    UpgradeRequired = "UpgradeRequired",
    InternalServerError = "InternalServerError",
    NotImplemented = "NotImplemented",
    BadGateway = "BadGateway",
    ServiceUnavailable = "ServiceUnavailable",
    GatewayTimeout = "GatewayTimeout",
    HttpVersionNotSupported = "HttpVersionNotSupported"
}
/**
 * Defines values for RecordType.
 * Possible values include: 'A', 'AAAA', 'CNAME', 'MX', 'NS', 'PTR', 'SOA',
 * 'SRV', 'TXT'
 * @readonly
 * @enum {string}
 */
export declare enum RecordType {
    A = "A",
    AAAA = "AAAA",
    CNAME = "CNAME",
    MX = "MX",
    NS = "NS",
    PTR = "PTR",
    SOA = "SOA",
    SRV = "SRV",
    TXT = "TXT"
}
