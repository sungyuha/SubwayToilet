import "./ModalReviewComment.scss";

function ModalReviewContent() {
  return (
    <>
      <div className="modal_review_comment">
        <div className="modal_review_comment_box">
          <ul className="modal_review_comment_box_name">
            <li>
              <p>이름</p>
              <p>⭐️⭐️⭐️⭐️⭐️</p>
              <p>5.0</p>
            </li>
            <li>
              <p>1일 전</p>
            </li>
          </ul>
          <div className="modal_review_comment_box_content">
            <p>화장실이 깨끗해요.</p>
          </div>
          <ul className="modal_review_comment_box_info">
            <li>
              <p>청결도</p>
              <p>좋음</p>
            </li>
            <li>
              <p>변개 개수</p>
              <p>1~2개</p>
            </li>
            <li>
              <p>화장실 크기</p>
              <p>큼</p>
            </li>
            <li>
              <p>이용 편리성</p>
              <p>좋음</p>
            </li>
          </ul>

        </div>
      </div>
    </>
  );
}

export default ModalReviewContent;