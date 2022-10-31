import ModalContentInfo from "./ModalContentInfo";
import ModalContentRating from "./ModalContentRating";
import ModalButton from "./ModalContentButton";
import "./ModalContent.scss";

function ModalContent({toilet, review}) {
  return (
    <>
      <div className="modal_content">
        <div className="modal_content_box">
          <ModalContentInfo toilet={toilet} />
          <ModalContentRating review={review}/>
          <ModalButton />
        </div>
      </div>
    </>
  );
}

export default ModalContent;