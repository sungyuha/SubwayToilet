import React, { useState, useEffect } from "react";
//import StarRatings from './react-star-ratings';
import "./MypageReview.scss";

const MypageReview = () => {

    // 별점 조회
    //const [ rating, newRating ] = useState('');
    

    return (
        <div>
            <div className="wrap">
            <h1>작성한 리뷰</h1>
                <div className="rewiew_wrap"><br />
                    <div>
                        <span className="subway-txt">역명 : 문래역</span><br />
                    </div>
                    
                    <div className="subway-content">
                        화장실 정보 <br />
                        <span className="subway-content1">개찰 구 내</span>
                        <span className="subway-content2">개찰 구 외</span>
                        <span className="subway-content3">장애인 화장실</span>
                    </div>

                    <div className="subway-Cleanliness">
                        화장실 청결도 <br />
                        
                        {/* <StarRatings
                            rating={e.target.rating}
                            starRatedColor="blue"
                            changeRating={changeRating}
                            numberOfStars={6}
                            name='rating'
                        /> */}
                    </div>
                </div>
            </div>
        </div>
    )    
}

export default MypageReview;