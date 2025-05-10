export default function WhyUs() {
  return (
    <section className="bg-blue-100 py-10 flex justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full text-center relative">
        <h2 className="bg-blue-500 text-white px-4 py-2 rounded-full inline-block mb-4 text-lg font-semibold">
          Kenapa Harus Undang.in?
        </h2>

        <div className="relative mb-4">
          <video
            className="rounded-lg w-full"
            autoPlay
            loop
            muted
            playsInline
            poster="/images/thumbnail.jpg"
          >
            <source src="/videos/WhyUs.mp4" type="video/mp4" />
            Browser kamu tidak mendukung video.
          </video>
        </div>

        <button className="bg-orange-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-orange-600 transition">
          Lihat Paket →
        </button>
      </div>
    </section>
  );
}
