import React, { useEffect, useState, useRef } from "react";
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
  indeterminate: (isIndeterminate: boolean) => isIndeterminate,
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
  const [showOptionsModal, setShowOptionsModal] = useState<boolean>(false);
  const [showFilterModal, setShowFilterModal] = useState<boolean>(false);
  const [activeUser, setActiveUser] = useState<User | null>(null);
  const [optionsPosition, setOptionsPosition] = useState<{ top: number }>({ top: 0});
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const buttonRef = useRef<(HTMLDivElement | null)[]>([]);
  
  const toggleOptionsModal = (user: User, index: number) => {
    if (buttonRef.current[index]) {
      const rect = buttonRef.current[index]!.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const topPosition = Math.min(rect.bottom + window.scrollY, viewportHeight - 200);

      setOptionsPosition({ top: topPosition });
    }

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
        setFilteredUsers(usersData); // Initialize filteredUsers with all users
      })
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  const handleFilter = (filters: any) => {
    let updatedUsers = [...users];

    // Apply filters based on the filter values
    if (filters.organization) {
      updatedUsers = updatedUsers.filter(user => user.organization.includes(filters.organization));
    }
    if (filters.username) {
      updatedUsers = updatedUsers.filter(user => user.username.toLowerCase().includes(filters.username.toLowerCase()));
    }
    if (filters.email) {
      updatedUsers = updatedUsers.filter(user => user.email.toLowerCase().includes(filters.email.toLowerCase()));
    }
    if (filters.phoneNumber) {
      updatedUsers = updatedUsers.filter(user => user.phoneNumber.includes(filters.phoneNumber));
    }
    if (filters.status) {
      updatedUsers = updatedUsers.filter(user => user.status === filters.status);
    }

    setFilteredUsers(updatedUsers); // Update filtered users
  };

  useEffect(() => {
    if (showOptionsModal || showFilterModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [showOptionsModal, showFilterModal]);

  const columns = [
    {
      name: "ORGANIZATION",
      selector: (row: User) => row.organization,
      sortable: true,
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
      width: "130px",
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
      width: "10px",
      cell: (row: User, index: number) => (
        <div ref={el => buttonRef.current[index] = el}>
          <BsThreeDotsVertical
          onClick={() => toggleOptionsModal(row, index)} // Pass index
          className="option-icon"
        />
        </div>
      ),
    },
  ];

  return (
    <>
      <DataTable
        columns={columns}
        data={filteredUsers}
        pagination
        sortIcon={sortIcon}
        selectableRowsComponent={<BiCheckSquare />}
        selectableRowsComponentProps={selectProps}
        className="userTable"
      />
      <OptionsPopup
        show={showOptionsModal}
        position={optionsPosition}
        onClose={() => setShowOptionsModal(false)}
        openFilterModal={toggleFilterModal}
        onViewDetails={viewUserDetails}
      />
      <FilterPopup
        show={showFilterModal}
        onClose={() => setShowFilterModal(false)}
        onFilter={handleFilter}
      />
    </>
  );
};

export default UsersTable;
