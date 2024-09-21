import React from "react";
import "./user_card.scss";
import Users from "../assets/dashboard-users-icon.svg";
import Active from "../assets/dashboard-active-icon.svg";
import Loans from "../assets/dashboard-loan-icon.svg";
import Savings from "../assets/dashboard-savings-icon.svg";

interface cardProps {
  id: number;
  icon: React.ReactNode;
  description: string;
  count: string;
}

const card: cardProps[] = [
  {
    id: 0,
    icon: <img src={Users} alt="" />,
    description: "Users",
    count: "2453",
  },
  {
    id: 1,
    icon: <img src={Active} alt="" />,
    description: "Active Users",
    count: "2,453",
  },
  {
    id: 2,
    icon: <img src={Loans} alt="" />,
    description: "Users with Loans",
    count: "12,453",
  },
  {
    id: 3,
    icon: <img src={Savings} alt="" />,
    description: "Users with Savings",
    count: "102,453",
  },
];

const Card: React.FC = () => {
  return (
    <div className={"user_card"}>
      {card.map((x, key) => (
        <div key={key} className={"container"}>
          <div
            className={`icon ${
              x.id === 0
                ? "pink"
                : x.id === 1
                ? "purple"
                : x.id === 2
                ? "orange"
                : x.id === 3
                ? "red"
                : ""
            }
`}
          >
            {x.icon}
          </div>
          <p className="text-sm text-500">{x.description.toUpperCase()}</p>
          <h2 className="text-xl text-600">{x.count}</h2>
        </div>
      ))}
    </div>
  );
};

const UserCard: React.FC = () => {
  return (
    <>
      <Card />
    </>
  );
};

export default UserCard;
