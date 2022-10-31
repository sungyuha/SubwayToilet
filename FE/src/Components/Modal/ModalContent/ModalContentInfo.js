import "./ModalContentInfo.scss";
import disabled from "../../../images/icon-disabled.png";
import turnstiles from "../../../images/icon-turnstiles.png";

function ModalContentInfo() {
  return (
    <>
      <div className="modal_content_info">
        <div className="modal_content_info_title">
          <p>화장실 정보</p>
        </div>
        <div className="modal_content_info_content">
          <ul>
            <li>
              <p>
                <img src={turnstiles} />
                개찰구 내 화장실
              </p>
            </li>
            <li>
              <p>
                <img src={disabled} />
                장애인 화장실
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default ModalContentInfo;