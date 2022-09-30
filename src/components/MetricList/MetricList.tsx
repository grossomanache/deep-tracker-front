import { Metric } from "../../redux/interfaces/MetricsInterfaces";
import { uniqueValues } from "../../utils/uniqueValues";

const MetricList = ({ metrics }: { metrics: Metric[] }): JSX.Element => {
  const leadMeasures = uniqueValues(metrics, "name");
  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          {leadMeasures.map((leadMeasure, index) => (
            <th key={index}>{leadMeasure}</th>
          ))}
        </tr>
      </thead>
    </table>
  );
};

export default MetricList;
