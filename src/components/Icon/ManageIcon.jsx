import React from "react";

const ManageIcon = ({ width = 32, height = 32, color = "currentColor" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
    >
      <path
        d="M3 15.5L16 21.5L29 15.5M3 20L16 26L29 20M3 11L16 17L29 11L16 5L3 11Z"
        stroke="#525252"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ManageIcon;
