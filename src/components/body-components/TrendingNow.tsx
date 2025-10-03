"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Product = {
  id: number;
  image: string;
  title: string;
  description: string;
  price: string;
  sizes: string[];
};

const products: Product[] = [
  {
    id: 1,
    image: "/images/menwomen/Men.jpg",
    title: "Floral Summer Dress",
    description: "A breezy floral dress perfect for summer days.",
    price: "$149 USD",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 2,
    image: "/images/menwomen/Women.jpg",
    title: "Evening Gown",
    description: "Elegant evening gown for special occasions.",
    price: "$120 USD",
    sizes: ["S", "M", "L"],
  },
  {
    id: 3,
    image: "/images/menwomen/Men.jpg",
    title: "Casual Linen Dress",
    description: "Lightweight linen dress, stylish and comfy.",
    price: "$75 USD",
    sizes: ["M", "L", "XL"],
  },
  {
    id: 4,
    image: "/images/menwomen/Women.jpg",
    title: "Party Dress",
    description: "Shiny dress made for dancing all night.",
    price: "$95 USD",
    sizes: ["S", "M", "L"],
  },
  {
    id: 5,
    image: "/images/menwomen/Men.jpg",
    title: "Beach Dress",
    description: "Relaxed dress for a perfect beach day.",
    price: "$65 USD",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 6,
    image: "/images/menwomen/Women.jpg",
    title: "Vintage Dress",
    description: "Retro vibes with a modern twist.",
    price: "$88 USD",
    sizes: ["M", "L"],
  },
  {
    id: 7,
    image: "/images/menwomen/Men.jpg",
    title: "Cocktail Dress",
    description: "Perfect little black dress for cocktails.",
    price: "$99 USD",
    sizes: ["S", "M", "L"],
  },
];

export default function DressesShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hovered, setHovered] = useState(false);

  const prevSlide = () => {
    setCurrentIndex(prev => (prev === 0 ? products.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex(prev => (prev === products.length - 1 ? 0 : prev + 1));
  };

  const product = products[currentIndex];

  const addToCart = (id: number, size: string) => {
    alert(`Added Product ${id} (Size: ${size}) to cart`);
  };

  return (
    <section className="flex lg:flex-row flex-col items-center lg:items-stretch bg-[#EBE6DD] p-5 w-full lg:h-[940px]">
      {/* Left Static Image */}
      <div className="relative w-full lg:w-1/2 h-[300px] md:h-[500px] lg:h-auto">
        <Image
          src="/images/menwomen/Men.jpg"
          alt="Fashion Banner"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Right Content */}
      <div className="relative flex flex-col justify-between lg:py-[100px] w-full lg:w-1/2">
        <h2 className="mt-[50px] lg:mt-0 mb-6 font-lobster font-bold text-2xl md:text-3xl lg:text-4xl">
          TRENDING NOW
        </h2>

        {/* Slider */}
        <div className="relative flex flex-col items-center">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="top-50 lg:top-55 left-4 lg:left-60 z-10 absolute -translate-y-1/2"
          >
            <ChevronLeft size={30} />
          </button>

          {/* Image with hover drawer */}
          <div
            className="relative mx-auto cursor-pointer"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <Image
              src={product.image}
              alt={product.title}
              width={350}
              height={525}
              className="w-[350px] h-[430px] object-cover"
            />

            {/* Size Drawer */}
            <div
              className={`absolute left-0 right-0 bottom-0 bg-[#EBE6DD]/90  border-t border-gray-300 overflow-hidden transition-transform duration-700 ${
                hovered ? "translate-y-0" : "hidden translate-y-40"
              }`}
            >
              <div className="flex flex-col justify-center items-center gap-2 p-3">
                <h4 className="font-semibold text-[16px]">Quick Add</h4>
                <div className="flex flex-row flex-wrap justify-center gap-2">
                  {product.sizes.map(size => (
                    <button
                      key={size}
                      className="hover:bg-white px-3 py-1 border border-gray-400 rounded transition-colors"
                      onClick={e => {
                        e.stopPropagation();
                        addToCart(product.id, size);
                      }}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="top-50 lg:top-55 right-4 lg:right-60 z-10 absolute -translate-y-1/2"
          >
            <ChevronRight size={30} />
          </button>

          <h3 className="mt-4 mb-2 font-semibold text-lg md:text-xl">
            {product.title}
          </h3>
          <p className="mb-4 font-bold text-black">{product.price}</p>
        </div>

        {/* Link with animated underline */}
        <Link
          href="/shop"
          className="group relative mx-auto font-medium text-black text-sm"
        >
          Shop new dresses
          <span className="-bottom-1 left-0 absolute bg-black w-0 group-hover:w-full h-[2px] transition-all duration-300"></span>
        </Link>
      </div>
    </section>
  );
}
