import { useQuery } from "@apollo/client";
import { feedQuery } from "../graphql/queries/queries";
import { Metric } from "../redux/interfaces/MetricsInterfaces";

const Scoreboard = (): JSX.Element => {
  const usedQuery = feedQuery({ take: 1 });
  const { data } = useQuery(usedQuery);
  console.log(data);

  return (
    <div>
      {data && (
        <>
          {data.feed.metrics.map((metric: Metric) => (
            <p>{metric.date.toISOString()}</p>
          ))}
        </>
      )}
    </div>
  );
};

export default Scoreboard;
