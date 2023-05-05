<h1 align="center">Welcome to jeeny-js-sdk 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.11-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/jeeny-os/jeeny-js-sdk#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/jeeny-os/jeeny-js-sdk/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/jeeny-os/jeeny-js-sdk/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/jeeny-os/jeeny-js-sdk" />
  </a>
</p>

> The jeeny-js-sdk package provides an intuitive and typesafe way to interact with the Jeeny API.

### 🏠 [Jeeny.com](https://jeeny.com)

## What is Jeeny?

Jeeny is a warehouse management system and enterprise resource planning API. It is a headless system for procurement, inventory, standard operating procedures, manufacturing, and fulfillment. Without replacing your current systems you can extend, enhance, and embed in order to create the customizations your teams need.

## Table of contents

- [Why use this](#why-use-this)
- [Installation](#installation)
- [Authentication](#authentication)
- [Import](#import)
- [Setting the user](#setting-the-user)
- [Usage](#usage)
- [Available queries and mutations](#available-queries-and-mutations)
- [Error handling](#error-handling)
- [React SDK](#react-sdk)

## Why use this?

The Jeeny JavaScript/TypeScript SDK provides a few advantages over rolling your own API layer.

1. Autocomplete - a self-documenting API that provides tree-like access to the API, showcasing all available queries and mutations in your IDE
2. Validation - see errors in your code before compiling with validation that always matches our latest spec
3. Inline documentation - view property and record documentation in your IDE
4. Up-to-date - always have access to the latest features

## Installation

```sh
yarn add @jeeny/jeeny-js-sdk
```

```sh
npm install @jeeny/jeeny-js-sdk
```

## Authentication

When you first import the Jeeny class you will need to authenticate with your companyId and API key.

You can get your free API key from the [Jeeny Hub under the Headless menu](https://hub.jeeny.com/headless/api-keys).

## Import

```
import { Jeeny } from "@jeeny/jeeny-js-sdk";

const jeeny = new Jeeny({
  apiKey: TOKEN,
  companyId: COMPANY_ID,
});
```

### Adding default user information

You can set a default user string to send to Jeeny. This default user string will be added to records in places like `createdBy`, `updatedBy`, etc.

```
import { Jeeny } from "@jeeny/jeeny-js-sdk";

const jeeny = new Jeeny({
  apiKey: TOKEN,
  companyId: COMPANY_ID,
  user: "oracle_application"
});
```

## Setting the user

At any point in time you can change the user string that is sent to Jeeny. This can be useful if are going to authenticate users before they can access your application. For the best experience, you should match your userIds with users created in the Jeeny system and pass a Jeeny userId. This lets the Jeeny system add more information to records and provide better indexing and querying.

You can create users [in the Jeeny Hub](https://hub.jeeny.com/back-office/employees).

```
jeeny.setUser("test-user");
```

## Usage

This SDK was built in TypeScript (but works great with JavaScript too). It is fully typed and meant to be self-documenting. This means that autocomplete will provide all available query and mutation options to you. Properties will have inline documentation that matches our GraphQL introspection. Validation is built-in so that you can't pass incorrect objects to endpoints.

It's a wrapper around the Jeeny API and so our [official API documentation](https://dev.jeeny.com/data-and-logic/arrivals) can provide further insight into using this SDK. You can also see a [complete API reference in a single page](https://dev.jeeny.com/backend-api) if that's easier for you.

```
import { Jeeny } from "@jeeny/jeeny-js-sdk";

const newItem = await jeeny.items.createItem({
  data: {
    status: "active",
    name: "Wooden block",
    partNumber: "ABC-123",
  },
});

const id = newItem.createItem?.id ?? "";

console.log(`Created a new item with id ${newItem.createItem?.id}`);

const existingItem = await jeeny.items.getItem({ id });

console.log("Existing item", existingItem.getItem);
```

## Available queries and mutations

The following top level record types are available. The links below will take you to the [official API documentation](https://dev.jeeny.com/data-and-logic/arrivals) that will display all available queries and mutations for that specific record type.

| Record                    | Record associations                                                                                                                                                         |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| jeeny.apps                | App                                                                                                                                                                         |
| jeeny.arrivals            | [Arrival, ArrivalDetails, ArrivalRelease, ArrivalDelivery, ArrivalLineItem, ArrivalReleaseLineItem, ArrivalDeliveryLineItem](https://dev.jeeny.com/data-and-logic/arrivals) |
| jeeny.bids                | [BidRequest, Bid, BidRequestLineItem, BidLineItem](https://dev.jeeny.com/data-and-logic/bids)                                                                               |
| jeeny.companies           | Company                                                                                                                                                                     |
| jeeny.companyUsers        | CompanyUser                                                                                                                                                                 |
| jeeny.departures          | [Departure, DeparturePickList, DeparturePick, DepartureLineItem, DeparturePickListLineItem, DeparturePickLineItem](https://dev.jeeny.com/data-and-logic/departures)         |
| jeeny.devices             | Device                                                                                                                                                                      |
| jeeny.dynamicContainers   | [DynamicContainer](https://dev.jeeny.com/data-and-logic/dynamic-containers)                                                                                                 |
| jeeny.events              | [Event](https://dev.jeeny.com/data-and-logic/events)                                                                                                                        |
| jeeny.facilities          | [Facility, FacilityDetails](https://dev.jeeny.com/data-and-logic/facilities)                                                                                                |
| jeeny.facilityItems       | [FacilityItem](https://dev.jeeny.com/data-and-logic/facility-items)                                                                                                         |
| jeeny.instructions        | [InstructionTemplate, InstructionExecution, InstructionSubject](https://dev.jeeny.com/data-and-logic/instructions)                                                          |
| jeeny.inventoryAreas      | [StorageInventoryArea](https://dev.jeeny.com/data-and-logic/inventory-areas)                                                                                                |
| jeeny.inventoryRecords    | [InventoryRecord, InventoryLog](https://dev.jeeny.com/data-and-logic/inventory-records)                                                                                     |
| jeeny.items               | [Item, ItemDetails](https://dev.jeeny.com/data-and-logic/items)                                                                                                             |
| jeeny.itemGroups          | [ItemGroup](https://dev.jeeny.com/data-and-logic/item-groups)                                                                                                               |
| jeeny.kiosks              | Kiosk                                                                                                                                                                       |
| jeeny.kits                | [KitTemplate, KitTemplatePart, KitTemplatePartOption, KitTemplateTree, KitTemplateBomEntry](https://dev.jeeny.com/data-and-logic/kits)                                      |
| jeeny.operators           | Operator, SafeOperator                                                                                                                                                      |
| jeeny.products            | [Product](https://dev.jeeny.com/data-and-logic/products)                                                                                                                    |
| jeeny.staticItemLocations | [ItemStorageInventoryAreaLocation, ItemStorageInventoryAreaRule](https://dev.jeeny.com/data-and-logic/static-item-locations)                                                |
| jeeny.storageInventories  | StorageInventory                                                                                                                                                            |
| jeeny.storageLocations    | [StorageInventoryAreaLocation, StorageInventoryAreaLocationPayload](https://dev.jeeny.com/data-and-logic/storage-locations)                                                 |
| jeeny.suppliers           | [Supplier](https://dev.jeeny.com/data-and-logic/suppliers)                                                                                                                  |
| jeeny.supplierItems       | [SupplierItem](https://dev.jeeny.com/data-and-logic/supplier-items)                                                                                                         |
| jeeny.teams               | Team                                                                                                                                                                        |

## Error handling

Errors can easily be caught and acted upon. The error message will tell you what went wrong - typically it is a validation issue from incorrect user input.

```
  const newItem = await jeeny.items
    .createItem({
      data: {
        status: "active",
        name: "Wooden block",
        partNumber: "ABC-123",
      },
    })
    .catch((e) => {
      console.log(e.response.errors);
    });
```

or

```
try {
  const newItem = await jeeny.items
    .createItem({
      data: {
        status: "active",
        name: "Wooden block",
        partNumber: "ABC-123",
      },
    })
} catch (e) {
  console.log(e.response.errors);
}
```

The `errors` object looks like this and can hold multiple errors:

```
 [
  {
    message: 'Variable "$data" got invalid value { status: "active", partNumber: "ABC-123" }; Field "name" of required type "String!" was not provided.',
    extensions: { code: 'BAD_USER_INPUT', exception: [Object] }
  }
]
```

## React SDK

If you're building a UI in React we have a great SDK that lets the API fade into the background. Table, form, and action components are provided (fully typed and validated). [Check it out here.](https://github.com/jeeny-os/jeeny-react)

## Author

👤 **Jeeny**

- Website: https://jeeny.com
- Github: [@jeeny-os](https://github.com/jeeny-os)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/jeeny-os/jeeny-js-sdk/issues).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2023 [Jeeny](https://github.com/jeeny-os).<br />
This project is [MIT](https://github.com/jeeny-os/jeeny-js-sdk/blob/master/LICENSE) licensed.

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
