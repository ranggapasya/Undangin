// context/NavbarContext.tsx
"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type NavbarContextType = {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  activeMenu: string;
  setActiveMenu: (menu: string) => void;
};

const NavbarContext = createContext<NavbarContextType | undefined>(undefined);

export const NavbarProvider = ({ children }: { children: ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("HOME");

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <NavbarContext.Provider
      value={{ isMenuOpen, toggleMenu, activeMenu, setActiveMenu }}
    >
      {children}
    </NavbarContext.Provider>
  );
};

export const useNavbar = () => {
  const context = useContext(NavbarContext);
  if (!context) throw new Error("useNavbar must be used within NavbarProvider");
  return context;
};
