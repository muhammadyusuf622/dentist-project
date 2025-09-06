import React from "react";
import { FaHandHolding } from "react-icons/fa";
import { LuMessageSquareMore } from "react-icons/lu";
import { FaTooth } from "react-icons/fa";
import { BiTimer } from "react-icons/bi";
import { PiStarFourBold } from "react-icons/pi";
import FadeInSection from "../FadeInSection";

interface OurProcessProps {
  telegramBotUrl: string;
}

const OurProcess = ({ telegramBotUrl }: OurProcessProps) => {
  return (
    <div className="w-full py-10 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <FadeInSection>
          <h2 className="text-white text-5xl text-center font-bold">
            Bizning jarayonimiz
          </h2>
        </FadeInSection>
        <div className="mt-10 flex sm:flex-row flex-col justify-between items-center sm:items-end">
          <FadeInSection>
            <div className="flex flex-col items-center">
              <LuMessageSquareMore className="text-white text-[200px]" />
              <h4 className="font-medium text-white text-3xl">Step 1</h4>
              <p className="text-gray-300 mt-5 text-center">
                Tish mutaxassisi bilan maslahatlashuvingizni bron qiling
              </p>
            </div>
          </FadeInSection>
          <FadeInSection>
            <div className="flex flex-col items-center relative">
              <FaTooth className="text-white text-7xl absolute top-7" />
              <FaHandHolding className="text-white text-[200px]" />
              <h4 className="font-medium text-white mt-5 text-3xl">Step 2</h4>
              <p className="text-gray-300 mt-5 text-center">
                Moslashtirilgan davolash rejangizni tuzing
              </p>
            </div>
          </FadeInSection>
          <FadeInSection>
            <div className="flex flex-col items-center">
              <BiTimer className="text-white text-[200px] mr-10 sm:mr-15" />
              <h4 className="font-medium text-white text-3xl">Step 3</h4>
              <p className="text-gray-300 mt-5 text-center">
                Vaqti kelganda davolanishni boshlang
              </p>
            </div>
          </FadeInSection>
          <FadeInSection>
            <div className="flex flex-col items-center text-center">
              <PiStarFourBold className="text-white text-2xl" />
              <FaTooth className="text-white text-[130px] mt-5" />
              <h4 className="font-medium text-white mt-5 text-3xl">Step 4</h4>
              <p className="text-gray-300 mt-5">
                Moslashtirilgan davolash rejangizni tuzing
              </p>
            </div>
          </FadeInSection>
        </div>
        <FadeInSection>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-15">
            <a
              href={telegramBotUrl}
              rel="noopener noreferrer"
              target="_blank"
              className="text-white w-80 text-center text-[20px] font-bold bg-teal-500 hover:bg-teal-600 transition-colors duration-300 py-2 px-10 rounded-tr-4xl rounded-bl-4xl cursor-pointer"
            >
              Hoziroq so'rang
            </a>
            <button
              onClick={() => {
                const element = document.getElementById("locationSection");
                if (element) {
                  const y =
                    element.getBoundingClientRect().top + window.scrollY - 100;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }
              }}
              className="text-black text-[20px] font-medium bg-white hover:bg-gray-300 transition-colors duration-300 py-2 px-10 rounded-tr-4xl rounded-bl-4xl cursor-pointer "
            >
              Bizga yaqin studiyani toping
            </button>
          </div>
        </FadeInSection>
      </div>
    </div>
  );
};

export default OurProcess;
