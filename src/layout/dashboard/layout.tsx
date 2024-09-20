import React, { PropsWithChildren } from "react";
import Sidebar from "../../components/sidebar";
import Topbar from "../../components/topbar";
import "../../styles/dashboard.scss";

const Layout: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div className="dashboardContainer">
      <Topbar />
      <div className={"bottom"}>
        <Sidebar />
        <div className={"main"}>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
