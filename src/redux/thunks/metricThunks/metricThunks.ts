import { client } from "../../../graphql/client";
import { FeedInputs, feedQuery } from "../../../graphql/queries/queries";
import { loadActionCreator } from "../../features/metricsSlice";
import { AppDispatch } from "../../store/store";

export const loadMetricsThunk =
  (props: FeedInputs | null = null) =>
  async (dispatch: AppDispatch) => {
    const request = feedQuery(props);

    const {
      data: {
        feed: { metrics },
      },
    } = await client.query({ query: request });
    dispatch(loadActionCreator(metrics));
  };
