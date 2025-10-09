import React from "react";
import notFoundImg from "../assets/App-Error.png";
import { Link } from "react-router";
const AppNotFound = () => {
  return (
    <div>
      <div className="flex justify-center items-center w-96 mx-auto my-20">
        <div className="flex flex-col justify-center items-center gap-y-5">
          <img className="sm:w-96 w-1/2" src={notFoundImg} alt="" />
          <h1 className="font-semibold sm:text-5xl text-3xl text-center">
            Oops, App not found!
          </h1>
          <p className="text-base text-black/50 text-center">
            The page you are looking for is not available.
          </p>
          <button className="btn  bg-gradient-to-r from-[#632EE3]  to-[#9F62F2] text-white font-semibold">
            <Link to="/"> Go Back!</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppNotFound;
