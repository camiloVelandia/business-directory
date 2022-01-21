import React from 'react';
import { useTranslation } from "react-i18next";

import AsideItem from "../AsideItem";
import bank from "../../assets/bank.svg";
import bell from "../../assets/bell.svg";
import creditCard from "../../assets/credit-card.svg";
import dollar from '../../assets/dollar-sign 1.svg';
import overview from '../../assets/Icon.svg';
import user from '../../assets/user.svg';
import "./styles.css";

const Aside = () => {

  const { t } = useTranslation();

  return (
    <aside className="aside">
      <ul>
        <AsideItem logo={overview} text={t("aside.overview")} />
        <AsideItem logo={bank} text={t("aside.pay")} />
        <AsideItem logo={creditCard} text={t("aside.credit")} />
        <AsideItem logo={dollar} text={t("aside.allpays")} />
        <AsideItem logo={bell} text={t("aside.notificate")} />
        <AsideItem logo={user} text={t("aside.users")} />
      </ul>
    </aside>
  );
};

export default Aside;