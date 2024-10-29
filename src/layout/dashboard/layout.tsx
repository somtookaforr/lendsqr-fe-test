import React, { useEffect, PropsWithChildren } from "react";
import Sidebar from "../../components/sidebar";
import Topbar from "../../components/topbar";
import { IoMenu } from "react-icons/io5";
import "../../styles/layout.scss";

const Layout: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  useEffect(() => {
    const attachListeners = () => {
      const sidebar = document.querySelector(".sidebar") as HTMLElement | null;
      const hamburger = document.querySelector(
        ".hamburger"
      ) as HTMLElement | null;
      const overlay = document.querySelector(".overlay") as HTMLElement | null;

      if (hamburger && sidebar && overlay) {
        hamburger.addEventListener("click", () => {
          console.log("Hamburger clicked");
          sidebar.classList.toggle("open");
          hamburger.classList.toggle("open");
          overlay.classList.toggle("active");
        });

        overlay.addEventListener("click", () => {
          console.log("Overlay clicked");
          sidebar.classList.remove("open");
          hamburger.classList.remove("open");
          overlay.classList.remove("active");
        });
      } else {
        console.error(
          "One or more elements (sidebar, hamburger, overlay) are not found."
        );
      }
    };

    // Delay execution slightly to ensure DOM is ready
    const timeoutId = setTimeout(attachListeners, 100);

    // Cleanup event listeners on component unmount
    return () => {
      const sidebar = document.querySelector(".sidebar") as HTMLElement | null;
      const hamburger = document.querySelector(
        ".hamburger"
      ) as HTMLElement | null;
      const overlay = document.querySelector(".overlay") as HTMLElement | null;

      hamburger?.removeEventListener("click", () => {
        sidebar?.classList.toggle("open");
        hamburger?.classList.toggle("open");
        overlay?.classList.toggle("active");
      });

      overlay?.removeEventListener("click", () => {
        sidebar?.classList.remove("open");
        hamburger?.classList.remove("open");
        overlay?.classList.remove("active");
      });

      clearTimeout(timeoutId); // Clear timeout when unmounting
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
