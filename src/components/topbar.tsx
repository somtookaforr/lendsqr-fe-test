import React from "react";
import "./topbar.scss";
import Logo from "../assets/logo.svg";
import Avatar from "../assets/avatar.png";
import { FaRegBell, FaSortDown } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Topbar: React.FC = () => {
  return (
    <div className={"topbar"}>
      <div className={"logo"}>
        <img src={Logo} alt="Lendsqr Logo" />
      </div>
      <div className="topbar-container">
        <div className="search-input">
          <input
            type="text"
            placeholder="Search for anything"
            className={"searchBar"}
          />
          <IoSearchOutline className="search-icon" />
        </div>
        <div className={"profileSection"}>
          <Link to="#">Docs</Link>
          <FaRegBell className="bell-icon" />
          <div className={"profile"}>
            <img src={Avatar} alt="User" />
            <span className="username">Adedeji</span>
            <div>
              <FaSortDown />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
