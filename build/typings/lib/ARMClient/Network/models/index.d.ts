import { BaseResource, CloudError } from "ms-rest-azure-js";
import * as msRest from "ms-rest-js";
export { BaseResource, CloudError };
/**
 * @interface
 * An interface representing DnsNameAvailabilityResult.
 * Response for the CheckDnsNameAvailability API service call.
 *
 */
export interface DnsNameAvailabilityResult {
    /**
     * @member {boolean} [available] Domain availability (True/False).
     */
    available?: boolean;
}
/**
 * @interface
 * An interface representing LoadBalancerSku.
 * SKU of a load balancer
 *
 */
export interface LoadBalancerSku {
    /**
     * @member {LoadBalancerSkuName} [name] Name of a load balancer SKU. Possible
     * values include: 'Basic', 'Standard'
     */
    name?: LoadBalancerSkuName;
}
/**
 * @interface
 * An interface representing SubResource.
 * Reference to another subresource.
 *
 * @extends BaseResource
 */
export interface SubResource extends BaseResource {
    /**
     * @member {string} [id] Resource ID.
     */
    id?: string;
}
/**
 * @interface
 * An interface representing Resource.
 * Common resource representation.
 *
 * @extends BaseResource
 */
export interface Resource extends BaseResource {
    /**
     * @member {string} [id] Resource ID.
     */
    id?: string;
    /**
     * @member {string} [name] Resource name.
     */
    readonly name?: string;
    /**
     * @member {string} [type] Resource type.
     */
    readonly type?: string;
    /**
     * @member {string} [location] Resource location.
     */
    location?: string;
    /**
     * @member {{ [propertyName: string]: string }} [tags] Resource tags.
     */
    tags?: {
        [propertyName: string]: string;
    };
}
/**
 * @interface
 * An interface representing ApplicationSecurityGroup.
 * An application security group in a resource group.
 *
 * @extends Resource
 */
export interface ApplicationSecurityGroup extends Resource {
    /**
     * @member {string} [resourceGuid] The resource GUID property of the
     * application security group resource. It uniquely identifies a resource,
     * even if the user changes its name or migrate the resource across
     * subscriptions or resource groups.
     */
    readonly resourceGuid?: string;
    /**
     * @member {string} [provisioningState] The provisioning state of the
     * application security group resource. Possible values are: 'Succeeded',
     * 'Updating', 'Deleting', and 'Failed'.
     */
    readonly provisioningState?: string;
    /**
     * @member {string} [etag] A unique read-only string that changes whenever
     * the resource is updated.
     */
    readonly etag?: string;
}
/**
 * @interface
 * An interface representing SecurityRule.
 * Network security rule.
 *
 * @extends SubResource
 */
export interface SecurityRule extends SubResource {
    /**
     * @member {string} [description] A description for this rule. Restricted to
     * 140 chars.
     */
    description?: string;
    /**
     * @member {SecurityRuleProtocol} protocol Network protocol this rule applies
     * to. Possible values are 'Tcp', 'Udp', and '*'. Possible values include:
     * 'Tcp', 'Udp', '*'
     */
    protocol: SecurityRuleProtocol;
    /**
     * @member {string} [sourcePortRange] The source port or range. Integer or
     * range between 0 and 65535. Asterix '*' can also be used to match all
     * ports.
     */
    sourcePortRange?: string;
    /**
     * @member {string} [destinationPortRange] The destination port or range.
     * Integer or range between 0 and 65535. Asterix '*' can also be used to
     * match all ports.
     */
    destinationPortRange?: string;
    /**
     * @member {string} [sourceAddressPrefix] The CIDR or source IP range.
     * Asterix '*' can also be used to match all source IPs. Default tags such as
     * 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used. If
     * this is an ingress rule, specifies where network traffic originates from.
     */
    sourceAddressPrefix?: string;
    /**
     * @member {string[]} [sourceAddressPrefixes] The CIDR or source IP ranges.
     */
    sourceAddressPrefixes?: string[];
    /**
     * @member {ApplicationSecurityGroup[]} [sourceApplicationSecurityGroups] The
     * application security group specified as source.
     */
    sourceApplicationSecurityGroups?: ApplicationSecurityGroup[];
    /**
     * @member {string} [destinationAddressPrefix] The destination address
     * prefix. CIDR or destination IP range. Asterix '*' can also be used to
     * match all source IPs. Default tags such as 'VirtualNetwork',
     * 'AzureLoadBalancer' and 'Internet' can also be used.
     */
    destinationAddressPrefix?: string;
    /**
     * @member {string[]} [destinationAddressPrefixes] The destination address
     * prefixes. CIDR or destination IP ranges.
     */
    destinationAddressPrefixes?: string[];
    /**
     * @member {ApplicationSecurityGroup[]}
     * [destinationApplicationSecurityGroups] The application security group
     * specified as destination.
     */
    destinationApplicationSecurityGroups?: ApplicationSecurityGroup[];
    /**
     * @member {string[]} [sourcePortRanges] The source port ranges.
     */
    sourcePortRanges?: string[];
    /**
     * @member {string[]} [destinationPortRanges] The destination port ranges.
     */
    destinationPortRanges?: string[];
    /**
     * @member {SecurityRuleAccess} access The network traffic is allowed or
     * denied. Possible values are: 'Allow' and 'Deny'. Possible values include:
     * 'Allow', 'Deny'
     */
    access: SecurityRuleAccess;
    /**
     * @member {number} [priority] The priority of the rule. The value can be
     * between 100 and 4096. The priority number must be unique for each rule in
     * the collection. The lower the priority number, the higher the priority of
     * the rule.
     */
    priority?: number;
    /**
     * @member {SecurityRuleDirection} direction The direction of the rule. The
     * direction specifies if rule will be evaluated on incoming or outcoming
     * traffic. Possible values are: 'Inbound' and 'Outbound'. Possible values
     * include: 'Inbound', 'Outbound'
     */
    direction: SecurityRuleDirection;
    /**
     * @member {string} [provisioningState] The provisioning state of the public
     * IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
     */
    provisioningState?: string;
    /**
     * @member {string} [name] The name of the resource that is unique within a
     * resource group. This name can be used to access the resource.
     */
    name?: string;
    /**
     * @member {string} [etag] A unique read-only string that changes whenever
     * the resource is updated.
     */
    etag?: string;
}
/**
 * @interface
 * An interface representing ApplicationGatewayBackendAddress.
 * Backend address of an application gateway.
 *
 */
export interface ApplicationGatewayBackendAddress {
    /**
     * @member {string} [fqdn] Fully qualified domain name (FQDN).
     */
    fqdn?: string;
    /**
     * @member {string} [ipAddress] IP address
     */
    ipAddress?: string;
}
/**
 * @interface
 * An interface representing ApplicationGatewayBackendAddressPool.
 * Backend Address Pool of an application gateway.
 *
 * @extends SubResource
 */
export interface ApplicationGatewayBackendAddressPool extends SubResource {
    /**
     * @member {NetworkInterfaceIPConfiguration[]} [backendIPConfigurations]
     * Collection of references to IPs defined in network interfaces.
     */
    backendIPConfigurations?: NetworkInterfaceIPConfiguration[];
    /**
     * @member {ApplicationGatewayBackendAddress[]} [backendAddresses] Backend
     * addresses
     */
    backendAddresses?: ApplicationGatewayBackendAddress[];
    /**
     * @member {string} [provisioningState] Provisioning state of the backend
     * address pool resource. Possible values are: 'Updating', 'Deleting', and
     * 'Failed'.
     */
    provisioningState?: string;
    /**
     * @member {string} [name] Resource that is unique within a resource group.
     * This name can be used to access the resource.
     */
    name?: string;
    /**
     * @member {string} [etag] A unique read-only string that changes whenever
     * the resource is updated.
     */
    etag?: string;
    /**
     * @member {string} [type] Type of the resource.
     */
    type?: string;
}
/**
 * @interface
 * An interface representing BackendAddressPool.
 * Pool of backend IP addresses.
 *
 * @extends SubResource
 */
export interface BackendAddressPool extends SubResource {
    /**
     * @member {NetworkInterfaceIPConfiguration[]} [backendIPConfigurations] Gets
     * collection of references to IP addresses defined in network interfaces.
     */
    readonly backendIPConfigurations?: NetworkInterfaceIPConfiguration[];
    /**
     * @member {SubResource[]} [loadBalancingRules] Gets load balancing rules
     * that use this backend address pool.
     */
    readonly loadBalancingRules?: SubResource[];
    /**
     * @member {SubResource} [outboundNatRule] Gets outbound rules that use this
     * backend address pool.
     */
    readonly outboundNatRule?: SubResource;
    /**
     * @member {string} [provisioningState] Get provisioning state of the public
     * IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
     */
    provisioningState?: string;
    /**
     * @member {string} [name] Gets name of the resource that is unique within a
     * resource group. This name can be used to access the resource.
     */
    name?: string;
    /**
     * @member {string} [etag] A unique read-only string that changes whenever
     * the resource is updated.
     */
    etag?: string;
}
/**
 * @interface
 * An interface representing InboundNatRule.
 * Inbound NAT rule of the load balancer.
 *
 * @extends SubResource
 */
export interface InboundNatRule extends SubResource {
    /**
     * @member {SubResource} [frontendIPConfiguration] A reference to frontend IP
     * addresses.
     */
    frontendIPConfiguration?: SubResource;
    /**
     * @member {NetworkInterfaceIPConfiguration} [backendIPConfiguration] A
     * reference to a private IP address defined on a network interface of a VM.
     * Traffic sent to the frontend port of each of the frontend IP
     * configurations is forwarded to the backend IP.
     */
    readonly backendIPConfiguration?: NetworkInterfaceIPConfiguration;
    /**
     * @member {TransportProtocol} [protocol] Possible values include: 'Udp',
     * 'Tcp', 'All'
     */
    protocol?: TransportProtocol;
    /**
     * @member {number} [frontendPort] The port for the external endpoint. Port
     * numbers for each rule must be unique within the Load Balancer. Acceptable
     * values range from 1 to 65534.
     */
    frontendPort?: number;
    /**
     * @member {number} [backendPort] The port used for the internal endpoint.
     * Acceptable values range from 1 to 65535.
     */
    backendPort?: number;
    /**
     * @member {number} [idleTimeoutInMinutes] The timeout for the TCP idle
     * connection. The value can be set between 4 and 30 minutes. The default
     * value is 4 minutes. This element is only used when the protocol is set to
     * TCP.
     */
    idleTimeoutInMinutes?: number;
    /**
     * @member {boolean} [enableFloatingIP] Configures a virtual machine's
     * endpoint for the floating IP capability required to configure a SQL
     * AlwaysOn Availability Group. This setting is required when using the SQL
     * AlwaysOn Availability Groups in SQL server. This setting can't be changed
     * after you create the endpoint.
     */
    enableFloatingIP?: boolean;
    /**
     * @member {string} [provisioningState] Gets the provisioning state of the
     * public IP resource. Possible values are: 'Updating', 'Deleting', and
     * 'Failed'.
     */
    provisioningState?: string;
    /**
     * @member {string} [name] Gets name of the resource that is unique within a
     * resource group. This name can be used to access the resource.
     */
    name?: string;
    /**
     * @member {string} [etag] A unique read-only string that changes whenever
     * the resource is updated.
     */
    etag?: string;
}
/**
 * @interface
 * An interface representing PublicIPAddressSku.
 * SKU of a public IP address
 *
 */
export interface PublicIPAddressSku {
    /**
     * @member {PublicIPAddressSkuName} [name] Name of a public IP address SKU.
     * Possible values include: 'Basic', 'Standard'
     */
    name?: PublicIPAddressSkuName;
}
/**
 * @interface
 * An interface representing IPConfiguration.
 * IP configuration
 *
 * @extends SubResource
 */
export interface IPConfiguration extends SubResource {
    /**
     * @member {string} [privateIPAddress] The private IP address of the IP
     * configuration.
     */
    privateIPAddress?: string;
    /**
     * @member {IPAllocationMethod} [privateIPAllocationMethod] The private IP
     * allocation method. Possible values are 'Static' and 'Dynamic'. Possible
     * values include: 'Static', 'Dynamic'
     */
    privateIPAllocationMethod?: IPAllocationMethod;
    /**
     * @member {Subnet} [subnet] The reference of the subnet resource.
     */
    subnet?: Subnet;
    /**
     * @member {PublicIPAddress} [publicIPAddress] The reference of the public IP
     * resource.
     */
    publicIPAddress?: PublicIPAddress;
    /**
     * @member {string} [provisioningState] Gets the provisioning state of the
     * public IP resource. Possible values are: 'Updating', 'Deleting', and
     * 'Failed'.
     */
    provisioningState?: string;
    /**
     * @member {string} [name] The name of the resource that is unique within a
     * resource group. This name can be used to access the resource.
     */
    name?: string;
    /**
     * @member {string} [etag] A unique read-only string that changes whenever
     * the resource is updated.
     */
    etag?: string;
}
/**
 * @interface
 * An interface representing PublicIPAddressDnsSettings.
 * Contains FQDN of the DNS record associated with the public IP address
 *
 */
export interface PublicIPAddressDnsSettings {
    /**
     * @member {string} [domainNameLabel] Gets or sets the Domain name label.The
     * concatenation of the domain name label and the regionalized DNS zone make
     * up the fully qualified domain name associated with the public IP address.
     * If a domain name label is specified, an A DNS record is created for the
     * public IP in the Microsoft Azure DNS system.
     */
    domainNameLabel?: string;
    /**
     * @member {string} [fqdn] Gets the FQDN, Fully qualified domain name of the
     * A DNS record associated with the public IP. This is the concatenation of
     * the domainNameLabel and the regionalized DNS zone.
     */
    fqdn?: string;
    /**
     * @member {string} [reverseFqdn] Gets or Sets the Reverse FQDN. A
     * user-visible, fully qualified domain name that resolves to this public IP
     * address. If the reverseFqdn is specified, then a PTR DNS record is created
     * pointing from the IP address in the in-addr.arpa domain to the reverse
     * FQDN.
     */
    reverseFqdn?: string;
}
/**
 * @interface
 * An interface representing PublicIPAddress.
 * Public IP address resource.
 *
 * @extends Resource
 */
export interface PublicIPAddress extends Resource {
    /**
     * @member {PublicIPAddressSku} [sku] The public IP address SKU.
     */
    sku?: PublicIPAddressSku;
    /**
     * @member {IPAllocationMethod} [publicIPAllocationMethod] The public IP
     * allocation method. Possible values are: 'Static' and 'Dynamic'. Possible
     * values include: 'Static', 'Dynamic'
     */
    publicIPAllocationMethod?: IPAllocationMethod;
    /**
     * @member {IPVersion} [publicIPAddressVersion] The public IP address
     * version. Possible values are: 'IPv4' and 'IPv6'. Possible values include:
     * 'IPv4', 'IPv6'
     */
    publicIPAddressVersion?: IPVersion;
    /**
     * @member {IPConfiguration} [ipConfiguration] The IP configuration
     * associated with the public IP address.
     */
    readonly ipConfiguration?: IPConfiguration;
    /**
     * @member {PublicIPAddressDnsSettings} [dnsSettings] The FQDN of the DNS
     * record associated with the public IP address.
     */
    dnsSettings?: PublicIPAddressDnsSettings;
    /**
     * @member {string} [ipAddress] The IP address associated with the public IP
     * address resource.
     */
    ipAddress?: string;
    /**
     * @member {number} [idleTimeoutInMinutes] The idle timeout of the public IP
     * address.
     */
    idleTimeoutInMinutes?: number;
    /**
     * @member {string} [resourceGuid] The resource GUID property of the public
     * IP resource.
     */
    resourceGuid?: string;
    /**
     * @member {string} [provisioningState] The provisioning state of the
     * PublicIP resource. Possible values are: 'Updating', 'Deleting', and
     * 'Failed'.
     */
    provisioningState?: string;
    /**
     * @member {string} [etag] A unique read-only string that changes whenever
     * the resource is updated.
     */
    etag?: string;
    /**
     * @member {string[]} [zones] A list of availability zones denoting the IP
     * allocated for the resource needs to come from.
     */
    zones?: string[];
}
/**
 * @interface
 * An interface representing NetworkInterfaceIPConfiguration.
 * IPConfiguration in a network interface.
 *
 * @extends SubResource
 */
export interface NetworkInterfaceIPConfiguration extends SubResource {
    /**
     * @member {ApplicationGatewayBackendAddressPool[]}
     * [applicationGatewayBackendAddressPools] The reference of
     * ApplicationGatewayBackendAddressPool resource.
     */
    applicationGatewayBackendAddressPools?: ApplicationGatewayBackendAddressPool[];
    /**
     * @member {BackendAddressPool[]} [loadBalancerBackendAddressPools] The
     * reference of LoadBalancerBackendAddressPool resource.
     */
    loadBalancerBackendAddressPools?: BackendAddressPool[];
    /**
     * @member {InboundNatRule[]} [loadBalancerInboundNatRules] A list of
     * references of LoadBalancerInboundNatRules.
     */
    loadBalancerInboundNatRules?: InboundNatRule[];
    /**
     * @member {string} [privateIPAddress] Private IP address of the IP
     * configuration.
     */
    privateIPAddress?: string;
    /**
     * @member {IPAllocationMethod} [privateIPAllocationMethod] Defines how a
     * private IP address is assigned. Possible values are: 'Static' and
     * 'Dynamic'. Possible values include: 'Static', 'Dynamic'
     */
    privateIPAllocationMethod?: IPAllocationMethod;
    /**
     * @member {IPVersion} [privateIPAddressVersion] Available from Api-Version
     * 2016-03-30 onwards, it represents whether the specific ipconfiguration is
     * IPv4 or IPv6. Default is taken as IPv4.  Possible values are: 'IPv4' and
     * 'IPv6'. Possible values include: 'IPv4', 'IPv6'
     */
    privateIPAddressVersion?: IPVersion;
    /**
     * @member {Subnet} [subnet] Subnet bound to the IP configuration.
     */
    subnet?: Subnet;
    /**
     * @member {boolean} [primary] Gets whether this is a primary customer
     * address on the network interface.
     */
    primary?: boolean;
    /**
     * @member {PublicIPAddress} [publicIPAddress] Public IP address bound to the
     * IP configuration.
     */
    publicIPAddress?: PublicIPAddress;
    /**
     * @member {ApplicationSecurityGroup[]} [applicationSecurityGroups]
     * Application security groups in which the IP configuration is included.
     */
    applicationSecurityGroups?: ApplicationSecurityGroup[];
    /**
     * @member {string} [provisioningState] The provisioning state of the network
     * interface IP configuration. Possible values are: 'Updating', 'Deleting',
     * and 'Failed'.
     */
    provisioningState?: string;
    /**
     * @member {string} [name] The name of the resource that is unique within a
     * resource group. This name can be used to access the resource.
     */
    name?: string;
    /**
     * @member {string} [etag] A unique read-only string that changes whenever
     * the resource is updated.
     */
    etag?: string;
}
/**
 * @interface
 * An interface representing NetworkInterfaceDnsSettings.
 * DNS settings of a network interface.
 *
 */
export interface NetworkInterfaceDnsSettings {
    /**
     * @member {string[]} [dnsServers] List of DNS servers IP addresses. Use
     * 'AzureProvidedDNS' to switch to azure provided DNS resolution.
     * 'AzureProvidedDNS' value cannot be combined with other IPs, it must be the
     * only value in dnsServers collection.
     */
    dnsServers?: string[];
    /**
     * @member {string[]} [appliedDnsServers] If the VM that uses this NIC is
     * part of an Availability Set, then this list will have the union of all DNS
     * servers from all NICs that are part of the Availability Set. This property
     * is what is configured on each of those VMs.
     */
    appliedDnsServers?: string[];
    /**
     * @member {string} [internalDnsNameLabel] Relative DNS name for this NIC
     * used for internal communications between VMs in the same virtual network.
     */
    internalDnsNameLabel?: string;
    /**
     * @member {string} [internalFqdn] Fully qualified DNS name supporting
     * internal communications between VMs in the same virtual network.
     */
    internalFqdn?: string;
    /**
     * @member {string} [internalDomainNameSuffix] Even if internalDnsNameLabel
     * is not specified, a DNS entry is created for the primary NIC of the VM.
     * This DNS name can be constructed by concatenating the VM name with the
     * value of internalDomainNameSuffix.
     */
    internalDomainNameSuffix?: string;
}
/**
 * @interface
 * An interface representing NetworkInterface.
 * A network interface in a resource group.
 *
 * @extends Resource
 */
export interface NetworkInterface extends Resource {
    /**
     * @member {SubResource} [virtualMachine] The reference of a virtual machine.
     */
    virtualMachine?: SubResource;
    /**
     * @member {NetworkSecurityGroup} [networkSecurityGroup] The reference of the
     * NetworkSecurityGroup resource.
     */
    networkSecurityGroup?: NetworkSecurityGroup;
    /**
     * @member {NetworkInterfaceIPConfiguration[]} [ipConfigurations] A list of
     * IPConfigurations of the network interface.
     */
    ipConfigurations?: NetworkInterfaceIPConfiguration[];
    /**
     * @member {NetworkInterfaceDnsSettings} [dnsSettings] The DNS settings in
     * network interface.
     */
    dnsSettings?: NetworkInterfaceDnsSettings;
    /**
     * @member {string} [macAddress] The MAC address of the network interface.
     */
    macAddress?: string;
    /**
     * @member {boolean} [primary] Gets whether this is a primary network
     * interface on a virtual machine.
     */
    primary?: boolean;
    /**
     * @member {boolean} [enableAcceleratedNetworking] If the network interface
     * is accelerated networking enabled.
     */
    enableAcceleratedNetworking?: boolean;
    /**
     * @member {boolean} [enableIPForwarding] Indicates whether IP forwarding is
     * enabled on this network interface.
     */
    enableIPForwarding?: boolean;
    /**
     * @member {string} [resourceGuid] The resource GUID property of the network
     * interface resource.
     */
    resourceGuid?: string;
    /**
     * @member {string} [provisioningState] The provisioning state of the public
     * IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
     */
    provisioningState?: string;
    /**
     * @member {string} [etag] A unique read-only string that changes whenever
     * the resource is updated.
     */
    etag?: string;
}
/**
 * @interface
 * An interface representing NetworkSecurityGroup.
 * NetworkSecurityGroup resource.
 *
 * @extends Resource
 */
export interface NetworkSecurityGroup extends Resource {
    /**
     * @member {SecurityRule[]} [securityRules] A collection of security rules of
     * the network security group.
     */
    securityRules?: SecurityRule[];
    /**
     * @member {SecurityRule[]} [defaultSecurityRules] The default security rules
     * of network security group.
     */
    defaultSecurityRules?: SecurityRule[];
    /**
     * @member {NetworkInterface[]} [networkInterfaces] A collection of
     * references to network interfaces.
     */
    readonly networkInterfaces?: NetworkInterface[];
    /**
     * @member {Subnet[]} [subnets] A collection of references to subnets.
     */
    readonly subnets?: Subnet[];
    /**
     * @member {string} [resourceGuid] The resource GUID property of the network
     * security group resource.
     */
    resourceGuid?: string;
    /**
     * @member {string} [provisioningState] The provisioning state of the public
     * IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
     */
    provisioningState?: string;
    /**
     * @member {string} [etag] A unique read-only string that changes whenever
     * the resource is updated.
     */
    etag?: string;
}
/**
 * @interface
 * An interface representing Route.
 * Route resource
 *
 * @extends SubResource
 */
export interface Route extends SubResource {
    /**
     * @member {string} [addressPrefix] The destination CIDR to which the route
     * applies.
     */
    addressPrefix?: string;
    /**
     * @member {RouteNextHopType} nextHopType The type of Azure hop the packet
     * should be sent to. Possible values are: 'VirtualNetworkGateway',
     * 'VnetLocal', 'Internet', 'VirtualAppliance', and 'None'. Possible values
     * include: 'VirtualNetworkGateway', 'VnetLocal', 'Internet',
     * 'VirtualAppliance', 'None'
     */
    nextHopType: RouteNextHopType;
    /**
     * @member {string} [nextHopIpAddress] The IP address packets should be
     * forwarded to. Next hop values are only allowed in routes where the next
     * hop type is VirtualAppliance.
     */
    nextHopIpAddress?: string;
    /**
     * @member {string} [provisioningState] The provisioning state of the
     * resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
     */
    provisioningState?: string;
    /**
     * @member {string} [name] The name of the resource that is unique within a
     * resource group. This name can be used to access the resource.
     */
    name?: string;
    /**
     * @member {string} [etag] A unique read-only string that changes whenever
     * the resource is updated.
     */
    etag?: string;
}
/**
 * @interface
 * An interface representing RouteTable.
 * Route table resource.
 *
 * @extends Resource
 */
export interface RouteTable extends Resource {
    /**
     * @member {Route[]} [routes] Collection of routes contained within a route
     * table.
     */
    routes?: Route[];
    /**
     * @member {Subnet[]} [subnets] A collection of references to subnets.
     */
    readonly subnets?: Subnet[];
    /**
     * @member {boolean} [disableBgpRoutePropagation] Gets or sets whether to
     * disable the routes learned by BGP on that route table. True means disable.
     */
    disableBgpRoutePropagation?: boolean;
    /**
     * @member {string} [provisioningState] The provisioning state of the
     * resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
     */
    provisioningState?: string;
    /**
     * @member {string} [etag] Gets a unique read-only string that changes
     * whenever the resource is updated.
     */
    etag?: string;
}
/**
 * @interface
 * An interface representing ServiceEndpointPropertiesFormat.
 * The service endpoint properties.
 *
 */
export interface ServiceEndpointPropertiesFormat {
    /**
     * @member {string} [service] The type of the endpoint service.
     */
    service?: string;
    /**
     * @member {string[]} [locations] A list of locations.
     */
    locations?: string[];
    /**
     * @member {string} [provisioningState] The provisioning state of the
     * resource.
     */
    provisioningState?: string;
}
/**
 * @interface
 * An interface representing ResourceNavigationLink.
 * ResourceNavigationLink resource.
 *
 * @extends SubResource
 */
export interface ResourceNavigationLink extends SubResource {
    /**
     * @member {string} [linkedResourceType] Resource type of the linked
     * resource.
     */
    linkedResourceType?: string;
    /**
     * @member {string} [link] Link to the external resource
     */
    link?: string;
    /**
     * @member {string} [provisioningState] Provisioning state of the
     * ResourceNavigationLink resource.
     */
    readonly provisioningState?: string;
    /**
     * @member {string} [name] Name of the resource that is unique within a
     * resource group. This name can be used to access the resource.
     */
    name?: string;
    /**
     * @member {string} [etag] A unique read-only string that changes whenever
     * the resource is updated.
     */
    readonly etag?: string;
}
/**
 * @interface
 * An interface representing Subnet.
 * Subnet in a virtual network resource.
 *
 * @extends SubResource
 */
export interface Subnet extends SubResource {
    /**
     * @member {string} [addressPrefix] The address prefix for the subnet.
     */
    addressPrefix?: string;
    /**
     * @member {NetworkSecurityGroup} [networkSecurityGroup] The reference of the
     * NetworkSecurityGroup resource.
     */
    networkSecurityGroup?: NetworkSecurityGroup;
    /**
     * @member {RouteTable} [routeTable] The reference of the RouteTable
     * resource.
     */
    routeTable?: RouteTable;
    /**
     * @member {ServiceEndpointPropertiesFormat[]} [serviceEndpoints] An array of
     * service endpoints.
     */
    serviceEndpoints?: ServiceEndpointPropertiesFormat[];
    /**
     * @member {IPConfiguration[]} [ipConfigurations] Gets an array of references
     * to the network interface IP configurations using subnet.
     */
    readonly ipConfigurations?: IPConfiguration[];
    /**
     * @member {ResourceNavigationLink[]} [resourceNavigationLinks] Gets an array
     * of references to the external resources using subnet.
     */
    resourceNavigationLinks?: ResourceNavigationLink[];
    /**
     * @member {string} [provisioningState] The provisioning state of the
     * resource.
     */
    provisioningState?: string;
    /**
     * @member {string} [name] The name of the resource that is unique within a
     * resource group. This name can be used to access the resource.
     */
    name?: string;
    /**
     * @member {string} [etag] A unique read-only string that changes whenever
     * the resource is updated.
     */
    etag?: string;
}
/**
 * @interface
 * An interface representing FrontendIPConfiguration.
 * Frontend IP address of the load balancer.
 *
 * @extends SubResource
 */
export interface FrontendIPConfiguration extends SubResource {
    /**
     * @member {SubResource[]} [inboundNatRules] Read only. Inbound rules URIs
     * that use this frontend IP.
     */
    readonly inboundNatRules?: SubResource[];
    /**
     * @member {SubResource[]} [inboundNatPools] Read only. Inbound pools URIs
     * that use this frontend IP.
     */
    readonly inboundNatPools?: SubResource[];
    /**
     * @member {SubResource[]} [outboundNatRules] Read only. Outbound rules URIs
     * that use this frontend IP.
     */
    readonly outboundNatRules?: SubResource[];
    /**
     * @member {SubResource[]} [loadBalancingRules] Gets load balancing rules
     * URIs that use this frontend IP.
     */
    readonly loadBalancingRules?: SubResource[];
    /**
     * @member {string} [privateIPAddress] The private IP address of the IP
     * configuration.
     */
    privateIPAddress?: string;
    /**
     * @member {IPAllocationMethod} [privateIPAllocationMethod] The Private IP
     * allocation method. Possible values are: 'Static' and 'Dynamic'. Possible
     * values include: 'Static', 'Dynamic'
     */
    privateIPAllocationMethod?: IPAllocationMethod;
    /**
     * @member {Subnet} [subnet] The reference of the subnet resource.
     */
    subnet?: Subnet;
    /**
     * @member {PublicIPAddress} [publicIPAddress] The reference of the Public IP
     * resource.
     */
    publicIPAddress?: PublicIPAddress;
    /**
     * @member {string} [provisioningState] Gets the provisioning state of the
     * public IP resource. Possible values are: 'Updating', 'Deleting', and
     * 'Failed'.
     */
    provisioningState?: string;
    /**
     * @member {string} [name] The name of the resource that is unique within a
     * resource group. This name can be used to access the resource.
     */
    name?: string;
    /**
     * @member {string} [etag] A unique read-only string that changes whenever
     * the resource is updated.
     */
    etag?: string;
    /**
     * @member {string[]} [zones] A list of availability zones denoting the IP
     * allocated for the resource needs to come from.
     */
    zones?: string[];
}
/**
 * @interface
 * An interface representing LoadBalancingRule.
 * A load balancing rule for a load balancer.
 *
 * @extends SubResource
 */
export interface LoadBalancingRule extends SubResource {
    /**
     * @member {SubResource} [frontendIPConfiguration] A reference to frontend IP
     * addresses.
     */
    frontendIPConfiguration?: SubResource;
    /**
     * @member {SubResource} [backendAddressPool] A reference to a pool of DIPs.
     * Inbound traffic is randomly load balanced across IPs in the backend IPs.
     */
    backendAddressPool?: SubResource;
    /**
     * @member {SubResource} [probe] The reference of the load balancer probe
     * used by the load balancing rule.
     */
    probe?: SubResource;
    /**
     * @member {TransportProtocol} protocol Possible values include: 'Udp',
     * 'Tcp', 'All'
     */
    protocol: TransportProtocol;
    /**
     * @member {LoadDistribution} [loadDistribution] The load distribution policy
     * for this rule. Possible values are 'Default', 'SourceIP', and
     * 'SourceIPProtocol'. Possible values include: 'Default', 'SourceIP',
     * 'SourceIPProtocol'
     */
    loadDistribution?: LoadDistribution;
    /**
     * @member {number} frontendPort The port for the external endpoint. Port
     * numbers for each rule must be unique within the Load Balancer. Acceptable
     * values are between 0 and 65534. Note that value 0 enables "Any Port"
     */
    frontendPort: number;
    /**
     * @member {number} [backendPort] The port used for internal connections on
     * the endpoint. Acceptable values are between 0 and 65535. Note that value 0
     * enables "Any Port"
     */
    backendPort?: number;
    /**
     * @member {number} [idleTimeoutInMinutes] The timeout for the TCP idle
     * connection. The value can be set between 4 and 30 minutes. The default
     * value is 4 minutes. This element is only used when the protocol is set to
     * TCP.
     */
    idleTimeoutInMinutes?: number;
    /**
     * @member {boolean} [enableFloatingIP] Configures a virtual machine's
     * endpoint for the floating IP capability required to configure a SQL
     * AlwaysOn Availability Group. This setting is required when using the SQL
     * AlwaysOn Availability Groups in SQL server. This setting can't be changed
     * after you create the endpoint.
     */
    enableFloatingIP?: boolean;
    /**
     * @member {boolean} [disableOutboundSnat] Configures SNAT for the VMs in the
     * backend pool to use the publicIP address specified in the frontend of the
     * load balancing rule.
     */
    disableOutboundSnat?: boolean;
    /**
     * @member {string} [provisioningState] Gets the provisioning state of the
     * PublicIP resource. Possible values are: 'Updating', 'Deleting', and
     * 'Failed'.
     */
    provisioningState?: string;
    /**
     * @member {string} [name] The name of the resource that is unique within a
     * resource group. This name can be used to access the resource.
     */
    name?: string;
    /**
     * @member {string} [etag] A unique read-only string that changes whenever
     * the resource is updated.
     */
    etag?: string;
}
/**
 * @interface
 * An interface representing Probe.
 * A load balancer probe.
 *
 * @extends SubResource
 */
export interface Probe extends SubResource {
    /**
     * @member {SubResource[]} [loadBalancingRules] The load balancer rules that
     * use this probe.
     */
    readonly loadBalancingRules?: SubResource[];
    /**
     * @member {ProbeProtocol} protocol The protocol of the end point. Possible
     * values are: 'Http' or 'Tcp'. If 'Tcp' is specified, a received ACK is
     * required for the probe to be successful. If 'Http' is specified, a 200 OK
     * response from the specifies URI is required for the probe to be
     * successful. Possible values include: 'Http', 'Tcp'
     */
    protocol: ProbeProtocol;
    /**
     * @member {number} port The port for communicating the probe. Possible
     * values range from 1 to 65535, inclusive.
     */
    port: number;
    /**
     * @member {number} [intervalInSeconds] The interval, in seconds, for how
     * frequently to probe the endpoint for health status. Typically, the
     * interval is slightly less than half the allocated timeout period (in
     * seconds) which allows two full probes before taking the instance out of
     * rotation. The default value is 15, the minimum value is 5.
     */
    intervalInSeconds?: number;
    /**
     * @member {number} [numberOfProbes] The number of probes where if no
     * response, will result in stopping further traffic from being delivered to
     * the endpoint. This values allows endpoints to be taken out of rotation
     * faster or slower than the typical times used in Azure.
     */
    numberOfProbes?: number;
    /**
     * @member {string} [requestPath] The URI used for requesting health status
     * from the VM. Path is required if a protocol is set to http. Otherwise, it
     * is not allowed. There is no default value.
     */
    requestPath?: string;
    /**
     * @member {string} [provisioningState] Gets the provisioning state of the
     * public IP resource. Possible values are: 'Updating', 'Deleting', and
     * 'Failed'.
     */
    provisioningState?: string;
    /**
     * @member {string} [name] Gets name of the resource that is unique within a
     * resource group. This name can be used to access the resource.
     */
    name?: string;
    /**
     * @member {string} [etag] A unique read-only string that changes whenever
     * the resource is updated.
     */
    etag?: string;
}
/**
 * @interface
 * An interface representing InboundNatPool.
 * Inbound NAT pool of the load balancer.
 *
 * @extends SubResource
 */
export interface InboundNatPool extends SubResource {
    /**
     * @member {SubResource} [frontendIPConfiguration] A reference to frontend IP
     * addresses.
     */
    frontendIPConfiguration?: SubResource;
    /**
     * @member {TransportProtocol} protocol Possible values include: 'Udp',
     * 'Tcp', 'All'
     */
    protocol: TransportProtocol;
    /**
     * @member {number} frontendPortRangeStart The first port number in the range
     * of external ports that will be used to provide Inbound Nat to NICs
     * associated with a load balancer. Acceptable values range between 1 and
     * 65534.
     */
    frontendPortRangeStart: number;
    /**
     * @member {number} frontendPortRangeEnd The last port number in the range of
     * external ports that will be used to provide Inbound Nat to NICs associated
     * with a load balancer. Acceptable values range between 1 and 65535.
     */
    frontendPortRangeEnd: number;
    /**
     * @member {number} backendPort The port used for internal connections on the
     * endpoint. Acceptable values are between 1 and 65535.
     */
    backendPort: number;
    /**
     * @member {string} [provisioningState] Gets the provisioning state of the
     * PublicIP resource. Possible values are: 'Updating', 'Deleting', and
     * 'Failed'.
     */
    provisioningState?: string;
    /**
     * @member {string} [name] The name of the resource that is unique within a
     * resource group. This name can be used to access the resource.
     */
    name?: string;
    /**
     * @member {string} [etag] A unique read-only string that changes whenever
     * the resource is updated.
     */
    etag?: string;
}
/**
 * @interface
 * An interface representing OutboundNatRule.
 * Outbound NAT pool of the load balancer.
 *
 * @extends SubResource
 */
export interface OutboundNatRule extends SubResource {
    /**
     * @member {number} [allocatedOutboundPorts] The number of outbound ports to
     * be used for NAT.
     */
    allocatedOutboundPorts?: number;
    /**
     * @member {SubResource[]} [frontendIPConfigurations] The Frontend IP
     * addresses of the load balancer.
     */
    frontendIPConfigurations?: SubResource[];
    /**
     * @member {SubResource} backendAddressPool A reference to a pool of DIPs.
     * Outbound traffic is randomly load balanced across IPs in the backend IPs.
     */
    backendAddressPool: SubResource;
    /**
     * @member {string} [provisioningState] Gets the provisioning state of the
     * PublicIP resource. Possible values are: 'Updating', 'Deleting', and
     * 'Failed'.
     */
    provisioningState?: string;
    /**
     * @member {string} [name] The name of the resource that is unique within a
     * resource group. This name can be used to access the resource.
     */
    name?: string;
    /**
     * @member {string} [etag] A unique read-only string that changes whenever
     * the resource is updated.
     */
    etag?: string;
}
/**
 * @interface
 * An interface representing LoadBalancer.
 * LoadBalancer resource
 *
 * @extends Resource
 */
export interface LoadBalancer extends Resource {
    /**
     * @member {LoadBalancerSku} [sku] The load balancer SKU.
     */
    sku?: LoadBalancerSku;
    /**
     * @member {FrontendIPConfiguration[]} [frontendIPConfigurations] Object
     * representing the frontend IPs to be used for the load balancer
     */
    frontendIPConfigurations?: FrontendIPConfiguration[];
    /**
     * @member {BackendAddressPool[]} [backendAddressPools] Collection of backend
     * address pools used by a load balancer
     */
    backendAddressPools?: BackendAddressPool[];
    /**
     * @member {LoadBalancingRule[]} [loadBalancingRules] Object collection
     * representing the load balancing rules Gets the provisioning
     */
    loadBalancingRules?: LoadBalancingRule[];
    /**
     * @member {Probe[]} [probes] Collection of probe objects used in the load
     * balancer
     */
    probes?: Probe[];
    /**
     * @member {InboundNatRule[]} [inboundNatRules] Collection of inbound NAT
     * Rules used by a load balancer. Defining inbound NAT rules on your load
     * balancer is mutually exclusive with defining an inbound NAT pool. Inbound
     * NAT pools are referenced from virtual machine scale sets. NICs that are
     * associated with individual virtual machines cannot reference an Inbound
     * NAT pool. They have to reference individual inbound NAT rules.
     */
    inboundNatRules?: InboundNatRule[];
    /**
     * @member {InboundNatPool[]} [inboundNatPools] Defines an external port
     * range for inbound NAT to a single backend port on NICs associated with a
     * load balancer. Inbound NAT rules are created automatically for each NIC
     * associated with the Load Balancer using an external port from this range.
     * Defining an Inbound NAT pool on your Load Balancer is mutually exclusive
     * with defining inbound Nat rules. Inbound NAT pools are referenced from
     * virtual machine scale sets. NICs that are associated with individual
     * virtual machines cannot reference an inbound NAT pool. They have to
     * reference individual inbound NAT rules.
     */
    inboundNatPools?: InboundNatPool[];
    /**
     * @member {OutboundNatRule[]} [outboundNatRules] The outbound NAT rules.
     */
    outboundNatRules?: OutboundNatRule[];
    /**
     * @member {string} [resourceGuid] The resource GUID property of the load
     * balancer resource.
     */
    resourceGuid?: string;
    /**
     * @member {string} [provisioningState] Gets the provisioning state of the
     * PublicIP resource. Possible values are: 'Updating', 'Deleting', and
     * 'Failed'.
     */
    provisioningState?: string;
    /**
     * @member {string} [etag] A unique read-only string that changes whenever
     * the resource is updated.
     */
    etag?: string;
}
/**
 * @interface
 * An interface representing TagsObject.
 * Tags object for patch operations.
 *
 */
export interface TagsObject {
    /**
     * @member {{ [propertyName: string]: string }} [tags] Resource tags.
     */
    tags?: {
        [propertyName: string]: string;
    };
}
/**
 * @interface
 * An interface representing ErrorDetails.
 */
export interface ErrorDetails {
    /**
     * @member {string} [code]
     */
    code?: string;
    /**
     * @member {string} [target]
     */
    target?: string;
    /**
     * @member {string} [message]
     */
    message?: string;
}
/**
 * @interface
 * An interface representing ErrorModel.
 */
export interface ErrorModel {
    /**
     * @member {string} [code]
     */
    code?: string;
    /**
     * @member {string} [message]
     */
    message?: string;
    /**
     * @member {string} [target]
     */
    target?: string;
    /**
     * @member {ErrorDetails[]} [details]
     */
    details?: ErrorDetails[];
    /**
     * @member {string} [innerError]
     */
    innerError?: string;
}
/**
 * @interface
 * An interface representing AzureAsyncOperationResult.
 * The response body contains the status of the specified asynchronous
 * operation, indicating whether it has succeeded, is in progress, or has
 * failed. Note that this status is distinct from the HTTP status code returned
 * for the Get Operation Status operation itself. If the asynchronous operation
 * succeeded, the response body includes the HTTP status code for the
 * successful request. If the asynchronous operation failed, the response body
 * includes the HTTP status code for the failed request and error information
 * regarding the failure.
 *
 */
export interface AzureAsyncOperationResult {
    /**
     * @member {NetworkOperationStatus} [status] Status of the Azure async
     * operation. Possible values are: 'InProgress', 'Succeeded', and 'Failed'.
     * Possible values include: 'InProgress', 'Succeeded', 'Failed'
     */
    status?: NetworkOperationStatus;
    /**
     * @member {ErrorModel} [error]
     */
    error?: ErrorModel;
}
/**
 * @interface
 * An interface representing EffectiveNetworkSecurityGroupAssociation.
 * The effective network security group association.
 *
 */
export interface EffectiveNetworkSecurityGroupAssociation {
    /**
     * @member {SubResource} [subnet] The ID of the subnet if assigned.
     */
    subnet?: SubResource;
    /**
     * @member {SubResource} [networkInterface] The ID of the network interface
     * if assigned.
     */
    networkInterface?: SubResource;
}
/**
 * @interface
 * An interface representing EffectiveNetworkSecurityRule.
 * Effective network security rules.
 *
 */
export interface EffectiveNetworkSecurityRule {
    /**
     * @member {string} [name] The name of the security rule specified by the
     * user (if created by the user).
     */
    name?: string;
    /**
     * @member {EffectiveSecurityRuleProtocol} [protocol] The network protocol
     * this rule applies to. Possible values are: 'Tcp', 'Udp', and 'All'.
     * Possible values include: 'Tcp', 'Udp', 'All'
     */
    protocol?: EffectiveSecurityRuleProtocol;
    /**
     * @member {string} [sourcePortRange] The source port or range.
     */
    sourcePortRange?: string;
    /**
     * @member {string} [destinationPortRange] The destination port or range.
     */
    destinationPortRange?: string;
    /**
     * @member {string[]} [sourcePortRanges] The source port ranges. Expected
     * values include a single integer between 0 and 65535, a range using '-' as
     * seperator (e.g. 100-400), or an asterix (*)
     */
    sourcePortRanges?: string[];
    /**
     * @member {string[]} [destinationPortRanges] The destination port ranges.
     * Expected values include a single integer between 0 and 65535, a range
     * using '-' as seperator (e.g. 100-400), or an asterix (*)
     */
    destinationPortRanges?: string[];
    /**
     * @member {string} [sourceAddressPrefix] The source address prefix.
     */
    sourceAddressPrefix?: string;
    /**
     * @member {string} [destinationAddressPrefix] The destination address
     * prefix.
     */
    destinationAddressPrefix?: string;
    /**
     * @member {string[]} [sourceAddressPrefixes] The source address prefixes.
     * Expected values include CIDR IP ranges, Default Tags (VirtualNetwork,
     * AureLoadBalancer, Internet), System Tags, and the asterix (*).
     */
    sourceAddressPrefixes?: string[];
    /**
     * @member {string[]} [destinationAddressPrefixes] The destination address
     * prefixes. Expected values include CIDR IP ranges, Default Tags
     * (VirtualNetwork, AureLoadBalancer, Internet), System Tags, and the asterix
     * (*).
     */
    destinationAddressPrefixes?: string[];
    /**
     * @member {string[]} [expandedSourceAddressPrefix] The expanded source
     * address prefix.
     */
    expandedSourceAddressPrefix?: string[];
    /**
     * @member {string[]} [expandedDestinationAddressPrefix] Expanded destination
     * address prefix.
     */
    expandedDestinationAddressPrefix?: string[];
    /**
     * @member {SecurityRuleAccess} [access] Whether network traffic is allowed
     * or denied. Possible values are: 'Allow' and 'Deny'. Possible values
     * include: 'Allow', 'Deny'
     */
    access?: SecurityRuleAccess;
    /**
     * @member {number} [priority] The priority of the rule.
     */
    priority?: number;
    /**
     * @member {SecurityRuleDirection} [direction] The direction of the rule.
     * Possible values are: 'Inbound and Outbound'. Possible values include:
     * 'Inbound', 'Outbound'
     */
    direction?: SecurityRuleDirection;
}
/**
 * @interface
 * An interface representing EffectiveNetworkSecurityGroup.
 * Effective network security group.
 *
 */
export interface EffectiveNetworkSecurityGroup {
    /**
     * @member {SubResource} [networkSecurityGroup] The ID of network security
     * group that is applied.
     */
    networkSecurityGroup?: SubResource;
    /**
     * @member {EffectiveNetworkSecurityGroupAssociation} [association]
     * Associated resources.
     */
    association?: EffectiveNetworkSecurityGroupAssociation;
    /**
     * @member {EffectiveNetworkSecurityRule[]} [effectiveSecurityRules] A
     * collection of effective security rules.
     */
    effectiveSecurityRules?: EffectiveNetworkSecurityRule[];
    /**
     * @member {{ [propertyName: string]: string[] }} [tagMap] Mapping of tags to
     * list of IP Addresses included within the tag.
     */
    tagMap?: {
        [propertyName: string]: string[];
    };
}
/**
 * @interface
 * An interface representing EffectiveNetworkSecurityGroupListResult.
 * Response for list effective network security groups API service call.
 *
 */
export interface EffectiveNetworkSecurityGroupListResult {
    /**
     * @member {EffectiveNetworkSecurityGroup[]} [value] A list of effective
     * network security groups.
     */
    value?: EffectiveNetworkSecurityGroup[];
    /**
     * @member {string} [nextLink] The URL to get the next set of results.
     */
    readonly nextLink?: string;
}
/**
 * @interface
 * An interface representing EffectiveRoute.
 * Effective Route
 *
 */
export interface EffectiveRoute {
    /**
     * @member {string} [name] The name of the user defined route. This is
     * optional.
     */
    name?: string;
    /**
     * @member {EffectiveRouteSource} [source] Who created the route. Possible
     * values are: 'Unknown', 'User', 'VirtualNetworkGateway', and 'Default'.
     * Possible values include: 'Unknown', 'User', 'VirtualNetworkGateway',
     * 'Default'
     */
    source?: EffectiveRouteSource;
    /**
     * @member {EffectiveRouteState} [state] The value of effective route.
     * Possible values are: 'Active' and 'Invalid'. Possible values include:
     * 'Active', 'Invalid'
     */
    state?: EffectiveRouteState;
    /**
     * @member {string[]} [addressPrefix] The address prefixes of the effective
     * routes in CIDR notation.
     */
    addressPrefix?: string[];
    /**
     * @member {string[]} [nextHopIpAddress] The IP address of the next hop of
     * the effective route.
     */
    nextHopIpAddress?: string[];
    /**
     * @member {RouteNextHopType} [nextHopType] The type of Azure hop the packet
     * should be sent to. Possible values are: 'VirtualNetworkGateway',
     * 'VnetLocal', 'Internet', 'VirtualAppliance', and 'None'. Possible values
     * include: 'VirtualNetworkGateway', 'VnetLocal', 'Internet',
     * 'VirtualAppliance', 'None'
     */
    nextHopType?: RouteNextHopType;
}
/**
 * @interface
 * An interface representing EffectiveRouteListResult.
 * Response for list effective route API service call.
 *
 */
export interface EffectiveRouteListResult {
    /**
     * @member {EffectiveRoute[]} [value] A list of effective routes.
     */
    value?: EffectiveRoute[];
    /**
     * @member {string} [nextLink] The URL to get the next set of results.
     */
    readonly nextLink?: string;
}
/**
 * @interface
 * An interface representing NetworkWatcher.
 * Network watcher in a resource group.
 *
 * @extends Resource
 */
export interface NetworkWatcher extends Resource {
    /**
     * @member {string} [etag] A unique read-only string that changes whenever
     * the resource is updated.
     */
    etag?: string;
    /**
     * @member {ProvisioningState} [provisioningState] The provisioning state of
     * the resource. Possible values include: 'Succeeded', 'Updating',
     * 'Deleting', 'Failed'
     */
    readonly provisioningState?: ProvisioningState;
}
/**
 * @interface
 * An interface representing TopologyParameters.
 * Parameters that define the representation of topology.
 *
 */
export interface TopologyParameters {
    /**
     * @member {string} [targetResourceGroupName] The name of the target resource
     * group to perform topology on.
     */
    targetResourceGroupName?: string;
    /**
     * @member {SubResource} [targetVirtualNetwork] The reference of the Virtual
     * Network resource.
     */
    targetVirtualNetwork?: SubResource;
    /**
     * @member {SubResource} [targetSubnet] The reference of the Subnet resource.
     */
    targetSubnet?: SubResource;
}
/**
 * @interface
 * An interface representing TopologyAssociation.
 * Resources that have an association with the parent resource.
 *
 */
export interface TopologyAssociation {
    /**
     * @member {string} [name] The name of the resource that is associated with
     * the parent resource.
     */
    name?: string;
    /**
     * @member {string} [resourceId] The ID of the resource that is associated
     * with the parent resource.
     */
    resourceId?: string;
    /**
     * @member {AssociationType} [associationType] The association type of the
     * child resource to the parent resource. Possible values include:
     * 'Associated', 'Contains'
     */
    associationType?: AssociationType;
}
/**
 * @interface
 * An interface representing TopologyResource.
 * The network resource topology information for the given resource group.
 *
 */
export interface TopologyResource {
    /**
     * @member {string} [name] Name of the resource.
     */
    name?: string;
    /**
     * @member {string} [id] ID of the resource.
     */
    id?: string;
    /**
     * @member {string} [location] Resource location.
     */
    location?: string;
    /**
     * @member {TopologyAssociation[]} [associations] Holds the associations the
     * resource has with other resources in the resource group.
     */
    associations?: TopologyAssociation[];
}
/**
 * @interface
 * An interface representing Topology.
 * Topology of the specified resource group.
 *
 */
export interface Topology {
    /**
     * @member {string} [id] GUID representing the operation id.
     */
    readonly id?: string;
    /**
     * @member {Date} [createdDateTime] The datetime when the topology was
     * initially created for the resource group.
     */
    readonly createdDateTime?: Date;
    /**
     * @member {Date} [lastModified] The datetime when the topology was last
     * modified.
     */
    readonly lastModified?: Date;
    /**
     * @member {TopologyResource[]} [resources]
     */
    resources?: TopologyResource[];
}
/**
 * @interface
 * An interface representing VerificationIPFlowParameters.
 * Parameters that define the IP flow to be verified.
 *
 */
export interface VerificationIPFlowParameters {
    /**
     * @member {string} targetResourceId The ID of the target resource to perform
     * next-hop on.
     */
    targetResourceId: string;
    /**
     * @member {Direction} direction The direction of the packet represented as a
     * 5-tuple. Possible values include: 'Inbound', 'Outbound'
     */
    direction: Direction;
    /**
     * @member {Protocol} protocol Protocol to be verified on. Possible values
     * include: 'TCP', 'UDP'
     */
    protocol: Protocol;
    /**
     * @member {string} localPort The local port. Acceptable values are a single
     * integer in the range (0-65535). Support for * for the source port, which
     * depends on the direction.
     */
    localPort: string;
    /**
     * @member {string} remotePort The remote port. Acceptable values are a
     * single integer in the range (0-65535). Support for * for the source port,
     * which depends on the direction.
     */
    remotePort: string;
    /**
     * @member {string} localIPAddress The local IP address. Acceptable values
     * are valid IPv4 addresses.
     */
    localIPAddress: string;
    /**
     * @member {string} remoteIPAddress The remote IP address. Acceptable values
     * are valid IPv4 addresses.
     */
    remoteIPAddress: string;
    /**
     * @member {string} [targetNicResourceId] The NIC ID. (If VM has multiple
     * NICs and IP forwarding is enabled on any of them, then this parameter must
     * be specified. Otherwise optional).
     */
    targetNicResourceId?: string;
}
/**
 * @interface
 * An interface representing VerificationIPFlowResult.
 * Results of IP flow verification on the target resource.
 *
 */
export interface VerificationIPFlowResult {
    /**
     * @member {Access} [access] Indicates whether the traffic is allowed or
     * denied. Possible values include: 'Allow', 'Deny'
     */
    access?: Access;
    /**
     * @member {string} [ruleName] Name of the rule. If input is not matched
     * against any security rule, it is not displayed.
     */
    ruleName?: string;
}
/**
 * @interface
 * An interface representing NextHopParameters.
 * Parameters that define the source and destination endpoint.
 *
 */
export interface NextHopParameters {
    /**
     * @member {string} targetResourceId The resource identifier of the target
     * resource against which the action is to be performed.
     */
    targetResourceId: string;
    /**
     * @member {string} sourceIPAddress The source IP address.
     */
    sourceIPAddress: string;
    /**
     * @member {string} destinationIPAddress The destination IP address.
     */
    destinationIPAddress: string;
    /**
     * @member {string} [targetNicResourceId] The NIC ID. (If VM has multiple
     * NICs and IP forwarding is enabled on any of the nics, then this parameter
     * must be specified. Otherwise optional).
     */
    targetNicResourceId?: string;
}
/**
 * @interface
 * An interface representing NextHopResult.
 * The information about next hop from the specified VM.
 *
 */
export interface NextHopResult {
    /**
     * @member {NextHopType} [nextHopType] Next hop type. Possible values
     * include: 'Internet', 'VirtualAppliance', 'VirtualNetworkGateway',
     * 'VnetLocal', 'HyperNetGateway', 'None'
     */
    nextHopType?: NextHopType;
    /**
     * @member {string} [nextHopIpAddress] Next hop IP Address
     */
    nextHopIpAddress?: string;
    /**
     * @member {string} [routeTableId] The resource identifier for the route
     * table associated with the route being returned. If the route being
     * returned does not correspond to any user created routes then this field
     * will be the string 'System Route'.
     */
    routeTableId?: string;
}
/**
 * @interface
 * An interface representing SecurityGroupViewParameters.
 * Parameters that define the VM to check security groups for.
 *
 */
export interface SecurityGroupViewParameters {
    /**
     * @member {string} targetResourceId ID of the target VM.
     */
    targetResourceId: string;
}
/**
 * @interface
 * An interface representing NetworkInterfaceAssociation.
 * Network interface and its custom security rules.
 *
 */
export interface NetworkInterfaceAssociation {
    /**
     * @member {string} [id] Network interface ID.
     */
    readonly id?: string;
    /**
     * @member {SecurityRule[]} [securityRules] Collection of custom security
     * rules.
     */
    securityRules?: SecurityRule[];
}
/**
 * @interface
 * An interface representing SubnetAssociation.
 * Network interface and its custom security rules.
 *
 */
export interface SubnetAssociation {
    /**
     * @member {string} [id] Subnet ID.
     */
    readonly id?: string;
    /**
     * @member {SecurityRule[]} [securityRules] Collection of custom security
     * rules.
     */
    securityRules?: SecurityRule[];
}
/**
 * @interface
 * An interface representing SecurityRuleAssociations.
 * All security rules associated with the network interface.
 *
 */
export interface SecurityRuleAssociations {
    /**
     * @member {NetworkInterfaceAssociation} [networkInterfaceAssociation]
     */
    networkInterfaceAssociation?: NetworkInterfaceAssociation;
    /**
     * @member {SubnetAssociation} [subnetAssociation]
     */
    subnetAssociation?: SubnetAssociation;
    /**
     * @member {SecurityRule[]} [defaultSecurityRules] Collection of default
     * security rules of the network security group.
     */
    defaultSecurityRules?: SecurityRule[];
    /**
     * @member {EffectiveNetworkSecurityRule[]} [effectiveSecurityRules]
     * Collection of effective security rules.
     */
    effectiveSecurityRules?: EffectiveNetworkSecurityRule[];
}
/**
 * @interface
 * An interface representing SecurityGroupNetworkInterface.
 * Network interface and all its associated security rules.
 *
 */
export interface SecurityGroupNetworkInterface {
    /**
     * @member {string} [id] ID of the network interface.
     */
    id?: string;
    /**
     * @member {SecurityRuleAssociations} [securityRuleAssociations]
     */
    securityRuleAssociations?: SecurityRuleAssociations;
}
/**
 * @interface
 * An interface representing SecurityGroupViewResult.
 * The information about security rules applied to the specified VM.
 *
 */
export interface SecurityGroupViewResult {
    /**
     * @member {SecurityGroupNetworkInterface[]} [networkInterfaces] List of
     * network interfaces on the specified VM.
     */
    networkInterfaces?: SecurityGroupNetworkInterface[];
}
/**
 * @interface
 * An interface representing PacketCaptureStorageLocation.
 * Describes the storage location for a packet capture session.
 *
 */
export interface PacketCaptureStorageLocation {
    /**
     * @member {string} [storageId] The ID of the storage account to save the
     * packet capture session. Required if no local file path is provided.
     */
    storageId?: string;
    /**
     * @member {string} [storagePath] The URI of the storage path to save the
     * packet capture. Must be a well-formed URI describing the location to save
     * the packet capture.
     */
    storagePath?: string;
    /**
     * @member {string} [filePath] A valid local path on the targeting VM. Must
     * include the name of the capture file (*.cap). For linux virtual machine it
     * must start with /var/captures. Required if no storage ID is provided,
     * otherwise optional.
     */
    filePath?: string;
}
/**
 * @interface
 * An interface representing PacketCaptureFilter.
 * Filter that is applied to packet capture request. Multiple filters can be
 * applied.
 *
 */
export interface PacketCaptureFilter {
    /**
     * @member {PcProtocol} [protocol] Protocol to be filtered on. Possible
     * values include: 'TCP', 'UDP', 'Any'. Default value: 'Any' .
     */
    protocol?: PcProtocol;
    /**
     * @member {string} [localIPAddress] Local IP Address to be filtered on.
     * Notation: "127.0.0.1" for single address entry. "127.0.0.1-127.0.0.255"
     * for range. "127.0.0.1;127.0.0.5"? for multiple entries. Multiple ranges
     * not currently supported. Mixing ranges with multiple entries not currently
     * supported. Default = null.
     */
    localIPAddress?: string;
    /**
     * @member {string} [remoteIPAddress] Local IP Address to be filtered on.
     * Notation: "127.0.0.1" for single address entry. "127.0.0.1-127.0.0.255"
     * for range. "127.0.0.1;127.0.0.5;" for multiple entries. Multiple ranges
     * not currently supported. Mixing ranges with multiple entries not currently
     * supported. Default = null.
     */
    remoteIPAddress?: string;
    /**
     * @member {string} [localPort] Local port to be filtered on. Notation: "80"
     * for single port entry."80-85" for range. "80;443;" for multiple entries.
     * Multiple ranges not currently supported. Mixing ranges with multiple
     * entries not currently supported. Default = null.
     */
    localPort?: string;
    /**
     * @member {string} [remotePort] Remote port to be filtered on. Notation:
     * "80" for single port entry."80-85" for range. "80;443;" for multiple
     * entries. Multiple ranges not currently supported. Mixing ranges with
     * multiple entries not currently supported. Default = null.
     */
    remotePort?: string;
}
/**
 * @interface
 * An interface representing PacketCaptureParameters.
 * Parameters that define the create packet capture operation.
 *
 */
export interface PacketCaptureParameters {
    /**
     * @member {string} target The ID of the targeted resource, only VM is
     * currently supported.
     */
    target: string;
    /**
     * @member {number} [bytesToCapturePerPacket] Number of bytes captured per
     * packet, the remaining bytes are truncated. Default value: 0 .
     */
    bytesToCapturePerPacket?: number;
    /**
     * @member {number} [totalBytesPerSession] Maximum size of the capture
     * output. Default value: 1073741824 .
     */
    totalBytesPerSession?: number;
    /**
     * @member {number} [timeLimitInSeconds] Maximum duration of the capture
     * session in seconds. Default value: 18000 .
     */
    timeLimitInSeconds?: number;
    /**
     * @member {PacketCaptureStorageLocation} storageLocation
     */
    storageLocation: PacketCaptureStorageLocation;
    /**
     * @member {PacketCaptureFilter[]} [filters]
     */
    filters?: PacketCaptureFilter[];
}
/**
 * @interface
 * An interface representing PacketCapture.
 * Parameters that define the create packet capture operation.
 *
 */
export interface PacketCapture {
    /**
     * @member {string} target The ID of the targeted resource, only VM is
     * currently supported.
     */
    target: string;
    /**
     * @member {number} [bytesToCapturePerPacket] Number of bytes captured per
     * packet, the remaining bytes are truncated. Default value: 0 .
     */
    bytesToCapturePerPacket?: number;
    /**
     * @member {number} [totalBytesPerSession] Maximum size of the capture
     * output. Default value: 1073741824 .
     */
    totalBytesPerSession?: number;
    /**
     * @member {number} [timeLimitInSeconds] Maximum duration of the capture
     * session in seconds. Default value: 18000 .
     */
    timeLimitInSeconds?: number;
    /**
     * @member {PacketCaptureStorageLocation} storageLocation
     */
    storageLocation: PacketCaptureStorageLocation;
    /**
     * @member {PacketCaptureFilter[]} [filters]
     */
    filters?: PacketCaptureFilter[];
}
/**
 * @interface
 * An interface representing PacketCaptureResult.
 * Information about packet capture session.
 *
 */
export interface PacketCaptureResult {
    /**
     * @member {string} [name] Name of the packet capture session.
     */
    readonly name?: string;
    /**
     * @member {string} [id] ID of the packet capture operation.
     */
    readonly id?: string;
    /**
     * @member {string} [etag] Default value: 'A unique read-only string that
     * changes whenever the resource is updated.' .
     */
    etag?: string;
    /**
     * @member {string} target The ID of the targeted resource, only VM is
     * currently supported.
     */
    target: string;
    /**
     * @member {number} [bytesToCapturePerPacket] Number of bytes captured per
     * packet, the remaining bytes are truncated. Default value: 0 .
     */
    bytesToCapturePerPacket?: number;
    /**
     * @member {number} [totalBytesPerSession] Maximum size of the capture
     * output. Default value: 1073741824 .
     */
    totalBytesPerSession?: number;
    /**
     * @member {number} [timeLimitInSeconds] Maximum duration of the capture
     * session in seconds. Default value: 18000 .
     */
    timeLimitInSeconds?: number;
    /**
     * @member {PacketCaptureStorageLocation} storageLocation
     */
    storageLocation: PacketCaptureStorageLocation;
    /**
     * @member {PacketCaptureFilter[]} [filters]
     */
    filters?: PacketCaptureFilter[];
    /**
     * @member {ProvisioningState} [provisioningState] The provisioning state of
     * the packet capture session. Possible values include: 'Succeeded',
     * 'Updating', 'Deleting', 'Failed'
     */
    provisioningState?: ProvisioningState;
}
/**
 * @interface
 * An interface representing PacketCaptureQueryStatusResult.
 * Status of packet capture session.
 *
 */
export interface PacketCaptureQueryStatusResult {
    /**
     * @member {string} [name] The name of the packet capture resource.
     */
    name?: string;
    /**
     * @member {string} [id] The ID of the packet capture resource.
     */
    id?: string;
    /**
     * @member {Date} [captureStartTime] The start time of the packet capture
     * session.
     */
    captureStartTime?: Date;
    /**
     * @member {PcStatus} [packetCaptureStatus] The status of the packet capture
     * session. Possible values include: 'NotStarted', 'Running', 'Stopped',
     * 'Error', 'Unknown'
     */
    packetCaptureStatus?: PcStatus;
    /**
     * @member {string} [stopReason] The reason the current packet capture
     * session was stopped.
     */
    stopReason?: string;
    /**
     * @member {PcError[]} [packetCaptureError] List of errors of packet capture
     * session.
     */
    packetCaptureError?: PcError[];
}
/**
 * @interface
 * An interface representing TroubleshootingParameters.
 * Parameters that define the resource to troubleshoot.
 *
 */
export interface TroubleshootingParameters {
    /**
     * @member {string} targetResourceId The target resource to troubleshoot.
     */
    targetResourceId: string;
    /**
     * @member {string} storageId The ID for the storage account to save the
     * troubleshoot result.
     */
    storageId: string;
    /**
     * @member {string} storagePath The path to the blob to save the troubleshoot
     * result in.
     */
    storagePath: string;
}
/**
 * @interface
 * An interface representing QueryTroubleshootingParameters.
 * Parameters that define the resource to query the troubleshooting result.
 *
 */
export interface QueryTroubleshootingParameters {
    /**
     * @member {string} targetResourceId The target resource ID to query the
     * troubleshooting result.
     */
    targetResourceId: string;
}
/**
 * @interface
 * An interface representing TroubleshootingRecommendedActions.
 * Recommended actions based on discovered issues.
 *
 */
export interface TroubleshootingRecommendedActions {
    /**
     * @member {string} [actionId] ID of the recommended action.
     */
    actionId?: string;
    /**
     * @member {string} [actionText] Description of recommended actions.
     */
    actionText?: string;
    /**
     * @member {string} [actionUri] The uri linking to a documentation for the
     * recommended troubleshooting actions.
     */
    actionUri?: string;
    /**
     * @member {string} [actionUriText] The information from the URI for the
     * recommended troubleshooting actions.
     */
    actionUriText?: string;
}
/**
 * @interface
 * An interface representing TroubleshootingDetails.
 * Information gained from troubleshooting of specified resource.
 *
 */
export interface TroubleshootingDetails {
    /**
     * @member {string} [id] The id of the get troubleshoot operation.
     */
    id?: string;
    /**
     * @member {string} [reasonType] Reason type of failure.
     */
    reasonType?: string;
    /**
     * @member {string} [summary] A summary of troubleshooting.
     */
    summary?: string;
    /**
     * @member {string} [detail] Details on troubleshooting results.
     */
    detail?: string;
    /**
     * @member {TroubleshootingRecommendedActions[]} [recommendedActions] List of
     * recommended actions.
     */
    recommendedActions?: TroubleshootingRecommendedActions[];
}
/**
 * @interface
 * An interface representing TroubleshootingResult.
 * Troubleshooting information gained from specified resource.
 *
 */
export interface TroubleshootingResult {
    /**
     * @member {Date} [startTime] The start time of the troubleshooting.
     */
    startTime?: Date;
    /**
     * @member {Date} [endTime] The end time of the troubleshooting.
     */
    endTime?: Date;
    /**
     * @member {string} [code] The result code of the troubleshooting.
     */
    code?: string;
    /**
     * @member {TroubleshootingDetails[]} [results] Information from
     * troubleshooting.
     */
    results?: TroubleshootingDetails[];
}
/**
 * @interface
 * An interface representing RetentionPolicyParameters.
 * Parameters that define the retention policy for flow log.
 *
 */
export interface RetentionPolicyParameters {
    /**
     * @member {number} [days] Number of days to retain flow log records. Default
     * value: 0 .
     */
    days?: number;
    /**
     * @member {boolean} [enabled] Flag to enable/disable retention. Default
     * value: false .
     */
    enabled?: boolean;
}
/**
 * @interface
 * An interface representing FlowLogStatusParameters.
 * Parameters that define a resource to query flow log status.
 *
 */
export interface FlowLogStatusParameters {
    /**
     * @member {string} targetResourceId The target resource where getting the
     * flow logging status.
     */
    targetResourceId: string;
}
/**
 * @interface
 * An interface representing FlowLogInformation.
 * Information on the configuration of flow log.
 *
 */
export interface FlowLogInformation {
    /**
     * @member {string} targetResourceId The ID of the resource to configure for
     * flow logging.
     */
    targetResourceId: string;
    /**
     * @member {string} storageId ID of the storage account which is used to
     * store the flow log.
     */
    storageId: string;
    /**
     * @member {boolean} enabled Flag to enable/disable flow logging.
     */
    enabled: boolean;
    /**
     * @member {RetentionPolicyParameters} [retentionPolicy]
     */
    retentionPolicy?: RetentionPolicyParameters;
}
/**
 * @interface
 * An interface representing ConnectivitySource.
 * Parameters that define the source of the connection.
 *
 */
export interface ConnectivitySource {
    /**
     * @member {string} resourceId The ID of the resource from which a
     * connectivity check will be initiated.
     */
    resourceId: string;
    /**
     * @member {number} [port] The source port from which a connectivity check
     * will be performed.
     */
    port?: number;
}
/**
 * @interface
 * An interface representing ConnectivityDestination.
 * Parameters that define destination of connection.
 *
 */
export interface ConnectivityDestination {
    /**
     * @member {string} [resourceId] The ID of the resource to which a connection
     * attempt will be made.
     */
    resourceId?: string;
    /**
     * @member {string} [address] The IP address or URI the resource to which a
     * connection attempt will be made.
     */
    address?: string;
    /**
     * @member {number} [port] Port on which check connectivity will be
     * performed.
     */
    port?: number;
}
/**
 * @interface
 * An interface representing ConnectivityParameters.
 * Parameters that determine how the connectivity check will be performed.
 *
 */
export interface ConnectivityParameters {
    /**
     * @member {ConnectivitySource} source
     */
    source: ConnectivitySource;
    /**
     * @member {ConnectivityDestination} destination
     */
    destination: ConnectivityDestination;
}
/**
 * @interface
 * An interface representing ConnectivityIssue.
 * Information about an issue encountered in the process of checking for
 * connectivity.
 *
 */
export interface ConnectivityIssue {
    /**
     * @member {Origin} [origin] The origin of the issue. Possible values
     * include: 'Local', 'Inbound', 'Outbound'
     */
    readonly origin?: Origin;
    /**
     * @member {Severity} [severity] The severity of the issue. Possible values
     * include: 'Error', 'Warning'
     */
    readonly severity?: Severity;
    /**
     * @member {IssueType} [type] The type of issue. Possible values include:
     * 'Unknown', 'AgentStopped', 'GuestFirewall', 'DnsResolution', 'SocketBind',
     * 'NetworkSecurityRule', 'UserDefinedRoute', 'PortThrottled', 'Platform'
     */
    readonly type?: IssueType;
    /**
     * @member {{ [propertyName: string]: string }[]} [context] Provides
     * additional context on the issue.
     */
    readonly context?: {
        [propertyName: string]: string;
    }[];
}
/**
 * @interface
 * An interface representing ConnectivityHop.
 * Information about a hop between the source and the destination.
 *
 */
export interface ConnectivityHop {
    /**
     * @member {string} [type] The type of the hop.
     */
    readonly type?: string;
    /**
     * @member {string} [id] The ID of the hop.
     */
    readonly id?: string;
    /**
     * @member {string} [address] The IP address of the hop.
     */
    readonly address?: string;
    /**
     * @member {string} [resourceId] The ID of the resource corresponding to this
     * hop.
     */
    readonly resourceId?: string;
    /**
     * @member {string[]} [nextHopIds] List of next hop identifiers.
     */
    readonly nextHopIds?: string[];
    /**
     * @member {ConnectivityIssue[]} [issues] List of issues.
     */
    readonly issues?: ConnectivityIssue[];
}
/**
 * @interface
 * An interface representing ConnectivityInformation.
 * Information on the connectivity status.
 *
 */
export interface ConnectivityInformation {
    /**
     * @member {ConnectivityHop[]} [hops] List of hops between the source and the
     * destination.
     */
    readonly hops?: ConnectivityHop[];
    /**
     * @member {ConnectionStatus} [connectionStatus] The connection status.
     * Possible values include: 'Unknown', 'Connected', 'Disconnected',
     * 'Degraded'
     */
    readonly connectionStatus?: ConnectionStatus;
    /**
     * @member {number} [avgLatencyInMs] Average latency in milliseconds.
     */
    readonly avgLatencyInMs?: number;
    /**
     * @member {number} [minLatencyInMs] Minimum latency in milliseconds.
     */
    readonly minLatencyInMs?: number;
    /**
     * @member {number} [maxLatencyInMs] Maximum latency in milliseconds.
     */
    readonly maxLatencyInMs?: number;
    /**
     * @member {number} [probesSent] Total number of probes sent.
     */
    readonly probesSent?: number;
    /**
     * @member {number} [probesFailed] Number of failed probes.
     */
    readonly probesFailed?: number;
}
/**
 * @interface
 * An interface representing AzureReachabilityReportLocation.
 * Parameters that define a geographic location.
 *
 */
export interface AzureReachabilityReportLocation {
    /**
     * @member {string} country The name of the country.
     */
    country: string;
    /**
     * @member {string} [state] The name of the state.
     */
    state?: string;
    /**
     * @member {string} [city] The name of the city or town.
     */
    city?: string;
}
/**
 * @interface
 * An interface representing AzureReachabilityReportParameters.
 * Geographic and time constraints for Azure reachability report.
 *
 */
export interface AzureReachabilityReportParameters {
    /**
     * @member {AzureReachabilityReportLocation} providerLocation
     */
    providerLocation: AzureReachabilityReportLocation;
    /**
     * @member {string[]} [providers] List of Internet service providers.
     */
    providers?: string[];
    /**
     * @member {string[]} [azureLocations] Optional Azure regions to scope the
     * query to.
     */
    azureLocations?: string[];
    /**
     * @member {Date} startTime The start time for the Azure reachability report.
     */
    startTime: Date;
    /**
     * @member {Date} endTime The end time for the Azure reachability report.
     */
    endTime: Date;
}
/**
 * @interface
 * An interface representing AzureReachabilityReportLatencyInfo.
 * Details on latency for a time series.
 *
 */
export interface AzureReachabilityReportLatencyInfo {
    /**
     * @member {Date} [timeStamp] The time stamp.
     */
    timeStamp?: Date;
    /**
     * @member {number} [score] The relative latency score between 1 and 100,
     * higher values indicating a faster connection.
     */
    score?: number;
}
/**
 * @interface
 * An interface representing AzureReachabilityReportItem.
 * Azure reachability report details for a given provider location.
 *
 */
export interface AzureReachabilityReportItem {
    /**
     * @member {string} [provider] The Internet service provider.
     */
    provider?: string;
    /**
     * @member {string} [azureLocation] The Azure region.
     */
    azureLocation?: string;
    /**
     * @member {AzureReachabilityReportLatencyInfo[]} [latencies] List of latency
     * details for each of the time series.
     */
    latencies?: AzureReachabilityReportLatencyInfo[];
}
/**
 * @interface
 * An interface representing AzureReachabilityReport.
 * Azure reachability report details.
 *
 */
export interface AzureReachabilityReport {
    /**
     * @member {string} aggregationLevel The aggregation level of Azure
     * reachability report. Can be Country, State or City.
     */
    aggregationLevel: string;
    /**
     * @member {AzureReachabilityReportLocation} providerLocation
     */
    providerLocation: AzureReachabilityReportLocation;
    /**
     * @member {AzureReachabilityReportItem[]} reachabilityReport List of Azure
     * reachability report items.
     */
    reachabilityReport: AzureReachabilityReportItem[];
}
/**
 * @interface
 * An interface representing AvailableProvidersListParameters.
 * Constraints that determine the list of available Internet service providers.
 *
 */
export interface AvailableProvidersListParameters {
    /**
     * @member {string[]} [azureLocations] A list of Azure regions.
     */
    azureLocations?: string[];
    /**
     * @member {string} [country] The country for available providers list.
     */
    country?: string;
    /**
     * @member {string} [state] The state for available providers list.
     */
    state?: string;
    /**
     * @member {string} [city] The city or town for available providers list.
     */
    city?: string;
}
/**
 * @interface
 * An interface representing AvailableProvidersListCity.
 * City or town details.
 *
 */
export interface AvailableProvidersListCity {
    /**
     * @member {string} [cityName] The city or town name.
     */
    cityName?: string;
    /**
     * @member {string[]} [providers] A list of Internet service providers.
     */
    providers?: string[];
}
/**
 * @interface
 * An interface representing AvailableProvidersListState.
 * State details.
 *
 */
export interface AvailableProvidersListState {
    /**
     * @member {string} [stateName] The state name.
     */
    stateName?: string;
    /**
     * @member {string[]} [providers] A list of Internet service providers.
     */
    providers?: string[];
    /**
     * @member {AvailableProvidersListCity[]} [cities] List of available cities
     * or towns in the state.
     */
    cities?: AvailableProvidersListCity[];
}
/**
 * @interface
 * An interface representing AvailableProvidersListCountry.
 * Country details.
 *
 */
export interface AvailableProvidersListCountry {
    /**
     * @member {string} [countryName] The country name.
     */
    countryName?: string;
    /**
     * @member {string[]} [providers] A list of Internet service providers.
     */
    providers?: string[];
    /**
     * @member {AvailableProvidersListState[]} [states] List of available states
     * in the country.
     */
    states?: AvailableProvidersListState[];
}
/**
 * @interface
 * An interface representing AvailableProvidersList.
 * List of available countries with details.
 *
 */
export interface AvailableProvidersList {
    /**
     * @member {AvailableProvidersListCountry[]} countries List of available
     * countries.
     */
    countries: AvailableProvidersListCountry[];
}
/**
 * @interface
 * An interface representing ConnectionMonitorSource.
 * Describes the source of connection monitor.
 *
 */
export interface ConnectionMonitorSource {
    /**
     * @member {string} resourceId The ID of the resource used as the source by
     * connection monitor.
     */
    resourceId: string;
    /**
     * @member {number} [port] The source port used by connection monitor.
     */
    port?: number;
}
/**
 * @interface
 * An interface representing ConnectionMonitorDestination.
 * Describes the destination of connection monitor.
 *
 */
export interface ConnectionMonitorDestination {
    /**
     * @member {string} [resourceId] The ID of the resource used as the
     * destination by connection monitor.
     */
    resourceId?: string;
    /**
     * @member {string} [address] Address of the connection monitor destination
     * (IP or domain name).
     */
    address?: string;
    /**
     * @member {number} [port] The destination port used by connection monitor.
     */
    port?: number;
}
/**
 * @interface
 * An interface representing ConnectionMonitorParameters.
 * Parameters that define the operation to create a connection monitor.
 *
 */
export interface ConnectionMonitorParameters {
    /**
     * @member {ConnectionMonitorSource} source
     */
    source: ConnectionMonitorSource;
    /**
     * @member {ConnectionMonitorDestination} destination
     */
    destination: ConnectionMonitorDestination;
    /**
     * @member {boolean} [autoStart] Determines if the connection monitor will
     * start automatically once created. Default value: true .
     */
    autoStart?: boolean;
    /**
     * @member {number} [monitoringIntervalInSeconds] Monitoring interval in
     * seconds. Default value: 60 .
     */
    monitoringIntervalInSeconds?: number;
}
/**
 * @interface
 * An interface representing ConnectionMonitor.
 * Parameters that define the operation to create a connection monitor.
 *
 */
export interface ConnectionMonitor {
    /**
     * @member {string} [location] Connection monitor location.
     */
    location?: string;
    /**
     * @member {{ [propertyName: string]: string }} [tags] Connection monitor
     * tags.
     */
    tags?: {
        [propertyName: string]: string;
    };
    /**
     * @member {ConnectionMonitorSource} source
     */
    source: ConnectionMonitorSource;
    /**
     * @member {ConnectionMonitorDestination} destination
     */
    destination: ConnectionMonitorDestination;
    /**
     * @member {boolean} [autoStart] Determines if the connection monitor will
     * start automatically once created. Default value: true .
     */
    autoStart?: boolean;
    /**
     * @member {number} [monitoringIntervalInSeconds] Monitoring interval in
     * seconds. Default value: 60 .
     */
    monitoringIntervalInSeconds?: number;
}
/**
 * @interface
 * An interface representing ConnectionMonitorResult.
 * Information about the connection monitor.
 *
 * @extends BaseResource
 */
export interface ConnectionMonitorResult extends BaseResource {
    /**
     * @member {string} [name] Name of the connection monitor.
     */
    readonly name?: string;
    /**
     * @member {string} [id] ID of the connection monitor.
     */
    readonly id?: string;
    /**
     * @member {string} [etag] Default value: 'A unique read-only string that
     * changes whenever the resource is updated.' .
     */
    etag?: string;
    /**
     * @member {string} [type] Connection monitor type.
     */
    readonly type?: string;
    /**
     * @member {string} [location] Connection monitor location.
     */
    location?: string;
    /**
     * @member {{ [propertyName: string]: string }} [tags] Connection monitor
     * tags.
     */
    tags?: {
        [propertyName: string]: string;
    };
    /**
     * @member {ConnectionMonitorSource} source
     */
    source: ConnectionMonitorSource;
    /**
     * @member {ConnectionMonitorDestination} destination
     */
    destination: ConnectionMonitorDestination;
    /**
     * @member {boolean} [autoStart] Determines if the connection monitor will
     * start automatically once created. Default value: true .
     */
    autoStart?: boolean;
    /**
     * @member {number} [monitoringIntervalInSeconds] Monitoring interval in
     * seconds. Default value: 60 .
     */
    monitoringIntervalInSeconds?: number;
    /**
     * @member {ProvisioningState} [provisioningState] The provisioning state of
     * the connection monitor. Possible values include: 'Succeeded', 'Updating',
     * 'Deleting', 'Failed'
     */
    provisioningState?: ProvisioningState;
    /**
     * @member {Date} [startTime] The date and time when the connection monitor
     * was started.
     */
    startTime?: Date;
    /**
     * @member {string} [monitoringStatus] The monitoring status of the
     * connection monitor.
     */
    monitoringStatus?: string;
}
/**
 * @interface
 * An interface representing ConnectionStateSnapshot.
 * Connection state snapshot.
 *
 */
export interface ConnectionStateSnapshot {
    /**
     * @member {ConnectionState} [connectionState] The connection state. Possible
     * values include: 'Reachable', 'Unreachable', 'Unknown'
     */
    connectionState?: ConnectionState;
    /**
     * @member {Date} [startTime] The start time of the connection snapshot.
     */
    startTime?: Date;
    /**
     * @member {Date} [endTime] The end time of the connection snapshot.
     */
    endTime?: Date;
    /**
     * @member {EvaluationState} [evaluationState] Connectivity analysis
     * evaluation state. Possible values include: 'NotStarted', 'InProgress',
     * 'Completed'
     */
    evaluationState?: EvaluationState;
    /**
     * @member {ConnectivityHop[]} [hops] List of hops between the source and the
     * destination.
     */
    readonly hops?: ConnectivityHop[];
}
/**
 * @interface
 * An interface representing ConnectionMonitorQueryResult.
 * List of connection states snaphots.
 *
 */
export interface ConnectionMonitorQueryResult {
    /**
     * @member {ConnectionStateSnapshot[]} [states] Information about connection
     * states.
     */
    states?: ConnectionStateSnapshot[];
}
/**
 * @interface
 * An interface representing OperationDisplay.
 * Display metadata associated with the operation.
 *
 */
export interface OperationDisplay {
    /**
     * @member {string} [provider] Service provider: Microsoft Network.
     */
    provider?: string;
    /**
     * @member {string} [resource] Resource on which the operation is performed.
     */
    resource?: string;
    /**
     * @member {string} [operation] Type of the operation: get, read, delete,
     * etc.
     */
    operation?: string;
    /**
     * @member {string} [description] Description of the operation.
     */
    description?: string;
}
/**
 * @interface
 * An interface representing Availability.
 * Availability of the metric.
 *
 */
export interface Availability {
    /**
     * @member {string} [timeGrain] The time grain of the availability.
     */
    timeGrain?: string;
    /**
     * @member {string} [retention] The retention of the availability.
     */
    retention?: string;
    /**
     * @member {string} [blobDuration] Duration of the availability blob.
     */
    blobDuration?: string;
}
/**
 * @interface
 * An interface representing Dimension.
 * Dimension of the metric.
 *
 */
export interface Dimension {
    /**
     * @member {string} [name] The name of the dimension.
     */
    name?: string;
    /**
     * @member {string} [displayName] The display name of the dimension.
     */
    displayName?: string;
    /**
     * @member {string} [internalName] The internal name of the dimension.
     */
    internalName?: string;
}
/**
 * @interface
 * An interface representing MetricSpecification.
 * Description of metrics specification.
 *
 */
export interface MetricSpecification {
    /**
     * @member {string} [name] The name of the metric.
     */
    name?: string;
    /**
     * @member {string} [displayName] The display name of the metric.
     */
    displayName?: string;
    /**
     * @member {string} [displayDescription] The description of the metric.
     */
    displayDescription?: string;
    /**
     * @member {string} [unit] Units the metric to be displayed in.
     */
    unit?: string;
    /**
     * @member {string} [aggregationType] The aggregation type.
     */
    aggregationType?: string;
    /**
     * @member {Availability[]} [availabilities] List of availability.
     */
    availabilities?: Availability[];
    /**
     * @member {boolean} [enableRegionalMdmAccount] Whether regional MDM account
     * enabled.
     */
    enableRegionalMdmAccount?: boolean;
    /**
     * @member {boolean} [fillGapWithZero] Whether gaps would be filled with
     * zeros.
     */
    fillGapWithZero?: boolean;
    /**
     * @member {string} [metricFilterPattern] Pattern for the filter of the
     * metric.
     */
    metricFilterPattern?: string;
    /**
     * @member {Dimension[]} [dimensions] List of dimensions.
     */
    dimensions?: Dimension[];
    /**
     * @member {boolean} [isInternal] Whether the metric is internal.
     */
    isInternal?: boolean;
    /**
     * @member {string} [sourceMdmAccount] The source MDM account.
     */
    sourceMdmAccount?: string;
    /**
     * @member {string} [sourceMdmNamespace] The source MDM namespace.
     */
    sourceMdmNamespace?: string;
    /**
     * @member {string} [resourceIdDimensionNameOverride] The resource Id
     * dimension name override.
     */
    resourceIdDimensionNameOverride?: string;
}
/**
 * @interface
 * An interface representing LogSpecification.
 * Description of logging specification.
 *
 */
export interface LogSpecification {
    /**
     * @member {string} [name] The name of the specification.
     */
    name?: string;
    /**
     * @member {string} [displayName] The display name of the specification.
     */
    displayName?: string;
    /**
     * @member {string} [blobDuration] Duration of the blob.
     */
    blobDuration?: string;
}
/**
 * @interface
 * An interface representing OperationPropertiesFormatServiceSpecification.
 * Specification of the service.
 *
 */
export interface OperationPropertiesFormatServiceSpecification {
    /**
     * @member {MetricSpecification[]} [metricSpecifications] Operation service
     * specification.
     */
    metricSpecifications?: MetricSpecification[];
    /**
     * @member {LogSpecification[]} [logSpecifications] Operation log
     * specification.
     */
    logSpecifications?: LogSpecification[];
}
/**
 * @interface
 * An interface representing Operation.
 * Network REST API operation definition.
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
     * @member {string} [origin] Origin of the operation.
     */
    origin?: string;
    /**
     * @member {OperationPropertiesFormatServiceSpecification}
     * [serviceSpecification] Specification of the service.
     */
    serviceSpecification?: OperationPropertiesFormatServiceSpecification;
}
/**
 * @interface
 * An interface representing RouteFilterRule.
 * Route Filter Rule Resource
 *
 * @extends SubResource
 */
export interface RouteFilterRule extends SubResource {
    /**
     * @member {Access} access The access type of the rule. Valid values are:
     * 'Allow', 'Deny'. Possible values include: 'Allow', 'Deny'
     */
    access: Access;
    /**
     * @member {string[]} communities The collection for bgp community values to
     * filter on. e.g. ['12076:5010','12076:5020']
     */
    communities: string[];
    /**
     * @member {string} [provisioningState] The provisioning state of the
     * resource. Possible values are: 'Updating', 'Deleting', 'Succeeded' and
     * 'Failed'.
     */
    readonly provisioningState?: string;
    /**
     * @member {string} [name] The name of the resource that is unique within a
     * resource group. This name can be used to access the resource.
     */
    name?: string;
    /**
     * @member {string} [location] Resource location.
     */
    location?: string;
    /**
     * @member {string} [etag] A unique read-only string that changes whenever
     * the resource is updated.
     */
    readonly etag?: string;
    /**
     * @member {{ [propertyName: string]: string }} [tags] Resource tags.
     */
    tags?: {
        [propertyName: string]: string;
    };
}
/**
 * @interface
 * An interface representing PatchRouteFilterRule.
 * Route Filter Rule Resource
 *
 * @extends SubResource
 */
export interface PatchRouteFilterRule extends SubResource {
    /**
     * @member {Access} access The access type of the rule. Valid values are:
     * 'Allow', 'Deny'. Possible values include: 'Allow', 'Deny'
     */
    access: Access;
    /**
     * @member {string[]} communities The collection for bgp community values to
     * filter on. e.g. ['12076:5010','12076:5020']
     */
    communities: string[];
    /**
     * @member {string} [provisioningState] The provisioning state of the
     * resource. Possible values are: 'Updating', 'Deleting', 'Succeeded' and
     * 'Failed'.
     */
    readonly provisioningState?: string;
    /**
     * @member {string} [name] The name of the resource that is unique within a
     * resource group. This name can be used to access the resource.
     */
    readonly name?: string;
    /**
     * @member {string} [etag] A unique read-only string that changes whenever
     * the resource is updated.
     */
    readonly etag?: string;
    /**
     * @member {{ [propertyName: string]: string }} [tags] Resource tags.
     */
    tags?: {
        [propertyName: string]: string;
    };
}
/**
 * @interface
 * An interface representing ExpressRouteCircuitPeeringConfig.
 * Specifies the peering configuration.
 *
 */
export interface ExpressRouteCircuitPeeringConfig {
    /**
     * @member {string[]} [advertisedPublicPrefixes] The reference of
     * AdvertisedPublicPrefixes.
     */
    advertisedPublicPrefixes?: string[];
    /**
     * @member {string[]} [advertisedCommunities] The communities of bgp peering.
     * Spepcified for microsoft peering
     */
    advertisedCommunities?: string[];
    /**
     * @member {ExpressRouteCircuitPeeringAdvertisedPublicPrefixState}
     * [advertisedPublicPrefixesState] AdvertisedPublicPrefixState of the Peering
     * resource. Possible values are 'NotConfigured', 'Configuring',
     * 'Configured', and 'ValidationNeeded'. Possible values include:
     * 'NotConfigured', 'Configuring', 'Configured', 'ValidationNeeded'
     */
    advertisedPublicPrefixesState?: ExpressRouteCircuitPeeringAdvertisedPublicPrefixState;
    /**
     * @member {number} [legacyMode] The legacy mode of the peering.
     */
    legacyMode?: number;
    /**
     * @member {number} [customerASN] The CustomerASN of the peering.
     */
    customerASN?: number;
    /**
     * @member {string} [routingRegistryName] The RoutingRegistryName of the
     * configuration.
     */
    routingRegistryName?: string;
}
/**
 * @interface
 * An interface representing ExpressRouteCircuitStats.
 * Contains stats associated with the peering.
 *
 */
export interface ExpressRouteCircuitStats {
    /**
     * @member {number} [primarybytesIn] Gets BytesIn of the peering.
     */
    primarybytesIn?: number;
    /**
     * @member {number} [primarybytesOut] Gets BytesOut of the peering.
     */
    primarybytesOut?: number;
    /**
     * @member {number} [secondarybytesIn] Gets BytesIn of the peering.
     */
    secondarybytesIn?: number;
    /**
     * @member {number} [secondarybytesOut] Gets BytesOut of the peering.
     */
    secondarybytesOut?: number;
}
/**
 * @interface
 * An interface representing RouteFilter.
 * Route Filter Resource.
 *
 * @extends Resource
 */
export interface RouteFilter extends Resource {
    /**
     * @member {RouteFilterRule[]} [rules] Collection of RouteFilterRules
     * contained within a route filter.
     */
    rules?: RouteFilterRule[];
    /**
     * @member {ExpressRouteCircuitPeering[]} [peerings] A collection of
     * references to express route circuit peerings.
     */
    peerings?: ExpressRouteCircuitPeering[];
    /**
     * @member {string} [provisioningState] The provisioning state of the
     * resource. Possible values are: 'Updating', 'Deleting', 'Succeeded' and
     * 'Failed'.
     */
    readonly provisioningState?: string;
    /**
     * @member {string} [etag] Gets a unique read-only string that changes
     * whenever the resource is updated.
     */
    readonly etag?: string;
}
/**
 * @interface
 * An interface representing Ipv6ExpressRouteCircuitPeeringConfig.
 * Contains IPv6 peering config.
 *
 */
export interface Ipv6ExpressRouteCircuitPeeringConfig {
    /**
     * @member {string} [primaryPeerAddressPrefix] The primary address prefix.
     */
    primaryPeerAddressPrefix?: string;
    /**
     * @member {string} [secondaryPeerAddressPrefix] The secondary address
     * prefix.
     */
    secondaryPeerAddressPrefix?: string;
    /**
     * @member {ExpressRouteCircuitPeeringConfig} [microsoftPeeringConfig] The
     * Microsoft peering configuration.
     */
    microsoftPeeringConfig?: ExpressRouteCircuitPeeringConfig;
    /**
     * @member {RouteFilter} [routeFilter] The reference of the RouteFilter
     * resource.
     */
    routeFilter?: RouteFilter;
    /**
     * @member {ExpressRouteCircuitPeeringState} [state] The state of peering.
     * Possible values are: 'Disabled' and 'Enabled'. Possible values include:
     * 'Disabled', 'Enabled'
     */
    state?: ExpressRouteCircuitPeeringState;
}
/**
 * @interface
 * An interface representing ExpressRouteCircuitPeering.
 * Peering in an ExpressRouteCircuit resource.
 *
 * @extends SubResource
 */
export interface ExpressRouteCircuitPeering extends SubResource {
    /**
     * @member {ExpressRouteCircuitPeeringType} [peeringType] The PeeringType.
     * Possible values are: 'AzurePublicPeering', 'AzurePrivatePeering', and
     * 'MicrosoftPeering'. Possible values include: 'AzurePublicPeering',
     * 'AzurePrivatePeering', 'MicrosoftPeering'
     */
    peeringType?: ExpressRouteCircuitPeeringType;
    /**
     * @member {ExpressRouteCircuitPeeringState} [state] The state of peering.
     * Possible values are: 'Disabled' and 'Enabled'. Possible values include:
     * 'Disabled', 'Enabled'
     */
    state?: ExpressRouteCircuitPeeringState;
    /**
     * @member {number} [azureASN] The Azure ASN.
     */
    azureASN?: number;
    /**
     * @member {number} [peerASN] The peer ASN.
     */
    peerASN?: number;
    /**
     * @member {string} [primaryPeerAddressPrefix] The primary address prefix.
     */
    primaryPeerAddressPrefix?: string;
    /**
     * @member {string} [secondaryPeerAddressPrefix] The secondary address
     * prefix.
     */
    secondaryPeerAddressPrefix?: string;
    /**
     * @member {string} [primaryAzurePort] The primary port.
     */
    primaryAzurePort?: string;
    /**
     * @member {string} [secondaryAzurePort] The secondary port.
     */
    secondaryAzurePort?: string;
    /**
     * @member {string} [sharedKey] The shared key.
     */
    sharedKey?: string;
    /**
     * @member {number} [vlanId] The VLAN ID.
     */
    vlanId?: number;
    /**
     * @member {ExpressRouteCircuitPeeringConfig} [microsoftPeeringConfig] The
     * Microsoft peering configuration.
     */
    microsoftPeeringConfig?: ExpressRouteCircuitPeeringConfig;
    /**
     * @member {ExpressRouteCircuitStats} [stats] Gets peering stats.
     */
    stats?: ExpressRouteCircuitStats;
    /**
     * @member {string} [provisioningState] Gets the provisioning state of the
     * public IP resource. Possible values are: 'Updating', 'Deleting', and
     * 'Failed'.
     */
    provisioningState?: string;
    /**
     * @member {string} [gatewayManagerEtag] The GatewayManager Etag.
     */
    gatewayManagerEtag?: string;
    /**
     * @member {string} [lastModifiedBy] Gets whether the provider or the
     * customer last modified the peering.
     */
    lastModifiedBy?: string;
    /**
     * @member {RouteFilter} [routeFilter] The reference of the RouteFilter
     * resource.
     */
    routeFilter?: RouteFilter;
    /**
     * @member {Ipv6ExpressRouteCircuitPeeringConfig} [ipv6PeeringConfig] The
     * IPv6 peering configuration.
     */
    ipv6PeeringConfig?: Ipv6ExpressRouteCircuitPeeringConfig;
    /**
     * @member {string} [name] Gets name of the resource that is unique within a
     * resource group. This name can be used to access the resource.
     */
    name?: string;
    /**
     * @member {string} [etag] A unique read-only string that changes whenever
     * the resource is updated.
     */
    readonly etag?: string;
}
/**
 * @interface
 * An interface representing PatchRouteFilter.
 * Route Filter Resource.
 *
 * @extends SubResource
 */
export interface PatchRouteFilter extends SubResource {
    /**
     * @member {RouteFilterRule[]} [rules] Collection of RouteFilterRules
     * contained within a route filter.
     */
    rules?: RouteFilterRule[];
    /**
     * @member {ExpressRouteCircuitPeering[]} [peerings] A collection of
     * references to express route circuit peerings.
     */
    peerings?: ExpressRouteCircuitPeering[];
    /**
     * @member {string} [provisioningState] The provisioning state of the
     * resource. Possible values are: 'Updating', 'Deleting', 'Succeeded' and
     * 'Failed'.
     */
    readonly provisioningState?: string;
    /**
     * @member {string} [name] The name of the resource that is unique within a
     * resource group. This name can be used to access the resource.
     */
    readonly name?: string;
    /**
     * @member {string} [etag] A unique read-only string that changes whenever
     * the resource is updated.
     */
    readonly etag?: string;
    /**
     * @member {string} [type] Resource type.
     */
    readonly type?: string;
    /**
     * @member {{ [propertyName: string]: string }} [tags] Resource tags.
     */
    tags?: {
        [propertyName: string]: string;
    };
}
/**
 * @interface
 * An interface representing UsageName.
 * The usage names.
 *
 */
export interface UsageName {
    /**
     * @member {string} [value] A string describing the resource name.
     */
    value?: string;
    /**
     * @member {string} [localizedValue] A localized string describing the
     * resource name.
     */
    localizedValue?: string;
}
/**
 * @interface
 * An interface representing Usage.
 * Describes network resource usage.
 *
 */
export interface Usage {
    /**
     * @member {string} [id] Resource identifier.
     */
    readonly id?: string;
    /**
     * @member {number} currentValue The current value of the usage.
     */
    currentValue: number;
    /**
     * @member {number} limit The limit of usage.
     */
    limit: number;
    /**
     * @member {UsageName} name The name of the type of usage.
     */
    name: UsageName;
}
/**
 * @interface
 * An interface representing AddressSpace.
 * AddressSpace contains an array of IP address ranges that can be used by
 * subnets of the virtual network.
 *
 */
export interface AddressSpace {
    /**
     * @member {string[]} [addressPrefixes] A list of address blocks reserved for
     * this virtual network in CIDR notation.
     */
    addressPrefixes?: string[];
}
/**
 * @interface
 * An interface representing VirtualNetworkPeering.
 * Peerings in a virtual network resource.
 *
 * @extends SubResource
 */
export interface VirtualNetworkPeering extends SubResource {
    /**
     * @member {boolean} [allowVirtualNetworkAccess] Whether the VMs in the
     * linked virtual network space would be able to access all the VMs in local
     * Virtual network space.
     */
    allowVirtualNetworkAccess?: boolean;
    /**
     * @member {boolean} [allowForwardedTraffic] Whether the forwarded traffic
     * from the VMs in the remote virtual network will be allowed/disallowed.
     */
    allowForwardedTraffic?: boolean;
    /**
     * @member {boolean} [allowGatewayTransit] If gateway links can be used in
     * remote virtual networking to link to this virtual network.
     */
    allowGatewayTransit?: boolean;
    /**
     * @member {boolean} [useRemoteGateways] If remote gateways can be used on
     * this virtual network. If the flag is set to true, and allowGatewayTransit
     * on remote peering is also true, virtual network will use gateways of
     * remote virtual network for transit. Only one peering can have this flag
     * set to true. This flag cannot be set if virtual network already has a
     * gateway.
     */
    useRemoteGateways?: boolean;
    /**
     * @member {SubResource} [remoteVirtualNetwork] The reference of the remote
     * virtual network. The remote virtual network can be in the same or
     * different region (preview). See here to register for the preview and learn
     * more
     * (https://docs.microsoft.com/en-us/azure/virtual-network/virtual-network-create-peering).
     */
    remoteVirtualNetwork?: SubResource;
    /**
     * @member {AddressSpace} [remoteAddressSpace] The reference of the remote
     * virtual network address space.
     */
    remoteAddressSpace?: AddressSpace;
    /**
     * @member {VirtualNetworkPeeringState} [peeringState] The status of the
     * virtual network peering. Possible values are 'Initiated', 'Connected', and
     * 'Disconnected'. Possible values include: 'Initiated', 'Connected',
     * 'Disconnected'
     */
    peeringState?: VirtualNetworkPeeringState;
    /**
     * @member {string} [provisioningState] The provisioning state of the
     * resource.
     */
    provisioningState?: string;
    /**
     * @member {string} [name] The name of the resource that is unique within a
     * resource group. This name can be used to access the resource.
     */
    name?: string;
    /**
     * @member {string} [etag] A unique read-only string that changes whenever
     * the resource is updated.
     */
    etag?: string;
}
/**
 * @interface
 * An interface representing DhcpOptions.
 * DhcpOptions contains an array of DNS servers available to VMs deployed in
 * the virtual network. Standard DHCP option for a subnet overrides VNET DHCP
 * options.
 *
 */
export interface DhcpOptions {
    /**
     * @member {string[]} [dnsServers] The list of DNS servers IP addresses.
     */
    dnsServers?: string[];
}
/**
 * @interface
 * An interface representing VirtualNetwork.
 * Virtual Network resource.
 *
 * @extends Resource
 */
export interface VirtualNetwork extends Resource {
    /**
     * @member {AddressSpace} [addressSpace] The AddressSpace that contains an
     * array of IP address ranges that can be used by subnets.
     */
    addressSpace?: AddressSpace;
    /**
     * @member {DhcpOptions} [dhcpOptions] The dhcpOptions that contains an array
     * of DNS servers available to VMs deployed in the virtual network.
     */
    dhcpOptions?: DhcpOptions;
    /**
     * @member {Subnet[]} [subnets] A list of subnets in a Virtual Network.
     */
    subnets?: Subnet[];
    /**
     * @member {VirtualNetworkPeering[]} [virtualNetworkPeerings] A list of
     * peerings in a Virtual Network.
     */
    virtualNetworkPeerings?: VirtualNetworkPeering[];
    /**
     * @member {string} [resourceGuid] The resourceGuid property of the Virtual
     * Network resource.
     */
    resourceGuid?: string;
    /**
     * @member {string} [provisioningState] The provisioning state of the
     * PublicIP resource. Possible values are: 'Updating', 'Deleting', and
     * 'Failed'.
     */
    provisioningState?: string;
    /**
     * @member {boolean} [enableDdosProtection] Indicates if DDoS protection is
     * enabled for all the protected resources in a Virtual Network.
     */
    enableDdosProtection?: boolean;
    /**
     * @member {boolean} [enableVmProtection] Indicates if Vm protection is
     * enabled for all the subnets in a Virtual Network.
     */
    enableVmProtection?: boolean;
    /**
     * @member {string} [etag] Gets a unique read-only string that changes
     * whenever the resource is updated.
     */
    etag?: string;
}
/**
 * @interface
 * An interface representing IPAddressAvailabilityResult.
 * Response for CheckIPAddressAvailability API service call
 *
 */
export interface IPAddressAvailabilityResult {
    /**
     * @member {boolean} [available] Private IP address availability.
     */
    available?: boolean;
    /**
     * @member {string[]} [availableIPAddresses] Contains other available private
     * IP addresses if the asked for address is taken.
     */
    availableIPAddresses?: string[];
}
/**
 * @interface
 * An interface representing VirtualNetworkUsageName.
 * Usage strings container.
 *
 */
export interface VirtualNetworkUsageName {
    /**
     * @member {string} [localizedValue] Localized subnet size and usage string.
     */
    readonly localizedValue?: string;
    /**
     * @member {string} [value] Subnet size and usage string.
     */
    readonly value?: string;
}
/**
 * @interface
 * An interface representing VirtualNetworkUsage.
 * Usage details for subnet.
 *
 */
export interface VirtualNetworkUsage {
    /**
     * @member {number} [currentValue] Indicates number of IPs used from the
     * Subnet.
     */
    readonly currentValue?: number;
    /**
     * @member {string} [id] Subnet identifier.
     */
    readonly id?: string;
    /**
     * @member {number} [limit] Indicates the size of the subnet.
     */
    readonly limit?: number;
    /**
     * @member {VirtualNetworkUsageName} [name] The name containing common and
     * localized value for usage.
     */
    readonly name?: VirtualNetworkUsageName;
    /**
     * @member {string} [unit] Usage units. Returns 'Count'
     */
    readonly unit?: string;
}
/**
 * @interface
 * An interface representing VirtualNetworkGatewayIPConfiguration.
 * IP configuration for virtual network gateway
 *
 * @extends SubResource
 */
export interface VirtualNetworkGatewayIPConfiguration extends SubResource {
    /**
     * @member {IPAllocationMethod} [privateIPAllocationMethod] The private IP
     * allocation method. Possible values are: 'Static' and 'Dynamic'. Possible
     * values include: 'Static', 'Dynamic'
     */
    privateIPAllocationMethod?: IPAllocationMethod;
    /**
     * @member {SubResource} [subnet] The reference of the subnet resource.
     */
    subnet?: SubResource;
    /**
     * @member {SubResource} [publicIPAddress] The reference of the public IP
     * resource.
     */
    publicIPAddress?: SubResource;
    /**
     * @member {string} [provisioningState] The provisioning state of the public
     * IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
     */
    readonly provisioningState?: string;
    /**
     * @member {string} [name] The name of the resource that is unique within a
     * resource group. This name can be used to access the resource.
     */
    name?: string;
    /**
     * @member {string} [etag] A unique read-only string that changes whenever
     * the resource is updated.
     */
    etag?: string;
}
/**
 * @interface
 * An interface representing VirtualNetworkGatewaySku.
 * VirtualNetworkGatewaySku details
 *
 */
export interface VirtualNetworkGatewaySku {
    /**
     * @member {VirtualNetworkGatewaySkuName} [name] Gateway SKU name. Possible
     * values include: 'Basic', 'HighPerformance', 'Standard',
     * 'UltraPerformance', 'VpnGw1', 'VpnGw2', 'VpnGw3'
     */
    name?: VirtualNetworkGatewaySkuName;
    /**
     * @member {VirtualNetworkGatewaySkuTier} [tier] Gateway SKU tier. Possible
     * values include: 'Basic', 'HighPerformance', 'Standard',
     * 'UltraPerformance', 'VpnGw1', 'VpnGw2', 'VpnGw3'
     */
    tier?: VirtualNetworkGatewaySkuTier;
    /**
     * @member {number} [capacity] The capacity.
     */
    capacity?: number;
}
/**
 * @interface
 * An interface representing VpnClientRootCertificate.
 * VPN client root certificate of virtual network gateway
 *
 * @extends SubResource
 */
export interface VpnClientRootCertificate extends SubResource {
    /**
     * @member {string} publicCertData The certificate public data.
     */
    publicCertData: string;
    /**
     * @member {string} [provisioningState] The provisioning state of the VPN
     * client root certificate resource. Possible values are: 'Updating',
     * 'Deleting', and 'Failed'.
     */
    readonly provisioningState?: string;
    /**
     * @member {string} [name] The name of the resource that is unique within a
     * resource group. This name can be used to access the resource.
     */
    name?: string;
    /**
     * @member {string} [etag] A unique read-only string that changes whenever
     * the resource is updated.
     */
    etag?: string;
}
/**
 * @interface
 * An interface representing VpnClientRevokedCertificate.
 * VPN client revoked certificate of virtual network gateway.
 *
 * @extends SubResource
 */
export interface VpnClientRevokedCertificate extends SubResource {
    /**
     * @member {string} [thumbprint] The revoked VPN client certificate
     * thumbprint.
     */
    thumbprint?: string;
    /**
     * @member {string} [provisioningState] The provisioning state of the VPN
     * client revoked certificate resource. Possible values are: 'Updating',
     * 'Deleting', and 'Failed'.
     */
    readonly provisioningState?: string;
    /**
     * @member {string} [name] The name of the resource that is unique within a
     * resource group. This name can be used to access the resource.
     */
    name?: string;
    /**
     * @member {string} [etag] A unique read-only string that changes whenever
     * the resource is updated.
     */
    etag?: string;
}
/**
 * @interface
 * An interface representing VpnClientConfiguration.
 * VpnClientConfiguration for P2S client.
 *
 */
export interface VpnClientConfiguration {
    /**
     * @member {AddressSpace} [vpnClientAddressPool] The reference of the address
     * space resource which represents Address space for P2S VpnClient.
     */
    vpnClientAddressPool?: AddressSpace;
    /**
     * @member {VpnClientRootCertificate[]} [vpnClientRootCertificates]
     * VpnClientRootCertificate for virtual network gateway.
     */
    vpnClientRootCertificates?: VpnClientRootCertificate[];
    /**
     * @member {VpnClientRevokedCertificate[]} [vpnClientRevokedCertificates]
     * VpnClientRevokedCertificate for Virtual network gateway.
     */
    vpnClientRevokedCertificates?: VpnClientRevokedCertificate[];
    /**
     * @member {VpnClientProtocol[]} [vpnClientProtocols] VpnClientProtocols for
     * Virtual network gateway.
     */
    vpnClientProtocols?: VpnClientProtocol[];
    /**
     * @member {string} [radiusServerAddress] The radius server address property
     * of the VirtualNetworkGateway resource for vpn client connection.
     */
    radiusServerAddress?: string;
    /**
     * @member {string} [radiusServerSecret] The radius secret property of the
     * VirtualNetworkGateway resource for vpn client connection.
     */
    radiusServerSecret?: string;
}
/**
 * @interface
 * An interface representing BgpSettings.
 * BGP settings details
 *
 */
export interface BgpSettings {
    /**
     * @member {number} [asn] The BGP speaker's ASN.
     */
    asn?: number;
    /**
     * @member {string} [bgpPeeringAddress] The BGP peering address and BGP
     * identifier of this BGP speaker.
     */
    bgpPeeringAddress?: string;
    /**
     * @member {number} [peerWeight] The weight added to routes learned from this
     * BGP speaker.
     */
    peerWeight?: number;
}
/**
 * @interface
 * An interface representing BgpPeerStatus.
 * BGP peer status details
 *
 */
export interface BgpPeerStatus {
    /**
     * @member {string} [localAddress] The virtual network gateway's local
     * address
     */
    readonly localAddress?: string;
    /**
     * @member {string} [neighbor] The remote BGP peer
     */
    readonly neighbor?: string;
    /**
     * @member {number} [asn] The autonomous system number of the remote BGP peer
     */
    readonly asn?: number;
    /**
     * @member {BgpPeerState} [state] The BGP peer state. Possible values
     * include: 'Unknown', 'Stopped', 'Idle', 'Connecting', 'Connected'
     */
    readonly state?: BgpPeerState;
    /**
     * @member {string} [connectedDuration] For how long the peering has been up
     */
    readonly connectedDuration?: string;
    /**
     * @member {number} [routesReceived] The number of routes learned from this
     * peer
     */
    readonly routesReceived?: number;
    /**
     * @member {number} [messagesSent] The number of BGP messages sent
     */
    readonly messagesSent?: number;
    /**
     * @member {number} [messagesReceived] The number of BGP messages received
     */
    readonly messagesReceived?: number;
}
/**
 * @interface
 * An interface representing GatewayRoute.
 * Gateway routing details
 *
 */
export interface GatewayRoute {
    /**
     * @member {string} [localAddress] The gateway's local address
     */
    readonly localAddress?: string;
    /**
     * @member {string} [network] The route's network prefix
     */
    readonly network?: string;
    /**
     * @member {string} [nextHop] The route's next hop
     */
    readonly nextHop?: string;
    /**
     * @member {string} [sourcePeer] The peer this route was learned from
     */
    readonly sourcePeer?: string;
    /**
     * @member {string} [origin] The source this route was learned from
     */
    readonly origin?: string;
    /**
     * @member {string} [asPath] The route's AS path sequence
     */
    readonly asPath?: string;
    /**
     * @member {number} [weight] The route's weight
     */
    readonly weight?: number;
}
/**
 * @interface
 * An interface representing VirtualNetworkGateway.
 * A common class for general resource information
 *
 * @extends Resource
 */
export interface VirtualNetworkGateway extends Resource {
    /**
     * @member {VirtualNetworkGatewayIPConfiguration[]} [ipConfigurations] IP
     * configurations for virtual network gateway.
     */
    ipConfigurations?: VirtualNetworkGatewayIPConfiguration[];
    /**
     * @member {VirtualNetworkGatewayType} [gatewayType] The type of this virtual
     * network gateway. Possible values are: 'Vpn' and 'ExpressRoute'. Possible
     * values include: 'Vpn', 'ExpressRoute'
     */
    gatewayType?: VirtualNetworkGatewayType;
    /**
     * @member {VpnType} [vpnType] The type of this virtual network gateway.
     * Possible values are: 'PolicyBased' and 'RouteBased'. Possible values
     * include: 'PolicyBased', 'RouteBased'
     */
    vpnType?: VpnType;
    /**
     * @member {boolean} [enableBgp] Whether BGP is enabled for this virtual
     * network gateway or not.
     */
    enableBgp?: boolean;
    /**
     * @member {boolean} [activeActive] ActiveActive flag
     */
    activeActive?: boolean;
    /**
     * @member {SubResource} [gatewayDefaultSite] The reference of the
     * LocalNetworkGateway resource which represents local network site having
     * default routes. Assign Null value in case of removing existing default
     * site setting.
     */
    gatewayDefaultSite?: SubResource;
    /**
     * @member {VirtualNetworkGatewaySku} [sku] The reference of the
     * VirtualNetworkGatewaySku resource which represents the SKU selected for
     * Virtual network gateway.
     */
    sku?: VirtualNetworkGatewaySku;
    /**
     * @member {VpnClientConfiguration} [vpnClientConfiguration] The reference of
     * the VpnClientConfiguration resource which represents the P2S VpnClient
     * configurations.
     */
    vpnClientConfiguration?: VpnClientConfiguration;
    /**
     * @member {BgpSettings} [bgpSettings] Virtual network gateway's BGP speaker
     * settings.
     */
    bgpSettings?: BgpSettings;
    /**
     * @member {string} [resourceGuid] The resource GUID property of the
     * VirtualNetworkGateway resource.
     */
    resourceGuid?: string;
    /**
     * @member {string} [provisioningState] The provisioning state of the
     * VirtualNetworkGateway resource. Possible values are: 'Updating',
     * 'Deleting', and 'Failed'.
     */
    readonly provisioningState?: string;
    /**
     * @member {string} [etag] Gets a unique read-only string that changes
     * whenever the resource is updated.
     */
    etag?: string;
}
/**
 * @interface
 * An interface representing VpnClientParameters.
 * Vpn Client Parameters for package generation
 *
 */
export interface VpnClientParameters {
    /**
     * @member {ProcessorArchitecture} [processorArchitecture] VPN client
     * Processor Architecture. Possible values are: 'AMD64' and 'X86'. Possible
     * values include: 'Amd64', 'X86'
     */
    processorArchitecture?: ProcessorArchitecture;
    /**
     * @member {AuthenticationMethod} [authenticationMethod] VPN client
     * Authentication Method. Possible values are: 'EAPTLS' and 'EAPMSCHAPv2'.
     * Possible values include: 'EAPTLS', 'EAPMSCHAPv2'
     */
    authenticationMethod?: AuthenticationMethod;
    /**
     * @member {string} [radiusServerAuthCertificate] The public certificate data
     * for the radius server authentication certificate as a Base-64 encoded
     * string. Required only if external radius authentication has been
     * configured with EAPTLS authentication.
     */
    radiusServerAuthCertificate?: string;
    /**
     * @member {string[]} [clientRootCertificates] A list of client root
     * certificates public certificate data encoded as Base-64 strings. Optional
     * parameter for external radius based authentication with EAPTLS.
     */
    clientRootCertificates?: string[];
}
/**
 * @interface
 * An interface representing BgpPeerStatusListResult.
 * Response for list BGP peer status API service call
 *
 */
export interface BgpPeerStatusListResult {
    /**
     * @member {BgpPeerStatus[]} [value] List of BGP peers
     */
    value?: BgpPeerStatus[];
}
/**
 * @interface
 * An interface representing GatewayRouteListResult.
 * List of virtual network gateway routes
 *
 */
export interface GatewayRouteListResult {
    /**
     * @member {GatewayRoute[]} [value] List of gateway routes
     */
    value?: GatewayRoute[];
}
/**
 * @interface
 * An interface representing TunnelConnectionHealth.
 * VirtualNetworkGatewayConnection properties
 *
 */
export interface TunnelConnectionHealth {
    /**
     * @member {string} [tunnel] Tunnel name.
     */
    readonly tunnel?: string;
    /**
     * @member {VirtualNetworkGatewayConnectionStatus} [connectionStatus] Virtual
     * network Gateway connection status. Possible values include: 'Unknown',
     * 'Connecting', 'Connected', 'NotConnected'
     */
    readonly connectionStatus?: VirtualNetworkGatewayConnectionStatus;
    /**
     * @member {number} [ingressBytesTransferred] The Ingress Bytes Transferred
     * in this connection
     */
    readonly ingressBytesTransferred?: number;
    /**
     * @member {number} [egressBytesTransferred] The Egress Bytes Transferred in
     * this connection
     */
    readonly egressBytesTransferred?: number;
    /**
     * @member {string} [lastConnectionEstablishedUtcTime] The time at which
     * connection was established in Utc format.
     */
    readonly lastConnectionEstablishedUtcTime?: string;
}
/**
 * @interface
 * An interface representing LocalNetworkGateway.
 * A common class for general resource information
 *
 * @extends Resource
 */
export interface LocalNetworkGateway extends Resource {
    /**
     * @member {AddressSpace} [localNetworkAddressSpace] Local network site
     * address space.
     */
    localNetworkAddressSpace?: AddressSpace;
    /**
     * @member {string} [gatewayIpAddress] IP address of local network gateway.
     */
    gatewayIpAddress?: string;
    /**
     * @member {BgpSettings} [bgpSettings] Local network gateway's BGP speaker
     * settings.
     */
    bgpSettings?: BgpSettings;
    /**
     * @member {string} [resourceGuid] The resource GUID property of the
     * LocalNetworkGateway resource.
     */
    resourceGuid?: string;
    /**
     * @member {string} [provisioningState] The provisioning state of the
     * LocalNetworkGateway resource. Possible values are: 'Updating', 'Deleting',
     * and 'Failed'.
     */
    readonly provisioningState?: string;
    /**
     * @member {string} [etag] A unique read-only string that changes whenever
     * the resource is updated.
     */
    etag?: string;
}
/**
 * @interface
 * An interface representing IpsecPolicy.
 * An IPSec Policy configuration for a virtual network gateway connection
 *
 */
export interface IpsecPolicy {
    /**
     * @member {number} saLifeTimeSeconds The IPSec Security Association (also
     * called Quick Mode or Phase 2 SA) lifetime in seconds for a site to site
     * VPN tunnel.
     */
    saLifeTimeSeconds: number;
    /**
     * @member {number} saDataSizeKilobytes The IPSec Security Association (also
     * called Quick Mode or Phase 2 SA) payload size in KB for a site to site VPN
     * tunnel.
     */
    saDataSizeKilobytes: number;
    /**
     * @member {IpsecEncryption} ipsecEncryption The IPSec encryption algorithm
     * (IKE phase 1). Possible values include: 'None', 'DES', 'DES3', 'AES128',
     * 'AES192', 'AES256', 'GCMAES128', 'GCMAES192', 'GCMAES256'
     */
    ipsecEncryption: IpsecEncryption;
    /**
     * @member {IpsecIntegrity} ipsecIntegrity The IPSec integrity algorithm (IKE
     * phase 1). Possible values include: 'MD5', 'SHA1', 'SHA256', 'GCMAES128',
     * 'GCMAES192', 'GCMAES256'
     */
    ipsecIntegrity: IpsecIntegrity;
    /**
     * @member {IkeEncryption} ikeEncryption The IKE encryption algorithm (IKE
     * phase 2). Possible values include: 'DES', 'DES3', 'AES128', 'AES192',
     * 'AES256'
     */
    ikeEncryption: IkeEncryption;
    /**
     * @member {IkeIntegrity} ikeIntegrity The IKE integrity algorithm (IKE phase
     * 2). Possible values include: 'MD5', 'SHA1', 'SHA256', 'SHA384'
     */
    ikeIntegrity: IkeIntegrity;
    /**
     * @member {DhGroup} dhGroup The DH Groups used in IKE Phase 1 for initial
     * SA. Possible values include: 'None', 'DHGroup1', 'DHGroup2', 'DHGroup14',
     * 'DHGroup2048', 'ECP256', 'ECP384', 'DHGroup24'
     */
    dhGroup: DhGroup;
    /**
     * @member {PfsGroup} pfsGroup The DH Groups used in IKE Phase 2 for new
     * child SA. Possible values include: 'None', 'PFS1', 'PFS2', 'PFS2048',
     * 'ECP256', 'ECP384', 'PFS24'
     */
    pfsGroup: PfsGroup;
}
/**
 * @interface
 * An interface representing VirtualNetworkGatewayConnection.
 * A common class for general resource information
 *
 * @extends Resource
 */
export interface VirtualNetworkGatewayConnection extends Resource {
    /**
     * @member {string} [authorizationKey] The authorizationKey.
     */
    authorizationKey?: string;
    /**
     * @member {VirtualNetworkGateway} virtualNetworkGateway1 The reference to
     * virtual network gateway resource.
     */
    virtualNetworkGateway1: VirtualNetworkGateway;
    /**
     * @member {VirtualNetworkGateway} [virtualNetworkGateway2] The reference to
     * virtual network gateway resource.
     */
    virtualNetworkGateway2?: VirtualNetworkGateway;
    /**
     * @member {LocalNetworkGateway} [localNetworkGateway2] The reference to
     * local network gateway resource.
     */
    localNetworkGateway2?: LocalNetworkGateway;
    /**
     * @member {VirtualNetworkGatewayConnectionType} connectionType Gateway
     * connection type. Possible values are: 'Ipsec','Vnet2Vnet','ExpressRoute',
     * and 'VPNClient. Possible values include: 'IPsec', 'Vnet2Vnet',
     * 'ExpressRoute', 'VPNClient'
     */
    connectionType: VirtualNetworkGatewayConnectionType;
    /**
     * @member {number} [routingWeight] The routing weight.
     */
    routingWeight?: number;
    /**
     * @member {string} [sharedKey] The IPSec shared key.
     */
    sharedKey?: string;
    /**
     * @member {VirtualNetworkGatewayConnectionStatus} [connectionStatus] Virtual
     * network Gateway connection status. Possible values are 'Unknown',
     * 'Connecting', 'Connected' and 'NotConnected'. Possible values include:
     * 'Unknown', 'Connecting', 'Connected', 'NotConnected'
     */
    readonly connectionStatus?: VirtualNetworkGatewayConnectionStatus;
    /**
     * @member {TunnelConnectionHealth[]} [tunnelConnectionStatus] Collection of
     * all tunnels' connection health status.
     */
    readonly tunnelConnectionStatus?: TunnelConnectionHealth[];
    /**
     * @member {number} [egressBytesTransferred] The egress bytes transferred in
     * this connection.
     */
    readonly egressBytesTransferred?: number;
    /**
     * @member {number} [ingressBytesTransferred] The ingress bytes transferred
     * in this connection.
     */
    readonly ingressBytesTransferred?: number;
    /**
     * @member {SubResource} [peer] The reference to peerings resource.
     */
    peer?: SubResource;
    /**
     * @member {boolean} [enableBgp] EnableBgp flag
     */
    enableBgp?: boolean;
    /**
     * @member {boolean} [usePolicyBasedTrafficSelectors] Enable policy-based
     * traffic selectors.
     */
    usePolicyBasedTrafficSelectors?: boolean;
    /**
     * @member {IpsecPolicy[]} [ipsecPolicies] The IPSec Policies to be
     * considered by this connection.
     */
    ipsecPolicies?: IpsecPolicy[];
    /**
     * @member {string} [resourceGuid] The resource GUID property of the
     * VirtualNetworkGatewayConnection resource.
     */
    resourceGuid?: string;
    /**
     * @member {string} [provisioningState] The provisioning state of the
     * VirtualNetworkGatewayConnection resource. Possible values are: 'Updating',
     * 'Deleting', and 'Failed'.
     */
    readonly provisioningState?: string;
    /**
     * @member {string} [etag] Gets a unique read-only string that changes
     * whenever the resource is updated.
     */
    etag?: string;
}
/**
 * @interface
 * An interface representing ConnectionResetSharedKey.
 * The virtual network connection reset shared key
 *
 */
export interface ConnectionResetSharedKey {
    /**
     * @member {number} keyLength The virtual network connection reset shared key
     * length, should between 1 and 128.
     */
    keyLength: number;
}
/**
 * @interface
 * An interface representing ConnectionSharedKey.
 * Response for GetConnectionSharedKey API service call
 *
 */
export interface ConnectionSharedKey {
    /**
     * @member {string} value The virtual network connection shared key value.
     */
    value: string;
}
/**
 * @interface
 * An interface representing VirtualNetworkConnectionGatewayReference.
 * A reference to VirtualNetworkGateway or LocalNetworkGateway resource.
 *
 */
export interface VirtualNetworkConnectionGatewayReference {
    /**
     * @member {string} id The ID of VirtualNetworkGateway or LocalNetworkGateway
     * resource.
     */
    id: string;
}
/**
 * @interface
 * An interface representing VirtualNetworkGatewayConnectionListEntity.
 * A common class for general resource information
 *
 * @extends Resource
 */
export interface VirtualNetworkGatewayConnectionListEntity extends Resource {
    /**
     * @member {string} [authorizationKey] The authorizationKey.
     */
    authorizationKey?: string;
    /**
     * @member {VirtualNetworkConnectionGatewayReference} virtualNetworkGateway1
     * The reference to virtual network gateway resource.
     */
    virtualNetworkGateway1: VirtualNetworkConnectionGatewayReference;
    /**
     * @member {VirtualNetworkConnectionGatewayReference}
     * [virtualNetworkGateway2] The reference to virtual network gateway
     * resource.
     */
    virtualNetworkGateway2?: VirtualNetworkConnectionGatewayReference;
    /**
     * @member {VirtualNetworkConnectionGatewayReference} [localNetworkGateway2]
     * The reference to local network gateway resource.
     */
    localNetworkGateway2?: VirtualNetworkConnectionGatewayReference;
    /**
     * @member {VirtualNetworkGatewayConnectionType} connectionType Gateway
     * connection type. Possible values are: 'Ipsec','Vnet2Vnet','ExpressRoute',
     * and 'VPNClient. Possible values include: 'IPsec', 'Vnet2Vnet',
     * 'ExpressRoute', 'VPNClient'
     */
    connectionType: VirtualNetworkGatewayConnectionType;
    /**
     * @member {number} [routingWeight] The routing weight.
     */
    routingWeight?: number;
    /**
     * @member {string} [sharedKey] The IPSec shared key.
     */
    sharedKey?: string;
    /**
     * @member {VirtualNetworkGatewayConnectionStatus} [connectionStatus] Virtual
     * network Gateway connection status. Possible values are 'Unknown',
     * 'Connecting', 'Connected' and 'NotConnected'. Possible values include:
     * 'Unknown', 'Connecting', 'Connected', 'NotConnected'
     */
    readonly connectionStatus?: VirtualNetworkGatewayConnectionStatus;
    /**
     * @member {TunnelConnectionHealth[]} [tunnelConnectionStatus] Collection of
     * all tunnels' connection health status.
     */
    readonly tunnelConnectionStatus?: TunnelConnectionHealth[];
    /**
     * @member {number} [egressBytesTransferred] The egress bytes transferred in
     * this connection.
     */
    readonly egressBytesTransferred?: number;
    /**
     * @member {number} [ingressBytesTransferred] The ingress bytes transferred
     * in this connection.
     */
    readonly ingressBytesTransferred?: number;
    /**
     * @member {SubResource} [peer] The reference to peerings resource.
     */
    peer?: SubResource;
    /**
     * @member {boolean} [enableBgp] EnableBgp flag
     */
    enableBgp?: boolean;
    /**
     * @member {boolean} [usePolicyBasedTrafficSelectors] Enable policy-based
     * traffic selectors.
     */
    usePolicyBasedTrafficSelectors?: boolean;
    /**
     * @member {IpsecPolicy[]} [ipsecPolicies] The IPSec Policies to be
     * considered by this connection.
     */
    ipsecPolicies?: IpsecPolicy[];
    /**
     * @member {string} [resourceGuid] The resource GUID property of the
     * VirtualNetworkGatewayConnection resource.
     */
    resourceGuid?: string;
    /**
     * @member {string} [provisioningState] The provisioning state of the
     * VirtualNetworkGatewayConnection resource. Possible values are: 'Updating',
     * 'Deleting', and 'Failed'.
     */
    readonly provisioningState?: string;
    /**
     * @member {string} [etag] Gets a unique read-only string that changes
     * whenever the resource is updated.
     */
    etag?: string;
}
/**
 * @interface
 * An interface representing VpnDeviceScriptParameters.
 * Vpn device configuration script generation parameters
 *
 */
export interface VpnDeviceScriptParameters {
    /**
     * @member {string} [vendor] The vendor for the vpn device.
     */
    vendor?: string;
    /**
     * @member {string} [deviceFamily] The device family for the vpn device.
     */
    deviceFamily?: string;
    /**
     * @member {string} [firmwareVersion] The firmware version for the vpn
     * device.
     */
    firmwareVersion?: string;
}
/**
 * @interface
 * An interface representing LoadBalancersGetOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface LoadBalancersGetOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {string} [expand] Expands referenced resources.
     */
    expand?: string;
}
/**
 * @interface
 * An interface representing InboundNatRulesGetOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface InboundNatRulesGetOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {string} [expand] Expands referenced resources.
     */
    expand?: string;
}
/**
 * @interface
 * An interface representing NetworkInterfacesGetOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface NetworkInterfacesGetOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {string} [expand] Expands referenced resources.
     */
    expand?: string;
}
/**
 * @interface
 * An interface representing NetworkInterfacesGetVirtualMachineScaleSetNetworkInterfaceOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface NetworkInterfacesGetVirtualMachineScaleSetNetworkInterfaceOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {string} [expand] Expands referenced resources.
     */
    expand?: string;
}
/**
 * @interface
 * An interface representing NetworkInterfacesListVirtualMachineScaleSetIpConfigurationsOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface NetworkInterfacesListVirtualMachineScaleSetIpConfigurationsOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {string} [expand] Expands referenced resources.
     */
    expand?: string;
}
/**
 * @interface
 * An interface representing NetworkInterfacesGetVirtualMachineScaleSetIpConfigurationOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface NetworkInterfacesGetVirtualMachineScaleSetIpConfigurationOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {string} [expand] Expands referenced resources.
     */
    expand?: string;
}
/**
 * @interface
 * An interface representing NetworkSecurityGroupsGetOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface NetworkSecurityGroupsGetOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {string} [expand] Expands referenced resources.
     */
    expand?: string;
}
/**
 * @interface
 * An interface representing PublicIPAddressesGetOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface PublicIPAddressesGetOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {string} [expand] Expands referenced resources.
     */
    expand?: string;
}
/**
 * @interface
 * An interface representing PublicIPAddressesGetVirtualMachineScaleSetPublicIPAddressOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface PublicIPAddressesGetVirtualMachineScaleSetPublicIPAddressOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {string} [expand] Expands referenced resources.
     */
    expand?: string;
}
/**
 * @interface
 * An interface representing RouteFiltersGetOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface RouteFiltersGetOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {string} [expand] Expands referenced express route bgp peering
     * resources.
     */
    expand?: string;
}
/**
 * @interface
 * An interface representing RouteTablesGetOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface RouteTablesGetOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {string} [expand] Expands referenced resources.
     */
    expand?: string;
}
/**
 * @interface
 * An interface representing VirtualNetworksGetOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface VirtualNetworksGetOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {string} [expand] Expands referenced resources.
     */
    expand?: string;
}
/**
 * @interface
 * An interface representing VirtualNetworksCheckIPAddressAvailabilityOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface VirtualNetworksCheckIPAddressAvailabilityOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {string} [ipAddress] The private IP address to be verified.
     */
    ipAddress?: string;
}
/**
 * @interface
 * An interface representing SubnetsGetOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface SubnetsGetOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {string} [expand] Expands referenced resources.
     */
    expand?: string;
}
/**
 * @interface
 * An interface representing VirtualNetworkGatewaysResetOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface VirtualNetworkGatewaysResetOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {string} [gatewayVip] Virtual network gateway vip address supplied
     * to the begin reset of the active-active feature enabled gateway.
     */
    gatewayVip?: string;
}
/**
 * @interface
 * An interface representing VirtualNetworkGatewaysGetBgpPeerStatusOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface VirtualNetworkGatewaysGetBgpPeerStatusOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {string} [peer] The IP address of the peer to retrieve the status
     * of.
     */
    peer?: string;
}
/**
 * @interface
 * An interface representing VirtualNetworkGatewaysBeginResetOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface VirtualNetworkGatewaysBeginResetOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {string} [gatewayVip] Virtual network gateway vip address supplied
     * to the begin reset of the active-active feature enabled gateway.
     */
    gatewayVip?: string;
}
/**
 * @interface
 * An interface representing VirtualNetworkGatewaysBeginGetBgpPeerStatusOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface VirtualNetworkGatewaysBeginGetBgpPeerStatusOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {string} [peer] The IP address of the peer to retrieve the status
     * of.
     */
    peer?: string;
}
/**
 * @interface
 * An interface representing the LoadBalancerListResult.
 * Response for ListLoadBalancers API service call.
 *
 * @extends Array<LoadBalancer>
 */
export interface LoadBalancerListResult extends Array<LoadBalancer> {
    /**
     * @member {string} [nextLink] The URL to get the next set of results.
     */
    readonly nextLink?: string;
}
/**
 * @interface
 * An interface representing the LoadBalancerBackendAddressPoolListResult.
 * Response for ListBackendAddressPool API service call.
 *
 * @extends Array<BackendAddressPool>
 */
export interface LoadBalancerBackendAddressPoolListResult extends Array<BackendAddressPool> {
    /**
     * @member {string} [nextLink] The URL to get the next set of results.
     */
    readonly nextLink?: string;
}
/**
 * @interface
 * An interface representing the LoadBalancerFrontendIPConfigurationListResult.
 * Response for ListFrontendIPConfiguration API service call.
 *
 * @extends Array<FrontendIPConfiguration>
 */
export interface LoadBalancerFrontendIPConfigurationListResult extends Array<FrontendIPConfiguration> {
    /**
     * @member {string} [nextLink] The URL to get the next set of results.
     */
    readonly nextLink?: string;
}
/**
 * @interface
 * An interface representing the InboundNatRuleListResult.
 * Response for ListInboundNatRule API service call.
 *
 * @extends Array<InboundNatRule>
 */
export interface InboundNatRuleListResult extends Array<InboundNatRule> {
    /**
     * @member {string} [nextLink] The URL to get the next set of results.
     */
    readonly nextLink?: string;
}
/**
 * @interface
 * An interface representing the LoadBalancerLoadBalancingRuleListResult.
 * Response for ListLoadBalancingRule API service call.
 *
 * @extends Array<LoadBalancingRule>
 */
export interface LoadBalancerLoadBalancingRuleListResult extends Array<LoadBalancingRule> {
    /**
     * @member {string} [nextLink] The URL to get the next set of results.
     */
    readonly nextLink?: string;
}
/**
 * @interface
 * An interface representing the NetworkInterfaceListResult.
 * Response for the ListNetworkInterface API service call.
 *
 * @extends Array<NetworkInterface>
 */
export interface NetworkInterfaceListResult extends Array<NetworkInterface> {
    /**
     * @member {string} [nextLink] The URL to get the next set of results.
     */
    readonly nextLink?: string;
}
/**
 * @interface
 * An interface representing the LoadBalancerProbeListResult.
 * Response for ListProbe API service call.
 *
 * @extends Array<Probe>
 */
export interface LoadBalancerProbeListResult extends Array<Probe> {
    /**
     * @member {string} [nextLink] The URL to get the next set of results.
     */
    readonly nextLink?: string;
}
/**
 * @interface
 * An interface representing the NetworkInterfaceIPConfigurationListResult.
 * Response for list ip configurations API service call.
 *
 * @extends Array<NetworkInterfaceIPConfiguration>
 */
export interface NetworkInterfaceIPConfigurationListResult extends Array<NetworkInterfaceIPConfiguration> {
    /**
     * @member {string} [nextLink] The URL to get the next set of results.
     */
    readonly nextLink?: string;
}
/**
 * @interface
 * An interface representing the NetworkInterfaceLoadBalancerListResult.
 * Response for list ip configurations API service call.
 *
 * @extends Array<LoadBalancer>
 */
export interface NetworkInterfaceLoadBalancerListResult extends Array<LoadBalancer> {
    /**
     * @member {string} [nextLink] The URL to get the next set of results.
     */
    readonly nextLink?: string;
}
/**
 * @interface
 * An interface representing the NetworkSecurityGroupListResult.
 * Response for ListNetworkSecurityGroups API service call.
 *
 * @extends Array<NetworkSecurityGroup>
 */
export interface NetworkSecurityGroupListResult extends Array<NetworkSecurityGroup> {
    /**
     * @member {string} [nextLink] The URL to get the next set of results.
     */
    nextLink?: string;
}
/**
 * @interface
 * An interface representing the SecurityRuleListResult.
 * Response for ListSecurityRule API service call. Retrieves all security rules
 * that belongs to a network security group.
 *
 * @extends Array<SecurityRule>
 */
export interface SecurityRuleListResult extends Array<SecurityRule> {
    /**
     * @member {string} [nextLink] The URL to get the next set of results.
     */
    nextLink?: string;
}
/**
 * @interface
 * An interface representing the NetworkWatcherListResult.
 * List of network watcher resources.
 *
 * @extends Array<NetworkWatcher>
 */
export interface NetworkWatcherListResult extends Array<NetworkWatcher> {
}
/**
 * @interface
 * An interface representing the PacketCaptureListResult.
 * List of packet capture sessions.
 *
 * @extends Array<PacketCaptureResult>
 */
export interface PacketCaptureListResult extends Array<PacketCaptureResult> {
}
/**
 * @interface
 * An interface representing the ConnectionMonitorListResult.
 * List of connection monitors.
 *
 * @extends Array<ConnectionMonitorResult>
 */
export interface ConnectionMonitorListResult extends Array<ConnectionMonitorResult> {
}
/**
 * @interface
 * An interface representing the OperationListResult.
 * Result of the request to list Network operations. It contains a list of
 * operations and a URL link to get the next set of results.
 *
 * @extends Array<Operation>
 */
export interface OperationListResult extends Array<Operation> {
    /**
     * @member {string} [nextLink] URL to get the next set of operation list
     * results if there are any.
     */
    nextLink?: string;
}
/**
 * @interface
 * An interface representing the PublicIPAddressListResult.
 * Response for ListPublicIpAddresses API service call.
 *
 * @extends Array<PublicIPAddress>
 */
export interface PublicIPAddressListResult extends Array<PublicIPAddress> {
    /**
     * @member {string} [nextLink] The URL to get the next set of results.
     */
    nextLink?: string;
}
/**
 * @interface
 * An interface representing the RouteFilterListResult.
 * Response for the ListRouteFilters API service call.
 *
 * @extends Array<RouteFilter>
 */
export interface RouteFilterListResult extends Array<RouteFilter> {
    /**
     * @member {string} [nextLink] The URL to get the next set of results.
     */
    nextLink?: string;
}
/**
 * @interface
 * An interface representing the RouteFilterRuleListResult.
 * Response for the ListRouteFilterRules API service call
 *
 * @extends Array<RouteFilterRule>
 */
export interface RouteFilterRuleListResult extends Array<RouteFilterRule> {
    /**
     * @member {string} [nextLink] The URL to get the next set of results.
     */
    nextLink?: string;
}
/**
 * @interface
 * An interface representing the RouteTableListResult.
 * Response for the ListRouteTable API service call.
 *
 * @extends Array<RouteTable>
 */
export interface RouteTableListResult extends Array<RouteTable> {
    /**
     * @member {string} [nextLink] The URL to get the next set of results.
     */
    nextLink?: string;
}
/**
 * @interface
 * An interface representing the RouteListResult.
 * Response for the ListRoute API service call
 *
 * @extends Array<Route>
 */
export interface RouteListResult extends Array<Route> {
    /**
     * @member {string} [nextLink] The URL to get the next set of results.
     */
    nextLink?: string;
}
/**
 * @interface
 * An interface representing the UsagesListResult.
 * The list usages operation response.
 *
 * @extends Array<Usage>
 */
export interface UsagesListResult extends Array<Usage> {
    /**
     * @member {string} [nextLink] URL to get the next set of results.
     */
    nextLink?: string;
}
/**
 * @interface
 * An interface representing the VirtualNetworkListResult.
 * Response for the ListVirtualNetworks API service call.
 *
 * @extends Array<VirtualNetwork>
 */
export interface VirtualNetworkListResult extends Array<VirtualNetwork> {
    /**
     * @member {string} [nextLink] The URL to get the next set of results.
     */
    nextLink?: string;
}
/**
 * @interface
 * An interface representing the VirtualNetworkListUsageResult.
 * Response for the virtual networks GetUsage API service call.
 *
 * @extends Array<VirtualNetworkUsage>
 */
export interface VirtualNetworkListUsageResult extends Array<VirtualNetworkUsage> {
    /**
     * @member {string} [nextLink] The URL to get the next set of results.
     */
    nextLink?: string;
}
/**
 * @interface
 * An interface representing the SubnetListResult.
 * Response for ListSubnets API service callRetrieves all subnet that belongs
 * to a virtual network
 *
 * @extends Array<Subnet>
 */
export interface SubnetListResult extends Array<Subnet> {
    /**
     * @member {string} [nextLink] The URL to get the next set of results.
     */
    nextLink?: string;
}
/**
 * @interface
 * An interface representing the VirtualNetworkPeeringListResult.
 * Response for ListSubnets API service call. Retrieves all subnets that belong
 * to a virtual network.
 *
 * @extends Array<VirtualNetworkPeering>
 */
export interface VirtualNetworkPeeringListResult extends Array<VirtualNetworkPeering> {
    /**
     * @member {string} [nextLink] The URL to get the next set of results.
     */
    nextLink?: string;
}
/**
 * @interface
 * An interface representing the VirtualNetworkGatewayListResult.
 * Response for the ListVirtualNetworkGateways API service call.
 *
 * @extends Array<VirtualNetworkGateway>
 */
export interface VirtualNetworkGatewayListResult extends Array<VirtualNetworkGateway> {
    /**
     * @member {string} [nextLink] The URL to get the next set of results.
     */
    readonly nextLink?: string;
}
/**
 * @interface
 * An interface representing the VirtualNetworkGatewayListConnectionsResult.
 * Response for the VirtualNetworkGatewayListConnections API service call
 *
 * @extends Array<VirtualNetworkGatewayConnectionListEntity>
 */
export interface VirtualNetworkGatewayListConnectionsResult extends Array<VirtualNetworkGatewayConnectionListEntity> {
    /**
     * @member {string} [nextLink] The URL to get the next set of results.
     */
    readonly nextLink?: string;
}
/**
 * @interface
 * An interface representing the VirtualNetworkGatewayConnectionListResult.
 * Response for the ListVirtualNetworkGatewayConnections API service call
 *
 * @extends Array<VirtualNetworkGatewayConnection>
 */
export interface VirtualNetworkGatewayConnectionListResult extends Array<VirtualNetworkGatewayConnection> {
    /**
     * @member {string} [nextLink] The URL to get the next set of results.
     */
    readonly nextLink?: string;
}
/**
 * @interface
 * An interface representing the LocalNetworkGatewayListResult.
 * Response for ListLocalNetworkGateways API service call.
 *
 * @extends Array<LocalNetworkGateway>
 */
export interface LocalNetworkGatewayListResult extends Array<LocalNetworkGateway> {
    /**
     * @member {string} [nextLink] The URL to get the next set of results.
     */
    readonly nextLink?: string;
}
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
export declare enum LoadBalancerSkuName {
    Basic = "Basic",
    Standard = "Standard"
}
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
export declare enum IPAllocationMethod {
    Static = "Static",
    Dynamic = "Dynamic"
}
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
export declare enum SecurityRuleProtocol {
    Tcp = "Tcp",
    Udp = "Udp",
    Asterisk = "*"
}
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
export declare enum SecurityRuleAccess {
    Allow = "Allow",
    Deny = "Deny"
}
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
export declare enum SecurityRuleDirection {
    Inbound = "Inbound",
    Outbound = "Outbound"
}
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
export declare enum TransportProtocol {
    Udp = "Udp",
    Tcp = "Tcp",
    All = "All"
}
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
export declare enum IPVersion {
    IPv4 = "IPv4",
    IPv6 = "IPv6"
}
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
export declare enum PublicIPAddressSkuName {
    Basic = "Basic",
    Standard = "Standard"
}
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
export declare enum RouteNextHopType {
    VirtualNetworkGateway = "VirtualNetworkGateway",
    VnetLocal = "VnetLocal",
    Internet = "Internet",
    VirtualAppliance = "VirtualAppliance",
    None = "None"
}
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
export declare enum LoadDistribution {
    Default = "Default",
    SourceIP = "SourceIP",
    SourceIPProtocol = "SourceIPProtocol"
}
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
export declare enum ProbeProtocol {
    Http = "Http",
    Tcp = "Tcp"
}
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
export declare enum NetworkOperationStatus {
    InProgress = "InProgress",
    Succeeded = "Succeeded",
    Failed = "Failed"
}
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
export declare enum EffectiveSecurityRuleProtocol {
    Tcp = "Tcp",
    Udp = "Udp",
    All = "All"
}
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
export declare enum EffectiveRouteSource {
    Unknown = "Unknown",
    User = "User",
    VirtualNetworkGateway = "VirtualNetworkGateway",
    Default = "Default"
}
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
export declare enum EffectiveRouteState {
    Active = "Active",
    Invalid = "Invalid"
}
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
export declare enum ProvisioningState {
    Succeeded = "Succeeded",
    Updating = "Updating",
    Deleting = "Deleting",
    Failed = "Failed"
}
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
export declare enum AssociationType {
    Associated = "Associated",
    Contains = "Contains"
}
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
export declare enum Direction {
    Inbound = "Inbound",
    Outbound = "Outbound"
}
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
export declare enum Protocol {
    TCP = "TCP",
    UDP = "UDP"
}
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
export declare enum Access {
    Allow = "Allow",
    Deny = "Deny"
}
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
export declare enum NextHopType {
    Internet = "Internet",
    VirtualAppliance = "VirtualAppliance",
    VirtualNetworkGateway = "VirtualNetworkGateway",
    VnetLocal = "VnetLocal",
    HyperNetGateway = "HyperNetGateway",
    None = "None"
}
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
export declare enum PcProtocol {
    TCP = "TCP",
    UDP = "UDP",
    Any = "Any"
}
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
export declare enum PcStatus {
    NotStarted = "NotStarted",
    Running = "Running",
    Stopped = "Stopped",
    Error = "Error",
    Unknown = "Unknown"
}
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
export declare enum PcError {
    InternalError = "InternalError",
    AgentStopped = "AgentStopped",
    CaptureFailed = "CaptureFailed",
    LocalFileFailed = "LocalFileFailed",
    StorageFailed = "StorageFailed"
}
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
export declare enum Origin {
    Local = "Local",
    Inbound = "Inbound",
    Outbound = "Outbound"
}
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
export declare enum Severity {
    Error = "Error",
    Warning = "Warning"
}
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
export declare enum IssueType {
    Unknown = "Unknown",
    AgentStopped = "AgentStopped",
    GuestFirewall = "GuestFirewall",
    DnsResolution = "DnsResolution",
    SocketBind = "SocketBind",
    NetworkSecurityRule = "NetworkSecurityRule",
    UserDefinedRoute = "UserDefinedRoute",
    PortThrottled = "PortThrottled",
    Platform = "Platform"
}
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
export declare enum ConnectionStatus {
    Unknown = "Unknown",
    Connected = "Connected",
    Disconnected = "Disconnected",
    Degraded = "Degraded"
}
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
export declare enum ConnectionState {
    Reachable = "Reachable",
    Unreachable = "Unreachable",
    Unknown = "Unknown"
}
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
export declare enum EvaluationState {
    NotStarted = "NotStarted",
    InProgress = "InProgress",
    Completed = "Completed"
}
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
export declare enum ExpressRouteCircuitPeeringType {
    AzurePublicPeering = "AzurePublicPeering",
    AzurePrivatePeering = "AzurePrivatePeering",
    MicrosoftPeering = "MicrosoftPeering"
}
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
export declare enum ExpressRouteCircuitPeeringState {
    Disabled = "Disabled",
    Enabled = "Enabled"
}
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
export declare enum ExpressRouteCircuitPeeringAdvertisedPublicPrefixState {
    NotConfigured = "NotConfigured",
    Configuring = "Configuring",
    Configured = "Configured",
    ValidationNeeded = "ValidationNeeded"
}
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
export declare enum VirtualNetworkPeeringState {
    Initiated = "Initiated",
    Connected = "Connected",
    Disconnected = "Disconnected"
}
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
export declare enum VirtualNetworkGatewayType {
    Vpn = "Vpn",
    ExpressRoute = "ExpressRoute"
}
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
export declare enum VpnType {
    PolicyBased = "PolicyBased",
    RouteBased = "RouteBased"
}
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
export declare enum VirtualNetworkGatewaySkuName {
    Basic = "Basic",
    HighPerformance = "HighPerformance",
    Standard = "Standard",
    UltraPerformance = "UltraPerformance",
    VpnGw1 = "VpnGw1",
    VpnGw2 = "VpnGw2",
    VpnGw3 = "VpnGw3"
}
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
export declare enum VirtualNetworkGatewaySkuTier {
    Basic = "Basic",
    HighPerformance = "HighPerformance",
    Standard = "Standard",
    UltraPerformance = "UltraPerformance",
    VpnGw1 = "VpnGw1",
    VpnGw2 = "VpnGw2",
    VpnGw3 = "VpnGw3"
}
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
export declare enum VpnClientProtocol {
    IkeV2 = "IkeV2",
    SSTP = "SSTP"
}
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
export declare enum BgpPeerState {
    Unknown = "Unknown",
    Stopped = "Stopped",
    Idle = "Idle",
    Connecting = "Connecting",
    Connected = "Connected"
}
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
export declare enum ProcessorArchitecture {
    Amd64 = "Amd64",
    X86 = "X86"
}
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
export declare enum AuthenticationMethod {
    EAPTLS = "EAPTLS",
    EAPMSCHAPv2 = "EAPMSCHAPv2"
}
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
export declare enum VirtualNetworkGatewayConnectionStatus {
    Unknown = "Unknown",
    Connecting = "Connecting",
    Connected = "Connected",
    NotConnected = "NotConnected"
}
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
export declare enum VirtualNetworkGatewayConnectionType {
    IPsec = "IPsec",
    Vnet2Vnet = "Vnet2Vnet",
    ExpressRoute = "ExpressRoute",
    VPNClient = "VPNClient"
}
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
export declare enum IpsecEncryption {
    None = "None",
    DES = "DES",
    DES3 = "DES3",
    AES128 = "AES128",
    AES192 = "AES192",
    AES256 = "AES256",
    GCMAES128 = "GCMAES128",
    GCMAES192 = "GCMAES192",
    GCMAES256 = "GCMAES256"
}
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
export declare enum IpsecIntegrity {
    MD5 = "MD5",
    SHA1 = "SHA1",
    SHA256 = "SHA256",
    GCMAES128 = "GCMAES128",
    GCMAES192 = "GCMAES192",
    GCMAES256 = "GCMAES256"
}
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
export declare enum IkeEncryption {
    DES = "DES",
    DES3 = "DES3",
    AES128 = "AES128",
    AES192 = "AES192",
    AES256 = "AES256"
}
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
export declare enum IkeIntegrity {
    MD5 = "MD5",
    SHA1 = "SHA1",
    SHA256 = "SHA256",
    SHA384 = "SHA384"
}
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
export declare enum DhGroup {
    None = "None",
    DHGroup1 = "DHGroup1",
    DHGroup2 = "DHGroup2",
    DHGroup14 = "DHGroup14",
    DHGroup2048 = "DHGroup2048",
    ECP256 = "ECP256",
    ECP384 = "ECP384",
    DHGroup24 = "DHGroup24"
}
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
export declare enum PfsGroup {
    None = "None",
    PFS1 = "PFS1",
    PFS2 = "PFS2",
    PFS2048 = "PFS2048",
    ECP256 = "ECP256",
    ECP384 = "ECP384",
    PFS24 = "PFS24"
}
