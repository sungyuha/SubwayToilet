import React, {useState} from "react"
import Mypagetab from "./Mypagetab.scss";
import MypageUser from "./MypageUser";
import MypageReview from "./MypageReview";
import MypageProductReviews from "./MypageProductReviews";

function MypageTab () {
    const [activeIndex, setActiveIndex] = useState(0);

    const tabClickHand=(index)=>{
        setActiveIndex(index);
    };

    // hooks로 Tab기능 구현
    const tabContArr=[
        {
            tabTitle:(
                <li className={activeIndex===0 ? "is-active" : ""} onClick={()=>tabClickHand(0)}>회원정보</li>
            ),
            tabCont:(
                <div>
                    <MypageUser />
                </div>
            )
        },
        {
            tabTitle:(
                <li className={activeIndex===1 ? "is-active" : ""} onClick={()=>tabClickHand(1)}>작성한리뷰</li>
            ),
            tabCont:(
                <div>
                    <MypageReview />
                </div>
            )
        },
        {
            tabTitle:(
                <li className={activeIndex===1 ? "is-active" : ""} onClick={()=>tabClickHand(1)}>내가 작성한 리뷰</li>
            ),
            tabCont:(
                <div>
                    <MypageProductReviews />
                </div>
            )
        }
    ];

    return (
        <div className="user-txt-wrap">
            <li className="txt">
            {tabContArr.map((section, index)=>{
                return section.tabTitle
            })}
            </li>
            <div>
                {tabContArr[activeIndex].tabCont}
            </div>
        </div>
    )
};

export default MypageTab;