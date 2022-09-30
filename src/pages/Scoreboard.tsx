import { useQuery } from "@apollo/client";
import MetricList from "../components/MetricList/MetricList";
import { feedQuery } from "../graphql/queries/queries";

const Scoreboard = (): JSX.Element => {
  const request = feedQuery();
  const { data } = useQuery(request);

  return <div>{data && <MetricList metrics={data.feed.metrics} />}</div>;
};

export default Scoreboard;
