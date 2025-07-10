import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const OurProducts = () => {
  const [products, setProducts] = useState([]);
  const [filteredCategory, setFilteredCategory] = useState("All");
  const [categories, setCategories] = useState([]); // ✅ FIXED

  useEffect(() => {
    axios
      .get("/api/products")
      .then((res) => {
        const data = res.data || [];
        setProducts(data);

        const unique = Array.from(new Set(data.map((p) => p.category).filter(Boolean)));
        setCategories(["All", ...unique]);
      })
      .catch((err) => {
        console.error("Failed to fetch products:", err);
      });
  }, []);

  const filtered =
    filteredCategory === "All"
      ? products
      : products.filter(
          (p) => p.category?.toLowerCase() === filteredCategory.toLowerCase()
        );

  return (
    <>
  <Header />

    <section className="our-products px-4 py-12 bg-gray-50 min-h-screen">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-blue-900">Our Products</h2>
        <p className="text-gray-600 text-lg mt-2">
          Comprehensive range of pharmaceutical products manufactured with precision and care
        </p>
      </div>

      <div className="flex flex-wrap gap-2 justify-center mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilteredCategory(cat)}
            className={`px-4 py-2 rounded text-sm font-medium ${
              filteredCategory === cat ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="text-center text-gray-500 text-lg mt-10">
          No products found for this category.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filtered.map((item) => (
            <div key={item._id} className="bg-white shadow rounded-xl overflow-hidden">
              {item.image && (
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                <p className="text-sm text-gray-600">
                  {/* {item.description || "High-quality pharmaceutical product"} */}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {/* Category: {item.category || "General"} */}
                </p>
                {/* <p className="text-xs text-gray-500">Price: ₹{item.price}</p> */}
                <button
  onClick={() => window.location.href = `/product/${item._id}`}
  className="mt-3 px-4 py-2 text-white bg-orange-500 rounded hover:bg-orange-600"
>
  View Product →
</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
     <Footer />
    </>
  );
};

export default OurProducts;
