import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center px-4 py-15 mt-8 bg-white overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-between w-[90%] max-w-6xl gap-10 z-50 px-10">
        
        {/* Left Side */}
        <div className="flex flex-col items-center md:items-start text-left p-3">
          <img src="gif/undangif.gif" alt="logo" className="w-120 mt-2" />
        </div>

        {/* Right Side */}
        <div className="flex flex-col p-2 w-full">
          <div className="bg-blue-600 text-white text-center text-lg font-bold py-3 px-6 rounded-full mb-4">
            Cara Kekinian Untuk Berinteraksi Lebih Mudah
          </div>
          <p className="text-md text-gray-800 mb-10 text-justify">
            Platform digital yang memudahkan kamu membuat, mengelola, dan membagikan undangan secara online.
            Praktis, modern, dan personal cocok untuk berbagai acara seperti pernikahan, ulang tahun, hingga acara formal.
            Cukup pilih template, sesuaikan isi, dan bagikan ke tamu undanganmu dalam hitungan menit!
          </p>
          <Button className="bg-[#FF914D] text-white text-center font-semibold px-6 py-3 rounded-full mb-12 w-fit">
            Buat Undangan Digital Sekarang juga
          </Button>
        </div>
      </div>

      {/* GIF Gelombang */}
      <div className="absolute -bottom-[30px] z-10 w-full flex justify-between">
        <img src="gif/Gelombang-Biru.gif" alt="logo" className="w-80 mt-2" />
        <img src="gif/Gelombang-Orange.gif" alt="logo" className="w-80 mt-2" />
      </div>

      {/* Oval di bagian paling bawah */}
      <div className="absolute -bottom-6 left-0 w-full h-24 bg-[#CFE4FF] rounded-t-full z-20" />
    </div>
  );
}
