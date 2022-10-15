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

const DateFilter = (): JSX.Element => {
  const { from, to }: FiltersState = useSelector(
    ({ filter }: RootState) => filter
  );
  const dispatch = useAppDispatch();
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
      </div>
    </DateFilterContainer>
  );
};

export default DateFilter;
