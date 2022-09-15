import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import Inbox from "components/Inbox/Inbox";
import { useEffect } from "react";
import styles from "./DefaultLayout.module.css";

function DefaultLayout({ children }) {
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [children]);
  return (
    <div>
      <Header />
      <div className={styles["container"]}>
        {children}
        <Inbox />
      </div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
