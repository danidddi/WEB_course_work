import axios from "../../axios/axios"
import { AppDispatch } from "..";
import { IServerResponse } from "../../Models/ServerResponse";
import { carSlice } from "../slices/CarSlice";
import { ICar } from "../../Models/DataBaseModels/Car";

export const fetchCars = () => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(carSlice.actions.fetching);
            const response = await axios.get<IServerResponse<ICar[]>>('cars');
            dispatch(carSlice.actions.fetchSuccess(
                response.data.data
            ));
        } catch (e) {
            dispatch(carSlice.actions.fetchError(e as Error));
        }
    }
}