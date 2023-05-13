import axios from "../../axios/axios"
import { AppDispatch } from "..";
import { serviceSlice } from "../slices/ServiceSlice";
import { IServerResponse } from "../../Models/ServerResponse";
import { IService } from "../../Models/DataBaseModels/Service";

export const fetchServices = (page = 1, limit = 20) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(serviceSlice.actions.fetching);
            const response = await axios.get<IServerResponse<IService[]>>('services', {
                params: { page, limit }
            });
            dispatch(serviceSlice.actions.fetchSuccess({
                services: response.data.data,
                total: response.data.meta.total
            }));
        } catch (e) {
            dispatch(serviceSlice.actions.fetchError(e as Error));
        }
    }
}

export const fetchAllServices = () => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(serviceSlice.actions.fetching);
            const response = await axios.options<IServerResponse<IService[]>>('services/search');
            dispatch(serviceSlice.actions.fetchSuccess({
                services: response.data.data,
                total: response.data.data.length
            }));
        } catch (e) {
            dispatch(serviceSlice.actions.fetchError(e as Error));
        }
    }
}
