import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counteSlide';

export const store = configureStore({
    reducer:{
        counter: counterReducer
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDisPatch = typeof store.dispatch