import React, { useEffect, useState } from "react";

const Header = () => {
  const [excellence, setExcellence] = useState(0);
  const [satisfaction, setSatisfaction] = useState(0);
  const [smiles, setSmiles] = useState(4500);
  const [experts, setExperts] = useState(0);

  useEffect(() => {
    const incrementCounter = (value: number, setter: any, target: number, interval: number, step = 1) => {
      let count = value;
      const timer = setInterval(() => {
        count += step;
        setter((prev: number) => prev + 1);
        if (count >= target) clearInterval(timer);
      }, interval);
    };

    incrementCounter(excellence, setExcellence, 15, 20);
    incrementCounter(satisfaction, setSatisfaction, 98, 10); 
    incrementCounter(smiles, setSmiles, 5000, 1);
    incrementCounter(experts, setExperts, 17, 20);
  }, []);

  return (
    <div id="home">
      <div
        className={`h-screen relative w-full p-8 bg-[url('/images/ozkan-guner-Pc8lpKJwecM-unsplash.jpg')] bg-cover bg-center`}
      >
        <div className="absolute inset-0  bg-gradient-to-r from-blue-500/50 to-green-500/50"></div>

        <div className="relative z-10 h-full flex flex-col justify-between">
          <div className="w-full md:w-[40%] mt-20">
            <p className="text-4xl text-white">
              Mukammallikni kashf eting. Celestia tabassumlaridagi farqni kashf
              eting. Selestiyada
            </p>
            <p className="text-white mt-10 md:block hidden">
              Celestia Tabassumida biz sizning tabassumingiz g'amxo'rlikdan
              ko'ra ko'proq narsaga loyiq ekanligiga ishonamiz - bu bayramga
              loyiqdir. Kengash tomonidan sertifikatlangan mutaxassislarimiz eng
              zamonaviy stomatologik va ortodontik muolajalar bilan
              birlashtirilgan kurortga o'xshash, tasalli beruvchi tajribani
              taklif qilishadi.
            </p>
          </div>

          <div className="grid gap-2 md:gap-0 grid-cols-2 md:flex justify-between items-center">
            <div className="bg-white/10 h-30 md:h-auto backdrop-blur-[2px] px-3 py-4 md:pr-15 md:pl-3 text-white rounded-[10px] overflow-hidden">
              <p className="text-4xl md:text-5xl font-medium">{excellence}+</p>
              <p className="md:text-2xl">Mukammallik yillari</p>
            </div>
            <div className="bg-white/10 h-30 md:h-auto backdrop-blur-[2px] px-3 py-4 md:pr-15 md:pl-3 text-white rounded-[10px] overflow-hidden">
              <p className="text-4xl md:text-5xl font-medium">
                {satisfaction}%
              </p>
              <p className="md:text-2xl">Bemorning qoniqish darajasi</p>
            </div>
            <div className="bg-white/10 h-30 md:h-auto backdrop-blur-[2px] px-3 py-4 md:pr-15 md:pl-3 text-white rounded-[10px] overflow-hidden">
              <p className="text-4xl md:text-5xl font-medium">{smiles}+</p>
              <p className="md:text-2xl">Tabassumlar o'zgardi</p>
            </div>
            <div className="bg-white/10 h-30 md:h-auto backdrop-blur-[2px] px-3 py-4 md:pr-15 md:pl-3 text-white rounded-[10px] overflow-hidden">
              <p className="text-4xl md:text-5xl font-medium">{experts}</p>
              <p className="md:text-2xl md:whitespace-nowrap">
                Sertifikatlangan mutaxassislar
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
