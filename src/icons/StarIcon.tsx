import React from "react";

interface props {
  hover: boolean;
}

const StarIcon: React.FC<props> = ({ hover }) => {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 32.26 29"
      xmlSpace="preserve"
    >
      <path
        style={{
          fill: "none",
          stroke: hover ? "var(--purple)" : "var(--black)",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transition: "all 150ms ease",
        }}
        d="M17.73,3.38l2.82,5.71
	c0.26,0.53,0.76,0.89,1.34,0.98l6.31,0.92c1.46,0.21,2.05,2.01,0.99,3.05l-4.56,4.45c-0.42,0.41-0.61,1-0.51,1.58l1.08,6.28
	c0.25,1.46-1.28,2.57-2.59,1.88l-5.64-2.97c-0.52-0.27-1.14-0.27-1.66,0l-5.64,2.97c-1.31,0.69-2.84-0.42-2.59-1.88l1.08-6.28
	c0.1-0.58-0.09-1.17-0.51-1.58l-4.56-4.45C2,13.01,2.59,11.21,4.05,10.99l6.31-0.92c0.58-0.08,1.08-0.45,1.34-0.98l2.82-5.71
	C15.18,2.05,17.08,2.05,17.73,3.38z"
      />
    </svg>
  );
};

export default StarIcon;
