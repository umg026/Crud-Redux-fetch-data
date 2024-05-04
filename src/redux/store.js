import { configureStore } from "@reduxjs/toolkit";
// import  pocketSlicer  from "./slices/pocketbase_Slice";
// import userSlicer from "./slices/userSlicer";
import todoSlice from "./slices/todoSlice";

export const store = configureStore({
    reducer: {
        todo : todoSlice,
        // pocketbase: pocketSlicer,
        // users : userSlicer
    }
});
