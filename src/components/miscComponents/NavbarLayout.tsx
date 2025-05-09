// components/Navbar.tsx
"use client";

import { useNavbar } from "@/Context/NavBarContext";
import Image from "next/image";

export default function Navbar() {
  const { activeMenu, setActiveMenu } = useNavbar();

  const menus = ["HOME", "PRODUK", "LIHAT PAKET", "FITUR", "ABOUT US"];

  return (
    <nav className="w-full bg-[#003F91] py-4 px-8 flex items-center justify-between">
      <div className="flex gap-4">
        {menus.map((menu) => (
          <button
            key={menu}
            onClick={() => setActiveMenu(menu)}
            className={`px-4 py-1 rounded-full font-semibold transition ${
              activeMenu === menu
                ? "bg-white text-[#003F91]"
                : "bg-[#C5D9F3] text-[#003F91]"
            }`}
          >
            {menu}
          </button>
        ))}
      </div>
      <Image src="/images/logo.png" alt="Logo" width={50} height={50} className="ml-4 border-1
      border-black w-10 h-10 object-cover rounded-full bg-white" />
    </nav>
  );
}
