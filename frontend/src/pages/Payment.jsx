import "./Payment.css";
import StripeContainer from "../api/StripeContainer";
import coffee from "../assets/coffee_bag.jpg";
import { useState, useContext } from "react";
import { ShopContext } from "../context/shop-context";

export default function Payment() {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const [showItem, setShowItem] = useState(true);
  return (
    <div className="App">
      <h1>Taste Of The Carribean</h1>
      <form>
        <div className="container">
          <div className="row">
            <div className="col">
              <label for="fname">First name:</label>
              <br />
              <input type="text" id="fname" name="fname" />
            </div>
            <div className="col">
              <label for="lname">Last name:</label>
              <br />
              <input type="text" id="lname" name="lname" />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label for="street">Street Address:</label>
              <br />

              <input type="text" id="street" name="street" />
            </div>
            <div className="col">
              <label for="city">City:</label>

              <br />
              <input type="text" id="city" name="city" />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label for="state">State:</label>
              <br />
              <select>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District Of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
              </select>
            </div>
            <div className="col">
              <label for="zip">Zip:</label>
              <br />
              <input type="number" id="zip" name="zip" maxLength={9} />
            </div>
          </div>
        </div>
      </form>
      <br></br>
      {showItem ? (
        <StripeContainer />
      ) : (
        <>
          {" "}
          <h3>${getTotalCartAmount()}</h3> <img src={coffee} alt="Coffee" />
          <button className="checkout-bttn" onClick={() => setShowItem(true)}>
            Purchase Coffee
          </button>
        </>
      )}
    </div>
  );
}
