import React, { useState, useEffect } from "react";
import { FaStar, FaShoppingCart, FaTimes } from "react-icons/fa";
import iphone1 from "../assets/iphone1.webp";
import iphone2 from "../assets/iphone2.webp";
import iphone3 from "../assets/iphone3.webp";
import iphone4 from "../assets/iphone4.webp";
import iphone5 from "../assets/iphone5.webp";
import iphone6 from "../assets/iphone6.webp";
import iphone7 from "../assets/iphone7.webp";
import samsung1 from "../assets/samsung1.jpeg";
import { useStore } from "../Zustand";
import { useNavigate } from "react-router-dom";

// Sample product data
const productData = [
  { id: 1, name: "iPhone 13 Pro", price: "$999", image: iphone1 },
  { id: 2, name: "iPhone 14", price: "$1099", image: iphone2 },
  { id: 3, name: "iPhone 13", price: "$899", image: iphone3 },
  { id: 4, name: "iPhone 12 Mini", price: "$699", image: iphone4 },
  { id: 5, name: "iPhone 11", price: "$599", image: iphone5 },
  { id: 6, name: "iPhone SE", price: "$429", image: iphone6 },
  { id: 7, name: "iPhone X", price: "$499", image: iphone7 },
  { id: 8, name: "Samsung Galaxy S21", price: "$799", image: samsung1 },
];

const Phone = () => {
  const navigate = useNavigate();

  
  
  const { addtocart, removecart, fetchData } = useStore();
  const [alertMessage, setAlertMessage] = useState("");
  const [reverseMessage, setReverseMessage] = useState("");
  const [cartItems, setCartItems] = useState({});

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

  const handleAddToCart = (productId, product) => {
    setCartItems((prev) => ({ ...prev, [productId]: true }));
    addtocart(product);
    setAlertMessage("Product successfully added to cart!");
  };

  const handleRemoveFromCart = (productId, product) => {
    setCartItems((prev) => ({ ...prev, [productId]: false }));
    removecart(product.id);
    setReverseMessage("Product successfully removed from cart!");
  };

  return (
    <div className="px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Phone Store</h2>

      {alertMessage && (
        <div className="bg-green-100 text-green-800 px-4 py-2 rounded mb-4 text-center">
          {alertMessage}
        </div>
      )}

      {reverseMessage && (
        <div className="bg-red-100 text-red-800 px-4 py-2 rounded mb-4 text-center">
          {reverseMessage}
        </div>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {productData.map((item) => (
          <div
            key={item.id}
            className=" shadow-md p-3 sm:p-4 hover:shadow-lg transition duration-300 bg-white"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 sm:h-60 object-contain rounded-md mb-4 transition-transform duration-300  hover:scale-105"
            />
            <h3 className="text-sm sm:text-base font-semibold">{item.name}</h3>
            <p className="text-gray-600 text-sm sm:text-base mb-3">
              {item.price}
            </p>

            {cartItems[item.id] ? (
              <button
                onClick={() => handleRemoveFromCart(item.id, item)}
                className="w-full bg-black text-white px-4 py-2 rounded text-sm flex items-center justify-center gap-2 hover:scale-105 transition"
              >
                <FaTimes className="text-white hidden sm:inline" />
                Remove Cart
              </button>
            ) : (
              <button
                onClick={() => handleAddToCart(item.id, item)}
                className="w-full bg-black text-white px-4 py-2 rounded text-sm flex items-center justify-center gap-2 hover:scale-105 transition"
              >
                <FaShoppingCart className="text-white" />
                Add to Cart
              </button>
          
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Phone;
