import styles from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={styles.overlay}>
      <div className={styles.loading} data-loading-text="pashi"></div>
    </div>
  );
};

export default Loading;
