import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FiltersState } from "../interfaces/FiltersInterface";

const today = new Date();
const today3MonthsBack = new Date(new Date().setMonth(today.getMonth() - 3));

const initialState: FiltersState = {
  from: today3MonthsBack.toISOString(),
  to: today.toISOString(),
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    filterByKeyword: (
      filters: FiltersState,
      action: PayloadAction<string>
    ) => ({
      ...filters,
      keyword: action.payload,
    }),
    setStartDate: (filters: FiltersState, action: PayloadAction<string>) => ({
      ...filters,
      from: action.payload,
    }),
    setEndDate: (filters: FiltersState, action: PayloadAction<string>) => ({
      ...filters,
      to: action.payload,
    }),
  },
});

export const {
  filterByKeyword: filterByKeywordActionCreator,
  setStartDate: setStartDateActionCreator,
  setEndDate: setEndDateActionCreator,
} = filtersSlice.actions;

export default filtersSlice.reducer;
