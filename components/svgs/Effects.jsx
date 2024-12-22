export const MovingWave = () => {
  return (
    <svg
      width="100%"
      height="200"
      viewBox="0 0 1000 200"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full"
    >
      {/* Background - optional, remove if you want transparent background */}
      <rect width="1000" height="200" fill="transparent" />
      {[...Array(numberOfRows)].map((_, rowIndex) => (
        <g key={rowIndex}>
          {[...Array(numberOfDots)].map((_, i) => (
            <circle
              key={i}
              className="dot"
              r="1"
              fill="url(#gradient)"
              opacity="0.8"
            >
              <animate
                attributeName="cx"
                from={`${(1000 / numberOfDots) * i}`}
                to={`${(1000 / numberOfDots) * i}`}
                dur="4s"
                repeatCount="indefinite"
                values={`${(1000 / numberOfDots) * i};${
                  (1000 / numberOfDots) * i
                }`}
              />
              <animate
                attributeName="cy"
                from={100 + rowIndex * 20}
                to={100 + rowIndex * 20}
                dur="4s"
                repeatCount="indefinite"
                values={`${100 + rowIndex * 20};${
                  80 +
                  rowIndex * 20 +
                  Math.sin((i / numberOfDots) * Math.PI * 2) * 20
                };${100 + rowIndex * 20};${
                  120 +
                  rowIndex * 20 +
                  Math.cos((i / numberOfDots) * Math.PI * 2) * 20
                };${100 + rowIndex * 20}`}
                begin={`${(i / numberOfDots) * -4}s`}
              />
            </circle>
          ))}
        </g>
      ))}
      {/* Gradient Definition */}
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="cyan">
            <animate
              attributeName="stop-color"
              values="cyan;magenta;yellow;cyan"
              dur="3s"
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="50%" stopColor="magenta">
            <animate
              attributeName="stop-color"
              values="magenta;yellow;cyan;magenta"
              dur="3s"
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="100%" stopColor="yellow">
            <animate
              attributeName="stop-color"
              values="yellow;cyan;magenta;yellow"
              dur="3s"
              repeatCount="indefinite"
            />
          </stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

export const Wave = () => {
  return (
    <div className=" container w-full !mb-[300px]">
      <MovingWave />
    </div>
  );
};
