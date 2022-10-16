import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FiltersState } from "../interfaces/FiltersInterface";

const initialState: FiltersState = {
  to: new Date().toISOString(),
  from: new Date().toISOString(),
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
