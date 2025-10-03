"use client";
import React, { useState } from "react";
import { Menu, X, ChevronRight, ChevronLeft } from "lucide-react";

interface SubCategory {
  id: number;
  name: string;
  subCategories?: SubCategory[];
}

interface NavItem {
  id: number;
  name: string;
  subCategories?: SubCategory[];
}

type DrawerLevel = "main" | "sub" | "subsub";

function MobileNav() {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [drawerLevel, setDrawerLevel] = useState<DrawerLevel>("main");
  const [activeCategory, setActiveCategory] = useState<NavItem | null>(null);
  const [activeSubCategory, setActiveSubCategory] =
    useState<SubCategory | null>(null);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  // Sample navigation data
  const navItems: NavItem[] = [
    {
      id: 1,
      name: "Shop",
      subCategories: [
        {
          id: 11,
          name: "Women",
          subCategories: [
            { id: 111, name: "Dresses" },
            { id: 112, name: "Tops" },
            { id: 113, name: "Bottoms" },
            { id: 114, name: "Accessories" },
          ],
        },
        {
          id: 12,
          name: "Men",
          subCategories: [
            { id: 121, name: "Shirts" },
            { id: 122, name: "Pants" },
            { id: 123, name: "Jackets" },
            { id: 124, name: "Shoes" },
          ],
        },
        {
          id: 13,
          name: "Kids",
          subCategories: [
            { id: 131, name: "Boys" },
            { id: 132, name: "Girls" },
            { id: 133, name: "Toddlers" },
          ],
        },
      ],
    },
    {
      id: 2,
      name: "New Arrivals",
      subCategories: [
        {
          id: 21,
          name: "Women",
          subCategories: [
            { id: 211, name: "Dresses" },
            { id: 212, name: "Tops" },
            { id: 213, name: "Bottoms" },
            { id: 214, name: "Accessories" },
          ],
        },
        {
          id: 22,
          name: "Men",
          subCategories: [
            { id: 221, name: "Shirts" },
            { id: 222, name: "Pants" },
            { id: 223, name: "Jackets" },
            { id: 224, name: "Shoes" },
          ],
        },
        {
          id: 23,
          name: "Kids",
          subCategories: [
            { id: 231, name: "Boys" },
            { id: 232, name: "Girls" },
            { id: 233, name: "Toddlers" },
          ],
        },
      ],
    },
    {
      id: 3,
      name: "Sale",
      subCategories: [
        { id: 31, name: "Up to 30% Off" },
        { id: 32, name: "Up to 50% Off" },
        { id: 33, name: "Clearance" },
      ],
    },
    {
      id: 4,
      name: "Collections",
    },
    {
      id: 5,
      name: "About Us",
    },
  ];

  const openDrawer = (): void => {
    setIsDrawerOpen(true);
  };

  const closeDrawer = (): void => {
    setIsDrawerOpen(false);
    setTimeout(() => {
      setDrawerLevel("main");
      setActiveCategory(null);
      setActiveSubCategory(null);
    }, 300);
  };

  const openCategory = (item: NavItem): void => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveCategory(item);
      setDrawerLevel("sub");
      setIsTransitioning(false);
    }, 300);
  };

  const openSubCategory = (item: SubCategory): void => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveSubCategory(item);
      setDrawerLevel("subsub");
      setIsTransitioning(false);
    }, 300);
  };

  const goBackToMain = (): void => {
    setIsTransitioning(true);
    setTimeout(() => {
      setDrawerLevel("main");
      setActiveCategory(null);
      setIsTransitioning(false);
    }, 300);
  };

  const goBackToCategory = (): void => {
    setIsTransitioning(true);
    setTimeout(() => {
      setDrawerLevel("sub");
      setActiveSubCategory(null);
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <>
      {/* Menu Icon */}
      {!isDrawerOpen && (
        <button
          onClick={openDrawer}
          className="lg:hidden hover:bg-[#EBE6DD] p-2"
          aria-label="Open menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      )}

      {/* Overlay */}
      {isDrawerOpen && (
        <div
          className="lg:hidden z-40 fixed inset-0 bg-black/10 bg-opacity-50 transition-opacity duration-700"
          onClick={closeDrawer}
        />
      )}

      {/* Single Drawer with Multiple Levels */}
      <div
        className={`fixed top-0 left-0 h-full w-[300px] bg-[#EBE6DD] z-50 transform transition-transform duration-700 ease-in-out lg:hidden shadow-2xl ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full overflow-hidden">
          {/* Header with Logo */}
          <div className="flex justify-between items-center p-4 border-b">
            <div className="font-bold text-2xl">LOGO</div>
            <button
              onClick={closeDrawer}
              className="hover:bg-amber-50 p-2 rounded-md"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Content Container with Slide Animation */}
          <div className="relative flex-1 overflow-hidden">
            {/* Main Navigation Level */}
            <div
              className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
                drawerLevel === "main"
                  ? "translate-x-0"
                  : isTransitioning
                  ? "-translate-x-full"
                  : "-translate-x-full"
              }`}
            >
              <nav className="p-4 h-full overflow-y-auto">
                <ul className="space-y-2">
                  {navItems.map(item => (
                    <li key={item.id}>
                      {item.subCategories ? (
                        <button
                          onClick={() => openCategory(item)}
                          className="flex justify-between items-center hover:bg-amber-50 p-3 rounded-md w-full text-left"
                        >
                          <span className="font-medium">{item.name}</span>
                          <ChevronRight className="w-5 h-5" />
                        </button>
                      ) : (
                        <a
                          href="#"
                          className="block hover:bg-amber-50 p-3 rounded-md font-medium"
                          onClick={closeDrawer}
                        >
                          {item.name}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Categories Level */}
            <div
              className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
                drawerLevel === "sub"
                  ? "translate-x-0"
                  : drawerLevel === "main"
                  ? "translate-x-full"
                  : "-translate-x-full"
              }`}
            >
              <div className="flex flex-col h-full">
                <button
                  onClick={goBackToMain}
                  className="flex items-center gap-2 hover:bg-amber-50 p-4 border-b"
                >
                  <ChevronLeft className="w-5 h-5" />
                  <span className="font-medium">Main Menu</span>
                </button>
                <nav className="flex-1 p-4 overflow-y-auto">
                  <h3 className="mb-4 font-bold text-lg">
                    {activeCategory?.name}
                  </h3>
                  <ul className="space-y-2">
                    {activeCategory?.subCategories?.map(subItem => (
                      <li key={subItem.id}>
                        {subItem.subCategories ? (
                          <button
                            onClick={() => openSubCategory(subItem)}
                            className="flex justify-between items-center hover:bg-amber-50 p-3 rounded-md w-full text-left"
                          >
                            <span className="font-medium">{subItem.name}</span>
                            <ChevronRight className="w-5 h-5" />
                          </button>
                        ) : (
                          <a
                            href="#"
                            className="block hover:bg-amber-50 p-3 rounded-md font-medium"
                            onClick={closeDrawer}
                          >
                            {subItem.name}
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>

            {/* Sub-Categories Level */}
            <div
              className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
                drawerLevel === "subsub" ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <div className="flex flex-col h-full">
                <button
                  onClick={goBackToCategory}
                  className="flex items-center gap-2 hover:bg-amber-50 p-4 border-b"
                >
                  <ChevronLeft className="w-5 h-5" />
                  <span className="font-medium">{activeCategory?.name}</span>
                </button>
                <nav className="flex-1 p-4 overflow-y-auto">
                  <h3 className="mb-4 font-bold text-lg">
                    {activeSubCategory?.name}
                  </h3>
                  <ul className="space-y-2">
                    {activeSubCategory?.subCategories?.map(item => (
                      <li key={item.id}>
                        <a
                          href="#"
                          className="block hover:bg-amber-50 p-3 rounded-md font-medium"
                          onClick={closeDrawer}
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MobileNav;
