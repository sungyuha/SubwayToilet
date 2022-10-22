import './SubwayMap.scss';
import {ReactComponent as SubwayLine2} from './Seoul_subway_linemap_ko.svg';
import {useEffect, useRef} from 'react';

const SubwayLineMap = () => {

  const ref = useRef(); // svg감싸는 div

  function zoomInOut( viewEl, contentEl, oldScale, newScale, mx, my ){

    let w = contentEl.clientWidth;   //기존 컨텐트 엘리먼트 크기
    let h = contentEl.clientHeight;

    let w2 = w * ( newScale / oldScale );   //새로운 컨텐트 엘리먼트 크기 계산
    let h2 = h * ( newScale / oldScale );

    contentEl.style.width = w2;   //새로운 컨텐트 엘리먼크 크기 설정
    contentEl.style.height = h2;
    //위 6줄은 svg 크기 결정

    //밑 6줄은 div의 스크롤 위치 결정

    let preScrollX = viewEl.scrollLeft;   //기존 스크롤 위치
    let preScrollY = viewEl.scrollTop;

    

    let newScrollX = ( preScrollX + mx ) * ( newScale / oldScale ) - mx;   //새로운 스크롤 위치 계산, 공식 sx2 = (sx1 + mx) * scale2/scale1 - mx
    let newScrollY = ( preScrollY + my ) * ( newScale / oldScale ) - my;
    
    viewEl.scrollLeft = newScrollX;   //새로운 스크롤 위치 설정
    viewEl.scrollTop = newScrollY;
    

} 
  //스케일 정해주는 것
  //스케일이 커졌을 때 위치 지정해 주는 것
  //드래그 했을 때 위치 바꿔 주는 것
  useEffect(()=>{
    const arr = document.getElementById('line2_text').children;
    
    let isDragging = false;

    for(let i = 0; i < arr.length; i++){
      arr[i].addEventListener('click', function(){
        console.log(this.textContent);
      });
    }
    const zoomElementWrap = ref.current;
    const zoomElement = zoomElementWrap.firstChild; //svg객체
    

    // const BODY = document.querySelector("body");

    // zoomElementWrap.addEventListener("mouseenter", function(e){
    //   BODY.classList.add("scrollLock");
    // });

    // zoomElementWrap.addEventListener("mouseleave", function(e){
    //   BODY.classList.remove("scrollLock");
    // });

    // $('#SubwayMap').on("wheel", (e) => {


    const AbsoluteOriginLeft = parseFloat(zoomElement.style.left);
    const AbsoluteOriginTop = parseFloat(zoomElement.style.top);
    let oldScale = 1;
    let newScale = 1;
    const ZOOM_SPEED = 0.1;
    zoomElementWrap.addEventListener("wheel", function(e){
      e.preventDefault();
      if(!isDragging){
          // console.dir(e);
        if( e.deltaY > 0 ){//축소
          if(oldScale > 1 ){
            newScale = oldScale - ZOOM_SPEED;
          }else{
            newScale = 1;
            zoomElement.style.left = AbsoluteOriginLeft + 'px';
            zoomElement.style.top = AbsoluteOriginTop + 'px';
          } 
        }else{//확대
          if(oldScale < 10){
            newScale = oldScale + ZOOM_SPEED;
          }else{
            newScale = 10;
          }
          
        }
        
        let absoluteX = window.pageXOffset + zoomElementWrap.getBoundingClientRect().x;
        let absoluteY = window.pageYOffset + zoomElementWrap.getBoundingClientRect().y;
        
        let mx = e.pageX - absoluteX;
        let my = e.pageY - absoluteY;

        zoomInOut(zoomElementWrap, zoomElement, oldScale, newScale, mx, my);
        oldScale = newScale;
        
        // if( e.deltaY > 0 ){
        //   zoomElement.style.transform = `scale(${(zoom > 1 ? zoom -= ZOOM_SPEED : zoom)})`;
        // }else{
        //   zoomElement.style.transform = `scale(${(zoom += ZOOM_SPEED)})`;
        // }
      }
    });
    //마우스 드래그 이동 구현
    // let {width: divWidth, height: divHeight} = zoomElementWrap.getBoundingClientRect(); 
    // let {width: svgWidth, height: svgHeight} = zoomElement.getBoundingClientRect(); 
    
    let originX = null;
    let originY = null;
    let originScrollX = null;
    let originScrollY = null;
    zoomElementWrap.addEventListener("mousedown", (e)=>{
      if(e.target.tagName === 'text'){
        isDragging = false;
      }else{
        isDragging = true;
        originX = e.pageX;
        originY = e.pageY;
        originScrollX = zoomElementWrap.scrollLeft;
        originScrollY = zoomElementWrap.scrollTop;
      }
      
    });
    
    document.addEventListener("mouseup", (e)=>{
      isDragging = false;
    });

    document.addEventListener("mousemove", (e)=>{
      if(isDragging){
        let diffX = (e.pageX - originX) / 2;
        let diffY = (e.pageY - originY) / 2;
        zoomElementWrap.scrollLeft = originScrollX - diffX;
        zoomElementWrap.scrollTop = originScrollY - diffY;
        // zoomElement.style.left = originLeft + diffX + 'px';
        // zoomElement.style.top = originTop + diffY + 'px';
        
      }
    });
    
  }, []);
  
  return(

      <div className='SubwayMap' id='SubwayMap' ref={ref}>
          <SubwayLine2 width='100%' height='100%'/>
      </div>
     
  );
}

export default SubwayLineMap;