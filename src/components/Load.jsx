import React from 'react'

export default function Load() {
  return (
    <div>
      <div className="robot-thinking">
        <svg
          width="100"
          height="150"
          viewBox="0 0 100 120"
          xmlns="http://www.w3.org/2000/svg"
          className="robot"
        >
          <rect x="15" y="20" width="70" height="70" rx="10" fill="#cfe2ff" />

          <circle cx="35" cy="45" r="8" fill="#333" />
          <circle cx="65" cy="45" r="8" fill="#333" />

          <path
            d="M28 35 Q35 30, 42 35"
            stroke="#333"
            stroke-width="2"
            fill="none"
          />
          <path
            d="M58 35 Q65 30, 72 35"
            stroke="#333"
            stroke-width="2"
            fill="none"
          />

          <path
            d="M40 65 Q50 75, 60 65"
            stroke="#333"
            stroke-width="2"
            fill="none"
          />

          <text
            x="50"
            y="10"
            font-size="35"
            text-anchor="middle"
            fill="#0d6efd"
          >
            ?
          </text>
        </svg>
      </div>
      <div className="text-center fs-5 fw-bold">Thinking...</div>
    </div>
  );
}