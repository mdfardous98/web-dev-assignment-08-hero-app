import { FaDownload } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";

const InstalledCard = ({ card, handleUninstallBtn }) => {
  const { downloads, image, purpose, ratingAvg, size, title, id } = card;

  return (
    <div className="bg-gray-100 p-3 m-2 rounded-xl">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-x-5">
          <img
            className="w-20 h-20 bg-white p-3 rounded-md"
            src={image}
            alt=""
          />
          <div>
            <h1 className="font-semibold text-xl">
              {title} : {purpose}
            </h1>
            <div className="flex gap-x-10">
              <p className="text-base font-normal text-[#00D390] flex items-center gap-x-2">
                <FaDownload /> {downloads}
              </p>
              <p className="text-base font-normal text-[#FF8811] flex items-center gap-x-2">
                <FaStar /> {ratingAvg}
              </p>
              <p className="text-base font-normal text-[#627382]">{size}MB</p>
            </div>
          </div>
        </div>
        <div>
          <button
            onClick={() => handleUninstallBtn(id)}
            className="btn text-white bg-green-500"
          >
            Uninstall
          </button>
        </div>
      </div>
    </div>
  );
};

export default InstalledCard;
