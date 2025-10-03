"use client";
import React, { useState } from "react";
import Image from "next/image";

type Item = {
  id: number;
  images: { default: string; hover: string };
  description: string;
  price: string;
  color: string[];
  sizes: string[];
};

type CartItem = {
  itemId: number;
  size: string;
};

const allItems: Item[] = [
  {
    id: 1,
    images: {
      default: "/images/shopnewarrivals/sna1.webp", // ✅ no need for /public
      hover: "/images/shopnewarrivals/sna2.webp",
    },
    description: "ODINA SQUARE NECK MAXI DRESS - IVORY",
    price: "$ 189 USD",
    color: ["Ivory"],
    sizes: ["XXS", "XS", "S", "M", "L", "XL", "XXL"],
  },
  {
    id: 2,
    images: {
      default: "/images/shopnewarrivals/sna4.webp",
      hover: "/images/shopnewarrivals/sna3.webp",
    },
    description: "DIA ASYMMETRICAL HEM MIDI DRESS - BLUEBELL",
    price: "$ 139 USD",
    color: ["Blue"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 3,
    images: {
      default: "/images/shopnewarrivals/sna5.webp", // ✅ no need for /public
      hover: "/images/shopnewarrivals/sna6.webp",
    },
    description: "ALEXIS HALTER CUT OUT MAXI DRESS - NADIA PINK OMBRE",
    price: "$159 USD",
    color: ["Red", ", ", "Black"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 4,
    images: {
      default: "/images/shopnewarrivals/sna7.webp",
      hover: "/images/shopnewarrivals/sna8.webp",
    },
    description: "KYLO PLUNGE COWL MAXI DRESS - BERRY",
    price: "$ 139 USD",
    color: ["Blue"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 5,
    images: {
      default: "/images/shopnewarrivals/sna2.webp", // ✅ no need for /public
      hover: "/images/shopnewarrivals/sna2.webp",
    },
    description: "Item 1 description",
    price: "$30",
    color: ["Red", ", ", "Black"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 6,
    images: {
      default: "/images/shopnewarrivals/sna2.webp",
      hover: "/images/shopnewarrivals/sna2.webp",
    },
    description: "Item 2 description",
    price: "$45",
    color: ["Blue"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 7,
    images: {
      default: "/images/shopnewarrivals/sna2.webp", // ✅ no need for /public
      hover: "/images/shopnewarrivals/sna2.webp",
    },
    description: "Item 1 description",
    price: "$30",
    color: ["Red", ", ", "Black"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 8,
    images: {
      default: "/images/shopnewarrivals/sna2.webp",
      hover: "/images/shopnewarrivals/sna2.webp",
    },
    description: "Item 2 description",
    price: "$45",
    color: ["Blue"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 9,
    images: {
      default: "/images/shopnewarrivals/sna2.webp", // ✅ no need for /public
      hover: "/images/shopnewarrivals/sna2.webp",
    },
    description: "Item 1 description",
    price: "$30",
    color: ["Red", ", ", "Black"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 10,
    images: {
      default: "/images/shopnewarrivals/sna2.webp",
      hover: "/images/shopnewarrivals/sna2.webp",
    },
    description: "Item 2 description",
    price: "$45",
    color: ["Blue"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 11,
    images: {
      default: "/images/shopnewarrivals/sna2.webp", // ✅ no need for /public
      hover: "/images/shopnewarrivals/sna2.webp",
    },
    description: "Item 1 description",
    price: "$30",
    color: ["Red", ", ", "Black"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 12,
    images: {
      default: "/images/shopnewarrivals/sna2.webp",
      hover: "/images/shopnewarrivals/sna2.webp",
    },
    description: "Item 2 description",
    price: "$45",
    color: ["Blue"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 13,
    images: {
      default: "/images/shopnewarrivals/sna2.webp", // ✅ no need for /public
      hover: "/images/shopnewarrivals/sna2.webp",
    },
    description: "Item 1 description",
    price: "$30",
    color: ["Red", ", ", "Black"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 14,
    images: {
      default: "/images/shopnewarrivals/sna2.webp",
      hover: "/images/shopnewarrivals/sna2.webp",
    },
    description: "Item 2 description",
    price: "$45",
    color: ["Blue"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 15,
    images: {
      default: "/images/shopnewarrivals/sna2.webp", // ✅ no need for /public
      hover: "/images/shopnewarrivals/sna2.webp",
    },
    description: "Item 1 description",
    price: "$30",
    color: ["Red", ", ", "Black"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 16,
    images: {
      default: "/images/shopnewarrivals/sna2.webp",
      hover: "/images/shopnewarrivals/sna2.webp",
    },
    description: "Item 2 description",
    price: "$45",
    color: ["Blue"],
    sizes: ["S", "M", "L", "XL"],
  },
  // ... rest of items
];

export default function ProductSection() {
  const [itemsToShow, setItemsToShow] = useState(4);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [hoveredItemId, setHoveredItemId] = useState<number | null>(null);

  const addToCart = (itemId: number, size: string) => {
    setCart(prev => [...prev, { itemId, size }]);
    alert(`Added Item ${itemId} (${size}) to cart!`);
  };

  const loadMoreItems = () => {
    setItemsToShow(prev => Math.min(prev + 4, allItems.length));
  };

  return (
    <div className="bg-[#EBE6DD] mx-auto px-4 py-[50px] w-full lg:h-[1000px]">
      {/* Section Title with 'See More' Button */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-semibold text-[16px] lg:text-[30px]">
          SHOP NEW ARRIVALS
        </h2>
        <button
          onClick={loadMoreItems}
          disabled={itemsToShow >= allItems.length}
          className="border-b-2 border-black text-black disabled:text-gray-400"
          aria-label="See more products "
        >
          View All
        </button>
      </div>

      {/* Products Grid */}
      <div className="gap-6 grid grid-cols-2 md:grid-cols-4">
        {allItems.slice(0, itemsToShow).map(item => {
          const isHovered = hoveredItemId === item.id;
          return (
            <div
              key={item.id}
              className="flex flex-col border overflow-hidden cursor-pointer"
              onMouseEnter={() => setHoveredItemId(item.id)}
              onMouseLeave={() => setHoveredItemId(null)}
            >
              {/* Optimized Image */}
              <div className="relative">
                <Image
                  src={isHovered ? item.images.hover : item.images.default}
                  alt={item.description}
                  width={450}
                  height={680}
                  className="lg:w-full lg:h-[680px] lg:object-cover transition-opacity duration-300"
                  priority
                />
                {/* Size Drawer */}
                <div
                  className={`absolute left-0 right-0 lg:h-[100px] bottom-0  bg-[#EBE6DD]/70 flex flex-row justify-center items-center border-t border-gray-300 overflow-hidden transition-transform duration-300 ${
                    isHovered ? "lg:translate-x-0" : "lg:translate-y-50"
                  }`}
                >
                  <div className="flex flex-col justify-center items-center lg:gap-[10px] p-2">
                    <h4 className="font-semibold text-[16px]">Quick Add</h4>
                    <div className="hidden lg:flex flex-row justify-between gap-[15px]">
                      {item.sizes.map(size => (
                        <button
                          key={size}
                          className="hover:bg-[#EBE6DD] px-3 py-1 border border-gray-400 rounded transition-colors"
                          onClick={e => {
                            e.stopPropagation();
                            addToCart(item.id, size);
                          }}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Description, Price, Color */}
              <div className="flex flex-col items-start bg-[#EBE6DD] p-3">
                <p className="font-semibold text-[11px] text-black lg:text-[14px] text-left">
                  {item.description.slice(0, 40)}..
                </p>

                <p className="font-normal text-[11px] text-gray-900 lg:text-sm">
                  {item.price}
                </p>
                {/* <p className="text-gray-500 text-sm">Color: {item.color}</p> */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
