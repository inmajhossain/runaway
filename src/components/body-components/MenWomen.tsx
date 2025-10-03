import React from "react";
import Image from "next/image";
import { TextRoll } from "@/components/motion-primitives/text-roll";

function MenWomen() {
  return (
    <div className="flex lg:flex-row flex-col justify-between items-center gap-[15px] mx-auto mt-[15px] w-full h-[800px] md:h-auto lg:h-[930px]">
      {/* Left Side - Women */}
      <div className="relative w-full h-[800px] lg:h-[930px]">
        <Image
          src="/images/menwomen/Women.jpg"
          alt="Women"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-end items-center pb-[30px] lg:pb-0 font-lobster text-white">
          <TextRoll className="font-thin text-[50px] lg:text-[80px]" roll="up">
            WOMEN
          </TextRoll>
          <h4 className="mt-[-10px] lg:mt-[-20px] border-white border-b-2 w-[130px] text-[16px] lg:text-[20px] text-center">
            SHOP WOMEN
          </h4>
        </div>
      </div>

      {/* Right Side - Men */}
      <div className="relative w-full h-[800px] lg:h-[930px]">
        <Image
          src="/images/menwomen/Men.jpg"
          alt="Men"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-end items-center pb-[30px] lg:pb-0 font-lobster text-white">
          <TextRoll className="font-thin text-[50px] lg:text-[80px]" roll="up">
            MEN
          </TextRoll>
          <h4 className="mt-[-10px] lg:mt-[-20px] border-white border-b-2 w-[130px] text-[16px] lg:text-[20px] text-center">
            SHOP MEN
          </h4>
        </div>
      </div>
    </div>
  );
}

export default MenWomen;
