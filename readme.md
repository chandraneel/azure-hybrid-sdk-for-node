Azure Resource Management plane typescript sdk with 2018-03-01-profile version.
Profile definition targeted for hybrid applications that could run on azure stack 1807 version and azure cloud

Steps to update the typescript files:
This project only generated a subset of the resources in the profile.

1. Download the azure rest specifications from https://github.com/Azure/azure-rest-api-specs
2. Goto https://github.com/Azure/azure-rest-api-specs/blob/master/profile/2018-03-01-hybrid.json
3. Find the latest yyyy-mm-dd-hybrid format profile.
4. Last update to the file used 2018-03-01-hybrid.json. Note the api-versions for each of the resource provider.
   So, below are the commands used to generate the files.
5. Install latest autorest.
   npm install -g autorest@latest
6. Generating the typescript files.
   Each resource-manager folder has a file named "readme.md". Use this file to find the tag names.
   6.1 resource-manager
       6.1.1 microsoft.authorization - locks, api-version: 2016-09-01
             Goto the directory azure-rest-api-specs-master\specification\resources\resource-manager and run below command
             autorest --typescript --add-credentials --azure-arm readme.md --use=@microsoft.azure/autorest.typescript@preview --tag=package-locks-2016-09
             Copy the files under "generated" to "ARMClient\Resources\locks" folder.
             Delete the "generated" folder.
       6.1.2 microsoft.resources - subscriptions, api-version: 2016-06-01
             Goto the directory azure-rest-api-specs-master\specification\resources\resource-manager and run below command
             autorest --typescript --add-credentials --azure-arm readme.md --use=@microsoft.azure/autorest.typescript@preview --tag=package-subscriptions-2016-06
             Copy the files under "generated" to "ARMClient\Resources\subscriptions" folder.
             Delete the "generated" folder.
       6.1.3 microsoft.resources - resources, api-version: 2018-02-01
             Goto the directory azure-rest-api-specs-master\specification\resources\resource-manager and run below command
             autorest --typescript --add-credentials --azure-arm readme.md --use=@microsoft.azure/autorest.typescript@preview --tag=package-resources-2018-02
             Copy the files under "generated" to "ARMClient\Resources\resources" folder.
             Delete the "generated" folder.
       6.1.4 microsoft.compute, api-version: 2017-03-30. Note that package-2017-03 has containeservices as well, while is not supported in AzureStack according to 2018-03-01-hybrid.json
             Goto the directory azure-rest-api-specs-master\specification\compute\resource-manager and run below command
             autorest --typescript --add-credentials --azure-arm readme.md --use=@microsoft.azure/autorest.typescript@preview --tag=package-compute-2017-03
             Copy the files under "generated" to "ARMClient\Compute" folder.
             Delete the "generated" folder.
       6.1.5 microsoft.keyvault, api-version: 2016-10-01.
             Goto the directory azure-rest-api-specs-master\specification\keyvault\resource-manager and run below command
             autorest --typescript --add-credentials --azure-arm readme.md --use=@microsoft.azure/autorest.typescript@preview --tag=package-2016-10
             Copy the files under "generated" to "ARMClient\KeyVault" folder.
             Delete the "generated" folder.
       6.1.6 microsoft.network, api-version: 2017-10-01.
             Goto the directory azure-rest-api-specs-master\specification\network\resource-manager and run below command
             autorest --typescript --add-credentials --azure-arm readme.md --use=@microsoft.azure/autorest.typescript@preview --tag=package-2017-10
             Copy the files under "generated" to "ARMClient\Network" folder.
             Delete the "generated" folder.
       6.1.7 microsoft.storage, api-version: 2016-01-01.
             Goto the directory azure-rest-api-specs-master\specification\storage\resource-manager and run below command
             autorest --typescript --add-credentials --azure-arm readme.md --use=@microsoft.azure/autorest.typescript@preview --tag=package-2016-01
             Copy the files under "generated" to "ARMClient\Storage" folder.
             Delete the "generated" folder.
       6.1.8 microsoft.dns, api-version: 2016-04-01.
             Goto the directory azure-rest-api-specs-master\specification\dns\resource-manager and run below command
             autorest --typescript --add-credentials --azure-arm readme.md --use=@microsoft.azure/autorest.typescript@preview --tag=package-2016-04
             Copy the files under "generated" to "ARMClient\DNS" folder.
             Delete the "generated" folder.             

Related articles
azure-stack-version-profiles:
https://docs.microsoft.com/en-us/azure/azure-stack/user/azure-stack-version-profiles
