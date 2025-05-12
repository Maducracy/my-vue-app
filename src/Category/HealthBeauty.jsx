import { useState, useEffect } from "react";
import {
  FaShoppingCart,
  FaTimes,
  FaStar,
  FaRegStar,
} from "react-icons/fa";
import { useStore } from "../Zustand";

// Image imports
import vitamin from "../assets/vitamin.jpeg";
import facesheet from "../assets/facesheet.jpeg";
import markupkit from "../assets/markupkit.jpeg";
import hairoil from "../assets/hairoil.jpeg";
import toothbrush from "../assets/toothbrush.jpeg";
import sunscreen from "../assets/sunscreen.jpeg";
import lip from "../assets/lip.jpeg";
import perfume from "../assets/perfume.jpeg";
import lotion from "../assets/lotion.jpeg";

const products = [
  { id: 20, name: "Vitamins", price: 20, img: vitamin },
  { id: 21, name: "Face Sheet Masks", price: 10, img: facesheet },
  { id: 22, name: "Makeup Kit", price: 50, img: markupkit },
  { id: 23, name: "Hair Oil", price: 18, img: hairoil },
  { id: 24, name: "Toothbrush Set", price: 8, img: toothbrush },
  { id: 25, name: "Sunscreen", price: 15, img: sunscreen },
  { id: 26, name: "Lip Balm", price: 5, img: lip },
  { id: 27, name: "Perfume", price: 35, img: perfume },
  { id: 28, name: "Body Lotion", price: 12, img: lotion },
];

const HealthBeauty = () => {
  const { fetchData, addtocart, removecart } = useStore();
  const [cartItems, setCartItems] = useState({});
  const [alertMessage, setAlertMessage] = useState("");
  const [reverseMessage, setReverseMessage] = useState("");

  useEffect(() => {
    fetchData();
  }, [fetchData]);

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

  const formatPrice = (price) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);

  const handleAddToCart = (productId, product) => {
    setCartItems((prev) => ({ ...prev, [productId]: true }));
    addtocart(product);
    setAlertMessage(`${product.name} added to cart!`);
  };

  const handleRemoveFromCart = (productId, product) => {
    setCartItems((prev) => ({ ...prev, [productId]: false }));
    removecart(product.id);
    setReverseMessage(`${product.name} removed from cart!`);
  };

  return (
    <div className="p-4">
      {/* Alert Messages */}
      {alertMessage && (
        <div className="fixed top-5 right-5 bg-green-600 text-white px-4 py-2 rounded shadow-md z-50 transition-all">
          {alertMessage}
        </div>
      )}
      {reverseMessage && (
        <div className="fixed top-5 right-5 bg-red-600 text-white px-4 py-2 rounded shadow-md z-50 transition-all">
          {reverseMessage}
        </div>
      )}

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="shadow-lg p-4 rounded-lg bg-white hover:shadow-xl transition-all flex flex-col justify-between"
          >
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-48 object-contain mb-4 rounded-md hover:scale-105 transition-transform duration-300"
            />
            <div className="flex-grow">
              <h3 className="text-lg font-semibold text-gray-800">
                {product.name}
              </h3>
              <p className="text-sm text-gray-500 mb-2">
                {formatPrice(product.price)}
              </p>
              <div className="flex items-center text-yellow-400 mb-2">
                {[...Array(5)].map((_, index) =>
                  index < Math.floor(Math.random() * 5 + 1) ? (
                    <FaStar key={index} />
                  ) : (
                    <FaRegStar key={index} />
                  )
                )}
              </div>
            </div>
            <div>
              {cartItems[product.id] ? (
                <button
                  onClick={() => handleRemoveFromCart(product.id, product)}
                  className="w-full bg-red-600 text-white py-2 rounded-md text-sm font-medium flex items-center justify-center gap-2 hover:bg-red-700 transition"
                  aria-label="Remove from cart"
                  title="Remove from cart"
                >
                  <FaTimes />
                  Remove from cart
                </button>
              ) : (
                <button
                  onClick={() => handleAddToCart(product.id, product)}
                  className="w-full bg-black text-white py-2 rounded-md text-sm font-medium flex items-center justify-center gap-2 hover:bg-gray-800 transition"
                  aria-label="Add to cart"
                  title="Add to cart"
                >
                  <FaShoppingCart />
                  Add to cart
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthBeauty;
