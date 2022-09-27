import { mockMetric } from "../mocks/metricsMocks";
import metricsReducer, { loadActionCreator } from "./metricsSlice";

describe("Given the loadActionCreator", () => {
  describe("When invoked with a payload containing an array of metrics", () => {
    test("Then the metricRegistry's value will be this same array", () => {
      const initialState = { metricRegistry: [] };
      const expectedState = { metricRegistry: [mockMetric] };

      const action = loadActionCreator([mockMetric]);
      const loadedState = metricsReducer(initialState, action);

      expect(loadedState).toEqual(expectedState);
    });
  });
});
