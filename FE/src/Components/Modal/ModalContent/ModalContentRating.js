import "./ModalContentRating.scss";
import clean from "../../../images/icon-clean.png";
import wc from "../../../images/icon-wc.png";
import size from "../../../images/icon-size.png";
import thumb from "../../../images/icon-thumb-ups.png";
import {useState, useEffect} from 'react';

function ModalContentRating({review}) {
  
  const [rating, setRating] = useState(0);

  const calculate = () => {

  }





  return (
    <>
      <div className="modal_content_rating">
        <div className="modal_content_rating_content">
          <div className="modal_content_rating_content_title">
            <p>화장실 평점</p>
          </div>
          <div className="modal_content_rating_content_box">
            <div className="modal_content_rating_content_box_star">
              <div className='modal_content_rating_contnet_box_star_box'>
                <p>⭐️ ⭐️ ⭐️ ⭐️ ⭐️</p>
                <p>4.7</p>
              </div>
            </div>
          </div>
          <p className="modal_content_rating_content_review">리뷰 {review.length}개</p>
          <div className="modal_content_rating_content_total">
            <ul>
              <li>
                {/* <div> */}
                  <p>
                    <img src={clean} />
                  </p>
                {/* </div> */}
                <p>청결도</p>
                <h5>좋음</h5>
              </li>
              <li>
                <div>
                  <p>
                    <img src={wc} />
                  </p>
                </div>
                <p>변기 개수</p>
                <h5>3-4</h5>
              </li>
              <li>
                <div>
                  <p>
                    <img src={size} />
                  </p>
                </div>
                <p>화장실 크기</p>
                <h5>큼</h5>
              </li>
              <li>
                <div>
                  <p>
                    <img src={thumb} />
                  </p>
                </div>
                <p>이용 편리성</p>
                <h5>좋음</h5>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalContentRating;