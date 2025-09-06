"use client";
import React from "react";
import Image from "next/image";
import FadeInSection from "../FadeInSection";

const LocationsSection: React.FC = () => {
  const locations = [
    {
      name: "Chilonzor",
      address: "Chilonzor-8, Toshkent",
      phone: "+998 77 777 77 77",
      isNew: false,
    },
    {
      name: "Yunusobod",
      address: "Yunusobod-1, Toshkent",
      phone: "+998 77 777 77 78",
      isNew: true,
    },
    {
      name: "Mirobod",
      address: "Mirobod-2, Toshkent",
      phone: "+998 77 777 77 79",
      isNew: false,
    },
    {
      name: "Shayxontohur",
      address: "Shayxontohur-3, Toshkent",
      phone: "+998 77 777 77 80",
      isNew: false,
    },
    {
      name: "Olmazor",
      address: "Olmazor-4, Toshkent",
      phone: "+998 77 777 77 81",
      isNew: true,
    },
    {
      name: "Bektemir",
      address: "Bektemir-5, Toshkent",
      phone: "+998 77 777 77 82",
      isNew: false,
    },
    {
      name: "Uchtepa",
      address: "Uchtepa-6, Toshkent",
      phone: "+998 77 777 77 83",
      isNew: false,
    },
    {
      name: "Sergeli",
      address: "Sergeli-7, Toshkent",
      phone: "+998 77 777 77 84",
      isNew: false,
    },
    {
      name: "Yakkasaroy",
      address: "Yakkasaroy-8, Toshkent",
      phone: "+998 77 777 77 85",
      isNew: false,
    },
    {
      name: "Mirzo Ulug'bek",
      address: "Mirzo Ulug'bek-9, Toshkent",
      phone: "+998 77 777 77 86",
      isNew: false,
    },
    {
      name: "Yangihayot",
      address: "Yangihayot-10, Toshkent",
      phone: "+998 77 777 77 87",
      isNew: false,
    },
    {
      name: "Qibray",
      address: "Qibray tumani, Toshkent",
      phone: "+998 77 777 77 88",
      isNew: false,
    },
    {
      name: "Zangiota",
      address: "Zangiota tumani, Toshkent",
      phone: "+998 77 777 77 89",
      isNew: false,
    },
    {
      name: "Parkent",
      address: "Parkent tumani, Toshkent",
      phone: "+998 77 777 77 90",
      isNew: false,
    },
    {
      name: "Piskent",
      address: "Piskent tumani, Toshkent",
      phone: "+998 77 777 77 91",
      isNew: false,
    },
  ];

  return (
    <section id="locationSection" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-teal-600 uppercase tracking-wide mb-4">
              Bizga yaqin studiyani toping
            </h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Markaziy O'zbekiston bo'ylab{" "}
              <span className="text-teal-600">qulay joylashuvlar</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Biz Toshkent va Markaziy O'zbekiston bo'ylab ko'plab joylarda
              xizmat ko'rsatamiz. Sizga eng qulay joyni toping va bizning
              professional jamoamizdan foydalaning.
            </p>
          </div>
        </FadeInSection>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Locations List */}
          <FadeInSection>
            <div className="space-y-6">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">
                Stomatologiya studiyalari
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {locations.map((location, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-xl p-4 hover:bg-teal-50 transition-colors duration-200 border border-gray-100 hover:border-teal-200"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="font-semibold text-gray-900">
                        {location.name}
                      </h5>
                      {location.isNew && (
                        <span className="bg-teal-600 text-white text-xs px-2 py-1 rounded-full font-medium">
                          Yangi
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 mb-1">
                      {location.address}
                    </p>
                    <p className="text-sm text-teal-600 font-medium">
                      {location.phone}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </FadeInSection>

          {/* Right Column - Map and Featured Locations */}
          <div className="space-y-6">
            {/* Map Placeholder */}
            <FadeInSection>
              <div className="bg-gray-100 rounded-2xl h-80 flex items-center justify-center relative overflow-hidden">
                <div style={{ width: "100%", height: "500px" }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11027.006587331814!2d69.20414085632659!3d41.2830040767721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8a3e8934c255%3A0xc859c550a6c5c35f!2sMilliy%20Stadium!5e1!3m2!1sen!2s!4v1757092269860!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </FadeInSection>

            {/* Featured Locations */}
            <FadeInSection>
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-gray-900">
                  Mashhur joylashuvlar
                </h4>

                {locations
                  .filter((loc) => loc.isNew)
                  .slice(0, 3)
                  .map((location, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-4 bg-teal-50 rounded-xl p-4 border border-teal-200"
                    >
                      <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Image
                          src="/images/ozkan-guner-Pc8lpKJwecM-unsplash.jpg"
                          alt={location.name}
                          width={64}
                          height={64}
                          className="rounded-lg object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h5 className="font-semibold text-gray-900">
                            {location.name}
                          </h5>
                          <span className="bg-teal-600 text-white text-xs px-2 py-1 rounded-full font-medium">
                            Yangi
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-1">
                          {location.address}
                        </p>
                        <p className="text-sm text-teal-600 font-medium">
                          {location.phone}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </FadeInSection>

            {/* Call to Action */}
            <FadeInSection>
              <div className="bg-gradient-to-r from-teal-600 to-blue-600 rounded-2xl p-6 text-white text-center">
                <h4 className="text-xl font-bold mb-2">
                  Eng yaqin studiyani toping
                </h4>
                <p className="text-teal-100 mb-4">
                  Sizning joylashuvingizga qarab eng qulay studiyani tavsiya
                  qilamiz
                </p>
                <button
                  onClick={() => {
                    const elemetn = document.getElementById("locationSection");
                    if (elemetn) {
                      const y =
                        elemetn.getBoundingClientRect().top +
                        window.scrollY -
                        100;
                      window.scrollTo({ top: y, behavior: "smooth" });
                    }
                  }}
                  className="bg-white cursor-pointer text-teal-600 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition-colors duration-200"
                >
                  Joylashuvni topish
                </button>
              </div>
            </FadeInSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
