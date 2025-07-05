import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`/api/products/${id}`)
      .then((res) => {
        console.log("🟢 Product data:", res.data);
        setProduct(res.data);
      })
      .catch((err) => console.error("Failed to load product", err));
  }, [id]);

  if (!product) {
    return <div className="text-center mt-10 text-gray-500">Loading product...</div>;
  }

  return (
    <>
      <Header />
      <section className="px-4 py-12 bg-white min-h-screen max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {product?.image ? (
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-96 object-cover rounded"
            />
          ) : (
            <div className="w-full h-96 bg-gray-200 flex items-center justify-center rounded">
              <span className="text-gray-500">No Image Available</span>
            </div>
          )}

          <div>
            <h1 className="text-3xl font-bold text-blue-900 mb-2">
              {product?.name || "No Name"}
            </h1>
            <p className="text-gray-600 mb-4">
              {product?.description || "No description available."}
            </p>
            <p className="text-gray-700 font-medium">
              Price: ₹{product?.price || "N/A"}
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Category: {product?.category || "N/A"}
            </p>
            {/* <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Enquire Now
            </button> */}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProductDetails;
