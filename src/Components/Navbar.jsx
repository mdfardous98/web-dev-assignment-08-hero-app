import React from "react";
import { Link, NavLink } from "react-router";
import logoImg from "../assets/logo.png";
import { FaGithub } from "react-icons/fa";
const Navbar = () => {
  const links = (
    <>
      <div className="flex sm:flex-row flex-col  gap-x-5 ">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "font-semibold text-xl text-[#632EE3] underline"
              : "font-semibold text-xl text-black "
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "font-semibold text-xl text-[#632EE3] underline"
              : "font-semibold text-xl text-black "
          }
          to="/apps"
        >
          Apps
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "font-semibold text-xl text-[#632EE3] underline"
              : "font-semibold text-xl text-black"
          }
          to="/installation"
        >
          Installation
        </NavLink>
      </div>
    </>
  );

  const openGithubProfile = () => {
    window.open("https://github.com/mdfardous98");
  };
  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar container mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div className="flex items-center gap-x-3">
            <img className="sm:w-10 w-5" src={logoImg} alt="" />
            <Link
              className="text-[#632EE3] font-bold sm:text-xl text-base"
              to="/"
            >
              HERO.IO
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <a
            onClick={openGithubProfile}
            to="/https://github.com/mdfardous98"
            className="btn  bg-gradient-to-r from-[#632EE3]  to-[#9F62F2] text-white font-semibold"
          >
            {" "}
            <FaGithub /> Contribute
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
