import { authReducer } from "../../auth/authReducer";
import { types } from "../../types/types";

describe("Testing in authReducer.js", () => {
  test("should return a default state", () => {
    const state = authReducer({ logged: false }, {});
    expect(state).toEqual({ logged: false });
  });

  test("should login and set the name user", () => {
    const action = {
      type: types.login,
      payload: { name: "Cristian" },
    };
    const state = authReducer({ logged: false }, action);
    expect(state).toEqual({ name: "Cristian", logged: true });
  });

  test("should erase the name user and logged in false", () => {
    const auth = {
      name: "Cristian",
      logged: true,
    };
    const action = {
      type: types.logout,
    };
    const state = authReducer(auth, action);
    expect(state).toEqual({ logged: false });
  });
});
