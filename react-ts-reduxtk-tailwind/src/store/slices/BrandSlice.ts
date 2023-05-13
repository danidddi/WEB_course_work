import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IBrand } from '../../Models/DataBaseModels/Brand';


interface IBrandState {
    loading: boolean,
    error: string,
    brands: IBrand[],
};

const initialState: IBrandState = {
    loading: false,
    error: '',
    brands: [],
};

export const brandSlice = createSlice({
    name: 'brand',
    initialState,
    reducers: {
        fetching(state) {
            state.loading = true
        },
        fetchSuccess(state, action: PayloadAction<IBrand[]>) {
            state.loading = false
            state.brands = action.payload
            state.error = ''
        },
        fetchError(state, action: PayloadAction<Error>) {
            state.loading = false
            state.error = action.payload.message
        },
    }
});

export default brandSlice.reducer;