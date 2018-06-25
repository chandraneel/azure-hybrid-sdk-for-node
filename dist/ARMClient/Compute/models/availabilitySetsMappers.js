"use strict";
/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var mappers_1 = require("../models/mappers");
exports.AvailabilitySet = mappers_1.AvailabilitySet;
exports.Resource = mappers_1.Resource;
exports.BaseResource = mappers_1.BaseResource;
exports.SubResource = mappers_1.SubResource;
exports.InstanceViewStatus = mappers_1.InstanceViewStatus;
exports.Sku = mappers_1.Sku;
exports.CloudError = mappers_1.CloudError;
exports.OperationStatusResponse = mappers_1.OperationStatusResponse;
exports.ApiError = mappers_1.ApiError;
exports.ApiErrorBase = mappers_1.ApiErrorBase;
exports.InnerError = mappers_1.InnerError;
exports.AvailabilitySetListResult = mappers_1.AvailabilitySetListResult;
exports.VirtualMachineSizeListResult = mappers_1.VirtualMachineSizeListResult;
exports.VirtualMachineSize = mappers_1.VirtualMachineSize;
exports.VirtualMachineExtensionImage = mappers_1.VirtualMachineExtensionImage;
exports.VirtualMachineImageResource = mappers_1.VirtualMachineImageResource;
exports.VirtualMachineExtension = mappers_1.VirtualMachineExtension;
exports.VirtualMachineExtensionInstanceView = mappers_1.VirtualMachineExtensionInstanceView;
exports.VirtualMachineImage = mappers_1.VirtualMachineImage;
exports.PurchasePlan = mappers_1.PurchasePlan;
exports.OSDiskImage = mappers_1.OSDiskImage;
exports.DataDiskImage = mappers_1.DataDiskImage;
exports.VirtualMachineCaptureResult = mappers_1.VirtualMachineCaptureResult;
exports.ImageReference = mappers_1.ImageReference;
exports.ManagedDiskParameters = mappers_1.ManagedDiskParameters;
exports.NetworkInterfaceReference = mappers_1.NetworkInterfaceReference;
exports.VirtualMachine = mappers_1.VirtualMachine;
exports.Plan = mappers_1.Plan;
exports.HardwareProfile = mappers_1.HardwareProfile;
exports.StorageProfile = mappers_1.StorageProfile;
exports.OSDisk = mappers_1.OSDisk;
exports.DiskEncryptionSettings = mappers_1.DiskEncryptionSettings;
exports.KeyVaultSecretReference = mappers_1.KeyVaultSecretReference;
exports.KeyVaultKeyReference = mappers_1.KeyVaultKeyReference;
exports.VirtualHardDisk = mappers_1.VirtualHardDisk;
exports.DataDisk = mappers_1.DataDisk;
exports.OSProfile = mappers_1.OSProfile;
exports.WindowsConfiguration = mappers_1.WindowsConfiguration;
exports.AdditionalUnattendContent = mappers_1.AdditionalUnattendContent;
exports.WinRMConfiguration = mappers_1.WinRMConfiguration;
exports.WinRMListener = mappers_1.WinRMListener;
exports.LinuxConfiguration = mappers_1.LinuxConfiguration;
exports.SshConfiguration = mappers_1.SshConfiguration;
exports.SshPublicKey = mappers_1.SshPublicKey;
exports.VaultSecretGroup = mappers_1.VaultSecretGroup;
exports.VaultCertificate = mappers_1.VaultCertificate;
exports.NetworkProfile = mappers_1.NetworkProfile;
exports.DiagnosticsProfile = mappers_1.DiagnosticsProfile;
exports.BootDiagnostics = mappers_1.BootDiagnostics;
exports.VirtualMachineInstanceView = mappers_1.VirtualMachineInstanceView;
exports.VirtualMachineAgentInstanceView = mappers_1.VirtualMachineAgentInstanceView;
exports.VirtualMachineExtensionHandlerInstanceView = mappers_1.VirtualMachineExtensionHandlerInstanceView;
exports.MaintenanceRedeployStatus = mappers_1.MaintenanceRedeployStatus;
exports.DiskInstanceView = mappers_1.DiskInstanceView;
exports.BootDiagnosticsInstanceView = mappers_1.BootDiagnosticsInstanceView;
exports.VirtualMachineIdentity = mappers_1.VirtualMachineIdentity;
exports.Image = mappers_1.Image;
exports.ImageStorageProfile = mappers_1.ImageStorageProfile;
exports.ImageOSDisk = mappers_1.ImageOSDisk;
exports.ImageDataDisk = mappers_1.ImageDataDisk;
exports.VirtualMachineScaleSetIPConfiguration = mappers_1.VirtualMachineScaleSetIPConfiguration;
exports.ApiEntityReference = mappers_1.ApiEntityReference;
exports.VirtualMachineScaleSetPublicIPAddressConfiguration = mappers_1.VirtualMachineScaleSetPublicIPAddressConfiguration;
exports.VirtualMachineScaleSetPublicIPAddressConfigurationDnsSettings = mappers_1.VirtualMachineScaleSetPublicIPAddressConfigurationDnsSettings;
exports.VirtualMachineScaleSetUpdateIPConfiguration = mappers_1.VirtualMachineScaleSetUpdateIPConfiguration;
exports.VirtualMachineScaleSetUpdatePublicIPAddressConfiguration = mappers_1.VirtualMachineScaleSetUpdatePublicIPAddressConfiguration;
exports.VirtualMachineScaleSetNetworkConfiguration = mappers_1.VirtualMachineScaleSetNetworkConfiguration;
exports.VirtualMachineScaleSetNetworkConfigurationDnsSettings = mappers_1.VirtualMachineScaleSetNetworkConfigurationDnsSettings;
exports.VirtualMachineScaleSetUpdateNetworkConfiguration = mappers_1.VirtualMachineScaleSetUpdateNetworkConfiguration;
exports.VirtualMachineScaleSet = mappers_1.VirtualMachineScaleSet;
exports.UpgradePolicy = mappers_1.UpgradePolicy;
exports.RollingUpgradePolicy = mappers_1.RollingUpgradePolicy;
exports.VirtualMachineScaleSetVMProfile = mappers_1.VirtualMachineScaleSetVMProfile;
exports.VirtualMachineScaleSetOSProfile = mappers_1.VirtualMachineScaleSetOSProfile;
exports.VirtualMachineScaleSetStorageProfile = mappers_1.VirtualMachineScaleSetStorageProfile;
exports.VirtualMachineScaleSetOSDisk = mappers_1.VirtualMachineScaleSetOSDisk;
exports.VirtualMachineScaleSetManagedDiskParameters = mappers_1.VirtualMachineScaleSetManagedDiskParameters;
exports.VirtualMachineScaleSetDataDisk = mappers_1.VirtualMachineScaleSetDataDisk;
exports.VirtualMachineScaleSetNetworkProfile = mappers_1.VirtualMachineScaleSetNetworkProfile;
exports.VirtualMachineScaleSetExtensionProfile = mappers_1.VirtualMachineScaleSetExtensionProfile;
exports.VirtualMachineScaleSetExtension = mappers_1.VirtualMachineScaleSetExtension;
exports.SubResourceReadOnly = mappers_1.SubResourceReadOnly;
exports.VirtualMachineScaleSetIdentity = mappers_1.VirtualMachineScaleSetIdentity;
exports.VirtualMachineScaleSetVM = mappers_1.VirtualMachineScaleSetVM;
exports.RollingUpgradeStatusInfo = mappers_1.RollingUpgradeStatusInfo;
exports.RollingUpgradeRunningStatus = mappers_1.RollingUpgradeRunningStatus;
exports.RollingUpgradeProgressInfo = mappers_1.RollingUpgradeProgressInfo;
exports.UpdateResource = mappers_1.UpdateResource;
exports.Disk = mappers_1.Disk;
exports.DiskSku = mappers_1.DiskSku;
exports.CreationData = mappers_1.CreationData;
exports.ImageDiskReference = mappers_1.ImageDiskReference;
exports.EncryptionSettings = mappers_1.EncryptionSettings;
exports.KeyVaultAndSecretReference = mappers_1.KeyVaultAndSecretReference;
exports.SourceVault = mappers_1.SourceVault;
exports.KeyVaultAndKeyReference = mappers_1.KeyVaultAndKeyReference;
exports.Snapshot = mappers_1.Snapshot;
exports.RunCommandResult = mappers_1.RunCommandResult;
exports.VirtualMachineExtensionUpdate = mappers_1.VirtualMachineExtensionUpdate;
exports.VirtualMachineScaleSetUpdate = mappers_1.VirtualMachineScaleSetUpdate;
exports.VirtualMachineScaleSetUpdateVMProfile = mappers_1.VirtualMachineScaleSetUpdateVMProfile;
exports.VirtualMachineScaleSetUpdateOSProfile = mappers_1.VirtualMachineScaleSetUpdateOSProfile;
exports.VirtualMachineScaleSetUpdateStorageProfile = mappers_1.VirtualMachineScaleSetUpdateStorageProfile;
exports.VirtualMachineScaleSetUpdateOSDisk = mappers_1.VirtualMachineScaleSetUpdateOSDisk;
exports.VirtualMachineScaleSetUpdateNetworkProfile = mappers_1.VirtualMachineScaleSetUpdateNetworkProfile;
//# sourceMappingURL=availabilitySetsMappers.js.map