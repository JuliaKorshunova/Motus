import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as style1 from "./PageRegister.css";
import HeaderForLR from "../Header/HeaderForLog";
import TabsSectionForRegister from "../TabsSection/TabSectionForRegister/TabsSectionForRegister";
import Register from "../Register/Register";
import RegisterForPodcaster from "../Register/RegisterForPodcaster";

export default function PageRegister() {
  const [tab, setTab] = useState("user");

  return (
    <>
      <HeaderForLR />

      <div className="ccennter">
        <div className="union">
          <TabsSectionForRegister
            Active1={tab}
            onChange={(current) => setTab(current)}
          />
          {tab === "pod" && <RegisterForPodcaster />}

          {tab === "user" && <Register />}
        </div>
        <div className="centerforreg">
          <div className="text_for_reg1">Регистрация /</div>
          <Link to="/login">
            <div className="text_for_log1">Вход</div>
          </Link>
        </div>
      </div>
    </>
  );
}
