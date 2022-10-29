import React, { useState } from "react";
import "./MypageProductReviews.scss";
//import axios from "axios";
import { Link } from "react-router-dom";

const MypageProductReviews = () => {
    // 데이터 조회
    
    return (
        <div className="wrap">

            <br />

            <div className="list">
                <p className="nick">이름</p>
                <p className="review">작성한 게시글이 조회됩니다. 조회됩니다.</p>
                <Link to="/PageSuggest">
                    <button className="btn">자세히보기</button>
                </Link>
            </div>

            <div className="list">
                <p className="nick">이름</p>
                <p className="review">작성한 게시글이 조회됩니다. 조회됩니다.</p>
                <button className="btn">자세히보기</button>
            </div>

            <div className="list">
                <p className="nick">이름</p>
                <p className="review">작성한 게시글이 조회됩니다. 조회됩니다.</p>
                <button className="btn">자세히보기</button>
            </div>
        </div>
    )
}

export default MypageProductReviews;