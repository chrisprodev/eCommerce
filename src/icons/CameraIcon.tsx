import React from "react";

interface props {
  hover: boolean;
}

const CameraIcon: React.FC<props> = ({ hover }) => {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 38.53 30"
      xmlSpace="preserve"
    >
      <g>
        <path
          style={{
            fill: "none",
            stroke: hover ? "var(--purple)" : "var(--black)",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            transition: "all 150ms ease",
          }}
          d="M35.18,25.54
		c0,1.6-1.3,2.89-2.89,2.89H6.24c-1.6,0-2.89-1.3-2.89-2.89V9.62c0-1.6,1.3-2.89,2.89-2.89h5.79l2.13-3.2
		c0.48-0.71,1.28-1.14,2.13-1.14h5.94c0.86,0,1.66,0.43,2.13,1.14l2.13,3.2h5.79c1.6,0,2.89,1.3,2.89,2.89V25.54z"
        />

        <circle
          style={{
            fill: "none",
            stroke: hover ? "var(--purple)" : "var(--black)",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            transition: "all 150ms ease",
          }}
          cx="19.26"
          cy="16.86"
          r="5.79"
        />
      </g>
    </svg>
  );
};

export default CameraIcon;
