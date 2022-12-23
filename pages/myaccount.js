import React, { useEffect } from "react";
import Router from "next/router";

const myaccount = () => {
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      Router.push("/");
    }
  }, []);

  return (
    <div className="grid  place-items-center text-2xl font-bold h-[80vh] w-[100vw]">
      myaccount
    </div>
  );
};

export default myaccount;
