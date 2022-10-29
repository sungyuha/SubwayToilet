import './SubwayMap.scss';
import {useRef, useEffect, useState} from 'react';
import line2icon from "../images/Line_2.png";

import Button from './Button';
import SubwayModal from './SubwayModal';
import Header from "./Modal_file/ModalHeader";
import Content from "./Modal_file/ModalContent";

const SubwayTooltip = (props) => {
    const ref = useRef();
    
    useEffect(()=>{
        const Tooltip = ref.current;
        Tooltip.style.left = props.X - Tooltip.clientWidth/2 + 'px';
        Tooltip.style.top = props.Y- Tooltip.clientHeight - 16 + 'px';
    });

    const [modal, setModal] = useState();

    const lineButtonHandler = () => {
        setModal({
            title: <Header/>,
            message: <Content/>,
        });
    }

    const modalHandler = () => {
        setModal(null);
    };

    return(
        <div className='tooltip-wrap' ref={ref}>
            <div><img className='line2icon' src={line2icon} width='20px' height='20px' alt='2호선'/></div>
            <div>{props.title}</div>
            {modal && (
                <SubwayModal
                    title={modal.title}
                    message={modal.message}
                    onConfirm={modalHandler}
                />
            )}
                <Button className='success' type="submit" onClick={lineButtonHandler}>역 상세보기</Button>
        </div>
    );
}

export default SubwayTooltip;