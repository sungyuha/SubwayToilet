import React, { useState, useEffect } from "react";
//import { FaStar } from "react-icons/fa";
//import styled from 'styled-components';
import "./MypageReview.scss";

const MypageReview = () => {
    /*
    const ARRAY = [0, 1, 2, 3, 4];

    // 별점 기본값 설정
    const [clicked, setClicked] = useState([false, false, false, false, false]);

    const handleStarClick = index => {
        let clickStates = [...clicked];
        for (let i = 0; i < 5; i++) {
            clickStates[i] = i <= index ? true : false;
        }
        setClicked(clickStates);
    };
    
    useEffect(() => {
        sendReview();
    }, [clicked]); //컨디마 컨디업

    let score = clicked.filter(Boolean).length;
    */
    return (
        <div>
            <div className="wrap">

            {/* <div className="user-txt-wrap">
                <li className="txt">회원정보</li>
                <li className="txt">작성한 리뷰</li>
                <li className="txt">내가 작성한 건의사항</li>
            </div> */}

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
                        {/* <RatingText>평가하기</RatingText>
                        <Stars>
                            {ARRAY.map((el, idx) => {
                            return (
                                <FaStar
                                key={idx}
                                size="50"
                                onClick={() => handleStarClick(el)}
                                className={clicked[el] && 'yellowStar'}
                                />
                            );
                        })}
                        </Stars>     */}
                    </div>

                    <div>
                        <p className="nickname">닉네임</p>
                    </div>
                </div>
            </div>
        </div>
    )    
}

export default MypageReview;

// const Stars = styled.div`
// display: flex;
// padding-top: 5px;

// & svg {
//     color: gray;
//     cursor: pointer;
// }

// :hover svg {
//     color: #fcc419;
// }

// & svg:hover ~ svg {
//     color: gray;
// }

// .yellowStar {
//     color: #fcc419;
// }
// `;