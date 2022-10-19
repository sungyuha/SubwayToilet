import './Map.scss';
import {ReactComponent as SubwayLine2} from './Seoul_subway_linemap_ko.svg';
import {useEffect} from 'react';

const SubwayLineMap = () => {
    useEffect(()=>{
        const arr = document.getElementById('line2_text').children;
        for(let i = 0; i < arr.length; i++){
          arr[i].addEventListener('click', ()=>{
            console.log(this);
          });
        }
      }, []);
    
    return(
        <div className='SubwayMap'>
            <SubwayLine2 width='100%' height='100%'/>
        </div>
        
    );
}

export default SubwayLineMap;