import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk("fetchTodos", async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos")
    return response.json()
})

export const todoSlice = createSlice({
    name: " todo",
    initialState: {
        isLoadong: false,
        isError: false,
        data: null
    },
    extraReducers: (builder) => {
          builder.addCase(fetchTodos.pending , (state)=>{
            state.isLoadong = true
            state.isError = false;
          })
          builder.addCase(fetchTodos.fulfilled , (state, actions)=>{
            state.isLoadong = false 
            state.data = actions.payload
            console.log(state.data);
          })
          builder.addCase(fetchTodos.rejected , (state)=>{
            state.isError = true
          })

    }
})

export default todoSlice.reducer