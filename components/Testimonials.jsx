'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const testimonials = [
  {
    content: 'Vivamus tincidunt viverra scelerisque. Ut efficitur tellus...',
    name: 'Colt Porter',
    title: 'CEO | Founder',
  },
  {
    content: 'Ut ac ante vel dolor pulvinar bibendum. Curabitur molestie...',
    name: 'Allison Brooks',
    title: 'CEO | Founder',
  },
  {
    content: 'Suspendisse vitae nunc ac urna gravida maximus.',
    name: 'Zechariah Lewis',
    title: 'CEO | Founder',
  },
];

export default function TestimonialSection() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-16 px-4 md:px-12"
      style={{
        backgroundImage: "url('/bg-overlay.jpg')", // 👈 Make sure this path is correct and public
      }}
    >
      {/* ✅ Semi-transparent dark overlay */}
      <div className="absolute inset-0 bg-black/50 z-0 backdrop-blur-sm"></div>

      <div className="relative z-10 max-w-7xl mx-auto text-center text-white">
        <h5 className="text-sm md:text-base tracking-widest mb-2 text-[#ecbe3e]">TESTIMONIALS</h5>
        <h3 className="text-3xl md:text-4xl font-semibold mb-4">WHAT CLIENT SAYS</h3>
        <p className="max-w-2xl mx-auto mb-10 text-gray-200">
          Duis ac finibus enim, sit amet vulputate quam. Ut ac ante vel dolor pulvinar bibendum. Curabitur molestie, nisl quis porta laoreet, est ex pellentesque orci.
        </p>

        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000 }}
          spaceBetween={15}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },
            768: { slidesPerView: 2, spaceBetween: 10 },
            1024: { slidesPerView: 3, spaceBetween: 15 },
          }}
        >
          {testimonials.map((testimonial, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-white/10 backdrop-blur-sm text-left rounded-xl shadow-lg w-full p-6 min-h-[220px] flex flex-col justify-between md:items-start items-center">
                <div className="text-3xl text-[#ffde21] mb-4">“</div>
                <p className="text-gray-100 text-sm mb-6">{testimonial.content}</p>
                <div>
                  <strong className="block text-white">{testimonial.name}</strong>
                  <span className="text-sm text-gray-300">{testimonial.title}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
