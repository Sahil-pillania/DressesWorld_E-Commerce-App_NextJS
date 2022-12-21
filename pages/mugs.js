import React from "react";
import mongoose from "mongoose";
import Link from "next/link";
import Product from "../models/Product";

const Mugs = ({ products }) => {
  //console.log(products);
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 justify-center">
            {Object.keys(products).length === 0 && (
              <p className="h-28">
                Sorry, Mugs are currently not in Stock. Stay tuned.{" "}
              </p>
            )}
            {Object.keys(products).map((item) => {
              return (
                <Link
                  key={products[item]._id}
                  passHref={true}
                  href={`/product/${products[item].slug}`}
                  className="lg:w-1/5 md:w-1/3 p-4 w-full m-2 shadow-md"
                >
                  <div className="flex flex-col ">
                    <div className="block relative  rounded overflow-hidden">
                      <img
                        alt="ecommerce"
                        className="object-cover object-top m-auto  md:w-full h-[38vh] sm:h-[52vh] md:h-full block"
                        src={products[item].img}
                      />
                    </div>
                    <div className="mt-4 text-center md:text-left bottom-0 ">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                        Hoodies
                      </h3>
                      <h2 className="text-gray-900 title-font text-lg font-medium">
                        {products[item].title}
                      </h2>
                      <p className="mt-1"> ₹{products[item].price}</p>
                      <div className="mt-1 space-x-2">
                        {products[item].size.includes("S") && (
                          <span className="border px-1 border-gray-300">S</span>
                        )}
                        {products[item].size.includes("M") && (
                          <span className="border px-1 border-gray-300">M</span>
                        )}
                        {products[item].size.includes("L") && (
                          <span className="border px-1 border-gray-300">L</span>
                        )}
                        {products[item].size.includes("XL") && (
                          <span className="border px-1 border-gray-300">
                            XL
                          </span>
                        )}
                        {products[item].size.includes("XXL") && (
                          <span className="border px-1 border-gray-300">
                            XXL
                          </span>
                        )}
                      </div>
                      <div className="mt-2 space-x-1 flex">
                        {products[item].color.includes("Blue") && (
                          <span>
                            <button className="flex mt-o mr-auto text-white bg-blue-500 border-2  focus:outline-none hover:bg-blue-600 rounded-full w-6 h-6 select-none"></button>
                          </span>
                        )}
                        {products[item].color.includes("Green") && (
                          <span>
                            <button className="flex mt-o mr-auto text-white bg-green-500 border-2  focus:outline-none hover:bg-green-600 rounded-full w-6 h-6 select-none"></button>
                          </span>
                        )}
                        {products[item].color.includes("Red") && (
                          <span>
                            <button className="flex mt-o mr-auto text-white bg-red-500 border-2  focus:outline-none hover:bg-red-600 rounded-full w-6 h-6 select-none"></button>
                          </span>
                        )}
                        {products[item].color.includes("Gray") && (
                          <span>
                            <button className="flex mt-o mr-auto text-white bg-gray-500 border-2  focus:outline-none hover:bg-gray-600 rounded-full w-6 h-6 select-none"></button>
                          </span>
                        )}
                        {products[item].color.includes("Black") && (
                          <span>
                            <button className="flex mt-o mr-auto text-white bg-black-500 border-2  focus:outline-none hover:bg-black-600 rounded-full w-6 h-6 select-none"></button>
                          </span>
                        )}
                        {products[item].color.includes("Yellow") && (
                          <span>
                            <button className="flex mt-o mr-auto text-white bg-yellow-500 border-2  focus:outline-none hover:bg-yellow-600 rounded-full w-6 h-6 select-none"></button>
                          </span>
                        )}
                        {products[item].color.includes("White") && (
                          <span>
                            <button className="flex mt-o mr-auto text-white bg-white-500 border border-black focus:outline-none hover:bg-white-600 rounded-full w-6 h-6 select-none"></button>
                          </span>
                        )}
                      </div>
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
  let products = await Product.find({ category: "mugs" });
  let mugs = {};
  for (let item of products) {
    if (item.title in mugs) {
      if (
        !mugs[item.title].color.includes(item.color) &&
        item.availableQty > 0
      ) {
        mugs[item.title].color.push(item.color);
      }
      if (!mugs[item.title].size.includes(item.size) && item.availableQty > 0) {
        mugs[item.title].size.push(item.size);
      }
    } else {
      mugs[item.title] = JSON.parse(JSON.stringify(item));
      if (item.availableQty > 0) {
        mugs[item.title].color = [item.color];
        mugs[item.title].size = [item.size];
      }
    }
  }
  return {
    props: { products: JSON.parse(JSON.stringify(mugs)) }, // will be passed to the page component as props
  };
}

export default Mugs;
