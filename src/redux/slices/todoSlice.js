import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import pb from "../../pb/pb";

export const pocketData = createAsyncThunk("fetchData", async () => {

    try {
        const records = await pb.collection('users').getFullList();
        // const filterdata = records.filter((item)=> item.type == "content_author")

        return records

    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }

})


const todoSlice = createSlice({
    name: "todo",
    initialState: {
        isLoading: false,
        isError: false,
        data: null
    },
    reducers: {
        pocketData: (state, action) => {
          // Assuming action.payload contains the fetched data
          state.data = action.payload;
        },
        filterData: (state, action) => {
          state.data = action.payload;
        }},

    extraReducers: (builder) => {
        builder.addCase(pocketData.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        });

        builder.addCase(pocketData.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        });

        builder.addCase(pocketData.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
        });
    }
})
export default todoSlice.reducer