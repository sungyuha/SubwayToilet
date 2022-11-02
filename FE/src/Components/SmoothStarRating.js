import './SmoothStarRating.scss';
import { useRef, useState, useEffect } from 'react';

const SmoothStarRating = ({rating}) => {
    const ref = useRef();
    
    useEffect(()=>{
    //  async function func() {
    //     ref.current.style.width =  rating/5*100 + '%';
    //  }
    //  func();
        ref.current.style.width =  rating/5*100 + '%';
        console.log(rating/5*100);
    })

    return(
        <div className="score-wrapper">
            <div className="score">
                <div className="foreground" ref={ref}>
                    ★★★★★
                </div>
                <div className="background">
                    ☆☆☆☆☆
                </div>

            </div>
        </div>
        
    )
}
export default SmoothStarRating;