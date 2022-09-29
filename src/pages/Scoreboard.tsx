import { useQuery } from "@apollo/client";
import { feedQuery } from "../graphql/queries/queries";
import { Metric } from "../redux/interfaces/MetricsInterfaces";

const Scoreboard = (): JSX.Element => {
  const request = feedQuery({ take: 1 });
  const { data } = useQuery(request);
  console.log(data);

  return (
    <div>
      {data && (
        <ul>
          {data.feed.metrics.map((metric: Metric, index: number) => (
            <li key={index}>
              {metric.name}: {metric.value}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Scoreboard;
