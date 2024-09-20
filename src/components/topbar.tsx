import React from "react";
import "./topbar.scss";
import Logo from "../assets/logo.svg";
import Avatar from "../assets/avatar.png";
import { IoSearchOutline } from "react-icons/io5";

const Topbar: React.FC = () => {
  return (
    <div className={"topbar"}>
      <div className={"logo"}>
        <img src={Logo} alt="Lendsqr Logo" />
      </div>
      <input
        type="text"
        placeholder="Search for anything"
        className={"searchBar"}
      />
      <IoSearchOutline className="search-icon" />

      <div className={"profileSection"}>
        <a href="/docs">Docs</a>
        <div className={"profile"}>
          <img src={Avatar} alt="User" />
          <span>Adedeji</span>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
