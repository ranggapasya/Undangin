import React from 'react';
import Image from 'next/image';

const HomePage: React.FC = () => {
  const options = [
    {
      title: 'Birthday Party',
      image: '/images/Birthday-Party.png', // pastikan gambar ada di folder public/images
      link: '/birthday'
    },
    {
      title: 'Wedding Party',
      image: '/images/Wedding-Party.png',
      link: '/wedding'
    },
    {
      title: 'Custom Invitation',
      image: '/images/Custom-Invitation.png',
      link: '/custom'
    }
  ];

  return (
    <div className="min-h-screen bg-blue-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-xl md:text-2xl font-semibold mb-8 bg-white px-4 py-2 rounded-full shadow">
        Pilih Sesuai Kebutuhanmu
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {options.map((option, index) => (
          <a
            key={index}
            href={option.link}
            className="bg-yellow-100 rounded-xl p-4 border-2 border-dashed border-blue-400 hover:scale-105 transform transition shadow w-full flex flex-col items-center"
          >
            <Image src={option.image} alt={option.title} width={150} height={150} />
            <button className="mt-4 bg-orange-400 text-white px-4 py-2 rounded-full shadow">
              {option.title}
            </button>
          </a>
        ))}
      </div>
      <p className="mt-6 text-sm text-gray-600 text-left w-full max-w-2xl">
        *Klik jenis undangan untuk lihat contoh desain dan fitur.
      </p>
    </div>
  );
};

export default HomePage;