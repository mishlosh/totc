import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { QueryContext } from "../../context/query-context";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getItems, getCategories } from "../../api/items";

import "./cart.css";
export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const { marketItems, marketItemsLoading } = useContext(QueryContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();
  /*
  const { data: items, itemsError } = useQuery({
    queryKey: ["items"],
    queryFn: () => getItems(),
  });
*/
  if (marketItemsLoading) {
    return <h1>Loading....</h1>;
  }

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart cart-item">
        {marketItems.map((item) => {
          if (cartItems[item.itemID] !== 0) {
            return <CartItem data={item} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: ${totalAmount} </p>
          <button onClick={() => navigate("/market")}>
            {" "}
            Continue Shopping{" "}
          </button>
          <button
            onClick={() => {
              navigate("/payment");
            }}
          >
            {" "}
            Checkout{" "}
          </button>
        </div>
      ) : (
        <h1> Your Shopping Cart is Empty</h1>
      )}
    </div>
  );
};
