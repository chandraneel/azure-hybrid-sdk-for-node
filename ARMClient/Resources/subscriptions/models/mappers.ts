/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import {CloudErrorMapper, BaseResourceMapper } from "ms-rest-azure-js";

export const CloudError = CloudErrorMapper;
export const BaseResource = BaseResourceMapper;

export const Location = {
  serializedName: "Location",
  type: {
    name: "Composite",
    className: "Location",
    modelProperties: {
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      subscriptionId: {
        readOnly: true,
        serializedName: "subscriptionId",
        type: {
          name: "String"
        }
      },
      name: {
        readOnly: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      displayName: {
        readOnly: true,
        serializedName: "displayName",
        type: {
          name: "String"
        }
      },
      latitude: {
        readOnly: true,
        serializedName: "latitude",
        type: {
          name: "String"
        }
      },
      longitude: {
        readOnly: true,
        serializedName: "longitude",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SubscriptionPolicies = {
  serializedName: "SubscriptionPolicies",
  type: {
    name: "Composite",
    className: "SubscriptionPolicies",
    modelProperties: {
      locationPlacementId: {
        readOnly: true,
        serializedName: "locationPlacementId",
        type: {
          name: "String"
        }
      },
      quotaId: {
        readOnly: true,
        serializedName: "quotaId",
        type: {
          name: "String"
        }
      },
      spendingLimit: {
        readOnly: true,
        serializedName: "spendingLimit",
        type: {
          name: "Enum",
          allowedValues: [
            "On",
            "Off",
            "CurrentPeriodOff"
          ]
        }
      }
    }
  }
};

export const Subscription = {
  serializedName: "Subscription",
  type: {
    name: "Composite",
    className: "Subscription",
    modelProperties: {
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      subscriptionId: {
        readOnly: true,
        serializedName: "subscriptionId",
        type: {
          name: "String"
        }
      },
      displayName: {
        readOnly: true,
        serializedName: "displayName",
        type: {
          name: "String"
        }
      },
      state: {
        readOnly: true,
        serializedName: "state",
        type: {
          name: "Enum",
          allowedValues: [
            "Enabled",
            "Warned",
            "PastDue",
            "Disabled",
            "Deleted"
          ]
        }
      },
      subscriptionPolicies: {
        serializedName: "subscriptionPolicies",
        type: {
          name: "Composite",
          className: "SubscriptionPolicies"
        }
      },
      authorizationSource: {
        serializedName: "authorizationSource",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const TenantIdDescription = {
  serializedName: "TenantIdDescription",
  type: {
    name: "Composite",
    className: "TenantIdDescription",
    modelProperties: {
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      tenantId: {
        readOnly: true,
        serializedName: "tenantId",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const LocationListResult = {
  serializedName: "LocationListResult",
  type: {
    name: "Composite",
    className: "LocationListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            serializedName: "LocationElementType",
            type: {
              name: "Composite",
              className: "Location"
            }
          }
        }
      }
    }
  }
};

export const SubscriptionListResult = {
  serializedName: "SubscriptionListResult",
  type: {
    name: "Composite",
    className: "SubscriptionListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            serializedName: "SubscriptionElementType",
            type: {
              name: "Composite",
              className: "Subscription"
            }
          }
        }
      },
      nextLink: {
        required: true,
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const TenantListResult = {
  serializedName: "TenantListResult",
  type: {
    name: "Composite",
    className: "TenantListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            serializedName: "TenantIdDescriptionElementType",
            type: {
              name: "Composite",
              className: "TenantIdDescription"
            }
          }
        }
      },
      nextLink: {
        required: true,
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};
