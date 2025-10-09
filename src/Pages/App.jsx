import React from "react";
import { FaDownload, FaStar } from "react-icons/fa";
import { Link } from "react-router";

const App = ({ app }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="card bg-base-100 w-96 h-96 shadow-sm   hover:scale-105 transition-transform duration-300 ">
        <figure className="bg-gray-100">
          <Link to={`/appDetails/${app.id}`}>
            <img
              className="w-[2550px] h-[250px] p-10"
              src={app.image}
              alt="Shoes"
            />
          </Link>
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {app.title}:{app.purpose}
          </h2>
          <div className="flex justify-between items-center">
            <button className="btn text-green-500 bg-green-100">
              <FaDownload /> {app.downloads}
            </button>
            <button className="btn bg-amber-100 text-amber-500">
              <FaStar /> {app.ratingAvg}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
