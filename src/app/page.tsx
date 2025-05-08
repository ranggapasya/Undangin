import Category from "@/components/homeComponents/Category";
import Hero from "@/components/homeComponents/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <Hero /> 
      <Category />
    </div>
  );
}
