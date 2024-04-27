import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import "./cart.css";

export const CartItem = (props) => {
  const { itemID, itemName, price, imagepath } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className="cartItem">
      <div className="description">
        <p>
          <b>{itemName}</b>
        </p>
        <p> Price: ${price}</p>
        <div className="countHandler">
          <button
            className="cartItem-bttn"
            onClick={() => removeFromCart(itemID)}
          >
            {" "}
            -{" "}
          </button>
          <input
            className="cartItem-Counter"
            value={cartItems[itemID]}
            onChange={(e) =>
              updateCartItemCount(Number(e.target.value), itemID)
            }
          />
          <button className="cartItem-bttn" onClick={() => addToCart(itemID)}>
            {" "}
            +{" "}
          </button>
        </div>
      </div>
    </div>
  );
};
