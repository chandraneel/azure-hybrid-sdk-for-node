/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import {CloudErrorMapper, BaseResourceMapper } from "ms-rest-azure-js";

export const CloudError = CloudErrorMapper;
export const BaseResource = BaseResourceMapper;

export const ManagementLockOwner = {
  serializedName: "ManagementLockOwner",
  type: {
    name: "Composite",
    className: "ManagementLockOwner",
    modelProperties: {
      applicationId: {
        serializedName: "applicationId",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ManagementLockObject = {
  serializedName: "ManagementLockObject",
  type: {
    name: "Composite",
    className: "ManagementLockObject",
    modelProperties: {
      level: {
        required: true,
        serializedName: "properties.level",
        type: {
          name: "String"
        }
      },
      notes: {
        serializedName: "properties.notes",
        type: {
          name: "String"
        }
      },
      owners: {
        serializedName: "properties.owners",
        type: {
          name: "Sequence",
          element: {
            serializedName: "ManagementLockOwnerElementType",
            type: {
              name: "Composite",
              className: "ManagementLockOwner"
            }
          }
        }
      },
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      type: {
        readOnly: true,
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ManagementLocksListAtResourceGroupLevelOptionalParams = {
  serializedName: "ListAtResourceGroupLevelOptions",
  type: {
    name: "Composite",
    className: "ManagementLocksListAtResourceGroupLevelOptionalParams",
    modelProperties: {
      filter: {
        serializedName: "$filter",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ManagementLocksListAtResourceLevelOptionalParams = {
  serializedName: "ListAtResourceLevelOptions",
  type: {
    name: "Composite",
    className: "ManagementLocksListAtResourceLevelOptionalParams",
    modelProperties: {
      filter: {
        serializedName: "$filter",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ManagementLocksListAtSubscriptionLevelOptionalParams = {
  serializedName: "ListAtSubscriptionLevelOptions",
  type: {
    name: "Composite",
    className: "ManagementLocksListAtSubscriptionLevelOptionalParams",
    modelProperties: {
      filter: {
        serializedName: "$filter",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ManagementLockListResult = {
  serializedName: "ManagementLockListResult",
  type: {
    name: "Composite",
    className: "ManagementLockListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            serializedName: "ManagementLockObjectElementType",
            type: {
              name: "Composite",
              className: "ManagementLockObject"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};
