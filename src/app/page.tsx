import Category from "@/components/homeComponents/Category";
import Hero from "@/components/homeComponents/Hero";
import WhyUs from "@/components/homeComponents/WhyUs";
import Package  from "@/components/homeComponents/Package";


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col justify-between">
      <Hero /> 
      <Category />
      <WhyUs />
      <Package />
    </div>
  );
}
