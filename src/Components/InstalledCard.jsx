import { FaDownload } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";

const InstalledCard = ({ card, handleUninstallBtn }) => {
  const { downloads, image, purpose, ratingAvg, size, title, id } = card;

  return (
    <div className="bg-gray-100 p-3 m-2 rounded-xl transition-all duration-300 hover:shadow-2xl hover:bg-gray-200 hover:-translate-y-1 hover:border hover:border-green-200">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-x-5">
          <img
            className="w-20 h-20 bg-white p-3 rounded-md transition-transform duration-300 hover:scale-110 hover:shadow-md"
            src={image}
            alt=""
          />
          <div>
            <h1 className="font-semibold text-xl transition-colors duration-300 hover:text-green-600">
              {title} : {purpose}
            </h1>
            <div className="flex gap-x-10">
              <p className="text-base font-normal text-[#00D390] flex items-center gap-x-2 transition-transform duration-200 hover:scale-110 hover:text-[#00b87a]">
                <FaDownload /> {downloads}
              </p>
              <p className="text-base font-normal text-[#FF8811] flex items-center gap-x-2 transition-transform duration-200 hover:scale-110 hover:text-[#e56f00]">
                <FaStar /> {ratingAvg}
              </p>
              <p className="text-base font-normal text-[#627382] transition-colors duration-200 hover:text-gray-700">
                {size}MB
              </p>
            </div>
          </div>
        </div>
        <div>
          <button
            onClick={() => handleUninstallBtn(id)}
            className="btn text-white bg-green-500 transition-all duration-300 hover:bg-green-600 hover:shadow-lg hover:scale-105 active:scale-95"
          >
            Uninstall
          </button>
        </div>
      </div>
    </div>
  );
};

export default InstalledCard;
