import React, { useEffect } from "react";
import Link from "next/link";
import { BsKey } from "react-icons/bs";
import Router from "next/router";

const forgot = () => {
  useEffect(() => {
    if (localStorage.getItem("token")) {
      Router.push("/");
    }
  }, []);

  return (
    <div>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto h-24 w-auto rounded-full border-2 border-purple-400"
              src="/dressesWorld2.png"
              alt="Your Company"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Forgot your password
            </h2>
            <p className="mt-2 mx-2 text-center text-sm ">
              Or
              <Link
                href={"/signup"}
                className="font-medium mx-2 text-purple-600 hover:text-purple-500 hover:scale-105"
              >
                Sign up
              </Link>
            </p>
          </div>
          <form className="mt-8 space-y-6" method="POST">
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-purple-500 focus:outline-none focus:ring-purple-500 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              {/* <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-purple-500 focus:outline-none focus:ring-purple-500 sm:text-sm"
                  placeholder="Password"
                />
              </div> */}
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-purple-600 py-2 px-4 text-sm font-medium text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <BsKey className="text-2xl" />
                </span>
                Send OTP
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default forgot;
