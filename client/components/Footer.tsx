import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Send,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-5 gap-8">
          {/* Logo & Tagline */}
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold text-orange-400 mb-2">
              Vikson Medisys
            </h2>
            <p className="text-sm text-gray-400">
              Pharmaceutical Excellence Since 2000
            </p>
            <p className="mt-2 text-gray-500 text-xs">
              Trusted name in healthcare, delivering quality across India.
            </p>
          </div>

          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about-us"
                  className="text-gray-400 hover:text-orange-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact-us"
                  className="text-gray-400 hover:text-orange-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="/partners"
                  className="text-gray-400 hover:text-orange-400 transition-colors"
                >
                  Partners
                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-xl font-bold mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/our-products/injection"
                  className="text-gray-400 hover:text-orange-400 transition-colors"
                >
                  Injections
                </Link>
              </li>
              <li>
                <Link
                  to="/our-products/tablets"
                  className="text-gray-400 hover:text-orange-400 transition-colors"
                >
                  Tablets
                </Link>
              </li>
              <li>
                <Link
                  to="/our-products/Protein Powder"
                  className="text-gray-400 hover:text-orange-400 transition-colors"
                >
                  Protein Powder
                </Link>
              </li>
              <li>
                <Link
                  to="/our-products/TABLET"
                  className="text-gray-400 hover:text-orange-400 transition-colors"
                >
                  Syrups
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links / Help */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-orange-400 transition-colors"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-orange-400 transition-colors"
                >
                  Quality Assurance
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com/maps?q=vikson+international+medisys"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-orange-400 transition-colors"
                >
                  Find us on Map
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-orange-400" />
                <span className="text-gray-400">+91-99926 65666</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-orange-400" />
                <span className="text-gray-400">info@viksonmedisys.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-orange-400" />
                <span className="text-gray-400">Rohtak, Haryana, India</span>
              </div>

              {/* Social Icons */}
              <div className="flex space-x-4 mt-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-orange-400 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-orange-400 transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-orange-400 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter / Bottom */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center">
          {/* <form className="max-w-md mx-auto flex items-center justify-center gap-2 mb-4">
            <input
              type="email"
              placeholder="Subscribe to our newsletter"
              className="px-4 py-2 rounded w-full text-black"
              required
            />
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded"
            >
              <Send className="w-4 h-4" />
            </button>
          </form> */}
          <p className="text-gray-500 text-sm">
            © 2025 Vikson International Medisys. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
