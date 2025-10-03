import React from "react";

function HeaderTop() {
  return (
    <div className="flex justify-center items-center bg-[#EBE6DD] w-full h-[40px] overflow-hidden">
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        @media (max-width: 1023px) {
          .scrolling-container {
            display: flex;
            animation: scroll 10s linear infinite;
            white-space: nowrap;
          }
          
          .scrolling-text {
            padding-right: 80px;
          }
        }
        
        @media (min-width: 790px) {
          .scrolling-container {
            display: block;
          }
        }
      `}</style>

      <div className="scrolling-container">
        <h5 className="inline-block px-4 font-normal text-[10px] lg:text-[14px] text-center scrolling-text">
          <span className="font-semibold">FREE EXPRESS SHIPPING</span> for US &
          UK orders above $150 USD |{" "}
          <span className="font-semibold">SHOP NOW, PAY LATER</span> Afterpay &
          Klarna available to US customers
        </h5>
        <h5
          className="lg:hidden inline-block px-4 font-normal text-[10px] lg:text-[14px] text-center scrolling-text"
          aria-hidden="true"
        >
          <span className="font-semibold">FREE EXPRESS SHIPPING</span> for US &
          UK orders above $150 USD |{" "}
          <span className="font-semibold">SHOP NOW, PAY LATER</span> Afterpay &
          Klarna available to US customers
        </h5>
      </div>
    </div>
  );
}

export default HeaderTop;
