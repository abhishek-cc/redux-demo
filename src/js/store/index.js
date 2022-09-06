// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducer";

const preloadedState = window.__PRELOADED_STATE__
const clientStore = configureStore({
    reducer: rootReducer,
    preloadedState,
  })
// const store = createStore(rootReducer);

export default clientStore;