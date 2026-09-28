// Standard packages
import React, { FC } from "react";

const Loader: FC = () => {
  return (
    <svg
      className="animate-spin"
      width="20"
      height="20"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="15" cy="15" r="12" stroke="#ECEFF2" strokeWidth="4.8" />
      <path
        d="M3 15C3 21.6274 8.37258 27 15 27C21.6274 27 27 21.6274 27 15C27 8.37258 21.6274 3 15 3"
        stroke="#0066FF"
        strokeWidth="4.8"
      />
    </svg>
  );
};

export default Loader;
