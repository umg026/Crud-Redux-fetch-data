import { createSlice } from "@reduxjs/toolkit";
import { pb } from "./pb";


const resultList = await pb.collection('users').getFullList();

const userSlice = createSlice({
    name: "users",
    initialState: resultList,
    reducers: {
       addUser : ( state, action)=>{
          state.push(action.payload)
       }
    }
})
export const { addUser} = userSlice.actions
export default userSlice.reducer