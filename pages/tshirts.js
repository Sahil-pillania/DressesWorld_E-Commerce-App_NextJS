import React from "react";
import Link from "next/link";

const Tshirts = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 justify-center">
            <Link
              href={"/product/wear-tshirt"}
              className="lg:w-1/5 md:w-1/3 p-4 w-full m-2 shadow-md"
            >
              <div>
                <div className="block relative  rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="object-cover object-top m-auto md:m-0 md:w-full h-[38vh] sm:h-[52vh] md:h-full block"
                    src="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71dTI9r18IL._UY879_.jpgges/W/WEBP_402378-T2/images/I/71dTI9r18IL._UY879_.jpg"
                  />
                </div>
                <div className="mt-4 text-center md:text-left">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    T-shirts
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    The tshirt
                  </h2>
                  <span className="mt-1">₹1599</span>
                  <span className="mt-1">S, M, L, XL, XXL</span>
                  <span className="mt-1">₹1599</span>
                </div>
              </div>
            </Link>

            {/* static cards  */}
            <div className="lg:w-1/5 md:w-1/3 p-4 w-full m-2 shadow-md">
              <a className="block relative  rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-top m-auto md:m-0 md:w-full h-[38vh] md:h-full block"
                  src="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71dTI9r18IL._UY879_.jpg"
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Shooting Stars
                </h2>
                <p className="mt-1">$21.15</p>
              </div>
            </div>
            <div className="lg:w-1/5 md:w-1/3 p-4 w-full m-2 shadow-md">
              <a className="block relative  rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-top m-auto md:m-0 md:w-full h-[38vh] md:h-full block"
                  src="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71dTI9r18IL._UY879_.jpg"
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Neptune
                </h2>
                <p className="mt-1">$12.00</p>
              </div>
            </div>
            <div className="lg:w-1/5 md:w-1/3 p-4 w-full m-2 shadow-md">
              <a className="block relative  rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71dTI9r18IL._UY879_.jpg"
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  The 400 Blows
                </h2>
                <p className="mt-1">$18.40</p>
              </div>
            </div>
            <div className="lg:w-1/5 md:w-1/3 p-4 w-full m-2 shadow-md">
              <a className="block relative  rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71dTI9r18IL._UY879_.jpg"
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  The Catalyzer
                </h2>
                <p className="mt-1">$16.00</p>
              </div>
            </div>
            <div className="lg:w-1/5 md:w-1/3 p-4 w-full m-2 shadow-md">
              <a className="block relative  rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71dTI9r18IL._UY879_.jpg"
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Shooting Stars
                </h2>
                <p className="mt-1">$21.15</p>
              </div>
            </div>
            <div className="lg:w-1/5 md:w-1/3 p-4 w-full m-2 shadow-md">
              <a className="block relative  rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71dTI9r18IL._UY879_.jpg"
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Neptune
                </h2>
                <p className="mt-1">$12.00</p>
              </div>
            </div>
            <div className="lg:w-1/5 md:w-1/3 p-4 w-full m-2 shadow-md">
              <a className="block relative  rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71dTI9r18IL._UY879_.jpg"
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  The 400 Blows
                </h2>
                <p className="mt-1">$18.40</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tshirts;
