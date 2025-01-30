"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type WishlistItem = {
  id: string;
  name: string;
  image:string;
  description:string;
  price:number;
  // other properties...
};

type WishlistContextType = {
  wishlist: WishlistItem[];
  wishlistCount: number;
  addToWishlist: (item: WishlistItem) => void;
  removeFromWishlist: (id: string) => void;
};

const WishlistContext = createContext<WishlistContextType | undefined>(
  undefined
);

export const WishlistProvider = ({ children }: { children: ReactNode }) => {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);

  const addToWishlist = (item: WishlistItem) => {
    // Only add if not already in the list
    const exists = wishlist.find((i) => i.id === item.id);
    if (!exists) {
      setWishlist([...wishlist, item]);
    }
  };

  const removeFromWishlist = (id: string) => {
    setWishlist(wishlist.filter((item) => item.id !== id));
  };

  const wishlistCount = wishlist.length; // derived

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        wishlistCount,
        addToWishlist,
        removeFromWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
};
