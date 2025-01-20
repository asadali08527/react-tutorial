import { createSlice } from '@reduxjs/toolkit';

// Define a user slice with initial state null and two reducers: setUser and removeUser.
const userSlice = createSlice({
    name: 'user',
    initialState: null,
    reducers: {
        setUser: (state, action) => {
            return action.payload;
        },
        removeUser: (state) => {
            return null;
        }
    }
});
export const {setUser,removeUser} =  userSlice.actions
export default userSlice.reducer;