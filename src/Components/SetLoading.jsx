import React, { memo } from "react";
import { ClimbingBoxLoader } from "react-spinners";

const SetLoading = () => {
  return (
    <>
      <div className="flex justify-center items-center h-60">
        <ClimbingBoxLoader color="#008cff" size={20} />
      </div>
    </>
  );
};

export default memo(SetLoading);
