import React from "react";
import "./user_card.scss";

const card = [
  { icon: "", description: "Users", count: 2453 },
  { icon: "", description: "Active Users", count: 2453 },
  { icon: "", description: "Users with Loans", count: 12453 },
  { icon: "", description: "Users with Savings", count: 102453 },
];

const Card: React.FC = () => {
  return (
    <div className={"user_card"}>
      {card.map((x, key) => (
        <div key={key} className={"container"}>
          <div className="icon">
            <img src={x.icon} alt="" />
          </div>
          <p className="text-sm text-500">{x.description}</p>
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
