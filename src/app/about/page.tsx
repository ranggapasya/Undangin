'use client';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <>
      {/* Bagian Biru Atas */}
      <div className="w-full h-32 bg-blue-800 rounded-b-[100px]" />

      {/* Konten Utama */}
      <main className="px-5 py-10 max-w-5xl mx-auto space-y-16 text-black relative z-10">

        {/* Section 1 - Tentang Kami */}
        <section className="relative bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-4xl font-semibold mb-10 text-blue-800">About Us</h2>
          <div className="absolute top-4 right-4 mr-4 mt-25">
            <div className="w-60 h-60 rounded-full border-4 border-orange-500 flex items-center justify-center bg-white shadow-md">
              <Image
                src="/images/logo.png"
                alt="Logo Undang.in"
                width={500}
                height={500}
                className="object-contain"
              />
            </div>
          </div>

          <h3 className="text-2xl font-semibold mb-10">Siapa Kami</h3>
          <p className="text-justify leading-relaxed text-xl mb-20 max-w-2xl">
            Undang.in adalah platform undangan digital modern yang membantu Anda menciptakan undangan acara secara mudah, cepat, dan berkesan.
            Dikelola oleh tim kreatif muda yang berkomitmen menghadirkan solusi undangan yang interaktif, inovatif, ramah lingkungan, dan personal.
            Kami percaya bahwa berbagai momen spesial harus semudah mengirim pesan tapi tetap terasa istimewa.
          </p>
        </section>

        {/* Section 2 - Visi Misi */}
        <section className="bg-white p-5 rounded-xl shadow-md">
          <h3 className="text-2xl font-semibold mb-5">Visi Kami</h3>
          <p className="text-xl mb-10">
            Menjadi penyedia undangan digital yang interaktif, inovatif, ramah lingkungan, dan berkesan untuk setiap momen spesial Anda.
          </p>
          <h3 className="text-2xl font-semibold mb-2">Misi Kami</h3>
          <ul className="list-disc list-inside text-xl space-y-1">
            <li>Mengembangkan fitur-fitur baru yang relevan dengan kebutuhan pengguna dan perkembangan teknologi.</li>
            <li>Memberikan layanan undangan interaktif, mulai dari RSVP online, galeri foto & video, hingga buku tamu digital.</li>
            <li>Memberi pengalaman undangan yang praktis, hemat biaya dan ramah lingkungan.</li>
            <li>Memberikan layanan cepat tiap up-to-date dengan tren dan teknologi terbaru.</li>
          </ul>
        </section>

        {/* Section 3 - Produk & Layanan */}
        <section className="bg-white p-5 rounded-xl shadow-md">
          <h3 className="text-2xl font-semibold mb-2">Produk dan Layanan</h3>
          <p className="text-xl text-justify leading-relaxed mb-10">
            Undang.in menawarkan layanan pembuatan undangan digital modern yang bisa disesuaikan dengan kebutuhan Anda.
            Kami menyediakan berbagai pilihan template desain estetis, serta layanan kustomisasi undangan sesuai keinginan Anda.
             Fitur-fitur interaktif seperti RSVP online, peta lokasi, buku tamu, hingga galeri foto tamu memudahkan sistem undangan tidak hanya informatif, tapi juga menghadirkan kesan mendalam.
          </p>
          </section>

          {/* Section 4 - Kenapa Memilih Kami */}
<section className="bg-white p-5 rounded-xl shadow-md">
  <h3 className="text-2xl font-semibold mb-5">Kenapa Memilih Kami?</h3>
  <p className="text-xl text-justify leading-relaxed">
    Di undang.in, kami merevolusi desain undangan digital yang unik, personal, dan penuh fitur interaktif seperti RSVP online, galeri foto dan buku tamu digital.
    Kami juga menyediakan berbagai pilihan harga kompetitif dengan proses pembuatan yang cepat, efisien, dan tetap berkesan.
    Dengan pendekatan lokal yang memahami gaya komunikasi Indonesia, undang.in adalah pilihan terbaik untuk membuat momen Anda semakin bermakna dan ramah lingkungan.
  </p>
 </section>

{/* Section 5 - Target Pengguna */}
<section className="bg-white p-5 rounded-xl shadow-md">
  <h3 className="text-2xl font-semibold mb-5">Target Pengguna</h3>
  <p className="text-xl text-justify leading-relaxed">
    Layanan kami ditujukan untuk pasangan muda yang merencanakan acara spesial, perusahaan yang menyelenggarakan event resmi, individu yang peduli lingkungan, hingga event organizer yang menginginkan solusi undangan cepat dan praktis.
    Undang.in siap membantu Anda berbagi undangan dengan cara modern, efisien, dan penuh makna.
  </p>
</section>

{/* Section 6 - Tim Undang.in */}
<section className="bg-white p-5 rounded-xl shadow-md">
  <h3 className="text-lg font-semibold mb-4">Tim Undang.in</h3>

  {/* Foto Tim */}
  <div className="w-full flex justify-center mb-6">
    <div className="rounded-xl overflow-hidden border-4 border-orange-500 shadow-md">
      <Image
        src="/images/fotbar.jpg" 
        alt="Tim Undang.in"
        width={250}
        height={250}
        className="object-cover object-center w-full h-full"
      />
    </div>
  </div>

  {/* Kontak */}
  <p className="text-3xl text-center mb-5">Hubungi kami:</p>
  <ul className="text-xl list-disc list-inside text-center ">
    <li>Email: undang24in@gmail.com</li>
    <li>Instagram: @undang.in25</li>
  </ul>
</section>
</main>

      {/* Bagian Biru Bawah */}
      <div className="w-full h-32 bg-blue-800 rounded-t-[100px]" />
    </>
  );
}
