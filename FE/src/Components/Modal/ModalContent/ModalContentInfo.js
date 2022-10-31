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
        <div className="modal_content_info_title">
          <p className="modal_content_info_title_title">화장실 정보</p>
        </div>
        <div className="modal_content_info_content">
          <ul>

            

            {/* {
              toilet.normal.length ? toilet.normal.map((item, index)=>(
                <li>
                  <p>
                    <img src={turnstiles} />
                    
                    개찰구 내 화장실 
                    
                    
                    <span> / 위치 :</span>
                  </p>
                </li>
              )) : <></> } */}
            

            <li>
              <p className="modal_content_info_content_title">
                {/* <img src={turnstiles} /> */}
                일반 화장실
              </p>
              <div className="modal_content_info_content_able">
                <p>개찰구 정보</p>
                <p>화장실 위치</p>
              </div>
            </li>

            <li>
              <p className="modal_content_info_content_title">
                {/* <img src={disabled} /> */}
                장애인 화장실
              </p>
              <div className="modal_content_info_content_able">
                <p>개찰구 정보</p>
                <p>화장실 위치</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default ModalContentInfo;