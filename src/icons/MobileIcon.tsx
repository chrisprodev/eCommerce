import React from "react";

interface props {
  hover: boolean;
}

const MobileIcon: React.FC<props> = ({ hover }) => {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 20.53 30"
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
          d="M2.36,25.88V4.94
		c0-1.66,1.34-3,3-3h9.56c1.66,0,3,1.34,3,3v20.94c0,1.66-1.34,3-3,3H5.36C3.71,28.88,2.36,27.54,2.36,25.88z"
        />

        <rect
          x="10.08"
          y="0.1"
          transform="matrix(-1.836970e-16 1 -1 -1.836970e-16 13.0465 -7.248)"
          style={{
            fill: "none",
            stroke: hover ? "var(--purple)" : "var(--black)",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            transition: "all 150ms ease",
          }}
          width="0.13"
          height="5.59"
        />
      </g>
    </svg>
  );
};

export default MobileIcon;
