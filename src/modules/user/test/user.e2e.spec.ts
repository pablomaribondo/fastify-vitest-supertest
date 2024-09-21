import { test, describe } from "vitest";
import request from "supertest";

import { app } from "../../../app";

describe("User E2E", () => {
  test("it should create an user", async () => {
    await app.ready();

    const user = {
      name: "User Test E2E",
      username: "user_test_e2e",
    };
    await request(app.server)
      .post("/users")
      .set("Authorization", "Bearer TOKEN_FAKE")
      .send(user)
      .expect(200);
  });

  test("it should not create an user without auth token", async () => {
    await app.ready();

    const user = {
      name: "User Test E2E",
      username: "user_test_e2e",
    };
    await request(app.server).post("/users").send(user).expect(401);
  });
});
