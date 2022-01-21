import React from 'react';
import ReactDOM from "react-dom";

import "./styles.css";


const Modal = (props) => {

  const {title, submitText,setOpenModal, warningBtn, children} = props

  return ReactDOM.createPortal(
    <div className="ModalBackground">
      <div className="ModalBox">
        <h2 className="ModalTitle">{title}</h2>
        <div>{children}</div>
        <div className="ModalActions">
          <button
            className="ModalButton__cancel"
            onClick={() => {
              setOpenModal(false);
            }}
          >
            cancel
          </button>
          <button className={`ModalButton__submit ${warningBtn? 'warning' : ''}`}>{submitText}</button>
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;