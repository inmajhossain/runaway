import React from "react";
import Image from "next/image";

type Quality = {
  id: number;
  image: string;
  title: string;
  description: string;
  className: string;
};

const qualityItems: Quality[] = [
  {
    id: 1,
    image: "/images/quality/q1.svg",
    title: "QUALITY",
    description:
      "Designing stylish, high-quality, affordable pieces is in our DNA.",
    className:
      "lg:border-r-2 border-b-2 md:border-b-0 py-[20px] lg:py-[20px] border-black lg:border-l-2",
  },
  {
    id: 2,
    image: "/images/quality/q2.svg",
    title: "Customer Commitment",
    description:
      "Customers are our focus: joy comes from looking good, feeling good, and great service.",
    className:
      "lg:border-r-2 border-b-2 md:border-b-0  py-[20px] lg:py-[20px] border-black lg:border-l-2",
  },
  {
    id: 3,
    image: "/images/quality/q3.svg",
    title: "Good Citizenship",
    description:
      "We value being good citizens and giving back to our community and beyond.",
    className:
      "lg:border-r-2 md:border-b-0  border-b-2 py-[20px] lg:py-[20px] border-black lg:border-l-2 ",
  },
  {
    id: 4,
    image: "/images/quality/q4.svg",
    title: "Teamwork",
    description:
      "Our Sydney designers and production team collaborate daily to create fits you'll love.",
    className:
      "lg:border-r-2 md:border-b-0  border-b-2 py-[20px] lg:py-[20px] border-black lg:border-l-2",
  },
];

export default function Quality() {
  return (
    <div className="flex md:flex-row flex-col flex-wrap justify-around items-center gap-[50px] lg:gap-0 mx-auto p-[20px] w-full">
      {qualityItems.map(item => {
        return (
          <div
            key={item.id}
            className={`flex flex-col justify-between items-center gap-[25px] w-[350px] mx-auto ${item.className}`}
          >
            <Image
              src={item.image}
              alt={item.description}
              width={100}
              height={80}
              className="relative w-[100px] h-[80px]"
              priority
            />
            <h3 className="text-[18px]">{item.title}</h3>
            <h4 className="w-[270px] text-[12px]">{item.description}</h4>
          </div>
        );
      })}
    </div>
  );
}
