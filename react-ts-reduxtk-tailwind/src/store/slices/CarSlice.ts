import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ICar } from '../../Models/DataBaseModels/Car';


interface ICarState {
    loading: boolean,
    error: string,
    cars: ICar[],
};

const initialState: ICarState = {
    loading: false,
    error: '',
    cars: [],
};

export const carSlice = createSlice({
    name: 'car',
    initialState,
    reducers: {
        fetching(state) {
            state.loading = true
        },
        fetchSuccess(state, action: PayloadAction<ICar[]>) {
            state.loading = false
            state.cars = action.payload
            state.error = ''
        },
        fetchError(state, action: PayloadAction<Error>) {
            state.loading = false
            state.error = action.payload.message
        },
    }
});

export default carSlice.reducer;