import React, { useState } from "react";
import "./Customer.scss";

const Customer = () => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");
  const [searchTerm, setSearchTerm] = useState("");

  const customers = Array.from({ length: 20 }, (_, i) => ({
    id: "ID 124" + (50 + i),
    name: `Customer ${i + 1}`,
    email: `customer${i + 1}@example.com`,
    phone: `+62 819 1314 14${(30 + i).toString().padStart(2, "0")}`,
    purchases: `$${(20 + Math.random() * 10).toFixed(2)}`,
    orders: `${10 + i} Orders`,
    address: `Random Street ${i + 1}, City Name, ZIP 1234${i}`,
  }));

  const filteredCustomers = customers.filter(
    (c) =>
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.id.includes(searchTerm)
  );

  return (
    <div className={`customer-dashboard ${theme}`}>
      <header>
        <h1>Customer</h1>
        <div className="actions">
          <input
            type="text"
            placeholder="Search for ID or name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
      </header>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              <th>Name Customer</th>
              <th>Contact</th>
              <th>Purchases</th>
              <th>Order QTY</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredCustomers.map((c, index) => (
              <tr key={index}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <span className="id-link">{c.id}</span>
                  <div className="name">{c.name}</div>
                </td>
                <td>
                  <div>{c.email}</div>
                  <div>{c.phone}</div>
                </td>
                <td>{c.purchases}</td>
                <td>{c.orders}</td>
                <td>{c.address}</td>
                <td className="icons">
                  <button>👁️</button>
                  <button>✏️</button>
                  <button>🗑️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredCustomers.length === 0 && (
          <p className="no-results">No customers found.</p>
        )}
      </div>
    </div>
  );
};

export default Customer;
