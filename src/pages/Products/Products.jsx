import React, { useState } from "react";
import "./Products.scss";
import { FaSun, FaMoon, FaPlus, FaEdit, FaTrash, FaEye } from "react-icons/fa";

const Products = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [editProduct, setEditProduct] = useState(null);

  const toggleTheme = () => setDarkMode(!darkMode);

  const handleAction = (action, id) => {
    if (action === "Edit") {
      const productToEdit = products.find((p) => p.id === id);
      setEditProduct(productToEdit);
    } else {
      alert(`${action} product with ID: ${id}`);
    }
  };

  const closeModal = () => setEditProduct(null);

  const handleEditChange = (field, value) => {
    setEditProduct((prev) => ({ ...prev, [field]: value }));
  };

  const saveProduct = () => {
    alert(`Product ${editProduct.id} saved.`);
    closeModal();
  };

  const products = [
    {
      id: "10001",
      name: "Beigi Coffee (Navy)",
      price: "$20.00",
      size: 40,
      qty: 234,
      date: "04/17/25",
      time: "8:25 PM",
      status: "Available",
    },
    {
      id: "10002",
      name: "Stozy Honzo (Cream)",
      price: "$25.00",
      size: 41,
      qty: 123,
      date: "04/17/25",
      time: "8:30 PM",
      status: "Out of Stock",
    },
    {
      id: "10003",
      name: "Kanky Kitadakate (Green)",
      price: "$30.00",
      size: 42,
      qty: 55,
      date: "04/18/25",
      time: "9:00 AM",
      status: "Available",
    },
    {
      id: "10004",
      name: "Orion Breeze (White)",
      price: "$22.00",
      size: 38,
      qty: 99,
      date: "04/18/25",
      time: "10:15 AM",
      status: "Available",
    },
    {
      id: "10005",
      name: "Nimbus Runner (Gray)",
      price: "$26.00",
      size: 39,
      qty: 44,
      date: "04/18/25",
      time: "1:45 PM",
      status: "Out of Stock",
    },
    {
      id: "10006",
      name: "Echo Blaze (Red)",
      price: "$29.00",
      size: 43,
      qty: 89,
      date: "04/19/25",
      time: "2:20 PM",
      status: "Available",
    },
    {
      id: "10007",
      name: "SkyLoom (Blue)",
      price: "$24.00",
      size: 40,
      qty: 112,
      date: "04/19/25",
      time: "3:10 PM",
      status: "Available",
    },
    {
      id: "10008",
      name: "Terra Slip (Brown)",
      price: "$21.00",
      size: 41,
      qty: 60,
      date: "04/20/25",
      time: "4:00 PM",
      status: "Out of Stock",
    },
    {
      id: "10009",
      name: "Volt Trek (Black)",
      price: "$27.00",
      size: 42,
      qty: 38,
      date: "04/20/25",
      time: "5:35 PM",
      status: "Available",
    },
    {
      id: "10010",
      name: "Frost Peak (Silver)",
      price: "$23.00",
      size: 39,
      qty: 101,
      date: "04/20/25",
      time: "6:10 PM",
      status: "Available",
    },
    {
      id: "10011",
      name: "Crimson Dusk (Maroon)",
      price: "$32.00",
      size: 44,
      qty: 73,
      date: "04/21/25",
      time: "9:30 AM",
      status: "Available",
    },
    {
      id: "10012",
      name: "Cobalt Sprint (Indigo)",
      price: "$28.00",
      size: 40,
      qty: 86,
      date: "04/21/25",
      time: "10:45 AM",
      status: "Out of Stock",
    },
    {
      id: "10013",
      name: "Golden Arrow (Yellow)",
      price: "$26.00",
      size: 41,
      qty: 42,
      date: "04/21/25",
      time: "12:00 PM",
      status: "Available",
    },
    {
      id: "10014",
      name: "Shadow Drift (Dark Gray)",
      price: "$31.00",
      size: 43,
      qty: 58,
      date: "04/22/25",
      time: "1:15 PM",
      status: "Available",
    },
    {
      id: "10015",
      name: "Opal Mist (Beige)",
      price: "$29.00",
      size: 38,
      qty: 95,
      date: "04/22/25",
      time: "2:30 PM",
      status: "Out of Stock",
    },
    {
      id: "10016",
      name: "Neon Pulse (Hot Pink)",
      price: "$34.00",
      size: 39,
      qty: 78,
      date: "04/22/25",
      time: "3:45 PM",
      status: "Available",
    },
    {
      id: "10017",
      name: "Azure Jet (Light Blue)",
      price: "$22.00",
      size: 40,
      qty: 88,
      date: "04/23/25",
      time: "5:00 PM",
      status: "Available",
    },
    {
      id: "10018",
      name: "Lime Strike (Green)",
      price: "$21.00",
      size: 41,
      qty: 52,
      date: "04/23/25",
      time: "6:15 PM",
      status: "Out of Stock",
    },
    {
      id: "10019",
      name: "Blizzard Chill (White)",
      price: "$25.00",
      size: 42,
      qty: 67,
      date: "04/23/25",
      time: "7:30 PM",
      status: "Available",
    },
    {
      id: "10020",
      name: "Inferno Dash (Orange)",
      price: "$27.00",
      size: 43,
      qty: 49,
      date: "04/23/25",
      time: "8:45 PM",
      status: "Available",
    },
  ];

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(search.toLowerCase()) &&
      (statusFilter === "All" || product.status === statusFilter)
  );

  return (
    <div className={`dashboard ${darkMode ? "dark" : ""}`}>
      <header className="header">
        <h1>Product Dashboard</h1>
        <button onClick={toggleTheme} className="theme-toggle">
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </header>

      <div className="toolbar">
        <input
          type="text"
          placeholder="Search product..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          onChange={(e) => setStatusFilter(e.target.value)}
          value={statusFilter}
        >
          <option value="All">All</option>
          <option value="Available">Available</option>
          <option value="Out of Stock">Out of Stock</option>
        </select>
        <button className="new-product">
          <FaPlus /> New Product
        </button>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              <th>Product</th>
              <th>Price</th>
              <th>Size</th>
              <th>QTY</th>
              <th>Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product) => (
              <tr key={product.id}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.size}</td>
                <td>{product.qty}</td>
                <td>
                  {product.date} at {product.time}
                </td>
                <td>
                  <span
                    className={`status ${
                      product.status === "Available"
                        ? "available"
                        : "out-of-stock"
                    }`}
                  >
                    {product.status}
                  </span>
                </td>
                <td className="actions">
                  <FaEye
                    title="View"
                    onClick={() => handleAction("View", product.id)}
                  />
                  <FaEdit
                    title="Edit"
                    onClick={() => handleAction("Edit", product.id)}
                  />
                  <FaTrash
                    title="Delete"
                    onClick={() => handleAction("Delete", product.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {editProduct && (
        <div className="modal">
          <div className="modal-content">
            <h3>Edit Product</h3>
            <label>
              Name{" "}
              <input
                value={editProduct.name}
                onChange={(e) => handleEditChange("name", e.target.value)}
              />
            </label>
            <label>
              Price{" "}
              <input
                value={editProduct.price}
                onChange={(e) => handleEditChange("price", e.target.value)}
              />
            </label>
            <label>
              Status
              <select
                value={editProduct.status}
                onChange={(e) => handleEditChange("status", e.target.value)}
              >
                <option value="Available">Available</option>
                <option value="Out of Stock">Out of Stock</option>
              </select>
            </label>
            <button onClick={saveProduct}>Save</button>
            <button onClick={closeModal}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
