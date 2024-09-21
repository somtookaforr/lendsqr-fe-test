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
                    <p className="info-header text-400 text-xs">
                      <IoIosStar size={16} />
                      <IoIosStarOutline size={16} />
                      <IoIosStarOutline size={16} />
                    </p>
                  </div>
                  <div className="">
                    <p className="text-500 text-lgplus">₦200,000.00</p>
                    <p className="text-xs">9932345678/Providus Bank</p>
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
                  <span className="info-header text-400 text-xs">
                    Full Name
                  </span>{" "}
                  <br /> {activeUser.username}
                </div>
                <div>
                  <span className="info-header text-400 text-xs">
                    Phone Number
                  </span>{" "}
                  <br /> {activeUser.phoneNumber}
                </div>
                <div>
                  <span className="info-header text-400 text-xs">
                    Email Address
                  </span>{" "}
                  <br /> {activeUser.email}
                </div>
                <div>
                  <span className="info-header text-400 text-xs">BVN</span>{" "}
                  <br /> 10991956782
                </div>
                <div>
                  <span className="info-header text-400 text-xs">
                    Marital Status
                  </span>{" "}
                  <br /> Single
                </div>
                <div>
                  <span className="info-header text-400 text-xs">Children</span>{" "}
                  <br /> None
                </div>
                <div>
                  <span className="info-header text-400 text-xs">
                    Type of Residence
                  </span>{" "}
                  <br /> Parent's Apartment
                </div>
              </div>
            </div>

            <hr />

            <div className="education-employment">
              <h3 className="text-500">Education and Employment</h3>
              <div className="info-grid unique-info-grid">
                <div>
                  <span className="info-header text-400 text-xs">
                    Level of Education
                  </span>{" "}
                  <br /> B.Sc
                </div>
                <div>
                  <span className="info-header text-400 text-xs">
                    Employment Status
                  </span>{" "}
                  <br /> Employed
                </div>
                <div>
                  <span className="info-header text-400 text-xs">
                    Sector of Employment
                  </span>{" "}
                  <br /> FinTech
                </div>
                <div>
                  <span className="info-header text-400 text-xs">
                    Duration of Employment
                  </span>{" "}
                  <br /> 2 years
                </div>
                <div>
                  <span className="info-header text-400 text-xs">
                    Office Email
                  </span>{" "}
                  <br />{" "}
                  {activeUser?.username?.toLowerCase().replace(/\s+/g, "")}
                  @lendsqr.com
                </div>
                <div>
                  <span className="info-header text-400 text-xs">
                    Monthly Income
                  </span>{" "}
                  <br /> ₦200,000.00 - ₦400,000.00
                </div>
                <div>
                  <span className="info-header text-400 text-xs">
                    Loan Repayment
                  </span>{" "}
                  <br /> 40,000
                </div>
              </div>
            </div>

            <hr />

            <div className="socials">
              <h3 className="text-500">Socials</h3>
              <div className="info-grid">
                <div>
                  <span className="info-header text-400 text-xs">Twitter</span>{" "}
                  <br /> @
                  {activeUser?.username?.toLowerCase().replace(/\s+/g, "")}
                </div>
                <div>
                  <span className="info-header text-400 text-xs">Facebook</span>{" "}
                  <br /> {activeUser.username}
                </div>
                <div>
                  <span className="info-header text-400 text-xs">
                    Instagram
                  </span>{" "}
                  <br /> @
                  {activeUser?.username?.toLowerCase().replace(/\s+/g, "")}
                </div>
              </div>
            </div>

            <hr />

            <div className="guarantor">
              <h3 className="text-500">Guarantor</h3>
              <div className="info-grid">
                <div>
                  <span className="info-header text-400 text-xs">
                    Full Name
                  </span>{" "}
                  <br /> Debby Ogana
                </div>
                <div>
                  <span className="info-header text-400 text-xs">
                    Phone Number
                  </span>{" "}
                  <br /> 07060780922
                </div>
                <div>
                  <span className="info-header text-400 text-xs">
                    Email Address
                  </span>{" "}
                  <br /> debby@gmail.com
                </div>
                <div>
                  <span className="info-header text-400 text-xs">
                    Relationship
                  </span>{" "}
                  <br /> Sister
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
                  <span className="info-header text-400 text-xs">
                    Full Name
                  </span>{" "}
                  <br /> Debby Ogana
                </div>
                <div>
                  <span className="info-header text-400 text-xs">
                    Phone Number
                  </span>{" "}
                  <br /> 07060780922
                </div>
                <div>
                  <span className="info-header text-400 text-xs">
                    Email Address
                  </span>{" "}
                  <br /> debby@gmail.com
                </div>
                <div>
                  <span className="info-header text-400 text-xs">
                    Relationship
                  </span>{" "}
                  <br /> Sister
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
