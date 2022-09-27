import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Metric, MetricsState } from "../interfaces/MetricsInterfaces";

const initialState: MetricsState = {
  metricRegistry: [],
};

const metricsSlice = createSlice({
  name: "metrics",
  initialState,
  reducers: {
    load: (metrics: MetricsState, action: PayloadAction<Metric[]>) => ({
      metricRegistry: action.payload,
    }),
    resetMetrics: (metrics: MetricsState) => ({
      metricRegistry: [],
    }),
    deleteMetric: (metrics: MetricsState, action: PayloadAction<number>) => {
      const newRegistry = metrics.metricRegistry.filter(
        (metric) => metric.id !== action.payload
      );

      return {
        metricRegistry: newRegistry,
      };
    },
    createMetric: (metrics: MetricsState, action: PayloadAction<Metric>) => ({
      metricRegistry: [...metrics.metricRegistry, action.payload],
    }),
  },
});

export const {
  load: loadActionCreator,
  resetMetrics: resetMetricsActionCreator,
  deleteMetric: deleteMetricActionCreator,
} = metricsSlice.actions;

export default metricsSlice.reducer;
