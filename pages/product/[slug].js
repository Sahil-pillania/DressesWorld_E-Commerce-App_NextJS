import React, { useState } from "react";
import { useRouter } from "next/router";
import mongoose from "mongoose";
import Product from "../../models/Product";

const Slug = ({ addToCart, product, variants }) => {
  console.log(variants);
  const router = useRouter();
  const { slug } = router.query;
  const [pin, setPin] = useState();
  const [service, setService] = useState();

  const onChangePin = (e) => {
    setPin(e.target.value);
  };

  const checkService = async () => {
    let pins = await fetch("http://localhost:3000/api/pincode");
    let pinJson = await pins.json();
    // console.log(pin, pinJson);

    if (pinJson.includes(parseInt(pin))) {
      setService(true);
      //console.log("done");
    } else {
      setService(false);
      //console.log("not done");
    }
  };

  const [color, setColor] = useState(product.color);
  const [size, setSize] = useState(product.size);

  const refreshVariants = (newColor, newSize) => {
    console.log(" new color and size are " + newColor, newSize);
    let url = `http://localhost:3000/product/${variants[newColor][newSize]["slug"]}`;
    window.location = url;
  };

  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-16 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto px-2 sm:px-24 md:px-2 object-cover object-top rounded-lg border border-gray-300 "
              src={product.img}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                {product.category}
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {product.title} ({product.size}/{product.color})
              </h1>

              {/* <div className="flex mb-4">
                <span className="flex items-center">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-purple-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-purple-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-purple-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-purple-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-purple-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <span className="text-gray-600 ml-3">4 Reviews</span>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div> */}

              <p className="leading-relaxed">{product.desc}</p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex">
                  {/* // Color  */}
                  <span className="mr-3">Color</span>
                  {Object.keys(variants).includes("White") &&
                    Object.keys(variants["White"]).includes(size) && (
                      <button
                        onClick={() => {
                          refreshVariants("White", size);
                        }}
                        className={`border-2 ml-1 rounded-full w-6 h-6 bg-white focus:outline-none ${
                          color === "White" ? "border-black" : "border-gray-400"
                        }`}
                      ></button>
                    )}

                  {Object.keys(variants).includes("Red") &&
                    Object.keys(variants["Red"]).includes(size) && (
                      <button
                        onClick={() => {
                          refreshVariants("Red", size);
                        }}
                        className={`border-2 ml-1 bg-red-700 rounded-full w-6 h-6 focus:outline-none ${
                          color === "Red" ? '"border-black"' : "border-gray-400"
                        }`}
                      ></button>
                    )}
                  {Object.keys(variants).includes("Blue") &&
                    Object.keys(variants["Blue"]).includes(size) && (
                      <button
                        onClick={() => {
                          refreshVariants("Blue", size);
                        }}
                        className={`border-2  ml-1 bg-blue-500 rounded-full w-6 h-6 focus:outline-none ${
                          color === "Blue" ? "border-black" : "border-gray-400"
                        }`}
                      ></button>
                    )}
                  {Object.keys(variants).includes("Green") &&
                    Object.keys(variants["Green"]).includes(size) && (
                      <button
                        onClick={() => {
                          refreshVariants("Green", size);
                        }}
                        className={`border-2  ml-1 bg-green-500 rounded-full w-6 h-6 focus:outline-none ${
                          color === "Green" ? "border-black" : "border-gray-400"
                        }`}
                      ></button>
                    )}
                  {Object.keys(variants).includes("Yellow") &&
                    Object.keys(variants["Yellow"]).includes(size) && (
                      <button
                        onClick={() => {
                          refreshVariants("Yellow", size);
                        }}
                        className={`border-2  ml-1 bg-yellow-500 rounded-full w-6 h-6 focus:outline-none ${
                          color === "Yellow"
                            ? "border-black"
                            : "border-gray-400"
                        }`}
                      ></button>
                    )}
                  {Object.keys(variants).includes("Gray") &&
                    Object.keys(variants["Gray"]).includes(size) && (
                      <button
                        onClick={() => {
                          refreshVariants("Gray", size);
                        }}
                        className={`border-2  ml-1 bg-gray-600 rounded-full w-6 h-6 focus:outline-none ${
                          color === "Gray" ? "border-black" : "border-gray-400"
                        }`}
                      ></button>
                    )}
                  {Object.keys(variants).includes("Black") &&
                    Object.keys(variants["Black"]).includes(size) && (
                      <button
                        onClick={() => {
                          refreshVariants("Black", size);
                        }}
                        className={`border-2  ml-1 bg-black-500 rounded-full w-6 h-6 focus:outline-none ${
                          color === "Black" ? "border-black" : "border-gray-400"
                        }`}
                      ></button>
                    )}
                </div>
                {/* // Size  */}
                <div className="flex ml-6 items-center">
                  <span className="mr-3">Size</span>
                  <div className="relative">
                    <select
                      value={size}
                      onChange={(e) => {
                        refreshVariants(color, e.target.value);
                      }}
                      className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-purple-200 focus:border-purple-500 text-base pl-3 pr-10"
                    >
                      {Object.keys(variants[color]).includes("S") && (
                        <option value={"S"}>S</option>
                      )}
                      {Object.keys(variants[color]).includes("M") && (
                        <option value={"M"}>M</option>
                      )}
                      {Object.keys(variants[color]).includes("L") && (
                        <option value={"L"}>L</option>
                      )}
                      {Object.keys(variants[color]).includes("XL") && (
                        <option value={"XL"}>XL</option>
                      )}
                      {Object.keys(variants[color]).includes("XXL") && (
                        <option value={"XXL"}>XXL</option>
                      )}
                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="title-font font-medium text-2xl text-gray-900">
                  ₹1599
                </span>
                <div className="my-3 flex">
                  <button className="flex mr-3 text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded select-none">
                    Buy Now
                  </button>
                  <button
                    onClick={() => {
                      addToCart(
                        slug,
                        1,
                        product.price,
                        product.title,
                        size,
                        color
                      );
                    }}
                    className="flex mr-auto text-white bg-yellow-500 border-0 py-2 px-4 focus:outline-none  hover:bg-yellow-600 rounded select-none"
                  >
                    Add to Cart
                  </button>
                  <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4 select-none">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                    </svg>
                  </button>
                </div>
              </div>
              <hr className="bg-gray-400" />
              <div className="pincode flex flex-wrap space-y-2 ssm:space-y-0 mt-6 space-x-2 text-sm">
                <input
                  type="text"
                  onChange={onChangePin}
                  name="pin"
                  value={pin}
                  className=" border-2 rounded border-gray-400 w-72 p-2"
                  placeholder="Check availability of your area..."
                />
                <button
                  onClick={checkService}
                  className="flex mt-o mr-auto text-white bg-gray-500 border-0 py-2 px-4 focus:outline-none  hover:bg-gray-600 rounded select-none"
                >
                  Check Pincode
                </button>
              </div>
              {service && service != null && (
                <div className="text-green-400 text-sm mt-1 message">
                  This pincode is Serviceable.
                </div>
              )}
              {!service && service != null && (
                <div className="text-red-400 text-sm mt-1 message">
                  Sorry, We don&apos;t deliver to this pincode.
                </div>
              )}
              {!service && service == null && <div className="message"></div>}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export async function getServerSideProps(context) {
  //DB
  if (!mongoose.connections[0].readyState) {
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.MONGO_URI);
  }
  // Fetching product using slug
  let product = await Product.findOne({ slug: context.query.slug });
  let variants = await Product.find({ title: product.title });
  let colorSizeSlug = {};
  for (let item of variants) {
    if (Object.keys(colorSizeSlug).includes(item.color)) {
      colorSizeSlug[item.color][item.size] = { slug: item.slug };
    } else {
      colorSizeSlug[item.color] = {};
      colorSizeSlug[item.color][item.size] = { slug: item.slug };
    }
  }

  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
      variants: JSON.parse(JSON.stringify(colorSizeSlug)),
    }, // will be passed to the page component as props
  };
}

export default Slug;
