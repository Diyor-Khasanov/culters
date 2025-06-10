import React, { useState } from "react";
import "./Order.scss";

const Order = () => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  const orders = Array.from({ length: 20 }, (_, i) => ({
    id: "02123" + (i + 1),
    product: `Product ${i + 1}`,
    image: "https://via.placeholder.com/40",
    customer: `Customer ${i + 1}`,
    price: `$${(20 + Math.random() * 10).toFixed(2)}`,
    date: "04/17/23",
    payment: i % 2 === 0 ? "Paid" : "Unpaid",
    status: i % 3 === 0 ? "Shipping" : "Cancelled",
  }));

  const [searchTerm, setSearchTerm] = useState("");

  const filteredOrders = orders.filter(
    (order) =>
      order.product.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.id.includes(searchTerm)
  );

  return (
    <div className={`order-dashboard ${theme}`}>
      <header>
        <h1>Orders</h1>
        <div className="actions">
          <input
            type="text"
            placeholder="Search by ID or product"
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
              <th>Orders</th>
              <th>Customer</th>
              <th>Price</th>
              <th>Date</th>
              <th>Payment</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map((order, index) => (
              <tr key={index}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <img src={order.image} alt={order.product} />
                  <div className="order-info">
                    <span className="id">{order.id}</span>
                    <span className="name">{order.product}</span>
                  </div>
                </td>
                <td>{order.customer}</td>
                <td>{order.price}</td>
                <td>{order.date}</td>
                <td>
                  <span className={`badge ${order.payment.toLowerCase()}`}>
                    {order.payment}
                  </span>
                </td>
                <td>
                  <span className={`badge ${order.status.toLowerCase()}`}>
                    {order.status}
                  </span>
                </td>
                <td>
                  <button className="icon">👁️</button>
                  <button className="icon">✏️</button>
                  <button className="icon">🗑️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredOrders.length === 0 && (
          <p className="no-results">No orders found.</p>
        )}
      </div>
    </div>
  );
};

export default Order;
