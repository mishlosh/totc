import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const CartItem = (props) => {
  const { itemID, itemName, price, imagepath } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className="cartItem">
      {imagepath == null || imagepath == "null" ? (
        <img src="../images/placeholder.png" />
      ) : (
        <img src={imagepath} />
      )}
      <div className="description">
        <p>
          <b>{itemName}</b>
        </p>
        <p> Price: ${price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(itemID)}> - </button>
          <input
            value={cartItems[itemID]}
            onChange={(e) =>
              updateCartItemCount(Number(e.target.value), itemID)
            }
          />
          <button onClick={() => addToCart(itemID)}> + </button>
        </div>
      </div>
    </div>
  );
};
