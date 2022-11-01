import counterReducer from "./reducers/counterReducer";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    counter: counterReducer,
});

export const createReduxStore = (initialStore = {counter: {value: 10}}) => {
    return configureStore({ reducer: rootReducer, preloadedState: initialStore });
};
