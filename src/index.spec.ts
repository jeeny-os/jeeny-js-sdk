import nock from "nock";
import { Jeeny } from ".";

describe("Jeeny class", () => {
  // default apiUrl
  const apiKey = "headless-api-key-123";
  const companyId = "company-123";
  const user = "user-123";

  describe("API url", () => {
    it("uses the correct default url", async () => {
      const scope = nock("https://api.jeeny.com")
        .post("/headless")
        .reply(200, {
          data: { getItems: { items: [] } },
        });

      const jeeny = new Jeeny({
        apiKey,
        companyId,
      });

      await jeeny.items.getItems();

      expect(scope.isDone()).toBe(true);
    });

    it("uses the correct url", async () => {
      const scope = nock("https://different-api.jeeny.com")
        .post("/different-path")
        .reply(200, {
          data: { getItems: { items: [] } },
        });

      const jeeny = new Jeeny({
        apiKey,
        companyId,
        apiUrl: "https://different-api.jeeny.com/different-path",
      });

      await jeeny.items.getItems();

      expect(scope.isDone()).toBe(true);
    });
  });

  describe("Headers", () => {
    it("uses correct authorization", async () => {
      const scope = nock("https://api.jeeny.com", {
        reqheaders: {
          authorization: "headless-api-key-123",
        },
      })
        .post("/headless")
        .reply(200, {
          data: { getItems: { items: [] } },
        });

      const jeeny = new Jeeny({
        apiKey,
        companyId,
      });

      await jeeny.items.getItems();

      expect(scope.isDone()).toBe(true);
    });

    it("uses correct companyid", async () => {
      const scope = nock("https://api.jeeny.com", {
        reqheaders: {
          companyid: "company-123",
        },
      })
        .post("/headless")
        .reply(200, {
          data: { getItems: { items: [] } },
        });

      const jeeny = new Jeeny({
        apiKey,
        companyId,
      });

      await jeeny.items.getItems();

      expect(scope.isDone()).toBe(true);
    });

    it("uses correct user", async () => {
      const scope = nock("https://api.jeeny.com", {
        reqheaders: {
          user: "user-123",
        },
      })
        .post("/headless")
        .reply(200, {
          data: { getItems: { items: [] } },
        });

      const jeeny = new Jeeny({
        apiKey,
        companyId,
        user,
      });

      await jeeny.items.getItems();

      expect(scope.isDone()).toBe(true);
    });
  });

  describe("Setters", () => {
    it("sets API key correctly", async () => {
      const scope = nock("https://api.jeeny.com", {
        reqheaders: {
          authorization: "headless-api-key-123-updated",
        },
      })
        .post("/headless")
        .reply(200, {
          data: { getItems: { items: [] } },
        });

      const jeeny = new Jeeny({
        apiKey,
        companyId,
      });

      jeeny.setApiKey("headless-api-key-123-updated");

      await jeeny.items.getItems();

      expect(scope.isDone()).toBe(true);
    });

    it("sets companyId correctly", async () => {
      const scope = nock("https://api.jeeny.com", {
        reqheaders: {
          companyid: "company-123-updated",
        },
      })
        .post("/headless")
        .reply(200, {
          data: { getItems: { items: [] } },
        });

      const jeeny = new Jeeny({
        apiKey,
        companyId,
      });

      jeeny.setCompanyId("company-123-updated");

      await jeeny.items.getItems();

      expect(scope.isDone()).toBe(true);
    });

    it("sets user correctly", async () => {
      const scope = nock("https://api.jeeny.com", {
        reqheaders: {
          user: "user-123-updated",
        },
      })
        .post("/headless")
        .reply(200, {
          data: { getItems: { items: [] } },
        });

      const jeeny = new Jeeny({
        apiKey,
        companyId,
        user,
      });

      jeeny.setUser("user-123-updated");

      await jeeny.items.getItems();

      expect(scope.isDone()).toBe(true);
    });
  });
});
