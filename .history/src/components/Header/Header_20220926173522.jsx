import axiosClient from "configs/api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { auth } from "configs/firebase";
import { authSignOut } from "configs/auth";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo, setLogOut } from "slices/authSlice";

function Header() {
  const [categories, setCategories] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const { cartItems } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.auth);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenSubMenu, setIsOpenSubMenu] = useState(false);
  const [checked, setChecked] = useState(false);
  const dispath = useDispatch();

  const handleMenu = () => {
    const btn = document.getElementById("hamburger-menu");
    btn.classList.toggle(styles["active"]);
    setIsOpenMenu(!isOpenMenu);
  };

  //auth
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const userInfo = {
          uid: user.uid,
          photoUrl: user.photoUrl,
          phoneNumber: user.phoneNumber,
          email: user.email,
          displayName: user.displayName,
          accessToken: user.accessToken,
        };
        dispath(getUserInfo(userInfo));
      } else {
        console.log("User signed out");
      }
    });
  }, [dispath, auth]);

  // api
  useEffect(() => {
    const getCategories = async () => {
      const data = await axiosClient.get("categories");
      setCategories(data);
    };

    getCategories();
  }, []);

  useEffect(() => {
    const menulinks = document.querySelectorAll("#responsive-menu li a");

    // document.body.addEventListener('click', (e) => setIsOpenMenu(false));

    menulinks.forEach((item) =>
      item.addEventListener("click", () => {
        setIsOpenMenu(false);
        setChecked(true);
        document
          .getElementById("hamburger-menu")
          .classList.remove(styles["active"]);
      })
    );
  }, []);

  return (
    <div className={styles["wrapper"]}>
      <div className={styles["inner"]}>
        <Link className={styles["logo"]} to="/">
          <img
            src="https://theme.hstatic.net/1000370235/1000472578/14/logo.png?v=837"
            alt="shebyshi_logo"
          />
          <img src="../../assets/config/logo/LOGO_PASHI_2.png" alt="" />
        </Link>
        <ul className={styles["menu"]}>
          <li>
            <Link to={`/collections/new-arrivals/?page=1`}>New Arrivals</Link>
          </li>
          <li className={styles["dropdown"]}>
            <Link to={`/collections/all/?page=1`}>Products</Link>
            <ul className={styles["sub-menu"]}>
              {categories &&
                categories.map((category) => (
                  <li key={category.id}>
                    <Link to={`/collections/${category.id}`}>
                      {category.name}
                    </Link>
                  </li>
                ))}
            </ul>
          </li>
          <li>
            <Link to={`/collections/hot-products/?page=1`}>Best seller</Link>
          </li>
          {userInfo.accessToken ? (
            <li>
              <span
                onClick={() => {
                  authSignOut();
                  dispath(setLogOut());
                }}
              >
                Hello:{" "}
                {userInfo.email.substring(0, userInfo.email.indexOf("@"))}
              </span>
            </li>
          ) : (
            <li>
              <Link to="/account/login">Đăng ký / đăng nhập</Link>
            </li>
          )}
          <li className={styles["search-btn"]}>
            <button
              className={`${styles["action"]} search-btn`}
              onClick={() => setIsOpen(!isOpen)}
            >
              <i className="bx bx-search"></i>
            </button>
            {isOpen && (
              <div className={`${styles["search-box"]} search-box`}>
                <div className={`${styles["form"]}`}>
                  <input
                    type="text"
                    placeholder="Tìm kiếm..."
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                  />
                  <Link
                    to={`/collections/all/?q=${searchValue}`}
                    onClick={() => {
                      setSearchValue("");
                      setIsOpen(false);
                    }}
                  >
                    <i className="bx bx-search"></i>
                  </Link>
                </div>
              </div>
            )}
          </li>
          <li>
            <Link
              className={`${styles["action"]} ${styles["cart"]}`}
              to="/cart"
              style={{ position: "relative" }}
            >
              <i className="bx bx-cart"></i>
              <span className={styles["cart-count"]}>{cartItems.length}</span>
            </Link>
          </li>
        </ul>
        <div className={styles["responsive-navbar"]}>
          <div
            className={styles["hamburger-menu"]}
            id="hamburger-menu"
            onClick={handleMenu}
          >
            <div className={styles["hamburger"]}></div>
          </div>
          <ul
            id="responsive-menu"
            className={
              isOpenMenu
                ? `${styles["menu"]} ${styles["active"]}`
                : styles["menu"]
            }
          >
            <li>
              <Link to={`/collections/new-arrivals/?page=1`}>New Arrivals</Link>
            </li>
            <li className={styles["dropdown"]}>
              <Link to={`/collections/all/?page=1`}>Products</Link>
              <b
                className={styles["sub-menu-icon"]}
                onClick={() => {
                  console.log(isOpenSubMenu);
                  setIsOpenSubMenu(!isOpenSubMenu);
                }}
              >
                <i className="bx bx-chevron-down"></i>
              </b>
              <ul
                className={
                  isOpenSubMenu
                    ? `${styles["responsive-sub-menu"]} ${styles["active-menu"]}`
                    : styles["responsive-sub-menu"]
                }
              >
                {categories &&
                  categories.map((category) => (
                    <li key={category.id}>
                      <Link
                        onClick={() => setIsOpenMenu(false)}
                        to={`/collections/${category.id}`}
                      >
                        {category.name}
                      </Link>
                    </li>
                  ))}
              </ul>
            </li>
            <li>
              <Link to={`/collections/hot-products/?page=1`}>Best seller</Link>
            </li>
            {userInfo.accessToken ? (
              <li>
                <span
                  onClick={() => {
                    authSignOut();
                    dispath(setLogOut());
                  }}
                >
                  Hello:{" "}
                  {userInfo.email.substring(0, userInfo.email.indexOf("@"))}
                </span>
              </li>
            ) : (
              <li>
                <Link to="/account/login">Đăng ký / đăng nhập</Link>
              </li>
            )}
            <div className={styles["nav-action"]}>
              <li className={styles["search-btn"]}>
                <button
                  className={`${styles["action"]} search-btn`}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <i className="bx bx-search"></i>
                </button>
                {isOpen && (
                  <div className={`${styles["search-box"]} search-box`}>
                    <div className={`${styles["form"]}`}>
                      <input
                        type="text"
                        placeholder="Tìm kiếm..."
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                      />
                      <Link
                        to={`/collections/all/?q=${searchValue}`}
                        onClick={() => {
                          setSearchValue("");
                          setIsOpenMenu(false);
                          setIsOpen(false);
                        }}
                      >
                        <i className="bx bx-search"></i>
                      </Link>
                    </div>
                  </div>
                )}
              </li>
              <li>
                <Link
                  className={`${styles["action"]} ${styles["cart"]}`}
                  to="/cart"
                >
                  <i className="bx bx-cart"></i>
                  <span className={styles["cart-count"]}>
                    {cartItems.length}
                  </span>
                </Link>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
