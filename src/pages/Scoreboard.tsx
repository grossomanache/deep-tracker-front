import { useQuery } from "@apollo/client";
import MetricsTable from "../components/MetricList/MetricsTable";
import { feedQuery } from "../graphql/queries/queries";
import { ScoreboardContainer } from "./ScoreboardContainer";

const Scoreboard = (): JSX.Element => {
  const request = feedQuery();
  const { data } = useQuery(request);

  return (
    <ScoreboardContainer>
      {data && <MetricsTable metrics={data.feed.metrics} />}
    </ScoreboardContainer>
  );
};

export default Scoreboard;
