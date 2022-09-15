import {
  createUser,
  logInUser,
  signInWithFacebook,
  signInWithGoogle,
} from "configs/auth";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

function Login(props) {
  const emailRegRef = useRef();
  const passwordRegRef = useRef();
  const nameRegRef = useRef();
  const emailLogRef = useRef();
  const passwordLogRef = useRef();
  const navigate = useNavigate();

  return (
    <div className={styles["wrapper"]}>
      <div className={styles["social-login"]}>
        <h4>Đăng nhập bằng</h4>
        <div className={styles["method"]}>
          <button onClick={signInWithFacebook}>Facebook</button>
          <button onClick={signInWithGoogle}>Google</button>
        </div>
      </div>

      <div className={styles["line"]}>
        <span>Hoặc</span>
      </div>

      <div className={styles["account-login"]}>
        <div className={styles["login-form"]}>
          <h1 className={styles["title"]}>Đăng nhập</h1>
          <div className={styles["form"]}>
            <form action="">
              <div className={styles["form-group"]}>
                <i className="bx bxs-envelope"></i>
                <input
                  type="email"
                  placeholder="Email của bạn"
                  ref={emailLogRef}
                />
              </div>
              <div className={styles["form-group"]}>
                <i className="bx bxs-lock"></i>
                <input
                  type="text"
                  placeholder="Nhập mật khẩu"
                  ref={passwordLogRef}
                />
              </div>
              <div
                className={`${styles["form-group"]} ${styles["form-group-bottom"]}`}
              >
                <button
                  type="button"
                  onClick={() => {
                    logInUser(
                      emailLogRef.current.value,
                      passwordLogRef.current.value
                    );
                    emailLogRef.current.value = "";
                    passwordLogRef.current.value = "";
                  }}
                >
                  Đăng nhập
                </button>
                <a href="/" className={styles["forgot"]}>
                  Quên mật khẩu?
                </a>
              </div>
            </form>
          </div>
        </div>
        <div className={styles["register-form"]}>
          <h1 className={styles["title"]}>Đăng ký thành viên mới</h1>
          <div className={styles["form"]}>
            <form action="">
              <div className={styles["form-group"]}>
                <i className="bx bxs-user"></i>
                <input type="text" placeholder="Họ tên " ref={nameRegRef} />
              </div>
              <div className={styles["form-group"]}>
                <i className="bx bxs-envelope"></i>
                <input type="email" placeholder="Email " ref={emailRegRef} />
              </div>
              <div className={styles["form-group"]}>
                <i className="bx bxs-lock"></i>
                <input
                  type="password"
                  placeholder="Mật khẩu"
                  ref={passwordRegRef}
                />
              </div>
              <div
                className={`${styles["form-group"]} ${styles["form-group-bottom"]}`}
              >
                <button
                  type="button"
                  onClick={() => {
                    createUser(
                      nameRegRef.current.value,
                      emailRegRef.current.value,
                      passwordRegRef.current.value
                    );
                    nameRegRef.current.value = "";
                    emailRegRef.current.value = "";
                    passwordRegRef.current.value = "";
                  }}
                >
                  Đăng ký
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
