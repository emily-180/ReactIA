import React, { useContext } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";
import client1 from "../../assets/client1.png";

const SideBar = () => {
    return (
        <div className="sidebar">
            <div className="top">
                <img src={client1} alt="bot" className="bot-icon" />

            </div>
            <div>
                <div className="bottom">
                    <img src={assets.question_icon} alt="" />
                    <p>Ajuda</p>
                </div>
                <div className="bottom">
                    <img src={assets.setting_icon} alt="" />
                    <p>Configurações</p>
                </div>

            </div>
        </div>
    );
};
export default SideBar;