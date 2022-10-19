import {ReactComponent as SubwayLine2} from './Seoul_subway_linemap_ko.svg';
import {useEffect} from 'react';


function App() {

  useEffect(()=>{
    const arr = document.getElementById('line2_text').children;
    for(let i = 0; i < arr.length; i++){
      arr[i].addEventListener('click', function(){
        console.log(this);
      });
    }
  }, []);

  return (
    <div className="App">
      <SubwayLine2 width='1000px' height='1200'/>
    </div>
  );
}

export default App;
