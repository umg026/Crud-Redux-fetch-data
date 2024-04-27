import { configureStore } from "@reduxjs/toolkit";
import userSlicer from "./userSlicer";


export const store = configureStore({
    reducer:{
        users : userSlicer
    }
})