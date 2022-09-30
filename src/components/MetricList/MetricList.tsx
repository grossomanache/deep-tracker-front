import { Metric } from "../../redux/interfaces/MetricsInterfaces";

const MetricList = ({ metrics }: { metrics: Metric[] }): JSX.Element => {
  return (
    <ul>
      {metrics.map((metric: Metric, index: number) => (
        <li key={index}>
          {metric.name}: {metric.value}
        </li>
      ))}
    </ul>
  );
};

export default MetricList;
