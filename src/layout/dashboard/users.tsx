import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "./layout";
import "../../styles/dashboard.scss";
import { IoFilter } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
import UserCard from "../../components/user_card";

interface Users {
  organization: string;
  username: string;
  email: string;
  phoneNumber: string;
  dateJoined: string;
  status: string;
}

const statusOptions = ["Active", "Inactive", "Pending", "Blacklisted"];

const Users: React.FC = () => {
  const [users, setUsers] = useState<Users[]>([]);

  useEffect(() => {
    // Replace this URL with an actual API
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const usersData = response.data.map((user: any) => ({
          organization: "Lendsqr",
          username: user.username,
          email: user.email,
          phoneNumber: user.phone,
          dateJoined: new Date().toLocaleString(),
          status:
            statusOptions[Math.floor(Math.random() * statusOptions.length)],
        }));
        setUsers(usersData);
      })
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  const statusClassMap: { [key: string]: string } = {
    Active: "active",
    Inactive: "inactive",
    Pending: "pending",
    Blacklisted: "blacklisted",
  };

  return (
    <Layout>
      <div className={"mainContent"}>
        <h1 className="text-500">Users</h1>

        <div className={"userSummary"}>
          {/* Summary Boxes */}
          <UserCard />
        </div>

        <table className={"userTable"}>
          <thead>
            <tr>
              <th>
                <div className="text-xs">
                  ORGANIZATION <IoFilter fontSize={16} />
                </div>
              </th>
              <th>
                <div className="text-xs">
                  USERNAME <IoFilter fontSize={16} />
                </div>
              </th>
              <th>
                <div className="text-xs">
                  EMAIL <IoFilter fontSize={16} />
                </div>
              </th>
              <th>
                <div className="text-xs">
                  PHONE NUMBER <IoFilter fontSize={16} />
                </div>
              </th>
              <th>
                <div className="text-xs">
                  DATE JOINED <IoFilter fontSize={16} />
                </div>
              </th>
              <th>
                <div className="text-xs">
                  STATUS <IoFilter fontSize={16} />
                </div>
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.organization}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phoneNumber}</td>
                <td>{user.dateJoined}</td>
                <td>
                  <span
                    className={`status ${statusClassMap[user.status] || ""}`}
                  >
                    {user.status}
                  </span>
                </td>
                <td>
                  <BsThreeDotsVertical />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default Users;
