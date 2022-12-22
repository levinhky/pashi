import {
    signInWithPopup,
    GoogleAuthProvider,
    FacebookAuthProvider,
    signOut,
    onAuthStateChanged,
    sendEmailVerification,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from "firebase/auth";
import {auth} from "./firebase";
import {toastError, toastSuccess} from "./toast";
import {sendPasswordResetEmail} from "firebase/auth";

const googleAuthProvider = new GoogleAuthProvider();
const facebookAuthProvider = new FacebookAuthProvider();

export async function resetPassword(email) {
    await sendPasswordResetEmail(auth, email)
        .then(() => {
            toastSuccess('Thư đặt lại mật khẩu đã gửi!');
        })
        .catch((error) => {
            toastError('Có lỗi xảy ra vui lòng nhập lại!');
        });
}

export function signInWithGoogle() {
    signInWithPopup(auth, googleAuthProvider)
        .then((result) => {
            toastSuccess('Đăng nhập thành công!');
        }).catch((error) => {
        toastError('Có lỗi xảy ra');
    });
}

export function signInWithFacebook() {
    signInWithPopup(auth, facebookAuthProvider)
        .then((result) => {
            toastSuccess('Đăng nhập thành công!');
        })
        .catch((error) => {
            const errorMessage = error.message;
            toastError('Có lỗi xảy ra!');
        });
}

export function createUser(name, email, password) {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            toastSuccess('Đăng ký thành công!');
            setTimeout(() => toastSuccess('Tài khoản của bạn đã tự đăng nhập!'), 2000)
            const user = userCredential.user;
            user.displayName = name;
            verify();
        })
        .catch((error) => {
            toastError('Có lỗi xảy ra!');
        });
};

function verify() {
    sendEmailVerification(auth.currentUser).then(() =>  toastSuccess('Đã gửi email xác thực!')).catch(() => toastError('co cai loz'))
}

export function logInUser(email, password) {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            toastSuccess('Đăng nhập thành công!');
        })
        .catch((error) => {
            toastError('Thất bại! Vui lòng kiểm tra lại thông tin');
        });
}

export function authSignOut() {
    signOut(auth).then(() => {
        toastSuccess('Đăng xuất thành công!');
    }).catch((error) => {
        toastError('Có lỗi xảy ra!');
    });

}