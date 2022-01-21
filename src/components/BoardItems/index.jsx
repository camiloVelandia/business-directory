import React,{useState, useEffect} from 'react';
import deleteIcon from "../../assets/update.svg";
import update from '../../assets/delete.svg';
import Modal from '../Modal';

import "./styles.css";

const BoardItems = (props) => {

  const {name, role, submit, id} = props
  const [openModal, setOpenModal] = useState(false);



  return (
    <li className="boardItem">
      <p className="boardItem__name">{name}</p>
      {role && <p className="boardItem__role">{role}</p>}
      <div className="boardItem__actions">
        <button
          onClick={() => {
            setOpenModal(true);
          }}
        >
          <img src={update} alt="update" />
        </button>
        <button
          onClick={() => {
            submit(id);
          }}
        >
          <img src={deleteIcon} alt="delete" />
        </button>
        {!!openModal && (
          <Modal
            title={"Edit Business"}
            submitText={"save"}
            setOpenModal={setOpenModal}
          >
            <div className="boardItem__BusinessName">
              <label htmlFor="BusinessName">Business Name</label>
              <input type="text" name="BusinessName" id="BusinessName" />
            </div>
          </Modal>
        )}
      </div>
    </li>
  );
};

export default BoardItems;