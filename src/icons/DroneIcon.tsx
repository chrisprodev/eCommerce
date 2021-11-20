import React from "react";

interface props {
  hover: boolean;
}

const DroneIcon: React.FC<props> = ({ hover }) => {
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
        <polygon
          style={{
            fill: "none",
            stroke: hover ? "var(--purple)" : "var(--black)",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            transition: "all 150ms ease",
          }}
          points="12.33,12.71 
		6.07,6.44 7.37,5.15 13.4,9.32 	"
        />
        <polygon
          style={{
            fill: "none",
            stroke: hover ? "var(--purple)" : "var(--black)",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            transition: "all 150ms ease",
          }}
          points="18.88,12.71 
		25.14,6.44 23.84,5.15 17.81,9.32 	"
        />
        <polygon
          style={{
            fill: "none",
            stroke: hover ? "var(--purple)" : "var(--black)",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            transition: "all 150ms ease",
          }}
          points="13.02,18.8 
		6.76,25.07 8.06,26.37 14.09,22.19 	"
        />
        <polygon
          style={{
            fill: "none",
            stroke: hover ? "var(--purple)" : "var(--black)",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            transition: "all 150ms ease",
          }}
          points="18.19,18.8 
		24.46,25.07 23.16,26.37 17.12,22.19 	"
        />

        <line
          style={{
            fill: "#ffffff",
            stroke: hover ? "var(--purple)" : "var(--black)",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            transition: "all 150ms ease",
          }}
          x1="2.99"
          y1="9.47"
          x2="10.42"
          y2="2.04"
        />

        <line
          style={{
            fill: "#ffffff",
            stroke: hover ? "var(--purple)" : "var(--black)",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            transition: "all 150ms ease",
          }}
          x1="20.15"
          y1="2.04"
          x2="27.59"
          y2="9.47"
        />

        <circle
          style={{
            fill: "#ffffff",
            stroke: hover ? "var(--purple)" : "var(--black)",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            transition: "all 150ms ease",
          }}
          cx="23.96"
          cy="5.81"
          r="1.92"
        />

        <line
          style={{
            fill: "#ffffff",
            stroke: hover ? "var(--purple)" : "var(--black)",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            transition: "all 150ms ease",
          }}
          x1="3.7"
          y1="21.35"
          x2="11.14"
          y2="28.79"
        />

        <circle
          style={{
            fill: "#ffffff",
            stroke: hover ? "var(--purple)" : "var(--black)",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            transition: "all 150ms ease",
          }}
          cx="7.47"
          cy="25.16"
          r="1.92"
        />

        <line
          style={{
            fill: "#ffffff",
            stroke: hover ? "var(--purple)" : "var(--black)",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            transition: "all 150ms ease",
          }}
          x1="19.44"
          y1="28.79"
          x2="26.88"
          y2="21.35"
        />

        <circle
          style={{
            fill: "#ffffff",
            stroke: hover ? "var(--purple)" : "var(--black)",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            transition: "all 150ms ease",
          }}
          cx="23.25"
          cy="25.01"
          r="1.92"
        />
        <path
          style={{
            fill: "#ffffff",
            stroke: hover ? "var(--purple)" : "var(--black)",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            transition: "all 150ms ease",
          }}
          d="M15.63,8L15.63,8
		c-2.1,0-3.75,1.79-3.58,3.89l0.8,9.62c0.06,0.7,0.64,1.23,1.34,1.23h2.87c0.7,0,1.28-0.53,1.34-1.23l0.8-9.62
		C19.38,9.79,17.73,8,15.63,8z"
        />

        <circle
          style={{
            fill: "#ffffff",
            stroke: hover ? "var(--purple)" : "var(--black)",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            transition: "all 150ms ease",
          }}
          cx="6.76"
          cy="5.66"
          r="1.92"
        />
      </g>
    </svg>
  );
};

export default DroneIcon;
