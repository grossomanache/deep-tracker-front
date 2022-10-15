import filterReducer, { filterByKeywordActionCreator } from "./filterSlice";

describe("Given the filterByKeyWordActionCreator", () => {
  describe("When invoked with the payload 'filtered metrics'", () => {
    test("Then the filter value in the state will be modified to 'filtered metrics'", () => {
      const todaysDate = new Date().toDateString();
      const initialState = { from: todaysDate, to: todaysDate };

      const keyword = "filtered metrics";
      const expectedState = { ...initialState, keyword };

      const action = filterByKeywordActionCreator(keyword);
      const loadedState = filterReducer(initialState, action);

      expect(loadedState).toEqual(expectedState);
    });
  });
});
