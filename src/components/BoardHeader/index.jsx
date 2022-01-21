import React,{useState} from 'react';
import grid from "../../assets/grid.svg";
import Modal from '../Modal';

import "./styles.css";

const BoardHeader = () => {

    const [openModal, setOpenModal] = useState(false);

  return (
    <div className="boardHeader">
      <h1 className="boardHeader__title">Business</h1>
      <div className="boardHeader__actions">
        <button className="boardHeader__layout">
          <img src={grid} alt="change layout icon" />
        </button>
        <button
          className="boardHeader__create"
          onClick={() => {
            setOpenModal(true);
          }}
        >
          Create business
        </button>
        {!!openModal && (
          <Modal
            title={"Create Business"}
            submitText={"create"}
            setOpenModal={setOpenModal}
          >
            <div className="boardItem__BusinessName">
              <label htmlFor="BusinessName">Business Name</label>
              <input type="text" name="BusinessName" id="BusinessName" />
            </div>
          </Modal>
        )}
      </div>
    </div>
  );
};

export default BoardHeader;