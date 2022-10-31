import {useState, useEffect} from "react";
import "./Modal.scss"
import ModalHeader from "./ModalHeader/ModalHeader";
import ModalContent from "./ModalContent/ModalContent";
import axios from 'axios';
// import ModalInfo from "./ModalInfo/ModalInfo";
// import ModalScore from "./ModalScore/ModalScore";
// import ModalReview from "./ModalReview/ModalReview";

const Modal = (props) => {
  const [modal, setModal] = useState(false);
  const [toilet, setToilet] = useState({});
  const [review, setReview] = useState([]);
  const handleClickOpen= () => {
    setModal(true);
  }
  const closeModal = () => {
    setModal(false);
  }
  const SERVER_URL = 'http://localhost:8000/toilet/?stinCd='+ props.selectStation;

  useEffect(()=>{
    axios.get(SERVER_URL).then((res) => {
      setToilet(res.data.Toilet);
      setReview(res.data.Review);
    });
  }, [])

  return (
    <div className='modal_modal'>
      {/* <button onClick={()=>{handleClickOpen()}}>Open Modal</button> */}
      <div>
      
        <div className='modal_modal_main'>
          <div className='modal_modal_modal'>
            <ModalHeader modal={modal} setModal={setModal} onClick={closeModal} toilet={toilet}/>
            <ModalContent toilet={toilet} review={review}/>
          <div>
        </div>
      </div>
    </div>
  </div>
</div>
  );
}

export default Modal;