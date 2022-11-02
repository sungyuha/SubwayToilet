import React, { useState, useEffect } from "react";
import "./MypageProductReviews.scss";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const MypageProductReviews = () => {
    
    // 게시글 데이터 조회
    const [items, setItems] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    

    

    const SERVER_URL9 = 'http://localhost:8000/page-Suggest/getMyPost'; // 임의 작성 
    
    useEffect(()=>{
        axios.get(SERVER_URL9, {
            headers: {
                'Authorization': localStorage.getItem('access_token'),
            } 
        }).then((res) => {
            console.log(res.data);
            setItems(res.data.mySuggests);
            setIsLoaded(true);
        });

    }, [])

    return (
        <div className="wrap">
            <h1 className="ps-user">내가 작성한 게시글</h1>
            <br />
            {isLoaded && items.length > 0 ? items.map((item, index)=> (
            <div className="list">
                <p className="nick">{item.writer}</p>
                <p className="review">{item.title}</p>
                <button className="btn-1" style={{color:'white'}}><Link to={"/page-Suggest/view/"+item._id}>보기</Link></button>
            </div>

            )) : 
            <div className="my-list">
                <p className="list-txt">게시물이 없습니다.</p>
                <p className="my-list-date">날짜</p>
            </div> } 
            

            
        </div>
    )
}

export default MypageProductReviews;