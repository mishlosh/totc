import "./Payment.css";
import StripeContainer from "../api/StripeContainer";
import coffee from "../assets/coffee_bag.jpg";
import { useState, useContext } from "react";
import { ShopContext } from "../context/shop-context";

export default function Payment() {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const [showItem, setShowItem] = useState(false);
  return (
    <div className="App">
      <h1>Taste Of The Carribean</h1>
      {showItem ? (
        <StripeContainer />
      ) : (
        <>
          {" "}
          <h3>${getTotalCartAmount()}</h3> <img src={coffee} alt="Coffee" />
          <button onClick={() => setShowItem(true)}>Purchase Coffee</button>
        </>
      )}
    </div>
  );
}
