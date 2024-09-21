import { test, expect, describe, beforeAll, beforeEach } from "vitest";
import { UserService } from "../user.service";

let userService: UserService;

beforeAll(() => {
  userService = new UserService();
});

beforeEach(() => {
  userService.users = [];
});

describe("User Service", () => {
  test("it should create an user", () => {
    const user = {
      name: "User Test",
      username: "user_test",
    };
    const result = userService.create(user);

    expect(result).toHaveProperty("id");
    expect(result.username).toBe("user_test");
  });

  test("it should not create an user that already exists", () => {
    const user = {
      name: "User Test",
      username: "user_test_already_exists",
    };
    userService.create(user);

    expect(() => {
      userService.create(user);
    }).toThrow("User already exists");
  });

  test("it should list the users", () => {
    const user = {
      name: "User Test",
      username: "user_test_list",
    };
    userService.create(user);

    const result = userService.findAll();

    expect(result).toHaveLength(1);
  });
});
