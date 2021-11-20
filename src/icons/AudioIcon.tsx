import React from "react";

interface props {
  hover: boolean;
}

const AudioIcon: React.FC<props> = ({ hover }) => {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 30.58 30.82"
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
          d="M27.25,17.71l0.01-0.02
		c1.31-4.29,0.33-9.04-2.84-12.21c-2.34-2.34-5.56-3.78-9.13-3.78h0c-3.57,0-6.79,1.45-9.13,3.78C2.99,8.64,2.01,13.4,3.32,17.69
		l0.01,0.02"
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
          d="M3.29,26.25v-9.54
		c0-1.59,1.29-2.88,2.88-2.88h0c1.59,0,2.88,1.29,2.88,2.88v9.54c0,1.59-1.29,2.88-2.88,2.88h0C4.58,29.13,3.29,27.84,3.29,26.25z"
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
          d="M21.52,26.25v-9.54
		c0-1.59,1.29-2.88,2.88-2.88h0c1.59,0,2.88,1.29,2.88,2.88v9.54c0,1.59-1.29,2.88-2.88,2.88h0C22.81,29.13,21.52,27.84,21.52,26.25
		z"
        />
      </g>
    </svg>
  );
};

export default AudioIcon;
