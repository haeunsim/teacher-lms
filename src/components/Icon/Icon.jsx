import React from "react";

const Icon = ({ name, color, size = 32, ...props }) => {
    return (
      <svg width={size} height={size} {...props} style={{ color: color }} fill="transparent">
        <use href={`/icon-sprite.svg#icon-${name}`} />
      </svg>
    );
  };

export default Icon;
