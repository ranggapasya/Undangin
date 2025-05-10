import React from 'react';

const faqData = [
  {
    question: 'Apakah undangan digital bisa dibuat sesuai dengan selera kita?',
    answer: 'Tentu saja! Kami menyediakan fitur custom yang memungkinkan Anda menentukan desain undangan digital sesuai dengan preferensi Anda.',
  },
  {
    question: 'Apakah membuat undangan digital ini memerlukan langkah yang sulit?',
    answer: 'Tidak sama sekali. Anda hanya perlu mengisi biodata, lalu mengirimkan foto dan video yang diinginkan.',
  },
  {
    question: 'Apakah ada masa aktif untuk undangan digital ini?',
    answer: 'Ya, masa aktif undangan tergantung pada paket yang Anda pilih. Semakin tinggi tingkat paket, semakin lama masa aktif undangan Anda.',
  },
  {
    question: 'Apakah ada batasan jumlah orang dalam membagikan undangan digital?',
    answer: 'Tidak ada batasan. Satu link undangan dapat dibagikan kepada banyak tamu.',
  },
];

const FAQSection = () => {
  return (
    <section className="bg-[#F9F9F9] relative pt-0">
      {/* Bagian Oval Biru di Atas */}
      <div className="w-full h-24 bg-[#b3d0f2] rounded-b-[100%]"></div>

      {/* Judul FAQ */}
      <h2 className="text-center text-[#195BA3] bg-[#d9e9f7] text-xl md:text-2xl font-bold mt-[-1.5rem] mb-8 px-6 py-2 w-fit mx-auto rounded-full shadow">
        FAQ / Tanya Jawab
      </h2>

      {/* Konten FAQ */}
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto px-4 pb-10">
        {faqData.map((faq, index) => (
          <div key={index} className="bg-orange-400 text-white p-6 rounded-xl shadow-md">
            <h3 className="font-semibold mb-2">• {faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
