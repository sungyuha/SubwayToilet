import React from "react";
import MainNotice from "../Components/MainNotice";
import MainSuggest from "../Components/MainSuggest";
import styles from "./Main.module.scss";

const Main = () => {
  return (
    <>
      <div className={styles.main__content}>
        <MainNotice />
        <MainSuggest />
      </div>
    </>
  );
};

export default Main;
