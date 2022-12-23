import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useRef } from "react";
import {
  AiOutlineShoppingCart,
  AiFillCloseSquare,
  AiOutlinePlusSquare,
  AiOutlineMinusSquare,
  AiOutlineClear,
} from "react-icons/ai";
import { IoBagCheckOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";

const Navbar = ({
  user,
  cart,
  addToCart,
  removeFromCart,
  clearCart,
  subTotal,
  logout,
}) => {
  const ref = useRef();

  const [dropdown, setDropdown] = useState(false);

  const toggleCart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.add("translate-x-full");
      ref.current.classList.remove("translate-x-0");
    }
  };

  const toggleDropdown = (e) => {
    let timer;

    if (e == "show") {
      //console.log("clearing the timer");
      clearTimeout(timer);
      setDropdown(true);
    } else {
      timer = setTimeout(() => {
        //console.log("setting timer");
        setDropdown(false);
      }, 4000);
    }
  };

  return (
    <div className="flex flex-col md:flex-row md:justify-start items-center justify-between align-middle p-3 shadow-md bg-purple-50 sticky top-0 z-1000">
      <div className="logo font-medium mr-auto sm:mr-1">
        <Link href={"/"}>
          <span className={styles.icon_name}>Dresses World</span>
        </Link>
      </div>
      <div className="nav mx-4 mt-2 sm:mt-0">
        <ul className="flex space-x-4 items-center font-medium text-sm ssm:font-normal">
          <Link
            href={"/"}
            className="hover:text-purple-700 hover:font-bold transition-all ease-in duration-200"
          >
            <li>Home</li>
          </Link>
          <Link
            href={"/tshirts"}
            className="hover:text-purple-700 hover:font-bold transition-all ease-in duration-200 "
          >
            <li>Tshirts</li>
          </Link>
          <Link
            href={"/hoodies"}
            className="hover:text-purple-700 hover:font-bold transition-all ease-in duration-200"
          >
            <li>Hoodies</li>
          </Link>
          <Link
            href={"/mugs"}
            className="hover:text-purple-700 hover:font-bold transition-all ease-in duration-200"
          >
            <li>Mugs</li>
          </Link>
          <Link
            href={"/stickers"}
            className="hover:text-purple-700 hover:font-bold transition-all ease-in duration-200"
          >
            <li>Stickers</li>
          </Link>
        </ul>
      </div>

      <div className="cart absolute top-1 sm:top-2 right-14 md:mx-4 my-2 cursor-pointer">
        {user.value && (
          <VscAccount
            onMouseOver={() => {
              toggleDropdown("show");
            }}
            onMouseLeave={() => {
              toggleDropdown("hide");
            }}
            className="text-xl sm:text-3xl mt-2 sm:mt-0  hover:text-purple-900 hover:scale-95 transition-transform duration-300"
          />
        )}
        {/* // drop down menu  - abosolute position */}

        {dropdown && (
          <div
            className="absolute right-0 mt-2  w-44 bg-purple-100 py-3 px-8 rounded shadow-lg"
            onMouseOver={() => {
              toggleDropdown("show");
            }}
            onMouseLeave={() => {
              toggleDropdown("hide");
            }}
          >
            <ul className="space-y-2">
              <Link href={"/myaccount"}>
                <li className="hover:font-semibold border-black hover:border-b-2 py-1">
                  My Account
                </li>
              </Link>
              <Link href={"/order"}>
                <li className="hover:font-semibold border-black hover:border-b-2 py-1">
                  Orders
                </li>
              </Link>

              <li
                onClick={logout}
                className="hover:font-semibold border-red-700 hover:border-b-2 hover:text-red-500 py-1"
              >
                Logout
              </li>
            </ul>
          </div>
        )}

        {!user.value && (
          <Link href={"/login"}>
            <div className="flex space-x-2">
              <button className="bg-purple-500 px-2 py-1 rounded-lg hover:bg-purple-700 hover:text-white">
                Login
              </button>
            </div>
          </Link>
        )}
      </div>
      <div
        onClick={toggleCart}
        className="cart absolute top-2 right-4 md:mx-4 my-2 cursor-pointer "
      >
        <div className="flex space-x-2">
          <AiOutlineShoppingCart className="text-2xl sm:text-3xl hover:text-purple-900 hover:scale-95 transition-transform duration-300" />
        </div>
      </div>

      {/* // sidebar  */}
      <div
        ref={ref}
        className={`sidebar absolute overflow-y-scroll top-0 right-0 bg-purple-100 py-10 px-4 transition-transform transform {Object.keys(cart).length !==0 ? 'translate-x-0' : 'translate-x-full'}  duration-500 w-[320px] z-1000 h-[100vh] shadow-sm`}
      >
        <span onClick={toggleCart} className="absolute top-4 right-4">
          <AiFillCloseSquare className="text-2xl text-red-400 cursor-pointer hover:text-red-600 hover:scale-110 hover:rounded-full" />
        </span>
        <h2 className="font-bold text-center">Shopping Cart</h2>
        <hr className="my-1 bg-black" />
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
                  <div className="w-1/3 flex items-center justify-center">
                    <AiOutlineMinusSquare
                      onClick={() => {
                        removeFromCart(
                          k,
                          1,
                          cart[k].price,
                          cart[k].name,
                          cart[k].size,
                          cart[k].variant
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
                          cart[k].variant
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
        <div className="text-center font-bold select-none my-2">
          Subtotal : ₹ {subTotal}
        </div>
        <hr />
        <div className="flex mx-auto">
          <Link href={"/checkout"}>
            <button
              onClick={toggleCart}
              disabled={Object.keys(cart).length == 0}
              className="flex mx-auto my-2  text-white bg-purple-500 border-0 py-2 px-4 focus:outline-none hover:bg-purple-800 transition-colors rounded text-sm"
            >
              <IoBagCheckOutline className="my-auto mx-1" />
              Checkout
            </button>
          </Link>
          <button
            disabled={Object.keys(cart).length == 0}
            onClick={clearCart}
            className="flex mx-auto my-2  text-white bg-yellow-500 border-0 py-2 px-4 focus:outline-none hover:bg-yellow-600 transition-colors rounded text-sm"
          >
            <AiOutlineClear className="my-auto mx-1" />
            Clear Cart
          </button>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Navbar;
