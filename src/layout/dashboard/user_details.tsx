import React, { useState } from "react";
import "../../styles/user_details.scss";
import Layout from "./layout";
import Button from "../../components/button";
import { BsArrowLeft } from "react-icons/bs";
import { LuUser2 } from "react-icons/lu";
import { Link } from "react-router-dom";
import { IoIosStarOutline, IoIosStar } from "react-icons/io";

const UserDetails: React.FC = () => {
  const [activeTab, setActiveTab] = useState("general");
  const handleTabClick = (tab: any) => setActiveTab(tab);

  const activeUser = localStorage.getItem("selectedUser")
    ? JSON.parse(localStorage.getItem("selectedUser")!)
    : null;

  return (
    <Layout>
      <div className={"mainContent"}>
        <div className="user-details-container">
          <div className="navigation-section">
            <Link to={"/users"} className="back-to-users">
              <BsArrowLeft />
              <p>Back to Users</p>
            </Link>
            <div className="user-details">
              <h1 className="text-500">User Details</h1>
              <div className="buttons">
                <Button
                  text={"Blacklist User"}
                  color={"red"}
                  variant={"outlined"}
                />
                <Button
                  text={"Blacklist User"}
                  color={"green"}
                  variant={"outlined"}
                />
              </div>
            </div>
          </div>

          <div className="user-section">
            <div className="user-card">
              <div className="user-info">
                <div className="avatar">
                  <LuUser2 size={40} />
                </div>
                <div className="details">
                  <div className="">
                    <p className="text-500 text-lgplus">
                      {activeUser.username}
                    </p>
                    <p className="text-sm">LSQFf587g90</p>
                  </div>
                  <div className="users-tier">
                    <p className="text-sm text-500">User's Tier:</p>
                    <p className="text-xs info-header text-400">
                      <IoIosStar size={16} />
                      <IoIosStarOutline size={16} />
                      <IoIosStarOutline size={16} />
                    </p>
                  </div>
                  <div className="">
                    <p className="text-500 text-lgplus">₦200,000.00</p>
                    <p className="text-xs account">9932345678/Providus Bank</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="tabs">
              <ul>
                <li
                  className={activeTab === "general" ? "active" : ""}
                  onClick={() => handleTabClick("general")}
                >
                  General Details
                </li>
                <li
                  className={activeTab === "documents" ? "active" : ""}
                  onClick={() => handleTabClick("documents")}
                >
                  Documents
                </li>
                <li
                  className={activeTab === "bank" ? "active" : ""}
                  onClick={() => handleTabClick("bank")}
                >
                  Bank Details
                </li>
                <li
                  className={activeTab === "loans" ? "active" : ""}
                  onClick={() => handleTabClick("loans")}
                >
                  Loans
                </li>
                <li
                  className={activeTab === "savings" ? "active" : ""}
                  onClick={() => handleTabClick("savings")}
                >
                  Savings
                </li>
                <li
                  className={activeTab === "app" ? "active" : ""}
                  onClick={() => handleTabClick("app")}
                >
                  App and System
                </li>
              </ul>
            </div>
          </div>

          <div className="details-section">
            <div className="personal-info">
              <h3 className="text-500">Personal Information</h3>
              <div className="info-grid">
                <div>
                  <span className="text-xs info-header text-400">
                    Full Name
                  </span>{" "}
                  <p>{activeUser.username}</p>
                </div>
                <div>
                  <span className="text-xs info-header text-400">
                    Phone Number
                  </span>{" "}
                  <p>{activeUser.phoneNumber}</p>
                </div>
                <div>
                  <span className="text-xs info-header text-400">
                    Email Address
                  </span>{" "}
                  <p>{activeUser.email}</p>
                </div>
                <div>
                  <span className="text-xs info-header text-400">BVN</span>{" "}
                  <p>10991956782</p>
                </div>
                <div>
                  <span className="text-xs info-header text-400">
                    Marital Status
                  </span>{" "}
                  <p>Single</p>
                </div>
                <div>
                  <span className="text-xs info-header text-400">Children</span>{" "}
                  <p>None</p>
                </div>
                <div>
                  <span className="text-xs info-header text-400">
                    Type of Residence
                  </span>{" "}
                  <p>Parent's Apartment</p>
                </div>
              </div>
            </div>

            <hr />

            <div className="education-employment">
              <h3 className="text-500">Education and Employment</h3>
              <div className="info-grid unique-info-grid">
                <div>
                  <span className="text-xs info-header text-400">
                    Level of Education
                  </span>{" "}
                  <p>B.Sc</p>
                </div>
                <div>
                  <span className="text-xs info-header text-400">
                    Employment Status
                  </span>{" "}
                  <p>Employed</p>
                </div>
                <div>
                  <span className="text-xs info-header text-400">
                    Sector of Employment
                  </span>{" "}
                  <p>FinTech</p>
                </div>
                <div>
                  <span className="text-xs info-header text-400">
                    Duration of Employment
                  </span>{" "}
                  <p>2 years</p>
                </div>
                <div>
                  <span className="text-xs info-header text-400">
                    Office Email
                  </span>{" "}
                  <p>{activeUser?.username?.toLowerCase().replace(/\s+/g, "")}
                  @lendsqr.com</p>{" "}  
                </div>
                <div>
                  <span className="text-xs info-header text-400">
                    Monthly Income
                  </span>{" "}
                  <p>₦200,000.00 - ₦400,000.00</p>
                </div>
                <div>
                  <span className="text-xs info-header text-400">
                    Loan Repayment
                  </span>{" "}
                  <p>40,000</p>
                </div>
              </div>
            </div>

            <hr />

            <div className="socials">
              <h3 className="text-500">Socials</h3>
              <div className="info-grid">
                <div>
                  <span className="text-xs info-header text-400">Twitter</span>{" "}
                  <p>@{activeUser?.username?.toLowerCase().replace(/\s+/g, "")}</p>
                </div>
                <div>
                  <span className="text-xs info-header text-400">Facebook</span>{" "}
                  <p>{activeUser.username}</p>
                </div>
                <div>
                  <span className="text-xs info-header text-400">
                    Instagram
                  </span>{" "}
                  <p>@{activeUser?.username?.toLowerCase().replace(/\s+/g, "")}</p>
                </div>
              </div>
            </div>

            <hr />

            <div className="guarantor">
              <h3 className="text-500">Guarantor</h3>
              <div className="info-grid">
                <div>
                  <span className="text-xs info-header text-400">
                    Full Name
                  </span>{" "}
                  <p>Debby Ogana</p>
                </div>
                <div>
                  <span className="text-xs info-header text-400">
                    Phone Number
                  </span>{" "}
                  <p>07060780922</p>
                </div>
                <div>
                  <span className="text-xs info-header text-400">
                    Email Address
                  </span>{" "}
                  <p>debby@gmail.com</p>
                </div>
                <div>
                  <span className="text-xs info-header text-400">
                    Relationship
                  </span>{" "}
                  <p>Sister</p>
                </div>
              </div>
            </div>

            <hr />

            <div className="guarantor">
              <h3 className="text-500" style={{ opacity: "0" }}>
                Guarantor
              </h3>
              <div className="info-grid">
                <div>
                  <span className="text-xs info-header text-400">
                    Full Name
                  </span>{" "}
                  <p>Debby Ogana</p>
                </div>
                <div>
                  <span className="text-xs info-header text-400">
                    Phone Number
                  </span>{" "}
                  <p>07060780922</p>
                </div>
                <div>
                  <span className="text-xs info-header text-400">
                    Email Address
                  </span>{" "}
                  <p>debby@gmail.com</p>
                </div>
                <div>
                  <span className="text-xs info-header text-400">
                    Relationship
                  </span>{" "}
                  <p>Sister</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UserDetails;
