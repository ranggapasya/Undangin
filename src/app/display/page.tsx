// app/products/page.tsx (atau page.js jika masih pakai JS, tapi ini TypeScript)

'use client';

import { useState } from 'react';
import ProductCard from '@/components/displayComponents/productcard';


type Category = 'birthday' | 'wedding' | 'others';

const PRODUCTS: Record<Category, { title: string; price: string; imageUrl: string }[]> = {
  birthday: [
    { title: 'Template Birthday #01', price: 'Rp. 120.000', imageUrl: '/images/Birthday-Party.png' },
    { title: 'Template Birthday #02', price: 'Rp. 125.000', imageUrl: '/images/Birthday-Party.png' },
    { title: 'Template Birthday #03', price: 'Rp. 150.000', imageUrl: '/images/Birthday-Party.png' },
    { title: 'Template Birthday #04', price: 'Rp. 160.000', imageUrl: '/images/Birthday-Party.png' },
  ],
  wedding: [
    { title: 'Template Wedding #01', price: 'Rp. 200.000', imageUrl: '/images/Wedding-Template.png' },
    { title: 'Template Wedding #02', price: 'Rp. 220.000', imageUrl: '/images/Wedding-Template.png' },
    { title: 'Template Wedding #03', price: 'Rp. 240.000', imageUrl: '/images/Wedding-Template.png' },
  ],
  others: [
    { title: 'Template Event #01', price: 'Rp. 180.000', imageUrl: '/images/Event-Template.png' },
  ],
};

export default function Display() {
  const [category, setCategory] = useState<Category>('birthday');

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      {/* Tab Navigation */}
      <div className="flex justify-center space-x-4 mb-8">
        <button
          className={`px-4 py-2 rounded-full font-medium ${category === 'birthday' ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-600'}`}
          onClick={() => setCategory('birthday')}
        >
          Template Birthday
        </button>
        <button
          className={`px-4 py-2 rounded-full font-medium ${category === 'wedding' ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-600'}`}
          onClick={() => setCategory('wedding')}
        >
          Template Wedding
        </button>
        <button
          className={`px-4 py-2 rounded-full font-medium ${category === 'others' ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-600'}`}
          onClick={() => setCategory('others')}
        >
          Template Lain-lainnya
        </button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mx-10">
        {PRODUCTS[category].length > 0 ? (
          PRODUCTS[category].map((product, index) => (
            <ProductCard key={index} {...product} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">Belum ada produk.</p>
        )}
      </div>
    </div>
  );
}
