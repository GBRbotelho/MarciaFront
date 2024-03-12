import React from "react";

export default function Perfil() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="500"
      zoomAndPan="magnify"
      viewBox="0 0 375 375"
      height="500"
      preserveAspectRatio="xMidYMid meet"
      xmlnsV="https://vecta.io/nano"
    >
      <defs>
        <clipPath id="A">
          <path d="M5.93 5.93h363v363h-363zm0 0" clip-rule="nonzero" />
        </clipPath>
        <clipPath id="B">
          <path d="M52 217h271v151.93H52zm0 0" clip-rule="nonzero" />
        </clipPath>
      </defs>
      <g clip-path="url(#A)">
        <path
          fill="#b3b3b3"
          d="M368.945 187.438c0 46.434-17.426 88.785-46.121 120.883-33.227 37.207-81.566 60.621-135.387 60.621S85.266 345.527 52.051 308.32C23.359 276.223 5.934 233.871 5.934 187.438 5.934 87.199 87.188 5.93 187.438 5.93c100.238 0 181.508 81.27 181.508 181.508"
        />
      </g>
      <path
        fill="#f2f2f2"
        d="M187.438 220.871c32.898 0 62.859-37.219 62.859-78.086 0-38.613-7.465-76.797-62.859-76.797s-62.867 38.184-62.867 76.797c0 40.867 29.969 78.086 62.867 78.086"
      />
      <g clip-path="url(#B)">
        <path
          fill="#f2f2f2"
          d="M322.824 308.32c-33.227 37.207-81.566 60.621-135.387 60.621S85.266 345.527 52.051 308.32c-.574-22.418 14.355-74.359 90.496-90.344 13.023 13.293 29.055 20.809 44.891 20.809s31.855-7.516 44.879-20.809c76.156 15.984 91.07 67.926 90.508 90.344"
        />
      </g>
    </svg>
  );
}
