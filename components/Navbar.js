import React from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-start items-center justify-between align-middle p-3 shadow-md bg-slate-300">
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
      <div className="cart absolute top-2 right-4 md:mx-4 my-3">
        <div>
          <AiOutlineShoppingCart className="text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
