import { IService } from '../../Models/DataBaseModels/Service';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IServiceFilter } from '../../Models/ServiceFilter';


interface IServiceState {
    loading: boolean,
    error: string,
    total: number,
    services: IService[],
    servicesContainer: IService[]
};

const initialState: IServiceState = {
    loading: false,
    total: 0,
    error: '',
    services: [],
    servicesContainer: []
};

interface IServicePayload {
    services: IService[],
    total: number
}

export const serviceSlice = createSlice({
    name: 'service',
    initialState,
    reducers: {
        fetching(state) {
            state.loading = true;
        },
        fetchSuccess(state, action: PayloadAction<IServicePayload>) {
            state.loading = false;
            state.services = action.payload.services;
            state.servicesContainer = action.payload.services;
            state.total = action.payload.total;
            state.error = '';
        },
        fetchError(state, action: PayloadAction<Error>) {
            state.loading = false;
            state.error = action.payload.message;
        },
        filter(state, action: PayloadAction<IServiceFilter>) {

            state.services = state.servicesContainer
            // .filter(u => u.Client.Car.Brand.Id == action.payload.brand)
            // .filter(u => u.Defect.Id = action.payload.defect)
            // .filter(u => u.Worker?.Id == action.payload.worker);
        }
    }
});

export default serviceSlice.reducer;