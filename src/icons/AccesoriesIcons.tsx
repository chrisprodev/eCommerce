import React from "react";

interface props {
  hover: boolean;
}

const AccesoriesIcons: React.FC<props> = ({ hover }) => {
  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 38.35 31.8"
    >
      <path
        d="M188.62,190.35h15.6a5.27,5.27,0,0,1,5.27,5.27v1.63a5.27,5.27,0,0,1-5.27,5.27H193.89a5.27,5.27,0,0,0-5.27,5.27h0a5.27,5.27,0,0,0,5.27,5.27h15.6"
        transform="translate(-181.21 -184.31)"
        style={{
          fill: "none",
          stroke: hover ? "var(--purple)" : "var(--black)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "2px",
        }}
      />
      <rect
        x="1"
        y="1"
        width="6.21"
        height="10.08"
        style={{
          fill: "none",
          stroke: hover ? "var(--purple)" : "var(--black)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "2px",
        }}
      />
      <rect
        x="28.48"
        y="25.93"
        width="8.88"
        height="4.87"
        style={{
          fill: "none",
          stroke: hover ? "var(--purple)" : "var(--black)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "2px",
        }}
      />
    </svg>
  );
};

export default AccesoriesIcons;
