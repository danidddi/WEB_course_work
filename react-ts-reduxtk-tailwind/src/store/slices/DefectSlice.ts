import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IDefect } from '../../Models/DataBaseModels/Defect';


interface IDefectState {
    loading: boolean,
    error: string,
    defects: IDefect[],
};

const initialState: IDefectState = {
    loading: false,
    error: '',
    defects: [],
};

export const defectSlice = createSlice({
    name: 'defect',
    initialState,
    reducers: {
        fetching(state) {
            state.loading = true
        },
        fetchSuccess(state, action: PayloadAction<IDefect[]>) {
            state.loading = false
            state.defects = action.payload
            state.error = ''
        },
        fetchError(state, action: PayloadAction<Error>) {
            state.loading = false
            state.error = action.payload.message
        },
    }
});

export default defectSlice.reducer;