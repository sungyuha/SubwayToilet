import './Map.scss';
import {ReactComponent as SubwayLine2} from './Seoul_subway_linemap_ko.svg';
import {useEffect, useRef} from 'react';

const SubwayLineMap = () => {

  const zoomElementWrap = useRef();
  
  useEffect(()=>{
    const arr = document.getElementById('line2_text').children;
    for(let i = 0; i < arr.length; i++){
      arr[i].addEventListener('click', function(){
        console.log(this.textContent);
      });
    }
    const zoomElement = zoomElementWrap.current.firstChild;
    let zoom = 1;
    const ZOOM_SPEED = 0.1;
    const BODY = document.querySelector("body");
    
    zoomElement.addEventListener("mouseenter", function(e){
      BODY.classList.add("scrollLock");
    });
    zoomElement.addEventListener("mouseleave", function(e){
      BODY.classList.remove("scrollLock");
    });
    zoomElement.addEventListener("wheel", function(e){
      
      
      if( e.deltaY > 0 ){
        zoomElement.style.transform = `scale(${(zoom > 1 ? zoom -= ZOOM_SPEED : zoom)})`;
      }else{
        zoomElement.style.transform = `scale(${(zoom += ZOOM_SPEED)})`;
      }
      
    });
    // console.dir(zoomElement);
  }, []);
  
  return(
      <div className='SubwayMap' ref={zoomElementWrap}>
          <SubwayLine2 width='100%' height='100%'/>
      </div>
      
  );
}

export default SubwayLineMap;