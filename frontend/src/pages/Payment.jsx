import './Payment.css';
import StripeContainer from '../api/StripeContainer';
import coffee from '../assets/coffee_bag.jpg'
import { useState } from 'react'

export default function Payment() {
  const [showItem, setShowItem] = useState(false)
  return (
    <div className="App">
      <h1>Taste Of The Carribean</h1>
      {showItem ? <StripeContainer/> : <> <h3>$10.00</h3> <img src={coffee} alt="Coffee" />
      <button onClick={() => setShowItem(true)}>Purchase Coffee</button></>}
    </div>
  );
}
