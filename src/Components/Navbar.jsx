import { Link, NavLink } from "react-router";
import logoImg from "../assets/logo.png";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <div className="shadow-sm">
        <div className="navbar container mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
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
                <NavLink to="/" className="!border-0">
                  Home
                </NavLink>
                <NavLink to="/apps" className="!border-0">
                  Apps
                </NavLink>
                <NavLink to="/installation" className="!border-0">
                  Installation
                </NavLink>
              </ul>
            </div>
            <Link to="/" className="flex justify-center items-center gap-1">
              <img className="w-7" src={logoImg} alt="" />
              <h2 className="text-xl  uppercase font-semibold text-purple-800">
                HERO<span>.IO</span>
              </h2>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex font-medium text-[#00000090]">
            <ul className="menu menu-horizontal px-1">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/apps" className="mx-6">
                Apps
              </NavLink>
              <NavLink to="/installation">Installation</NavLink>
            </ul>
          </div>
          <div className="navbar-end">
            <a
              href="https://github.com/mdfardous98"
              target="_blank"
              className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white"
            >
              {<FaGithub />} Contribute
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;


