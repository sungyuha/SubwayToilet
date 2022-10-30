import React, { useState } from "react";
import "./MypageProductReviews.scss";
//import axios from "axios";
import { useParams, Link } from "react-router-dom";

const MypageProductReviews = () => {
    
    // 게시글 데이터 조회
    const [items, setItems] = useState([]);
    const [data, setData] = useState([]);
    const [review, setreview] = useState('');
    
    // setData = () => {
    //     const url = `http://localhost:8000/userinfo?q=${review}`; // 임의작성
    //     fetch(url)
    //         .then(responseData => { setData(responseData.name); });
    // }

    const Revieveshandle = (e) => {
        setreview(e.target.value);
    }

    const Data = data.map(
        (items, index) =>
            <div key={index}>
                <p>{review}</p>
            </div>
    );

    return (
        <div className="wrap">
            <h1 className="user">내가 작성한 게시글</h1>
            <br />

            <div className="list">
                <p className="nick">{items.name}</p>
                <p className="review">작성한 게시글이 조회됩니다. 조회됩니다.</p>
                {/* <span className="review" onChange={Revieveshandle} value={review} data={items.content} /> */}
                <button className="btn-1" style={{color:'white'}}><Link to="{/PageSuggest}">자세히보기</Link></button>
            </div>

            <div className="list">
                <p className="nick">{items.name}</p>
                <p className="review">작성한 게시글이 조회됩니다. 조회됩니다.</p>
                {/* <span className="review" onChange={Revieveshandle} value={review} data={items.content} /> */}
                <button className="btn-1" style={{color:'white'}}><Link to="{/PageSuggest}">자세히보기</Link></button>
            </div>

            <div className="list">
                <p className="nick">{items.name}</p>
                <p className="review">작성한 게시글이 조회됩니다. 조회됩니다.</p>
                {/* <span className="review" onChange={Revieveshandle} value={review} data={items.content} /> */}
                <button className="btn-1" style={{color:'white'}}><Link to="{/PageSuggest}">자세히보기</Link></button>
            </div>
        </div>
    )
}

export default MypageProductReviews;