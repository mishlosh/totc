import React, { useContext } from "react";
import { ShopContext } from "../context/shop-context";

function FoodItemCard({ itemId, itemName, imagepath, category, price }) {
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[itemId];

  return (
    <>
      {
        <div className="card" style={{ width: "16rem" }}>
          {imagepath == null || imagepath == "null" ? (
            <img
              src="../images/placeholder.png"
              className="card-img-top"
              width="100px"
              height="100px"
              alt=""
            />
          ) : (
            <img
              src={imagepath}
              className="card-img-top"
              width="100px"
              height="100px"
              alt=""
            />
          )}
          <div className="card-body">
            {}
            <h5 className="card-title">{itemName}</h5>
            <div className="container">
              {" "}
              <div className="row">
                <div className="col col-sm-6">
                  <p className="card-text">${price}</p>
                </div>
                <div className="col col-sm-6">
                  <button
                    className="addToCartBttn"
                    onClick={() => addToCart(itemId)}
                  >
                    + {cartItemCount > 0 && <> ({cartItemCount})</>}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
}

export default FoodItemCard;
