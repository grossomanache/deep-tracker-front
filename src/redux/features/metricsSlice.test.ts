import { mockMetric } from "../mocks/metricsMocks";
import metricsReducer, {
  deleteMetricActionCreator,
  loadActionCreator,
  resetMetricsActionCreator,
} from "./metricsSlice";

const metricRegistry = [mockMetric];

describe("Given the loadActionCreator", () => {
  describe("When invoked with a payload containing an array of metrics", () => {
    test("Then the metricRegistry's value will be this same array", () => {
      const initialState = { metricRegistry: [] };

      const expectedState = { metricRegistry };

      const action = loadActionCreator(metricRegistry);
      const loadedState = metricsReducer(initialState, action);

      expect(loadedState).toEqual(expectedState);
    });
  });
});

describe("Given the deleteMetricActionCreator", () => {
  describe("When invoked with an argument of 1", () => {
    test("Then the metricRegistry's value will be an empty array", () => {
      const initialState = { metricRegistry };

      const idOfMetricToBeDeleted = 1;
      const expectedState = { metricRegistry: [] };

      const action = deleteMetricActionCreator(idOfMetricToBeDeleted);
      const loadedState = metricsReducer(initialState, action);

      expect(loadedState).toEqual(expectedState);
    });
  });
});

describe("Given the resetMetricsActionCreator", () => {
  describe("When invoked", () => {
    test("Then the metricRegistry's value will be an empty array", () => {
      const initialState = { metricRegistry };

      const expectedState = { metricRegistry: [] };

      const action = resetMetricsActionCreator();
      const loadedState = metricsReducer(initialState, action);

      expect(loadedState).toEqual(expectedState);
    });
  });
});
