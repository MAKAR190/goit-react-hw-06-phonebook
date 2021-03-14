import reduxActionTypes from "../reduxActionTypes";
import { createReducer } from "@reduxjs/toolkit";
const initialContactsState = [];
const initialFilterState = "";
export const contactsReducer = createReducer(initialContactsState, {
  [reduxActionTypes.addContact]: (state, action) => [...state, action.payload],
  [reduxActionTypes.deleteContact]: (state, action) =>
    state.filter((contact) => contact.id !== action.payload),
});
export const filterReducer = createReducer(initialFilterState, {
  [reduxActionTypes.filter]: (_, action) => action.payload,
});
