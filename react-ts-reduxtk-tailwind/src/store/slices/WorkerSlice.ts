import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IWorker } from '../../Models/DataBaseModels/Worker';


interface IWorkerState {
    loading: boolean,
    error: string,
    workers: IWorker[],
};

const initialState: IWorkerState = {
    loading: false,
    error: '',
    workers: [],
};

export const workerSlice = createSlice({
    name: 'worker',
    initialState,
    reducers: {
        fetching(state) {
            state.loading = true
        },
        fetchSuccess(state, action: PayloadAction<IWorker[]>) {
            state.loading = false
            state.workers = action.payload
            state.error = ''
        },
        fetchError(state, action: PayloadAction<Error>) {
            state.loading = false
            state.error = action.payload.message
        },
    }
});

export default workerSlice.reducer;