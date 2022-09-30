import { Metric } from "../../redux/interfaces/MetricsInterfaces";
import { uniqueDates, uniqueValues } from "../../utils/uniqueValues";

const MetricList = ({ metrics }: { metrics: Metric[] }): JSX.Element => {
  const leadMeasures = uniqueValues(metrics, "name");
  const dates = uniqueDates(metrics);
  console.log(dates);
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
      <tbody>
        {dates.map((date, index) => (
          <tr key={index}>
            <td>{date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MetricList;
