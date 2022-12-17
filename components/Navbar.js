import React from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useRef } from "react";
import {
  AiOutlineShoppingCart,
  AiFillCloseCircle,
  AiOutlinePlusSquare,
  AiOutlineMinusSquare,
  AiOutlineClear,
} from "react-icons/ai";
import { IoBagCheckOutline } from "react-icons/io5";

const Navbar = () => {
  const ref = useRef();

  const toggleCart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.add("translate-x-full");
      ref.current.classList.remove("translate-x-0");
    }
  };

  return (
    <div className="flex flex-col md:flex-row md:justify-start items-center justify-between align-middle p-3 shadow-md bg-slate-300 z-50">
      <div className="logo font-medium">
        <Link href={"/"}>
          <span className={styles.icon_name}>Dresses World</span>
        </Link>
      </div>
      <div className="nav mx-4">
        <ul className="flex space-x-4 items-center font-medium">
          <Link href={"/"}>
            <li>Home</li>
          </Link>
          <Link href={"/tshirts"}>
            <li>Tshirts</li>
          </Link>
          <Link href={"/hoodies"}>
            <li>Hoodies</li>
          </Link>
          <Link href={"/mugs"}>
            <li>Mugs</li>
          </Link>
          <Link href={"/stickers"}>
            <li>Stickers</li>
          </Link>
        </ul>
      </div>
      <div
        onClick={toggleCart}
        className="cart absolute top-2 right-4 md:mx-4 my-2 cursor-pointer hover:text-purple-400"
      >
        <div>
          <AiOutlineShoppingCart className="text-2xl sm:text-3xl" />
        </div>
      </div>
      {/* // sidebar  */}
      <div
        ref={ref}
        className="sidebar absolute top-0 right-0 bg-purple-200 py-10 px-4 transition-transform transform translate-x-full duration-500 w-[320px] h-full"
      >
        <span onClick={toggleCart} className="absolute top-4 right-4">
          <AiFillCloseCircle className="text-2xl text-red-400 cursor-pointer hover:text-red-600 hover:scale-110 hover:rounded-full" />
        </span>
        <h2 className="font-bold text-center">Shopping Cart</h2>
        <hr className="my-1 bg-black" />
        <ol className="list-decimal ml-2 font-semibold">
          <li>
            <div className="item flex my-2">
              <div className="w-2/3 font-semibold">
                T-shirts- wear it and enjoy it.
              </div>
              <div className="w-1/3 flex items-center justify-center">
                <AiOutlineMinusSquare className="text-xl cursor-pointer hover:text-purple-500 hover:scale-105 transition-all" />
                <span className="mx-2"> 1 </span>
                <AiOutlinePlusSquare className="text-xl cursor-pointer hover:text-purple-500 hover:scale-105 transition-all" />
              </div>
            </div>
          </li>
          <li>
            <div className="item flex my-2">
              <div className="w-2/3 font-semibold">
                T-shirts- wear it and enjoy it.
              </div>
              <div className="w-1/3 flex items-center justify-center">
                <AiOutlineMinusSquare className="text-xl cursor-pointer hover:text-purple-500 hover:scale-105 transition-all" />
                <span className="mx-2"> 1 </span>
                <AiOutlinePlusSquare className="text-xl cursor-pointer hover:text-purple-500 hover:scale-105 transition-all" />
              </div>
            </div>
          </li>
          <li>
            <div className="item flex my-2">
              <div className="w-2/3 font-semibold">
                T-shirts- wear it and enjoy it.
              </div>
              <div className="w-1/3 flex items-center justify-center">
                {" "}
                <AiOutlineMinusSquare className="text-xl cursor-pointer hover:text-purple-500 hover:scale-105 transition-all" />
                <span className="mx-2"> 1 </span>
                <AiOutlinePlusSquare className="text-xl cursor-pointer hover:text-purple-500 hover:scale-105 transition-all" />
              </div>
            </div>
          </li>
          <li>
            <div className="item flex my-2">
              <div className="w-2/3 font-semibold">
                T-shirts- wear it and enjoy it.
              </div>
              <div className="w-1/3 flex items-center justify-center">
                <AiOutlineMinusSquare className="text-xl cursor-pointer hover:text-purple-500 hover:scale-105 transition-all" />
                <span className="mx-2"> 7 </span>
                <AiOutlinePlusSquare className="text-xl cursor-pointer hover:text-purple-500 hover:scale-105 transition-all" />
              </div>
            </div>
          </li>
        </ol>
        <hr />
        <div className="flex mx-auto">
          <button className="flex mx-auto my-2  text-white bg-purple-500 border-0 py-2 px-4 focus:outline-none hover:bg-purple-800 transition-colors rounded text-sm">
            <IoBagCheckOutline className="my-auto mx-1" />
            Checkout
          </button>
          <button className="flex mx-auto my-2  text-white bg-yellow-500 border-0 py-2 px-4 focus:outline-none hover:bg-yellow-600 transition-colors rounded text-sm">
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
