import "./ModalContentButton.scss";
// import ModalReviewHeader from './ModalReviewHeader';
import ModalReviewComment from "./ModalReviewComment"
import ModalReviewButton from "./ModalReviewButton";
import StarRating from "../StarRating";
import React, {useState, useRef, useEffect} from "react";
import axios from "axios";


function ModalContentButton({stinCd, review}) {
  const [reviewArr, setReviewArr] = useState([]);
  
  const [rating, setRating] = useState(0);
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();
  const POST_URL = 'http://localhost:8000/review'
  const GET_URL = `http://localhost:8000/review?stinCd=${stinCd}` 

  useEffect(()=>{
    setReviewArr(review);
  }, []);

  const setDefault = (target) => {
    for(let i = 0; i < target.length; i++){
      if(target[i].localName === 'input'){
        target[i].checked = false;
      }
    }
  }

  const writeReviewHandler = (e) => {
    e.preventDefault();
    axios({
      method: 'post',
      url: POST_URL,
      data: {
        stinCd: stinCd,
        cleanliness: e.target.clean.value,
        count: e.target.num.value,
        size: e.target.size.value,
        convenience: e.target.convenience.value,
        text: e.target.text.value,
        rating: rating,
          
      },
      headers: {
        'Authorization': localStorage.getItem('access_token'),
      }
    })
    .then(async (res) => { 
      alert(res.data.message);
      setRating(0);
      ref5.current.value = '';
      setDefault(ref1.current.children);
      setDefault(ref2.current.children);
      setDefault(ref3.current.children);
      setDefault(ref4.current.children);
      await axios.get(GET_URL).then((res) => {
        setReviewArr(res.data.Review);
      });
    }).catch((res) => {alert(res.response.data.message)});
  }

  return (
    <>
      <div className="modal_review_title">
          <h1>리뷰</h1>
      </div>
      <div className='modal_review_write'>
        {/* <div className='modal_review_write_title'>
          <h1>리뷰 작성</h1>
        </div> */}
        <div className='modal_review_top'>
          <div className='modal_review_top_photo'>
            
          </div>
          <div className='modal_review_top_content'>
            {/* <div className="modal_review_top_content_box">
              <div className='modal_review_top_content_box_title'>
                문래역
              </div>
              <div className='modal_review_top_content_box_star'>
                <p>⭐️⭐️⭐️⭐️⭐️</p>
                <p>총 별점</p>
                <p>리뷰 몇개인지</p>
              </div>
            </div> */}
            <div className='modal_review_bottom'>
              <form onSubmit={writeReviewHandler}>
                <p>청결도</p>
                <div className='modal_review_bottom_clean' ref={ref1}>
                  <label htmlFor="verygood">매우 좋음</label><input type="radio" id='verygood' value="매우 좋음" name='clean'/>
                  <label htmlFor="verygood">좋음</label><input type="radio" id='good' value="좋음" name='clean'/>
                  <label htmlFor="sosoclean">보통</label><input type="radio" id='sosclean' value="보통" name='clean'/>
                  <label htmlFor="bad">좋지 않음</label><input type="radio" id='bad' value="좋지 않음" name='clean'/>
                  <label htmlFor="sobad">매우 좋지 않음</label><input type="radio" id='sobad' value="매우 좋지 않음" name='clean'/>
                </div>

                <p>변기 개수</p>
                <div className='modal_review_bottom_num' ref={ref2}>
                  <label htmlFor="onetwo">1 ~ 2</label><input type="radio" id='onetwo' value="1 ~ 2" name='num'/>
                  <label htmlFor="threefour">3 ~ 4</label><input type="radio" id='threefour' value="3 ~ 4" name='num'/>
                  <label htmlFor="fivesix">5 ~ 6</label><input type="radio" id='ivesix' value="5 ~ 6" name='num'/>
                  <label htmlFor="seven">7 이상</label><input type="radio" id='seven' value="7 이상" name='num'/>
                </div>
                
                <p>화장실 크기</p>
                <div className='modal_review_bottom_size' ref={ref3}>
                  <label htmlFor="verybig">매우 큼</label><input type="radio" id='verygood' value="매우 큼" name='size'/>
                  <label htmlFor="big">큼</label><input type="radio" id='good' value="good" name='큼'/>
                  <label htmlFor="sososize">보통</label><input type="radio" id='sososize' value="보통" name='size'/>
                  <label htmlFor="small">작음</label><input type="radio" id='small' value="작음" name='size'/>
                  <label htmlFor="veraysmall">매우 작음</label><input type="radio" id='verysmall' value="매우 작음" name='size'/>
                </div>

                <p>이용 편의성</p>
                <div className='modal_review_bottom_convenience' ref={ref4}>
                  <label htmlFor="verycon">매우 좋음</label><input type="radio" id='verycon' value="매우 좋음" name='convenience'/>
                  <label htmlFor="con">좋음</label><input type="radio" id='con' value="좋음" name='convenience'/>
                  <label htmlFor="socon">보통</label><input type="radio" id='socon' value="보통" name='convenience'/>
                  <label htmlFor="badcon">좋지 않음</label><input type="radio" id='badcon' value="좋지 않음" name='convenience'/>
                  <label htmlFor="verybadcon">매우 좋지 않음</label><input type="radio" id='verybadcon' value="매우 좋지 않음" name='convenience'/>
                </div>

                <div>
                <p>별점</p>
                <StarRating rating={rating} setRating={setRating}/>
              </div>

              <div className='modal_review_bottom_text'>
                <textarea name="text"  ref={ref5}/>
              </div>

              <div className='modal_review_bottom_button'>
                <button type="submit">등록하기</button>
              </div>
                  
              </form>
        </div>
                

        <div className='modal_review_review'>
        <ModalReviewComment review={reviewArr}/>
        </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalContentButton;