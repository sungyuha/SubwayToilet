import React from "react";
import MainNotice from "../Components/MainNotice";
import MainSuggest from "../Components/MainSuggest";
import Search from "../Components/Search";
import SubwayData from "../Subway-map.json";
import SubwayLine from "../SubwayLineMap";

const Main = () => {
  return (
    <>
      <div>
        <Search data={SubwayData} />
        <SubwayLine />
        <MainNotice />
        <MainSuggest />
      </div>
    </>
  );
};

export default Main;
