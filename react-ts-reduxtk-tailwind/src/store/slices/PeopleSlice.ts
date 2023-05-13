import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IPeople } from '../../Models/DataBaseModels/People';


interface IPeopleState {
    loading: boolean,
    error: string,
    people: IPeople[],
};

const initialState: IPeopleState = {
    loading: false,
    error: '',
    people: [],
};

export const peopleSlice = createSlice({
    name: 'people',
    initialState,
    reducers: {
        fetching(state) {
            state.loading = true
        },
        fetchSuccess(state, action: PayloadAction<IPeople[]>) {
            state.loading = false
            state.people = action.payload
            state.error = ''
        },
        fetchError(state, action: PayloadAction<Error>) {
            state.loading = false
            state.error = action.payload.message
        },
    }
});

export default peopleSlice.reducer;