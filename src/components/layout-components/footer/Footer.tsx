import React from "react";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaPinterest, FaTiktok } from "react-icons/fa";
import Link from "next/link";

interface FooterProps {
  id?: string;
}

const Footer: React.FC<FooterProps> = ({ id = "main-footer" }) => {
  const brands = [
    { src: "/images/footer/f2.png", alt: "Runaway The Label" },
    { src: "/images/footer/f1.png", alt: "Seven Wonders" },
    { src: "/images/footer/f3.png", alt: "Runaway Mens" },
    { src: "/images/footer/f4.png", alt: "Vacanza Resort" },
  ];

  const shopLinks = [
    { id: "shop-link", label: "Shop", href: "/shop" },
    { id: "men-link", label: "Men", href: "/men" },
    { id: "new-arrivals-link", label: "New Arrivals", href: "/new-arrivals" },
    { id: "sale-link", label: "Sale", href: "/sale" },
  ];

  const infoLinks = [
    { id: "about-link", label: "About Us", href: "/about" },
    { id: "faq-link", label: "Frequently Asked Questions", href: "/faq" },
    { id: "blog-link", label: "Blog", href: "/blog" },
    { id: "contact-link", label: "Contact Us", href: "/contact" },
    { id: "sitemap-link", label: "Sitemap", href: "/sitemap" },
  ];

  const careLinks = [
    { id: "shipping-link", label: "Shipping", href: "/shipping" },
    { id: "returns-link", label: "Returns Policy", href: "/returns" },
    {
      id: "request-return-link",
      label: "Request A Return",
      href: "/request-return",
    },
    { id: "size-guide-link", label: "Size Guide", href: "/size-guide" },
    { id: "terms-link", label: "Terms And Conditions", href: "/terms" },
    { id: "privacy-link", label: "Privacy Policy", href: "/privacy" },
  ];
  const folowLinks = [
    { id: "instagram-link", label: "Instagram", href: "#" },
    { id: "facebook-link", label: "facebook", href: "#" },
    { id: "tiktok-link", label: "Tiktok", href: "#" },
    { id: "pinterest-link", label: "Pinterest", href: "#" },
  ];

  return (
    <footer id={id} className="bg-[#EBE6DD] text-black">
      {/* Brand Logos */}
      <div className="py-12 border-b border-black/10">
        <div className="justify-items-center items-center gap-8 grid grid-cols-2 md:grid-cols-4 mx-auto px-6 max-w-7xl">
          {brands.map((brand, i) => (
            <Image
              key={i}
              src={brand.src}
              width={300}
              height={100}
              alt={brand.alt}
              className="h-12 object-contain"
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex lg:flex-row flex-col justify-around items-start md:items-center lg:items-start gap-[50px] lg:gap-[100px] mx-auto px-6 py-12 max-w-full">
        {/* Newsletter */}
        <div
          id="newsletter-section"
          className="md:flex md:flex-col md:items-center lg:items-start max-w-[350px] md:max-w-[500px] lg:max-w-[300px] lg:text-left md:text-center"
        >
          <h4 className="mb-4 font-medium text-sm tracking-wide">
            HELLO, IT'S YOUR ADVENTURE CALLING
          </h4>
          <p className="mb-4 text-sm">
            Subscribe to our newsletter for 10% your first order, new releases,
            and exclusive discounts
          </p>
          <div className="relative md:w-[550px] lg:w-full">
            <input
              type="email"
              placeholder="Email Address"
              id="footer-email-input"
              className="bg-transparent px-4 py-3 border border-black/20 focus:border-black focus:outline-none w-full text-sm"
            />
            <button
              id="newsletter-submit"
              className="top-1/2 right-3 absolute -translate-y-1/2"
            >
              →
            </button>
          </div>
          {/* Social Icon */}
          <div className="flex gap-4 mt-6">
            <Link href={"#"}>
              <FaInstagram />
            </Link>
            <Link href={"#"}>
              <FaFacebook />
            </Link>
            <Link href={"#"}>
              <FaTiktok />
            </Link>
            <Link href={"#"}>
              <FaPinterest />
            </Link>
          </div>
        </div>

        <div className="flex md:flex-row flex-col justify-around lg:justify-between items-start gap-[30px] w-full">
          {/* Shop Links */}
          <nav id="shop-links">
            <h4 className="mb-4 font-bold text-sm underline underline-offset-8 tracking-wide">
              RUNAWAY THE LABEL
            </h4>
            <div className="space-y-3">
              {shopLinks.map(link => (
                <a
                  key={link.id}
                  href={link.href}
                  id={link.id}
                  className="block text-sm hover:underline"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>

          {/* Info Links */}
          <nav id="info-links">
            <h4 className="mb-4 font-bold text-sm underline underline-offset-8 tracking-wide">
              INFO
            </h4>
            <div className="space-y-3">
              {infoLinks.map(link => (
                <a
                  key={link.id}
                  href={link.href}
                  id={link.id}
                  className="block text-sm hover:underline"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>

          {/* Customer Care */}
          <nav id="customer-care-links">
            <h4 className="mb-4 font-bold text-sm underline underline-offset-8 tracking-wide">
              CUSTOMER CARE
            </h4>
            <div className="space-y-3">
              {careLinks.map(link => (
                <a
                  key={link.id}
                  href={link.href}
                  id={link.id}
                  className="block text-sm hover:underline"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>
          {/* Follow Link */}
          <nav id="customer-care-links">
            <h4 className="mb-4 font-bold text-sm underline underline-offset-8 tracking-wide">
              FOLLOW US
            </h4>
            <div className="space-y-3">
              {folowLinks.map(link => (
                <a
                  key={link.id}
                  href={link.href}
                  id={link.id}
                  className="block text-sm hover:underline"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="py-4 border-t border-black/10">
        <div className="flex md:flex-row flex-col justify-between items-center gap-2 mx-auto px-2 max-w-full text-[10px] lg:text-[12px]">
          <span id="region-selector">🌐 US</span>
          <div>
            <h5 className="flex flex-row justify-around items-center font-normal text-[12px] lg:text-[14px]">
              All rights reserved. Site by Inmaj Hossain | +88 01515 212670
            </h5>
          </div>
          <div className="flex gap-6">
            <span id="copyright">© RUNAWAY THE LABEL 2025</span>
            <span id="acknowledgment" className="hidden md:inline">
              ACKNOWLEDGMENT OF COUNTRY
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
