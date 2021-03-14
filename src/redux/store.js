import { combineReducers } from "redux";
import { contactsReducer, filterReducer } from "./reducers";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { configureStore } from "@reduxjs/toolkit";
const contactsPersistConfig = {
  key: "contacts",
  storage,
  blacklist: ["filter"],
};
const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

export const store = configureStore({
  reducer: persistReducer(contactsPersistConfig, rootReducer),
});

export const persistor = persistStore(store);
