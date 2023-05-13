import axios from "../../axios/axios"
import { AppDispatch } from "..";
import { IServerResponse } from "../../Models/ServerResponse";
import { defectSlice } from "../slices/DefectSlice";
import { IDefect } from "../../Models/DataBaseModels/Defect";

export const fetchDefects = () => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(defectSlice.actions.fetching);
            const response = await axios.get<IServerResponse<IDefect[]>>('defects');
            dispatch(defectSlice.actions.fetchSuccess(
                response.data.data
            ));
        } catch (e) {
            dispatch(defectSlice.actions.fetchError(e as Error));
        }
    }
}