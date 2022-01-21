import React from 'react';
import AsideItem from "../AsideItem";
import bank from "../../assets/bank.svg";
import bell from "../../assets/bell.svg";
import creditCard from "../../assets/credit-card.svg";
import dollar from '../../assets/dollar-sign 1.svg';
import overview from '../../assets/Icon.svg';
import user from '../../assets/user.svg';
import "./styles.css";

const Aside = () => {
  return (
    <aside className='aside'>
      <ul>
        <AsideItem logo={overview} text={"Overview"} />
        <AsideItem logo={bank} text={"Tribal Pay"} />
        <AsideItem logo={creditCard} text={"Tribal Credit"} />
        <AsideItem logo={dollar} text={"Payments"} />
        <AsideItem logo={bell} text={"Notifications"} />
        <AsideItem logo={user} text={"Users"} />
      </ul>
    </aside>
  );
};

export default Aside;