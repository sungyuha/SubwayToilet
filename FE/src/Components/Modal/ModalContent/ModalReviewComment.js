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

          <table className="modal_review_comment_box_score">
            <tr>
              <td><p>청결도</p><p>좋음</p></td>
              <td><p>변기 개수</p><p>1~2개</p></td>
            </tr>
            <tr>
              <td><p>화장실 크기</p><p>큼</p></td>
              <td><p>이용 편의성</p><p>좋음</p></td>
            </tr>
          </table>

          
          <div className="modal_review_comment_box_content">
            <p>화장실이 깨끗해요.</p>
          </div>
          

        </div>
      </div>
    </>
  );
}

export default ModalReviewContent;