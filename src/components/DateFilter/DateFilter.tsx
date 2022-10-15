import { useState } from "react";
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
    (state: RootState) => state.filter
  );
  const dispatch = useAppDispatch();
  return (
    <DateFilterContainer>
      <DatePicker
        selected={new Date(from as string)}
        onChange={(date: Date) => {
          dispatch(setStartDateActionCreator(date));
        }}
      />
      <DatePicker
        selected={new Date(to as string)}
        onChange={(date: Date) => dispatch(setEndDateActionCreator(date))}
      />
    </DateFilterContainer>
  );
};

export default DateFilter;
