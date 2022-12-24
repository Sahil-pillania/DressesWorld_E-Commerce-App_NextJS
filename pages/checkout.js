import React, { useState } from "react";
import Link from "next/link";
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from "react-icons/ai";
import { IoBagCheckOutline } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Checkout = ({ cart, addToCart, removeFromCart, subTotal }) => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",

    address: "",
  });
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");

  const handlePincode = async (e) => {
    setPincode(e.target.value);
    if (e.target.value.length == 6) {
      //console.log("calling");
      let pins = await fetch("http://localhost:3000/api/pincode");
      let pinJson = await pins.json();
      console.log(e.target.value);
      console.log(pinJson);
      if (Object.keys(pinJson).includes(e.target.value)) {
        //console.log("stateis :" + pinJson[e.target.value][1]);
        setState(pinJson[e.target.value][1]);
        setCity(pinJson[e.target.value][0]);
      }
    } else {
      setState("");
      setCity("");
    }
  };

  const payNow = () => {
    console.log(data, subTotal);
    // alert(
    //   "Your data is :" + JSON.stringify(data) + "Pay value is :" + subTotal
    // );
    toast.success(
      "Your data is :" + JSON.stringify(data) + "Pay value is :" + subTotal,
      {
        position: "top-center",
        autoClose: 3900,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      }
    );
    setData({
      name: "",
      email: "",
      phone: "",
      pincode: "",
      address: "",
    });
  };
  return (
    <div className="container  w-[100%]  sm:w-[80%] m-auto p-4">
      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <h1 className="font-bold text-2xl my-8 text-center uppercase underline">
        Checkout
      </h1>
      <h2 className="font-bold text-xl">1. Delivery Details</h2>
      <div className="mx-auto flex flex-wrap px-10 my-2">
        <div className="px-2 w-full sm:w-1/2">
          <div className=" mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              onChange={(e) => {
                setData({ ...data, [e.target.name]: e.target.value });
              }}
              value={data.name}
              name="name"
              className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              required
            />
          </div>
        </div>
        <div className="px-2 w-full sm:w-1/2">
          <div className=" mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              onChange={(e) => {
                setData({ ...data, [e.target.name]: e.target.value });
              }}
              value={data.email}
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              required
            />
          </div>
        </div>
        <div className="px-2 w-full">
          <div className=" mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-600"
            >
              Address
            </label>
            <textarea
              type="text"
              id="address"
              name="address"
              onChange={(e) => {
                setData({ ...data, [e.target.name]: e.target.value });
              }}
              value={data.address}
              className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
        </div>
        {/* phone, city ,state, pincode */}
        <div className="px-2 w-full sm:w-1/2">
          <div className=" mb-4">
            <label htmlFor="phone" className="leading-7 text-sm text-gray-600">
              Mobile No.
            </label>
            <input
              type="number"
              id="phone"
              onChange={(e) => {
                setData({ ...data, [e.target.name]: e.target.value });
              }}
              value={data.phone}
              name="phone"
              className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              required
            />
          </div>
        </div>
        {/* Pincode  */}
        <div className="px-2 w-full sm:w-1/2">
          <div className=" mb-4">
            <label
              htmlFor="pincode"
              className="leading-7 text-sm text-gray-600"
            >
              Pincode
            </label>
            <input
              type="number"
              id="pincode"
              name="pincode"
              value={pincode}
              onChange={handlePincode}
              className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              required
            />
          </div>
        </div>
        {/* State  */}
        <div className="px-2 w-full sm:w-1/2">
          <div className=" mb-4">
            <label htmlFor="state" className="leading-7 text-sm text-gray-600">
              State
            </label>
            <input
              type="text"
              id="state"
              onChange={(e) => {
                setState(e.target.value);
              }}
              value={state}
              name="state"
              className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              required
              readOnly
            />
          </div>
        </div>
        {/* // City  */}
        <div className="px-2 w-full sm:w-1/2">
          <div className=" mb-4">
            <label htmlFor="city" className="leading-7 text-sm text-gray-600">
              City
            </label>
            <input
              type="text"
              id="city"
              onChange={(e) => {
                setCity({ ...data, [e.target.name]: e.target.value });
              }}
              value={city}
              name="city"
              className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              required
              readOnly
            />
          </div>
        </div>
      </div>
      <h2 className="font-bold text-xl">2. Review Cart Items</h2>
      <div className="sidebar  bg-purple-50 py-10 px-4 m-auto w-[80%] sm:w-[90%] z-1000 h-auto shadow-sm rounded">
        {/* <hr className="my-1 bg-black" /> */}
        <ol className="list-decimal ml-2 font-semibold">
          {Object.keys(cart).length == 0 && (
            <div className=" font-normal my-4"> No items to show in cart.</div>
          )}
          {Object.keys(cart).map((k) => {
            return (
              <li key={k}>
                <div className="item flex my-2">
                  <div className="w-2/3 font-semibold">
                    {cart[k].name}({cart[k].size}/{cart[k].variant})
                  </div>
                  <div className="w-1/3 flex  items-center justify-center">
                    <AiOutlineMinusSquare
                      onClick={() => {
                        removeFromCart(
                          k,
                          1,
                          cart[k].price,
                          cart[k].name,
                          cart[k].size,
                          cart[k].varient
                        );
                      }}
                      className="text-xl cursor-pointer hover:text-purple-500 hover:scale-105 transition-all"
                    />
                    <span className="mx-2"> {cart[k].qty} </span>
                    <AiOutlinePlusSquare
                      onClick={() => {
                        addToCart(
                          k,
                          1,
                          cart[k].price,
                          cart[k].name,
                          cart[k].size,
                          cart[k].varient
                        );
                      }}
                      className="text-xl cursor-pointer hover:text-purple-500 hover:scale-105 transition-all"
                    />
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
        <hr />
        <div className="text-center font-bold select-none">
          Subtotal : ₹ {subTotal}
        </div>
      </div>
      <div className="flex m-auto w-[80%] sm:w-[90%] z-1000">
        <button
          onClick={payNow}
          className="flex  my-2  text-white bg-purple-500 border-0 py-2 px-3 focus:outline-none hover:bg-purple-800 transition-colors duration-500 rounded text-sm"
        >
          <IoBagCheckOutline className="my-auto mx-1 " />
          <span className="font-bold mx-1">Pay</span> ₹{subTotal}
        </button>
      </div>
    </div>
  );
};

export default Checkout;
