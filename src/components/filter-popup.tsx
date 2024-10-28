import React, { useState } from "react";
import "./filter-popup.scss";
import Button from "./button";
// import { IoClose } from "react-icons/io5";

interface FilterPopupProps {
  show: boolean;
  onClose: () => void;
  onFilter: (filters: any) => void;
}

const FilterPopup: React.FC<FilterPopupProps> = ({ show, onClose, onFilter }) => {
  const [filters, setFilters] = useState({
    organization: '',
    username: '',
    email: '',
    date: '',
    phoneNumber: '',
    status: ''
  });

  // Return null early if not showing
  if (!show) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleFilter = (e: React.FormEvent) => {
    e.preventDefault();
    onFilter(filters);
    onClose();
  };

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        {/* <div className="close-header">
          <h3>Filter Users</h3>
          <IoClose onClick={onClose} size={20} />
        </div> */}

        <form onSubmit={handleFilter}>
          <label>
            Organization
            <select name="organization" value={filters.organization} onChange={handleChange}>
              <option value="">Select</option>
              <option value="Lendsqr">Lendsqr</option>
            </select>
          </label>

          <label>
            Username
            <input type="text" name="username" placeholder="User" value={filters.username} onChange={handleChange} />
          </label>

          <label>
            Email
            <input type="email" name="email" placeholder="Email" value={filters.email} onChange={handleChange} />
          </label>

          <label>
            Date
            <input type="date" name="date" value={filters.date} onChange={handleChange} />
          </label>

          <label>
            Phone Number
            <input type="text" name="phoneNumber" placeholder="Phone Number" value={filters.phoneNumber} onChange={handleChange} />
          </label>

          <label>
            Status
            <select name="status" value={filters.status} onChange={handleChange}>
              <option value="">Select</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
              <option value="Pending">Pending</option>
              <option value="Blacklisted">Blacklisted</option>
            </select>
          </label>

          <div className="buttons">
            <Button text="Reset" color="gray" variant="outlined" type="button" onClick={() => setFilters({ organization: '', username: '', email: '', date: '', phoneNumber: '', status: '' })} />
            <Button text="Filter" color="green" variant="filled" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default FilterPopup;
