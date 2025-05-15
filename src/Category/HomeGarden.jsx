import { useState, useEffect } from "react";

import {
  FaShoppingCart,
  FaTimes,
  FaStar,
  FaRegStar,
} from "react-icons/fa";
import { useStore } from "../Zustand";

import sofa from "../assets/sofa.jpeg";
import canvapaint from "../assets/canvapaint.jpeg";
import lamp from "../assets/lamp.jpeg";
import Blender from "../assets/Blender.jpeg";
import duvet from "../assets/duvet.jpeg";
import patiochair from "../assets/patiochair.jpeg";
import hangpainter from "../assets/hangpainter.jpeg";
import grill from "../assets/grill.jpeg";
import gardentool from "../assets/gardentool.jpeg";
import basket from "../assets/basket.jpeg";

const products = [
  { id: 10, name: "Sofa Set", price: 120, img: sofa },
  { id: 11, name: "Canvas Painting", price: 35, img: canvapaint },
  { id: 12, name: "Smart Lamp", price: 25, img: lamp },
  { id: 13, name: "Blender", price: 45, img: Blender },
  { id: 14, name: "Duvet Set", price: 60, img: duvet },
  { id: 15, name: "Patio Chair", price: 85, img: patiochair },
  { id: 16, name: "Hanging Planters", price: 20, img: hangpainter },
  { id: 17, name: "BBQ Grill", price: 75, img: grill },
  { id: 18, name: "Garden Tools", price: 30, img: gardentool },
  { id: 19, name: "Storage Basket", price: 15, img: basket },
];

const HomeGarden = () => {
  const { fetchData, addtocart, removecart, cart } = useStore();
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

  const isInCart = (id) => cart.some((item) => item.id === id);

  const handleAddToCart = (product) => {
    addtocart(product);
    setAlertMessage(`${product.name} added to cart!`);
  };

  const handleRemoveFromCart = (product) => {
    removecart(product.id);
    setReverseMessage(`${product.name} removed from cart!`);
  };

  const formatPrice = (price) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);

  return (
    <div className="p-4">
      {/* Alerts */}
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
              {isInCart(product.id) ? (
                <button
                  onClick={() => handleRemoveFromCart(product)}
                  className="w-full bg-red-600 text-white py-2 rounded-md text-sm font-medium flex items-center justify-center gap-2 hover:bg-red-700 transition"
                  aria-label="Remove from cart"
                  title="Remove from cart"
                >
                  <FaTimes />
                  Remove from cart
                </button>
              ) : (
                <button
                  onClick={() => handleAddToCart(product)}
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

export default HomeGarden;
