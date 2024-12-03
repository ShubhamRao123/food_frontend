import "./App.css";
import { Login, Register, Home, Product } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Checkout from "./pages/checkout";
import Address from "./pages/address";
import Payment from "./pages/payment";
import OrderSuccessful from "./pages/orderSuccessful";
import Profile from "./pages/profile";
import EditProfile from "./pages/editProfile";
import EditPayment from "./pages/editPayment";
import SharedCart from "./pages/shareCart";
import EditAddress from "./pages/editAddress";
import UpdateAddress from "./pages/updateAddress";

function App() {
  return (
    <>
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={<Register />}></Route>
          <Route path="/restaurant/:id" element={<Product />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="/address" element={<Address />}></Route>
          <Route path="/address/:id" element={<UpdateAddress />}></Route>
          <Route path="/addAddress" element={<EditAddress />}></Route>
          <Route path="/payment" element={<Payment />}></Route>
          <Route path="/orderSuccessful" element={<OrderSuccessful />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/editprofile" element={<EditProfile />}></Route>
          <Route path="/editpayment" element={<EditPayment />}></Route>
          <Route path="/shared-cart/:shareToken" element={<SharedCart />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </>
  );
}

export default App;
