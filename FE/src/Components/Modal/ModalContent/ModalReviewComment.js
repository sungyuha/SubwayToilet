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

          <table className="modal_review_comment_box_score">
            <tr>
              <td><p style={{fontWeight:"600"}}>청결도</p><p>{item.cleanliness}</p></td>
              <td><p style={{fontWeight:"600"}}>변기 개수</p><p>{item.count}개</p></td>
            </tr>
            <tr>
              <td><p style={{fontWeight:"600"}}>화장실 크기</p><p>{item.size}</p></td>
              <td><p style={{fontWeight:"600"}}>이용 편의성</p><p>{item.convenience}</p></td>
            </tr>
          </table>

          
          <div className="modal_review_comment_box_content">
            <p>{item.text}</p>
          </div>
        </div>
        )) : <div>리뷰가 아직 없습니다.</div>
        }
      </div>
    </>
  );
}

export default ModalReviewContent;