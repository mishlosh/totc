import NavBar from "./components/NavBar";
import Catering from "./pages/Catering";
import Home from "./pages/Home";
import Market from "./pages/Market";
import Menu from "./pages/Menu";
import { Cart } from "./pages/Cart/Cart";
import { Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { ShopContextProvider } from "./context/shop-context";

function App() {
  return (
    <div>
      <ShopContextProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/market" element={<Market />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/catering" element={<Catering />} />
          <Route path="/coffee" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </ShopContextProvider>
    </div>
  );
}

export default App;
