// AccountSettings.jsx
import React, { useState } from "react";
import "./ProfilePersonalAccount.scss";

const ProfilePersonalAccount = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "Cameron",
    lastName: "Williamson",
    email: "cameron@example.com",
    gender: "Male",
    birthday: "23 December 2003",
    phone: "+62 847 1723 1123",
    country: "Indonesia",
    address: "Parungkuda, Kab. Sukabumi",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    setEditMode(false);
    // Add save logic here
    console.log("Saved data:", formData);
  };

  const handleCancel = () => {
    setEditMode(false);
    // Reset form data if needed
  };

  return (
    <div
      className={`account-settings-container ${darkMode ? "dark-mode" : ""}`}
    >
      <div className="header">
        <div className="breadcrumbs">Dashboard Profile</div>
        <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      <h1>Account & Settings</h1>
      <h2>Dashboard + Profile</h2>

      <div className="tabs">
        <div className="tab active">Account</div>
        <div className="tab">Security</div>
        <div className="tab">Notification</div>
      </div>

      <form onSubmit={handleSave}>
        <div className="profile-section">
          <h3>Profile Information</h3>

          <div className="profile-table">
            <div className="table-row">
              <div className="table-cell label">First Name</div>
              <div className="table-cell label">Last Name</div>
              <div className="table-cell label">Email</div>
            </div>
            <div className="table-row">
              {editMode ? (
                <>
                  <div className="table-cell">
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="table-cell">
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="table-cell">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="table-cell value">{formData.firstName}</div>
                  <div className="table-cell value">{formData.lastName}</div>
                  <div className="table-cell value">{formData.email}</div>
                </>
              )}
            </div>
            <div className="table-row">
              <div className="table-cell label">Gender</div>
              <div className="table-cell label">Date Birthday</div>
              <div className="table-cell"></div>
            </div>
            <div className="table-row">
              {editMode ? (
                <>
                  <div className="table-cell">
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="table-cell">
                    <input
                      type="text"
                      name="birthday"
                      value={formData.birthday}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="table-cell"></div>
                </>
              ) : (
                <>
                  <div className="table-cell value">{formData.gender}</div>
                  <div className="table-cell value">{formData.birthday}</div>
                  <div className="table-cell"></div>
                </>
              )}
            </div>
          </div>

          <div className="action-buttons">
            {editMode ? (
              <>
                <button type="submit" className="update-button">
                  Update
                </button>
                <button
                  type="button"
                  className="cancel-button"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
              </>
            ) : (
              <button
                type="button"
                className="edit-button"
                onClick={() => setEditMode(true)}
              >
                Edit Profile
              </button>
            )}
          </div>
        </div>

        <div className="contact-section">
          <h3>Contact Detail</h3>

          <div className="contact-details">
            <div className="detail-item">
              <div className="detail-label">Phone Number</div>
              {editMode ? (
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              ) : (
                <div className="detail-value">{formData.phone}</div>
              )}
            </div>

            <div className="detail-item">
              <div className="detail-label">Country</div>
              {editMode ? (
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                />
              ) : (
                <div className="detail-value">{formData.country}</div>
              )}
            </div>

            <div className="detail-item">
              <div className="detail-label">Address</div>
              {editMode ? (
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                />
              ) : (
                <div className="detail-value">{formData.address}</div>
              )}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProfilePersonalAccount;
