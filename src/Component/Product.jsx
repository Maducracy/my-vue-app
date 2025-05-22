// src/pages/Product.js
import  { useEffect, useState } from "react";
import { useStore } from "../Zustand";
import { FaStar, FaShoppingCart, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";


const Product = () => {
  const { data, loading, error, fetchData, addtocart, removecart, cart } = useStore();
  const [alertMessage, setAlertMessage] = useState("");
  const [reverseMessage, setReverseMessage] = useState("");


  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (alertMessage) {
      const timeout = setTimeout(() => setAlertMessage(""), 3000);
      return () => clearTimeout(timeout);
    }
  }, [alertMessage]);

  useEffect(() => {
    if (reverseMessage) {
      const timeout = setTimeout(() => setReverseMessage(""), 3000);
      return () => clearTimeout(timeout);
    }
  }, [reverseMessage]);

  const isInCart = (id) => cart.some((item) => item.id === id);

  const handleAddToCart = (product) => {
    addtocart(product);
    setAlertMessage("Product successfully added to cart!");
  };

  const handleRemoveFromCart = (product) => {
    removecart(product.id);
    setReverseMessage("Product successfully removed from cart!");
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-t-4 border-gray-300 border-t-blue-500"></div>
      </div>
    );
  }{
    <p className="bg-400-red text-centre">Error</p>
  }

  // if (error) {
  //   return <p className="text-red-500 text-center">Error: {error}</p>;
  // }

  return (
    <>
      {alertMessage && (
        <div className="fixed top-5 right-5 bg-green-600 text-white px-4 py-2 rounded shadow-md z-50">
          {alertMessage}
        </div>
      )}
      {reverseMessage && (
        <div className="fixed top-5 right-5 bg-red-600 text-white px-4 py-2 rounded shadow-md z-50">
          {reverseMessage}
        </div>
      )}

      

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
        {data &&
          data.map((product) => (
            <div
              key={product.id}
              className="p-4 rounded shadow bg-white flex flex-col justify-between min-h-[420px]"
            >
              <div>
                <Link to={`/product/${product.id}`}>
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-40 object-contain mb-4"
                />
                </Link>
                <h2 className="text-sm font-semibold text-center min-h-[48px]">
                  {product.title.length > 50
                    ? product.title.slice(0, 50) + "..."
                    : product.title}
                </h2>

                <div className="flex justify-center text-yellow-400 my-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>

                <div className="flex justify-center gap-2 mb-4">
                  <p className="text-sm text-gray-500 line-through">
                    ${(product.price * 1.2).toFixed(2)}
                  </p>
                  <p className="text-lg font-bold">${product.price}</p>
                </div>
              </div>

              <div className="mt-auto">
                {isInCart(product.id) ? (
                  <button
                    onClick={() => handleRemoveFromCart(product)}
                    className="w-full bg-black text-white px-4 py-2 rounded flex items-center justify-center gap-2 hover:scale-105 transition"
                  >
                    <FaTimes />
                    Remove Cart
                  </button>
                ) : (
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="w-full bg-black text-white px-4 py-2 rounded flex items-center justify-center gap-2 hover:scale-105 transition"
                  >
                    <FaShoppingCart />
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Product;
