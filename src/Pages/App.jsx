import React from "react";
import { FaDownload, FaStar } from "react-icons/fa";
import { Link } from "react-router";

const App = ({ app }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="card bg-base-100 w-96 h-96 shadow-sm transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:border hover:border-green-200 hover:scale-105">
        <figure className="bg-gray-100 transition-all duration-300 hover:bg-gray-200">
          <Link to={`/appDetails/${app.id}`}>
            <img
              className="w-[255px] h-[250px] p-10 transition-transform duration-300 hover:scale-110 hover:shadow-md"
              src={app.image}
              alt="App"
            />
          </Link>
        </figure>
        <div className="card-body transition-all duration-300">
          <h2 className="card-title hover:text-green-600 transition-colors duration-300">
            {app.title}: {app.purpose}
          </h2>
          <div className="flex justify-between items-center">
            <button className="btn text-green-500 bg-green-100 transition-all duration-300 hover:bg-green-500 hover:text-white hover:shadow-md hover:scale-105 active:scale-95">
              <FaDownload /> {app.downloads}
            </button>
            <button className="btn bg-amber-100 text-amber-500 transition-all duration-300 hover:bg-amber-500 hover:text-white hover:shadow-md hover:scale-105 active:scale-95">
              <FaStar /> {app.ratingAvg}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
