import reduxActionTypes from "../reduxActionTypes";
import { createAction } from "@reduxjs/toolkit";
export const addContact = createAction(reduxActionTypes.addContact);
export const deleteContact = createAction(reduxActionTypes.deleteContact);
export const filterContacts = createAction(reduxActionTypes.filter);
