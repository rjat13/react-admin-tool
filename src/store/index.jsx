import { configureStore } from "@reduxjs/toolkit";
import {toggleSidebar, commonReducer} from "./slices/commonSlice"

const store = configureStore({
    reducer: {
        common:commonReducer
    }
})

export {store, toggleSidebar}