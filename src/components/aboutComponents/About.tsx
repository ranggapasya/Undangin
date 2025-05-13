import Image from 'next/image'

export default function About() {
  return (
    <div className="px-5 py-10 space-y-16 text-black">

      {/* Section 1 - About Us */}
      <section className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        <div className="lg:w-1/2 space-y-4">
          <h2 className="text-2xl font-bold">About Us</h2>
          <h3 className="text-lg font-semibold">Siapa Kami</h3>
          <p className="text-justify">
            <strong>undang.in</strong> adalah platform undangan digital modern yang membantu Anda menciptakan undangan acara secara mudah, cepat, dan bersih. Dikelola oleh tim kreatif muda yang berkomitmen solusi undangan yang interaktif, inovatif, ramah lingkungan, dan personal. Kami percaya bahwa berbagai momen spesial harus semudah mengirim pesan — tapi tetap terasa istimewa.
          </p>
        </div>
        <div className="lg:w-1/3 flex justify-center">
          <Image src="/images/logo.png" alt="undang.in logo" width={200} height={200} />
        </div>
      </section>

      {/* Section 2 - Visi Misi */}
      <section className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold">Visi Kami</h3>
          <p>
            Menjadi penyedia undangan digital yang interaktif, inovatif, ramah lingkungan, dan berkesan untuk setiap momen spesial Anda.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Misi Kami</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Mengembangkan fitur-fitur baru yang relevan dengan kebutuhan pengguna dan perkembangan teknologi.</li>
            <li>Menyediakan undangan digital yang interaktif, mulai dari RSVP online, galeri foto & video, hingga buku tamu digital.</li>
            <li>Menawarkan harga terjangkau yang jelas, hemat biaya dan ramah lingkungan.</li>
            <li>Memberikan layanan cepat tiap up-to-date dengan tren dan teknologi terbaru.</li>
          </ul>
        </div>
      </section>

      {/* Section 3 - Produk dan Layanan */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold">Produk dan Layanan</h3>
        <p>
          <strong>undang.in</strong> menawarkan layanan pembuatan undangan digital modern yang bisa disesuaikan dengan kebutuhan Anda.
        </p>
        <p>
          Kami menyediakan berbagai pilihan template desain estetika, serta layanan kustomisasi lengkap sesuai keinginan klien.
        </p>
        <p>
          Fitur-fitur interaktif seperti RSVP online, peta lokasi, album foto & video, hingga buku tamu digital tidak hanya mempercantik undangan, tapi juga meningkatkan kesan mendalam.
        </p>
      </section>

    </div>
  );
}
 