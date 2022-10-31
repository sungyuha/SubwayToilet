import "./ModalReviewComment.scss";

function ModalReviewContent({review}) {
  return (
    <>
      <div className="modal_review_comment">
        {
          review.length ? review.map((item, index)=>(
          <div className="modal_review_comment_box" key={index}>
          <ul className="modal_review_comment_box_name">
            <li>
              <p>{item.id}</p>
              <p>{'⭐️'.repeat(item.rating)}</p>
              <p>{item.rating}</p>
            </li>
            <li>
              <p>{item.date}</p>
            </li>
          </ul>
          <div className="modal_review_comment_box_content">
            <p>{item.text}</p>
          </div>
          <ul className="modal_review_comment_box_info">
            <li>
              <p>청결도</p>
              <p>{item.cleanliness}</p>
            </li>
            <li>
              <p>변개 개수</p>
              <p>{item.count}</p>
            </li>
            <li>
              <p>화장실 크기</p>
              <p>{item.size}</p>
            </li>
            <li>
              <p>이용 편리성</p>
              <p>{item.convenience}</p>
            </li>
          </ul>
        </div>
        )) : <div>리뷰가 아직 없습니다.</div>
        }
        

      </div>
    </>
  );
}

export default ModalReviewContent;