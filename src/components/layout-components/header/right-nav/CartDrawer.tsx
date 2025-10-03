"use client";
// src/components/CartDrawer.tsx
import React from "react";

type CartItem = { id: number; name: string; price: number; quantity: number };

type CartDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
};

export const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, items }) => {
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);
  const cartTotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // Tailwind classes for the slide-down effect
  const drawerClasses = `
    absolute top-0 left-0 w-full bg-amber-50 shadow-xl transition-all duration-300 ease-in-out z-10
    ${
      isOpen
        ? "max-h-screen opacity-100 border-t border-gray-200"
        : "max-h-0 opacity-0 overflow-hidden"
    }
    p-4 sm:p-6 // Responsive padding
  `;

  return (
    <div className={drawerClasses}>
      <h3 className="mb-4 font-bold text-xl">Shopping Cart ({totalItems})</h3>

      {items.length === 0 ? (
        <div className="py-8 text-gray-500 text-center">
          Your cart is empty. Start shopping!
        </div>
      ) : (
        <>
          {/* Cart Items List */}
          <div className="space-y-3 mb-4 max-h-64 overflow-y-auto">
            {items.map(item => (
              <div
                key={item.id}
                className="flex justify-between items-center pb-2 border-b"
              >
                <span className="font-medium text-gray-800">
                  {item.name}
                  <span className="ml-2 text-gray-500 text-sm">
                    x{item.quantity}
                  </span>
                </span>
                <span className="font-semibold">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}
          </div>

          {/* Cart Summary */}
          <div className="flex justify-between items-center mt-4 pt-4 border-t">
            <span className="font-bold text-lg">Total:</span>
            <span className="font-extrabold text-blue-600 text-xl">
              ${cartTotal.toFixed(2)}
            </span>
          </div>

          {/* Checkout Button */}
          <button className="bg-blue-600 hover:bg-blue-700 mt-4 py-3 rounded-lg w-full font-semibold text-white transition">
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
};
