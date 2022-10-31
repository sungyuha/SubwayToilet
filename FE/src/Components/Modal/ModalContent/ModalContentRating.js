import "./ModalContentRating.scss";
import clean from "../../../images/icon-clean.png";
import wc from "../../../images/icon-wc.png";
import size from "../../../images/icon-size.png";
import thumb from "../../../images/icon-thumb-ups.png";

function ModalContentRating() {
  return (
    <>
      <div className="modal_content_rating">
        <div className="modal_content_rating_content">
          <div className="modal_content_rating_content_title">
            <p>화장실 후기</p>
          </div>
          <div className="modal_content_rating_content_box">
            <div className="modal_content_rating_content_box_star">
              <ul>
                <li>
                  <p>⭐️ ⭐️ ⭐️ ⭐️ ⭐️</p>
                  <p>4.7</p>
                  <p>리뷰 40개</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="modal_content_rating_content_total">
            <ul>
              <li>
                <div>
                  <p>
                    <img src={clean} />
                  </p>
                </div>
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