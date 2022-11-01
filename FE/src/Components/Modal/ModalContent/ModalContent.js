import ModalHeader from "../ModalHeader/ModalHeader"
import ModalContentInfo from "./ModalContentInfo";
import ModalContentRating from "./ModalContentRating";
import ModalButton from "./ModalContentButton";
import ModalContentWrite from "./ModalContentWrite";
import "./ModalContent.scss";
import {useState} from 'react';

function ModalContent({toilet, review, setReview}) {
  console.log(review);
  return (
    <>
      <div className="modal_content">
        <div className="modal_content_box">
          <div className="modal_content_box_left">
            <div className="modal_content_box_left_top">
              <ModalContentInfo toilet={toilet}/>
            </div>
            <div>
              <ModalContentRating  review={review} setReview={setReview}/>
            </div>
          </div>
          <div className="modal_content_box_right">
            <ModalButton stinCd={toilet.stinCd} review={review} setReview={setReview}/>
          </div>

        </div>
      </div>
    </>
  );
}

export default ModalContent;