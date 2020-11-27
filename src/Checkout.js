import React from "react";
import "./Checkout.css";
import { Link } from "react-router-dom";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket, user }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <div>
          <h3>Hello {user ? user.email + "," : "Guest,"}</h3>
          <h2 className="checkout__title">Your shopping Basket</h2>

          {basket.length ? (
            basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))
          ) : (
            <>
              <p className="no__items">No items in the basket</p>

              <Link to="/home">
                <button className="go__shopping"> Go to shopping</button>
              </Link>
            </>
          )}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;