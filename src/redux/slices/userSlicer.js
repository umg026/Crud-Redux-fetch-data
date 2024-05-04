import { createSlice } from "@reduxjs/toolkit";

export const userSlicer = createSlice({
    name: "user",
    initialState: {
        // email: '',
        // password: '',
        data: null,
        isLoggedIn: false,
    },

    reducers: {
        login(state, actions) {
            state.email = actions.payload.email
            state.password = actions.payload.password
            state.isLoggedIn = true;
        },

        logout(state) {
            state.email = "";
            state.password = "";
            state.isLoggedIn = false;
            localStorage.removeItem('pocketbase_auth');
        },

        localDataa: (state,action) => {
            const storeData = localStorage.getItem("pocketbase_auth")?.model

            state.data  = storeData
        }

    }
})

export const { login, logout, localDataa } = userSlicer.actions
export default userSlicer.reducer