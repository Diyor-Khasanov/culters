// ProfileSettings.jsx
import React, { useState } from "react";
import "./ProfileSecurity.scss";

const ProfileSecurity = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState("Account");
  const [passwordData, setPasswordData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [passwordRequirements, setPasswordRequirements] = useState({
    minChars: false,
    upperLower: false,
    specialChars: false,
  });
  const [queryItems, setQueryItems] = useState({
    dashboard: false,
    product: false,
    sneakers: false,
    jacket: false,
    tshirt: false,
    bag: false,
    transaction: false,
    customers: false,
    salesReport: false,
  });
  const [tools, setTools] = useState({
    accountSettings: true,
    help: false,
    darkMode: false,
  });
  const [adminKey, setAdminKey] = useState(false);

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData((prev) => ({ ...prev, [name]: value }));

    // Check password requirements
    if (name === "newPassword") {
      setPasswordRequirements({
        minChars: value.length >= 8,
        upperLower: /[a-z]/.test(value) && /[A-Z]/.test(value),
        specialChars: /[!@#$%^&*]/.test(value),
      });
    }
  };

  const handleQueryToggle = (item) => {
    setQueryItems((prev) => ({ ...prev, [item]: !prev[item] }));
  };

  const handleToolsToggle = (tool) => {
    if (tool === "darkMode") {
      setDarkMode(!darkMode);
    }
    setTools((prev) => ({ ...prev, [tool]: !prev[tool] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add password update logic here
    console.log("Password updated:", passwordData);
  };

  return (
    <div
      className={`profile-settings-container ${darkMode ? "dark-mode" : ""}`}
    >
      <div className="header">
        <div className="breadcrumbs">
          Dashboard ▶ <strong>Profile</strong>
        </div>
      </div>

      <h1>Profile</h1>

      <div className="tabs">
        <div
          className={`tab ${activeTab === "Account" ? "active" : ""}`}
          onClick={() => setActiveTab("Account")}
        >
          Account
        </div>
        <div
          className={`tab ${activeTab === "Security" ? "active" : ""}`}
          onClick={() => setActiveTab("Security")}
        >
          Security
        </div>
        <div
          className={`tab ${activeTab === "Notification" ? "active" : ""}`}
          onClick={() => setActiveTab("Notification")}
        >
          Notification
        </div>
      </div>

      {activeTab === "Security" && (
        <div className="security-section">
          <form onSubmit={handleSubmit}>
            <div className="password-section">
              <h3>Password</h3>

              <div className="form-group">
                <label htmlFor="oldPassword">Old Password</label>
                <input
                  type="password"
                  id="oldPassword"
                  name="oldPassword"
                  value={passwordData.oldPassword}
                  onChange={handlePasswordChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="newPassword">New Password</label>
                <input
                  type="password"
                  id="newPassword"
                  name="newPassword"
                  value={passwordData.newPassword}
                  onChange={handlePasswordChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={passwordData.confirmPassword}
                  onChange={handlePasswordChange}
                />
              </div>

              <div className="password-requirements">
                <div
                  className={`requirement ${
                    passwordRequirements.minChars ? "met" : ""
                  }`}
                >
                  [ ] Minimum 8 characters.
                </div>
                <div
                  className={`requirement ${
                    passwordRequirements.upperLower ? "met" : ""
                  }`}
                >
                  [ ] Use combination of uppercase and lowercase letters.
                </div>
                <div
                  className={`requirement ${
                    passwordRequirements.specialChars ? "met" : ""
                  }`}
                >
                  [ ] Use of special characters (e.g., !, @, #, $, %).
                </div>
              </div>
            </div>

            <div className="action-buttons">
              <button type="submit" className="update-button">
                Update Password
              </button>
              <button type="button" className="cancel-button">
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="query-section">
        <h3>Query</h3>
        <div className="query-category">GENERAL</div>

        <div className="query-items">
          {Object.entries(queryItems).map(([key, value]) => (
            <div
              key={key}
              className={`query-item ${value ? "checked" : ""}`}
              onClick={() => handleQueryToggle(key)}
            >
              [ ] {formatQueryLabel(key)}
            </div>
          ))}
        </div>
      </div>

      <div className="tools-section">
        <h3>Tools</h3>

        <div className="tools-items">
          <div
            className={`tool-item ${tools.accountSettings ? "checked" : ""}`}
            onClick={() => handleToolsToggle("accountSettings")}
          >
            [ ] Account & Settings
          </div>
          <div
            className={`tool-item ${tools.help ? "checked" : ""}`}
            onClick={() => handleToolsToggle("help")}
          >
            [ ] Help
          </div>
          <div
            className={`tool-item ${tools.darkMode ? "checked" : ""}`}
            onClick={() => handleToolsToggle("darkMode")}
          >
            [ ] Dark Mode
          </div>
        </div>
      </div>

      <div className="key-section">
        <div
          className={`key-item ${adminKey ? "checked" : ""}`}
          onClick={() => setAdminKey(!adminKey)}
        >
          [ ] Buy Hawkins Admin
        </div>
      </div>
    </div>
  );
};

// Helper function to format query labels
const formatQueryLabel = (key) => {
  const labels = {
    dashboard: "Dashboard",
    product: "Product (TIP)",
    sneakers: "Sneakers",
    jacket: "Jacket",
    tshirt: "T-Shirt",
    bag: "Bag",
    transaction: "Transaction (44h)",
    customers: "Customers",
    salesReport: "Sales Report",
  };
  return labels[key] || key;
};

export default ProfileSecurity;
