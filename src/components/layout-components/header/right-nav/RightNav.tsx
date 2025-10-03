"use client";
import React, { useState, useEffect, useRef } from "react";
import { CountrySelector } from "./CountrySelector";
import { SearchDrawer } from "./SearchDrawer";
import { CartDrawer } from "./CartDrawer";
import { FaCartPlus, FaSearch } from "react-icons/fa";

// Define a type for the cart item
export type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

const HeaderComponent: React.FC = () => {
  // State
  const [isCountryModalOpen, setIsCountryModalOpen] = useState<boolean>(false);
  const [isSearchDrawerOpen, setIsSearchDrawerOpen] = useState<boolean>(false);
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Refs for outside click detection
  const searchRef = useRef<HTMLDivElement | null>(null);
  const cartRef = useRef<HTMLDivElement | null>(null);

  // Outside click handler
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        isSearchDrawerOpen &&
        searchRef.current &&
        !searchRef.current.contains(e.target as Node)
      ) {
        setIsSearchDrawerOpen(false);
      }
      if (
        isCartDrawerOpen &&
        cartRef.current &&
        !cartRef.current.contains(e.target as Node)
      ) {
        setIsCartDrawerOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSearchDrawerOpen, isCartDrawerOpen]);

  // Toggle handlers
  const toggleSearch = (): void => {
    setIsSearchDrawerOpen(prev => !prev);
    setIsCartDrawerOpen(false);
    setIsCountryModalOpen(false);
  };

  const toggleCart = (): void => {
    setIsCartDrawerOpen(prev => !prev);
    setIsSearchDrawerOpen(false);
    setIsCountryModalOpen(false);
  };

  const openCountryModal = (): void => {
    setIsCountryModalOpen(true);
    setIsSearchDrawerOpen(false);
    setIsCartDrawerOpen(false);
  };

  const closeCountryModal = (): void => setIsCountryModalOpen(false);

  // Cart functions
  const addItemToCart = (item: Omit<CartItem, "quantity">): void => {
    setCartItems(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const cartItemCount: number = cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  return (
    <div>
      {/* Header */}
      <div className="z-20 relative flex justify-between items-center w-[130px]">
        <div className="flex items-center space-x-4">
          {/* Country Selector */}
          <CountrySelector
            onFlagClick={openCountryModal}
            isOpen={isCountryModalOpen}
            onClose={closeCountryModal}
          />

          {/* Search */}
          <button
            onClick={toggleSearch}
            className="p-2 text-black lg:text-white hover:text-blue-600 transition"
            aria-label="Toggle Search Drawer"
          >
            <FaSearch />
          </button>

          {/* Cart */}
          <button
            onClick={toggleCart}
            className="relative p-2 text-black lg:text-white hover:text-blue-600 transition"
            aria-label={`Toggle Cart Drawer. ${cartItemCount} items in cart.`}
          >
            <FaCartPlus />
            {cartItemCount > 0 && (
              <span className="top-0 right-0 absolute flex justify-center items-center bg-red-600 rounded-full w-4 h-4 text-white text-xs -translate-y-1 translate-x-1 transform">
                {cartItemCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Drawers */}
      <div className="relative">
        {isSearchDrawerOpen && (
          <div ref={searchRef}>
            <SearchDrawer
              isOpen={isSearchDrawerOpen}
              onClose={() => setIsSearchDrawerOpen(false)}
            />
          </div>
        )}
        {isCartDrawerOpen && (
          <div ref={cartRef}>
            <CartDrawer
              isOpen={isCartDrawerOpen}
              items={cartItems}
              onClose={() => setIsCartDrawerOpen(false)}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default HeaderComponent;
