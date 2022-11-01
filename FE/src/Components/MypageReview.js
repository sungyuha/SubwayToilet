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

    const SERVER_URL8 = 'http://localhost:8000/rewiew/mypage'; // 임의 작성
    
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
        <div className="rewiew_wrap">
            <div className="wraprewiew" onChange={Revieveshandle}>
            <h1 className="rewiew">{data.text}작성한 리뷰</h1>
                <div className="rewiew_wrap2"><br />
                    <div>
                        <span className="subway-txt">
                            역명 : {data.stinNm}
                        </span><br />
                    </div>
                    
                    <div className="subway-content">
                        <span>리뷰 작성내용</span><br />
                        <p className="p-content-txt"></p>
                        {data.content}
                    </div>

                    <div className="subway-Cleanliness">
                        화장실 평점 <br />
                        {/* ⭐️⭐️⭐️⭐️⭐️ */}
                        {data.rating}
                    </div>
                </div>
            </div>
        </div>
    )    
}

export default MypageReview;