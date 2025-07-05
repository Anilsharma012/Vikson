import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Quote } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { GetQuoteForm } from "./GetQuoteForm";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Our Products", path: "/our-products" },
    { name: "Partners", path: "/partners" },
    { name: "Manufacturing", path: "/manufacturing" },
    { name: "Contact Us", path: "/contact-us" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-slate-900 text-white sticky top-0 z-40 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
           <Link to="/" className="flex items-center space-x-4">
  <img
    src="/ViksonLogo.jpeg"
    alt="Vikson Logo"
    className="w-20 h-20 object-contain"
  />
<div className="leading-tight">
  <h2 className="text-xl font-bold text-white">
    Vikson International Medisys
  </h2>
  <p className="text-sm text-blue-300">
    The Third Party Manufacturing Specialist
  </p>
</div>

</Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`transition-colors ${
                  isActive(item.path)
                    ? "text-orange-400 font-medium"
                    : "hover:text-orange-400"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Get Quote Button */}
          <div className="hidden lg:flex">
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-orange-500 hover:bg-orange-600">
                  <Quote className="w-4 h-4 mr-2" />
                  Get Quote
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Request a Quote</DialogTitle>
                  <DialogDescription>
                    Fill out the form below and we'll get back to you with a
                    customized quote.
                  </DialogDescription>
                </DialogHeader>
                <GetQuoteForm />
              </DialogContent>
            </Dialog>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-700">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`transition-colors ${
                    isActive(item.path)
                      ? "text-orange-400 font-medium"
                      : "hover:text-orange-400"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-orange-500 hover:bg-orange-600 w-full mt-4">
                    <Quote className="w-4 h-4 mr-2" />
                    Get Quote
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Request a Quote</DialogTitle>
                    <DialogDescription>
                      Fill out the form below and we'll get back to you with a
                      customized quote.
                    </DialogDescription>
                  </DialogHeader>
                  <GetQuoteForm />
                </DialogContent>
              </Dialog>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
