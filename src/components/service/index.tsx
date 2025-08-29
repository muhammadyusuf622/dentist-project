import React from "react";
import tishImg from "../../../public/images/tish.png";
import tishlarImg from "../../../public/images/tishlar.png";
import aqilTishImg from "../../../public/images/aqil-tish.png";
import milkImg from "../../../public/images/milk.png";
import boldTishImg from "../../../public/images/boldlik-tish.png";
import Image from "next/image";
import background2 from "../../../public/images/backgrount-tooth.jpg";
import FadeInSection from "../FadeInSection";

interface IService {
  title: string;
  text: string;
  image: any;
}

const ServiceComponents = () => {
  const serviceData: IService[] = [
    {
      title: "Smile restoration, built to last",
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptas iusto iste laudantium ipsa omnis voluptatibus laborum
              odit. Dolore aliquam dolorum recusandae, blanditiis
              necessitatibus amet inventore molestiae iste quasi, pariatur id!`,
      image: tishImg.src,
    },
    {
      title: "Smile restoration, built to last",
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptas iusto iste laudantium ipsa omnis voluptatibus laborum
              odit. Dolore aliquam dolorum recusandae, blanditiis
              necessitatibus amet inventore molestiae iste quasi, pariatur id!`,
      image: tishlarImg.src,
    },
    {
      title: "Smile restoration, built to last",
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptas iusto iste laudantium ipsa omnis voluptatibus laborum
              odit. Dolore aliquam dolorum recusandae, blanditiis
              necessitatibus amet inventore molestiae iste quasi, pariatur id!`,
      image: boldTishImg.src,
    },
    {
      title: "Smile restoration, built to last",
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptas iusto iste laudantium ipsa omnis voluptatibus laborum
              odit. Dolore aliquam dolorum recusandae, blanditiis
              necessitatibus amet inventore molestiae iste quasi, pariatur id!`,
      image: milkImg.src,
    },
    {
      title: "Smile restoration, built to last",
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptas iusto iste laudantium ipsa omnis voluptatibus laborum
              odit. Dolore aliquam dolorum recusandae, blanditiis
              necessitatibus amet inventore molestiae iste quasi, pariatur id!`,
      image: aqilTishImg.src,
    },
  ];

  return (
    <div>
      <FadeInSection>
        <div className="flex w-[90%] m-auto md:w-full flex-col gap-5">
          <h4 className="text-blue-700 uppercase text-center">services</h4>
          <h2 className="text-blue-800 text-2xl md:text-4xl text-center">
            Har bir tabassum uchun mutaxassis g'amxo'rlik qiladi
          </h2>
          <p className="font-medium text-center w-[90%] md:w-[50%] m-auto text-sm md:text-base">
            Biz muolajalarning to'liq spektrini taklif qilamiz - ularning har
            biri sog'ligingiz, ishonchingiz va tabiiy go'zalligingizni oshirish
            uchun mo'ljallangan.
          </p>
        </div>
      </FadeInSection>

      <FadeInSection>
        <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-between items-center gap-5 mt-10 md:mt-20">
          {serviceData.map((item, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${background2.src})` }}
              className="w-[90%] h-50 md:h-auto sm:w-[45%] md:w-[20%] hover:md:w-[70%] flex gap-5 rounded-[10px] overflow-hidden px-2 justify-between items-center bg-cover bg-center transition-all duration-500 group"
            >
              <Image
                src={item.image}
                alt="this tooth images"
                width={180}
                height={180}
                className="w-[120px] sm:w-[180px] md:w-[250px] h-auto"
              />

              <div className="text-white md:hidden w-[60%] group-hover:block  h-45 rounded md:h-55 p-3 overflow-auto bg-white/20 backdrop-blur-[5px] custom-scrollbar">
                <h5 className="text-lg md:text-[23px]">{item.title}</h5>
                <p className="text-[13px] md:text-[15px] mt-5">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </FadeInSection>
    </div>
  );
};

export default ServiceComponents;
