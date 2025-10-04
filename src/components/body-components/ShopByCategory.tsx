import React from "react";
import Link from "next/link";
import Image from "next/image";

type Category = {
  id: number;
  image: string;
  link: string;
  linktag: string;
};

const categoryItems: Category[] = [
  {
    id: 1,
    image: "/images/shopbycategory/sbc1.jpg",
    link: "/home",
    linktag: "SHOP NEW ARRIVALS",
  },
  {
    id: 2,
    image: "/images/shopbycategory/sbc2.jpg",
    link: "/home",
    linktag: "SHOP DRESSES",
  },
  {
    id: 3,
    image: "/images/shopbycategory/sbc3.jpg",
    link: "/home",
    linktag: "SHOP SWIM",
  },
];

export default function ShopByCategory() {
  return (
    <div className="flex flex-col gap-[35px] mx-auto mt-[30px] p-[20px] w-full">
      {/* Top */}
      <div className="flex flex-row justify-between items-center">
        <h3 className="font-semibold text-[16px] lg:text-[30px]">
          SHOP BY CATEGORY
        </h3>
        <Link href={"/#"} className="border-b-2 border-black text-black">
          SHOP ALL
        </Link>
      </div>
      {/* Bottom */}
      <div className="flex lg:flex-row flex-col justify-between items-center gap-4">
        {categoryItems.map(item => {
          return (
            <div
              key={item.id}
              className="relative flex justify-center items-center"
            >
              <Image
                src={item.image}
                alt={item.linktag}
                width={600}
                height={700}
                className="relative lg:w-[600px] lg:h-[750px] lg:object-cover transition-opacity duration-300"
                priority
              />
              <Link
                href={item.link}
                className="bottom-10 absolute text-[14px] text-white text-center underline underline-offset-8"
              >
                {item.linktag}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
