"use client";
import React, { useState } from "react";
import { ChevronRight } from "lucide-react";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState<string | null>(null);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const menuData = {
    "NEW ARRIVALS": {
      image:
        "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=600&h=800&fit=crop",
      categories: [
        {
          name: "SHOP ALL",
          subcategories: [
            "T-Shirts",
            "Shirts",
            "Jeans",
            "Trousers",
            "Jackets",
            "Sweaters",
          ],
        },
        {
          name: "BEST SELLERS",
          subcategories: [
            "Sneakers",
            "Formal Shoes",
            "Boots",
            "Sandals",
            "Loafers",
          ],
        },
        {
          name: "BACK IN STORE",
          subcategories: ["Watches", "Belts", "Wallets", "Sunglasses", "Bags"],
        },
        {
          name: "NEW DRESSES",
          subcategories: [
            "Activewear",
            "Running Shoes",
            "Gym Wear",
            "Sports Accessories",
          ],
        },
        {
          name: "NEW SETS",
          subcategories: ["Watches", "Belts", "Wallets", "Sunglasses", "Bags"],
        },

        {
          name: "NEW MENS",
          subcategories: ["Watches", "Belts", "Wallets", "Sunglasses", "Bags"],
        },

        {
          name: "NEW SEVEN WONDERS",
          subcategories: ["Watches", "Belts", "Wallets", "Sunglasses", "Bags"],
        },

        {
          name: "COMING SOON",
          subcategories: ["Watches", "Belts", "Wallets", "Sunglasses", "Bags"],
        },
      ],
    },
    WOMEN: {
      image:
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=800&fit=crop",
      categories: [
        {
          name: "Clothing",
          subcategories: [
            "Dresses",
            "Tops",
            "Jeans",
            "Skirts",
            "Jackets",
            "Knitwear",
          ],
        },
        {
          name: "Footwear",
          subcategories: ["Heels", "Flats", "Sneakers", "Boots", "Sandals"],
        },
        {
          name: "Accessories",
          subcategories: [
            "Handbags",
            "Jewelry",
            "Watches",
            "Sunglasses",
            "Scarves",
          ],
        },
        {
          name: "Beauty",
          subcategories: ["Makeup", "Skincare", "Fragrances", "Hair Care"],
        },
      ],
    },
    DRESSES: {
      image:
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=800&fit=crop",
      categories: [
        {
          name: "Clothing",
          subcategories: [
            "Dresses",
            "Tops",
            "Jeans",
            "Skirts",
            "Jackets",
            "Knitwear",
          ],
        },
        {
          name: "Footwear",
          subcategories: ["Heels", "Flats", "Sneakers", "Boots", "Sandals"],
        },
        {
          name: "Accessories",
          subcategories: [
            "Handbags",
            "Jewelry",
            "Watches",
            "Sunglasses",
            "Scarves",
          ],
        },
        {
          name: "Beauty",
          subcategories: ["Makeup", "Skincare", "Fragrances", "Hair Care"],
        },
      ],
    },
    MEN: {
      image:
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=800&fit=crop",
      categories: [
        {
          name: "Clothing",
          subcategories: [
            "Dresses",
            "Tops",
            "Jeans",
            "Skirts",
            "Jackets",
            "Knitwear",
          ],
        },
        {
          name: "Footwear",
          subcategories: ["Heels", "Flats", "Sneakers", "Boots", "Sandals"],
        },
        {
          name: "Accessories",
          subcategories: [
            "Handbags",
            "Jewelry",
            "Watches",
            "Sunglasses",
            "Scarves",
          ],
        },
        {
          name: "Beauty",
          subcategories: ["Makeup", "Skincare", "Fragrances", "Hair Care"],
        },
      ],
    },

    SWIMWEAR: {
      image:
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=800&fit=crop",
      categories: [
        {
          name: "Clothing",
          subcategories: [
            "Dresses",
            "Tops",
            "Jeans",
            "Skirts",
            "Jackets",
            "Knitwear",
          ],
        },
        {
          name: "Footwear",
          subcategories: ["Heels", "Flats", "Sneakers", "Boots", "Sandals"],
        },
        {
          name: "Accessories",
          subcategories: [
            "Handbags",
            "Jewelry",
            "Watches",
            "Sunglasses",
            "Scarves",
          ],
        },
        {
          name: "Beauty",
          subcategories: ["Makeup", "Skincare", "Fragrances", "Hair Care"],
        },
      ],
    },
    "$80 & UNDER": {
      image:
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=800&fit=crop",
      categories: [
        {
          name: "Clothing",
          subcategories: [
            "Dresses",
            "Tops",
            "Jeans",
            "Skirts",
            "Jackets",
            "Knitwear",
          ],
        },
        {
          name: "Footwear",
          subcategories: ["Heels", "Flats", "Sneakers", "Boots", "Sandals"],
        },
        {
          name: "Accessories",
          subcategories: [
            "Handbags",
            "Jewelry",
            "Watches",
            "Sunglasses",
            "Scarves",
          ],
        },
        {
          name: "Beauty",
          subcategories: ["Makeup", "Skincare", "Fragrances", "Hair Care"],
        },
      ],
    },
  };

  return (
    <nav className="hidden relative lg:flex">
      <div className="px-4 md:w-[720px]">
        <div className="flex items-center space-x-2 h-16">
          {/* Navigation Items */}
          <div className="flex space-x-1">
            {Object.keys(menuData).map(nav => (
              <div
                key={nav}
                className="relative"
                onMouseEnter={() => setActiveNav(nav)}
                onMouseLeave={() => {
                  setActiveNav(null);
                  setHoveredCategory(null);
                }}
              >
                <button className="relative px-2 h-16 font-medium text-[14px] text-black lg:text-white hover:text-black transition-colors">
                  {nav}
                  {/* Active Underline */}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-black transform origin-left transition-transform duration-300 ${
                      activeNav === nav ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mega Menu */}
      {activeNav && (
        <div
          className="top-[70px] left-0 z-50 absolute bg-[#EBE6DD] border-gray-200 border-t lg:w-[720px] h-[900px]"
          onMouseEnter={() => setActiveNav(activeNav)}
          onMouseLeave={() => {
            setActiveNav(null);
            setHoveredCategory(null);
          }}
        >
          <div className="mx-auto w-[720px]">
            <div className="grid grid-cols-12">
              {/* Categories Section - Left Side */}
              <div
                className={`col-span-4 p-6 transform transition-all duration-1000 ease-out ${
                  activeNav
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-full opacity-0"
                }`}
              >
                <h3 className="mb-4 font-semibold text-gray-900 text-lg">
                  Categories
                </h3>
                <div className="">
                  {menuData[activeNav as keyof typeof menuData].categories.map(
                    category => (
                      <div
                        key={category.name}
                        className="group relative"
                        onMouseEnter={() => setHoveredCategory(category.name)}
                      >
                        <button className="flex justify-between items-centerhover:bg-amber-50 hover:shadow-md px-4 py-3 rounded-lg w-full text-gray-700 text-left transition-all group-hover:translate-x-1 duration-200">
                          <span className="font-medium">{category.name}</span>
                          <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-black transition-colors" />
                        </button>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Image/Subcategories Section - Right Side */}
              <div className="hidden relative md:flex col-span-8 overflow-hidden">
                {/* Image */}
                <img
                  src={menuData[activeNav as keyof typeof menuData].image}
                  alt={activeNav}
                  className={`absolute lg:left-[50px] inset-0 w-[450px] h-[450px] object-cover transition-opacity duration-300 ${
                    hoveredCategory ? "opacity-0" : "opacity-100"
                  }`}
                />

                {/* Overlay gradient on image */}
                <div
                  className={`absolute inset-0  to-transparent transition-opacity duration-300 ${
                    hoveredCategory ? "opacity-0" : "opacity-100"
                  }`}
                >
                  <div className="lg:ml-[50px] p-8 text-white">
                    <h2 className="mb-2 font-bold text-4xl">{activeNav}</h2>
                    <p className="text-lg">Explore our latest collection</p>
                  </div>
                </div>

                {/* Subcategories */}
                {hoveredCategory && (
                  <div className="absolute inset-0 bg-[#EBE6DD] p-8 animate-fadeIn">
                    <h3 className="mb-6 font-semibold text-gray-900 text-2xl">
                      {hoveredCategory}
                    </h3>
                    <div className="flex flex-col">
                      {menuData[activeNav as keyof typeof menuData].categories
                        .find(cat => cat.name === hoveredCategory)
                        ?.subcategories.map(sub => (
                          <a
                            key={sub}
                            href="#"
                            className="flex flex-row justify-between items-center items-centerhover:bg-amber-50 hover:shadow-md px-4 py-3 rounded-lg w-[300px] text-gray-700 hover:text-black transition-all hover:translate-x-1 duration-200"
                          >
                            {sub}{" "}
                            <ChevronRight className="w-4 h-4 text-gray-700" />
                          </a>
                        ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
