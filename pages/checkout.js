import React from "react";
import Link from "next/link";
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from "react-icons/ai";
import { IoBagCheckOutline } from "react-icons/io5";

const Checkout = ({ cart, addToCart, removeFromCart, subTotal }) => {
  return (
    <div className="container  w-[100%]  sm:w-[80%] m-auto p-4">
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
        <button className="flex  my-2  text-white bg-purple-500 border-0 py-2 px-3 focus:outline-none hover:bg-purple-800 transition-colors duration-500 rounded text-sm">
          <IoBagCheckOutline className="my-auto mx-1" />
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default Checkout;
