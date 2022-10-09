import { useQuery } from "@apollo/client";
import { useEffect } from "react";
import MetricsTable from "../components/MetricList/MetricsTable";
import { feedQuery } from "../services/metricsService/queries";
import { useAppDispatch } from "../redux/store/hooks";
import { loadMetricsThunk } from "../redux/thunks/metricThunks/metricThunks";
import { ScoreboardContainer } from "./ScoreboardContainer";

const Scoreboard = (): JSX.Element => {
  const request = feedQuery();
  const { data } = useQuery(request);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadMetricsThunk());
  }, [dispatch]);

  return (
    <ScoreboardContainer>
      <h1>Historic metrics</h1>
      {data && <MetricsTable metrics={data.feed.metrics} />}
    </ScoreboardContainer>
  );
};

export default Scoreboard;
