import { GraphQLClient } from "graphql-request";
import { getSdk } from "./graphql.sdk";

interface JeenyParams {
  companyId: string;
  apiKey: string;
  apiUrl?: string;
  user?: string;
}

export class Jeeny {
  public apps;
  public arrivals;
  public bids;
  public companies;
  public companyUsers;
  public departures;
  public devices;
  public dynamicContainers;
  public events;
  public facilities;
  public facilityItems;
  public instructions;
  public inventoryAreas;
  public inventoryRecords;
  public items;
  public itemGroups;
  public itemStorageInventoryAreaLocation;
  public itemStorageInventoryAreaRule;
  public kiosks;
  public kits;
  public operators;
  public products;
  public storageInventory;
  public storageInventoryAreaLocation;
  public storageInventoryAreaRule;
  public suppliers;
  public supplierItems;
  public teams;

  private apiKey: string;
  private apiUrl: string;
  private companyId: string;
  private user: string;
  private client: GraphQLClient;
  private sdk;

  constructor({
    apiKey,
    companyId,
    apiUrl = "https://api.jeeny.com/headless",
    user = "",
  }: JeenyParams) {
    this.apiKey = apiKey;
    this.companyId = companyId;
    this.apiUrl = apiUrl;
    this.user = user;

    this.client = new GraphQLClient(apiUrl, {
      headers: () => {
        return {
          companyid: this.companyId,
          user: this.user,
          authorization: this.apiKey,
        };
      },
    });

    this.sdk = getSdk(this.client);

    this.apps = {
      getInstalledOfficialApp: this.sdk.getInstalledOfficialApp,
      getCustomApp: this.sdk.getCustomApp,
      getApps: this.sdk.getApps,
    };

    this.arrivals = {
      getArrivalDetails: this.sdk.getArrivalDetails,
      getArrivals: this.sdk.getArrivals,
      getArrivalsByItem: this.sdk.getArrivalsByItem,
      getArrivalsBySupplier: this.sdk.getArrivalsBySupplier,
      getArrivalReleases: this.sdk.getArrivalReleases,
      getArrivalReleasesWithStatus: this.sdk.getArrivalReleasesWithStatus,
      getArrivalReleasesByItem: this.sdk.getArrivalReleasesByItem,
      getArrivalReleasesBySupplier: this.sdk.getArrivalReleasesBySupplier,
      createArrival: this.sdk.createArrival,
      createArrivalLineItem: this.sdk.createArrivalLineItem,
      deleteArrivalLineItem: this.sdk.deleteArrivalLineItem,
      saveArrival: this.sdk.saveArrival,
      saveArrivalLineItem: this.sdk.saveArrivalLineItem,
      createArrivalRelease: this.sdk.createArrivalRelease,
      createArrivalReleaseLineItem: this.sdk.createArrivalReleaseLineItem,
      deleteArrivalRelease: this.sdk.deleteArrivalRelease,
      deleteArrivalReleaseLineItem: this.sdk.deleteArrivalReleaseLineItem,
      saveArrivalRelease: this.sdk.saveArrivalRelease,
      saveArrivalReleaseLineItem: this.sdk.saveArrivalReleaseLineItem,
      createArrivalDelivery: this.sdk.createArrivalDelivery,
      deleteArrivalDelivery: this.sdk.deleteArrivalDelivery,
      saveArrivalDelivery: this.sdk.saveArrivalDelivery,
      createArrivalDeliveryLineItem: this.sdk.createArrivalDeliveryLineItem,
      saveArrivalDeliveryLineItem: this.sdk.saveArrivalDeliveryLineItem,
    };

    this.bids = {
      createBid: this.sdk.createBid,
      createBidLineItem: this.sdk.createBidLineItem,
      createBidRequest: this.sdk.createBidRequest,
      createBidRequestLineItem: this.sdk.createBidRequestLineItem,
      deleteBid: this.sdk.deleteBid,
      deleteBidLineItem: this.sdk.deleteBidLineItem,
      deleteBidRequest: this.sdk.deleteBidRequest,
      deleteBidRequestLineItem: this.sdk.deleteBidRequestLineItem,
      saveBid: this.sdk.saveBid,
      saveBidLineItem: this.sdk.saveBidLineItem,
      saveBidRequest: this.sdk.saveBidRequest,
      saveBidRequestLineItem: this.sdk.saveBidRequestLineItem,
      getBidRequestDetails: this.sdk.getBidRequestDetails,
      getBidLineItemsByItem: this.sdk.getBidLineItemsByItem,
      getBidLineItemsBySupplier: this.sdk.getBidLineItemsBySupplier,
      getBidLineItemsByItemGroup: this.sdk.getBidLineItemsByItemGroup,
      batchGetBids: this.sdk.batchGetBids,
      batchGetBidRequests: this.sdk.batchGetBidRequests,
      getBid: this.sdk.getBid,
      getBidLineItem: this.sdk.getBidLineItem,
      getBidLineItems: this.sdk.getBidLineItems,
      getBidRequest: this.sdk.getBidRequest,
      getBidRequestLineItem: this.sdk.getBidRequestLineItem,
      getBidRequestLineItems: this.sdk.getBidRequestLineItems,
      getBidRequestLineItemsByItem: this.sdk.getBidRequestLineItemsByItem,
      getBidRequests: this.sdk.getBidRequests,
      getBids: this.sdk.getBids,
      getBidsBySupplier: this.sdk.getBidsBySupplier,
    };

    this.companies = {
      getCompany: this.sdk.getCompany,
      getCompaniesByUser: this.sdk.getCompaniesByUser,
      saveCompany: this.sdk.saveCompany,
    };

    this.companyUsers = {
      getCompanyUser: this.sdk.getCompanyUser,
      getCompanyUserAdmin: this.sdk.getCompanyUserAdmin,
      getCompanyUsers: this.sdk.getCompanyUsers,
      saveCompanyUser: this.sdk.saveCompanyUser,
      saveCompanyUserAdmin: this.sdk.saveCompanyUserAdmin,
      getCompanyUsersByTeamId: this.sdk.getCompanyUsersByTeamId,
    };

    this.departures = {
      getDeparture: this.sdk.getDeparture,
      getDepartures: this.sdk.getDepartures,
      getDepartureDetails: this.sdk.getDepartureDetails,
      getDepartureLineItemsByItemId: this.sdk.getDepartureLineItemsByItemId,
      getDeparturesByExternalCustomerId:
        this.sdk.getDeparturesByExternalCustomerId,
      createDeparture: this.sdk.createDeparture,
      saveDeparture: this.sdk.saveDeparture,
      createDepartureLineItem: this.sdk.createDepartureLineItem,
      deleteDepartureLineItem: this.sdk.deleteDepartureLineItem,
      saveDepartureLineItem: this.sdk.saveDepartureLineItem,
      createDeparturePickList: this.sdk.createDeparturePickList,
      deleteDeparturePickList: this.sdk.deleteDeparturePickList,
      getDeparturePickLists: this.sdk.getDeparturePickLists,
      getDeparturePickListsByFacilityId:
        this.sdk.getDeparturePickListsByFacilityId,
      getDeparturePickListLineItemsByItemId:
        this.sdk.getDeparturePickListLineItemsByItemId,
      createDeparturePickListLineItem: this.sdk.createDeparturePickListLineItem,
      deleteDeparturePickListLineItem: this.sdk.deleteDeparturePickListLineItem,
      saveDeparturePickListLineItem: this.sdk.saveDeparturePickListLineItem,
      createDeparturePick: this.sdk.createDeparturePick,
      deleteDeparturePick: this.sdk.deleteDeparturePick,
      deleteDeparturePickLineItem: this.sdk.deleteDeparturePickLineItem,
      pickStorageLocationForDeparture: this.sdk.pickStorageLocationForDeparture,
      saveDeparturePickList: this.sdk.saveDeparturePickList,
    };

    this.devices = {
      getDevice: this.sdk.getDevice,
      getDeviceAccessToken: this.sdk.getDeviceAccessToken,
      getDevices: this.sdk.getDevices,
      deleteDevice: this.sdk.deleteDevice,
      saveDevice: this.sdk.saveDevice,
    };

    this.dynamicContainers = {
      getDynamicContainer: this.sdk.getDynamicContainer,
      getDynamicContainers: this.sdk.getDynamicContainers,
      getDynamicContainersByExpiry: this.sdk.getDynamicContainersByExpiry,
      createDynamicContainer: this.sdk.createDynamicContainer,
      saveDynamicContainer: this.sdk.saveDynamicContainer,
      deleteDynamicContainer: this.sdk.deleteDynamicContainer,
      switchDynamicContainers: this.sdk.switchDynamicContainers,
      loadDynamicContainer: this.sdk.loadDynamicContainer,
      attachDynamicContainer: this.sdk.attachDynamicContainer,
      detachDynamicContainer: this.sdk.detachDynamicContainer,
      adjustDynamicContainerPayloadQuantity:
        this.sdk.adjustDynamicContainerPayloadQuantity,
    };

    this.events = {
      getEvent: this.sdk.getEvent,
      getEventDetails: this.sdk.getEventDetails,
      getEventsByAssignee: this.sdk.getEventsByAssignee,
      getEvents: this.sdk.getEvents,
      createEvent: this.sdk.createEvent,
      saveEvent: this.sdk.saveEvent,
      deleteEvent: this.sdk.deleteEvent,
    };

    this.facilities = {
      getFacility: this.sdk.getFacility,
      getFacilities: this.sdk.getFacilities,
      getFacilityDetails: this.sdk.getFacilityDetails,
      createFacility: this.sdk.createFacility,
      saveFacility: this.sdk.saveFacility,
    };

    this.facilityItems = {
      getFacilityItem: this.sdk.getFacilityItem,
      getFacilityItemsByFacility: this.sdk.getFacilityItemsByFacility,
      getFacilityItemsByItem: this.sdk.getFacilityItemsByItem,
      createFacilityItem: this.sdk.createFacilityItem,
      saveFacilityItem: this.sdk.saveFacilityItem,
    };

    this.instructions = {
      getInstructionTemplate: this.sdk.getInstructionTemplate,
      getInstructionTemplates: this.sdk.getInstructionTemplates,
      createInstructionTemplate: this.sdk.createInstructionTemplate,
      saveInstructionTemplate: this.sdk.saveInstructionTemplate,
      addInstructionTemplateStepToInstructionTemplate:
        this.sdk.addInstructionTemplateStepToInstructionTemplate,
      saveInstructionTemplateStep: this.sdk.saveInstructionTemplateStep,
      deleteInstructionTemplateStepFromInstructionTemplate:
        this.sdk.deleteInstructionTemplateStepFromInstructionTemplate,
      getInstructionTemplateDetails: this.sdk.getInstructionTemplateDetails,
      executeInstructionTemplate: this.sdk.executeInstructionTemplate,
      saveInstructionExecution: this.sdk.saveInstructionExecution,
      submitInstructionExecutionStep: this.sdk.submitInstructionExecutionStep,
      getInstructionExecutionDetails: this.sdk.getInstructionExecutionDetails,
      getInstructionExecutionsByExecutorId:
        this.sdk.getInstructionExecutionsByExecutorId,
      getInstructionExecutionsByEventId:
        this.sdk.getInstructionExecutionsByEventId,
      getInstructionExecutionsByTrigger:
        this.sdk.getInstructionExecutionsByTrigger,
      getInstructionExecutionsBySubject:
        this.sdk.getInstructionExecutionsBySubject,
      getInstructionExecutionsByInstructionTemplateId:
        this.sdk.getInstructionExecutionsByInstructionTemplateId,
      createInstructionSubject: this.sdk.createInstructionSubject,
      deleteInstructionSubject: this.sdk.deleteInstructionSubject,
      saveInstructionSubject: this.sdk.saveInstructionSubject,
      getInstructionSubjectsBySubject: this.sdk.getInstructionSubjectsBySubject,
      getInstructionSubjectsBySubjectWithTemplate:
        this.sdk.getInstructionSubjectsBySubjectWithTemplate,
      getInstructionSubjectsByTemplate:
        this.sdk.getInstructionSubjectsByTemplate,
    };

    this.inventoryAreas = {
      getInventoryArea: this.sdk.getInventoryArea,
      createInventoryArea: this.sdk.createInventoryArea,
      deleteInventoryArea: this.sdk.deleteInventoryArea,
      saveInventoryArea: this.sdk.saveInventoryArea,
    };

    this.inventoryRecords = {
      addInventoryRecord: this.sdk.addInventoryRecord,
      deductInventoryRecord: this.sdk.deductInventoryRecord,
      getInventoryLogs: this.sdk.getInventoryLogs,
    };

    this.items = {
      getItem: this.sdk.getItem,
      getItemHistory: this.sdk.getItemHistory,
      getItemsHistory: this.sdk.getItemsHistory,
      getItemDetails: this.sdk.getItemDetails,
      getItems: this.sdk.getItems,
      getItemsWithPrimarySupplier: this.sdk.getItemsWithPrimarySupplier,
      createItem: this.sdk.createItem,
      saveItem: this.sdk.saveItem,
    };

    this.itemGroups = {
      getItemGroupDetails: this.sdk.getItemGroupDetails,
      getItemGroupsWithItems: this.sdk.getItemGroupsWithItems,
      createItemGroup: this.sdk.createItemGroup,
      saveItemGroup: this.sdk.saveItemGroup,
      deleteItemGroup: this.sdk.deleteItemGroup,
    };

    this.itemStorageInventoryAreaLocation = {
      getItemStorageInventoryAreaLocation:
        this.sdk.getItemStorageInventoryAreaLocation,
      createItemStorageInventoryAreaLocation:
        this.sdk.createItemStorageInventoryAreaLocation,
      handleItemStorageInventoryAreaLocation:
        this.sdk.handleItemStorageInventoryAreaLocation,
      updateItemStorageInventoryAreaLocation:
        this.sdk.updateItemStorageInventoryAreaLocation,
      deleteItemStorageInventoryAreaLocation:
        this.sdk.deleteItemStorageInventoryAreaLocation,
    };

    this.itemStorageInventoryAreaRule = {
      getItemStorageInventoryAreaRule: this.sdk.getItemStorageInventoryAreaRule,
      getItemStorageInventoryAreaRules:
        this.sdk.getItemStorageInventoryAreaRules,
      createItemStorageInventoryAreaRule:
        this.sdk.createItemStorageInventoryAreaRule,
      saveItemStorageInventoryAreaRule:
        this.sdk.saveItemStorageInventoryAreaRule,
    };

    this.kiosks = {
      deleteKiosk: this.sdk.deleteKiosk,
      saveKiosk: this.sdk.saveKiosk,
      getKiosk: this.sdk.getKiosk,
      getKiosks: this.sdk.getKiosks,
    };

    this.kits = {
      getKitTemplateDetails: this.sdk.getKitTemplateDetails,
      getKitTemplateTree: this.sdk.getKitTemplateTree,
      getKitTemplateBom: this.sdk.getKitTemplateBom,
      getKitTemplates: this.sdk.getKitTemplates,
      createKitTemplate: this.sdk.createKitTemplate,
      saveKitTemplate: this.sdk.saveKitTemplate,
      addKitTemplatePartToKitTemplate: this.sdk.addKitTemplatePartToKitTemplate,
      jeenyAddKitTemplatePartWithOptionToKitTemplate:
        this.sdk.jeenyAddKitTemplatePartWithOptionToKitTemplate,
      saveKitTemplatePart: this.sdk.saveKitTemplatePart,
      addKitTemplatePartOptionToKitTemplatePart:
        this.sdk.addKitTemplatePartOptionToKitTemplatePart,
      setDefaultKitTemplatePartOption: this.sdk.setDefaultKitTemplatePartOption,
      deleteKitTemplatePartOptionFromKitTemplatePart:
        this.sdk.deleteKitTemplatePartOptionFromKitTemplatePart,
      deleteKitTemplatePartFromKitTemplate:
        this.sdk.deleteKitTemplatePartFromKitTemplate,
      getVideosForKitTemplate: this.sdk.getVideosForKitTemplate,
      getFilesForKitTemplate: this.sdk.getFilesForKitTemplate,
      getImagesForKitTemplate: this.sdk.getImagesForKitTemplate,
    };

    this.operators = {
      getOperator: this.sdk.getOperator,
      getOperatorPinCode: this.sdk.getOperatorPinCode,
      getOperators: this.sdk.getOperators,
      getOperatorsByDevice: this.sdk.getOperatorsByDevice,
      getOperatorsByTeamId: this.sdk.getOperatorsByTeamId,
      createOperator: this.sdk.createOperator,
      saveOperator: this.sdk.saveOperator,
    };

    this.products = {
      getProduct: this.sdk.getProduct,
      getProducts: this.sdk.getProducts,
      createProduct: this.sdk.createProduct,
      saveProduct: this.sdk.saveProduct,
      getProductDetails: this.sdk.getProductDetails,
      createExternalProduct: this.sdk.createExternalProduct,
      deleteExternalProduct: this.sdk.deleteExternalProduct,
      getExternalProduct: this.sdk.getExternalProduct,
      getExternalProducts: this.sdk.getExternalProducts,
      getExternalProductsByProductId: this.sdk.getExternalProductsByProductId,
    };

    this.storageInventory = {
      getStorageInventoryByLocation: this.sdk.getStorageInventoryByLocation,
      getStorageInventoryByPayload: this.sdk.getStorageInventoryByPayload,
      pickStorageLocation: this.sdk.pickStorageLocation,
    };

    this.storageInventoryAreaLocation = {
      getStorageInventoryAreaLocation: this.sdk.getStorageInventoryAreaLocation,
      getStorageInventoryAreaLocations:
        this.sdk.getStorageInventoryAreaLocations,
      createStorageInventoryAreaLocation:
        this.sdk.createStorageInventoryAreaLocation,
      saveStorageInventoryAreaLocation:
        this.sdk.saveStorageInventoryAreaLocation,
      deleteStorageInventoryAreaLocation:
        this.sdk.deleteStorageInventoryAreaLocation,
      getStorageInventoryAreaLocationsPayload:
        this.sdk.getStorageInventoryAreaLocationsPayload,
    };

    this.storageInventoryAreaRule = {
      getStorageInventoryAreaRule: this.sdk.getStorageInventoryAreaRule,
      getStorageInventoryAreaRules: this.sdk.getStorageInventoryAreaRules,
      createStorageInventoryAreaRule: this.sdk.createStorageInventoryAreaRule,
      updateStorageInventoryAreaRule: this.sdk.updateStorageInventoryAreaRule,
    };

    this.suppliers = {
      getSupplier: this.sdk.getSupplier,
      getSupplierDetails: this.sdk.getSupplierDetails,
      getSuppliers: this.sdk.getSuppliers,
      createSupplier: this.sdk.createSupplier,
      saveSupplier: this.sdk.saveSupplier,
    };

    this.supplierItems = {
      getSupplierItem: this.sdk.getSupplierItem,
      getSupplierItemsByItem: this.sdk.getSupplierItemsByItem,
      getSupplierItemsBySupplier: this.sdk.getSupplierItemsBySupplier,
      createSupplierItem: this.sdk.createSupplierItem,
      saveSupplierItem: this.sdk.saveSupplierItem,
    };

    this.teams = {
      getTeam: this.sdk.getTeam,
      createTeam: this.sdk.createTeam,
      getTeams: this.sdk.getTeams,
      getTeamDetails: this.sdk.getTeamDetails,
      saveTeam: this.sdk.saveTeam,
    };
  }

  setApiKey(apiKey: string) {
    this.apiKey = apiKey;
  }

  setCompanyId(companyId: string) {
    this.companyId = companyId;
  }

  setUser(user: string) {
    this.user = user;
  }
}
