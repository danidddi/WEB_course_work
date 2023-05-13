import axios from "../../axios/axios"
import { AppDispatch } from "..";
import { IServerResponse } from "../../Models/ServerResponse";
import { peopleSlice } from "../slices/PeopleSlice";
import { IPeople } from "../../Models/DataBaseModels/People";

export const fetchPeople = () => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(peopleSlice.actions.fetching);
            const response = await axios.get<IServerResponse<IPeople[]>>('people');
            dispatch(peopleSlice.actions.fetchSuccess(
                response.data.data
            ));
        } catch (e) {
            dispatch(peopleSlice.actions.fetchError(e as Error));
        }
    }
}