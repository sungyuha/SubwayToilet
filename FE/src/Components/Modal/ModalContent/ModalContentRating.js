import "./ModalContentRating.scss";
import clean from "../../../images/icon-clean.png";
import wc from "../../../images/icon-wc.png";
import size from "../../../images/icon-size.png";
import thumb from "../../../images/icon-thumb-ups.png";
import {useState, useEffect} from 'react';
import SmoothStarRating from "../../SmoothStarRating";

function ModalContentRating({review, setReview}) {
  console.log(review);
  
  const [reviewRating, setReviewRating] = useState(0);
  const [cleanliness, setCleanliness] = useState('');
  const [count, setCount] = useState('');
  const [toiletSize, setToiletSize] = useState('');
  const [convenience, setConvenience] = useState('');
  const calculateRating = (array) => {
    let sum = 0;
    for(let i in array){
      sum = sum + array[i].rating;
    }
    return sum / array.length;
  }
  const calculateRadios = (review) => {

    const arr = [
      {
        "매우 좋음" : 0,
        "좋음": 0,
        "보통": 0,
        "좋지 않음": 0,
        "매우 좋지 않음": 0
      },
      {
        "1 ~ 2" : 0,
        "3 ~ 4" : 0,
        "5 ~ 6" : 0,
        "7 이상": 0
      },
      {
        "매우 큼": 0,
        "큼" : 0,
        "보통": 0,
        "작음": 0,
        "매우 작음": 0
      },
      {
        "매우 좋음" : 0,
        "좋음": 0,
        "보통": 0,
        "좋지 않음": 0,
        "매우 좋지 않음": 0
      }
    ];

    for(let i in review){
      arr[0][review[i].cleanliness] = arr[0][review[i].cleanliness] + 1;
      arr[1][review[i].count] = arr[1][review[i].count] + 1;
      arr[2][review[i].size] = arr[2][review[i].size] + 1;
      arr[3][review[i].convenience] = arr[3][review[i].convenience] + 1;
    }
    console.log(arr);
    const value = [];
    const result = [];
    for(let i = 0; i < 4; i++){
      value[i] = Math.max(...Object.values(arr[i]));
      result[i] = Object.keys(arr[i]).find(key => arr[i][key] === value[i]);
    }
   console.log(value, result);

    if(review.length > 0){
      setCleanliness(result[0] + ' / ' + Math.round(value[0]/review.length*100) + '%');
      setCount(result[1] + ' / ' + Math.round(value[1]/review.length*100) + '%');
      setToiletSize(result[2] + ' / ' + Math.round(value[2]/review.length*100) + '%');
      setConvenience(result[3] + ' / ' + Math.round(value[3]/review.length*100) + '%');
    }
    

  }
  
  useEffect(()=>{
    review.length? setReviewRating(Math.round(calculateRating(review)*10)/10) : setReviewRating(0);
    calculateRadios(review);
  }, [review]);





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
                <p><SmoothStarRating rating={reviewRating}/></p>
                <p>{reviewRating}</p>
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
                <h5>{cleanliness}</h5>
              </li>
              <li>
                <div>
                  <p>
                    <img src={wc} />
                  </p>
                </div>
                <p>변기 개수</p>
                <h5>{count}</h5>
              </li>
              <li>
                <div>
                  <p>
                    <img src={size} />
                  </p>
                </div>
                <p>화장실 크기</p>
                <h5>{toiletSize}</h5>
              </li>
              <li>
                <div>
                  <p>
                    <img src={thumb} />
                  </p>
                </div>
                <p>이용 편리성</p>
                <h5>{convenience}</h5>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalContentRating;