import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import PocketBase from 'pocketbase';
import pb from '../../pb/pb'

// const pb = new PocketBase('http://127.0.0.1:8090');

export const fetchData = createAsyncThunk("fetchData", async () => {
   try {
       const records = await pb.collection('users').getFullList({
           sort: '-created',
       });
       return records;
   } 
   catch (error) {
        console.error("Error fetching data:", error);
        throw error;
   }
});

export const pocketSlicer = createSlice({
    name: "pocketbase",
    initialState: {
        isLoading: false,
        isError: false,
        data: null
    },
    extraReducers: (builder) => {
        builder.addCase(fetchData.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        });
        
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        });

        builder.addCase(fetchData.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
        });
    }
});

export default pocketSlicer.reducer;
