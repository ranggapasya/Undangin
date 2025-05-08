import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <button className="about-btn">
            <Link href="/about" className="text-[36px] text-black">About</Link>
        </button>
    </div>
  );
}