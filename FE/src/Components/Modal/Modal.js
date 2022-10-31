import {useState} from "react";
import "./Modal.scss"
import ModalHeader from "./ModalHeader/ModalHeader";
import ModalContent from "./ModalContent/ModalContent";
import ModalContentWrite from "./ModalContent/ModalContentWrite";
// import ModalInfo from "./ModalInfo/ModalInfo";
// import ModalScore from "./ModalScore/ModalScore";
// import ModalReview from "./ModalReview/ModalReview";

const Modal = () => {
  const [modal, setModal] = useState(false);
  const handleClickOpen= () => {
    setModal(true);
  }
  const closeModal = () => {
    setModal(false);
  }

  return (
    <div className='modal_modal'>
      {/* <button onClick={()=>{handleClickOpen()}}>Open Modal</button> */}
      <div>
      
        <div className='modal_modal_main'>
          <div className='modal_modal_modal'>
            <ModalHeader modal={modal} setModal={setModal} onClick={closeModal}/>
            <ModalContent/>
          <div>
          <div>
            <ModalContentWrite/>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  );
}

export default Modal;