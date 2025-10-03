"use client";
// src/components/CountrySelector.tsx

import React from "react";

type CountrySelectorProps = {
  onFlagClick: () => void;
  isOpen: boolean;
  onClose: () => void;
  currentCountryCode?: string; // e.g., 'US'
};

export const CountrySelector: React.FC<CountrySelectorProps> = ({
  onFlagClick,
  isOpen,
  onClose,
  currentCountryCode = "US",
}) => {
  // Use a placeholder URL for the flag image
  const flagUrl = `https://flagcdn.com/w20/${currentCountryCode.toLowerCase()}.png`;

  return (
    <div className="relative">
      {/* Flag Button */}
      <button onClick={onFlagClick} className="focus:outline-none">
        <img
          src={flagUrl}
          alt={`Flag of ${currentCountryCode}`}
          className="shadow-sm border border-gray-300 rounded-full w-[24px] h-[24px] object-cover hover:scale-105 transition transform"
        />
      </button>

      {/* Modal Pop-up (Conditional Rendering) */}
      {isOpen && (
        <div
          className="top-[40px] right-[-100px] z-50 absolute bg-white shadow-xl mt-2 p-4 border border-amber-100 rounded-lg w-[150px]"
          // Ensure it's responsive: right-0 keeps it aligned to the right.
        >
          <h3 className="mb-2 font-semibold text-[12px]">Select Your Region</h3>
          <ul className="space-y-1 max-h-40 overflow-y-auto">
            {["USA", "Canada", "UK", "France", "Germany"].map(country => (
              <li
                key={country}
                className="flex items-center hover:bg-gray-100 p-2 rounded-md text-gray-700 text-sm cursor-pointer"
                onClick={() => {
                  console.log("Selected", country);
                  onClose();
                }}
              >
                {/*  */}
                {country}
              </li>
            ))}
          </ul>
          {/* Optional: Close button or click outside handler */}
        </div>
      )}
    </div>
  );
};
