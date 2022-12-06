import {createSlice} from '@reduxjs/toolkit';
import {signOut} from "firebase/auth";
import {auth} from "../configs/firebase";
import {toastError, toastSuccess} from "../configs/toast";

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
            signOut(auth).then(() => {
                toastSuccess('Đăng xuất thành công!')
            }).catch((error) => {
                toastError('Có lỗi khi đăng xuất!')
            });
        }
    },
})

export const {getUserInfo, setLogOut} = authSlice.actions

export default authSlice.reducer