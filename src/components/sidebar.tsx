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
import { NavLink, useLocation } from "react-router-dom";

const Sidebar: React.FC = () => {
  const location = useLocation();

  return (
    <>
      <div className="sidebar">
        <nav>
          <ul>
            <li className="li switch-organization">
              <FaBriefcase className="icon" />
              <span>Switch Organization</span>
              <FaChevronDown className="icon" size={14} />
            </li>

            <li className="li section-header">CUSTOMERS</li>

            <NavLink
              to="/users"
              className={({ isActive }) =>
                location.pathname.startsWith("/users") || isActive
                  ? "li active"
                  : "li"
              }
            >
              <FaUserFriends className="icon" />
              Users
            </NavLink>

            <li className="li" onClick={(e) => e.preventDefault()}>
              <FaUsers className="icon" />
              Guarantors
            </li>
            <li className="li" onClick={(e) => e.preventDefault()}>
              <Loans className="icon" />
              Loans
            </li>
            <li className="li" onClick={(e) => e.preventDefault()}>
              <FaRegHandshake className="icon" />
              Decision Models
            </li>
            <li className="li" onClick={(e) => e.preventDefault()}>
              <FaPiggyBank className="icon" />
              Savings
            </li>
            <li className="li" onClick={(e) => e.preventDefault()}>
              <LoanRequests className="icon" />
              Loan Requests
            </li>
            <li className="li" onClick={(e) => e.preventDefault()}>
              <FaUserCheck className="icon" />
              Whitelist
            </li>
            <li className="li" onClick={(e) => e.preventDefault()}>
              <FaUserTimes className="icon" />
              Karma
            </li>

            <li className="li section-header">BUSINESSES</li>

            <li className="li" onClick={(e) => e.preventDefault()}>
              <FaBriefcase className="icon" />
              Organization
            </li>
            <li className="li" onClick={(e) => e.preventDefault()}>
              <LoanRequests className="icon" />
              Loan Products
            </li>
            <li className="li" onClick={(e) => e.preventDefault()}>
              <SavingsProducts className="icon" />
              Savings Products
            </li>
            <li className="li" onClick={(e) => e.preventDefault()}>
              <FaCoins className="icon" />
              Fees and Charges
            </li>
            <li className="li" onClick={(e) => e.preventDefault()}>
              <Transactions className="icon" />
              Transactions
            </li>
            <li className="li" onClick={(e) => e.preventDefault()}>
              <Services className="icon" />
              Services
            </li>
            <li className="li" onClick={(e) => e.preventDefault()}>
              <FaUserCog className="icon" />
              Service Account
            </li>
            <li className="li" onClick={(e) => e.preventDefault()}>
              <FaScroll className="icon" />
              Settlements
            </li>
            <li className="li" onClick={(e) => e.preventDefault()}>
              <FaChartBar className="icon" />
              Reports
            </li>

            <li className="li section-header">SETTINGS</li>

            <li className="li" onClick={(e) => e.preventDefault()}>
              <FaSlidersH className="icon" />
              Preferences
            </li>
            <li className="li" onClick={(e) => e.preventDefault()}>
              <RiDiscountPercentFill className="icon" />
              Fees and Pricing
            </li>
            <li className="li" onClick={(e) => e.preventDefault()}>
              <FaClipboardList className="icon" />
              Audit Logs
            </li>
            <li className="li" onClick={(e) => e.preventDefault()}>
              <GiCartwheel className="icon" />
              System Messages
            </li>

            {/* Footer section */}
            <div className="end">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "li active logout" : "li logout"
                }
              >
                <FaSignOutAlt className="icon" />
                Log Out
              </NavLink>

              <li className="li">
                <span className="text-xs">v1.2.0</span>
              </li>
            </div>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
