import todoSlice from "./slices/todoSlice";
import { configureStore } from "@reduxjs/toolkit";
import  pocketSlicer  from "./slices/pocketbase_Slice";


export const store = configureStore({
    reducer: {
        pocketbase: pocketSlicer,
        todo: todoSlice,
    }
});
