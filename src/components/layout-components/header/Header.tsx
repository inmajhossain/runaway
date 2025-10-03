import React from "react";
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";
import RightNav from "./right-nav/RightNav";
import Image from "next/image";

function Header() {
  return (
    <div className="flex flex-row justify-between items-center">
      <MobileNav />
      <Navbar />
      {/* ✅ Correct Image usage */}
      <Image
        src="/images/header/logo.png"
        alt="Logo"
        width={100}
        height={50}
        priority
        className="lg:hidden lg:ml-[-550px]"
      />
      <Image
        src="/images/header/logoo.png"
        alt="Logo"
        width={170}
        height={80}
        priority
        className="hidden z-[98] lg:flex mt-[15px] lg:ml-[-550px]"
      />
      <RightNav />
    </div>
  );
}

export default Header;
