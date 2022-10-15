import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FiltersState } from "../interfaces/FiltersInterface";

const initialState: FiltersState = {
  to: new Date().toDateString(),
  from: new Date().toDateString(),
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
    setStartDate: (filters: FiltersState, action: PayloadAction<Date>) => ({
      ...filters,
      from: action.payload.toDateString(),
    }),
    setEndDate: (filters: FiltersState, action: PayloadAction<Date>) => ({
      ...filters,
      to: action.payload.toDateString(),
    }),
  },
});

export const {
  filterByKeyword: filterByKeywordActionCreator,
  setStartDate: setStartDateActionCreator,
  setEndDate: setEndDateActionCreator,
} = filtersSlice.actions;

export default filtersSlice.reducer;
