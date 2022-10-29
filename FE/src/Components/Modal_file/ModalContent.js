import ModalContentInfo from "./ModalContentInfo";
import ModalContentRating from "./ModalContentRating";
import ModalButton from "./ModalButton";

import "./ModalContent.scss";

function ModalContent() {
  return (
    <>
      <div className="modal_content">
        <div className="modal_content_box">
          <ModalContentInfo />
          <ModalContentRating />
          <ModalButton />
        </div>
      </div>
    </>
  );
}

export default ModalContent;
