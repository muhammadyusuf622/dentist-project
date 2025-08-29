import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCreative, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-creative";
import doctor1Img from "../../../public/images/doctors/doctor.jpg";
import doctor2Img from "../../../public/images/doctors/doctor-women2.jpg";
import doctor3Img from "../../../public/images/doctors/doctor-women3.jpg";
import doctor4Img from "../../../public/images/doctors/doctor1.jpg";
import doctor5Img from "../../../public/images/doctors/doctorwomen.jpg";
import FadeInSection from "../FadeInSection";
import { useIsMobail } from "@/hooks";

const doctors = [
  {
    name: "Dr. David Wilson",
    role: "Orthodontist",
    desc: "Specialist in root canal treatments, combining precision and comfort.",
    img: doctor1Img.src,
  },
  {
    name: "Dr. Emma Robinson",
    role: "Esthetician",
    desc: "Crafts aesthetic transformations with veneers and cosmetic care.",
    img: doctor3Img.src,
  },
  {
    name: "Dr. Sophia Turner",
    role: "Endodontist",
    desc: "Specialist in root canal treatments, practicing since 2012.",
    img: doctor4Img.src,
  },
  {
    name: "Dr. Sophia Turner",
    role: "Endodontist",
    desc: "Specialist in root canal treatments, practicing since 2012.",
    img: doctor2Img.src,
  },
  {
    name: "Dr. Sophia Turner",
    role: "Endodontist",
    desc: "Specialist in root canal treatments, practicing since 2012.",
    img: doctor5Img.src,
  },
];

function AboutUsComponents() {
  const isMobile = useIsMobail();

  return (
    <div className="max-w-5xl mx-auto p-6 relative mt-30">
      <div className="mb-6 md:w-[50%]">
        <h2 className="md:text-4xl text-3xl font-bold  text-blue-900 mb-6">
          Sizning tabassumingiz ortidagi fikrlar bilan tanishing
        </h2>
        <p>
          Bizning ixtisoslashgan professionallar jamoasi har bir davolanishga
          aniqlik, hamdardlik va badiiylikni olib keladi - ko'p yillik tajribani
          chinakam shaxsiylashtirilgan parvarish uchun umumiy ishtiyoq bilan
          birlashtiradi.
        </p>
      </div>

      <FadeInSection>
        <div className="">
          <Swiper
            modules={[Navigation, EffectCreative, Autoplay]}
            navigation={{
              prevEl: ".prev-btn",
              nextEl: ".next-btn",
            }}
            loop={true}
            grabCursor={true}
            effect={"creative"}
            creativeEffect={{
              prev: {
                shadow: false,
                translate: ["-120%", 0, -500], // chapga chiqib ketadi
              },
              next: {
                translate: ["120%", 0, -500], // o‘ngdan chiqib keladi
              },
            }}
            slidesPerView={isMobile ? 1 : 2}
            spaceBetween={30}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            speed={900}
          >
            {doctors.map((doc, i) => (
              <SwiperSlide key={i}>
                <div className="bg-white shadow-lg rounded-2xl p-4 text-center border border-blue-200">
                  <img
                    src={doc.img}
                    alt={doc.name}
                    className="w-full h-64 object-cover rounded-xl"
                  />
                  <h3 className="mt-4 text-xl font-semibold text-blue-800">
                    {doc.name}
                  </h3>
                  <p className="text-smx text-blue-500">{doc.role}</p>
                  <p className="text-gray-600 mt-2">{doc.desc}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Chap strelka */}
          <button className="prev-btn hidden sm:block lg:block md:block absolute top-1/3 -left-15 z-10 bg-white p-2 rounded-full shadow">
            ◀
          </button>

          {/* O‘ng strelka */}
          <button className="next-btn hidden sm:block lg:block md:block absolute top-1/3 -right-6 z-15 bg-white p-2 rounded-full shadow">
            ▶
          </button>
        </div>
      </FadeInSection>
    </div>
  );
}

export default AboutUsComponents;
