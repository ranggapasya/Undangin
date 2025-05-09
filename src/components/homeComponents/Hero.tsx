import { Button } from "@/components/ui/button"


const box = {
    width: 100,
    height: 100,
    backgroundColor: "#ff0088",
    borderRadius: 5,
}

export default function Hero() {
  return (
    <div className="flex min-h-screen w-screen flex-col items-center justify-between p-24">
       <div className="flex w-[90%">
            {/* Left Side */}
            <div className="text-left p-3 text-[36px] font-bold">
                <h1 className="text-[36px]">U</h1>
            </div>
            {/* Right Side */}
            <div className="flex flex-col justify-center p-2">
                <div className="title w-full rounded-xl p-4">
                    <p className="text-center text-lg font-bold">Cara Kekinian Untuk Berinteraksi Lebih Mudah</p>
                </div>
                <p className="text-md text-black mt-3">Platform digital yang memudahkan kamu membuat, mengelola,
                        dan membagikan undangan secara online. Praktis, modern, dan
                        personal cocok untuk berbagai acara seperti pernikahan, ulang
                        tahun, hingga acara formal. Cukup pilih template, sesuaikan isi,
                        dan bagikan ke tamu undanganmu dalam hitungan menit!
                </p>
                <Button>Buat Undangan Digital Sekarang juga</Button>

                
            </div>
       </div>
    </div>
  );
}