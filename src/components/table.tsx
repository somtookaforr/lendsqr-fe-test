import React, { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";
import { BiCheckSquare } from "react-icons/bi";
import { IoFilter } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
import moment from "moment";
import OptionsPopup from "./options-popup";
import FilterPopup from "./filter-popup";
import "./table.scss";

const sortIcon = <IoFilter fontSize={16} />;
const selectProps = {
  indeterminate: (isIndeterminate) => isIndeterminate,
};

const statusOptions = ["Active", "Inactive", "Pending", "Blacklisted"];

interface User {
  id: number;
  organization: string;
  username: string;
  email: string;
  phoneNumber: string;
  dateJoined: string;
  status: string;
}

export const UsersTable: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [showOptionsModal, setShowOptionsModal] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [activeUser, setActiveUser] = useState(null);
  const toggleOptionsModal = (user) => {
    setActiveUser(user);
    setShowOptionsModal(!showOptionsModal);
    setShowFilterModal(false);
  };

  const toggleFilterModal = () => {
    setShowFilterModal(true); // Open the filter modal
    setShowOptionsModal(false); // Close the options modal
  };

  const viewUserDetails = () => {
    if (activeUser) {
      localStorage.setItem("selectedUser", JSON.stringify(activeUser));
    }
  };

  useEffect(() => {
    const targetElement = document.querySelector(".sc-jhZTHU.bpcekY");

    const newSpan = document.createElement("span");
    newSpan.textContent = "of 500";

    newSpan.style.marginRight = "auto";
    newSpan.style.display = "inline-block";

    // Insert the new span after the target element
    if (targetElement) {
      targetElement.insertAdjacentElement("afterend", newSpan);
    }
  }, []);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const repeatedData = Array.from(
          { length: 50 },
          () => response.data
        ).flat();
        const usersData = repeatedData.map((user: any, index: number) => ({
          id: index + 1,
          organization: "Lendsqr",
          username: user.name,
          email: user.email,
          phoneNumber: user.phone,
          dateJoined: moment().format("MMMM DD, YYYY h:mm A"),
          status:
            statusOptions[Math.floor(Math.random() * statusOptions.length)],
        }));
        setUsers(usersData);
      })
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  const columns = [
    {
      name: "ORGANIZATION",
      selector: (row: User) => row.organization,
      sortable: false,
    },
    {
      name: "USERNAME",
      selector: (row: User) => row.username,
      sortable: true,
    },
    {
      name: "EMAIL",
      selector: (row: User) => row.email,
      sortable: true,
    },
    {
      name: "PHONE NUMBER",
      selector: (row: User) => row.phoneNumber,
      sortable: true,
    },
    {
      name: "DATE JOINED",
      selector: (row: User) => row.dateJoined,
      sortable: true,
    },
    {
      name: "STATUS",
      selector: (row: User) => row.status,
      sortable: true,
      cell: (row: User) => (
        <span className={`status ${row.status.toLowerCase()}`}>
          {row.status}
        </span>
      ),
    },
    {
      name: "",
      selector: (row: User) => row.status,
      sortable: true,
      width: "50px",
      cell: (row: User) => (
        <BsThreeDotsVertical
          onClick={() => toggleOptionsModal(row)}
          className="option-icon"
        />
      ),
    },
  ];

  return (
    <>
      <DataTable
        // title="Users"
        columns={columns}
        data={users}
        pagination
        sortIcon={sortIcon}
        selectableRowsComponent={<BiCheckSquare />}
        selectableRowsComponentProps={selectProps}
        className="userTable"
      />
      <OptionsPopup
        show={showOptionsModal}
        onClose={() => setShowOptionsModal(false)}
        openFilterModal={toggleFilterModal}
        onViewDetails={viewUserDetails}
      />
      <FilterPopup
        show={showFilterModal}
        onClose={() => setShowFilterModal(false)}
      />
    </>
  );
};

export default UsersTable;
