import React from "react";

interface props {
  hover: boolean;
}

const TvIcon: React.FC<props> = ({ hover }) => {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 39.52 28"
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
          d="M33.77,23.28H5.75
		c-1.66,0-3-1.34-3-3V6.63c0-1.66,1.34-3,3-3h28.01c1.66,0,3,1.34,3,3v13.65C36.77,21.93,35.42,23.28,33.77,23.28z"
        />

        <rect
          x="16.38"
          y="23.28"
          style={{
            fill: "none",
            stroke: hover ? "var(--purple)" : "var(--black)",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            transition: "all 150ms ease",
          }}
          width="6.76"
          height="3.92"
        />

        <rect
          x="13"
          y="27.15"
          style={{
            fill: "none",
            stroke: hover ? "var(--purple)" : "var(--black)",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            transition: "all 150ms ease",
          }}
          width="13.52"
          height="0.04"
        />
      </g>
    </svg>
  );
};

export default TvIcon;
