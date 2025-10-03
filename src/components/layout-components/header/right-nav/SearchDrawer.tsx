// src/components/SearchDrawer.tsx
"use client";
import React, { useState, useEffect } from "react";

type SearchDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

// Mock data for filtering
const ALL_PRODUCTS = [
  "Men T-Shirt",
  "Women Jeans",
  "Men Sweater",
  "Women Dress",
  "Kids Shoes",
  "Men Accessories",
  "Women Blouse",
];

export const SearchDrawer: React.FC<SearchDrawerProps> = ({ isOpen }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredResults, setFilteredResults] = useState<string[]>([]);

  // Real-time Filtering Effect
  useEffect(() => {
    if (searchTerm.length > 1) {
      const results = ALL_PRODUCTS.filter(product =>
        product.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredResults(results);
    } else {
      setFilteredResults([]);
    }
  }, [searchTerm]);

  // Tailwind classes for the slide-down effect
  const drawerClasses = `
    absolute top-0 left-0  w-full bg-amber-50 shadow-xl transition-all duration-300 ease-in-out z-10
    ${
      isOpen
        ? "max-h-96 opacity-100 border-t border-gray-200"
        : "max-h-0 opacity-0 overflow-hidden"
    }
    p-4 sm:p-6 // Responsive padding
  `;

  return (
    <div className={drawerClasses}>
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search for men, women, accessories..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className="p-3 border border-red-700 focus:border-blue-500 rounded-lg focus:ring-blue-500 w-full text-lg transition"
      />

      {/* Filtering Results */}
      {searchTerm.length > 1 && (
        <div className="mt-4 pt-4 border-t">
          <h4 className="mb-2 font-semibold text-gray-600">
            {filteredResults.length} Results for "{searchTerm}"
          </h4>
          <ul className="space-y-1">
            {filteredResults.map((result, index) => (
              <li
                key={index}
                className="hover:bg-gray-100 p-2 rounded-md text-gray-800 text-base cursor-pointer"
              >
                {result}
              </li>
            ))}
            {filteredResults.length === 0 && (
              <li className="p-2 text-gray-500 italic">No products found.</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};
