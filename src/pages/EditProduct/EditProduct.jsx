// EditProductForm.jsx
import React, { useState } from "react";
import "./EditProduct.scss";

const EditProduct = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [formData, setFormData] = useState({
    product: "ITS",
    scalator: "",
    locker: "",
    sun: "",
    bag: "",
    productName: "Proxy Disorder",
    size: "44",
    color: "Alex White",
    category: "Fides",
    sessions: "22.60",
    quantity: "ITS",
    status: "",
    images: ["inserted", "printed", "printed"], // Sample image states
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageAction = (index, action) => {
    const newImages = [...formData.images];
    newImages[index] = action;
    setFormData((prev) => ({ ...prev, images: newImages }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <div className={`edit-product-container ${darkMode ? "dark-mode" : ""}`}>
      <div className="header">
        <div className="breadcrumbs">
          Dashboard  Product  Browser  Edit Product
        </div>
        <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      <h1>Cullers</h1>
      <h2>Product</h2>

      <div className="section">
        <h3>Product Information</h3>
        <p className="description">
          Customize product from transaction. You can find appropriate new
          formats.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-section">
          <div className="index-section">
            <h4>Index</h4>
            <div className="index-items">
              <div className="index-item active">Product (ITS)</div>
              <div className="index-item">Scalator</div>
              <div className="index-item">Locker</div>
              <div className="index-item">1-SUN</div>
              <div className="index-item">Bag</div>
            </div>
          </div>

          <div className="transaction-section">
            <h4>Transactioned (E)</h4>
            <div className="customize-options">
              <div className="option">Sales Report</div>
              <div className="option">TODAS</div>
              <div className="option">Account & Settings</div>
              <div className="option">Help</div>
              <div className="option">Data Home</div>
            </div>
          </div>
        </div>

        <div className="form-section">
          <div className="form-group">
            <label htmlFor="productName">Product Name</label>
            <div className="product-name-value">{formData.productName}</div>
          </div>

          <div className="product-details-table">
            <table>
              <tbody>
                <tr>
                  <td>Size</td>
                  <td>{formData.size}</td>
                  <td>Color</td>
                  <td>{formData.color}</td>
                </tr>
                <tr>
                  <td>Product Category</td>
                  <td>{formData.category}</td>
                  <td>Sessions</td>
                  <td>${formData.sessions}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="quantity">Quantity</label>
              <div className="quantity-value">{formData.quantity}</div>
            </div>

            <div className="form-group">
              <label htmlFor="status">Status Product</label>
              <select
                id="status"
                name="status"
                value={formData.status}
                onChange={handleInputChange}
              >
                <option value="">Select status product</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="pending">Pending</option>
              </select>
            </div>
          </div>
        </div>

        <div className="form-section">
          <h4>Image Product</h4>
          <p className="note">
            <strong>Note:</strong> Smartphone: 306,786c or POWERcard=0dB
          </p>

          <div className="image-actions">
            {formData.images.map((action, index) => (
              <div key={index} className="image-action-item">
                <div className="image-placeholder">
                  <span>Image {index + 1}</span>
                </div>
                <div className="action-buttons">
                  <button
                    type="button"
                    className={action === "inserted" ? "active" : ""}
                    onClick={() => handleImageAction(index, "inserted")}
                  >
                    Insert
                  </button>
                  <button
                    type="button"
                    className={action === "printed" ? "active" : ""}
                    onClick={() => handleImageAction(index, "printed")}
                  >
                    Printed
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="form-actions">
          <button type="submit" className="save-button">
            Direct Changes
          </button>
          <div className="save-text">Save Changes</div>
        </div>
      </form>
    </div>
  );
};

export default EditProduct;
