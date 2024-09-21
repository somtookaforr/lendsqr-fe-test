import React from "react";
import "./sidebar.scss";
import {
  FaUserFriends,
  FaClipboardList,
  FaChevronDown,
  FaBriefcase,
  FaUsers,
  FaRegHandshake,
  FaPiggyBank,
  FaUserCheck,
  FaUserTimes,
  FaCoins,
  FaUserCog,
  FaScroll,
  FaChartBar,
  FaSlidersH,
  FaSignOutAlt,
} from "react-icons/fa";
import { RiDiscountPercentFill } from "react-icons/ri";
import { GiCartwheel } from "react-icons/gi";
import { ReactComponent as Loans } from "../assets/loans-icon.svg";
import { ReactComponent as LoanRequests } from "../assets/loanrequests-icon.svg";
import { ReactComponent as SavingsProducts } from "../assets/savings-icon.svg";
import { ReactComponent as Transactions } from "../assets/transactions-icon.svg";
import { ReactComponent as Services } from "../assets/services-icon.svg";
import { NavLink } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <>
      <div className="sidebar">
        <nav>
          <ul>
            <NavLink to={"#"} className="li switch-organization">
              <FaBriefcase className="icon" />
              <span>Switch Organization</span>
              <FaChevronDown className="icon" size={14} />
            </NavLink>

            <NavLink to={"#"} className="li section-header">
              CUSTOMERS
            </NavLink>
            <NavLink to={"/users"} className={"li"}>
              <FaUserFriends className="icon" />
              Users
            </NavLink>
            <NavLink to={"#"} className={"li"}>
              <FaUsers className="icon" />
              Guarantors
            </NavLink>
            <NavLink to={"#"} className={"li"}>
              <Loans className="icon" />
              Loans
            </NavLink>
            <NavLink to={"#"} className={"li"}>
              <FaRegHandshake className="icon" />
              Decision Models
            </NavLink>
            <NavLink to={"#"} className={"li"}>
              <FaPiggyBank to={"#"} className="icon" />
              Savings
            </NavLink>
            <NavLink to={"#"} className={"li"}>
              <LoanRequests className="icon" />
              Loan Requests
            </NavLink>
            <NavLink to={"#"} className={"li"}>
              <FaUserCheck className="icon" />
              Whitelist
            </NavLink>
            <NavLink to={"#"} className={"li"}>
              <FaUserTimes className="icon" />
              Karma
            </NavLink>

            <NavLink to={"#"} className="li section-header">
              BUSINESSES
            </NavLink>
            <NavLink to={"#"} className={"li"}>
              <FaBriefcase className="icon" />
              Organization
            </NavLink>
            <NavLink to={"#"} className={"li"}>
              <LoanRequests className="icon" />
              Loan Products
            </NavLink>
            <NavLink to={"#"} className={"li"}>
              <SavingsProducts className="icon" />
              Savings Products
            </NavLink>
            <NavLink to={"#"} className={"li"}>
              <FaCoins className="icon" />
              Fees and Charges
            </NavLink>
            <NavLink to={"#"} className={"li"}>
              <Transactions className="icon" />
              Transactions
            </NavLink>
            <NavLink to={"#"} className={"li"}>
              <Services className="icon" />
              Services
            </NavLink>
            <NavLink to={"#"} className={"li"}>
              <FaUserCog className="icon" />
              Service Account
            </NavLink>
            <NavLink to={"#"} className={"li"}>
              <FaScroll className="icon" />
              Settlements
            </NavLink>
            <NavLink to={"#"} className={"li"}>
              <FaChartBar className="icon" />
              Reports
            </NavLink>

            <NavLink to={"#"} className="li section-header">
              SETTINGS
            </NavLink>
            <NavLink to={"#"} className={"li"}>
              <FaSlidersH className="icon" />
              Preferences
            </NavLink>
            <NavLink to={"#"} className={"li"}>
              <RiDiscountPercentFill className="icon" />
              Fees and Pricing
            </NavLink>
            <NavLink to={"#"} className={"li"}>
              <FaClipboardList className="icon" />
              Audit Logs
            </NavLink>
            <NavLink to={"#"} className={"li"}>
              <GiCartwheel className="icon" />
              System Messages
            </NavLink>

            <div className="end">
              <NavLink to={"/"} className="li logout">
                <FaSignOutAlt className="icon" />
                Log Out
              </NavLink>

              <NavLink to={"#"} className={"li"}>
                <span className="text-xs">v1.2.0</span>
              </NavLink>
            </div>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
