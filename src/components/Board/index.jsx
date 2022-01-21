import React,{useEffect, useState} from 'react';
import BoardHeader from "../BoardHeader";
import BoardItems from "../BoardItems";
import getBusiness from "../../services/getBusiness.js";
import deleteBusiness from "../../services/deleteBusiness.js";

import "./styles.css";


const Board = () => {

  const [business,setBusiness] = useState([])


  useEffect(()=>{
    getBusiness().then((data) => setBusiness(data.businesses));
  },[])

  console.log('business',business);

  return (
    <section className="board">
      <BoardHeader />
      <ul className="board__list">
        {business.map((item) => (
          <BoardItems
            key={item.businessId}
            name={item.name}
            id={item.businessId}
            submit={deleteBusiness}
          />
        ))}
      </ul>
    </section>
  );
};

export default Board;