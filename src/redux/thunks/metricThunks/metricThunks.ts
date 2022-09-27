import { useQuery } from "@apollo/client";
import { feedQuery } from "../../../graphql/queries/queries";
import { AppDispatch } from "../../store/store";

export const loadMetricsThunk = () => async (dispatch: AppDispatch) => {
  const metricRoute = `${process.env.REACT_APP_API_URL}`;
  const { data } = useQuery(feedQuery({ take: 1 }));
};
