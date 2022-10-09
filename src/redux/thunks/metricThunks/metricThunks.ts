import { client } from "../../../graphql/client";
import { feedQuery } from "../../../graphql/queries/queries";
import { loadActionCreator } from "../../features/metricsSlice";
import { AppDispatch } from "../../store/store";

export const loadMetricsThunk = () => async (dispatch: AppDispatch) => {
  const request = feedQuery();
  const {
    data: {
      feed: { metrics },
    },
  } = await client.query({ query: request });
  dispatch(loadActionCreator(metrics));
};
