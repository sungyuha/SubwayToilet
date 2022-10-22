import React from "react";
import MainNotice from "../Components/MainNotice";
import MainSuggest from "../Components/MainSuggest";
import styles from "./Main.module.scss";
import Search from "../Components/Search";
import SubwayData from "../Subway-map.json";
import SubwayMap from "../SubwayMap";

const Main = () => {
  return (
    <>
      <div>
        <Search data={SubwayData} />
        <SubwayMap width='100%' height='100%' />
        <div className={styles.main__content}>
          <MainNotice />
          <MainSuggest />
        </div>
      </div>
    </>
  );
};

export default Main;
