import "./ModalContentInfo.scss";
import disabled from "../../../images/icon-disabled.png";
import turnstiles from "../../../images/icon-turnstiles.png";
import {useEffect} from 'react';

function ModalContentInfo({toilet}) {
  useEffect(() => {
    console.log(toilet.normal);
  }, [])
  return (
    <>
      <div className="modal_content_info">
        <div className="modal_content_info_box">
          <div className="modal_content_info_title">
            <p className="modal_content_info_title_title">화장실 정보</p>
          </div>
          <div className="modal_content_info_content">
            <ul>
              <li>
                <p className="modal_content_info_content_title">
                  {/* <img src={turnstiles} /> */}
                  일반 화장실
                </p>
                <div className="modal_content_info_content_able">
                  <div className="modal_content_info_content_able_info">
                    <p>개찰구</p>
                    <p>개찰구 내</p>
                  </div>
                  <div className="modal_content_info_content_able_info">
                    <p>위치</p>
                    <p>~~~~~~~~~~~~~~~~~~</p>
                  </div>
                </div>
              </li>
              <li>
                <p className="modal_content_info_content_title">
                  {/* <img src={disabled} /> */}
                  장애인 화장실
                </p>
                <div className="modal_content_info_content_able">
                  <div className="modal_content_info_content_able_info">
                    <p>개찰구</p>
                    <p>개찰구 내</p>
                  </div>
                  <div className="modal_content_info_content_able_info">
                    <p>화장실 위치</p>
                    <p>~~~~~~~~~~~~~~~~~~~</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalContentInfo;