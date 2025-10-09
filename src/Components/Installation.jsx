import { IoMdArrowDropdown } from "react-icons/io";
import { useOutletContext } from "react-router";
import InstalledCard from "../Components/InstalledCard";
import { useState } from "react";
import { unInstallAppList } from "../utils/LocalDB";

const Installation = () => {
  const { installCard, setInstallCard, notify } = useOutletContext();

  const handleUninstallBtn = (id) => {
    unInstallAppList(id);
    setInstallCard((prev) => prev.filter((app) => app.id !== id));
    notify("App removed from your list ❌");
  };

  const [sort, setSort] = useState("");
  const handleSort = (sortType) => {
    setSort(sortType);
    if (sortType === "Size") {
      const sortedBySize = [...installCard].sort((a, b) => a.size - b.size);
      setInstallCard(sortedBySize);
    } else if (sortType === "ratingAvg") {
      const sortByRatingAvg = [...installCard].sort(
        (a, b) => a.ratingAvg - b.ratingAvg
      );
      setInstallCard(sortByRatingAvg);
    }
  };

  return (
    <div className="container mx-auto py-10 transition-all duration-300 hover:-translate-y-1">
      <div className="text-center mb-2 transition-all duration-300 hover:scale-[1.02]">
        <h1 className="font-bold sm:text-5xl text-3xl mb-3 hover:text-green-600 transition-colors duration-300">
          Your Installed Apps
        </h1>
        <p className="text-base font-normal text-[#627382] hover:text-gray-700 transition-colors duration-300">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="flex sm:flex-row flex-col sm:justify-between items-center mb-3 transition-all duration-300 hover:shadow-md hover:rounded-xl p-2">
        <h1 className="font-semibold text-xl transition-colors duration-300 hover:text-green-600">
          ({installCard.length}) Apps Found
        </h1>
        <div>
          <details className="dropdown transition-all duration-300 hover:scale-105">
            <summary className="btn m-1 px-10 transition-all duration-300 hover:bg-green-500 hover:text-white hover:shadow-md">
              Sort By : {sort ? sort : ""}
              <IoMdArrowDropdown />
            </summary>
            <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm hover:shadow-md transition-all duration-300">
              <li>
                <a
                  onClick={() => handleSort("Size")}
                  className="hover:bg-green-100 transition-colors duration-200"
                >
                  Size
                </a>
              </li>
              <li>
                <a
                  onClick={() => handleSort("ratingAvg")}
                  className="hover:bg-green-100 transition-colors duration-200"
                >
                  Rating
                </a>
              </li>
            </ul>
          </details>
        </div>
      </div>

      <div className="transition-all duration-300 hover:scale-[1.01]">
        {installCard.map((card) => (
          <InstalledCard
            key={card.id}
            card={card}
            handleUninstallBtn={handleUninstallBtn}
          ></InstalledCard>
        ))}
      </div>
    </div>
  );
};

export default Installation;
