// ProductForm.jsx
import React, { useState } from "react";
import "./AddProduct.scss";

const AddProduct = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [formData, setFormData] = useState({
    sku: "",
    productName: "",
    size: "",
    price: "",
    color: "",
    category: "",
    quantity: "",
    status: "",
    photos: Array(4).fill(null),
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const newPhotos = [...formData.photos];
      newPhotos[index] = file;
      setFormData((prev) => ({ ...prev, photos: newPhotos }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <div className={`product-form-container ${darkMode ? "dark-mode" : ""}`}>
      <div className="header">
        <div className="breadcrumbs">
          Dashboard ▶ Product ▶ Sneakers ▶ Add Product
        </div>
        <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      <h1>Product</h1>
      <p className="description">
        Lorem ipsum dolor sit amet consectetur. Non ac nulla aliquam aenean in
        velit mattis.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="form-section">
          <h2>Product Information</h2>

          <div className="form-group">
            <label htmlFor="sku">SKU</label>
            <input
              type="text"
              id="sku"
              name="sku"
              value={formData.sku}
              onChange={handleInputChange}
              placeholder="Input no SKU"
            />
          </div>

          <div className="form-group">
            <label htmlFor="productName">Product Name</label>
            <input
              type="text"
              id="productName"
              name="productName"
              value={formData.productName}
              onChange={handleInputChange}
              placeholder="Input product name"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="size">Size</label>
              <input
                type="text"
                id="size"
                name="size"
                value={formData.size}
                onChange={handleInputChange}
                placeholder="Input size"
              />
            </div>

            <div className="form-group">
              <label htmlFor="price">Price</label>
              <input
                type="text"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                placeholder="Input price"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="color">Color</label>
              <input
                type="text"
                id="color"
                name="color"
                value={formData.color}
                onChange={handleInputChange}
                placeholder="Color"
              />
            </div>

            <div className="form-group">
              <label htmlFor="category">Product Category</label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
              >
                <option value="">Select product category</option>
                <option value="sneakers">Sneakers</option>
                <option value="shoes">Shoes</option>
                <option value="sandals">Sandals</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="quantity">Quantity</label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                value={formData.quantity}
                onChange={handleInputChange}
                placeholder="Input stock"
              />
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
                <option value="draft">Draft</option>
              </select>
            </div>
          </div>
        </div>

        <div className="form-section">
          <h2>Image Product</h2>
          <p className="note">
            Note: Format photos SVG, PNG, or JPG (Max size 4mb)
          </p>

          <div className="image-upload-grid">
            {[0, 1, 2, 3].map((index) => (
              <div key={index} className="image-upload-item">
                <label htmlFor={`photo-${index}`}>Photo {index + 1}</label>
                <input
                  type="file"
                  id={`photo-${index}`}
                  accept=".svg,.png,.jpg,.jpeg"
                  onChange={(e) => handleFileChange(e, index)}
                />
                {formData.photos[index] && (
                  <div className="preview">{formData.photos[index].name}</div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="form-actions">
          <button type="submit" className="save-button">
            Save Product
          </button>
          <div className="user-info">
            <span>Buy Hawkins</span>
            <span>Admin</span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
