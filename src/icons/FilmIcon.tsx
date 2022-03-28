import React from "react";

interface props {
  hover: boolean;
}

const FilmIcon: React.FC<props> = ({ hover }) => {
  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 36.72 30.74"
    >
      <rect
        x="2.18"
        y="16.88"
        width="25.2"
        height="12.86"
        style={{
          fill: "none",
          stroke: hover ? "var(--purple)" : "var(--black)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "2px",
        }}
      />
      <polygon
        points="35.72 29.74 27.38 26.49 27.38 20.13 35.72 16.88 35.72 29.74"
        style={{
          fill: "none",
          stroke: hover ? "var(--purple)" : "var(--black)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "2px",
        }}
      />
      <circle
        cx="6.55"
        cy="11.3"
        r="5.55"
        style={{
          fill: "none",
          stroke: hover ? "var(--purple)" : "var(--black)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "2px",
        }}
      />
      <circle
        cx="20.46"
        cy="8.92"
        r="7.92"
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

export default FilmIcon;
