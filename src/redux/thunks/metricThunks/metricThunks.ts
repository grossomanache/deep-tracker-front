import { useQuery } from "@apollo/client";
import { feedQuery } from "../../../graphql/queries/queries";
import { AppDispatch } from "../../store/store";

export const loadMetricsThunk = () => async (dispatch: AppDispatch) => {
  const { data } = useQuery(feedQuery({ take: 1 }));
};
