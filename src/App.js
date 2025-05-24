import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import AddCustomer from "./pages/AddCustomer/AddCustomer";
import AddProduct from "./pages/AddProduct/AddProduct";
import Customer from "./pages/Customer/Customer";
import EditProduct from "./pages/EditProduct/EditProduct";
import Login from "./pages/Login/Login";
import Order from "./pages/Order/Order";
import Products from "./pages/Products/Products";
import ProfilePersonalAccount from "./pages/ProfilePersonalAccount/ProfilePersonalAccount";
import ProfileSecurity from "./pages/ProfileSecurity/ProfileSecurity";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-customer" element={<AddCustomer />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/edit-product" element={<EditProduct />} />
        <Route path="/login" element={<Login />} />
        <Route path="/order" element={<Order />} />
        <Route path="/products" element={<Products />} />
        <Route path="/profile-personal-account" element={<ProfilePersonalAccount />} />
        <Route path="/profile-security" element={<ProfileSecurity />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
