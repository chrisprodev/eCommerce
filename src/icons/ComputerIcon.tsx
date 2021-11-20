import React from "react";

interface props {
  hover: boolean;
}

const ComputerIcon: React.FC<props> = ({ hover }) => {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 30.58 26"
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
          d="M25.95,21.75H4.63V8.95
		c0-1.66,1.34-3,3-3h15.32c1.66,0,3,1.34,3,3V21.75z"
        />
        <path
          style={{
            fill: "none",
            stroke: hover ? "var(--purple)" : "var(--black)",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            transition: "all 150ms ease",
          }}
          d="M26.71,21.75H3.87
		c-0.86,0-1.56,0.7-1.56,1.56v0c0,0.86,0.7,1.56,1.56,1.56h22.83c0.86,0,1.56-0.7,1.56-1.56v0C28.26,22.45,27.57,21.75,26.71,21.75z
		"
        />

        <line
          style={{
            fill: "none",
            stroke: hover ? "var(--purple)" : "var(--black)",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            transition: "all 150ms ease",
          }}
          x1="13.49"
          y1="22.39"
          x2="17.36"
          y2="22.39"
        />
      </g>
    </svg>
  );
};

export default ComputerIcon;
