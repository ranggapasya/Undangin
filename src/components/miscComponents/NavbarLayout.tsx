// components/Navbar.tsx
"use client";

import { useNavbar } from "@/Context/NavBarContext";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const { activeMenu, setActiveMenu } = useNavbar();

  return (
    <nav className="w-full bg-[#003F91] py-4 px-8 flex items-center justify-between">
      <div className="flex gap-4">
        <Link className="bg-white font-semibold rounded-full px-4 py-0.5 text-xl" href="/">Home</Link>
        <Link className="bg-white font-semibold rounded-full px-4 py-0.5 text-xl" href="/display">Display</Link>
        <Link className="bg-white font-semibold rounded-full px-4 py-0.5 text-xl" href="/about">About</Link>
        <Link className="bg-white font-semibold rounded-full px-4 py-0.5 text-xl" href="/#fitur">Fitur</Link>
      </div>
      <Image src="/images/logo.png" alt="Logo" width={50} height={50} className="ml-4 border-1
      border-black w-10 h-10 object-cover rounded-full bg-white" />
    </nav>
  );
}
