import axios from "../../axios/axios"
import { AppDispatch } from "..";
import { brandSlice } from "../slices/BrandSlice";
import { IServerResponse } from "../../Models/ServerResponse";
import { IBrand } from "../../Models/DataBaseModels/Brand";

export const fetchBrands = () => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(brandSlice.actions.fetching);
            const response = await axios.get<IServerResponse<IBrand[]>>('brands');
            dispatch(brandSlice.actions.fetchSuccess(
                response.data.data
            ));
        } catch (e) {
            dispatch(brandSlice.actions.fetchError(e as Error));
        }
    }
}