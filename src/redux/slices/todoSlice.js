import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTodo = createAsyncThunk("fetchTodo", async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos")
    return response.json()
})

const todoSlice = createSlice({
    name: "todo",
    initialState: {
        isLoading: false,
        data: null,
        isError: false
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTodo.pending, (state, actions) => {
            state.isLoading = true
        });

        builder.addCase(fetchTodo.fulfilled, (state, actions) => {
            state.data = actions.payload;
            state.isLoading = false;
        });
        
    
        builder.addCase(fetchTodo.rejected, (state, actions) => {
            state.isError = true
        });
    }
})

export default todoSlice.reducer