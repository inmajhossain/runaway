import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function WomensFashion() {
  return (
    <div className="flex lg:flex-row flex-col justify-between items-center gap-[25px] mx-auto mt-[50px] lg:mt-0 p-[10px] lg:p-[25px] w-full">
      {/* Left Text Content */}
      <div className="flex flex-col justify-center items-start lg:ml-[150px] w-[350px] md:w-[550px] lg:w-[500px] text-left">
        <h2 className="mb-4 font-bold text-2xl md:text-4xl lg:text-5xl leading-snug">
          WOMEN’S <br /> FASHION DONE RIGHT
        </h2>
        <p className="mb-4 text-gray-700 text-sm md:text-base">
          <strong>
            Step into a world of unique prints, first-to-market fashion designs,
            and detail-oriented pieces that are set to become the forever
            favorites in your wardrobe.
          </strong>
        </p>
        <p className="mb-4 text-gray-600 text-sm md:text-base">
          Runaway The Label is your ultimate destination for Women’s fashion
          online. Born in sunny Sydney and now loved in the US and worldwide, we
          bring you daring, confident, and expressive fashion that stays one
          step ahead.
        </p>
        <p className="mb-4 text-gray-600 text-sm md:text-base">
          Runaway The Label is here to guide you through a world of endless
          outfit inspiration — so getting dressed is not just easy but exciting.
          From timeless tops to flattering dresses, our collections are designed
          to empower and inspire you to be your most confident self.
        </p>
        <p className="mb-6 text-gray-600 text-sm md:text-base">
          As for our{" "}
          <Link
            href="/mens-fashion"
            className="text-blue-700 hover:text-blue-900 underline"
          >
            Men’s fashion line
          </Link>
          , picture stylish linen shirts, airy button-ups, shorts, and
          distinctive prints for the man wanting to stand out from the crowd.
        </p>

        <Link
          href="/shop"
          className="inline-block hover:bg-black px-6 py-2 border border-black text-black hover:text-white text-sm md:text-base transition"
        >
          SHOP NOW
        </Link>
      </div>

      {/* Right Image */}
      <div className="w-full lg:w-[1000px] h-[300px] md:h-[500px] lg:h-[850px]">
        <Link
          href="https://www.facebook.com/inmajhossain"
          target="_blank" // open in new tab
          rel="noopener noreferrer"
        >
          <Image
            src="/images/WomenFashion.webp"
            alt="Women Fashion"
            width={1000}
            height={850}
            className="py-[5px] lg:py-0 w-full lg:w-[1000] h-[350px] md:h-auto lg:h-[850px] object-cover"
          />
        </Link>
      </div>
    </div>
  );
}
