import NavBar from "./components/NavBar";
import Catering from "./pages/Catering";
import Home from "./pages/Home";
import Market from "./pages/Market";
import Menu from "./pages/Menu";
import Payment from "./pages/Payment";
import { Cart } from "./pages/Cart/Cart";
import { Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { ShopContextProvider } from "./context/shop-context";
import { useQuery } from "@tanstack/react-query";
import { getItems, getCategories } from "./api/items";

const POSTS = [
  { id: 1, title: "Post 1" },
  { id: 2, title: "Post 2" },
];

function App() {
  const { data: items, itemsError } = useQuery({
    queryKey: ["items"],
    queryFn: () => getItems(),
  });
  const { data: categories, catsError } = useQuery({
    queryKey: ["categories"],
    queryFn: () => getCategories(),
  });

  console.log(items);
  console.log(categories);
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
          <Route path="/payment" element={<Payment />} />
          <Route path="/coffee" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </ShopContextProvider>
    </div>
  );
}

export default App;
