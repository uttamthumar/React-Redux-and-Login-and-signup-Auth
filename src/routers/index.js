import React from "react";
import Cart from "../components/Cart"
import { Route, Routes } from "react-router-dom";
import {
  Login,
  Signup,
  Home,
  Profile,
  Error,
  About,
  Contact,
} from "../pages/index";
import Hom from "../components/Home"
import PrivateRoute from "../routers/Private";

const Router = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route   element={<PrivateRoute />}>
        <Route path="/profile" element={<Profile />} />
      </Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/hom" element={<Hom />}></Route>
      <Route path="*" element={<Error />}></Route>
    </Routes>
  );
};

export default Router;
