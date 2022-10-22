import React from "react";
import MainNotice from "../Components/MainNotice";
import MainSuggest from "../Components/MainSuggest";
import styles from "./Main.module.scss";
import Search from "../Components/Search";
import SubwayData from "../Subway-map.json";
import SubwayLine from "../SubwayLineMap";

const Main = () => {
  return (
    <>
      <div>
        <Search data={SubwayData} />
        <SubwayLine />
        <div className={styles.main__content}>
          <MainNotice />
          <MainSuggest />
        </div>
      </div>
    </>
  );
};

export default Main;
