import React, { useEffect, PropsWithChildren } from "react";
import Sidebar from "../../components/sidebar";
import Topbar from "../../components/topbar";
import { IoMenu } from "react-icons/io5";
import "../../styles/layout.scss";

const Layout: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  // Use `useEffect` to handle the sidebar toggle functionality once the component mounts
  useEffect(() => {
    const sidebar = document.querySelector(".sidebar") as HTMLElement | null;
    const hamburger = document.querySelector(
      ".hamburger"
    ) as HTMLElement | null;
    const overlay = document.querySelector(".overlay") as HTMLElement | null;

    // Check if elements are found in the DOM
    console.log("Elements:", { sidebar, hamburger, overlay });

    // Ensure elements exist before adding event listeners
    if (hamburger && sidebar && overlay) {
      // Log the click event for debugging
      hamburger.addEventListener("click", () => {
        console.log("Hamburger clicked");
        sidebar.classList.toggle("open");
        overlay.classList.toggle("active");
      });

      // Log the overlay click event for debugging
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

    // Cleanup event listeners on component unmount
    return () => {
      hamburger?.removeEventListener("click", () => {
        sidebar?.classList.toggle("open");
        overlay?.classList.toggle("active");
      });

      overlay?.removeEventListener("click", () => {
        sidebar?.classList.remove("open");
        overlay?.classList.remove("active");
      });
    };
  }, []); // Empty dependency array ensures the effect runs once on component mount

  return (
    <div className="dashboardContainer">
      <Topbar />
      <div className={"bottom"}>
        <IoMenu className="hamburger" />
        <Sidebar />
        <div className={"main"}>{children}</div>
        <div className="overlay"></div>
      </div>
    </div>
  );
};

export default Layout;
