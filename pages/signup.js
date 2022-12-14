import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Router, { useRouter } from "next/router";

const Signup = () => {
  const router = useRouter();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  useEffect(() => {
    if (localStorage.getItem("token")) {
      Router.push("/");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(data);
    let res = await fetch("http://localhost:3000/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let response = await res.json();
    //console.log(response);
    let output = response.output;
    let type = response.type;
    //console.log(output, type);

    if (type == "success") {
      toast.success("User has been created successfully 👍 ", {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    if (type == "error") {
      toast.error("Failed to signup. Try again ", {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }

    setData({ name: "", email: "", password: "" });
  };

  return (
    <div>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
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
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto h-24 w-auto rounded-full border-4 border-purple-400"
              src="/dressesWorld2.png"
              alt="Your Company"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Sign up to your account
            </h2>
            <p className="mt-2 mx-2 text-center text-sm ">
              Or
              <Link
                href={"/login"}
                className="font-medium mx-2 text-purple-600 hover:text-purple-500 hover:scale-105"
              >
                Login
              </Link>
            </p>
          </div>
          <form className="mt-8 space-y-6" method="POST">
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <input
                  value={data.name}
                  onChange={(e) => {
                    setData({ ...data, [e.target.name]: e.target.value });
                  }}
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="email"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-purple-500 focus:outline-none focus:ring-purple-500 sm:text-sm"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  value={data.email}
                  onChange={(e) => {
                    setData({ ...data, [e.target.name]: e.target.value });
                  }}
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full appearance-none  border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-purple-500 focus:outline-none focus:ring-purple-500 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  value={data.password}
                  onChange={(e) => {
                    setData({ ...data, [e.target.name]: e.target.value });
                  }}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-purple-500 focus:outline-none focus:ring-purple-500 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={!data.name || !data.email || !data.password}
                onClick={handleSubmit}
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-purple-600 py-2 px-4 text-sm font-medium text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    className="h-5 w-5 text-purple-500 group-hover:text-purple-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
