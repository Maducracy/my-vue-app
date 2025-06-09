import { useEffect, useState } from "react";
import { useStore } from "../Zustand";
import { FaStar, FaShoppingCart, FaHeart, FaCheckCircle, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Product = () => {
  const { data, loading, fetchData, addtocart, removecart, cart } = useStore();
  const [alertMessage, setAlertMessage] = useState("");
  const [reverseMessage, setReverseMessage] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (alertMessage || reverseMessage) {
      const timeout = setTimeout(() => {
        setAlertMessage("");
        setReverseMessage("");
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [alertMessage, reverseMessage]);

  const isInCart = (id) => cart.some((item) => item.id === id);

  const handleAddToCart = (product) => {
    addtocart(product);
    setAlertMessage("Added to cart!");
  };

  const handleRemoveFromCart = (product) => {
    removecart(product.id);
    setReverseMessage("Removed from cart.");
  };

  if (loading) {
    return(
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-t-blue-500 border-gray-300"></div>
      </div>
    );
  }

  return (
    <>
      {alertMessage && (
        <div className="fixed top-5 right-5 bg-green-600 text-white px-4 py-2 rounded shadow z-50">
          {alertMessage}
        </div>
      )}
      {reverseMessage && (
        <div className="fixed top-5 right-5 bg-red-600 text-white px-4 py-2 rounded shadow z-50">
          {reverseMessage}
        </div>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5 p-2 sm:p-4">
        {data?.map((product) => (
          <div
            key={product.id}
            className="bg-white p-3 sm:p-4 rounded shadow hover:shadow-md transition min-h-[480px] flex flex-col"
          >
            <Link to={`/product/${product.id}`}>
              <div className="relative group">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-40 sm:h-48 md:h-52 object-contain group-hover:scale-105 transition-transform"
                />
                <span className="absolute top-2 left-2 bg-yellow-500 text-white px-2 py-0.5 text-xs rounded">
                  10% OFF
                </span>
                <span className="absolute top-2 right-2 bg-green-600 text-white px-2 py-0.5 text-xs rounded">
                  Free Shipping
                </span>
              </div>
            </Link>

            <h2 className="text-xs sm:text-sm font-semibold mt-2 min-h-[48px] text-center leading-snug">
              {product.title.length > 55 ? `${product.title.slice(0, 55)}...` : product.title}
            </h2>

            <div className="flex items-center justify-center text-yellow-400 mt-1">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="w-3 h-3 sm:w-4 sm:h-4" />
              ))}
              <span className="text-[9px] sm:text-xs text-gray-500 ml-2">(240)</span>
            </div>

            <div className="flex justify-center gap-2 my-2">
              <p className="text-xs sm:text-sm text-gray-500 line-through">${(product.price * 1.1).toFixed(2)}</p>
              <p className="text-lg sm:text-xl font-bold">${product.price}</p>
            </div>

            <div className="text-green-600 flex items-center justify-center gap-1 text-xs sm:text-sm mb-2">
              <FaCheckCircle className="w-3 h-3 sm:w-4 sm:h-4" /> In Stock
            </div>

            <div className="mt-auto flex gap-2">
              {isInCart(product.id) ? (
                <button
                  onClick={() => handleRemoveFromCart(product)}
                  className="flex-1 bg-red-600 text-white px-2 sm:px-3 py-1.5 sm:py-2 rounded text-xs sm:text-sm flex items-center justify-center gap-1"
                >
                  <FaTimes className="w-3 h-3 sm:w-4 sm:h-4" /> Remove
                </button>
              ) : (
                <button
                  onClick={() => handleAddToCart(product)}
                  className="flex-1 bg-black text-white px-2 sm:px-3 py-1.5 sm:py-2 rounded text-xs sm:text-sm flex items-center justify-center gap-1 hover:bg-gray-800"
                >
                  <FaShoppingCart className="w-3 h-3 sm:w-4 sm:h-4" /> Add to Cart
                </button>
              )}
              <button className="bg-pink-500 text-white px-2 sm:px-3 py-1.5 sm:py-2 rounded text-xs sm:text-sm flex items-center justify-center">
                <FaHeart className="w-3 h-3 sm:w-4 sm:h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Product;
