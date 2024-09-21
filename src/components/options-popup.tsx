import React from "react";
import "./options-popup.scss";
import { useNavigate } from "react-router";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { BiUserCheck, BiUserX } from "react-icons/bi";
import { IoFilter } from "react-icons/io5";

interface OptionsPopupProps {
  show: boolean;
  onClose: () => void;
  openFilterModal: () => void;
  onViewDetails: () => void;
}

const OptionsPopup: React.FC<OptionsPopupProps> = ({
  show,
  onClose,
  openFilterModal,
  onViewDetails,
}) => {
  const navigate = useNavigate();
  if (!show) return null;

  return (
    <>
      <div className="options-overlay" onClick={onClose}>
        <div className="options-dropdown">
          <div
            className="option-item"
            onClick={() => {
              onViewDetails();
              navigate("/users/user_details");
            }}
          >
            <span className="icon">
              <MdOutlineRemoveRedEye />
            </span>
            View Details
          </div>
          <div className="option-item" onClick={openFilterModal}>
            <span className="icon">
              <IoFilter />
            </span>
            Custom Filter
          </div>
          <div className="option-item">
            <span className="icon">
              <BiUserCheck />
            </span>
            Blacklist User
          </div>
          <div className="option-item">
            <span className="icon">
              <BiUserX />
            </span>
            Activate User
          </div>
        </div>
      </div>
    </>
  );
};

export default OptionsPopup;
