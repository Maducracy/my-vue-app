import { useState, useEffect } from "react";
import football from "../assets/football.jpeg";
import basketball from "../assets/basketball.jpeg";
import psg from "../assets/psg.jpeg";
import chelsea from "../assets/chelsea.jpeg";
import mancity from "../assets/mancity.jpeg";
import ps5 from "../assets/ps5.jpeg";
import puzzle from "../assets/puzzle.jpeg";
import barbiedoll from "../assets/barbiedoll.jpeg";
import lego from "../assets/lego.jpeg";
import remotecar from "../assets/remotecar.jpeg";
import { FaShoppingCart, FaTimes } from "react-icons/fa";
import { useStore } from "../Zustand";

const products = [
  { id: 30, name: "Football", price: "$25", img: football },
  { id: 31, name: "Basketball", price: "$30", img: basketball },
  { id: 32, name: "PSG Jersey", price: "$90", img: psg },
  { id: 33, name: "Chelsea Jersey", price: "$85", img: chelsea },
  { id: 34, name: "Man City Jersey", price: "$95", img: mancity },
  { id: 35, name: "PlayStation 5", price: "$499", img: ps5 },
  { id: 36, name: "Puzzle Game", price: "$20", img: puzzle },
  { id: 37, name: "Barbie Doll", price: "$60", img: barbiedoll },
  { id: 38, name: "LEGO Brick Set", price: "$45", img: lego },
  { id: 39, name: "Remote Control Car", price: "$35", img: remotecar },
];

const ToyGame = () => {
  const { fetchData, addtocart, removecart } = useStore();
  const [cartItems, setCartItems] = useState({});
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
    <div className="p-4">
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
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="shadow-md p-3 sm:p-4 hover:shadow-lg transition duration-300 bg-white"
          >
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-40 sm:h-60 object-contain rounded-md mb-4 transition-transform duration-300 hover:scale-105"
            />
            <h3 className="mt-2 text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-600">{product.price}</p>
            <div className="mt-auto pt-2">
              {cartItems[product.id] ? (
                <button
                  onClick={() => handleRemoveFromCart(product.id, product)}
                  className="w-full bg-black text-white px-2 py-1 text-sm rounded flex items-center justify-center gap-1 hover:scale-105 transition"
                >
                  <FaTimes className="text-white hidden sm:inline" />
                  Remove from cart
                </button>
              ) : (
                <button
                  onClick={() => handleAddToCart(product.id, product)}
                  className="w-full bg-black text-white px-2 py-1 text-sm rounded flex items-center justify-center gap-1 hover:scale-105 transition"
                >
                  <FaShoppingCart className="text-white" />
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

export default ToyGame;
