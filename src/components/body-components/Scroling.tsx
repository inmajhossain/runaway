import React, { FC } from "react";

const Scroling: FC = () => {
  const name = "Proudly Designed in Sydney";

  return (
    <div className="flex justify-center items-center bg-black mt-[20px] p-4 min-h-[110px]">
      <style>
        {`
          /* Keyframes defining the right-to-left motion for a seamless loop */
          @keyframes marquee-rtl {
            /* Start: Default position */
            0% { transform: translateX(0%); }
            /* End: Move the content block by 50% of its total width to loop */
            /* Since the content is duplicated (2x), moving by 50% makes the second half start */
            100% { transform: translateX(-50%); } 
          }

          /* Custom class to apply the animation */
          .animate-marquee-rtl-fixed {
            animation: marquee-rtl 30s linear infinite; /* Adjust duration for speed */
            display: inline-block;
            /* The total width of the content must be double the visible content */
            width: 200%; 
          }
        `}
      </style>

      {/* 1. Outer container to hide overflow */}
      <div className="w-full overflow-hidden font-portiso whitespace-nowrap">
        {/* 2. Inner container to hold duplicated content and apply animation */}
        <div className="animate-marquee-rtl-fixed">
          {/* --- Start of duplicated content --- */}
          {/* First copy of the content */}
          {[...Array(10)].map((_, i) => (
            <span
              key={`copy1-${i}`}
              className="bg-clip-text mx-12 font-bold text-white text-xl md:text-5xl uppercase tracking-wider"
            >
              {name}
            </span>
          ))}

          {/* Second copy of the content - CRITICAL for seamless looping */}
          {/* {[...Array(10)].map((_, i) => (
            <span
              key={`copy2-${i}`}
              className="bg-clip-text mx-12 font-bold text-white text-xl md:text-5xl uppercase tracking-wider"
            >
              {name}
            </span>
          ))} */}

          {/* --- End of duplicated content --- */}
        </div>
      </div>
    </div>
  );
};

export default Scroling;
