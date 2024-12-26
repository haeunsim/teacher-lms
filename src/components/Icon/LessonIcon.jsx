import React from "react";

const LessonIcon = ({ width = 32, height = 32, color = "currentColor" }) => {
    return (
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width={width} 
        height={height} 
        viewBox="0 0 32 32" 
        fill="none"
      >
        <path 
          d="M5 8H13M5 12H27M5 16H11M5 20H17M14 16H27M21 20H27M5 24H7M11 24H15" 
          stroke={color} 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>
    );
  };
  
  export default LessonIcon;