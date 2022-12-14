import { usedToken } from "../mocks/userMocks";
import userReducer, {
  loginActionCreator,
  logoutActionCreator,
} from "./userSlice";

const localStorageMock = (() => {
  return {
    getItem() {
      return usedToken;
    },
  };
})();
Object.defineProperty(window, "localStorage", {
  value: localStorageMock,
});

describe("Given a userSlice reducer", () => {
  describe("When it receives a user and a login action", () => {
    test("Then it should return the same user logged", () => {
      const initialUser = {
        name: "Lorenzo",
        surname: "The Cat",
        email: "Loren",
        logged: false,
      };
      const expectedUser = {
        name: "Lorenzo",
        surname: "The Cat",
        email: "Loren",
        logged: true,
      };

      const action = loginActionCreator(initialUser);
      const loggedUser = userReducer(initialUser, action);

      expect(loggedUser).toEqual(expectedUser);
    });
  });
  describe("When it receives a logout action", () => {
    test("Then it should set the user logged state to false", () => {
      const initialUser = {
        name: "Lorenzo",
        surname: "The Cat",
        email: "Loren",
        logged: true,
      };
      const expectedUser = {
        name: "",
        surname: "",
        email: "",
        logged: false,
      };

      const logoutAction = logoutActionCreator();
      const loggedoutUser = userReducer(initialUser, logoutAction);

      expect(loggedoutUser).toEqual(expectedUser);
    });
  });
});
