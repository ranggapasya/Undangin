// components/displayComponents/catalog.tsx (pakai .tsx karena TypeScript)
'use client';
import { useRouter } from 'next/navigation';

interface ProductCardProps {
  title: string;
  price: string;
  imageUrl: string;
}

export default function ProductCard({ title, price, imageUrl }: ProductCardProps) {
  const router = useRouter();

  const handlePreview = () => {
    router.push(`/preview?title=${encodeURIComponent(title)}`);
  };

  const handleOrder = () => {
    router.push(`/order?product=${encodeURIComponent(title)}`);
  };

  return (
    <div className="border border-gray-200 rounded-xl p-4 flex flex-col items-center bg-white shadow-md">
      <img
        src={imageUrl}
        alt={title}
        className="w-24 h-24 object-contain mb-3"
      />
      <h3 className="text-sm font-semibold text-center mb-1">{title}</h3>
      <span className="mb-3 bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">
        {price}
      </span>
      <div className="flex space-x-2 mt-auto">
        <button
          onClick={handlePreview}
          className="px-4 py-1 text-sm bg-orange-500 text-white rounded hover:bg-blue-600 transition"
        >
          Preview
        </button>
        <button
          onClick={handleOrder}
          className="px-4 py-1 text-sm bg-blue-500 text-white rounded hover:bg-green-600 transition"
        >
          Order
        </button>
      </div>
    </div>
  );
}
