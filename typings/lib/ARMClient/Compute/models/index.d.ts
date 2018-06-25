import { BaseResource, CloudError } from "ms-rest-azure-js";
import * as msRest from "ms-rest-js";
export { BaseResource, CloudError };
/**
 * @interface
 * An interface representing InstanceViewStatus.
 * Instance view status.
 *
 */
export interface InstanceViewStatus {
    /**
     * @member {string} [code] The status code.
     */
    code?: string;
    /**
     * @member {StatusLevelTypes} [level] The level code. Possible values
     * include: 'Info', 'Warning', 'Error'
     */
    level?: StatusLevelTypes;
    /**
     * @member {string} [displayStatus] The short localizable label for the
     * status.
     */
    displayStatus?: string;
    /**
     * @member {string} [message] The detailed status message, including for
     * alerts and error messages.
     */
    message?: string;
    /**
     * @member {Date} [time] The time of the status.
     */
    time?: Date;
}
/**
 * @interface
 * An interface representing SubResource.
 * @extends BaseResource
 */
export interface SubResource extends BaseResource {
    /**
     * @member {string} [id] Resource Id
     */
    id?: string;
}
/**
 * @interface
 * An interface representing Sku.
 * Describes a virtual machine scale set sku.
 *
 */
export interface Sku {
    /**
     * @member {string} [name] The sku name.
     */
    name?: string;
    /**
     * @member {string} [tier] Specifies the tier of virtual machines in a scale
     * set.<br /><br /> Possible Values:<br /><br /> **Standard**<br /><br />
     * **Basic**
     */
    tier?: string;
    /**
     * @member {number} [capacity] Specifies the number of virtual machines in
     * the scale set.
     */
    capacity?: number;
}
/**
 * @interface
 * An interface representing Resource.
 * The Resource model definition.
 *
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
     * @member {string} location Resource location
     */
    location: string;
    /**
     * @member {{ [propertyName: string]: string }} [tags] Resource tags
     */
    tags?: {
        [propertyName: string]: string;
    };
}
/**
 * @interface
 * An interface representing AvailabilitySet.
 * Specifies information about the availability set that the virtual machine
 * should be assigned to. Virtual machines specified in the same availability
 * set are allocated to different nodes to maximize availability. For more
 * information about availability sets, see [Manage the availability of virtual
 * machines](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-manage-availability?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json).
 * <br><br> For more information on Azure planned maintainance, see [Planned
 * maintenance for virtual machines in
 * Azure](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-planned-maintenance?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json)
 * <br><br> Currently, a VM can only be added to availability set at creation
 * time. An existing VM cannot be added to an availability set.
 *
 * @extends Resource
 */
export interface AvailabilitySet extends Resource {
    /**
     * @member {number} [platformUpdateDomainCount] Update Domain count.
     */
    platformUpdateDomainCount?: number;
    /**
     * @member {number} [platformFaultDomainCount] Fault Domain count.
     */
    platformFaultDomainCount?: number;
    /**
     * @member {SubResource[]} [virtualMachines] A list of references to all
     * virtual machines in the availability set.
     */
    virtualMachines?: SubResource[];
    /**
     * @member {InstanceViewStatus[]} [statuses] The resource status information.
     */
    readonly statuses?: InstanceViewStatus[];
    /**
     * @member {Sku} [sku] Sku of the availability set
     */
    sku?: Sku;
}
/**
 * @interface
 * An interface representing VirtualMachineSize.
 * Describes the properties of a VM size.
 *
 */
export interface VirtualMachineSize {
    /**
     * @member {string} [name] The name of the virtual machine size.
     */
    name?: string;
    /**
     * @member {number} [numberOfCores] The number of cores supported by the
     * virtual machine size.
     */
    numberOfCores?: number;
    /**
     * @member {number} [osDiskSizeInMB] The OS disk size, in MB, allowed by the
     * virtual machine size.
     */
    osDiskSizeInMB?: number;
    /**
     * @member {number} [resourceDiskSizeInMB] The resource disk size, in MB,
     * allowed by the virtual machine size.
     */
    resourceDiskSizeInMB?: number;
    /**
     * @member {number} [memoryInMB] The amount of memory, in MB, supported by
     * the virtual machine size.
     */
    memoryInMB?: number;
    /**
     * @member {number} [maxDataDiskCount] The maximum number of data disks that
     * can be attached to the virtual machine size.
     */
    maxDataDiskCount?: number;
}
/**
 * @interface
 * An interface representing VirtualMachineExtensionImage.
 * Describes a Virtual Machine Extension Image.
 *
 * @extends Resource
 */
export interface VirtualMachineExtensionImage extends Resource {
    /**
     * @member {string} operatingSystem The operating system this extension
     * supports.
     */
    operatingSystem: string;
    /**
     * @member {string} computeRole The type of role (IaaS or PaaS) this
     * extension supports.
     */
    computeRole: string;
    /**
     * @member {string} handlerSchema The schema defined by publisher, where
     * extension consumers should provide settings in a matching schema.
     */
    handlerSchema: string;
    /**
     * @member {boolean} [vmScaleSetEnabled] Whether the extension can be used on
     * xRP VMScaleSets. By default existing extensions are usable on scalesets,
     * but there might be cases where a publisher wants to explicitly indicate
     * the extension is only enabled for CRP VMs but not VMSS.
     */
    vmScaleSetEnabled?: boolean;
    /**
     * @member {boolean} [supportsMultipleExtensions] Whether the handler can
     * support multiple extensions.
     */
    supportsMultipleExtensions?: boolean;
}
/**
 * @interface
 * An interface representing VirtualMachineImageResource.
 * Virtual machine image resource information.
 *
 * @extends SubResource
 */
export interface VirtualMachineImageResource extends SubResource {
    /**
     * @member {string} name The name of the resource.
     */
    name: string;
    /**
     * @member {string} location The supported Azure location of the resource.
     */
    location: string;
    /**
     * @member {{ [propertyName: string]: string }} [tags] Specifies the tags
     * that are assigned to the virtual machine. For more information about using
     * tags, see [Using tags to organize your Azure
     * resources](https://docs.microsoft.com/azure/azure-resource-manager/resource-group-using-tags.md).
     */
    tags?: {
        [propertyName: string]: string;
    };
}
/**
 * @interface
 * An interface representing VirtualMachineExtensionInstanceView.
 * The instance view of a virtual machine extension.
 *
 */
export interface VirtualMachineExtensionInstanceView {
    /**
     * @member {string} [name] The virtual machine extension name.
     */
    name?: string;
    /**
     * @member {string} [type] Specifies the type of the extension; an example is
     * "CustomScriptExtension".
     */
    type?: string;
    /**
     * @member {string} [typeHandlerVersion] Specifies the version of the script
     * handler.
     */
    typeHandlerVersion?: string;
    /**
     * @member {InstanceViewStatus[]} [substatuses] The resource status
     * information.
     */
    substatuses?: InstanceViewStatus[];
    /**
     * @member {InstanceViewStatus[]} [statuses] The resource status information.
     */
    statuses?: InstanceViewStatus[];
}
/**
 * @interface
 * An interface representing VirtualMachineExtension.
 * Describes a Virtual Machine Extension.
 *
 * @extends Resource
 */
export interface VirtualMachineExtension extends Resource {
    /**
     * @member {string} [forceUpdateTag] How the extension handler should be
     * forced to update even if the extension configuration has not changed.
     */
    forceUpdateTag?: string;
    /**
     * @member {string} [publisher] The name of the extension handler publisher.
     */
    publisher?: string;
    /**
     * @member {string} [virtualMachineExtensionType] Specifies the type of the
     * extension; an example is "CustomScriptExtension".
     */
    virtualMachineExtensionType?: string;
    /**
     * @member {string} [typeHandlerVersion] Specifies the version of the script
     * handler.
     */
    typeHandlerVersion?: string;
    /**
     * @member {boolean} [autoUpgradeMinorVersion] Indicates whether the
     * extension should use a newer minor version if one is available at
     * deployment time. Once deployed, however, the extension will not upgrade
     * minor versions unless redeployed, even with this property set to true.
     */
    autoUpgradeMinorVersion?: boolean;
    /**
     * @member {any} [settings] Json formatted public settings for the extension.
     */
    settings?: any;
    /**
     * @member {any} [protectedSettings] The extension can contain either
     * protectedSettings or protectedSettingsFromKeyVault or no protected
     * settings at all.
     */
    protectedSettings?: any;
    /**
     * @member {string} [provisioningState] The provisioning state, which only
     * appears in the response.
     */
    readonly provisioningState?: string;
    /**
     * @member {VirtualMachineExtensionInstanceView} [instanceView] The virtual
     * machine extension instance view.
     */
    instanceView?: VirtualMachineExtensionInstanceView;
}
/**
 * @interface
 * An interface representing UpdateResource.
 * The Update Resource model definition.
 *
 * @extends BaseResource
 */
export interface UpdateResource extends BaseResource {
    /**
     * @member {{ [propertyName: string]: string }} [tags] Resource tags
     */
    tags?: {
        [propertyName: string]: string;
    };
}
/**
 * @interface
 * An interface representing VirtualMachineExtensionUpdate.
 * Describes a Virtual Machine Extension.
 *
 * @extends UpdateResource
 */
export interface VirtualMachineExtensionUpdate extends UpdateResource {
    /**
     * @member {string} [forceUpdateTag] How the extension handler should be
     * forced to update even if the extension configuration has not changed.
     */
    forceUpdateTag?: string;
    /**
     * @member {string} [publisher] The name of the extension handler publisher.
     */
    publisher?: string;
    /**
     * @member {string} [type] Specifies the type of the extension; an example is
     * "CustomScriptExtension".
     */
    type?: string;
    /**
     * @member {string} [typeHandlerVersion] Specifies the version of the script
     * handler.
     */
    typeHandlerVersion?: string;
    /**
     * @member {boolean} [autoUpgradeMinorVersion] Indicates whether the
     * extension should use a newer minor version if one is available at
     * deployment time. Once deployed, however, the extension will not upgrade
     * minor versions unless redeployed, even with this property set to true.
     */
    autoUpgradeMinorVersion?: boolean;
    /**
     * @member {any} [settings] Json formatted public settings for the extension.
     */
    settings?: any;
    /**
     * @member {any} [protectedSettings] The extension can contain either
     * protectedSettings or protectedSettingsFromKeyVault or no protected
     * settings at all.
     */
    protectedSettings?: any;
}
/**
 * @interface
 * An interface representing VirtualMachineExtensionsListResult.
 * The List Extension operation response
 *
 */
export interface VirtualMachineExtensionsListResult {
    /**
     * @member {VirtualMachineExtension[]} [value] The list of extensions
     */
    value?: VirtualMachineExtension[];
}
/**
 * @interface
 * An interface representing PurchasePlan.
 * Used for establishing the purchase context of any 3rd Party artifact through
 * MarketPlace.
 *
 */
export interface PurchasePlan {
    /**
     * @member {string} publisher The publisher ID.
     */
    publisher: string;
    /**
     * @member {string} name The plan ID.
     */
    name: string;
    /**
     * @member {string} product Specifies the product of the image from the
     * marketplace. This is the same value as Offer under the imageReference
     * element.
     */
    product: string;
}
/**
 * @interface
 * An interface representing OSDiskImage.
 * Contains the os disk image information.
 *
 */
export interface OSDiskImage {
    /**
     * @member {OperatingSystemTypes} operatingSystem The operating system of the
     * osDiskImage. Possible values include: 'Windows', 'Linux'
     */
    operatingSystem: OperatingSystemTypes;
}
/**
 * @interface
 * An interface representing DataDiskImage.
 * Contains the data disk images information.
 *
 */
export interface DataDiskImage {
    /**
     * @member {number} [lun] Specifies the logical unit number of the data disk.
     * This value is used to identify data disks within the VM and therefore must
     * be unique for each data disk attached to a VM.
     */
    readonly lun?: number;
}
/**
 * @interface
 * An interface representing VirtualMachineImage.
 * Describes a Virtual Machine Image.
 *
 * @extends VirtualMachineImageResource
 */
export interface VirtualMachineImage extends VirtualMachineImageResource {
    /**
     * @member {PurchasePlan} [plan]
     */
    plan?: PurchasePlan;
    /**
     * @member {OSDiskImage} [osDiskImage]
     */
    osDiskImage?: OSDiskImage;
    /**
     * @member {DataDiskImage[]} [dataDiskImages]
     */
    dataDiskImages?: DataDiskImage[];
}
/**
 * @interface
 * An interface representing UsageName.
 * The Usage Names.
 *
 */
export interface UsageName {
    /**
     * @member {string} [value] The name of the resource.
     */
    value?: string;
    /**
     * @member {string} [localizedValue] The localized name of the resource.
     */
    localizedValue?: string;
}
/**
 * @interface
 * An interface representing Usage.
 * Describes Compute Resource Usage.
 *
 */
export interface Usage {
    /**
     * @member {number} currentValue The current usage of the resource.
     */
    currentValue: number;
    /**
     * @member {number} limit The maximum permitted usage of the resource.
     */
    limit: number;
    /**
     * @member {UsageName} name The name of the type of usage.
     */
    name: UsageName;
}
/**
 * @interface
 * An interface representing VirtualMachineCaptureParameters.
 * Capture Virtual Machine parameters.
 *
 */
export interface VirtualMachineCaptureParameters {
    /**
     * @member {string} vhdPrefix The captured virtual hard disk's name prefix.
     */
    vhdPrefix: string;
    /**
     * @member {string} destinationContainerName The destination container name.
     */
    destinationContainerName: string;
    /**
     * @member {boolean} overwriteVhds Specifies whether to overwrite the
     * destination virtual hard disk, in case of conflict.
     */
    overwriteVhds: boolean;
}
/**
 * @interface
 * An interface representing VirtualMachineCaptureResult.
 * Resource Id.
 *
 * @extends SubResource
 */
export interface VirtualMachineCaptureResult extends SubResource {
    /**
     * @member {any} [output] Operation output data (raw JSON)
     */
    output?: any;
}
/**
 * @interface
 * An interface representing Plan.
 * Specifies information about the marketplace image used to create the virtual
 * machine. This element is only used for marketplace images. Before you can
 * use a marketplace image from an API, you must enable the image for
 * programmatic use.  In the Azure portal, find the marketplace image that you
 * want to use and then click **Want to deploy programmatically, Get Started
 * ->**. Enter any required information and then click **Save**.
 *
 */
export interface Plan {
    /**
     * @member {string} [name] The plan ID.
     */
    name?: string;
    /**
     * @member {string} [publisher] The publisher ID.
     */
    publisher?: string;
    /**
     * @member {string} [product] Specifies the product of the image from the
     * marketplace. This is the same value as Offer under the imageReference
     * element.
     */
    product?: string;
    /**
     * @member {string} [promotionCode] The promotion code.
     */
    promotionCode?: string;
}
/**
 * @interface
 * An interface representing HardwareProfile.
 * Specifies the hardware settings for the virtual machine.
 *
 */
export interface HardwareProfile {
    /**
     * @member {VirtualMachineSizeTypes} [vmSize] Specifies the size of the
     * virtual machine. For more information about virtual machine sizes, see
     * [Sizes for virtual
     * machines](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-sizes?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json).
     * <br><br> The available VM sizes depend on region and availability set. For
     * a list of available sizes use these APIs:  <br><br> [List all available
     * virtual machine sizes in an availability
     * set](virtualmachines-list-sizes-availability-set.md) <br><br> [List all
     * available virtual machine sizes in a
     * region](virtualmachines-list-sizes-region.md) <br><br> [List all available
     * virtual machine sizes for
     * resizing](virtualmachines-list-sizes-for-resizing.md). Possible values
     * include: 'Basic_A0', 'Basic_A1', 'Basic_A2', 'Basic_A3', 'Basic_A4',
     * 'Standard_A0', 'Standard_A1', 'Standard_A2', 'Standard_A3', 'Standard_A4',
     * 'Standard_A5', 'Standard_A6', 'Standard_A7', 'Standard_A8', 'Standard_A9',
     * 'Standard_A10', 'Standard_A11', 'Standard_A1_v2', 'Standard_A2_v2',
     * 'Standard_A4_v2', 'Standard_A8_v2', 'Standard_A2m_v2', 'Standard_A4m_v2',
     * 'Standard_A8m_v2', 'Standard_D1', 'Standard_D2', 'Standard_D3',
     * 'Standard_D4', 'Standard_D11', 'Standard_D12', 'Standard_D13',
     * 'Standard_D14', 'Standard_D1_v2', 'Standard_D2_v2', 'Standard_D3_v2',
     * 'Standard_D4_v2', 'Standard_D5_v2', 'Standard_D11_v2', 'Standard_D12_v2',
     * 'Standard_D13_v2', 'Standard_D14_v2', 'Standard_D15_v2', 'Standard_DS1',
     * 'Standard_DS2', 'Standard_DS3', 'Standard_DS4', 'Standard_DS11',
     * 'Standard_DS12', 'Standard_DS13', 'Standard_DS14', 'Standard_DS1_v2',
     * 'Standard_DS2_v2', 'Standard_DS3_v2', 'Standard_DS4_v2',
     * 'Standard_DS5_v2', 'Standard_DS11_v2', 'Standard_DS12_v2',
     * 'Standard_DS13_v2', 'Standard_DS14_v2', 'Standard_DS15_v2', 'Standard_F1',
     * 'Standard_F2', 'Standard_F4', 'Standard_F8', 'Standard_F16',
     * 'Standard_F1s', 'Standard_F2s', 'Standard_F4s', 'Standard_F8s',
     * 'Standard_F16s', 'Standard_G1', 'Standard_G2', 'Standard_G3',
     * 'Standard_G4', 'Standard_G5', 'Standard_GS1', 'Standard_GS2',
     * 'Standard_GS3', 'Standard_GS4', 'Standard_GS5', 'Standard_H8',
     * 'Standard_H16', 'Standard_H8m', 'Standard_H16m', 'Standard_H16r',
     * 'Standard_H16mr', 'Standard_L4s', 'Standard_L8s', 'Standard_L16s',
     * 'Standard_L32s', 'Standard_NC6', 'Standard_NC12', 'Standard_NC24',
     * 'Standard_NC24r', 'Standard_NV6', 'Standard_NV12', 'Standard_NV24'
     */
    vmSize?: VirtualMachineSizeTypes;
}
/**
 * @interface
 * An interface representing ImageReference.
 * Specifies information about the image to use. You can specify information
 * about platform images, marketplace images, or virtual machine images. This
 * element is required when you want to use a platform image, marketplace
 * image, or virtual machine image, but is not used in other creation
 * operations.
 *
 * @extends SubResource
 */
export interface ImageReference extends SubResource {
    /**
     * @member {string} [publisher] The image publisher.
     */
    publisher?: string;
    /**
     * @member {string} [offer] Specifies the offer of the platform image or
     * marketplace image used to create the virtual machine.
     */
    offer?: string;
    /**
     * @member {string} [sku] The image SKU.
     */
    sku?: string;
    /**
     * @member {string} [version] Specifies the version of the platform image or
     * marketplace image used to create the virtual machine. The allowed formats
     * are Major.Minor.Build or 'latest'. Major, Minor, and Build are decimal
     * numbers. Specify 'latest' to use the latest version of an image available
     * at deploy time. Even if you use 'latest', the VM image will not
     * automatically update after deploy time even if a new version becomes
     * available.
     */
    version?: string;
}
/**
 * @interface
 * An interface representing KeyVaultSecretReference.
 * Describes a reference to Key Vault Secret
 *
 */
export interface KeyVaultSecretReference {
    /**
     * @member {string} secretUrl The URL referencing a secret in a Key Vault.
     */
    secretUrl: string;
    /**
     * @member {SubResource} sourceVault The relative URL of the Key Vault
     * containing the secret.
     */
    sourceVault: SubResource;
}
/**
 * @interface
 * An interface representing KeyVaultKeyReference.
 * Describes a reference to Key Vault Key
 *
 */
export interface KeyVaultKeyReference {
    /**
     * @member {string} keyUrl The URL referencing a key encryption key in Key
     * Vault.
     */
    keyUrl: string;
    /**
     * @member {SubResource} sourceVault The relative URL of the Key Vault
     * containing the key.
     */
    sourceVault: SubResource;
}
/**
 * @interface
 * An interface representing DiskEncryptionSettings.
 * Describes a Encryption Settings for a Disk
 *
 */
export interface DiskEncryptionSettings {
    /**
     * @member {KeyVaultSecretReference} [diskEncryptionKey] Specifies the
     * location of the disk encryption key, which is a Key Vault Secret.
     */
    diskEncryptionKey?: KeyVaultSecretReference;
    /**
     * @member {KeyVaultKeyReference} [keyEncryptionKey] Specifies the location
     * of the key encryption key in Key Vault.
     */
    keyEncryptionKey?: KeyVaultKeyReference;
    /**
     * @member {boolean} [enabled] Specifies whether disk encryption should be
     * enabled on the virtual machine.
     */
    enabled?: boolean;
}
/**
 * @interface
 * An interface representing VirtualHardDisk.
 * Describes the uri of a disk.
 *
 */
export interface VirtualHardDisk {
    /**
     * @member {string} [uri] Specifies the virtual hard disk's uri.
     */
    uri?: string;
}
/**
 * @interface
 * An interface representing ManagedDiskParameters.
 * The parameters of a managed disk.
 *
 * @extends SubResource
 */
export interface ManagedDiskParameters extends SubResource {
    /**
     * @member {StorageAccountTypes} [storageAccountType] Specifies the storage
     * account type for the managed disk. Possible values are: Standard_LRS or
     * Premium_LRS. Possible values include: 'Standard_LRS', 'Premium_LRS'
     */
    storageAccountType?: StorageAccountTypes;
}
/**
 * @interface
 * An interface representing OSDisk.
 * Specifies information about the operating system disk used by the virtual
 * machine. <br><br> For more information about disks, see [About disks and
 * VHDs for Azure virtual
 * machines](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-about-disks-vhds?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json).
 *
 */
export interface OSDisk {
    /**
     * @member {OperatingSystemTypes} [osType] This property allows you to
     * specify the type of the OS that is included in the disk if creating a VM
     * from user-image or a specialized VHD. <br><br> Possible values are:
     * <br><br> **Windows** <br><br> **Linux**. Possible values include:
     * 'Windows', 'Linux'
     */
    osType?: OperatingSystemTypes;
    /**
     * @member {DiskEncryptionSettings} [encryptionSettings] Specifies the
     * encryption settings for the OS Disk. <br><br> Minimum api-version:
     * 2015-06-15
     */
    encryptionSettings?: DiskEncryptionSettings;
    /**
     * @member {string} [name] The disk name.
     */
    name?: string;
    /**
     * @member {VirtualHardDisk} [vhd] The virtual hard disk.
     */
    vhd?: VirtualHardDisk;
    /**
     * @member {VirtualHardDisk} [image] The source user image virtual hard disk.
     * The virtual hard disk will be copied before being attached to the virtual
     * machine. If SourceImage is provided, the destination virtual hard drive
     * must not exist.
     */
    image?: VirtualHardDisk;
    /**
     * @member {CachingTypes} [caching] Specifies the caching requirements.
     * <br><br> Possible values are: <br><br> **None** <br><br> **ReadOnly**
     * <br><br> **ReadWrite** <br><br> Default: **None for Standard storage.
     * ReadOnly for Premium storage**. Possible values include: 'None',
     * 'ReadOnly', 'ReadWrite'
     */
    caching?: CachingTypes;
    /**
     * @member {DiskCreateOptionTypes} createOption Specifies how the virtual
     * machine should be created.<br><br> Possible values are:<br><br> **Attach**
     * \u2013 This value is used when you are using a specialized disk to create
     * the virtual machine.<br><br> **FromImage** \u2013 This value is used when
     * you are using an image to create the virtual machine. If you are using a
     * platform image, you also use the imageReference element described above.
     * If you are using a marketplace image, you  also use the plan element
     * previously described. Possible values include: 'FromImage', 'Empty',
     * 'Attach'
     */
    createOption: DiskCreateOptionTypes;
    /**
     * @member {number} [diskSizeGB] Specifies the size of an empty data disk in
     * gigabytes. This element can be used to overwrite the name of the disk in a
     * virtual machine image. <br><br> This value cannot be larger than 1023 GB
     */
    diskSizeGB?: number;
    /**
     * @member {ManagedDiskParameters} [managedDisk] The managed disk parameters.
     */
    managedDisk?: ManagedDiskParameters;
}
/**
 * @interface
 * An interface representing DataDisk.
 * Describes a data disk.
 *
 */
export interface DataDisk {
    /**
     * @member {number} lun Specifies the logical unit number of the data disk.
     * This value is used to identify data disks within the VM and therefore must
     * be unique for each data disk attached to a VM.
     */
    lun: number;
    /**
     * @member {string} [name] The disk name.
     */
    name?: string;
    /**
     * @member {VirtualHardDisk} [vhd] The virtual hard disk.
     */
    vhd?: VirtualHardDisk;
    /**
     * @member {VirtualHardDisk} [image] The source user image virtual hard disk.
     * The virtual hard disk will be copied before being attached to the virtual
     * machine. If SourceImage is provided, the destination virtual hard drive
     * must not exist.
     */
    image?: VirtualHardDisk;
    /**
     * @member {CachingTypes} [caching] Specifies the caching requirements.
     * <br><br> Possible values are: <br><br> **None** <br><br> **ReadOnly**
     * <br><br> **ReadWrite** <br><br> Default: **None for Standard storage.
     * ReadOnly for Premium storage**. Possible values include: 'None',
     * 'ReadOnly', 'ReadWrite'
     */
    caching?: CachingTypes;
    /**
     * @member {DiskCreateOptionTypes} createOption Specifies how the virtual
     * machine should be created.<br><br> Possible values are:<br><br> **Attach**
     * \u2013 This value is used when you are using a specialized disk to create
     * the virtual machine.<br><br> **FromImage** \u2013 This value is used when
     * you are using an image to create the virtual machine. If you are using a
     * platform image, you also use the imageReference element described above.
     * If you are using a marketplace image, you  also use the plan element
     * previously described. Possible values include: 'FromImage', 'Empty',
     * 'Attach'
     */
    createOption: DiskCreateOptionTypes;
    /**
     * @member {number} [diskSizeGB] Specifies the size of an empty data disk in
     * gigabytes. This element can be used to overwrite the name of the disk in a
     * virtual machine image. <br><br> This value cannot be larger than 1023 GB
     */
    diskSizeGB?: number;
    /**
     * @member {ManagedDiskParameters} [managedDisk] The managed disk parameters.
     */
    managedDisk?: ManagedDiskParameters;
}
/**
 * @interface
 * An interface representing StorageProfile.
 * Specifies the storage settings for the virtual machine disks.
 *
 */
export interface StorageProfile {
    /**
     * @member {ImageReference} [imageReference] Specifies information about the
     * image to use. You can specify information about platform images,
     * marketplace images, or virtual machine images. This element is required
     * when you want to use a platform image, marketplace image, or virtual
     * machine image, but is not used in other creation operations.
     */
    imageReference?: ImageReference;
    /**
     * @member {OSDisk} [osDisk] Specifies information about the operating system
     * disk used by the virtual machine. <br><br> For more information about
     * disks, see [About disks and VHDs for Azure virtual
     * machines](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-about-disks-vhds?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json).
     */
    osDisk?: OSDisk;
    /**
     * @member {DataDisk[]} [dataDisks] Specifies the parameters that are used to
     * add a data disk to a virtual machine. <br><br> For more information about
     * disks, see [About disks and VHDs for Azure virtual
     * machines](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-about-disks-vhds?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json).
     */
    dataDisks?: DataDisk[];
}
/**
 * @interface
 * An interface representing AdditionalUnattendContent.
 * Specifies additional XML formatted information that can be included in the
 * Unattend.xml file, which is used by Windows Setup. Contents are defined by
 * setting name, component name, and the pass in which the content is applied.
 *
 */
export interface AdditionalUnattendContent {
    /**
     * @member {PassNames} [passName] The pass name. Currently, the only
     * allowable value is OobeSystem. Possible values include: 'OobeSystem'
     */
    passName?: PassNames;
    /**
     * @member {ComponentNames} [componentName] The component name. Currently,
     * the only allowable value is Microsoft-Windows-Shell-Setup. Possible values
     * include: 'Microsoft-Windows-Shell-Setup'
     */
    componentName?: ComponentNames;
    /**
     * @member {SettingNames} [settingName] Specifies the name of the setting to
     * which the content applies. Possible values are: FirstLogonCommands and
     * AutoLogon. Possible values include: 'AutoLogon', 'FirstLogonCommands'
     */
    settingName?: SettingNames;
    /**
     * @member {string} [content] Specifies the XML formatted content that is
     * added to the unattend.xml file for the specified path and component. The
     * XML must be less than 4KB and must include the root element for the
     * setting or feature that is being inserted.
     */
    content?: string;
}
/**
 * @interface
 * An interface representing WinRMListener.
 * Describes Protocol and thumbprint of Windows Remote Management listener
 *
 */
export interface WinRMListener {
    /**
     * @member {ProtocolTypes} [protocol] Specifies the protocol of listener.
     * <br><br> Possible values are: <br>**http** <br><br> **https**. Possible
     * values include: 'Http', 'Https'
     */
    protocol?: ProtocolTypes;
    /**
     * @member {string} [certificateUrl] This is the URL of a certificate that
     * has been uploaded to Key Vault as a secret. For adding a secret to the Key
     * Vault, see [Add a key or secret to the key
     * vault](https://docs.microsoft.com/azure/key-vault/key-vault-get-started/#add).
     * In this case, your certificate needs to be It is the Base64 encoding of
     * the following JSON Object which is encoded in UTF-8: <br><br> {<br>
     * "data":"<Base64-encoded-certificate>",<br>  "dataType":"pfx",<br>
     * "password":"<pfx-file-password>"<br>}
     */
    certificateUrl?: string;
}
/**
 * @interface
 * An interface representing WinRMConfiguration.
 * Describes Windows Remote Management configuration of the VM
 *
 */
export interface WinRMConfiguration {
    /**
     * @member {WinRMListener[]} [listeners] The list of Windows Remote
     * Management listeners
     */
    listeners?: WinRMListener[];
}
/**
 * @interface
 * An interface representing WindowsConfiguration.
 * Specifies Windows operating system settings on the virtual machine.
 *
 */
export interface WindowsConfiguration {
    /**
     * @member {boolean} [provisionVMAgent] Indicates whether virtual machine
     * agent should be provisioned on the virtual machine. <br><br> When this
     * property is not specified in the request body, default behavior is to set
     * it to true.  This will ensure that VM Agent is installed on the VM so that
     * extensions can be added to the VM later.
     */
    provisionVMAgent?: boolean;
    /**
     * @member {boolean} [enableAutomaticUpdates] Indicates whether virtual
     * machine is enabled for automatic updates.
     */
    enableAutomaticUpdates?: boolean;
    /**
     * @member {string} [timeZone] Specifies the time zone of the virtual
     * machine. e.g. "Pacific Standard Time"
     */
    timeZone?: string;
    /**
     * @member {AdditionalUnattendContent[]} [additionalUnattendContent]
     * Specifies additional base-64 encoded XML formatted information that can be
     * included in the Unattend.xml file, which is used by Windows Setup.
     */
    additionalUnattendContent?: AdditionalUnattendContent[];
    /**
     * @member {WinRMConfiguration} [winRM] Specifies the Windows Remote
     * Management listeners. This enables remote Windows PowerShell.
     */
    winRM?: WinRMConfiguration;
}
/**
 * @interface
 * An interface representing SshPublicKey.
 * Contains information about SSH certificate public key and the path on the
 * Linux VM where the public key is placed.
 *
 */
export interface SshPublicKey {
    /**
     * @member {string} [path] Specifies the full path on the created VM where
     * ssh public key is stored. If the file already exists, the specified key is
     * appended to the file. Example: /home/user/.ssh/authorized_keys
     */
    path?: string;
    /**
     * @member {string} [keyData] SSH public key certificate used to authenticate
     * with the VM through ssh. The key needs to be at least 2048-bit and in
     * ssh-rsa format. <br><br> For creating ssh keys, see [Create SSH keys on
     * Linux and Mac for Linux VMs in
     * Azure](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-mac-create-ssh-keys?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json).
     */
    keyData?: string;
}
/**
 * @interface
 * An interface representing SshConfiguration.
 * SSH configuration for Linux based VMs running on Azure
 *
 */
export interface SshConfiguration {
    /**
     * @member {SshPublicKey[]} [publicKeys] The list of SSH public keys used to
     * authenticate with linux based VMs.
     */
    publicKeys?: SshPublicKey[];
}
/**
 * @interface
 * An interface representing LinuxConfiguration.
 * Specifies the Linux operating system settings on the virtual machine.
 * <br><br>For a list of supported Linux distributions, see [Linux on
 * Azure-Endorsed
 * Distributions](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-endorsed-distros?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json)
 * <br><br> For running non-endorsed distributions, see [Information for
 * Non-Endorsed
 * Distributions](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-create-upload-generic?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json).
 *
 */
export interface LinuxConfiguration {
    /**
     * @member {boolean} [disablePasswordAuthentication] Specifies whether
     * password authentication should be disabled.
     */
    disablePasswordAuthentication?: boolean;
    /**
     * @member {SshConfiguration} [ssh] Specifies the ssh key configuration for a
     * Linux OS.
     */
    ssh?: SshConfiguration;
}
/**
 * @interface
 * An interface representing VaultCertificate.
 * Describes a single certificate reference in a Key Vault, and where the
 * certificate should reside on the VM.
 *
 */
export interface VaultCertificate {
    /**
     * @member {string} [certificateUrl] This is the URL of a certificate that
     * has been uploaded to Key Vault as a secret. For adding a secret to the Key
     * Vault, see [Add a key or secret to the key
     * vault](https://docs.microsoft.com/azure/key-vault/key-vault-get-started/#add).
     * In this case, your certificate needs to be It is the Base64 encoding of
     * the following JSON Object which is encoded in UTF-8: <br><br> {<br>
     * "data":"<Base64-encoded-certificate>",<br>  "dataType":"pfx",<br>
     * "password":"<pfx-file-password>"<br>}
     */
    certificateUrl?: string;
    /**
     * @member {string} [certificateStore] For Windows VMs, specifies the
     * certificate store on the Virtual Machine to which the certificate should
     * be added. The specified certificate store is implicitly in the
     * LocalMachine account. <br><br>For Linux VMs, the certificate file is
     * placed under the /var/lib/waagent directory, with the file name
     * <UppercaseThumbprint>.crt for the X509 certificate file and
     * <UppercaseThumbpring>.prv for private key. Both of these files are .pem
     * formatted.
     */
    certificateStore?: string;
}
/**
 * @interface
 * An interface representing VaultSecretGroup.
 * Describes a set of certificates which are all in the same Key Vault.
 *
 */
export interface VaultSecretGroup {
    /**
     * @member {SubResource} [sourceVault] The relative URL of the Key Vault
     * containing all of the certificates in VaultCertificates.
     */
    sourceVault?: SubResource;
    /**
     * @member {VaultCertificate[]} [vaultCertificates] The list of key vault
     * references in SourceVault which contain certificates.
     */
    vaultCertificates?: VaultCertificate[];
}
/**
 * @interface
 * An interface representing OSProfile.
 * Specifies the operating system settings for the virtual machine.
 *
 */
export interface OSProfile {
    /**
     * @member {string} [computerName] Specifies the host OS name of the virtual
     * machine. <br><br> **Max-length (Windows):** 15 characters <br><br>
     * **Max-length (Linux):** 64 characters. <br><br> For naming conventions and
     * restrictions see [Azure infrastructure services implementation
     * guidelines](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-infrastructure-subscription-accounts-guidelines?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json#1-naming-conventions).
     */
    computerName?: string;
    /**
     * @member {string} [adminUsername] Specifies the name of the administrator
     * account. <br><br> **Windows-only restriction:** Cannot end in "." <br><br>
     * **Disallowed values:** "administrator", "admin", "user", "user1", "test",
     * "user2", "test1", "user3", "admin1", "1", "123", "a", "actuser", "adm",
     * "admin2", "aspnet", "backup", "console", "david", "guest", "john",
     * "owner", "root", "server", "sql", "support", "support_388945a0", "sys",
     * "test2", "test3", "user4", "user5". <br><br> **Minimum-length (Linux):** 1
     * character <br><br> **Max-length (Linux):** 64 characters <br><br>
     * **Max-length (Windows):** 20 characters  <br><br><li> For root access to
     * the Linux VM, see [Using root privileges on Linux virtual machines in
     * Azure](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-use-root-privileges?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json)<br><li>
     * For a list of built-in system users on Linux that should not be used in
     * this field, see [Selecting User Names for Linux on
     * Azure](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-usernames?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json)
     */
    adminUsername?: string;
    /**
     * @member {string} [adminPassword] Specifies the password of the
     * administrator account. <br><br> **Minimum-length (Windows):** 8 characters
     * <br><br> **Minimum-length (Linux):** 6 characters <br><br> **Max-length
     * (Windows):** 123 characters <br><br> **Max-length (Linux):** 72 characters
     * <br><br> **Complexity requirements:** 3 out of 4 conditions below need to
     * be fulfilled <br> Has lower characters <br>Has upper characters <br> Has a
     * digit <br> Has a special character (Regex match [\W_]) <br><br>
     * **Disallowed values:** "abc@123", "P@$$w0rd", "P@ssw0rd", "P@ssword123",
     * "Pa$$word", "pass@word1", "Password!", "Password1", "Password22",
     * "iloveyou!" <br><br> For resetting the password, see [How to reset the
     * Remote Desktop service or its login password in a Windows
     * VM](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-reset-rdp?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json)
     * <br><br> For resetting root password, see [Manage users, SSH, and check or
     * repair disks on Azure Linux VMs using the VMAccess
     * Extension](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-using-vmaccess-extension?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json#reset-root-password)
     */
    adminPassword?: string;
    /**
     * @member {string} [customData] Specifies a base-64 encoded string of custom
     * data. The base-64 encoded string is decoded to a binary array that is
     * saved as a file on the Virtual Machine. The maximum length of the binary
     * array is 65535 bytes. <br><br> For using cloud-init for your VM, see
     * [Using cloud-init to customize a Linux VM during
     * creation](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-using-cloud-init?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json)
     */
    customData?: string;
    /**
     * @member {WindowsConfiguration} [windowsConfiguration] Specifies Windows
     * operating system settings on the virtual machine.
     */
    windowsConfiguration?: WindowsConfiguration;
    /**
     * @member {LinuxConfiguration} [linuxConfiguration] Specifies the Linux
     * operating system settings on the virtual machine. <br><br>For a list of
     * supported Linux distributions, see [Linux on Azure-Endorsed
     * Distributions](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-endorsed-distros?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json)
     * <br><br> For running non-endorsed distributions, see [Information for
     * Non-Endorsed
     * Distributions](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-create-upload-generic?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json).
     */
    linuxConfiguration?: LinuxConfiguration;
    /**
     * @member {VaultSecretGroup[]} [secrets] Specifies set of certificates that
     * should be installed onto the virtual machine.
     */
    secrets?: VaultSecretGroup[];
}
/**
 * @interface
 * An interface representing NetworkInterfaceReference.
 * Describes a network interface reference.
 *
 * @extends SubResource
 */
export interface NetworkInterfaceReference extends SubResource {
    /**
     * @member {boolean} [primary] Specifies the primary network interface in
     * case the virtual machine has more than 1 network interface.
     */
    primary?: boolean;
}
/**
 * @interface
 * An interface representing NetworkProfile.
 * Specifies the network interfaces of the virtual machine.
 *
 */
export interface NetworkProfile {
    /**
     * @member {NetworkInterfaceReference[]} [networkInterfaces] Specifies the
     * list of resource Ids for the network interfaces associated with the
     * virtual machine.
     */
    networkInterfaces?: NetworkInterfaceReference[];
}
/**
 * @interface
 * An interface representing BootDiagnostics.
 * Boot Diagnostics is a debugging feature which allows you to view Console
 * Output and Screenshot to diagnose VM status. <br><br> For Linux Virtual
 * Machines, you can easily view the output of your console log. <br><br> For
 * both Windows and Linux virtual machines, Azure also enables you to see a
 * screenshot of the VM from the hypervisor.
 *
 */
export interface BootDiagnostics {
    /**
     * @member {boolean} [enabled] Whether boot diagnostics should be enabled on
     * the Virtual Machine.
     */
    enabled?: boolean;
    /**
     * @member {string} [storageUri] Uri of the storage account to use for
     * placing the console output and screenshot.
     */
    storageUri?: string;
}
/**
 * @interface
 * An interface representing DiagnosticsProfile.
 * Specifies the boot diagnostic settings state. <br><br>Minimum api-version:
 * 2015-06-15.
 *
 */
export interface DiagnosticsProfile {
    /**
     * @member {BootDiagnostics} [bootDiagnostics] Boot Diagnostics is a
     * debugging feature which allows you to view Console Output and Screenshot
     * to diagnose VM status. <br><br> For Linux Virtual Machines, you can easily
     * view the output of your console log. <br><br> For both Windows and Linux
     * virtual machines, Azure also enables you to see a screenshot of the VM
     * from the hypervisor.
     */
    bootDiagnostics?: BootDiagnostics;
}
/**
 * @interface
 * An interface representing VirtualMachineExtensionHandlerInstanceView.
 * The instance view of a virtual machine extension handler.
 *
 */
export interface VirtualMachineExtensionHandlerInstanceView {
    /**
     * @member {string} [type] Specifies the type of the extension; an example is
     * "CustomScriptExtension".
     */
    type?: string;
    /**
     * @member {string} [typeHandlerVersion] Specifies the version of the script
     * handler.
     */
    typeHandlerVersion?: string;
    /**
     * @member {InstanceViewStatus} [status] The extension handler status.
     */
    status?: InstanceViewStatus;
}
/**
 * @interface
 * An interface representing VirtualMachineAgentInstanceView.
 * The instance view of the VM Agent running on the virtual machine.
 *
 */
export interface VirtualMachineAgentInstanceView {
    /**
     * @member {string} [vmAgentVersion] The VM Agent full version.
     */
    vmAgentVersion?: string;
    /**
     * @member {VirtualMachineExtensionHandlerInstanceView[]} [extensionHandlers]
     * The virtual machine extension handler instance view.
     */
    extensionHandlers?: VirtualMachineExtensionHandlerInstanceView[];
    /**
     * @member {InstanceViewStatus[]} [statuses] The resource status information.
     */
    statuses?: InstanceViewStatus[];
}
/**
 * @interface
 * An interface representing DiskInstanceView.
 * The instance view of the disk.
 *
 */
export interface DiskInstanceView {
    /**
     * @member {string} [name] The disk name.
     */
    name?: string;
    /**
     * @member {DiskEncryptionSettings[]} [encryptionSettings] Specifies the
     * encryption settings for the OS Disk. <br><br> Minimum api-version:
     * 2015-06-15
     */
    encryptionSettings?: DiskEncryptionSettings[];
    /**
     * @member {InstanceViewStatus[]} [statuses] The resource status information.
     */
    statuses?: InstanceViewStatus[];
}
/**
 * @interface
 * An interface representing BootDiagnosticsInstanceView.
 * The instance view of a virtual machine boot diagnostics.
 *
 */
export interface BootDiagnosticsInstanceView {
    /**
     * @member {string} [consoleScreenshotBlobUri] The console screenshot blob
     * URI.
     */
    consoleScreenshotBlobUri?: string;
    /**
     * @member {string} [serialConsoleLogBlobUri] The Linux serial console log
     * blob Uri.
     */
    serialConsoleLogBlobUri?: string;
}
/**
 * @interface
 * An interface representing VirtualMachineIdentity.
 * Identity for the virtual machine.
 *
 */
export interface VirtualMachineIdentity {
    /**
     * @member {string} [principalId] The principal id of virtual machine
     * identity.
     */
    readonly principalId?: string;
    /**
     * @member {string} [tenantId] The tenant id associated with the virtual
     * machine.
     */
    readonly tenantId?: string;
    /**
     * @member {ResourceIdentityType} [type] The type of identity used for the
     * virtual machine. Currently, the only supported type is 'SystemAssigned',
     * which implicitly creates an identity. Possible values include:
     * 'SystemAssigned'
     */
    type?: ResourceIdentityType;
}
/**
 * @interface
 * An interface representing MaintenanceRedeployStatus.
 * Maintenance Operation Status.
 *
 */
export interface MaintenanceRedeployStatus {
    /**
     * @member {boolean} [isCustomerInitiatedMaintenanceAllowed] True, if
     * customer is allowed to perform Maintenance.
     */
    isCustomerInitiatedMaintenanceAllowed?: boolean;
    /**
     * @member {Date} [preMaintenanceWindowStartTime] Start Time for the Pre
     * Maintenance Window.
     */
    preMaintenanceWindowStartTime?: Date;
    /**
     * @member {Date} [preMaintenanceWindowEndTime] End Time for the Pre
     * Maintenance Window.
     */
    preMaintenanceWindowEndTime?: Date;
    /**
     * @member {Date} [maintenanceWindowStartTime] Start Time for the Maintenance
     * Window.
     */
    maintenanceWindowStartTime?: Date;
    /**
     * @member {Date} [maintenanceWindowEndTime] End Time for the Maintenance
     * Window.
     */
    maintenanceWindowEndTime?: Date;
    /**
     * @member {MaintenanceOperationResultCodeTypes} [lastOperationResultCode]
     * The Last Maintenance Operation Result Code. Possible values include:
     * 'None', 'RetryLater', 'MaintenanceAborted', 'MaintenanceCompleted'
     */
    lastOperationResultCode?: MaintenanceOperationResultCodeTypes;
    /**
     * @member {string} [lastOperationMessage] Message returned for the last
     * Maintenance Operation.
     */
    lastOperationMessage?: string;
}
/**
 * @interface
 * An interface representing VirtualMachineInstanceView.
 * The instance view of a virtual machine.
 *
 */
export interface VirtualMachineInstanceView {
    /**
     * @member {number} [platformUpdateDomain] Specifies the update domain of the
     * virtual machine.
     */
    platformUpdateDomain?: number;
    /**
     * @member {number} [platformFaultDomain] Specifies the fault domain of the
     * virtual machine.
     */
    platformFaultDomain?: number;
    /**
     * @member {string} [rdpThumbPrint] The Remote desktop certificate
     * thumbprint.
     */
    rdpThumbPrint?: string;
    /**
     * @member {VirtualMachineAgentInstanceView} [vmAgent] The VM Agent running
     * on the virtual machine.
     */
    vmAgent?: VirtualMachineAgentInstanceView;
    /**
     * @member {MaintenanceRedeployStatus} [maintenanceRedeployStatus] The
     * Maintenance Operation status on the virtual machine.
     */
    maintenanceRedeployStatus?: MaintenanceRedeployStatus;
    /**
     * @member {DiskInstanceView[]} [disks] The virtual machine disk information.
     */
    disks?: DiskInstanceView[];
    /**
     * @member {VirtualMachineExtensionInstanceView[]} [extensions] The
     * extensions information.
     */
    extensions?: VirtualMachineExtensionInstanceView[];
    /**
     * @member {BootDiagnosticsInstanceView} [bootDiagnostics] Boot Diagnostics
     * is a debugging feature which allows you to view Console Output and
     * Screenshot to diagnose VM status. <br><br> For Linux Virtual Machines, you
     * can easily view the output of your console log. <br><br> For both Windows
     * and Linux virtual machines, Azure also enables you to see a screenshot of
     * the VM from the hypervisor.
     */
    bootDiagnostics?: BootDiagnosticsInstanceView;
    /**
     * @member {InstanceViewStatus[]} [statuses] The resource status information.
     */
    statuses?: InstanceViewStatus[];
}
/**
 * @interface
 * An interface representing VirtualMachine.
 * Describes a Virtual Machine.
 *
 * @extends Resource
 */
export interface VirtualMachine extends Resource {
    /**
     * @member {Plan} [plan] Specifies information about the marketplace image
     * used to create the virtual machine. This element is only used for
     * marketplace images. Before you can use a marketplace image from an API,
     * you must enable the image for programmatic use.  In the Azure portal, find
     * the marketplace image that you want to use and then click **Want to deploy
     * programmatically, Get Started ->**. Enter any required information and
     * then click **Save**.
     */
    plan?: Plan;
    /**
     * @member {HardwareProfile} [hardwareProfile] Specifies the hardware
     * settings for the virtual machine.
     */
    hardwareProfile?: HardwareProfile;
    /**
     * @member {StorageProfile} [storageProfile] Specifies the storage settings
     * for the virtual machine disks.
     */
    storageProfile?: StorageProfile;
    /**
     * @member {OSProfile} [osProfile] Specifies the operating system settings
     * for the virtual machine.
     */
    osProfile?: OSProfile;
    /**
     * @member {NetworkProfile} [networkProfile] Specifies the network interfaces
     * of the virtual machine.
     */
    networkProfile?: NetworkProfile;
    /**
     * @member {DiagnosticsProfile} [diagnosticsProfile] Specifies the boot
     * diagnostic settings state. <br><br>Minimum api-version: 2015-06-15.
     */
    diagnosticsProfile?: DiagnosticsProfile;
    /**
     * @member {SubResource} [availabilitySet] Specifies information about the
     * availability set that the virtual machine should be assigned to. Virtual
     * machines specified in the same availability set are allocated to different
     * nodes to maximize availability. For more information about availability
     * sets, see [Manage the availability of virtual
     * machines](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-manage-availability?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json).
     * <br><br> For more information on Azure planned maintainance, see [Planned
     * maintenance for virtual machines in
     * Azure](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-planned-maintenance?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json)
     * <br><br> Currently, a VM can only be added to availability set at creation
     * time. An existing VM cannot be added to an availability set.
     */
    availabilitySet?: SubResource;
    /**
     * @member {string} [provisioningState] The provisioning state, which only
     * appears in the response.
     */
    readonly provisioningState?: string;
    /**
     * @member {VirtualMachineInstanceView} [instanceView] The virtual machine
     * instance view.
     */
    readonly instanceView?: VirtualMachineInstanceView;
    /**
     * @member {string} [licenseType] Specifies that the image or disk that is
     * being used was licensed on-premises. This element is only used for images
     * that contain the Windows Server operating system. <br><br> Possible values
     * are: <br><br> Windows_Client <br><br> Windows_Server <br><br> If this
     * element is included in a request for an update, the value must match the
     * initial value. This value cannot be updated. <br><br> For more
     * information, see [Azure Hybrid Use Benefit for Windows
     * Server](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-hybrid-use-benefit-licensing?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json)
     * <br><br> Minimum api-version: 2015-06-15
     */
    licenseType?: string;
    /**
     * @member {string} [vmId] Specifies the VM unique ID which is a 128-bits
     * identifier that is encoded and stored in all Azure IaaS VMs SMBIOS and can
     * be read using platform BIOS commands.
     */
    readonly vmId?: string;
    /**
     * @member {VirtualMachineExtension[]} [resources] The virtual machine child
     * extension resources.
     */
    readonly resources?: VirtualMachineExtension[];
    /**
     * @member {VirtualMachineIdentity} [identity] The identity of the virtual
     * machine, if configured.
     */
    identity?: VirtualMachineIdentity;
    /**
     * @member {string[]} [zones] The virtual machine zones.
     */
    zones?: string[];
}
/**
 * @interface
 * An interface representing RollingUpgradePolicy.
 * The configuration parameters used while performing a rolling upgrade.
 *
 */
export interface RollingUpgradePolicy {
    /**
     * @member {number} [maxBatchInstancePercent] The maximum percent of total
     * virtual machine instances that will be upgraded simultaneously by the
     * rolling upgrade in one batch. As this is a maximum, unhealthy instances in
     * previous or future batches can cause the percentage of instances in a
     * batch to decrease to ensure higher reliability. The default value for this
     * parameter is 20%.
     */
    maxBatchInstancePercent?: number;
    /**
     * @member {number} [maxUnhealthyInstancePercent] The maximum percentage of
     * the total virtual machine instances in the scale set that can be
     * simultaneously unhealthy, either as a result of being upgraded, or by
     * being found in an unhealthy state by the virtual machine health checks
     * before the rolling upgrade aborts. This constraint will be checked prior
     * to starting any batch. The default value for this parameter is 20%.
     */
    maxUnhealthyInstancePercent?: number;
    /**
     * @member {number} [maxUnhealthyUpgradedInstancePercent] The maximum
     * percentage of upgraded virtual machine instances that can be found to be
     * in an unhealthy state. This check will happen after each batch is
     * upgraded. If this percentage is ever exceeded, the rolling update aborts.
     * The default value for this parameter is 20%.
     */
    maxUnhealthyUpgradedInstancePercent?: number;
    /**
     * @member {string} [pauseTimeBetweenBatches] The wait time between
     * completing the update for all virtual machines in one batch and starting
     * the next batch. The time duration should be specified in ISO 8601 format.
     * The default value is 0 seconds (PT0S).
     */
    pauseTimeBetweenBatches?: string;
}
/**
 * @interface
 * An interface representing UpgradePolicy.
 * Describes an upgrade policy - automatic, manual, or rolling.
 *
 */
export interface UpgradePolicy {
    /**
     * @member {UpgradeMode} [mode] Specifies the mode of an upgrade to virtual
     * machines in the scale set.<br /><br /> Possible values are:<br /><br />
     * **Manual** - You  control the application of updates to virtual machines
     * in the scale set. You do this by using the manualUpgrade action.<br /><br
     * /> **Automatic** - All virtual machines in the scale set are
     * automatically updated at the same time. Possible values include:
     * 'Automatic', 'Manual', 'Rolling'
     */
    mode?: UpgradeMode;
    /**
     * @member {RollingUpgradePolicy} [rollingUpgradePolicy] The configuration
     * parameters used while performing a rolling upgrade.
     */
    rollingUpgradePolicy?: RollingUpgradePolicy;
    /**
     * @member {boolean} [automaticOSUpgrade] Whether OS upgrades should
     * automatically be applied to scale set instances in a rolling fashion when
     * a newer version of the image becomes available.
     */
    automaticOSUpgrade?: boolean;
}
/**
 * @interface
 * An interface representing ImageOSDisk.
 * Describes an Operating System disk.
 *
 */
export interface ImageOSDisk {
    /**
     * @member {OperatingSystemTypes} osType This property allows you to specify
     * the type of the OS that is included in the disk if creating a VM from a
     * custom image. <br><br> Possible values are: <br><br> **Windows** <br><br>
     * **Linux**. Possible values include: 'Windows', 'Linux'
     */
    osType: OperatingSystemTypes;
    /**
     * @member {OperatingSystemStateTypes} osState The OS State. Possible values
     * include: 'Generalized', 'Specialized'
     */
    osState: OperatingSystemStateTypes;
    /**
     * @member {SubResource} [snapshot] The snapshot.
     */
    snapshot?: SubResource;
    /**
     * @member {SubResource} [managedDisk] The managedDisk.
     */
    managedDisk?: SubResource;
    /**
     * @member {string} [blobUri] The Virtual Hard Disk.
     */
    blobUri?: string;
    /**
     * @member {CachingTypes} [caching] Specifies the caching requirements.
     * <br><br> Possible values are: <br><br> **None** <br><br> **ReadOnly**
     * <br><br> **ReadWrite** <br><br> Default: **None for Standard storage.
     * ReadOnly for Premium storage**. Possible values include: 'None',
     * 'ReadOnly', 'ReadWrite'
     */
    caching?: CachingTypes;
    /**
     * @member {number} [diskSizeGB] Specifies the size of empty data disks in
     * gigabytes. This element can be used to overwrite the name of the disk in a
     * virtual machine image. <br><br> This value cannot be larger than 1023 GB
     */
    diskSizeGB?: number;
    /**
     * @member {StorageAccountTypes} [storageAccountType] Specifies the storage
     * account type for the managed disk. Possible values are: Standard_LRS or
     * Premium_LRS. Possible values include: 'Standard_LRS', 'Premium_LRS'
     */
    storageAccountType?: StorageAccountTypes;
}
/**
 * @interface
 * An interface representing ImageDataDisk.
 * Describes a data disk.
 *
 */
export interface ImageDataDisk {
    /**
     * @member {number} lun Specifies the logical unit number of the data disk.
     * This value is used to identify data disks within the VM and therefore must
     * be unique for each data disk attached to a VM.
     */
    lun: number;
    /**
     * @member {SubResource} [snapshot] The snapshot.
     */
    snapshot?: SubResource;
    /**
     * @member {SubResource} [managedDisk] The managedDisk.
     */
    managedDisk?: SubResource;
    /**
     * @member {string} [blobUri] The Virtual Hard Disk.
     */
    blobUri?: string;
    /**
     * @member {CachingTypes} [caching] Specifies the caching requirements.
     * <br><br> Possible values are: <br><br> **None** <br><br> **ReadOnly**
     * <br><br> **ReadWrite** <br><br> Default: **None for Standard storage.
     * ReadOnly for Premium storage**. Possible values include: 'None',
     * 'ReadOnly', 'ReadWrite'
     */
    caching?: CachingTypes;
    /**
     * @member {number} [diskSizeGB] Specifies the size of empty data disks in
     * gigabytes. This element can be used to overwrite the name of the disk in a
     * virtual machine image. <br><br> This value cannot be larger than 1023 GB
     */
    diskSizeGB?: number;
    /**
     * @member {StorageAccountTypes} [storageAccountType] Specifies the storage
     * account type for the managed disk. Possible values are: Standard_LRS or
     * Premium_LRS. Possible values include: 'Standard_LRS', 'Premium_LRS'
     */
    storageAccountType?: StorageAccountTypes;
}
/**
 * @interface
 * An interface representing ImageStorageProfile.
 * Describes a storage profile.
 *
 */
export interface ImageStorageProfile {
    /**
     * @member {ImageOSDisk} osDisk Specifies information about the operating
     * system disk used by the virtual machine. <br><br> For more information
     * about disks, see [About disks and VHDs for Azure virtual
     * machines](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-about-disks-vhds?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json).
     */
    osDisk: ImageOSDisk;
    /**
     * @member {ImageDataDisk[]} [dataDisks] Specifies the parameters that are
     * used to add a data disk to a virtual machine. <br><br> For more
     * information about disks, see [About disks and VHDs for Azure virtual
     * machines](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-about-disks-vhds?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json).
     */
    dataDisks?: ImageDataDisk[];
}
/**
 * @interface
 * An interface representing Image.
 * The source user image virtual hard disk. The virtual hard disk will be
 * copied before being attached to the virtual machine. If SourceImage is
 * provided, the destination virtual hard drive must not exist.
 *
 * @extends Resource
 */
export interface Image extends Resource {
    /**
     * @member {SubResource} [sourceVirtualMachine] The source virtual machine
     * from which Image is created.
     */
    sourceVirtualMachine?: SubResource;
    /**
     * @member {ImageStorageProfile} [storageProfile] Specifies the storage
     * settings for the virtual machine disks.
     */
    storageProfile?: ImageStorageProfile;
    /**
     * @member {string} [provisioningState] The provisioning state.
     */
    readonly provisioningState?: string;
}
/**
 * @interface
 * An interface representing VirtualMachineScaleSetIdentity.
 * Identity for the virtual machine scale set.
 *
 */
export interface VirtualMachineScaleSetIdentity {
    /**
     * @member {string} [principalId] The principal id of virtual machine scale
     * set identity.
     */
    readonly principalId?: string;
    /**
     * @member {string} [tenantId] The tenant id associated with the virtual
     * machine scale set.
     */
    readonly tenantId?: string;
    /**
     * @member {ResourceIdentityType} [type] The type of identity used for the
     * virtual machine scale set. Currently, the only supported type is
     * 'SystemAssigned', which implicitly creates an identity. Possible values
     * include: 'SystemAssigned'
     */
    type?: ResourceIdentityType;
}
/**
 * @interface
 * An interface representing ResourceSkuCapacity.
 * Describes scaling information of a SKU.
 *
 */
export interface ResourceSkuCapacity {
    /**
     * @member {number} [minimum] The minimum capacity.
     */
    readonly minimum?: number;
    /**
     * @member {number} [maximum] The maximum capacity that can be set.
     */
    readonly maximum?: number;
    /**
     * @member {number} [default] The default capacity.
     */
    readonly default?: number;
    /**
     * @member {ResourceSkuCapacityScaleType} [scaleType] The scale type
     * applicable to the sku. Possible values include: 'Automatic', 'Manual',
     * 'None'
     */
    readonly scaleType?: ResourceSkuCapacityScaleType;
}
/**
 * @interface
 * An interface representing ResourceSkuCosts.
 * Describes metadata for retrieving price info.
 *
 */
export interface ResourceSkuCosts {
    /**
     * @member {string} [meterID] Used for querying price from commerce.
     */
    readonly meterID?: string;
    /**
     * @member {number} [quantity] The multiplier is needed to extend the base
     * metered cost.
     */
    readonly quantity?: number;
    /**
     * @member {string} [extendedUnit] An invariant to show the extended unit.
     */
    readonly extendedUnit?: string;
}
/**
 * @interface
 * An interface representing ResourceSkuCapabilities.
 * Describes The SKU capabilites object.
 *
 */
export interface ResourceSkuCapabilities {
    /**
     * @member {string} [name] An invariant to describe the feature.
     */
    readonly name?: string;
    /**
     * @member {string} [value] An invariant if the feature is measured by
     * quantity.
     */
    readonly value?: string;
}
/**
 * @interface
 * An interface representing ResourceSkuRestrictions.
 * Describes scaling information of a SKU.
 *
 */
export interface ResourceSkuRestrictions {
    /**
     * @member {ResourceSkuRestrictionsType} [type] The type of restrictions.
     * Possible values include: 'Location'
     */
    readonly type?: ResourceSkuRestrictionsType;
    /**
     * @member {string[]} [values] The value of restrictions. If the restriction
     * type is set to location. This would be different locations where the SKU
     * is restricted.
     */
    readonly values?: string[];
    /**
     * @member {ResourceSkuRestrictionsReasonCode} [reasonCode] The reason for
     * restriction. Possible values include: 'QuotaId',
     * 'NotAvailableForSubscription'
     */
    readonly reasonCode?: ResourceSkuRestrictionsReasonCode;
}
/**
 * @interface
 * An interface representing ResourceSku.
 * Describes an available Compute SKU.
 *
 */
export interface ResourceSku {
    /**
     * @member {string} [resourceType] The type of resource the SKU applies to.
     */
    readonly resourceType?: string;
    /**
     * @member {string} [name] The name of SKU.
     */
    readonly name?: string;
    /**
     * @member {string} [tier] Specifies the tier of virtual machines in a scale
     * set.<br /><br /> Possible Values:<br /><br /> **Standard**<br /><br />
     * **Basic**
     */
    readonly tier?: string;
    /**
     * @member {string} [size] The Size of the SKU.
     */
    readonly size?: string;
    /**
     * @member {string} [family] The Family of this particular SKU.
     */
    readonly family?: string;
    /**
     * @member {string} [kind] The Kind of resources that are supported in this
     * SKU.
     */
    readonly kind?: string;
    /**
     * @member {ResourceSkuCapacity} [capacity] Specifies the number of virtual
     * machines in the scale set.
     */
    readonly capacity?: ResourceSkuCapacity;
    /**
     * @member {string[]} [locations] The set of locations that the SKU is
     * available.
     */
    readonly locations?: string[];
    /**
     * @member {string[]} [apiVersions] The api versions that support this SKU.
     */
    readonly apiVersions?: string[];
    /**
     * @member {ResourceSkuCosts[]} [costs] Metadata for retrieving price info.
     */
    readonly costs?: ResourceSkuCosts[];
    /**
     * @member {ResourceSkuCapabilities[]} [capabilities] A name value pair to
     * describe the capability.
     */
    readonly capabilities?: ResourceSkuCapabilities[];
    /**
     * @member {ResourceSkuRestrictions[]} [restrictions] The restrictions
     * because of which SKU cannot be used. This is empty if there are no
     * restrictions.
     */
    readonly restrictions?: ResourceSkuRestrictions[];
}
/**
 * @interface
 * An interface representing VirtualMachineScaleSetOSProfile.
 * Describes a virtual machine scale set OS profile.
 *
 */
export interface VirtualMachineScaleSetOSProfile {
    /**
     * @member {string} [computerNamePrefix] Specifies the computer name prefix
     * for all of the virtual machines in the scale set. Computer name prefixes
     * must be 1 to 15 characters long.
     */
    computerNamePrefix?: string;
    /**
     * @member {string} [adminUsername] Specifies the name of the administrator
     * account. <br><br> **Windows-only restriction:** Cannot end in "." <br><br>
     * **Disallowed values:** "administrator", "admin", "user", "user1", "test",
     * "user2", "test1", "user3", "admin1", "1", "123", "a", "actuser", "adm",
     * "admin2", "aspnet", "backup", "console", "david", "guest", "john",
     * "owner", "root", "server", "sql", "support", "support_388945a0", "sys",
     * "test2", "test3", "user4", "user5". <br><br> **Minimum-length (Linux):** 1
     * character <br><br> **Max-length (Linux):** 64 characters <br><br>
     * **Max-length (Windows):** 20 characters  <br><br><li> For root access to
     * the Linux VM, see [Using root privileges on Linux virtual machines in
     * Azure](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-use-root-privileges?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json)<br><li>
     * For a list of built-in system users on Linux that should not be used in
     * this field, see [Selecting User Names for Linux on
     * Azure](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-usernames?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json)
     */
    adminUsername?: string;
    /**
     * @member {string} [adminPassword] Specifies the password of the
     * administrator account. <br><br> **Minimum-length (Windows):** 8 characters
     * <br><br> **Minimum-length (Linux):** 6 characters <br><br> **Max-length
     * (Windows):** 123 characters <br><br> **Max-length (Linux):** 72 characters
     * <br><br> **Complexity requirements:** 3 out of 4 conditions below need to
     * be fulfilled <br> Has lower characters <br>Has upper characters <br> Has a
     * digit <br> Has a special character (Regex match [\W_]) <br><br>
     * **Disallowed values:** "abc@123", "P@$$w0rd", "P@ssw0rd", "P@ssword123",
     * "Pa$$word", "pass@word1", "Password!", "Password1", "Password22",
     * "iloveyou!" <br><br> For resetting the password, see [How to reset the
     * Remote Desktop service or its login password in a Windows
     * VM](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-reset-rdp?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json)
     * <br><br> For resetting root password, see [Manage users, SSH, and check or
     * repair disks on Azure Linux VMs using the VMAccess
     * Extension](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-using-vmaccess-extension?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json#reset-root-password)
     */
    adminPassword?: string;
    /**
     * @member {string} [customData] Specifies a base-64 encoded string of custom
     * data. The base-64 encoded string is decoded to a binary array that is
     * saved as a file on the Virtual Machine. The maximum length of the binary
     * array is 65535 bytes. <br><br> For using cloud-init for your VM, see
     * [Using cloud-init to customize a Linux VM during
     * creation](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-using-cloud-init?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json)
     */
    customData?: string;
    /**
     * @member {WindowsConfiguration} [windowsConfiguration] Specifies Windows
     * operating system settings on the virtual machine.
     */
    windowsConfiguration?: WindowsConfiguration;
    /**
     * @member {LinuxConfiguration} [linuxConfiguration] Specifies the Linux
     * operating system settings on the virtual machine. <br><br>For a list of
     * supported Linux distributions, see [Linux on Azure-Endorsed
     * Distributions](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-endorsed-distros?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json)
     * <br><br> For running non-endorsed distributions, see [Information for
     * Non-Endorsed
     * Distributions](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-create-upload-generic?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json).
     */
    linuxConfiguration?: LinuxConfiguration;
    /**
     * @member {VaultSecretGroup[]} [secrets] Specifies set of certificates that
     * should be installed onto the virtual machines in the scale set.
     */
    secrets?: VaultSecretGroup[];
}
/**
 * @interface
 * An interface representing VirtualMachineScaleSetUpdateOSProfile.
 * Describes a virtual machine scale set OS profile.
 *
 */
export interface VirtualMachineScaleSetUpdateOSProfile {
    /**
     * @member {string} [customData] A base-64 encoded string of custom data.
     */
    customData?: string;
    /**
     * @member {WindowsConfiguration} [windowsConfiguration] The Windows
     * Configuration of the OS profile.
     */
    windowsConfiguration?: WindowsConfiguration;
    /**
     * @member {LinuxConfiguration} [linuxConfiguration] The Linux Configuration
     * of the OS profile.
     */
    linuxConfiguration?: LinuxConfiguration;
    /**
     * @member {VaultSecretGroup[]} [secrets] The List of certificates for
     * addition to the VM.
     */
    secrets?: VaultSecretGroup[];
}
/**
 * @interface
 * An interface representing VirtualMachineScaleSetManagedDiskParameters.
 * Describes the parameters of a ScaleSet managed disk.
 *
 */
export interface VirtualMachineScaleSetManagedDiskParameters {
    /**
     * @member {StorageAccountTypes} [storageAccountType] Specifies the storage
     * account type for the managed disk. Possible values are: Standard_LRS or
     * Premium_LRS. Possible values include: 'Standard_LRS', 'Premium_LRS'
     */
    storageAccountType?: StorageAccountTypes;
}
/**
 * @interface
 * An interface representing VirtualMachineScaleSetOSDisk.
 * Describes a virtual machine scale set operating system disk.
 *
 */
export interface VirtualMachineScaleSetOSDisk {
    /**
     * @member {string} [name] The disk name.
     */
    name?: string;
    /**
     * @member {CachingTypes} [caching] Specifies the caching requirements.
     * <br><br> Possible values are: <br><br> **None** <br><br> **ReadOnly**
     * <br><br> **ReadWrite** <br><br> Default: **None for Standard storage.
     * ReadOnly for Premium storage**. Possible values include: 'None',
     * 'ReadOnly', 'ReadWrite'
     */
    caching?: CachingTypes;
    /**
     * @member {DiskCreateOptionTypes} createOption Specifies how the virtual
     * machines in the scale set should be created.<br><br> The only allowed
     * value is: **FromImage** \u2013 This value is used when you are using an
     * image to create the virtual machine. If you are using a platform image,
     * you also use the imageReference element described above. If you are using
     * a marketplace image, you  also use the plan element previously described.
     * Possible values include: 'FromImage', 'Empty', 'Attach'
     */
    createOption: DiskCreateOptionTypes;
    /**
     * @member {OperatingSystemTypes} [osType] This property allows you to
     * specify the type of the OS that is included in the disk if creating a VM
     * from user-image or a specialized VHD. <br><br> Possible values are:
     * <br><br> **Windows** <br><br> **Linux**. Possible values include:
     * 'Windows', 'Linux'
     */
    osType?: OperatingSystemTypes;
    /**
     * @member {VirtualHardDisk} [image] Specifies information about the
     * unmanaged user image to base the scale set on.
     */
    image?: VirtualHardDisk;
    /**
     * @member {string[]} [vhdContainers] Specifies the container urls that are
     * used to store operating system disks for the scale set.
     */
    vhdContainers?: string[];
    /**
     * @member {VirtualMachineScaleSetManagedDiskParameters} [managedDisk] The
     * managed disk parameters.
     */
    managedDisk?: VirtualMachineScaleSetManagedDiskParameters;
}
/**
 * @interface
 * An interface representing VirtualMachineScaleSetUpdateOSDisk.
 * Describes virtual machine scale set operating system disk Update Object.
 * This should be used for Updating VMSS OS Disk.
 *
 */
export interface VirtualMachineScaleSetUpdateOSDisk {
    /**
     * @member {CachingTypes} [caching] The caching type. Possible values
     * include: 'None', 'ReadOnly', 'ReadWrite'
     */
    caching?: CachingTypes;
    /**
     * @member {VirtualHardDisk} [image] The Source User Image VirtualHardDisk.
     * This VirtualHardDisk will be copied before using it to attach to the
     * Virtual Machine. If SourceImage is provided, the destination
     * VirtualHardDisk should not exist.
     */
    image?: VirtualHardDisk;
    /**
     * @member {string[]} [vhdContainers] The list of virtual hard disk container
     * uris.
     */
    vhdContainers?: string[];
    /**
     * @member {VirtualMachineScaleSetManagedDiskParameters} [managedDisk] The
     * managed disk parameters.
     */
    managedDisk?: VirtualMachineScaleSetManagedDiskParameters;
}
/**
 * @interface
 * An interface representing VirtualMachineScaleSetDataDisk.
 * Describes a virtual machine scale set data disk.
 *
 */
export interface VirtualMachineScaleSetDataDisk {
    /**
     * @member {string} [name] The disk name.
     */
    name?: string;
    /**
     * @member {number} lun Specifies the logical unit number of the data disk.
     * This value is used to identify data disks within the VM and therefore must
     * be unique for each data disk attached to a VM.
     */
    lun: number;
    /**
     * @member {CachingTypes} [caching] Specifies the caching requirements.
     * <br><br> Possible values are: <br><br> **None** <br><br> **ReadOnly**
     * <br><br> **ReadWrite** <br><br> Default: **None for Standard storage.
     * ReadOnly for Premium storage**. Possible values include: 'None',
     * 'ReadOnly', 'ReadWrite'
     */
    caching?: CachingTypes;
    /**
     * @member {DiskCreateOptionTypes} createOption The create option. Possible
     * values include: 'FromImage', 'Empty', 'Attach'
     */
    createOption: DiskCreateOptionTypes;
    /**
     * @member {number} [diskSizeGB] Specifies the size of an empty data disk in
     * gigabytes. This element can be used to overwrite the name of the disk in a
     * virtual machine image. <br><br> This value cannot be larger than 1023 GB
     */
    diskSizeGB?: number;
    /**
     * @member {VirtualMachineScaleSetManagedDiskParameters} [managedDisk] The
     * managed disk parameters.
     */
    managedDisk?: VirtualMachineScaleSetManagedDiskParameters;
}
/**
 * @interface
 * An interface representing VirtualMachineScaleSetStorageProfile.
 * Describes a virtual machine scale set storage profile.
 *
 */
export interface VirtualMachineScaleSetStorageProfile {
    /**
     * @member {ImageReference} [imageReference] Specifies information about the
     * image to use. You can specify information about platform images,
     * marketplace images, or virtual machine images. This element is required
     * when you want to use a platform image, marketplace image, or virtual
     * machine image, but is not used in other creation operations.
     */
    imageReference?: ImageReference;
    /**
     * @member {VirtualMachineScaleSetOSDisk} [osDisk] Specifies information
     * about the operating system disk used by the virtual machines in the scale
     * set. <br><br> For more information about disks, see [About disks and VHDs
     * for Azure virtual
     * machines](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-about-disks-vhds?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json).
     */
    osDisk?: VirtualMachineScaleSetOSDisk;
    /**
     * @member {VirtualMachineScaleSetDataDisk[]} [dataDisks] Specifies the
     * parameters that are used to add data disks to the virtual machines in the
     * scale set. <br><br> For more information about disks, see [About disks and
     * VHDs for Azure virtual
     * machines](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-about-disks-vhds?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json).
     */
    dataDisks?: VirtualMachineScaleSetDataDisk[];
}
/**
 * @interface
 * An interface representing VirtualMachineScaleSetUpdateStorageProfile.
 * Describes a virtual machine scale set storage profile.
 *
 */
export interface VirtualMachineScaleSetUpdateStorageProfile {
    /**
     * @member {ImageReference} [imageReference] The image reference.
     */
    imageReference?: ImageReference;
    /**
     * @member {VirtualMachineScaleSetUpdateOSDisk} [osDisk] The OS disk.
     */
    osDisk?: VirtualMachineScaleSetUpdateOSDisk;
    /**
     * @member {VirtualMachineScaleSetDataDisk[]} [dataDisks] The data disks.
     */
    dataDisks?: VirtualMachineScaleSetDataDisk[];
}
/**
 * @interface
 * An interface representing ApiEntityReference.
 * The API entity reference.
 *
 */
export interface ApiEntityReference {
    /**
     * @member {string} [id] The ARM resource id in the form of
     * /subscriptions/{SubcriptionId}/resourceGroups/{ResourceGroupName}/...
     */
    id?: string;
}
/**
 * @interface
 * An interface representing VirtualMachineScaleSetPublicIPAddressConfigurationDnsSettings.
 * Describes a virtual machines scale sets network configuration's DNS
 * settings.
 *
 */
export interface VirtualMachineScaleSetPublicIPAddressConfigurationDnsSettings {
    /**
     * @member {string} domainNameLabel The Domain name label.The concatenation
     * of the domain name label and vm index will be the domain name labels of
     * the PublicIPAddress resources that will be created
     */
    domainNameLabel: string;
}
/**
 * @interface
 * An interface representing VirtualMachineScaleSetPublicIPAddressConfiguration.
 * Describes a virtual machines scale set IP Configuration's PublicIPAddress
 * configuration
 *
 */
export interface VirtualMachineScaleSetPublicIPAddressConfiguration {
    /**
     * @member {string} name The publicIP address configuration name.
     */
    name: string;
    /**
     * @member {number} [idleTimeoutInMinutes] The idle timeout of the public IP
     * address.
     */
    idleTimeoutInMinutes?: number;
    /**
     * @member {VirtualMachineScaleSetPublicIPAddressConfigurationDnsSettings}
     * [dnsSettings] The dns settings to be applied on the publicIP addresses .
     */
    dnsSettings?: VirtualMachineScaleSetPublicIPAddressConfigurationDnsSettings;
}
/**
 * @interface
 * An interface representing VirtualMachineScaleSetUpdatePublicIPAddressConfiguration.
 * Describes a virtual machines scale set IP Configuration's PublicIPAddress
 * configuration
 *
 */
export interface VirtualMachineScaleSetUpdatePublicIPAddressConfiguration {
    /**
     * @member {string} [name] The publicIP address configuration name.
     */
    name?: string;
    /**
     * @member {number} [idleTimeoutInMinutes] The idle timeout of the public IP
     * address.
     */
    idleTimeoutInMinutes?: number;
    /**
     * @member {VirtualMachineScaleSetPublicIPAddressConfigurationDnsSettings}
     * [dnsSettings] The dns settings to be applied on the publicIP addresses .
     */
    dnsSettings?: VirtualMachineScaleSetPublicIPAddressConfigurationDnsSettings;
}
/**
 * @interface
 * An interface representing VirtualMachineScaleSetIPConfiguration.
 * Describes a virtual machine scale set network profile's IP configuration.
 *
 * @extends SubResource
 */
export interface VirtualMachineScaleSetIPConfiguration extends SubResource {
    /**
     * @member {string} name The IP configuration name.
     */
    name: string;
    /**
     * @member {ApiEntityReference} [subnet] Specifies the identifier of the
     * subnet.
     */
    subnet?: ApiEntityReference;
    /**
     * @member {boolean} [primary] Specifies the primary network interface in
     * case the virtual machine has more than 1 network interface.
     */
    primary?: boolean;
    /**
     * @member {VirtualMachineScaleSetPublicIPAddressConfiguration}
     * [publicIPAddressConfiguration] The publicIPAddressConfiguration.
     */
    publicIPAddressConfiguration?: VirtualMachineScaleSetPublicIPAddressConfiguration;
    /**
     * @member {IPVersion} [privateIPAddressVersion] Available from Api-Version
     * 2017-03-30 onwards, it represents whether the specific ipconfiguration is
     * IPv4 or IPv6. Default is taken as IPv4.  Possible values are: 'IPv4' and
     * 'IPv6'. Possible values include: 'IPv4', 'IPv6'
     */
    privateIPAddressVersion?: IPVersion;
    /**
     * @member {SubResource[]} [applicationGatewayBackendAddressPools] Specifies
     * an array of references to backend address pools of application gateways. A
     * scale set can reference backend address pools of multiple application
     * gateways. Multiple scale sets cannot use the same application gateway.
     */
    applicationGatewayBackendAddressPools?: SubResource[];
    /**
     * @member {SubResource[]} [loadBalancerBackendAddressPools] Specifies an
     * array of references to backend address pools of load balancers. A scale
     * set can reference backend address pools of one public and one internal
     * load balancer. Multiple scale sets cannot use the same load balancer.
     */
    loadBalancerBackendAddressPools?: SubResource[];
    /**
     * @member {SubResource[]} [loadBalancerInboundNatPools] Specifies an array
     * of references to inbound Nat pools of the load balancers. A scale set can
     * reference inbound nat pools of one public and one internal load balancer.
     * Multiple scale sets cannot use the same load balancer
     */
    loadBalancerInboundNatPools?: SubResource[];
}
/**
 * @interface
 * An interface representing VirtualMachineScaleSetUpdateIPConfiguration.
 * Describes a virtual machine scale set network profile's IP configuration.
 *
 * @extends SubResource
 */
export interface VirtualMachineScaleSetUpdateIPConfiguration extends SubResource {
    /**
     * @member {string} [name] The IP configuration name.
     */
    name?: string;
    /**
     * @member {ApiEntityReference} [subnet] The subnet.
     */
    subnet?: ApiEntityReference;
    /**
     * @member {boolean} [primary] Specifies the primary IP Configuration in case
     * the network interface has more than one IP Configuration.
     */
    primary?: boolean;
    /**
     * @member {VirtualMachineScaleSetUpdatePublicIPAddressConfiguration}
     * [publicIPAddressConfiguration] The publicIPAddressConfiguration.
     */
    publicIPAddressConfiguration?: VirtualMachineScaleSetUpdatePublicIPAddressConfiguration;
    /**
     * @member {IPVersion} [privateIPAddressVersion] Available from Api-Version
     * 2017-03-30 onwards, it represents whether the specific ipconfiguration is
     * IPv4 or IPv6. Default is taken as IPv4.  Possible values are: 'IPv4' and
     * 'IPv6'. Possible values include: 'IPv4', 'IPv6'
     */
    privateIPAddressVersion?: IPVersion;
    /**
     * @member {SubResource[]} [applicationGatewayBackendAddressPools] The
     * application gateway backend address pools.
     */
    applicationGatewayBackendAddressPools?: SubResource[];
    /**
     * @member {SubResource[]} [loadBalancerBackendAddressPools] The load
     * balancer backend address pools.
     */
    loadBalancerBackendAddressPools?: SubResource[];
    /**
     * @member {SubResource[]} [loadBalancerInboundNatPools] The load balancer
     * inbound nat pools.
     */
    loadBalancerInboundNatPools?: SubResource[];
}
/**
 * @interface
 * An interface representing VirtualMachineScaleSetNetworkConfigurationDnsSettings.
 * Describes a virtual machines scale sets network configuration's DNS
 * settings.
 *
 */
export interface VirtualMachineScaleSetNetworkConfigurationDnsSettings {
    /**
     * @member {string[]} [dnsServers] List of DNS servers IP addresses
     */
    dnsServers?: string[];
}
/**
 * @interface
 * An interface representing VirtualMachineScaleSetNetworkConfiguration.
 * Describes a virtual machine scale set network profile's network
 * configurations.
 *
 * @extends SubResource
 */
export interface VirtualMachineScaleSetNetworkConfiguration extends SubResource {
    /**
     * @member {string} name The network configuration name.
     */
    name: string;
    /**
     * @member {boolean} [primary] Specifies the primary network interface in
     * case the virtual machine has more than 1 network interface.
     */
    primary?: boolean;
    /**
     * @member {boolean} [enableAcceleratedNetworking] Specifies whether the
     * network interface is accelerated networking-enabled.
     */
    enableAcceleratedNetworking?: boolean;
    /**
     * @member {SubResource} [networkSecurityGroup] The network security group.
     */
    networkSecurityGroup?: SubResource;
    /**
     * @member {VirtualMachineScaleSetNetworkConfigurationDnsSettings}
     * [dnsSettings] The dns settings to be applied on the network interfaces.
     */
    dnsSettings?: VirtualMachineScaleSetNetworkConfigurationDnsSettings;
    /**
     * @member {VirtualMachineScaleSetIPConfiguration[]} ipConfigurations
     * Specifies the IP configurations of the network interface.
     */
    ipConfigurations: VirtualMachineScaleSetIPConfiguration[];
}
/**
 * @interface
 * An interface representing VirtualMachineScaleSetUpdateNetworkConfiguration.
 * Describes a virtual machine scale set network profile's network
 * configurations.
 *
 * @extends SubResource
 */
export interface VirtualMachineScaleSetUpdateNetworkConfiguration extends SubResource {
    /**
     * @member {string} [name] The network configuration name.
     */
    name?: string;
    /**
     * @member {boolean} [primary] Whether this is a primary NIC on a virtual
     * machine.
     */
    primary?: boolean;
    /**
     * @member {boolean} [enableAcceleratedNetworking] Specifies whether the
     * network interface is accelerated networking-enabled.
     */
    enableAcceleratedNetworking?: boolean;
    /**
     * @member {SubResource} [networkSecurityGroup] The network security group.
     */
    networkSecurityGroup?: SubResource;
    /**
     * @member {VirtualMachineScaleSetNetworkConfigurationDnsSettings}
     * [dnsSettings] The dns settings to be applied on the network interfaces.
     */
    dnsSettings?: VirtualMachineScaleSetNetworkConfigurationDnsSettings;
    /**
     * @member {VirtualMachineScaleSetUpdateIPConfiguration[]} [ipConfigurations]
     * The virtual machine scale set IP Configuration.
     */
    ipConfigurations?: VirtualMachineScaleSetUpdateIPConfiguration[];
}
/**
 * @interface
 * An interface representing VirtualMachineScaleSetNetworkProfile.
 * Describes a virtual machine scale set network profile.
 *
 */
export interface VirtualMachineScaleSetNetworkProfile {
    /**
     * @member {ApiEntityReference} [healthProbe] A reference to a load balancer
     * probe used to determine the health of an instance in the virtual machine
     * scale set. The reference will be in the form:
     * '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/loadBalancers/{loadBalancerName}/probes/{probeName}'.
     */
    healthProbe?: ApiEntityReference;
    /**
     * @member {VirtualMachineScaleSetNetworkConfiguration[]}
     * [networkInterfaceConfigurations] The list of network configurations.
     */
    networkInterfaceConfigurations?: VirtualMachineScaleSetNetworkConfiguration[];
}
/**
 * @interface
 * An interface representing VirtualMachineScaleSetUpdateNetworkProfile.
 * Describes a virtual machine scale set network profile.
 *
 */
export interface VirtualMachineScaleSetUpdateNetworkProfile {
    /**
     * @member {VirtualMachineScaleSetUpdateNetworkConfiguration[]}
     * [networkInterfaceConfigurations] The list of network configurations.
     */
    networkInterfaceConfigurations?: VirtualMachineScaleSetUpdateNetworkConfiguration[];
}
/**
 * @interface
 * An interface representing SubResourceReadOnly.
 * @extends BaseResource
 */
export interface SubResourceReadOnly extends BaseResource {
    /**
     * @member {string} [id] Resource Id
     */
    readonly id?: string;
}
/**
 * @interface
 * An interface representing VirtualMachineScaleSetExtension.
 * Describes a Virtual Machine Scale Set Extension.
 *
 * @extends SubResourceReadOnly
 */
export interface VirtualMachineScaleSetExtension extends SubResourceReadOnly {
    /**
     * @member {string} [name] The name of the extension.
     */
    name?: string;
    /**
     * @member {string} [forceUpdateTag] If a value is provided and is different
     * from the previous value, the extension handler will be forced to update
     * even if the extension configuration has not changed.
     */
    forceUpdateTag?: string;
    /**
     * @member {string} [publisher] The name of the extension handler publisher.
     */
    publisher?: string;
    /**
     * @member {string} [type] Specifies the type of the extension; an example is
     * "CustomScriptExtension".
     */
    type?: string;
    /**
     * @member {string} [typeHandlerVersion] Specifies the version of the script
     * handler.
     */
    typeHandlerVersion?: string;
    /**
     * @member {boolean} [autoUpgradeMinorVersion] Indicates whether the
     * extension should use a newer minor version if one is available at
     * deployment time. Once deployed, however, the extension will not upgrade
     * minor versions unless redeployed, even with this property set to true.
     */
    autoUpgradeMinorVersion?: boolean;
    /**
     * @member {any} [settings] Json formatted public settings for the extension.
     */
    settings?: any;
    /**
     * @member {any} [protectedSettings] The extension can contain either
     * protectedSettings or protectedSettingsFromKeyVault or no protected
     * settings at all.
     */
    protectedSettings?: any;
    /**
     * @member {string} [provisioningState] The provisioning state, which only
     * appears in the response.
     */
    readonly provisioningState?: string;
}
/**
 * @interface
 * An interface representing VirtualMachineScaleSetExtensionProfile.
 * Describes a virtual machine scale set extension profile.
 *
 */
export interface VirtualMachineScaleSetExtensionProfile {
    /**
     * @member {VirtualMachineScaleSetExtension[]} [extensions] The virtual
     * machine scale set child extension resources.
     */
    extensions?: VirtualMachineScaleSetExtension[];
}
/**
 * @interface
 * An interface representing VirtualMachineScaleSetVMProfile.
 * Describes a virtual machine scale set virtual machine profile.
 *
 */
export interface VirtualMachineScaleSetVMProfile {
    /**
     * @member {VirtualMachineScaleSetOSProfile} [osProfile] Specifies the
     * operating system settings for the virtual machines in the scale set.
     */
    osProfile?: VirtualMachineScaleSetOSProfile;
    /**
     * @member {VirtualMachineScaleSetStorageProfile} [storageProfile] Specifies
     * the storage settings for the virtual machine disks.
     */
    storageProfile?: VirtualMachineScaleSetStorageProfile;
    /**
     * @member {VirtualMachineScaleSetNetworkProfile} [networkProfile] Specifies
     * properties of the network interfaces of the virtual machines in the scale
     * set.
     */
    networkProfile?: VirtualMachineScaleSetNetworkProfile;
    /**
     * @member {DiagnosticsProfile} [diagnosticsProfile] Specifies the boot
     * diagnostic settings state. <br><br>Minimum api-version: 2015-06-15.
     */
    diagnosticsProfile?: DiagnosticsProfile;
    /**
     * @member {VirtualMachineScaleSetExtensionProfile} [extensionProfile]
     * Specifies a collection of settings for extensions installed on virtual
     * machines in the scale set.
     */
    extensionProfile?: VirtualMachineScaleSetExtensionProfile;
    /**
     * @member {string} [licenseType] Specifies that the image or disk that is
     * being used was licensed on-premises. This element is only used for images
     * that contain the Windows Server operating system. <br><br> Possible values
     * are: <br><br> Windows_Client <br><br> Windows_Server <br><br> If this
     * element is included in a request for an update, the value must match the
     * initial value. This value cannot be updated. <br><br> For more
     * information, see [Azure Hybrid Use Benefit for Windows
     * Server](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-hybrid-use-benefit-licensing?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json)
     * <br><br> Minimum api-version: 2015-06-15
     */
    licenseType?: string;
}
/**
 * @interface
 * An interface representing VirtualMachineScaleSetUpdateVMProfile.
 * Describes a virtual machine scale set virtual machine profile.
 *
 */
export interface VirtualMachineScaleSetUpdateVMProfile {
    /**
     * @member {VirtualMachineScaleSetUpdateOSProfile} [osProfile] The virtual
     * machine scale set OS profile.
     */
    osProfile?: VirtualMachineScaleSetUpdateOSProfile;
    /**
     * @member {VirtualMachineScaleSetUpdateStorageProfile} [storageProfile] The
     * virtual machine scale set storage profile.
     */
    storageProfile?: VirtualMachineScaleSetUpdateStorageProfile;
    /**
     * @member {VirtualMachineScaleSetUpdateNetworkProfile} [networkProfile] The
     * virtual machine scale set network profile.
     */
    networkProfile?: VirtualMachineScaleSetUpdateNetworkProfile;
    /**
     * @member {DiagnosticsProfile} [diagnosticsProfile] The virtual machine
     * scale set diagnostics profile.
     */
    diagnosticsProfile?: DiagnosticsProfile;
    /**
     * @member {VirtualMachineScaleSetExtensionProfile} [extensionProfile] The
     * virtual machine scale set extension profile.
     */
    extensionProfile?: VirtualMachineScaleSetExtensionProfile;
    /**
     * @member {string} [licenseType] The license type, which is for bring your
     * own license scenario.
     */
    licenseType?: string;
}
/**
 * @interface
 * An interface representing VirtualMachineScaleSet.
 * Describes a Virtual Machine Scale Set.
 *
 * @extends Resource
 */
export interface VirtualMachineScaleSet extends Resource {
    /**
     * @member {Sku} [sku] The virtual machine scale set sku.
     */
    sku?: Sku;
    /**
     * @member {Plan} [plan] Specifies information about the marketplace image
     * used to create the virtual machine. This element is only used for
     * marketplace images. Before you can use a marketplace image from an API,
     * you must enable the image for programmatic use.  In the Azure portal, find
     * the marketplace image that you want to use and then click **Want to deploy
     * programmatically, Get Started ->**. Enter any required information and
     * then click **Save**.
     */
    plan?: Plan;
    /**
     * @member {UpgradePolicy} [upgradePolicy] The upgrade policy.
     */
    upgradePolicy?: UpgradePolicy;
    /**
     * @member {VirtualMachineScaleSetVMProfile} [virtualMachineProfile] The
     * virtual machine profile.
     */
    virtualMachineProfile?: VirtualMachineScaleSetVMProfile;
    /**
     * @member {string} [provisioningState] The provisioning state, which only
     * appears in the response.
     */
    readonly provisioningState?: string;
    /**
     * @member {boolean} [overprovision] Specifies whether the Virtual Machine
     * Scale Set should be overprovisioned.
     */
    overprovision?: boolean;
    /**
     * @member {string} [uniqueId] Specifies the ID which uniquely identifies a
     * Virtual Machine Scale Set.
     */
    readonly uniqueId?: string;
    /**
     * @member {boolean} [singlePlacementGroup] When true this limits the scale
     * set to a single placement group, of max size 100 virtual machines.
     */
    singlePlacementGroup?: boolean;
    /**
     * @member {VirtualMachineScaleSetIdentity} [identity] The identity of the
     * virtual machine scale set, if configured.
     */
    identity?: VirtualMachineScaleSetIdentity;
    /**
     * @member {string[]} [zones] The virtual machine scale set zones.
     */
    zones?: string[];
}
/**
 * @interface
 * An interface representing VirtualMachineScaleSetUpdate.
 * Describes a Virtual Machine Scale Set.
 *
 * @extends UpdateResource
 */
export interface VirtualMachineScaleSetUpdate extends UpdateResource {
    /**
     * @member {Sku} [sku] The virtual machine scale set sku.
     */
    sku?: Sku;
    /**
     * @member {Plan} [plan] The purchase plan when deploying a virtual machine
     * scale set from VM Marketplace images.
     */
    plan?: Plan;
    /**
     * @member {UpgradePolicy} [upgradePolicy] The upgrade policy.
     */
    upgradePolicy?: UpgradePolicy;
    /**
     * @member {VirtualMachineScaleSetUpdateVMProfile} [virtualMachineProfile]
     * The virtual machine profile.
     */
    virtualMachineProfile?: VirtualMachineScaleSetUpdateVMProfile;
    /**
     * @member {boolean} [overprovision] Specifies whether the Virtual Machine
     * Scale Set should be overprovisioned.
     */
    overprovision?: boolean;
    /**
     * @member {boolean} [singlePlacementGroup] When true this limits the scale
     * set to a single placement group, of max size 100 virtual machines.
     */
    singlePlacementGroup?: boolean;
    /**
     * @member {VirtualMachineScaleSetIdentity} [identity] The identity of the
     * virtual machine scale set, if configured.
     */
    identity?: VirtualMachineScaleSetIdentity;
}
/**
 * @interface
 * An interface representing VirtualMachineScaleSetVMInstanceIDs.
 * Specifies a list of virtual machine instance IDs from the VM scale set.
 *
 */
export interface VirtualMachineScaleSetVMInstanceIDs {
    /**
     * @member {string[]} [instanceIds] The virtual machine scale set instance
     * ids. Omitting the virtual machine scale set instance ids will result in
     * the operation being performed on all virtual machines in the virtual
     * machine scale set.
     */
    instanceIds?: string[];
}
/**
 * @interface
 * An interface representing VirtualMachineScaleSetVMInstanceRequiredIDs.
 * Specifies a list of virtual machine instance IDs from the VM scale set.
 *
 */
export interface VirtualMachineScaleSetVMInstanceRequiredIDs {
    /**
     * @member {string[]} instanceIds The virtual machine scale set instance ids.
     */
    instanceIds: string[];
}
/**
 * @interface
 * An interface representing VirtualMachineStatusCodeCount.
 * The status code and count of the virtual machine scale set instance view
 * status summary.
 *
 */
export interface VirtualMachineStatusCodeCount {
    /**
     * @member {string} [code] The instance view status code.
     */
    readonly code?: string;
    /**
     * @member {number} [count] The number of instances having a particular
     * status code.
     */
    readonly count?: number;
}
/**
 * @interface
 * An interface representing VirtualMachineScaleSetInstanceViewStatusesSummary.
 * Instance view statuses summary for virtual machines of a virtual machine
 * scale set.
 *
 */
export interface VirtualMachineScaleSetInstanceViewStatusesSummary {
    /**
     * @member {VirtualMachineStatusCodeCount[]} [statusesSummary] The extensions
     * information.
     */
    readonly statusesSummary?: VirtualMachineStatusCodeCount[];
}
/**
 * @interface
 * An interface representing VirtualMachineScaleSetVMExtensionsSummary.
 * Extensions summary for virtual machines of a virtual machine scale set.
 *
 */
export interface VirtualMachineScaleSetVMExtensionsSummary {
    /**
     * @member {string} [name] The extension name.
     */
    readonly name?: string;
    /**
     * @member {VirtualMachineStatusCodeCount[]} [statusesSummary] The extensions
     * information.
     */
    readonly statusesSummary?: VirtualMachineStatusCodeCount[];
}
/**
 * @interface
 * An interface representing VirtualMachineScaleSetInstanceView.
 * The instance view of a virtual machine scale set.
 *
 */
export interface VirtualMachineScaleSetInstanceView {
    /**
     * @member {VirtualMachineScaleSetInstanceViewStatusesSummary}
     * [virtualMachine] The instance view status summary for the virtual machine
     * scale set.
     */
    readonly virtualMachine?: VirtualMachineScaleSetInstanceViewStatusesSummary;
    /**
     * @member {VirtualMachineScaleSetVMExtensionsSummary[]} [extensions] The
     * extensions information.
     */
    readonly extensions?: VirtualMachineScaleSetVMExtensionsSummary[];
    /**
     * @member {InstanceViewStatus[]} [statuses] The resource status information.
     */
    statuses?: InstanceViewStatus[];
}
/**
 * @interface
 * An interface representing VirtualMachineScaleSetSkuCapacity.
 * Describes scaling information of a sku.
 *
 */
export interface VirtualMachineScaleSetSkuCapacity {
    /**
     * @member {number} [minimum] The minimum capacity.
     */
    readonly minimum?: number;
    /**
     * @member {number} [maximum] The maximum capacity that can be set.
     */
    readonly maximum?: number;
    /**
     * @member {number} [defaultCapacity] The default capacity.
     */
    readonly defaultCapacity?: number;
    /**
     * @member {VirtualMachineScaleSetSkuScaleType} [scaleType] The scale type
     * applicable to the sku. Possible values include: 'Automatic', 'None'
     */
    readonly scaleType?: VirtualMachineScaleSetSkuScaleType;
}
/**
 * @interface
 * An interface representing VirtualMachineScaleSetSku.
 * Describes an available virtual machine scale set sku.
 *
 */
export interface VirtualMachineScaleSetSku {
    /**
     * @member {string} [resourceType] The type of resource the sku applies to.
     */
    readonly resourceType?: string;
    /**
     * @member {Sku} [sku] The Sku.
     */
    readonly sku?: Sku;
    /**
     * @member {VirtualMachineScaleSetSkuCapacity} [capacity] Specifies the
     * number of virtual machines in the scale set.
     */
    readonly capacity?: VirtualMachineScaleSetSkuCapacity;
}
/**
 * @interface
 * An interface representing VirtualMachineScaleSetVM.
 * Describes a virtual machine scale set virtual machine.
 *
 * @extends Resource
 */
export interface VirtualMachineScaleSetVM extends Resource {
    /**
     * @member {string} [instanceId] The virtual machine instance ID.
     */
    readonly instanceId?: string;
    /**
     * @member {Sku} [sku] The virtual machine SKU.
     */
    readonly sku?: Sku;
    /**
     * @member {boolean} [latestModelApplied] Specifies whether the latest model
     * has been applied to the virtual machine.
     */
    readonly latestModelApplied?: boolean;
    /**
     * @member {string} [vmId] Azure VM unique ID.
     */
    readonly vmId?: string;
    /**
     * @member {VirtualMachineInstanceView} [instanceView] The virtual machine
     * instance view.
     */
    readonly instanceView?: VirtualMachineInstanceView;
    /**
     * @member {HardwareProfile} [hardwareProfile] Specifies the hardware
     * settings for the virtual machine.
     */
    hardwareProfile?: HardwareProfile;
    /**
     * @member {StorageProfile} [storageProfile] Specifies the storage settings
     * for the virtual machine disks.
     */
    storageProfile?: StorageProfile;
    /**
     * @member {OSProfile} [osProfile] Specifies the operating system settings
     * for the virtual machine.
     */
    osProfile?: OSProfile;
    /**
     * @member {NetworkProfile} [networkProfile] Specifies the network interfaces
     * of the virtual machine.
     */
    networkProfile?: NetworkProfile;
    /**
     * @member {DiagnosticsProfile} [diagnosticsProfile] Specifies the boot
     * diagnostic settings state. <br><br>Minimum api-version: 2015-06-15.
     */
    diagnosticsProfile?: DiagnosticsProfile;
    /**
     * @member {SubResource} [availabilitySet] Specifies information about the
     * availability set that the virtual machine should be assigned to. Virtual
     * machines specified in the same availability set are allocated to different
     * nodes to maximize availability. For more information about availability
     * sets, see [Manage the availability of virtual
     * machines](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-manage-availability?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json).
     * <br><br> For more information on Azure planned maintainance, see [Planned
     * maintenance for virtual machines in
     * Azure](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-planned-maintenance?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json)
     * <br><br> Currently, a VM can only be added to availability set at creation
     * time. An existing VM cannot be added to an availability set.
     */
    availabilitySet?: SubResource;
    /**
     * @member {string} [provisioningState] The provisioning state, which only
     * appears in the response.
     */
    readonly provisioningState?: string;
    /**
     * @member {string} [licenseType] Specifies that the image or disk that is
     * being used was licensed on-premises. This element is only used for images
     * that contain the Windows Server operating system. <br><br> Possible values
     * are: <br><br> Windows_Client <br><br> Windows_Server <br><br> If this
     * element is included in a request for an update, the value must match the
     * initial value. This value cannot be updated. <br><br> For more
     * information, see [Azure Hybrid Use Benefit for Windows
     * Server](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-hybrid-use-benefit-licensing?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json)
     * <br><br> Minimum api-version: 2015-06-15
     */
    licenseType?: string;
    /**
     * @member {Plan} [plan] Specifies information about the marketplace image
     * used to create the virtual machine. This element is only used for
     * marketplace images. Before you can use a marketplace image from an API,
     * you must enable the image for programmatic use.  In the Azure portal, find
     * the marketplace image that you want to use and then click **Want to deploy
     * programmatically, Get Started ->**. Enter any required information and
     * then click **Save**.
     */
    plan?: Plan;
    /**
     * @member {VirtualMachineExtension[]} [resources] The virtual machine child
     * extension resources.
     */
    readonly resources?: VirtualMachineExtension[];
}
/**
 * @interface
 * An interface representing VirtualMachineHealthStatus.
 * The health status of the VM.
 *
 */
export interface VirtualMachineHealthStatus {
    /**
     * @member {InstanceViewStatus} [status] The health status information for
     * the VM.
     */
    readonly status?: InstanceViewStatus;
}
/**
 * @interface
 * An interface representing VirtualMachineScaleSetVMInstanceView.
 * The instance view of a virtual machine scale set VM.
 *
 */
export interface VirtualMachineScaleSetVMInstanceView {
    /**
     * @member {number} [platformUpdateDomain] The Update Domain count.
     */
    platformUpdateDomain?: number;
    /**
     * @member {number} [platformFaultDomain] The Fault Domain count.
     */
    platformFaultDomain?: number;
    /**
     * @member {string} [rdpThumbPrint] The Remote desktop certificate
     * thumbprint.
     */
    rdpThumbPrint?: string;
    /**
     * @member {VirtualMachineAgentInstanceView} [vmAgent] The VM Agent running
     * on the virtual machine.
     */
    vmAgent?: VirtualMachineAgentInstanceView;
    /**
     * @member {DiskInstanceView[]} [disks] The disks information.
     */
    disks?: DiskInstanceView[];
    /**
     * @member {VirtualMachineExtensionInstanceView[]} [extensions] The
     * extensions information.
     */
    extensions?: VirtualMachineExtensionInstanceView[];
    /**
     * @member {VirtualMachineHealthStatus} [vmHealth] The health status for the
     * VM.
     */
    readonly vmHealth?: VirtualMachineHealthStatus;
    /**
     * @member {BootDiagnosticsInstanceView} [bootDiagnostics] Boot Diagnostics
     * is a debugging feature which allows you to view Console Output and
     * Screenshot to diagnose VM status. <br><br> For Linux Virtual Machines, you
     * can easily view the output of your console log. <br><br> For both Windows
     * and Linux virtual machines, Azure also enables you to see a screenshot of
     * the VM from the hypervisor.
     */
    bootDiagnostics?: BootDiagnosticsInstanceView;
    /**
     * @member {InstanceViewStatus[]} [statuses] The resource status information.
     */
    statuses?: InstanceViewStatus[];
    /**
     * @member {string} [placementGroupId] The placement group in which the VM is
     * running. If the VM is deallocated it will not have a placementGroupId.
     */
    placementGroupId?: string;
}
/**
 * @interface
 * An interface representing RollingUpgradeRunningStatus.
 * Information about the current running state of the overall upgrade.
 *
 */
export interface RollingUpgradeRunningStatus {
    /**
     * @member {RollingUpgradeStatusCode} [code] Code indicating the current
     * status of the upgrade. Possible values include: 'RollingForward',
     * 'Cancelled', 'Completed', 'Faulted'
     */
    readonly code?: RollingUpgradeStatusCode;
    /**
     * @member {Date} [startTime] Start time of the upgrade.
     */
    readonly startTime?: Date;
    /**
     * @member {RollingUpgradeActionType} [lastAction] The last action performed
     * on the rolling upgrade. Possible values include: 'Start', 'Cancel'
     */
    readonly lastAction?: RollingUpgradeActionType;
    /**
     * @member {Date} [lastActionTime] Last action time of the upgrade.
     */
    readonly lastActionTime?: Date;
}
/**
 * @interface
 * An interface representing RollingUpgradeProgressInfo.
 * Information about the number of virtual machine instances in each upgrade
 * state.
 *
 */
export interface RollingUpgradeProgressInfo {
    /**
     * @member {number} [successfulInstanceCount] The number of instances that
     * have been successfully upgraded.
     */
    readonly successfulInstanceCount?: number;
    /**
     * @member {number} [failedInstanceCount] The number of instances that have
     * failed to be upgraded successfully.
     */
    readonly failedInstanceCount?: number;
    /**
     * @member {number} [inProgressInstanceCount] The number of instances that
     * are currently being upgraded.
     */
    readonly inProgressInstanceCount?: number;
    /**
     * @member {number} [pendingInstanceCount] The number of instances that have
     * not yet begun to be upgraded.
     */
    readonly pendingInstanceCount?: number;
}
/**
 * @interface
 * An interface representing ApiErrorBase.
 * Api error base.
 *
 */
export interface ApiErrorBase {
    /**
     * @member {string} [code] The error code.
     */
    code?: string;
    /**
     * @member {string} [target] The target of the particular error.
     */
    target?: string;
    /**
     * @member {string} [message] The error message.
     */
    message?: string;
}
/**
 * @interface
 * An interface representing InnerError.
 * Inner error details.
 *
 */
export interface InnerError {
    /**
     * @member {string} [exceptiontype] The exception type.
     */
    exceptiontype?: string;
    /**
     * @member {string} [errordetail] The internal error message or exception
     * dump.
     */
    errordetail?: string;
}
/**
 * @interface
 * An interface representing ApiError.
 * Api error.
 *
 */
export interface ApiError {
    /**
     * @member {ApiErrorBase[]} [details] The Api error details
     */
    details?: ApiErrorBase[];
    /**
     * @member {InnerError} [innererror] The Api inner error
     */
    innererror?: InnerError;
    /**
     * @member {string} [code] The error code.
     */
    code?: string;
    /**
     * @member {string} [target] The target of the particular error.
     */
    target?: string;
    /**
     * @member {string} [message] The error message.
     */
    message?: string;
}
/**
 * @interface
 * An interface representing RollingUpgradeStatusInfo.
 * The status of the latest virtual machine scale set rolling upgrade.
 *
 * @extends Resource
 */
export interface RollingUpgradeStatusInfo extends Resource {
    /**
     * @member {RollingUpgradePolicy} [policy] The rolling upgrade policies
     * applied for this upgrade.
     */
    readonly policy?: RollingUpgradePolicy;
    /**
     * @member {RollingUpgradeRunningStatus} [runningStatus] Information about
     * the current running state of the overall upgrade.
     */
    readonly runningStatus?: RollingUpgradeRunningStatus;
    /**
     * @member {RollingUpgradeProgressInfo} [progress] Information about the
     * number of virtual machine instances in each upgrade state.
     */
    readonly progress?: RollingUpgradeProgressInfo;
    /**
     * @member {ApiError} [error] Error details for this upgrade, if there are
     * any.
     */
    readonly error?: ApiError;
}
/**
 * @interface
 * An interface representing ComputeLongRunningOperationProperties.
 * Compute-specific operation properties, including output
 *
 */
export interface ComputeLongRunningOperationProperties {
    /**
     * @member {any} [output] Operation output data (raw JSON)
     */
    output?: any;
}
/**
 * @interface
 * An interface representing OperationStatusResponse.
 * Operation status response
 *
 */
export interface OperationStatusResponse {
    /**
     * @member {string} [name] Operation ID
     */
    readonly name?: string;
    /**
     * @member {string} [status] Operation status
     */
    readonly status?: string;
    /**
     * @member {Date} [startTime] Start time of the operation
     */
    readonly startTime?: Date;
    /**
     * @member {Date} [endTime] End time of the operation
     */
    readonly endTime?: Date;
    /**
     * @member {ApiError} [error] Api error
     */
    readonly error?: ApiError;
}
/**
 * @interface
 * An interface representing DiskSku.
 * The disks and snapshots sku name. Can be Standard_LRS or Premium_LRS.
 *
 */
export interface DiskSku {
    /**
     * @member {StorageAccountTypes} [name] The sku name. Possible values
     * include: 'Standard_LRS', 'Premium_LRS'
     */
    name?: StorageAccountTypes;
    /**
     * @member {string} [tier] The sku tier. Default value: 'Standard' .
     */
    readonly tier?: string;
}
/**
 * @interface
 * An interface representing ResourceUpdate.
 * The Resource model definition.
 *
 */
export interface ResourceUpdate {
    /**
     * @member {{ [propertyName: string]: string }} [tags] Resource tags
     */
    tags?: {
        [propertyName: string]: string;
    };
    /**
     * @member {DiskSku} [sku]
     */
    sku?: DiskSku;
}
/**
 * @interface
 * An interface representing ImageDiskReference.
 * The source image used for creating the disk.
 *
 */
export interface ImageDiskReference {
    /**
     * @member {string} id A relative uri containing either a Platform Imgage
     * Repository or user image reference.
     */
    id: string;
    /**
     * @member {number} [lun] If the disk is created from an image's data disk,
     * this is an index that indicates which of the data disks in the image to
     * use. For OS disks, this field is null.
     */
    lun?: number;
}
/**
 * @interface
 * An interface representing CreationData.
 * Data used when creating a disk.
 *
 */
export interface CreationData {
    /**
     * @member {DiskCreateOption} createOption This enumerates the possible
     * sources of a disk's creation. Possible values include: 'Empty', 'Attach',
     * 'FromImage', 'Import', 'Copy'
     */
    createOption: DiskCreateOption;
    /**
     * @member {string} [storageAccountId] If createOption is Import, the Azure
     * Resource Manager identifier of the storage account containing the blob to
     * import as a disk. Required only if the blob is in a different subscription
     */
    storageAccountId?: string;
    /**
     * @member {ImageDiskReference} [imageReference] Disk source information.
     */
    imageReference?: ImageDiskReference;
    /**
     * @member {string} [sourceUri] If createOption is Import, this is the URI of
     * a blob to be imported into a managed disk.
     */
    sourceUri?: string;
    /**
     * @member {string} [sourceResourceId] If createOption is Copy, this is the
     * ARM id of the source snapshot or disk.
     */
    sourceResourceId?: string;
}
/**
 * @interface
 * An interface representing SourceVault.
 * The vault id is an Azure Resource Manager Resoure id in the form
 * /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName}
 *
 */
export interface SourceVault {
    /**
     * @member {string} [id] Resource Id
     */
    id?: string;
}
/**
 * @interface
 * An interface representing KeyVaultAndSecretReference.
 * Key Vault Secret Url and vault id of the encryption key
 *
 */
export interface KeyVaultAndSecretReference {
    /**
     * @member {SourceVault} sourceVault Resource id of the KeyVault containing
     * the key or secret
     */
    sourceVault: SourceVault;
    /**
     * @member {string} secretUrl Url pointing to a key or secret in KeyVault
     */
    secretUrl: string;
}
/**
 * @interface
 * An interface representing KeyVaultAndKeyReference.
 * Key Vault Key Url and vault id of KeK, KeK is optional and when provided is
 * used to unwrap the encryptionKey
 *
 */
export interface KeyVaultAndKeyReference {
    /**
     * @member {SourceVault} sourceVault Resource id of the KeyVault containing
     * the key or secret
     */
    sourceVault: SourceVault;
    /**
     * @member {string} keyUrl Url pointing to a key or secret in KeyVault
     */
    keyUrl: string;
}
/**
 * @interface
 * An interface representing EncryptionSettings.
 * Encryption settings for disk or snapshot
 *
 */
export interface EncryptionSettings {
    /**
     * @member {boolean} [enabled] Set this flag to true and provide
     * DiskEncryptionKey and optional KeyEncryptionKey to enable encryption. Set
     * this flag to false and remove DiskEncryptionKey and KeyEncryptionKey to
     * disable encryption. If EncryptionSettings is null in the request object,
     * the existing settings remain unchanged.
     */
    enabled?: boolean;
    /**
     * @member {KeyVaultAndSecretReference} [diskEncryptionKey] Key Vault Secret
     * Url and vault id of the disk encryption key
     */
    diskEncryptionKey?: KeyVaultAndSecretReference;
    /**
     * @member {KeyVaultAndKeyReference} [keyEncryptionKey] Key Vault Key Url and
     * vault id of the key encryption key
     */
    keyEncryptionKey?: KeyVaultAndKeyReference;
}
/**
 * @interface
 * An interface representing Disk.
 * Disk resource.
 *
 * @extends Resource
 */
export interface Disk extends Resource {
    /**
     * @member {string} [managedBy] A relative URI containing the ID of the VM
     * that has the disk attached.
     */
    readonly managedBy?: string;
    /**
     * @member {DiskSku} [sku]
     */
    sku?: DiskSku;
    /**
     * @member {string[]} [zones] The Logical zone list for Disk.
     */
    zones?: string[];
    /**
     * @member {Date} [timeCreated] The time when the disk was created.
     */
    readonly timeCreated?: Date;
    /**
     * @member {OperatingSystemTypes} [osType] The Operating System type.
     * Possible values include: 'Windows', 'Linux'
     */
    osType?: OperatingSystemTypes;
    /**
     * @member {CreationData} creationData Disk source information. CreationData
     * information cannot be changed after the disk has been created.
     */
    creationData: CreationData;
    /**
     * @member {number} [diskSizeGB] If creationData.createOption is Empty, this
     * field is mandatory and it indicates the size of the VHD to create. If this
     * field is present for updates or creation with other options, it indicates
     * a resize. Resizes are only allowed if the disk is not attached to a
     * running VM, and can only increase the disk's size.
     */
    diskSizeGB?: number;
    /**
     * @member {EncryptionSettings} [encryptionSettings] Encryption settings for
     * disk or snapshot
     */
    encryptionSettings?: EncryptionSettings;
    /**
     * @member {string} [provisioningState] The disk provisioning state.
     */
    readonly provisioningState?: string;
}
/**
 * @interface
 * An interface representing DiskUpdate.
 * Disk update resource.
 *
 * @extends ResourceUpdate
 */
export interface DiskUpdate extends ResourceUpdate {
    /**
     * @member {OperatingSystemTypes} [osType] the Operating System type.
     * Possible values include: 'Windows', 'Linux'
     */
    osType?: OperatingSystemTypes;
    /**
     * @member {number} [diskSizeGB] If creationData.createOption is Empty, this
     * field is mandatory and it indicates the size of the VHD to create. If this
     * field is present for updates or creation with other options, it indicates
     * a resize. Resizes are only allowed if the disk is not attached to a
     * running VM, and can only increase the disk's size.
     */
    diskSizeGB?: number;
    /**
     * @member {EncryptionSettings} [encryptionSettings] Encryption settings for
     * disk or snapshot
     */
    encryptionSettings?: EncryptionSettings;
}
/**
 * @interface
 * An interface representing GrantAccessData.
 * Data used for requesting a SAS.
 *
 */
export interface GrantAccessData {
    /**
     * @member {AccessLevel} access Possible values include: 'None', 'Read'
     */
    access: AccessLevel;
    /**
     * @member {number} durationInSeconds Time duration in seconds until the SAS
     * access expires.
     */
    durationInSeconds: number;
}
/**
 * @interface
 * An interface representing AccessUri.
 * A disk access SAS uri.
 *
 */
export interface AccessUri {
    /**
     * @member {string} [accessSAS] A SAS uri for accessing a disk.
     */
    readonly accessSAS?: string;
}
/**
 * @interface
 * An interface representing Snapshot.
 * Snapshot resource.
 *
 * @extends Resource
 */
export interface Snapshot extends Resource {
    /**
     * @member {string} [managedBy] Unused. Always Null.
     */
    readonly managedBy?: string;
    /**
     * @member {DiskSku} [sku]
     */
    sku?: DiskSku;
    /**
     * @member {Date} [timeCreated] The time when the disk was created.
     */
    readonly timeCreated?: Date;
    /**
     * @member {OperatingSystemTypes} [osType] The Operating System type.
     * Possible values include: 'Windows', 'Linux'
     */
    osType?: OperatingSystemTypes;
    /**
     * @member {CreationData} creationData Disk source information. CreationData
     * information cannot be changed after the disk has been created.
     */
    creationData: CreationData;
    /**
     * @member {number} [diskSizeGB] If creationData.createOption is Empty, this
     * field is mandatory and it indicates the size of the VHD to create. If this
     * field is present for updates or creation with other options, it indicates
     * a resize. Resizes are only allowed if the disk is not attached to a
     * running VM, and can only increase the disk's size.
     */
    diskSizeGB?: number;
    /**
     * @member {EncryptionSettings} [encryptionSettings] Encryption settings for
     * disk or snapshot
     */
    encryptionSettings?: EncryptionSettings;
    /**
     * @member {string} [provisioningState] The disk provisioning state.
     */
    readonly provisioningState?: string;
}
/**
 * @interface
 * An interface representing SnapshotUpdate.
 * Snapshot update resource.
 *
 * @extends ResourceUpdate
 */
export interface SnapshotUpdate extends ResourceUpdate {
    /**
     * @member {OperatingSystemTypes} [osType] the Operating System type.
     * Possible values include: 'Windows', 'Linux'
     */
    osType?: OperatingSystemTypes;
    /**
     * @member {number} [diskSizeGB] If creationData.createOption is Empty, this
     * field is mandatory and it indicates the size of the VHD to create. If this
     * field is present for updates or creation with other options, it indicates
     * a resize. Resizes are only allowed if the disk is not attached to a
     * running VM, and can only increase the disk's size.
     */
    diskSizeGB?: number;
    /**
     * @member {EncryptionSettings} [encryptionSettings] Encryption settings for
     * disk or snapshot
     */
    encryptionSettings?: EncryptionSettings;
}
/**
 * @interface
 * An interface representing RunCommandInputParameter.
 * Describes the properties of a run command parameter.
 *
 */
export interface RunCommandInputParameter {
    /**
     * @member {string} name The run command parameter name.
     */
    name: string;
    /**
     * @member {string} value The run command parameter value.
     */
    value: string;
}
/**
 * @interface
 * An interface representing RunCommandInput.
 * Capture Virtual Machine parameters.
 *
 */
export interface RunCommandInput {
    /**
     * @member {string} commandId The run command id.
     */
    commandId: string;
    /**
     * @member {string[]} [script] Optional. The script to be executed.  When
     * this value is given, the given script will override the default script of
     * the command.
     */
    script?: string[];
    /**
     * @member {RunCommandInputParameter[]} [parameters] The run command
     * parameters.
     */
    parameters?: RunCommandInputParameter[];
}
/**
 * @interface
 * An interface representing RunCommandParameterDefinition.
 * Describes the properties of a run command parameter.
 *
 */
export interface RunCommandParameterDefinition {
    /**
     * @member {string} name The run command parameter name.
     */
    name: string;
    /**
     * @member {string} type The run command parameter type.
     */
    type: string;
    /**
     * @member {string} [defaultValue] The run command parameter default value.
     */
    defaultValue?: string;
    /**
     * @member {boolean} [required] The run command parameter required. Default
     * value: false .
     */
    required?: boolean;
}
/**
 * @interface
 * An interface representing RunCommandDocumentBase.
 * Describes the properties of a Run Command metadata.
 *
 */
export interface RunCommandDocumentBase {
    /**
     * @member {string} schema The VM run command schema.
     */
    schema: string;
    /**
     * @member {string} id The VM run command id.
     */
    id: string;
    /**
     * @member {OperatingSystemTypes} osType The Operating System type. Possible
     * values include: 'Windows', 'Linux'
     */
    osType: OperatingSystemTypes;
    /**
     * @member {string} label The VM run command label.
     */
    label: string;
    /**
     * @member {string} description The VM run command description.
     */
    description: string;
}
/**
 * @interface
 * An interface representing RunCommandDocument.
 * Describes the properties of a Run Command.
 *
 * @extends RunCommandDocumentBase
 */
export interface RunCommandDocument extends RunCommandDocumentBase {
    /**
     * @member {string[]} script The script to be executed.
     */
    script: string[];
    /**
     * @member {RunCommandParameterDefinition[]} [parameters] The parameters used
     * by the script.
     */
    parameters?: RunCommandParameterDefinition[];
}
/**
 * @interface
 * An interface representing RunCommandResult.
 * Run command operation response.
 *
 * @extends OperationStatusResponse
 */
export interface RunCommandResult extends OperationStatusResponse {
    /**
     * @member {any} [output] Operation output data (raw JSON)
     */
    output?: any;
}
/**
 * @interface
 * An interface representing VirtualMachineExtensionImagesListVersionsOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface VirtualMachineExtensionImagesListVersionsOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {string} [filter] The filter to apply on the operation.
     */
    filter?: string;
    /**
     * @member {number} [top]
     */
    top?: number;
    /**
     * @member {string} [orderby]
     */
    orderby?: string;
}
/**
 * @interface
 * An interface representing VirtualMachineExtensionsGetOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface VirtualMachineExtensionsGetOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {string} [expand] The expand expression to apply on the operation.
     */
    expand?: string;
}
/**
 * @interface
 * An interface representing VirtualMachinesGetExtensionsOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface VirtualMachinesGetExtensionsOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {string} [expand] The expand expression to apply on the operation.
     */
    expand?: string;
}
/**
 * @interface
 * An interface representing VirtualMachinesGetOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface VirtualMachinesGetOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {InstanceViewTypes} [expand] The expand expression to apply on the
     * operation. Possible values include: 'instanceView'
     */
    expand?: InstanceViewTypes;
}
/**
 * @interface
 * An interface representing VirtualMachineImagesListOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface VirtualMachineImagesListOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {string} [filter] The filter to apply on the operation.
     */
    filter?: string;
    /**
     * @member {number} [top]
     */
    top?: number;
    /**
     * @member {string} [orderby]
     */
    orderby?: string;
}
/**
 * @interface
 * An interface representing ImagesGetOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface ImagesGetOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {string} [expand] The expand expression to apply on the operation.
     */
    expand?: string;
}
/**
 * @interface
 * An interface representing VirtualMachineScaleSetsDeallocateOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface VirtualMachineScaleSetsDeallocateOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {VirtualMachineScaleSetVMInstanceIDs} [vmInstanceIDs] A list of
     * virtual machine instance IDs from the VM scale set.
     */
    vmInstanceIDs?: VirtualMachineScaleSetVMInstanceIDs;
}
/**
 * @interface
 * An interface representing VirtualMachineScaleSetsPowerOffOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface VirtualMachineScaleSetsPowerOffOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {VirtualMachineScaleSetVMInstanceIDs} [vmInstanceIDs] A list of
     * virtual machine instance IDs from the VM scale set.
     */
    vmInstanceIDs?: VirtualMachineScaleSetVMInstanceIDs;
}
/**
 * @interface
 * An interface representing VirtualMachineScaleSetsRestartOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface VirtualMachineScaleSetsRestartOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {VirtualMachineScaleSetVMInstanceIDs} [vmInstanceIDs] A list of
     * virtual machine instance IDs from the VM scale set.
     */
    vmInstanceIDs?: VirtualMachineScaleSetVMInstanceIDs;
}
/**
 * @interface
 * An interface representing VirtualMachineScaleSetsStartOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface VirtualMachineScaleSetsStartOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {VirtualMachineScaleSetVMInstanceIDs} [vmInstanceIDs] A list of
     * virtual machine instance IDs from the VM scale set.
     */
    vmInstanceIDs?: VirtualMachineScaleSetVMInstanceIDs;
}
/**
 * @interface
 * An interface representing VirtualMachineScaleSetsReimageOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface VirtualMachineScaleSetsReimageOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {VirtualMachineScaleSetVMInstanceIDs} [vmInstanceIDs] A list of
     * virtual machine instance IDs from the VM scale set.
     */
    vmInstanceIDs?: VirtualMachineScaleSetVMInstanceIDs;
}
/**
 * @interface
 * An interface representing VirtualMachineScaleSetsReimageAllOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface VirtualMachineScaleSetsReimageAllOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {VirtualMachineScaleSetVMInstanceIDs} [vmInstanceIDs] A list of
     * virtual machine instance IDs from the VM scale set.
     */
    vmInstanceIDs?: VirtualMachineScaleSetVMInstanceIDs;
}
/**
 * @interface
 * An interface representing VirtualMachineScaleSetsBeginDeallocateOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface VirtualMachineScaleSetsBeginDeallocateOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {VirtualMachineScaleSetVMInstanceIDs} [vmInstanceIDs] A list of
     * virtual machine instance IDs from the VM scale set.
     */
    vmInstanceIDs?: VirtualMachineScaleSetVMInstanceIDs;
}
/**
 * @interface
 * An interface representing VirtualMachineScaleSetsBeginPowerOffOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface VirtualMachineScaleSetsBeginPowerOffOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {VirtualMachineScaleSetVMInstanceIDs} [vmInstanceIDs] A list of
     * virtual machine instance IDs from the VM scale set.
     */
    vmInstanceIDs?: VirtualMachineScaleSetVMInstanceIDs;
}
/**
 * @interface
 * An interface representing VirtualMachineScaleSetsBeginRestartOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface VirtualMachineScaleSetsBeginRestartOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {VirtualMachineScaleSetVMInstanceIDs} [vmInstanceIDs] A list of
     * virtual machine instance IDs from the VM scale set.
     */
    vmInstanceIDs?: VirtualMachineScaleSetVMInstanceIDs;
}
/**
 * @interface
 * An interface representing VirtualMachineScaleSetsBeginStartOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface VirtualMachineScaleSetsBeginStartOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {VirtualMachineScaleSetVMInstanceIDs} [vmInstanceIDs] A list of
     * virtual machine instance IDs from the VM scale set.
     */
    vmInstanceIDs?: VirtualMachineScaleSetVMInstanceIDs;
}
/**
 * @interface
 * An interface representing VirtualMachineScaleSetsBeginReimageOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface VirtualMachineScaleSetsBeginReimageOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {VirtualMachineScaleSetVMInstanceIDs} [vmInstanceIDs] A list of
     * virtual machine instance IDs from the VM scale set.
     */
    vmInstanceIDs?: VirtualMachineScaleSetVMInstanceIDs;
}
/**
 * @interface
 * An interface representing VirtualMachineScaleSetsBeginReimageAllOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface VirtualMachineScaleSetsBeginReimageAllOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {VirtualMachineScaleSetVMInstanceIDs} [vmInstanceIDs] A list of
     * virtual machine instance IDs from the VM scale set.
     */
    vmInstanceIDs?: VirtualMachineScaleSetVMInstanceIDs;
}
/**
 * @interface
 * An interface representing VirtualMachineScaleSetExtensionsGetOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface VirtualMachineScaleSetExtensionsGetOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {string} [expand] The expand expression to apply on the operation.
     */
    expand?: string;
}
/**
 * @interface
 * An interface representing VirtualMachineScaleSetVMsListOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface VirtualMachineScaleSetVMsListOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {string} [filter] The filter to apply to the operation.
     */
    filter?: string;
    /**
     * @member {string} [select] The list parameters.
     */
    select?: string;
    /**
     * @member {string} [expand] The expand expression to apply to the operation.
     */
    expand?: string;
}
/**
 * @interface
 * An interface representing the AvailabilitySetListResult.
 * The List Availability Set operation response.
 *
 * @extends Array<AvailabilitySet>
 */
export interface AvailabilitySetListResult extends Array<AvailabilitySet> {
}
/**
 * @interface
 * An interface representing the VirtualMachineSizeListResult.
 * The List Virtual Machine operation response.
 *
 * @extends Array<VirtualMachineSize>
 */
export interface VirtualMachineSizeListResult extends Array<VirtualMachineSize> {
}
/**
 * @interface
 * An interface representing the VirtualMachineListResult.
 * The List Virtual Machine operation response.
 *
 * @extends Array<VirtualMachine>
 */
export interface VirtualMachineListResult extends Array<VirtualMachine> {
    /**
     * @member {string} [nextLink] The URI to fetch the next page of VMs. Call
     * ListNext() with this URI to fetch the next page of Virtual Machines.
     */
    nextLink?: string;
}
/**
 * @interface
 * An interface representing the ListUsagesResult.
 * The List Usages operation response.
 *
 * @extends Array<Usage>
 */
export interface ListUsagesResult extends Array<Usage> {
    /**
     * @member {string} [nextLink] The URI to fetch the next page of compute
     * resource usage information. Call ListNext() with this to fetch the next
     * page of compute resource usage information.
     */
    nextLink?: string;
}
/**
 * @interface
 * An interface representing the ImageListResult.
 * The List Image operation response.
 *
 * @extends Array<Image>
 */
export interface ImageListResult extends Array<Image> {
    /**
     * @member {string} [nextLink] The uri to fetch the next page of Images. Call
     * ListNext() with this to fetch the next page of Images.
     */
    nextLink?: string;
}
/**
 * @interface
 * An interface representing the ResourceSkusResult.
 * The Compute List Skus operation response.
 *
 * @extends Array<ResourceSku>
 */
export interface ResourceSkusResult extends Array<ResourceSku> {
    /**
     * @member {string} [nextLink] The uri to fetch the next page of Compute
     * Skus. Call ListNext() with this to fetch the next page of VMSS Skus.
     */
    nextLink?: string;
}
/**
 * @interface
 * An interface representing the VirtualMachineScaleSetListResult.
 * The List Virtual Machine operation response.
 *
 * @extends Array<VirtualMachineScaleSet>
 */
export interface VirtualMachineScaleSetListResult extends Array<VirtualMachineScaleSet> {
    /**
     * @member {string} [nextLink] The uri to fetch the next page of Virtual
     * Machine Scale Sets. Call ListNext() with this to fetch the next page of
     * VMSS.
     */
    nextLink?: string;
}
/**
 * @interface
 * An interface representing the VirtualMachineScaleSetListWithLinkResult.
 * The List Virtual Machine operation response.
 *
 * @extends Array<VirtualMachineScaleSet>
 */
export interface VirtualMachineScaleSetListWithLinkResult extends Array<VirtualMachineScaleSet> {
    /**
     * @member {string} [nextLink] The uri to fetch the next page of Virtual
     * Machine Scale Sets. Call ListNext() with this to fetch the next page of
     * Virtual Machine Scale Sets.
     */
    nextLink?: string;
}
/**
 * @interface
 * An interface representing the VirtualMachineScaleSetListSkusResult.
 * The Virtual Machine Scale Set List Skus operation response.
 *
 * @extends Array<VirtualMachineScaleSetSku>
 */
export interface VirtualMachineScaleSetListSkusResult extends Array<VirtualMachineScaleSetSku> {
    /**
     * @member {string} [nextLink] The uri to fetch the next page of Virtual
     * Machine Scale Set Skus. Call ListNext() with this to fetch the next page
     * of VMSS Skus.
     */
    nextLink?: string;
}
/**
 * @interface
 * An interface representing the VirtualMachineScaleSetExtensionListResult.
 * The List VM scale set extension operation response.
 *
 * @extends Array<VirtualMachineScaleSetExtension>
 */
export interface VirtualMachineScaleSetExtensionListResult extends Array<VirtualMachineScaleSetExtension> {
    /**
     * @member {string} [nextLink] The uri to fetch the next page of VM scale set
     * extensions. Call ListNext() with this to fetch the next page of VM scale
     * set extensions.
     */
    nextLink?: string;
}
/**
 * @interface
 * An interface representing the VirtualMachineScaleSetVMListResult.
 * The List Virtual Machine Scale Set VMs operation response.
 *
 * @extends Array<VirtualMachineScaleSetVM>
 */
export interface VirtualMachineScaleSetVMListResult extends Array<VirtualMachineScaleSetVM> {
    /**
     * @member {string} [nextLink] The uri to fetch the next page of Virtual
     * Machine Scale Set VMs. Call ListNext() with this to fetch the next page of
     * VMSS VMs
     */
    nextLink?: string;
}
/**
 * @interface
 * An interface representing the DiskList.
 * The List Disks operation response.
 *
 * @extends Array<Disk>
 */
export interface DiskList extends Array<Disk> {
    /**
     * @member {string} [nextLink] The uri to fetch the next page of disks. Call
     * ListNext() with this to fetch the next page of disks.
     */
    nextLink?: string;
}
/**
 * @interface
 * An interface representing the SnapshotList.
 * The List Snapshots operation response.
 *
 * @extends Array<Snapshot>
 */
export interface SnapshotList extends Array<Snapshot> {
    /**
     * @member {string} [nextLink] The uri to fetch the next page of snapshots.
     * Call ListNext() with this to fetch the next page of snapshots.
     */
    nextLink?: string;
}
/**
 * @interface
 * An interface representing the RunCommandListResult.
 * The List Virtual Machine operation response.
 *
 * @extends Array<RunCommandDocumentBase>
 */
export interface RunCommandListResult extends Array<RunCommandDocumentBase> {
    /**
     * @member {string} [nextLink] The uri to fetch the next page of run
     * commands. Call ListNext() with this to fetch the next page of run
     * commands.
     */
    nextLink?: string;
}
/**
 * Defines values for StatusLevelTypes.
 * Possible values include: 'Info', 'Warning', 'Error'
 * @readonly
 * @enum {string}
 */
export declare enum StatusLevelTypes {
    Info = "Info",
    Warning = "Warning",
    Error = "Error"
}
/**
 * Defines values for OperatingSystemTypes.
 * Possible values include: 'Windows', 'Linux'
 * @readonly
 * @enum {string}
 */
export declare enum OperatingSystemTypes {
    Windows = "Windows",
    Linux = "Linux"
}
/**
 * Defines values for VirtualMachineSizeTypes.
 * Possible values include: 'Basic_A0', 'Basic_A1', 'Basic_A2', 'Basic_A3',
 * 'Basic_A4', 'Standard_A0', 'Standard_A1', 'Standard_A2', 'Standard_A3',
 * 'Standard_A4', 'Standard_A5', 'Standard_A6', 'Standard_A7', 'Standard_A8',
 * 'Standard_A9', 'Standard_A10', 'Standard_A11', 'Standard_A1_v2',
 * 'Standard_A2_v2', 'Standard_A4_v2', 'Standard_A8_v2', 'Standard_A2m_v2',
 * 'Standard_A4m_v2', 'Standard_A8m_v2', 'Standard_D1', 'Standard_D2',
 * 'Standard_D3', 'Standard_D4', 'Standard_D11', 'Standard_D12',
 * 'Standard_D13', 'Standard_D14', 'Standard_D1_v2', 'Standard_D2_v2',
 * 'Standard_D3_v2', 'Standard_D4_v2', 'Standard_D5_v2', 'Standard_D11_v2',
 * 'Standard_D12_v2', 'Standard_D13_v2', 'Standard_D14_v2', 'Standard_D15_v2',
 * 'Standard_DS1', 'Standard_DS2', 'Standard_DS3', 'Standard_DS4',
 * 'Standard_DS11', 'Standard_DS12', 'Standard_DS13', 'Standard_DS14',
 * 'Standard_DS1_v2', 'Standard_DS2_v2', 'Standard_DS3_v2', 'Standard_DS4_v2',
 * 'Standard_DS5_v2', 'Standard_DS11_v2', 'Standard_DS12_v2',
 * 'Standard_DS13_v2', 'Standard_DS14_v2', 'Standard_DS15_v2', 'Standard_F1',
 * 'Standard_F2', 'Standard_F4', 'Standard_F8', 'Standard_F16', 'Standard_F1s',
 * 'Standard_F2s', 'Standard_F4s', 'Standard_F8s', 'Standard_F16s',
 * 'Standard_G1', 'Standard_G2', 'Standard_G3', 'Standard_G4', 'Standard_G5',
 * 'Standard_GS1', 'Standard_GS2', 'Standard_GS3', 'Standard_GS4',
 * 'Standard_GS5', 'Standard_H8', 'Standard_H16', 'Standard_H8m',
 * 'Standard_H16m', 'Standard_H16r', 'Standard_H16mr', 'Standard_L4s',
 * 'Standard_L8s', 'Standard_L16s', 'Standard_L32s', 'Standard_NC6',
 * 'Standard_NC12', 'Standard_NC24', 'Standard_NC24r', 'Standard_NV6',
 * 'Standard_NV12', 'Standard_NV24'
 * There could be more values for this enum apart from the ones defined here.If
 * you want to set a value that is not from the known values then you can do
 * the following:
 * let param: VirtualMachineSizeTypes =
 * <VirtualMachineSizeTypes>"someUnknownValueThatWillStillBeValid";
 * @readonly
 * @enum {string}
 */
export declare enum VirtualMachineSizeTypes {
    BasicA0 = "Basic_A0",
    BasicA1 = "Basic_A1",
    BasicA2 = "Basic_A2",
    BasicA3 = "Basic_A3",
    BasicA4 = "Basic_A4",
    StandardA0 = "Standard_A0",
    StandardA1 = "Standard_A1",
    StandardA2 = "Standard_A2",
    StandardA3 = "Standard_A3",
    StandardA4 = "Standard_A4",
    StandardA5 = "Standard_A5",
    StandardA6 = "Standard_A6",
    StandardA7 = "Standard_A7",
    StandardA8 = "Standard_A8",
    StandardA9 = "Standard_A9",
    StandardA10 = "Standard_A10",
    StandardA11 = "Standard_A11",
    StandardA1V2 = "Standard_A1_v2",
    StandardA2V2 = "Standard_A2_v2",
    StandardA4V2 = "Standard_A4_v2",
    StandardA8V2 = "Standard_A8_v2",
    StandardA2mV2 = "Standard_A2m_v2",
    StandardA4mV2 = "Standard_A4m_v2",
    StandardA8mV2 = "Standard_A8m_v2",
    StandardD1 = "Standard_D1",
    StandardD2 = "Standard_D2",
    StandardD3 = "Standard_D3",
    StandardD4 = "Standard_D4",
    StandardD11 = "Standard_D11",
    StandardD12 = "Standard_D12",
    StandardD13 = "Standard_D13",
    StandardD14 = "Standard_D14",
    StandardD1V2 = "Standard_D1_v2",
    StandardD2V2 = "Standard_D2_v2",
    StandardD3V2 = "Standard_D3_v2",
    StandardD4V2 = "Standard_D4_v2",
    StandardD5V2 = "Standard_D5_v2",
    StandardD11V2 = "Standard_D11_v2",
    StandardD12V2 = "Standard_D12_v2",
    StandardD13V2 = "Standard_D13_v2",
    StandardD14V2 = "Standard_D14_v2",
    StandardD15V2 = "Standard_D15_v2",
    StandardDS1 = "Standard_DS1",
    StandardDS2 = "Standard_DS2",
    StandardDS3 = "Standard_DS3",
    StandardDS4 = "Standard_DS4",
    StandardDS11 = "Standard_DS11",
    StandardDS12 = "Standard_DS12",
    StandardDS13 = "Standard_DS13",
    StandardDS14 = "Standard_DS14",
    StandardDS1V2 = "Standard_DS1_v2",
    StandardDS2V2 = "Standard_DS2_v2",
    StandardDS3V2 = "Standard_DS3_v2",
    StandardDS4V2 = "Standard_DS4_v2",
    StandardDS5V2 = "Standard_DS5_v2",
    StandardDS11V2 = "Standard_DS11_v2",
    StandardDS12V2 = "Standard_DS12_v2",
    StandardDS13V2 = "Standard_DS13_v2",
    StandardDS14V2 = "Standard_DS14_v2",
    StandardDS15V2 = "Standard_DS15_v2",
    StandardF1 = "Standard_F1",
    StandardF2 = "Standard_F2",
    StandardF4 = "Standard_F4",
    StandardF8 = "Standard_F8",
    StandardF16 = "Standard_F16",
    StandardF1s = "Standard_F1s",
    StandardF2s = "Standard_F2s",
    StandardF4s = "Standard_F4s",
    StandardF8s = "Standard_F8s",
    StandardF16s = "Standard_F16s",
    StandardG1 = "Standard_G1",
    StandardG2 = "Standard_G2",
    StandardG3 = "Standard_G3",
    StandardG4 = "Standard_G4",
    StandardG5 = "Standard_G5",
    StandardGS1 = "Standard_GS1",
    StandardGS2 = "Standard_GS2",
    StandardGS3 = "Standard_GS3",
    StandardGS4 = "Standard_GS4",
    StandardGS5 = "Standard_GS5",
    StandardH8 = "Standard_H8",
    StandardH16 = "Standard_H16",
    StandardH8m = "Standard_H8m",
    StandardH16m = "Standard_H16m",
    StandardH16r = "Standard_H16r",
    StandardH16mr = "Standard_H16mr",
    StandardL4s = "Standard_L4s",
    StandardL8s = "Standard_L8s",
    StandardL16s = "Standard_L16s",
    StandardL32s = "Standard_L32s",
    StandardNC6 = "Standard_NC6",
    StandardNC12 = "Standard_NC12",
    StandardNC24 = "Standard_NC24",
    StandardNC24r = "Standard_NC24r",
    StandardNV6 = "Standard_NV6",
    StandardNV12 = "Standard_NV12",
    StandardNV24 = "Standard_NV24"
}
/**
 * Defines values for CachingTypes.
 * Possible values include: 'None', 'ReadOnly', 'ReadWrite'
 * @readonly
 * @enum {string}
 */
export declare enum CachingTypes {
    None = "None",
    ReadOnly = "ReadOnly",
    ReadWrite = "ReadWrite"
}
/**
 * Defines values for DiskCreateOptionTypes.
 * Possible values include: 'FromImage', 'Empty', 'Attach'
 * @readonly
 * @enum {string}
 */
export declare enum DiskCreateOptionTypes {
    FromImage = "FromImage",
    Empty = "Empty",
    Attach = "Attach"
}
/**
 * Defines values for StorageAccountTypes.
 * Possible values include: 'Standard_LRS', 'Premium_LRS'
 * @readonly
 * @enum {string}
 */
export declare enum StorageAccountTypes {
    StandardLRS = "Standard_LRS",
    PremiumLRS = "Premium_LRS"
}
/**
 * Defines values for PassNames.
 * Possible values include: 'OobeSystem'
 * @readonly
 * @enum {string}
 */
export declare enum PassNames {
    OobeSystem = "OobeSystem"
}
/**
 * Defines values for ComponentNames.
 * Possible values include: 'Microsoft-Windows-Shell-Setup'
 * @readonly
 * @enum {string}
 */
export declare enum ComponentNames {
    MicrosoftWindowsShellSetup = "Microsoft-Windows-Shell-Setup"
}
/**
 * Defines values for SettingNames.
 * Possible values include: 'AutoLogon', 'FirstLogonCommands'
 * @readonly
 * @enum {string}
 */
export declare enum SettingNames {
    AutoLogon = "AutoLogon",
    FirstLogonCommands = "FirstLogonCommands"
}
/**
 * Defines values for ProtocolTypes.
 * Possible values include: 'Http', 'Https'
 * @readonly
 * @enum {string}
 */
export declare enum ProtocolTypes {
    Http = "Http",
    Https = "Https"
}
/**
 * Defines values for ResourceIdentityType.
 * Possible values include: 'SystemAssigned'
 * @readonly
 * @enum {string}
 */
export declare enum ResourceIdentityType {
    SystemAssigned = "SystemAssigned"
}
/**
 * Defines values for MaintenanceOperationResultCodeTypes.
 * Possible values include: 'None', 'RetryLater', 'MaintenanceAborted',
 * 'MaintenanceCompleted'
 * @readonly
 * @enum {string}
 */
export declare enum MaintenanceOperationResultCodeTypes {
    None = "None",
    RetryLater = "RetryLater",
    MaintenanceAborted = "MaintenanceAborted",
    MaintenanceCompleted = "MaintenanceCompleted"
}
/**
 * Defines values for UpgradeMode.
 * Possible values include: 'Automatic', 'Manual', 'Rolling'
 * @readonly
 * @enum {string}
 */
export declare enum UpgradeMode {
    Automatic = "Automatic",
    Manual = "Manual",
    Rolling = "Rolling"
}
/**
 * Defines values for OperatingSystemStateTypes.
 * Possible values include: 'Generalized', 'Specialized'
 * @readonly
 * @enum {string}
 */
export declare enum OperatingSystemStateTypes {
    Generalized = "Generalized",
    Specialized = "Specialized"
}
/**
 * Defines values for ResourceSkuCapacityScaleType.
 * Possible values include: 'Automatic', 'Manual', 'None'
 * @readonly
 * @enum {string}
 */
export declare enum ResourceSkuCapacityScaleType {
    Automatic = "Automatic",
    Manual = "Manual",
    None = "None"
}
/**
 * Defines values for ResourceSkuRestrictionsType.
 * Possible values include: 'Location'
 * @readonly
 * @enum {string}
 */
export declare enum ResourceSkuRestrictionsType {
    Location = "Location"
}
/**
 * Defines values for ResourceSkuRestrictionsReasonCode.
 * Possible values include: 'QuotaId', 'NotAvailableForSubscription'
 * @readonly
 * @enum {string}
 */
export declare enum ResourceSkuRestrictionsReasonCode {
    QuotaId = "QuotaId",
    NotAvailableForSubscription = "NotAvailableForSubscription"
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
 * Defines values for VirtualMachineScaleSetSkuScaleType.
 * Possible values include: 'Automatic', 'None'
 * @readonly
 * @enum {string}
 */
export declare enum VirtualMachineScaleSetSkuScaleType {
    Automatic = "Automatic",
    None = "None"
}
/**
 * Defines values for RollingUpgradeStatusCode.
 * Possible values include: 'RollingForward', 'Cancelled', 'Completed',
 * 'Faulted'
 * @readonly
 * @enum {string}
 */
export declare enum RollingUpgradeStatusCode {
    RollingForward = "RollingForward",
    Cancelled = "Cancelled",
    Completed = "Completed",
    Faulted = "Faulted"
}
/**
 * Defines values for RollingUpgradeActionType.
 * Possible values include: 'Start', 'Cancel'
 * @readonly
 * @enum {string}
 */
export declare enum RollingUpgradeActionType {
    Start = "Start",
    Cancel = "Cancel"
}
/**
 * Defines values for DiskCreateOption.
 * Possible values include: 'Empty', 'Attach', 'FromImage', 'Import', 'Copy'
 * @readonly
 * @enum {string}
 */
export declare enum DiskCreateOption {
    Empty = "Empty",
    Attach = "Attach",
    FromImage = "FromImage",
    Import = "Import",
    Copy = "Copy"
}
/**
 * Defines values for AccessLevel.
 * Possible values include: 'None', 'Read'
 * @readonly
 * @enum {string}
 */
export declare enum AccessLevel {
    None = "None",
    Read = "Read"
}
/**
 * Defines values for InstanceViewTypes.
 * Possible values include: 'instanceView'
 * @readonly
 * @enum {string}
 */
export declare enum InstanceViewTypes {
    InstanceView = "instanceView"
}
