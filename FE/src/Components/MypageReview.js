import axios from "axios";
import React, { useState, useEffect } from "react";
//import StarRatings from './react-star-ratings';
import "./MypageReview.scss";

const MypageReview = () => {

    // 리뷰 데이터 조회
    const [data, setData] = useState([]);
    //const [review, setreview] = useState('');

    const Revieveshandle = (e) => {
        setData(e.target.value);
    }

    const SERVER_URL8 = 'http://localhost:8000/mypage/rewiew'; // 임의 작성 
    
    useEffect(()=>{
        axios.get(SERVER_URL8, {
            data: {
                postId: data._id
            } 
        }).then((res) => {
            setData(res.data);
        });

    }, [])

    // 별점 조회
    //const [ rating, newRating ] = useState('');
    

    return (
        <div>
            <div className="wrap">
            <h1>{data.text}작성한 리뷰</h1>
                <div className="rewiew_wrap"><br />
                    <div>
                        <span className="subway-txt">
                            {data.stinNm}
                            역명 : 문래역
                            </span><br />
                    </div>
                    
                    <div className="subway-content">
                        화장실 정보 <br />
                        <span className="subway-content1">{data.stinCd}개찰 구 내</span>
                        <span className="subway-content2">{data.routNm}개찰 구 외</span>
                        <span className="subway-content3">{data.railOprIsttCd}장애인 화장실</span>
                    </div>

                    <div className="subway-Cleanliness">
                        화장실 청결도 <br />
                        
                        {/* */}
                    </div>
                </div>
            </div>
        </div>
    )    
}

export default MypageReview;