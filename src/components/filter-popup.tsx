import React from "react";
import "./filter-popup.scss";
import Button from "./button";

interface FilterPopupProps {
  show: boolean;
  onClose: () => void;
}

const FilterPopup: React.FC<FilterPopupProps> = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <h3>Filter Users</h3>
        <form>
          <label>
            Organization
            <select>
              <option>Select</option>
            </select>
          </label>

          <label>
            Username
            <input type="text" placeholder="User" />
          </label>

          <label>
            Email
            <input type="email" placeholder="Email" />
          </label>

          <label>
            Date
            <input type="date" placeholder="Date" />
          </label>

          <label>
            Phone Number
            <input type="text" placeholder="Phone Number" />
          </label>

          <label>
            Status
            <select>
              <option>Select</option>
              {/* Add more options */}
            </select>
          </label>

          <div className="buttons">
            <Button text="Reset" color="gray" variant="outlined" />
            <Button text="Filter" color="green" variant="filled" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default FilterPopup;
