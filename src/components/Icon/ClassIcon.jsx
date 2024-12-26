import React from "react";

const ClassIcon = ({ width = 32, height = 32, color = "currentColor" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
    >
      <path
        d="M3 27V8C3 6 4 5 6 5H26C28 5 29 6 29 8V21C29 23 28 24 26 24H7L3 27Z"
        stroke="#525252"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="15" y="8" width="2" height="8" rx="1" fill="#525252" />
      <rect x="15" y="18" width="2" height="3" rx="1" fill="#525252" />
    </svg>
  );
};

export default ClassIcon;
