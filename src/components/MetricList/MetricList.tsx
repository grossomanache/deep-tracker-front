import { Metric } from "../../redux/interfaces/MetricsInterfaces";
import { convertToTable } from "../../utils/convertToTable";
import { uniqueDates, uniqueValues } from "../../utils/extractUnique";

const MetricList = ({ metrics }: { metrics: Metric[] }): JSX.Element => {
  const leadMeasures = uniqueValues(metrics, "name");
  const dates = uniqueDates(metrics);
  convertToTable(metrics);
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
