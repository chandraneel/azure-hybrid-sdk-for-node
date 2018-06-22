// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

import { ComputeManagementClient, ComputeManagementModels } from "./Compute/computeManagementClient";
import { NetworkManagementClient, NetworkManagementModels } from "./Network/networkManagementClient";
import { StorageManagementClient, StorageManagementModels } from "./Storage/storageManagementClient";
import { KeyVaultManagementClient, KeyVaultManagementModels } from "./KeyVault/keyVaultManagementClient";
import { ResourceManagementClient, ResourceManagementModels } from "./Resources/resources/resourceManagementClient";
import { ManagementLockClient, ManagementLockModels } from "./Resources/locks/managementLockClient";
import { SubscriptionClient, SubscriptionModels } from "./Resources/subscriptions/subscriptionClient";

export {
    ComputeManagementClient,
    ComputeManagementModels,
    NetworkManagementClient,
    NetworkManagementModels,
    StorageManagementClient,
    StorageManagementModels,
    KeyVaultManagementClient,
    KeyVaultManagementModels,
    ManagementLockClient,
    ManagementLockModels,
    ResourceManagementClient,
    ResourceManagementModels,
    SubscriptionClient,
    SubscriptionModels
};
