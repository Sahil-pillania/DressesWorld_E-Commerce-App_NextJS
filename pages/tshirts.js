import React from "react";
import mongoose from "mongoose";
import Link from "next/link";
import Product from "../models/Product";

const Tshirts = ({ products }) => {
  // console.log(products);
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 justify-center">
            {products.map((item) => {
              return (
                <Link
                  key={item._id}
                  passHref={true}
                  href={`/product/${item.slug}`}
                  className="lg:w-1/5 md:w-1/3 p-4 w-full m-2 shadow-md"
                >
                  <div className="flex flex-col ">
                    <div className="block relative  rounded overflow-hidden">
                      <img
                        alt="ecommerce"
                        className="object-cover object-top m-auto  md:w-full h-[38vh] sm:h-[52vh] md:h-full block"
                        src={item.img}
                      />
                    </div>
                    <div className="mt-4 text-center md:text-left bottom-0 ">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                        T-shirts
                      </h3>
                      <h2 className="text-gray-900 title-font text-lg font-medium">
                        {item.title}
                      </h2>
                      <p className="mt-1">{item.price}</p>
                      <span className="mt-1">S, M, L, XL, XXL</span>
                      {/* <span className="mt-1">₹1599</span> */}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export async function getServerSideProps(context) {
  //DB
  if (!mongoose.connections[0].readyState) {
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.MONGO_URI);
  }
  // Fetching products
  let products = await Product.find({ category: "tshirts" });

  return {
    props: { products: JSON.parse(JSON.stringify(products)) }, // will be passed to the page component as props
  };
}

export default Tshirts;
