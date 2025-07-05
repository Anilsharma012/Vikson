import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Users, Award } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";



export default function Index() {
  const [selectedCategory, setSelectedCategory] = useState("Pharmaceuticals");
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <WhatsAppButton />


<section className="relative h-[500px] md:h-[650px]">
  {/* Swiper Slider with Blur and Dark Overlay */}
  <div className="absolute inset-0 z-0 overflow-hidden">
    <Swiper
      modules={[Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      className="w-full h-full"
    >
      {["slider3.webp", "slider6.webp", "slider7.webp", "slider4.webp"].map(
        (img, index) => (
          <SwiperSlide key={index}>
            <img
              src={`/slider/${img}`}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover filter blur-sm scale-105"
            />
          </SwiperSlide>
        )
      )}
    </Swiper>

    {/* Dark Overlay on Top of Blur */}
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
  </div>

  {/* Hero Content */}
  <div className="relative z-10 flex flex-col items-center justify-center text-white text-center h-full px-4">
    <h1 className="text-4xl md:text-6xl font-bold mb-4">
      Vikson International Medisys
    </h1>
    <p className="text-lg md:text-2xl mb-4 text-blue-100 font-light">
      Pharmaceutical Excellence Since 2000
    </p>
    <p className="text-md md:text-xl mb-8 text-blue-200 max-w-2xl">
      Leading the way in quality pharmaceutical manufacturing and healthcare
      solutions with over two decades of expertise.
    </p>

    <div className="flex flex-wrap justify-center gap-4">
      <Link to="/our-products">
        <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 text-lg">
          Explore Our Products <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </Link>
      <Link to="/about-us">
        <Button
          variant="outline"
          className="border-white text-white hover:bg-white hover:text-blue-800 px-6 py-3 text-lg"
        >
          Learn About Us
        </Button>
      </Link>
    </div>
  </div>
</section>




      {/* Quick Highlights */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <Building2 className="w-16 h-16 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold mb-2">20+ Years</h3>
                <p className="text-gray-600">
                  Experience in pharmaceutical manufacturing
                </p>
              </div>
              <div className="flex flex-col items-center">
                <Award className="w-16 h-16 text-green-600 mb-4" />
                <h3 className="text-2xl font-bold mb-2">GMP Certified</h3>
                <p className="text-gray-600">
                  International quality standards compliance
                </p>
              </div>
              <div className="flex flex-col items-center">
                <Users className="w-16 h-16 text-orange-500 mb-4" />
                <h3 className="text-2xl font-bold mb-2">Expert Team</h3>
                <p className="text-gray-600">
                  Dedicated professionals ensuring excellence
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>








      {/* Quick Navigation */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Explore Our Company</h2>
            <p className="text-xl text-gray-600 mb-12">
              Discover what makes us a trusted pharmaceutical partner
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link
                to="/about-us"
                className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow text-center group"
              >
                <Building2 className="w-12 h-12 mx-auto mb-4 text-blue-600 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-lg mb-2">About Us</h3>
                <p className="text-gray-600 text-sm">
                  Learn our story and values
                </p>
              </Link>

              <Link
                to="/our-products"
                className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow text-center group"
              >
                <Award className="w-12 h-12 mx-auto mb-4 text-green-600 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-lg mb-2">Our Products</h3>
                <p className="text-gray-600 text-sm">
                  Browse our product range
                </p>
              </Link>

              <Link
                to="/manufacturing"
                className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow text-center group"
              >
                <Users className="w-12 h-12 mx-auto mb-4 text-purple-600 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-lg mb-2">Manufacturing</h3>
                <p className="text-gray-600 text-sm">See our facilities</p>
              </Link>

              <Link
                to="/contact-us"
                className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow text-center group"
              >
                <ArrowRight className="w-12 h-12 mx-auto mb-4 text-orange-500 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-lg mb-2">Contact Us</h3>
                <p className="text-gray-600 text-sm">Get in touch today</p>
              </Link>
            </div>
          </div>
        </div>
      </section>




{/* Banner Image above Explore Our Company */}
<section>
  <img
    src="/images/home.jpeg"
    alt="Vikson Pharma Banner"
    className="w-full h-auto object-cover"
  />
</section>












{/* Why Choose Vikson Section */}
<section className="py-20 bg-blue-50">
  <div className="container mx-auto px-4">
    <div className="max-w-5xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-6 text-blue-800">
        Why Choose Vikson International Medisys?
      </h2>
      <p className="text-lg text-gray-700 mb-12">
        Trusted by partners across India and abroad for unmatched quality,
        ethical manufacturing, and timely delivery.
      </p>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-blue-700 mb-2">
            Trusted by 100+ Pharma Brands
          </h3>
          <p className="text-gray-600">
            We’re a preferred third-party manufacturer for leading pharma houses.
          </p>
        </div>
        <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-blue-700 mb-2">
            WHO-GMP Certified Facilities
          </h3>
          <p className="text-gray-600">
            Our plants are certified and meet the most stringent global standards.
          </p>
        </div>
        <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-blue-700 mb-2">
            End-to-End Manufacturing Solutions
          </h3>
          <p className="text-gray-600">
            From formulation to packaging — we deliver complete solutions under one roof.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>






{/* Our Product Ranges */}
{/* <section className="py-20 bg-white">
  <div className="container mx-auto px-4">
    <div className="max-w-6xl mx-auto text-center mb-12">
      <h2 className="text-4xl font-bold text-blue-800 mb-4">
        Our Product Ranges
      </h2>
      <p className="text-gray-600 text-lg">
        Quality assured formulations across categories for every healthcare need.
      </p>
    </div>
    <div className="grid md:grid-cols-3 gap-8">
      <div className="border rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
        <img
          src="/images/download.jpeg"
          alt="Tablets & Capsules"
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold text-blue-700 mb-2">
            Tablets & Capsules
          </h3>
          <p className="text-gray-600">
            Oral solid dosage forms for a wide variety of therapeutic segments.
          </p>
        </div>
      </div>
      <div className="border rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
        <img
          src="/images/syrup.jpeg"
          alt="Syrups & Suspensions"
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold text-blue-700 mb-2">
            Syrups & Suspensions
          </h3>
          <p className="text-gray-600">
            Safe and palatable liquid medicines suitable for all age groups.
          </p>
        </div>
      </div>
      <div className="border rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
        <img
          src="/images/injection1.jpg"
          alt="Injectables"
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold text-blue-700 mb-2">
            Injectables
          </h3>
          <p className="text-gray-600">
            Sterile, stable and safe parenteral products from certified units.
          </p>
        </div>
      </div>
    </div>
  </div>
</section> */}




<section className="py-20 bg-white">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-4xl font-bold text-blue-800 mb-6">
      Explore Products by Category
    </h2>

    {/* Category Buttons */}
    <div className="flex flex-wrap justify-center gap-4 mb-10">
      {["Pharmaceuticals", "Nutraceuticals", "Ayurvedic/Herbal", "Cosmetic"].map((cat) => (
        <button
          key={cat}
          className={`px-6 py-3 rounded-full font-medium text-white ${
            selectedCategory === cat
              ? "bg-blue-800"
              : "bg-gray-400 hover:bg-gray-500"
          }`}
          onClick={() => setSelectedCategory(cat)}
        >
          {cat}
        </button>
      ))}
    </div>

    {/* Category-wise Product Cards */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left max-w-6xl mx-auto">
      {selectedCategory === "Pharmaceuticals" &&
        [
          { name: "Anti Infection Segment ", image: "/products/products/capsule.jpg", pdf: "/products/pdfs/capsule.pdf" },
          { name: "Cardiology Segment ", image: "/products/products/churna.jpg", pdf: "/pdfs/capsule.pdf" },
          { name: "Dermetology Segment ", image: "/products/products/cream.jpg", pdf: "/pdfs/syrup.pdf" },
          { name: "Disbetology Segment", image: "/products/products/ayur-syrup.jpg", pdf: "/pdfs/sachet.pdf" },
          { name: "Gastroenterology Segment", image: "/products/products/protein.jpg", pdf: "/pdfs/injection.pdf" },


          { name: "Gynaceology Segment", image: "/products/products/injection.jpg", pdf: "/pdfs/injection.pdf" },
          { name: "Neuro/Pshychistry  Segment", image: "/products/products/injection.jpg", pdf: "/pdfs/injection.pdf" },
          { name: "Ortho Segment", image: "/products/products/injection.jpg", pdf: "/pdfs/injection.pdf" },
          { name: "Pain Segment", image: "/products/products/injection.jpg", pdf: "/pdfs/injection.pdf" },
          { name: "Pulmonology Segment", image: "/products/products/injection.jpg", pdf: "/pdfs/injection.pdf" },
          { name: "Urology Segment", image: "/products/products/injection.jpg", pdf: "/pdfs/injection.pdf" },
          { name: "Oncology Segment", image: "/products/products/injection.jpg", pdf: "/pdfs/injection.pdf" },
      




        ].map((item) => (
          <div key={item.name} className="border rounded-lg p-4 shadow hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-blue-700 mb-2">{item.name}</h3>
            <img src={item.image} alt={item.name} className="w-full h-40 object-cover mb-3 rounded" />
            <a
              href={item.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
            >
              View PDF
            </a>
          </div>
        ))}

      {selectedCategory === "Nutraceuticals" &&
        [
          { name: "TABLETS", image: "/products/products/capsule.jpg", pdf: "/pdfs/effervescent.pdf" },
          { name: "CAPSULE", image: "/products/products/capsule.jpg", pdf: "/pdfs/protein.pdf" },
          { name: "SYRUPS", image: "/products/products/capsule.jpg", pdf: "/pdfs/spray.pdf" },

         { name: "SACNETS", image: "/products/products/capsule.jpg", pdf: "/pdfs/spray.pdf" },
                  { name: "Injection", image:"/products/products/capsule.jpg", pdf: "/pdfs/spray.pdf" },
                           { name: "Liquids", image: "/products/products/capsule.jpg", pdf: "/pdfs/spray.pdf" },
                                    { name: "Lotion/Cream", image: "/products/products/capsule.jpg", pdf: "/pdfs/spray.pdf" },
         { name: "Softgel", image: "/products/products/capsule.jpg", pdf: "/pdfs/spray.pdf" },

                  { name: "Protein Powder", image: "/products/products/capsule.jpg", pdf: "/pdfs/spray.pdf" },

                                    






        ].map((item) => (
          <div key={item.name} className="border rounded-lg p-4 shadow hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-blue-700 mb-2">{item.name}</h3>
            <img src={item.image} alt={item.name} className="w-full h-40 object-cover mb-3 rounded" />
            <a
              href={item.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
            >
              View PDF
            </a>
          </div>
        ))}

      {selectedCategory === "Ayurvedic/Herbal" &&
        [
          { name: "TABLETS", image:"/products/products/capsule.jpg", pdf: "/pdfs/effervescent.pdf" },
          { name: "CAPSULE", image: "/products/products/capsule.jpg", pdf: "/pdfs/protein.pdf" },
          { name: "SYRUPS", image: "/products/products/capsule.jpg", pdf: "/pdfs/spray.pdf" },

         { name: "SACNETS", image: "/products/products/capsule.jpg", pdf: "/pdfs/spray.pdf" },
                  { name: "Injection", image: "/products/products/capsule.jpg", pdf: "/pdfs/spray.pdf" },
                           { name: "Liquids", image: "/products/products/capsule.jpg", pdf: "/pdfs/spray.pdf" },
                                    { name: "Lotion/Cream", image: "/products/products/capsule.jpg", pdf: "/pdfs/spray.pdf" },
         { name: "Softgel", image: "/products/products/capsule.jpg", pdf: "/pdfs/spray.pdf" },

                  { name: "Protein Powder", image: "/products/products/capsule.jpg", pdf: "/pdfs/spray.pdf" },
        ].map((item) => (
          <div key={item.name} className="border rounded-lg p-4 shadow hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-blue-700 mb-2">{item.name}</h3>
            <img src={item.image} alt={item.name} className="w-full h-40 object-cover mb-3 rounded" />
            <a
              href={item.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
            >
              View PDF
            </a>
          </div>
        ))}

      {selectedCategory === "Cosmetic" &&
        [
          { name: "Face Cream", image: "/products/products/capsule.jpg", pdf: "/pdfs/cream.pdf" },
          { name: "Serum", image: "/products/products/capsule.jpg", pdf: "/pdfs/shampoo.pdf" },
          { name: "Shampoo", image: "/products/products/capsule.jpg", pdf: "/pdfs/moisturiser.pdf" },
          { name: "Body wash", image: "/products/products/capsule.jpg", pdf: "/pdfs/moisturiser.pdf" },
          { name: "Lotion", image: "/products/products/capsule.jpg", pdf: "/pdfs/moisturiser.pdf" },

                    { name: "Spray", image: "/products/products/capsule.jpg", pdf: "/pdfs/moisturiser.pdf" },
          { name: "Oil", image: "/products/products/capsule.jpg", pdf: "/pdfs/moisturiser.pdf" },





        ].map((item) => (
          <div key={item.name} className="border rounded-lg p-4 shadow hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-blue-700 mb-2">{item.name}</h3>
            <img src={item.image} alt={item.name} className="w-full h-40 object-cover mb-3 rounded" />
            <a
              href={item.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
            >
              View PDF
            </a>
          </div>
        ))}
    </div>
  </div>
</section>












{/* Our Core Divisions */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-4">
    <div className="max-w-6xl mx-auto text-center mb-12">
      <h2 className="text-4xl font-bold text-blue-800 mb-4">
        Our Core Divisions
      </h2>
      <p className="text-gray-600 text-lg">
        We operate across a wide spectrum of pharmaceutical categories
      </p>
    </div>
    <div className="grid md:grid-cols-3 gap-8">
      <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
        <h3 className="text-xl font-semibold mb-2 text-blue-600">General Medicines</h3>
        <p className="text-gray-600">
          Tablets, capsules, syrups and OTC products for broad medical needs.
        </p>
      </div>
      <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
        <h3 className="text-xl font-semibold mb-2 text-blue-600">Nutraceuticals</h3>
        <p className="text-gray-600">
          High-quality wellness products and health supplements.
        </p>
      </div>
      <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
        <h3 className="text-xl font-semibold mb-2 text-blue-600">Injectables</h3>
        <p className="text-gray-600">
          Sterile and safe injectables manufactured in certified facilities.
        </p>
      </div>
    </div>
  </div>
</section>

{/* Client Testimonials */}
<section className="py-20 bg-gray-50">
  <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto text-center mb-12">
      <h2 className="text-4xl font-bold text-blue-800 mb-4">
        What Our Clients Say
      </h2>
      <p className="text-gray-600 text-lg">
        Real stories from partners who trust us.
      </p>
    </div>
    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-white p-6 border rounded-lg shadow">
        <p className="text-gray-700 italic mb-4">
          "Vikson's consistency and professionalism make them an ideal
          third-party manufacturer. Timely delivery and great product quality!"
        </p>
        <h4 className="font-semibold text-blue-600">— Dr. Mehta, Delhi</h4>
      </div>
      <div className="bg-white p-6 border rounded-lg shadow">
        <p className="text-gray-700 italic mb-4">
          "We've scaled our nutraceutical business smoothly with their expert
          guidance and top-class facility support."
        </p>
        <h4 className="font-semibold text-blue-600">— PharmaMax Pvt Ltd</h4>
      </div>
    </div>
  </div>
</section>





      <Footer />
    </div>
  );
}
