import SubwayLineMap from "./SubwayLineMap";
import Search from "./Component/Search";
import SubwayData from "./Subway-map.json";

function App() {

  

  return (
    <div className="App">
      <Search data={SubwayData}/>
      <SubwayLineMap/>
    </div>
  );
}

export default App;
