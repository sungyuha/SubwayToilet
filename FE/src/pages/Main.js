import React from "react";
import MainNotice from "../Components/MainNotice";
import MainSuggest from "../Components/MainSuggest";
import styles from "./Main.module.scss";
import SubwayMap from "../Components/SubwayMap";

const Main = () => {
  return (
    <>
      <div className={styles.main__content_box}>
        <SubwayMap/>
        <div className={styles.main__content}>
          <MainNotice />
          <MainSuggest />
        </div>
      </div>
    </>
  );
};

export default Main;
