import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./MypageReview.scss";


const MypageReview = () => {

    // 리뷰 데이터 조회
    const [data, setData] = useState([]);
    const [review, setreview] = useState(false);

    const SERVER_URL8 = process.env.REACT_APP_BACK + 'review/myReview'; // 임의 작성
    
    useEffect(()=>{
        axios.get(SERVER_URL8, {
            headers: {
                'Authorization': localStorage.getItem('access_token'),
            }
        }).then((res) => {
            console.log(res.data);
            setData(res.data);
            setreview(true);
        });

    }, [])
    
    
    return (
        <div className="rewiew_wrap">
            <div className="wraprewiew">
            <h1 className="rewiew">{data.text}작성한 리뷰</h1>
            {review && data.length > 0 ? data.map((item, index) => (
                <div className="rewiew_wrap2"><br />
                    <div>
                        <span className="subway-txt">
                            역명 : {item.stinCd}
                        </span><br />
                    </div>
                        
                        <div className="subway-content">
                            <span>리뷰 작성내용</span><br />
                            <p className="p-content-txt"></p>
                            {item.text}
                        </div>

                        <div className="subway-Cleanliness">
                            화장실 평점 <br />
                            {item.rating}
                        </div>
                </div>
                )) : <div className="r-txt">작성된 리뷰가 없습니다.</div>}
                    
                
            </div>
        </div>
    )    
}

export default MypageReview;