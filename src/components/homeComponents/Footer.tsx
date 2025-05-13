export default function Home() {
  return (
    <div className="bg-white text-[#003399]">
      {/* Gif Section */}
      <div className="relative flex justify-between items-center ">
         <img src="gif/Gelombang-Biru.gif" alt="logo" className="w-80 mt-2" />

         <div className="flex flex-col w-fit justify-center items-center">
          <p className="text-4xl font-bold mb-3 px-4 py-2 bg-orange-400 text-white text-center rounded-3xl shadow-lg">
              Jadikan Momenmu Lebih Berkesan
          </p>
          <p className="order text-[30px] font-semibold w-fit mb-2 mt-2 px-5 py-1.5 bg-blue-600 text-white text-center rounded-2xl shadow-lg">
              <a target="_blank" href="https://wa.me/6281282062592">Pesan sekarang</a>
          </p>
        </div>

         <img src="gif/Gelombang-Orange.gif" alt="logo" className="w-80 mt-2" />
      </div>


      {/* Footer */}
      <footer className="bg-[#003399] text-white text-sm py-10 px-[100px]">
        <div className="flex flex-col md:flex-row justify-between max-w-6xl mx-auto gap-8">
          {/* Kolom Kiri */}
          <div className="w-screen">
            <h2 className="font-bold text-base mb-2">
              Undang.in — Undangan Digital Kekinian
            </h2>
            <p className="mb-4">
              Buat undangan online yang praktis, elegan, dan bisa dibagikan lewat sekali klik.
            </p>

            <p className="font-semibold mb-2">Navigasi</p>
            <ul className="ml-4 list-disc space-y-1">
              <li>Home</li>
              <li>Produk & Paket</li>
              <li>Price List</li>
              <li>Tentang Kami</li>
              <li>Hubungi Kami</li>
            </ul>
          </div>

          {/* Kolom Kanan */}
          <div>
            <p className="font-semibold mb-2">Kontak Kami</p>
            <ul className="ml-4 space-y-1">
              <li>WhatsApp: 082171037378</li>
              <li>Email: undang24in@gmail.com</li>
              <li>Instagram: @undang.in25</li>
              <li>Jam Layanan: Setiap Hari, 09.00–21.00</li>
            </ul>

            <p className="font-semibold mt-6 mb-2">Keamanan & Info</p>
            <ul className="ml-4 list-disc space-y-1">
              <li>Kebijakan Privasi</li>
              <li>Syarat & Ketentuan</li>
              <li>FAQ</li>
            </ul>
          </div>
        </div>

        <div className="text-center text-xs mt-8 border-t border-white pt-4">
          © 2025 Undang.in. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
