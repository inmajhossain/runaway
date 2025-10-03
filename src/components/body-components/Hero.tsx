import React from "react";
import Image from "next/image";
import Link from "next/link";

function Im() {
  return (
    <div>
      <Link
        href="https://www.facebook.com/inmajhossain"
        target="_blank" // open in new tab
        rel="noopener noreferrer"
      >
        <Image
          src="/images/hero/hero.jpg" // ✅ no need for /public prefix
          alt="Logo"
          width={2000}
          height={1500}
          priority
          className="lg:mt-[-65px] min-w-[390px] md:min-w-full h-[600px] md:h-auto object-[78%] object-cover"
        />
      </Link>
    </div>
  );
}

export default Im;
