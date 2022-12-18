import Footer from "../components/Footer";
import react, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState({});
  const [subTotal, setSubTotal] = useState(0);

  useEffect(() => {
    console.log("useEffect ");

    try {
      if (localStorage.getItem("cart")) {
        setCart(JSON.parse(localStorage.getItem("cart")));
        saveCart(JSON.parse(localStorage.getItem("cart")));
      }
    } catch (error) {
      console.log(
        error + " Error while adding items to cart from local storage."
      );
      localStorage.clear();
    }
  }, []);

  const saveCart = (myCart) => {
    localStorage.setItem("cart", JSON.stringify(myCart));

    let subT = 0;
    let keys = Object.keys(myCart);
    for (let i = 0; i < keys.length; i++) {
      subT += myCart[keys[i]].price * myCart[keys[i]].qty;
    }
    setSubTotal(subT);
  };

  // adding to cart method
  const addToCart = (itemCode, qty, price, name, size, varient) => {
    let newCart = cart;

    if (itemCode in cart) {
      newCart[itemCode]["qty"] = cart[itemCode].qty + qty;
    } else {
      newCart[itemCode] = { qty: 1, price, name, size, varient };
    }

    setCart(newCart);
    saveCart(newCart);
    alert("Item added to Cart successfully.");
  };

  // fully clearing the cart method
  const clearCart = () => {
    setCart({});
    saveCart({});
    console.log("Cart has been cleared");
  };

  // Removing the element from cart method
  const removeFromCart = (itemCode, qty, price, name, size, varient) => {
    let newCart = JSON.parse(JSON.stringify(cart));

    if (itemCode in cart) {
      newCart[itemCode]["qty"] = cart[itemCode].qty - qty;
    }
    if (newCart[itemCode]["qty"] <= 0) {
      delete newCart[itemCode];
    }

    setCart(newCart);
    saveCart(newCart);
  };

  return (
    <>
      <Navbar
        key={subTotal}
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
        subTotal={subTotal}
      />
      <Component
        {...pageProps}
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
        subTotal={subTotal}
      />
      <Footer />
    </>
  );
}

export default MyApp;
