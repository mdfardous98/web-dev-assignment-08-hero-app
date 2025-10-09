import Banner from "../Components/Banner";
import { Link, useLoaderData } from "react-router";
import App from "../Pages/App";
import { useEffect, useState } from "react";
import spinLogo from "../assets/logo.png";

const Home = () => {
  const [loaderApp, setLoaderApp] = useState(true);
  const appData = useLoaderData();

  useEffect(() => {
    appData && setLoaderApp(false);
  }, [appData]);

  return (
    <div>
      <Banner></Banner>
      <div className="my-10">
        <div className="flex flex-col justify-center items-center gap-y-10 container mx-auto">
          <h1 className="font-semibold sm:text-5xl text-3xl text-center">
            Trending Apps
          </h1>
          <p className="text-base text-black/50 text-center">
            Explore All Trending Apps on the Market developed by us
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 grid-cols-1 gap-10">
            {loaderApp === true ? (
              <div className="flex flex-col items-center gap-2">
                <img
                  src={spinLogo}
                  alt="loading"
                  className="w-16 h-16 animate-spin"
                />
                <span className="text-gray-700 font-medium">Loading...</span>
              </div>
            ) : (
              appData.map((app) => <App key={app.id} app={app}></App>)
            )}
          </div>

          <button className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold hover:scale-105 transition-transform duration-300">
            <Link to="/apps">Show All</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
