import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FiltersState } from "../interfaces/FiltersInterface";

const initialState: FiltersState = {};

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
  },
});

export const { filterByKeyword: filterByKeywordActionCreator } =
  filtersSlice.actions;

export default filtersSlice.reducer;
