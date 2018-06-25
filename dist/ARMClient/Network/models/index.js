"use strict";
/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Defines values for LoadBalancerSkuName.
 * Possible values include: 'Basic', 'Standard'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: LoadBalancerSkuName =
 * <LoadBalancerSkuName>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
var LoadBalancerSkuName;
(function (LoadBalancerSkuName) {
    LoadBalancerSkuName["Basic"] = "Basic";
    LoadBalancerSkuName["Standard"] = "Standard";
})(LoadBalancerSkuName = exports.LoadBalancerSkuName || (exports.LoadBalancerSkuName = {}));
/**
 * Defines values for IPAllocationMethod.
 * Possible values include: 'Static', 'Dynamic'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: IPAllocationMethod =
 * <IPAllocationMethod>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
var IPAllocationMethod;
(function (IPAllocationMethod) {
    IPAllocationMethod["Static"] = "Static";
    IPAllocationMethod["Dynamic"] = "Dynamic";
})(IPAllocationMethod = exports.IPAllocationMethod || (exports.IPAllocationMethod = {}));
/**
 * Defines values for SecurityRuleProtocol.
 * Possible values include: 'Tcp', 'Udp', '*'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: SecurityRuleProtocol =
 * <SecurityRuleProtocol>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
var SecurityRuleProtocol;
(function (SecurityRuleProtocol) {
    SecurityRuleProtocol["Tcp"] = "Tcp";
    SecurityRuleProtocol["Udp"] = "Udp";
    SecurityRuleProtocol["Asterisk"] = "*";
})(SecurityRuleProtocol = exports.SecurityRuleProtocol || (exports.SecurityRuleProtocol = {}));
/**
 * Defines values for SecurityRuleAccess.
 * Possible values include: 'Allow', 'Deny'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: SecurityRuleAccess =
 * <SecurityRuleAccess>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
var SecurityRuleAccess;
(function (SecurityRuleAccess) {
    SecurityRuleAccess["Allow"] = "Allow";
    SecurityRuleAccess["Deny"] = "Deny";
})(SecurityRuleAccess = exports.SecurityRuleAccess || (exports.SecurityRuleAccess = {}));
/**
 * Defines values for SecurityRuleDirection.
 * Possible values include: 'Inbound', 'Outbound'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: SecurityRuleDirection =
 * <SecurityRuleDirection>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
var SecurityRuleDirection;
(function (SecurityRuleDirection) {
    SecurityRuleDirection["Inbound"] = "Inbound";
    SecurityRuleDirection["Outbound"] = "Outbound";
})(SecurityRuleDirection = exports.SecurityRuleDirection || (exports.SecurityRuleDirection = {}));
/**
 * Defines values for TransportProtocol.
 * Possible values include: 'Udp', 'Tcp', 'All'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: TransportProtocol =
 * <TransportProtocol>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
var TransportProtocol;
(function (TransportProtocol) {
    TransportProtocol["Udp"] = "Udp";
    TransportProtocol["Tcp"] = "Tcp";
    TransportProtocol["All"] = "All";
})(TransportProtocol = exports.TransportProtocol || (exports.TransportProtocol = {}));
/**
 * Defines values for IPVersion.
 * Possible values include: 'IPv4', 'IPv6'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: IPVersion = <IPVersion>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
var IPVersion;
(function (IPVersion) {
    IPVersion["IPv4"] = "IPv4";
    IPVersion["IPv6"] = "IPv6";
})(IPVersion = exports.IPVersion || (exports.IPVersion = {}));
/**
 * Defines values for PublicIPAddressSkuName.
 * Possible values include: 'Basic', 'Standard'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: PublicIPAddressSkuName =
 * <PublicIPAddressSkuName>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
var PublicIPAddressSkuName;
(function (PublicIPAddressSkuName) {
    PublicIPAddressSkuName["Basic"] = "Basic";
    PublicIPAddressSkuName["Standard"] = "Standard";
})(PublicIPAddressSkuName = exports.PublicIPAddressSkuName || (exports.PublicIPAddressSkuName = {}));
/**
 * Defines values for RouteNextHopType.
 * Possible values include: 'VirtualNetworkGateway', 'VnetLocal', 'Internet',
 * 'VirtualAppliance', 'None'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: RouteNextHopType =
 * <RouteNextHopType>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
var RouteNextHopType;
(function (RouteNextHopType) {
    RouteNextHopType["VirtualNetworkGateway"] = "VirtualNetworkGateway";
    RouteNextHopType["VnetLocal"] = "VnetLocal";
    RouteNextHopType["Internet"] = "Internet";
    RouteNextHopType["VirtualAppliance"] = "VirtualAppliance";
    RouteNextHopType["None"] = "None";
})(RouteNextHopType = exports.RouteNextHopType || (exports.RouteNextHopType = {}));
/**
 * Defines values for LoadDistribution.
 * Possible values include: 'Default', 'SourceIP', 'SourceIPProtocol'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: LoadDistribution =
 * <LoadDistribution>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
var LoadDistribution;
(function (LoadDistribution) {
    LoadDistribution["Default"] = "Default";
    LoadDistribution["SourceIP"] = "SourceIP";
    LoadDistribution["SourceIPProtocol"] = "SourceIPProtocol";
})(LoadDistribution = exports.LoadDistribution || (exports.LoadDistribution = {}));
/**
 * Defines values for ProbeProtocol.
 * Possible values include: 'Http', 'Tcp'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: ProbeProtocol =
 * <ProbeProtocol>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
var ProbeProtocol;
(function (ProbeProtocol) {
    ProbeProtocol["Http"] = "Http";
    ProbeProtocol["Tcp"] = "Tcp";
})(ProbeProtocol = exports.ProbeProtocol || (exports.ProbeProtocol = {}));
/**
 * Defines values for NetworkOperationStatus.
 * Possible values include: 'InProgress', 'Succeeded', 'Failed'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: NetworkOperationStatus =
 * <NetworkOperationStatus>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
var NetworkOperationStatus;
(function (NetworkOperationStatus) {
    NetworkOperationStatus["InProgress"] = "InProgress";
    NetworkOperationStatus["Succeeded"] = "Succeeded";
    NetworkOperationStatus["Failed"] = "Failed";
})(NetworkOperationStatus = exports.NetworkOperationStatus || (exports.NetworkOperationStatus = {}));
/**
 * Defines values for EffectiveSecurityRuleProtocol.
 * Possible values include: 'Tcp', 'Udp', 'All'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: EffectiveSecurityRuleProtocol =
 * <EffectiveSecurityRuleProtocol>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
var EffectiveSecurityRuleProtocol;
(function (EffectiveSecurityRuleProtocol) {
    EffectiveSecurityRuleProtocol["Tcp"] = "Tcp";
    EffectiveSecurityRuleProtocol["Udp"] = "Udp";
    EffectiveSecurityRuleProtocol["All"] = "All";
})(EffectiveSecurityRuleProtocol = exports.EffectiveSecurityRuleProtocol || (exports.EffectiveSecurityRuleProtocol = {}));
/**
 * Defines values for EffectiveRouteSource.
 * Possible values include: 'Unknown', 'User', 'VirtualNetworkGateway',
 * 'Default'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: EffectiveRouteSource =
 * <EffectiveRouteSource>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
var EffectiveRouteSource;
(function (EffectiveRouteSource) {
    EffectiveRouteSource["Unknown"] = "Unknown";
    EffectiveRouteSource["User"] = "User";
    EffectiveRouteSource["VirtualNetworkGateway"] = "VirtualNetworkGateway";
    EffectiveRouteSource["Default"] = "Default";
})(EffectiveRouteSource = exports.EffectiveRouteSource || (exports.EffectiveRouteSource = {}));
/**
 * Defines values for EffectiveRouteState.
 * Possible values include: 'Active', 'Invalid'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: EffectiveRouteState =
 * <EffectiveRouteState>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
var EffectiveRouteState;
(function (EffectiveRouteState) {
    EffectiveRouteState["Active"] = "Active";
    EffectiveRouteState["Invalid"] = "Invalid";
})(EffectiveRouteState = exports.EffectiveRouteState || (exports.EffectiveRouteState = {}));
/**
 * Defines values for ProvisioningState.
 * Possible values include: 'Succeeded', 'Updating', 'Deleting', 'Failed'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: ProvisioningState =
 * <ProvisioningState>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
var ProvisioningState;
(function (ProvisioningState) {
    ProvisioningState["Succeeded"] = "Succeeded";
    ProvisioningState["Updating"] = "Updating";
    ProvisioningState["Deleting"] = "Deleting";
    ProvisioningState["Failed"] = "Failed";
})(ProvisioningState = exports.ProvisioningState || (exports.ProvisioningState = {}));
/**
 * Defines values for AssociationType.
 * Possible values include: 'Associated', 'Contains'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: AssociationType =
 * <AssociationType>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
var AssociationType;
(function (AssociationType) {
    AssociationType["Associated"] = "Associated";
    AssociationType["Contains"] = "Contains";
})(AssociationType = exports.AssociationType || (exports.AssociationType = {}));
/**
 * Defines values for Direction.
 * Possible values include: 'Inbound', 'Outbound'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: Direction = <Direction>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
var Direction;
(function (Direction) {
    Direction["Inbound"] = "Inbound";
    Direction["Outbound"] = "Outbound";
})(Direction = exports.Direction || (exports.Direction = {}));
/**
 * Defines values for Protocol.
 * Possible values include: 'TCP', 'UDP'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: Protocol = <Protocol>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
var Protocol;
(function (Protocol) {
    Protocol["TCP"] = "TCP";
    Protocol["UDP"] = "UDP";
})(Protocol = exports.Protocol || (exports.Protocol = {}));
/**
 * Defines values for Access.
 * Possible values include: 'Allow', 'Deny'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: Access = <Access>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
var Access;
(function (Access) {
    Access["Allow"] = "Allow";
    Access["Deny"] = "Deny";
})(Access = exports.Access || (exports.Access = {}));
/**
 * Defines values for NextHopType.
 * Possible values include: 'Internet', 'VirtualAppliance',
 * 'VirtualNetworkGateway', 'VnetLocal', 'HyperNetGateway', 'None'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: NextHopType =
 * <NextHopType>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
var NextHopType;
(function (NextHopType) {
    NextHopType["Internet"] = "Internet";
    NextHopType["VirtualAppliance"] = "VirtualAppliance";
    NextHopType["VirtualNetworkGateway"] = "VirtualNetworkGateway";
    NextHopType["VnetLocal"] = "VnetLocal";
    NextHopType["HyperNetGateway"] = "HyperNetGateway";
    NextHopType["None"] = "None";
})(NextHopType = exports.NextHopType || (exports.NextHopType = {}));
/**
 * Defines values for PcProtocol.
 * Possible values include: 'TCP', 'UDP', 'Any'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: PcProtocol = <PcProtocol>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
var PcProtocol;
(function (PcProtocol) {
    PcProtocol["TCP"] = "TCP";
    PcProtocol["UDP"] = "UDP";
    PcProtocol["Any"] = "Any";
})(PcProtocol = exports.PcProtocol || (exports.PcProtocol = {}));
/**
 * Defines values for PcStatus.
 * Possible values include: 'NotStarted', 'Running', 'Stopped', 'Error',
 * 'Unknown'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: PcStatus = <PcStatus>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
var PcStatus;
(function (PcStatus) {
    PcStatus["NotStarted"] = "NotStarted";
    PcStatus["Running"] = "Running";
    PcStatus["Stopped"] = "Stopped";
    PcStatus["Error"] = "Error";
    PcStatus["Unknown"] = "Unknown";
})(PcStatus = exports.PcStatus || (exports.PcStatus = {}));
/**
 * Defines values for PcError.
 * Possible values include: 'InternalError', 'AgentStopped', 'CaptureFailed',
 * 'LocalFileFailed', 'StorageFailed'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: PcError = <PcError>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
var PcError;
(function (PcError) {
    PcError["InternalError"] = "InternalError";
    PcError["AgentStopped"] = "AgentStopped";
    PcError["CaptureFailed"] = "CaptureFailed";
    PcError["LocalFileFailed"] = "LocalFileFailed";
    PcError["StorageFailed"] = "StorageFailed";
})(PcError = exports.PcError || (exports.PcError = {}));
/**
 * Defines values for Origin.
 * Possible values include: 'Local', 'Inbound', 'Outbound'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: Origin = <Origin>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
var Origin;
(function (Origin) {
    Origin["Local"] = "Local";
    Origin["Inbound"] = "Inbound";
    Origin["Outbound"] = "Outbound";
})(Origin = exports.Origin || (exports.Origin = {}));
/**
 * Defines values for Severity.
 * Possible values include: 'Error', 'Warning'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: Severity = <Severity>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
var Severity;
(function (Severity) {
    Severity["Error"] = "Error";
    Severity["Warning"] = "Warning";
})(Severity = exports.Severity || (exports.Severity = {}));
/**
 * Defines values for IssueType.
 * Possible values include: 'Unknown', 'AgentStopped', 'GuestFirewall',
 * 'DnsResolution', 'SocketBind', 'NetworkSecurityRule', 'UserDefinedRoute',
 * 'PortThrottled', 'Platform'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: IssueType = <IssueType>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
var IssueType;
(function (IssueType) {
    IssueType["Unknown"] = "Unknown";
    IssueType["AgentStopped"] = "AgentStopped";
    IssueType["GuestFirewall"] = "GuestFirewall";
    IssueType["DnsResolution"] = "DnsResolution";
    IssueType["SocketBind"] = "SocketBind";
    IssueType["NetworkSecurityRule"] = "NetworkSecurityRule";
    IssueType["UserDefinedRoute"] = "UserDefinedRoute";
    IssueType["PortThrottled"] = "PortThrottled";
    IssueType["Platform"] = "Platform";
})(IssueType = exports.IssueType || (exports.IssueType = {}));
/**
 * Defines values for ConnectionStatus.
 * Possible values include: 'Unknown', 'Connected', 'Disconnected', 'Degraded'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: ConnectionStatus =
 * <ConnectionStatus>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
var ConnectionStatus;
(function (ConnectionStatus) {
    ConnectionStatus["Unknown"] = "Unknown";
    ConnectionStatus["Connected"] = "Connected";
    ConnectionStatus["Disconnected"] = "Disconnected";
    ConnectionStatus["Degraded"] = "Degraded";
})(ConnectionStatus = exports.ConnectionStatus || (exports.ConnectionStatus = {}));
/**
 * Defines values for ConnectionState.
 * Possible values include: 'Reachable', 'Unreachable', 'Unknown'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: ConnectionState =
 * <ConnectionState>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
var ConnectionState;
(function (ConnectionState) {
    ConnectionState["Reachable"] = "Reachable";
    ConnectionState["Unreachable"] = "Unreachable";
    ConnectionState["Unknown"] = "Unknown";
})(ConnectionState = exports.ConnectionState || (exports.ConnectionState = {}));
/**
 * Defines values for EvaluationState.
 * Possible values include: 'NotStarted', 'InProgress', 'Completed'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: EvaluationState =
 * <EvaluationState>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
var EvaluationState;
(function (EvaluationState) {
    EvaluationState["NotStarted"] = "NotStarted";
    EvaluationState["InProgress"] = "InProgress";
    EvaluationState["Completed"] = "Completed";
})(EvaluationState = exports.EvaluationState || (exports.EvaluationState = {}));
/**
 * Defines values for ExpressRouteCircuitPeeringType.
 * Possible values include: 'AzurePublicPeering', 'AzurePrivatePeering',
 * 'MicrosoftPeering'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: ExpressRouteCircuitPeeringType =
 * <ExpressRouteCircuitPeeringType>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
var ExpressRouteCircuitPeeringType;
(function (ExpressRouteCircuitPeeringType) {
    ExpressRouteCircuitPeeringType["AzurePublicPeering"] = "AzurePublicPeering";
    ExpressRouteCircuitPeeringType["AzurePrivatePeering"] = "AzurePrivatePeering";
    ExpressRouteCircuitPeeringType["MicrosoftPeering"] = "MicrosoftPeering";
})(ExpressRouteCircuitPeeringType = exports.ExpressRouteCircuitPeeringType || (exports.ExpressRouteCircuitPeeringType = {}));
/**
 * Defines values for ExpressRouteCircuitPeeringState.
 * Possible values include: 'Disabled', 'Enabled'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: ExpressRouteCircuitPeeringState =
 * <ExpressRouteCircuitPeeringState>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
var ExpressRouteCircuitPeeringState;
(function (ExpressRouteCircuitPeeringState) {
    ExpressRouteCircuitPeeringState["Disabled"] = "Disabled";
    ExpressRouteCircuitPeeringState["Enabled"] = "Enabled";
})(ExpressRouteCircuitPeeringState = exports.ExpressRouteCircuitPeeringState || (exports.ExpressRouteCircuitPeeringState = {}));
/**
 * Defines values for ExpressRouteCircuitPeeringAdvertisedPublicPrefixState.
 * Possible values include: 'NotConfigured', 'Configuring', 'Configured',
 * 'ValidationNeeded'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: ExpressRouteCircuitPeeringAdvertisedPublicPrefixState =
 * <ExpressRouteCircuitPeeringAdvertisedPublicPrefixState>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
var ExpressRouteCircuitPeeringAdvertisedPublicPrefixState;
(function (ExpressRouteCircuitPeeringAdvertisedPublicPrefixState) {
    ExpressRouteCircuitPeeringAdvertisedPublicPrefixState["NotConfigured"] = "NotConfigured";
    ExpressRouteCircuitPeeringAdvertisedPublicPrefixState["Configuring"] = "Configuring";
    ExpressRouteCircuitPeeringAdvertisedPublicPrefixState["Configured"] = "Configured";
    ExpressRouteCircuitPeeringAdvertisedPublicPrefixState["ValidationNeeded"] = "ValidationNeeded";
})(ExpressRouteCircuitPeeringAdvertisedPublicPrefixState = exports.ExpressRouteCircuitPeeringAdvertisedPublicPrefixState || (exports.ExpressRouteCircuitPeeringAdvertisedPublicPrefixState = {}));
/**
 * Defines values for VirtualNetworkPeeringState.
 * Possible values include: 'Initiated', 'Connected', 'Disconnected'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: VirtualNetworkPeeringState =
 * <VirtualNetworkPeeringState>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
var VirtualNetworkPeeringState;
(function (VirtualNetworkPeeringState) {
    VirtualNetworkPeeringState["Initiated"] = "Initiated";
    VirtualNetworkPeeringState["Connected"] = "Connected";
    VirtualNetworkPeeringState["Disconnected"] = "Disconnected";
})(VirtualNetworkPeeringState = exports.VirtualNetworkPeeringState || (exports.VirtualNetworkPeeringState = {}));
/**
 * Defines values for VirtualNetworkGatewayType.
 * Possible values include: 'Vpn', 'ExpressRoute'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: VirtualNetworkGatewayType =
 * <VirtualNetworkGatewayType>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
var VirtualNetworkGatewayType;
(function (VirtualNetworkGatewayType) {
    VirtualNetworkGatewayType["Vpn"] = "Vpn";
    VirtualNetworkGatewayType["ExpressRoute"] = "ExpressRoute";
})(VirtualNetworkGatewayType = exports.VirtualNetworkGatewayType || (exports.VirtualNetworkGatewayType = {}));
/**
 * Defines values for VpnType.
 * Possible values include: 'PolicyBased', 'RouteBased'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: VpnType = <VpnType>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
var VpnType;
(function (VpnType) {
    VpnType["PolicyBased"] = "PolicyBased";
    VpnType["RouteBased"] = "RouteBased";
})(VpnType = exports.VpnType || (exports.VpnType = {}));
/**
 * Defines values for VirtualNetworkGatewaySkuName.
 * Possible values include: 'Basic', 'HighPerformance', 'Standard',
 * 'UltraPerformance', 'VpnGw1', 'VpnGw2', 'VpnGw3'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: VirtualNetworkGatewaySkuName =
 * <VirtualNetworkGatewaySkuName>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
var VirtualNetworkGatewaySkuName;
(function (VirtualNetworkGatewaySkuName) {
    VirtualNetworkGatewaySkuName["Basic"] = "Basic";
    VirtualNetworkGatewaySkuName["HighPerformance"] = "HighPerformance";
    VirtualNetworkGatewaySkuName["Standard"] = "Standard";
    VirtualNetworkGatewaySkuName["UltraPerformance"] = "UltraPerformance";
    VirtualNetworkGatewaySkuName["VpnGw1"] = "VpnGw1";
    VirtualNetworkGatewaySkuName["VpnGw2"] = "VpnGw2";
    VirtualNetworkGatewaySkuName["VpnGw3"] = "VpnGw3";
})(VirtualNetworkGatewaySkuName = exports.VirtualNetworkGatewaySkuName || (exports.VirtualNetworkGatewaySkuName = {}));
/**
 * Defines values for VirtualNetworkGatewaySkuTier.
 * Possible values include: 'Basic', 'HighPerformance', 'Standard',
 * 'UltraPerformance', 'VpnGw1', 'VpnGw2', 'VpnGw3'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: VirtualNetworkGatewaySkuTier =
 * <VirtualNetworkGatewaySkuTier>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
var VirtualNetworkGatewaySkuTier;
(function (VirtualNetworkGatewaySkuTier) {
    VirtualNetworkGatewaySkuTier["Basic"] = "Basic";
    VirtualNetworkGatewaySkuTier["HighPerformance"] = "HighPerformance";
    VirtualNetworkGatewaySkuTier["Standard"] = "Standard";
    VirtualNetworkGatewaySkuTier["UltraPerformance"] = "UltraPerformance";
    VirtualNetworkGatewaySkuTier["VpnGw1"] = "VpnGw1";
    VirtualNetworkGatewaySkuTier["VpnGw2"] = "VpnGw2";
    VirtualNetworkGatewaySkuTier["VpnGw3"] = "VpnGw3";
})(VirtualNetworkGatewaySkuTier = exports.VirtualNetworkGatewaySkuTier || (exports.VirtualNetworkGatewaySkuTier = {}));
/**
 * Defines values for VpnClientProtocol.
 * Possible values include: 'IkeV2', 'SSTP'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: VpnClientProtocol =
 * <VpnClientProtocol>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
var VpnClientProtocol;
(function (VpnClientProtocol) {
    VpnClientProtocol["IkeV2"] = "IkeV2";
    VpnClientProtocol["SSTP"] = "SSTP";
})(VpnClientProtocol = exports.VpnClientProtocol || (exports.VpnClientProtocol = {}));
/**
 * Defines values for BgpPeerState.
 * Possible values include: 'Unknown', 'Stopped', 'Idle', 'Connecting',
 * 'Connected'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: BgpPeerState =
 * <BgpPeerState>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
var BgpPeerState;
(function (BgpPeerState) {
    BgpPeerState["Unknown"] = "Unknown";
    BgpPeerState["Stopped"] = "Stopped";
    BgpPeerState["Idle"] = "Idle";
    BgpPeerState["Connecting"] = "Connecting";
    BgpPeerState["Connected"] = "Connected";
})(BgpPeerState = exports.BgpPeerState || (exports.BgpPeerState = {}));
/**
 * Defines values for ProcessorArchitecture.
 * Possible values include: 'Amd64', 'X86'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: ProcessorArchitecture =
 * <ProcessorArchitecture>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
var ProcessorArchitecture;
(function (ProcessorArchitecture) {
    ProcessorArchitecture["Amd64"] = "Amd64";
    ProcessorArchitecture["X86"] = "X86";
})(ProcessorArchitecture = exports.ProcessorArchitecture || (exports.ProcessorArchitecture = {}));
/**
 * Defines values for AuthenticationMethod.
 * Possible values include: 'EAPTLS', 'EAPMSCHAPv2'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: AuthenticationMethod =
 * <AuthenticationMethod>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
var AuthenticationMethod;
(function (AuthenticationMethod) {
    AuthenticationMethod["EAPTLS"] = "EAPTLS";
    AuthenticationMethod["EAPMSCHAPv2"] = "EAPMSCHAPv2";
})(AuthenticationMethod = exports.AuthenticationMethod || (exports.AuthenticationMethod = {}));
/**
 * Defines values for VirtualNetworkGatewayConnectionStatus.
 * Possible values include: 'Unknown', 'Connecting', 'Connected',
 * 'NotConnected'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: VirtualNetworkGatewayConnectionStatus =
 * <VirtualNetworkGatewayConnectionStatus>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
var VirtualNetworkGatewayConnectionStatus;
(function (VirtualNetworkGatewayConnectionStatus) {
    VirtualNetworkGatewayConnectionStatus["Unknown"] = "Unknown";
    VirtualNetworkGatewayConnectionStatus["Connecting"] = "Connecting";
    VirtualNetworkGatewayConnectionStatus["Connected"] = "Connected";
    VirtualNetworkGatewayConnectionStatus["NotConnected"] = "NotConnected";
})(VirtualNetworkGatewayConnectionStatus = exports.VirtualNetworkGatewayConnectionStatus || (exports.VirtualNetworkGatewayConnectionStatus = {}));
/**
 * Defines values for VirtualNetworkGatewayConnectionType.
 * Possible values include: 'IPsec', 'Vnet2Vnet', 'ExpressRoute', 'VPNClient'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: VirtualNetworkGatewayConnectionType =
 * <VirtualNetworkGatewayConnectionType>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
var VirtualNetworkGatewayConnectionType;
(function (VirtualNetworkGatewayConnectionType) {
    VirtualNetworkGatewayConnectionType["IPsec"] = "IPsec";
    VirtualNetworkGatewayConnectionType["Vnet2Vnet"] = "Vnet2Vnet";
    VirtualNetworkGatewayConnectionType["ExpressRoute"] = "ExpressRoute";
    VirtualNetworkGatewayConnectionType["VPNClient"] = "VPNClient";
})(VirtualNetworkGatewayConnectionType = exports.VirtualNetworkGatewayConnectionType || (exports.VirtualNetworkGatewayConnectionType = {}));
/**
 * Defines values for IpsecEncryption.
 * Possible values include: 'None', 'DES', 'DES3', 'AES128', 'AES192',
 * 'AES256', 'GCMAES128', 'GCMAES192', 'GCMAES256'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: IpsecEncryption =
 * <IpsecEncryption>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
var IpsecEncryption;
(function (IpsecEncryption) {
    IpsecEncryption["None"] = "None";
    IpsecEncryption["DES"] = "DES";
    IpsecEncryption["DES3"] = "DES3";
    IpsecEncryption["AES128"] = "AES128";
    IpsecEncryption["AES192"] = "AES192";
    IpsecEncryption["AES256"] = "AES256";
    IpsecEncryption["GCMAES128"] = "GCMAES128";
    IpsecEncryption["GCMAES192"] = "GCMAES192";
    IpsecEncryption["GCMAES256"] = "GCMAES256";
})(IpsecEncryption = exports.IpsecEncryption || (exports.IpsecEncryption = {}));
/**
 * Defines values for IpsecIntegrity.
 * Possible values include: 'MD5', 'SHA1', 'SHA256', 'GCMAES128', 'GCMAES192',
 * 'GCMAES256'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: IpsecIntegrity =
 * <IpsecIntegrity>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
var IpsecIntegrity;
(function (IpsecIntegrity) {
    IpsecIntegrity["MD5"] = "MD5";
    IpsecIntegrity["SHA1"] = "SHA1";
    IpsecIntegrity["SHA256"] = "SHA256";
    IpsecIntegrity["GCMAES128"] = "GCMAES128";
    IpsecIntegrity["GCMAES192"] = "GCMAES192";
    IpsecIntegrity["GCMAES256"] = "GCMAES256";
})(IpsecIntegrity = exports.IpsecIntegrity || (exports.IpsecIntegrity = {}));
/**
 * Defines values for IkeEncryption.
 * Possible values include: 'DES', 'DES3', 'AES128', 'AES192', 'AES256'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: IkeEncryption =
 * <IkeEncryption>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
var IkeEncryption;
(function (IkeEncryption) {
    IkeEncryption["DES"] = "DES";
    IkeEncryption["DES3"] = "DES3";
    IkeEncryption["AES128"] = "AES128";
    IkeEncryption["AES192"] = "AES192";
    IkeEncryption["AES256"] = "AES256";
})(IkeEncryption = exports.IkeEncryption || (exports.IkeEncryption = {}));
/**
 * Defines values for IkeIntegrity.
 * Possible values include: 'MD5', 'SHA1', 'SHA256', 'SHA384'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: IkeIntegrity =
 * <IkeIntegrity>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
var IkeIntegrity;
(function (IkeIntegrity) {
    IkeIntegrity["MD5"] = "MD5";
    IkeIntegrity["SHA1"] = "SHA1";
    IkeIntegrity["SHA256"] = "SHA256";
    IkeIntegrity["SHA384"] = "SHA384";
})(IkeIntegrity = exports.IkeIntegrity || (exports.IkeIntegrity = {}));
/**
 * Defines values for DhGroup.
 * Possible values include: 'None', 'DHGroup1', 'DHGroup2', 'DHGroup14',
 * 'DHGroup2048', 'ECP256', 'ECP384', 'DHGroup24'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: DhGroup = <DhGroup>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
var DhGroup;
(function (DhGroup) {
    DhGroup["None"] = "None";
    DhGroup["DHGroup1"] = "DHGroup1";
    DhGroup["DHGroup2"] = "DHGroup2";
    DhGroup["DHGroup14"] = "DHGroup14";
    DhGroup["DHGroup2048"] = "DHGroup2048";
    DhGroup["ECP256"] = "ECP256";
    DhGroup["ECP384"] = "ECP384";
    DhGroup["DHGroup24"] = "DHGroup24";
})(DhGroup = exports.DhGroup || (exports.DhGroup = {}));
/**
 * Defines values for PfsGroup.
 * Possible values include: 'None', 'PFS1', 'PFS2', 'PFS2048', 'ECP256',
 * 'ECP384', 'PFS24'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: PfsGroup = <PfsGroup>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
var PfsGroup;
(function (PfsGroup) {
    PfsGroup["None"] = "None";
    PfsGroup["PFS1"] = "PFS1";
    PfsGroup["PFS2"] = "PFS2";
    PfsGroup["PFS2048"] = "PFS2048";
    PfsGroup["ECP256"] = "ECP256";
    PfsGroup["ECP384"] = "ECP384";
    PfsGroup["PFS24"] = "PFS24";
})(PfsGroup = exports.PfsGroup || (exports.PfsGroup = {}));
//# sourceMappingURL=index.js.map