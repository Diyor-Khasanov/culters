import "./Home.scss";
import Logo from "./img/Logo.png";
import PanelClose from "./img/Panel-close.png";
import mail from "./img/mail.png";
import notifications from "./img/notifications.png";
import admin from "./img/admin.png";
import company from "./img/company.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="navbar">
        <div className="left">
          <img src={Logo} alt="logo" />
          <img src={PanelClose} className="two" alt="panel close" />
          <input type="text" placeholder="Search product" className="two" />
        </div>

        <div className="right">
          <button>
            <img src={mail} alt="mail" />
            <sup>2</sup>
          </button>
          <button>
            <img src={notifications} alt="notifications" />
            <sup>8</sup>
          </button>
          <span></span>
          <div className="img">
            <img src={admin} alt="admin" />
            <div className="box"></div>
            <div className="text">
              <h1 className="name">Guy Hawkins</h1>
              <p className="description">Admin</p>
            </div>
          </div>
        </div>
      </div>
      <div className="hero">
        <div className="dashboard">
          <div className="company">
            <img src={company} alt="company" />
            <div className="text">
              <p className="subtitle">Company</p>
              <h3 className="title">Kanky Store</h3>
            </div>
          </div>

          <h2 className="title">General</h2>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/">Transaction</Link>
            </li>
            <li>
              <Link to="/customer">Customers</Link>
            </li>
            <li>
              <Link to="/"> Sales report</Link>
            </li>
          </ul>
          <h2 className="title">TOOLS</h2>
          <ul>
            <li>
              <Link to="/"> Account & Settings</Link>
            </li>
            <li>
              <Link to="/"> Help</Link>
            </li>
            <li>
              Dark Mode 
              <input type="checkbox" />
            </li>
            <li>Guy Hawkins</li>
          </ul>
        </div>
        <div className="main"></div>
      </div>
    </div>
  );
}

export default Home;
