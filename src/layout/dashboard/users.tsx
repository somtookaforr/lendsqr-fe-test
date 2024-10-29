import React, { useState } from "react";
import Layout from "./layout";
import "../../styles/users.scss";
import UserCard from "../../components/user_card";
import FilterPopup from "../../components/filter-popup";
import { UsersTable } from "../../components/table";

const Users: React.FC = () => {
  const [showFilterModal, setShowFilterModal] = useState(false);
  const toggleFilterModal = () => setShowFilterModal(!showFilterModal);
  const [userCount, setUserCount] = useState(0);
  const [activeUserCount, setActiveUserCount] = useState(0);

  return (
    <Layout>
      <div className={"mainContent"}>
        <h1 className="text-500">Users</h1>

        <div className={"userSummary"}>
          <UserCard userCount={userCount} activeUserCount={activeUserCount} />
        </div>

        <UsersTable setUserCount={setUserCount} setActiveUserCount={setActiveUserCount} />
      </div>

      <FilterPopup onFilter={() => null} show={showFilterModal} onClose={toggleFilterModal} />
    </Layout>
  );
};

export default Users;
