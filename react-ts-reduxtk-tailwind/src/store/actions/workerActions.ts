import axios from "../../axios/axios"
import { AppDispatch } from "..";
import { IServerResponse } from "../../Models/ServerResponse";
import { workerSlice } from "../slices/WorkerSlice";
import { IWorker } from "../../Models/DataBaseModels/Worker";

export const fetchWorkers = () => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(workerSlice.actions.fetching);
            const response = await axios.get<IServerResponse<IWorker[]>>('workers');
            dispatch(workerSlice.actions.fetchSuccess(
                response.data.data
            ));
        } catch (e) {
            dispatch(workerSlice.actions.fetchError(e as Error));
        }
    }
}