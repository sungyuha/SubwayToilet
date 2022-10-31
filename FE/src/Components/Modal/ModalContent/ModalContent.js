import ModalContentInfo from "./ModalContentInfo";
import ModalContentRating from "./ModalContentRating";
import ModalButton from "./ModalContentButton";
import "./ModalContent.scss";

function ModalContent() {
  return (
    <>
      <div className="modal_content">
        <div className="modal_content_box">
          <div className="modal_content_box_left">
            <div className="modal_content_box_left_top">
              <ModalContentInfo />
            </div>
            <div>
              <ModalContentRating />
            </div>
          </div>
          <div className="modal_content_box_right">
            <ModalButton />
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalContent;