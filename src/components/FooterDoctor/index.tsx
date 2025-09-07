import { Facebook, Instagram } from "lucide-react";

interface FooterSectionProps {
  telegramBotUrl: string;
}

function FooterDoctor({ telegramBotUrl }: FooterSectionProps) {
  return (
    <footer className="bg-slate-700 text-white">
      <div className="container mx-auto px-6 py-10">
        {/* Logo + Social + Buttons */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-12">
          {/* Logo & Social */}
          <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            <div className="text-2xl font-bold">
              Dental
              <div className="text-xs tracking-wider text-gray-300">Map</div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-gray-300 hidden sm:block">Follow Us!</span>
              <Facebook className="w-6 h-6 text-gray-300 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="w-6 h-6 text-gray-300 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <button
              onClick={() => {
                const element = document.getElementById("locationSection");
                if (element) {
                  const y =
                    element.getBoundingClientRect().top + window.scrollY;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }
              }}
              className="w-full rounded-tr-4xl rounded-bl-4xl cursor-pointer sm:w-auto px-6 py-2 bg-white text-slate-700 hover:bg-gray-100 font-medium transition-colors"
            >
              Sizga yaqin studiya toping
            </button>
            <a
              href={telegramBotUrl}
              rel="noopener noreferrer"
              target="_blank"
              className="w-full sm:w-auto px-6 py-2 cursor-pointer bg-teal-500 hover:bg-teal-600 text-white rounded-tr-4xl rounded-bl-4xl font-medium transition-colors"
            >
              Uchrashuvni bron qiling
            </a>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 text-sm">
          {/* Locations */}
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4">Locations</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-teal-200 transition-colors">
                  All
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-200 transition-colors">
                  Bee Cave
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-200 transition-colors">
                  Boulder Lane
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-200 transition-colors">
                  Brodie Lane
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-200 transition-colors">
                  Bull Creek
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-200 transition-colors">
                  Cedar Park
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-200 transition-colors">
                  Domain
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-200 transition-colors">
                  Downtown
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-teal-200 transition-colors">
                  Preventative Dentistry
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-200 transition-colors">
                  Restorative Dentistry
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-200 transition-colors">
                  Invisalign
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-200 transition-colors">
                  Teeth Whitening
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-200 transition-colors">
                  Cosmetic Dentistry
                </a>
              </li>
            </ul>
          </div>

          {/* About Us */}
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4">About Us</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-teal-200 transition-colors">
                  Founder's Story
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-200 transition-colors">
                  Meet the Team
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-200 transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="tel:(512) 647-6045"
                  className="hover:text-teal-200 transition-colors"
                >
                  (512) 647-6045
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-200 transition-colors">
                  Contact Form
                </a>
              </li>
            </ul>
          </div>

          {/* Insurance */}
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4">Insurance</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-teal-200 transition-colors">
                  Insurance Plans
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-200 transition-colors">
                  Dental Financing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-200 transition-colors">
                  Membership
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-teal-200 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-200 transition-colors">
                  Aftercare
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-200 transition-colors">
                  Recommended Products
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-gray-600 pt-6 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Swish Dental. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default FooterDoctor;
