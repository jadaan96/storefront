import React from "react";
import { useSelector } from "react-redux";
import "./style.css";
function Checkout() {
  const product = useSelector((state) => state);

  return (
    <div>
      <section className="checkout-main">
        <div >Order Summary</div>
        <section className="card-container">
          {product.cart.cart.map((item) => (
            <div className="card" key={item.id}>
              <p>{item.name}</p>
              <div className="theprice">
                <img
                  className="imges"
                  src={`https://source.unsplash.com/random?${item.name}`}
                />
                <p>${item.price}</p>
              </div>
            </div>
          ))}
          <hr />
          <hr />
          <div className="total">
            <p>Total: </p>
            <p>
              $
              {product.cart.cart.reduce((total, item) => total + item.price, 0)}
            </p>
          </div>
        </section>
        <section className="lower-section">

        <section calssName="Billing-address">
            <h1>Billing-address</h1>
            <div className="input-div">
                <input className="pay-input" placeholder="FirstName"></input>
                <input className="pay-input"  placeholder="Address"></input>
                <input className="pay-input"  placeholder="City"></input>
                <input className="pay-input"  placeholder="State"></input>
                <input className="pay-input"  placeholder="Zip"></input>

            </div>
        </section>
        <section calssName="paymant-details">
            <h1>paymant-details</h1>
            <div className="input-div">
            <input placeholder="Cridt Card #"></input>
                <input className="pay-input"  placeholder="cvv"></input>
                <input className="pay-input"  placeholder="expiration" type="date"></input>
            </div>

        </section>
        </section>
        <button className="PAY-BUTTON"> PALACE YOUR ORDER </button>
      </section>
    </div>
  );
}

export default Checkout;
