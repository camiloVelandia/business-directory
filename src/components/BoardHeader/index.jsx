import React from 'react';
import grid from "../../assets/grid.svg";

import "./styles.css";

const BoardHeader = ({ title = "Business", textButton = "", handleCallback }) => {

  return (
    <div className="boardHeader">
      <h1 className="boardHeader__title">{title}</h1>
      <div className="boardHeader__actions">
        <button className="boardHeader__layout">
          <img src={grid} alt="change layout icon" />
        </button>
        <button className="boardHeader__create" onClick={handleCallback}>
          {textButton}
        </button>
      </div>
    </div>
  );
};

export default BoardHeader;