import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userInfo: {}
}

export const authSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    getUserInfo(state, action) {
      state.userInfo = action.payload;
    },
    setLogOut(state, action) {
      state.userInfo = {};
    }
  },
})

export const { getUserInfo, setLogOut } = authSlice.actions

export default authSlice.reducer