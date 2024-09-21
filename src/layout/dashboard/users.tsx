import React, { useState } from "react";
import Layout from "./layout";
import "../../styles/users.scss";
import UserCard from "../../components/user_card";
import FilterPopup from "../../components/filter-popup";
import { UsersTable } from "../../components/table";

const Users: React.FC = () => {
  const [showFilterModal, setShowFilterModal] = useState(false);
  const toggleFilterModal = () => setShowFilterModal(!showFilterModal);

  return (
    <Layout>
      <div className={"mainContent"}>
        <h1 className="text-500">Users</h1>

        <div className={"userSummary"}>
          <UserCard />
        </div>

        <UsersTable />
      </div>

      <FilterPopup show={showFilterModal} onClose={toggleFilterModal} />
    </Layout>
  );
};

export default Users;
