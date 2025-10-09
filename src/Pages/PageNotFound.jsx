import React from "react";
import error404 from "../assets/error-404.png";
import { Link } from "react-router";
const PageNotFound = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center my-20 gap-y-5">
        <img className="sm:w-96 w-1/2" src={error404} alt="" />
        <h1 className="font-semibold sm:text-5xl text-3xl text-center">
          Oops, page not found!
        </h1>
        <p className="text-base text-black/50 text-center">
          The page you are looking for is not available.
        </p>
        <button className="btn  bg-gradient-to-r from-[#632EE3]  to-[#9F62F2] text-white font-semibold">
          <Link to="/"> Go Back</Link>
        </button>
      </div>
    </div>
  );
};

export default PageNotFound;
