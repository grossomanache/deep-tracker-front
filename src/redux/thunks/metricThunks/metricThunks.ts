import { AppDispatch } from "../../store/store";

export const loadMetricsThunk = () => async (dispatch: AppDispatch) => {
  const metricRoute: string = `${process.env.REACT_APP_API_URL}`;
};
