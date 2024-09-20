import React from "react";
import "./sidebar.scss";
import {
  FaUserFriends,
  FaClipboardList,
  FaChartPie,
  FaMoneyBill,
  FaBuilding,
  FaCog,
} from "react-icons/fa";
import {
  MdOutlineSavings,
  MdOutlineReport,
  MdOutlineSettings,
} from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { AiOutlineTransaction } from "react-icons/ai";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { IoBusinessSharp, IoAnalytics } from "react-icons/io5";
import { GiMoneyStack } from "react-icons/gi";

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <nav>
        <ul>
          <li className="switch-organization">
            <FaBuilding className="icon" />
            Switch Organization
          </li>

          <li className="section-header">CUSTOMERS</li>
          <li>
            <FaUserFriends className="icon" />
            Users
          </li>
          <li>
            <FaClipboardList className="icon" />
            Guarantors
          </li>
          <li>
            <FaMoneyBill className="icon" />
            Loans
          </li>
          <li>
            <MdOutlineSavings className="icon" />
            Savings
          </li>
          <li>
            <IoAnalytics className="icon" />
            Decision Models
          </li>
          <li>
            <MdOutlineReport className="icon" />
            Loan Requests
          </li>
          <li>
            <AiOutlineTransaction className="icon" />
            Whitelist
          </li>
          <li>
            <HiOutlineDocumentReport className="icon" />
            Karma
          </li>

          <li className="section-header">BUSINESSES</li>
          <li>
            <IoBusinessSharp className="icon" />
            Organization
          </li>
          <li>
            <FaChartPie className="icon" />
            Loan Products
          </li>
          <li>
            <GiMoneyStack className="icon" />
            Savings Products
          </li>
          <li>
            <FaMoneyBill className="icon" />
            Fees and Charges
          </li>
          <li>
            <AiOutlineTransaction className="icon" />
            Transactions
          </li>
          <li>
            <MdOutlineSettings className="icon" />
            Services
          </li>
          <li>
            <MdOutlineSettings className="icon" />
            Service Account
          </li>
          <li>
            <FaBuilding className="icon" />
            Settlements
          </li>
          <li>
            <HiOutlineDocumentReport className="icon" />
            Reports
          </li>

          <li className="section-header">SETTINGS</li>
          <li>
            <FaCog className="icon" />
            Preferences
          </li>
          <li>
            <FaMoneyBill className="icon" />
            Fees and Pricing
          </li>
          <li>
            <MdOutlineReport className="icon" />
            Audit Logs
          </li>

          <li className="logout">
            <FiLogOut className="icon" />
            Log Out
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
