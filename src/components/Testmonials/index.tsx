"use client";
import React, { useMemo, useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import badTeeth1 from "../../../public/images/teeth/badtooth3.jpg";
import badTeeth2 from "../../../public/images/teeth/badteethblackman.jpeg";
import badTeeth3 from "../../../public/images/teeth/badtooth1.jpeg";
import badTeeth4 from "../../../public/images/teeth/badtooth4.jpg";
import goodTeeth1 from "../../../public/images/teeth/goodtooth1.png";
import goodTeeth2 from "../../../public/images/teeth/goodteethblackman.jpg";
import goodTeeth3 from "../../../public/images/teeth/goodtooth3.jpg";
import goodTeeth4 from "../../../public/images/teeth/goodtooth5.jpg";

import man1Img from "../../../public/images/human/blackmanImageteeth.jpg";
import man2Img from "../../../public/images/human//teeth2-man.jpg";
import girl1Img from "../../../public/images/human/girl1teeth.jpg";
import girl2Img from "../../../public/images/human/girlteeth2.jpg";
import FadeInSection from "../FadeInSection";
import { FaTelegram } from "react-icons/fa";

type CaseStudy = {
  id: string;
  title: string;
  description: string;
  bullets: string[];
  beforeImage: string;
  afterImage: string;
  portrait: string;
};

const categories = [
  { id: "aesthetic", label: "Aesthetic dentistry" },
  { id: "orthodontics", label: "Orthodontics" },
  { id: "implantology", label: "Implantology" },
  { id: "whitening", label: "Whitening" },
] as const;

const demoCases: Record<(typeof categories)[number]["id"], CaseStudy[]> = {
  aesthetic: [
    {
      id: "christina",
      title: "Kristinaning tabassumi o'zgardi",
      description:
        "Kristina tishlarining bo'shliqlari va notekis shakli haqida o'zini his qildi. U tabiiyroq, yorqinroq tabassumni xohladi, u hali ham o'zinikidek his qiladi - shunchaki muvozanatli, tabiiy va ishonchliroq chiroyli.",
      bullets: [
        "Raqamli ko'rish bilan tabassum dizaynini rejalashtirish",
        "Emalni saqlab qolish uchun minimal tish tayyorlash",
        "Ultra yupqa chinni qoplamalarni joylashtirish",
      ],
      beforeImage: badTeeth1.src,
      afterImage: goodTeeth1.src,
      portrait: girl1Img.src,
    },
  ],
  orthodontics: [
    {
      id: "christina",
      title: "Christina's smile, transformed",
      description:
        "Christina felt self-conscious about the gaps and uneven shape of her teeth. She wanted a natural, brighter smile that still felt like her own — just more balanced, natural, and confidently beautiful.",
      bullets: [
        "Smile design planning with digital preview",
        "Minimal tooth preparation to preserve enamel",
        "Placement of ultra-thin porcelain veneers",
      ],
      beforeImage: badTeeth4.src,
      afterImage: goodTeeth4.src,
      portrait: girl2Img.src,
    },
  ],
  implantology: [
    {
      id: "christina",
      title: "Christina's smile, transformed",
      description:
        "Christina felt self-conscious about the gaps and uneven shape of her teeth. She wanted a natural, brighter smile that still felt like her own — just more balanced, natural, and confidently beautiful.",
      bullets: [
        "Smile design planning with digital preview",
        "Minimal tooth preparation to preserve enamel",
        "Placement of ultra-thin porcelain veneers",
      ],
      beforeImage: badTeeth2.src,
      afterImage: goodTeeth2.src,
      portrait: man1Img.src,
    },
  ],
  whitening: [
    {
      id: "christina",
      title: "Christina's smile, transformed",
      description:
        "Christina felt self-conscious about the gaps and uneven shape of her teeth. She wanted a natural, brighter smile that still felt like her own — just more balanced, natural, and confidently beautiful.",
      bullets: [
        "Smile design planning with digital preview",
        "Minimal tooth preparation to preserve enamel",
        "Placement of ultra-thin porcelain veneers",
      ],
      beforeImage: badTeeth3.src,
      afterImage: goodTeeth3.src,
      portrait: man2Img.src,
    },
  ],
};

const TestmonialsComponents = () => {
  const [activeCategory, setActiveCategory] =
    useState<(typeof categories)[number]["id"]>("aesthetic");

  const cases = useMemo(
    () => demoCases[activeCategory] ?? [],
    [activeCategory]
  );

  return (
    <section id="testimonials" className="mt-15 md:w-full w-[90%] m-auto">
      <FadeInSection>
        <div className="text-center mb-13">
          <p className="uppercase tracking-wide text-slate-500 text-sm">
            TESTIMONIALS
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold text-blue-900 mt-3">
            Haqiqiy hikoyalar. Haqiqiy tabassumlar
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto mt-3">
            Hech narsa haqiqatni boshdan kechirganlarning so'zlaridan balandroq
            gapirmaydi, birinchi qo'ldan ko'rinadigan o'zgarishlar
          </p>
        </div>
      </FadeInSection>

      <FadeInSection>
        <div
          className="flex justify-start md:justify-center relative gap-2 md:gap-8 border-b border-gray-300 
                w-full md:w-[45.2%] mx-auto mt-8 overflow-x-auto scrollbar-hide"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`pb-2 text-sm sm:text-base text-sky-500 whitespace-nowrap
        hover:text-blue-900 cursor-pointer font-bold transition-colors ${
          activeCategory === cat.id
            ? "border-b-2 border-sky-700 text-sky-700"
            : ""
        }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </FadeInSection>

      <FadeInSection>
        <div className="mt-10">
          <Swiper
            pagination={{ type: "fraction" }}
            navigation
            modules={[Pagination, Navigation]}
          >
            {cases.map((item) => (
              <SwiperSlide key={item.id}>
                <CaseSlide item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </FadeInSection>

      <a
        href="https://telegram"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          background: "linear-gradient(to left, #22c55e, #3b82f6)",
          backgroundSize: "200% 100%",
          backgroundPosition: "left",
          transition: "background-position 0.3s ease-in-out",
        }}
        className="px-6 py-3 flex justify-center gap-7 items-center w-full text-center text-2xl rounded-xl font-semibold shadow-xl mt-20 text-white"
        onMouseEnter={(e) =>
          (e.currentTarget.style.backgroundPosition = "right")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.backgroundPosition = "left")
        }
      >
        <span>Hoziroq Joy Band Qiling</span> <FaTelegram className="md:text-4xl text-7xl" />
      </a>
    </section>
  );
};

const CaseSlide = ({ item }: { item: CaseStudy }) => {
  return (
    <div className="grid md:grid-cols-12 gap-8 items-center">
      <div className="md:col-span-4">
        <h3 className="text-2xl md:text-3xl  font-semibold text-blue-900">
          {item.title}
        </h3>
        <p className="text-slate-600 mt-3">{item.description}</p>
        <div className="mt-6">
          <p className="font-semibold text-blue-900 mb-2">Biz nima qildik</p>
          <ul className="space-y-2 text-slate-700">
            {item.bullets.map((b) => (
              <li key={b} className="flex gap-2">
                <span className="text-sky-500">•</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="md:col-span-5">
        <BeforeAfter beforeSrc={item.beforeImage} afterSrc={item.afterImage} />
      </div>

      <div className="md:col-span-3">
        <div className="relative w-full h-[260px] md:h-[320px] rounded-xl overflow-hidden">
          <Image
            src={item.portrait}
            alt="Portrait"
            fill
            className="object-cover"
          />
        </div>
        <p className="text-slate-600 mt-3 text-sm">
          Kristinaning tabassumi, oldin va keyin - ishonchli, to'liq va chinakam
          uniki.
        </p>
      </div>
    </div>
  );
};

const BeforeAfter = ({
  beforeSrc,
  afterSrc,
}: {
  beforeSrc: string;
  afterSrc: string;
}) => {
  const [position, setPosition] = useState(50); // percentage
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleMove = (clientX: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = Math.min(Math.max(clientX - rect.left, 0), rect.width);
    setPosition(Math.round((x / rect.width) * 100));
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[260px] md:h-[360px] rounded-xl overflow-hidden select-none bg-slate-100"
      onMouseMove={(e) => handleMove(e.clientX)}
      onTouchMove={(e) => handleMove(e.touches[0].clientX)}
    >
      <Image src={afterSrc} alt="After" fill className="object-cover" />

      <div
        className="absolute inset-0"
        style={{ width: `${position}%`, overflow: "hidden" }}
      >
        <Image src={beforeSrc} alt="Before" fill className="object-cover" />
      </div>

      <div
        className="absolute top-0 bottom-0"
        style={{ left: `${position}%`, transform: "translateX(-50%)" }}
      >
        <div className="w-[2px] h-full bg-sky-500" />
      </div>

      <div
        className="absolute top-1/2 -translate-y-1/2"
        style={{ left: `${position}%`, transform: "translate(-50%, -50%)" }}
      >
        <div className="w-16 h-16 rounded-full bg-white/90 shadow-md grid place-items-center text-slate-700 text-sm">
          Drag
        </div>
      </div>

      {/* Labels */}
      <div className="absolute left-3 top-3 text-white text-xs font-medium drop-shadow">
        Before
      </div>
      <div className="absolute right-3 top-3 text-white text-xs font-medium drop-shadow">
        After
      </div>
    </div>
  );
};

export default TestmonialsComponents;
