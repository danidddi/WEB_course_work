import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import serviceReducer from './slices/ServiceSlice';
import brandReducer from './slices/BrandSlice';
import defectReducer from './slices/DefectSlice';
import workerReducer from './slices/WorkerSlice';
import carReducer from './slices/CarSlice';
import peopleReducer from './slices/PeopleSlice';

const rootReducer = combineReducers({
    service: serviceReducer,
    brand: brandReducer,
    defect: defectReducer,
    worker: workerReducer,
    car: carReducer,
    people: peopleReducer,
});

export function setupStore() {
    return configureStore({
        reducer: rootReducer
    });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
