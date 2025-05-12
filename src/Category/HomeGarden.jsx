import { useState, useEffect } from "react";
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
import { FaShoppingCart, FaTimes } from "react-icons/fa";
import { useStore } from "../Zustand";

const products = [
  { id: 10, name: "Sofa Set", price: "$120", img: sofa },
  { id: 11, name: "Canvas Painting", price: "$35", img: canvapaint },
  { id: 12, name: "Smart Lamp", price: "$25", img: lamp },
  { id: 13, name: "Blender", price: "$45", img: Blender },
  { id: 14, name: "Duvet Set", price: "$60", img: duvet },
  { id: 15, name: "Patio Chair", price: "$85", img: patiochair },
  { id: 16, name: "Hanging Planters", price: "$20", img: hangpainter },
  { id: 17, name: "BBQ Grill", price: "$75", img: grill },
  { id: 18, name: "Garden Tools", price: "$30", img: gardentool },
  { id: 19, name: "Storage Basket", price: "$15", img: basket },
];

const HomeGarden = () => {
  const { fetchData, addtocart, removecart } = useStore();
  const [cartItems, setCartItems] = useState({});
  const [alert, setAlert] = useState({ type: "", message: "" });

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (alert.message) {
      const timeout = setTimeout(() => {
        setAlert({ type: "", message: "" });
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [alert]);

  const handleAddToCart = (productId, product) => {
    setCartItems((prev) => ({ ...prev, [productId]: true }));
    addtocart(product);
    setAlert({ type: "success", message: "Product added to cart!" });
  };

  const handleRemoveFromCart = (productId, product) => {
    setCartItems((prev) => ({ ...prev, [productId]: false }));
    removecart(product.id);
    setAlert({ type: "error", message: "Product removed from cart!" });
  };

  return (
    <div className="p-4 relative">
      {alert.message && (
        <div
          className={`fixed top-5 right-5 px-4 py-2 rounded shadow-md z-50 text-white transition-all duration-500 ${
            alert.type === "success" ? "bg-green-600" : "bg-red-600"
          }`}
        >
          {alert.message}
        </div>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="shadow-md p-4 bg-white rounded-md flex flex-col justify-between hover:shadow-lg transition-transform duration-300 hover:scale-[1.02]"
          >
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-40 sm:h-52 object-contain rounded-md mb-3"
            />
            <div className="flex-1">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600 mb-3">{product.price}</p>
            </div>
            <div>
              {cartItems[product.id] ? (
                <button
                  onClick={() => handleRemoveFromCart(product.id, product)}
                  className="w-full bg-black text-white px-3 py-2 text-sm rounded flex items-center justify-center gap-2 hover:bg-gray-800 transition"
                >
                  <FaTimes />
                  Remove from cart
                </button>
              ) : (
                <button
                  onClick={() => handleAddToCart(product.id, product)}
                  className="w-full bg-black text-white px-3 py-2 text-sm rounded flex items-center justify-center gap-2 hover:bg-gray-800 transition"
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
