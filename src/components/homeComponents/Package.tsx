import React from 'react';
import { CheckCircle } from 'lucide-react';

const packages = [
  {
    title: 'Paket Template',
    price: 'Rp.120.000',
    features: [
      'Masa Aktif: 7 hari',
      'Edit Nama Tamu',
      'Buku Tamu Digital',
      'Konsultasi Gratis (Dasar)',
    ],
  },
  {
    title: 'Paket Premium',
    price: 'Rp.150.000',
    features: [
      'Masa Aktif: 14 hari',
      'Edit Nama Tamu',
      'Tema Premium',
      'Galeri: Foto & Video',
      'Musik Latar',
      'Check-in System',
      'Buku Tamu Digital',
      'Export Video',
      'Konsultasi Gratis (Dasar)',
      'Tanpa Watermark',
    ],
  },
  {
    title: 'Paket Custom',
    price: 'Rp.200.000',
    features: [
      'Masa Aktif: > 14 hari',
      'Edit Nama Tamu',
      'Tema Premium',
      'Galeri: Foto & Video',
      'Musik Latar',
      'Check-in System',
      'Buku Tamu Digital',
      'Export PDF/Video',
      'Konsultasi Desain (Full)',
      'Desain Custom',
      'Custom Domain',
      'Tanpa Watermark',
    ],
  },
];

const Package = () => {
  return (
    <div id='package' className="w-full bg-[#D6E8FF] py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-blue-900">
          Pilih Paket Sesuai Kebutuhanmu
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 justify-items-center">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className="bg-blue-700 text-white rounded-2xl shadow-md p-4 w-full max-w-[260px] flex flex-col justify-between border border-dashed border-white"
            >
              <div>
                <h3 className="text-lg font-semibold mb-3 text-center bg-white text-blue-700 rounded-full py-1">
                  {pkg.title}
                </h3>
                <ul className="mb-4 space-y-1 text-sm">
                  {pkg.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white text-blue-700 text-center rounded-full py-1 font-semibold text-sm">
                Start from <br />
                {pkg.price}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Package;
