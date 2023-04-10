import userSlice, { addUser, removeUser, user } from "@/store/userSlice";
import { describe, test, expect } from "@jest/globals";

describe("userSlice", () => {
  test("should add user", () => {
    const action = {
      type: addUser.type,
      payload: {
        id: 123,
        email: "john12@gmail.com",
        password: "123",
        token: "33e",
      },
    };

    const result = userSlice(
      { id: null, email: null, password: null, token: null },
      action
    );

    expect(result).toEqual({
      id: 123,
      email: "john12@gmail.com",
      password: "123",
      token: "33e",
    });
  });

  test("should remove user", () => {
    const action = {
      type: removeUser.type,
    };

    const result = userSlice(
      {
        id: "123",
        email: "john12@gmail.com",
        password: "123",
        token: "33e",
      },
      action
    );

    expect(result).toEqual({
      id: null,
      email: null,
      password: null,
      token: null,
    });
  });
});
