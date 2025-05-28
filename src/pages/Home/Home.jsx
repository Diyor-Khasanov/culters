import React, { useState, useEffect } from "react";
import "./Home.scss";
import logo from "./img/Logo.png";
import admin from "./img/admin.png";
import notifications from "./img/notifications.png";
import mail from "./img/mail.png";

const Home = () => {
  const [search, setSearch] = useState("");
  const [salesData, setSalesData] = useState([3000, 2311, 2111, 1661]);
  const [totalRevenue, setTotalRevenue] = useState(81000);

  useEffect(() => {
    // Simulated fetch call
    const timer = setTimeout(() => {
      setSalesData((prev) =>
        prev.map((n) => Math.floor(n * (1 + Math.random() * 0.05)))
      );
      setTotalRevenue((prev) => prev + Math.floor(Math.random() * 1000));
    }, 3000);

    return () => clearTimeout(timer);
  }, [salesData]);

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="brand">
          <img src={logo} alt="" />
        </div>
        <div className="sidebar-section">
          <p className="sidebar-title">GENERAL</p>
          <ul>
            <li className="active">Dashboard</li>
            <li>
              Product
              <ul className="sub-menu">
                <li>Sneakers</li>
                <li>Jacket</li>
                <li>T-Shirt</li>
                <li>Bag</li>
              </ul>
            </li>
            <li>Transaction</li>
            <li>Customers</li>
            <li>Sales Report</li>
          </ul>
        </div>
        <div className="sidebar-section">
          <p className="sidebar-title">TOOLS</p>
          <ul>
            <li>Account & Settings</li>
            <li>Help</li>
            <li>Dark Mode</li>
          </ul>
        </div>
        <div className="profile">
          <img src={admin} alt="Guy Hawkins" />
          <div>
            <p>Guy Hawkins</p>
            <span>Admin</span>
          </div>
        </div>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <input
            type="text"
            placeholder="Search product"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="user-actions">
            <span>
              <img src={notifications} alt="" />
            </span>
            <span>
              <img src={mail} alt="" />
            </span>
            <div className="user-info">
              <img src={admin} alt="Guy Hawkins" />
              <div>
                <p>Guy Hawkins</p>
                <span>Admin</span>
              </div>
            </div>
          </div>
        </header>

        <section className="dashboard-overview">
          <h1>Dashboard</h1>
          <div className="sales-target">
            <p>Sales Target</p>
            <div className="target-progress">
              <span>$231,032,444</span>
              <input type="range" min="0" max="500000000" value="231032444" />
              <span>$500,000,000</span>
            </div>
          </div>

          <div className="stats-cards">
            <div className="card">
              Total Revenue <h2>${totalRevenue.toLocaleString()}</h2>
              <p>📈 +8.6%</p>
            </div>
            <div className="card">
              Total Customer <h2>5,000</h2>
              <p>📈 +1.5%</p>
            </div>
            <div className="card">
              Total Transactions <h2>12,000</h2>
              <p>📈 +3.6%</p>
            </div>
            <div className="card">
              Total Product <h2>5,000</h2>
              <p>📉 -1.5%</p>
            </div>
          </div>

          <div className="chart-section">
            <div className="chart">Sales chart here</div>
            <div className="promo-box">
              <h3>Increase your sales</h3>
              <p>Discover the proven methods to skyrocket your sales...</p>
              <button onClick={() => alert("Learn more clicked!")}>
                Learn More
              </button>
            </div>
          </div>

          <div className="bottom-section">
            <div className="map-box">Map with customer growth</div>
            <div className="product-list">
              <table>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Sales</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {salesData.map((sales, i) => (
                    <tr key={i}>
                      <td>Kanky Kitadakate (Green)</td>
                      <td>$20.00</td>
                      <td>{sales}</td>
                      <td>
                        <span className="status success">Success</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
