import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useSelector } from "react-redux";
import { DateFilterContainer } from "./DateFilterContainer";
import { FiltersState } from "../../redux/interfaces/FiltersInterface";
import { RootState } from "../../redux/store/store";
import { useAppDispatch } from "../../redux/store/hooks";
import {
  setEndDateActionCreator,
  setStartDateActionCreator,
} from "../../redux/features/filterSlice";
import { loadMetricsThunk } from "../../redux/thunks/metricThunks/metricThunks";

const DateFilter = (): JSX.Element => {
  const { from, to }: FiltersState = useSelector(
    ({ filter }: RootState) => filter
  );
  const dispatch = useAppDispatch();

  const filterDates = () => () => dispatch(loadMetricsThunk());

  return (
    <DateFilterContainer>
      <div className="row text">
        <p>From:</p>
        <p>To:</p>
      </div>
      <div className="row filters">
        <DatePicker
          selected={new Date(from)}
          onChange={(date: Date) => {
            dispatch(setStartDateActionCreator(date));
          }}
        />
        <DatePicker
          selected={new Date(to)}
          onChange={(date: Date) => dispatch(setEndDateActionCreator(date))}
        />
        <button onClick={filterDates()}>Filter</button>
      </div>
    </DateFilterContainer>
  );
};

export default DateFilter;
