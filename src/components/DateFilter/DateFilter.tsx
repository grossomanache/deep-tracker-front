import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { DateFilterContainer } from "./DateFilterContainer";

const DateFilter = (): JSX.Element => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  return (
    <DateFilterContainer>
      <DatePicker
        selected={startDate}
        onChange={(date: Date) => setStartDate(date)}
      />
      <DatePicker
        selected={endDate}
        onChange={(date: Date) => setEndDate(date)}
      />
    </DateFilterContainer>
  );
};

export default DateFilter;
