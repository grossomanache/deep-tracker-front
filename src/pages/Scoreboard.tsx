import { useEffect } from "react";
import MetricsTable from "../components/MetricList/MetricsTable";
import { useAppDispatch, useAppSelector } from "../redux/store/hooks";
import { loadMetricsThunk } from "../redux/thunks/metricThunks/metricThunks";
import { ScoreboardContainer } from "./ScoreboardContainer";

const Scoreboard = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const metricRegistry = useAppSelector(
    ({ metrics: { metricRegistry } }) => metricRegistry
  );

  useEffect(() => {
    dispatch(loadMetricsThunk());
  }, [dispatch]);

  return (
    <ScoreboardContainer>
      <h1>Historic metrics</h1>
      {metricRegistry && <MetricsTable metrics={metricRegistry} />}
    </ScoreboardContainer>
  );
};

export default Scoreboard;
