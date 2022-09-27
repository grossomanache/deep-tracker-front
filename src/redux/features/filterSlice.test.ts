import filterReducer, { filterByKeywordActionCreator } from "./filterSlice";

describe("Given the filterByKeyWordActionCreator", () => {
  describe("When invoked with the payload 'filtered metrics'", () => {
    test("Then the filter value in the state will be modified to 'filtered metrics'", () => {
      const initialState = {};

      const keyword = "filtered metrics";
      const expectedState = { keyword };

      const action = filterByKeywordActionCreator(keyword);
      const loadedState = filterReducer(initialState, action);

      expect(loadedState).toEqual(expectedState);
    });
  });
});
