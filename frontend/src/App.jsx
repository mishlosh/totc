import NavBar from "./components/NavBar";
import Catering from "./pages/Catering";
import Home from "./pages/Home";
import Market from "./pages/Market";
import Menu from "./pages/Menu";
import Payment from "./pages/Payment";
import Landing from "./pages/Landing";
import { Cart } from "./pages/Cart/Cart";
import { Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { ShopContextProvider } from "./context/shop-context";
import { useQuery } from "@tanstack/react-query";
import { getItems, getCategories } from "./api/items";
import { QueryContextProvider } from "./context/query-context";

function App() {
  return (
    <div>
      <QueryContextProvider>
        <ShopContextProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Home />} />
            <Route path="/market" element={<Market />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/catering" element={<Catering />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/coffee" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </ShopContextProvider>
      </QueryContextProvider>
    </div>
  );
}

export default App;
