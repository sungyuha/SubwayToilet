import './SubwayMap.scss';
import {useRef, useEffect} from 'react';
import line2icon from "../images/Line_2.png";


const SubwayTooltip = (props) => {
    const ref = useRef();
    
    

    useEffect(()=>{
        const Tooltip = ref.current;
        Tooltip.style.left = props.X - Tooltip.clientWidth/2 + 'px';
        Tooltip.style.top = props.Y- Tooltip.clientHeight - 16 + 'px';
    });

    return(
        <div className='tooltip-wrap' ref={ref}>
            <div><img className='line2icon' src={line2icon} width='20px' height='20px' alt='2호선'/></div>
            <div>{props.title}</div>
            <button className='success'>역 상세보기</button>
        </div>
    );
}

export default SubwayTooltip;