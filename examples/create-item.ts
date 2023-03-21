import * as dotenv from "dotenv";
import { Jeeny } from "../lib";

dotenv.config();

const TOKEN = process.env.HEADLESS_TOKEN ?? "";
const COMPANY_ID = process.env.COMPANY_ID ?? "";

const jeeny = new Jeeny({
  apiKey: TOKEN,
  apiUrl: "https://api.sandbox.jeeny.com/headless",
  companyId: COMPANY_ID,
});

jeeny.setUser("test-user");

const main = async () => {
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
};

main().then(() => {
  console.log("Finished.");
});
