import { useLoaderData, useOutletContext, useParams } from "react-router";
import downloadsIcon from "../assets/icon-downloads.png";
import starIcon from "../assets/icon-ratings.png";
import reviewIcon from "../assets/icon-review.png";
import BarCharts from "../Pages/BarCharts";
import { useEffect, useState } from "react";
import { addInstalledApp, saveInstalledApp } from "../utils/LocalDB";

const AppDetailsPage = () => {
  const { handleInstallBtn } = useOutletContext();
  const [isInstalled, setIsInstalled] = useState(false);

  const appData = useLoaderData();
  const { id } = useParams();
  const dataId = parseInt(id);
  const singleApp = appData.find((app) => app.id === dataId);

  const {
    companyName,
    description,
    downloads,
    image,
    purpose,
    ratingAvg,
    ratings,
    reviews,
    size,
    title,
  } = singleApp;

  useEffect(() => {
    const installedApps = addInstalledApp();
    const installed = installedApps.some((app) => app.id === dataId);
    setIsInstalled(installed);
  }, [dataId]);

  return (
    <div className="bg-slate-100 py-5 transition-all duration-300 hover:bg-slate-200">
      <div className="container mx-auto transition-all duration-300">
        <div className="flex flex-col sm:flex-row justify-start items-center p-10 gap-x-10 hover:shadow-2xl hover:-translate-y-1 hover:border hover:border-green-200 rounded-2xl transition-all duration-300 bg-white">
          <div className="sm:w-1/3 w-1/2 transition-transform duration-300 hover:scale-105">
            <img
              src={image}
              alt=""
              className="rounded-lg shadow-sm hover:shadow-lg transition-all duration-300"
            />
          </div>
          <div>
            <h1 className="font-bold text-3xl mb-3 transition-colors duration-300 hover:text-green-600">
              {title} : {purpose}
            </h1>
            <p className="text-xl text-[#627382] font-normal hover:text-gray-700 transition-colors duration-300">
              Developed by{" "}
              <span className="text-[#632EE3] hover:text-[#4a1fc0] transition-colors duration-300">
                {companyName}
              </span>
            </p>
            <div className="border border-t-1 border-black/10 my-5"></div>

            <div className="flex sm:flex-row flex-col justify-evenly gap-x-20 my-10">
              <div className="sm:mb-0 mb-8 text-center transition-all duration-300 hover:scale-105 hover:shadow-md rounded-xl p-3 bg-white/70">
                <img
                  src={downloadsIcon}
                  alt=""
                  className="mx-auto transition-transform duration-300 hover:scale-110"
                />
                <p className="text-base text-[#001931]">Downloads</p>
                <h1 className="text-[#001931] font-extrabold text-4xl">
                  {downloads}
                </h1>
              </div>

              <div className="sm:mb-0 mb-8 text-center transition-all duration-300 hover:scale-105 hover:shadow-md rounded-xl p-3 bg-white/70">
                <img
                  src={starIcon}
                  alt=""
                  className="mx-auto transition-transform duration-300 hover:scale-110"
                />
                <p className="text-base text-[#001931]">{ratingAvg}</p>
                <h1 className="text-[#001931] font-extrabold text-4xl">4.9</h1>
              </div>

              <div className="sm:mb-0 mb-8 text-center transition-all duration-300 hover:scale-105 hover:shadow-md rounded-xl p-3 bg-white/70">
                <img
                  src={reviewIcon}
                  alt=""
                  className="mx-auto transition-transform duration-300 hover:scale-110"
                />
                <p className="text-base text-[#001931]">Total Reviews</p>
                <h1 className="text-[#001931] font-extrabold text-4xl">
                  {reviews}
                </h1>
              </div>
            </div>

            <button
              onClick={() => {
                if (!isInstalled) {
                  handleInstallBtn(singleApp);
                  setIsInstalled(true);
                  saveInstalledApp(singleApp);
                }
              }}
              className={`btn bg-green-600 text-white transition-all duration-300 hover:bg-green-700 hover:shadow-lg hover:scale-105 active:scale-95 ${
                isInstalled ? "opacity-80 cursor-not-allowed" : ""
              }`}
              disabled={isInstalled}
            >
              {isInstalled ? "Installed" : "Install Now"}
              {isInstalled ? "" : ` (${size})`}
            </button>
            <div className="border border-t-1 border-black/10 my-2"></div>
          </div>
        </div>

        <div className="transition-all duration-300 hover:scale-[1.01]">
          <h1 className="font-semibold text-2xl mb-3 hover:text-green-600 transition-colors duration-300">
            Ratings
          </h1>
          <div>
            <BarCharts ratings={ratings}></BarCharts>
          </div>
        </div>

        <div className="transition-all duration-300 hover:scale-[1.01]">
          <h1 className="font-semibold text-2xl my-3 hover:text-green-600 transition-colors duration-300">
            Description
          </h1>
          <p className="text-base text-[#627382] hover:text-gray-700 transition-colors duration-300">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AppDetailsPage;
