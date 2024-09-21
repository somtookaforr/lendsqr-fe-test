import React, { useEffect, PropsWithChildren } from "react";
import Sidebar from "../../components/sidebar";
import Topbar from "../../components/topbar";
import { IoMenu } from "react-icons/io5";
import "../../styles/layout.scss";

const Layout: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  useEffect(() => {
    const handleDOMContentLoaded = () => {
      const sidebar = document.querySelector(".sidebar") as HTMLElement | null;
      const hamburger = document.querySelector(
        ".hamburger"
      ) as HTMLElement | null;
      const overlay = document.querySelector(".overlay") as HTMLElement | null;

      // Ensure elements exist before adding event listeners
      if (hamburger && sidebar && overlay) {
        hamburger.addEventListener("click", () => {
          console.log("Hamburger clicked");
          sidebar.classList.toggle("open");
          overlay.classList.toggle("active");
        });

        overlay.addEventListener("click", () => {
          console.log("Overlay clicked");
          sidebar.classList.remove("open");
          overlay.classList.remove("active");
        });
      } else {
        console.error(
          "One or more elements (sidebar, hamburger, overlay) are not found."
        );
      }
    };

    // Wait for full DOM content to be loaded
    window.addEventListener("load", handleDOMContentLoaded);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("load", handleDOMContentLoaded);
    };
  }, []);

  return (
    <div className="dashboardContainer">
      <Topbar />
      <div className={"bottom"}>
        <IoMenu className="hamburger" size={30} />
        <Sidebar />
        <div className={"main"}>{children}</div>
        <div className="overlay"></div>
      </div>
    </div>
  );
};

export default Layout;
