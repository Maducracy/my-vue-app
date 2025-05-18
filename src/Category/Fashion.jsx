import  { useState, useEffect  } from 'react';
import wig from "../assets/wig.jpeg";
import watch from "../assets/watch.jpeg";
import underwears from "../assets/underwears.jpeg";
import nike from "../assets/nike.webp";
import socks from "../assets/socks.jpeg";
import glasses from "../assets/glasses.jpeg";
import hoddie from "../assets/hoddie.webp";
import Cap from "../assets/Cap.webp";
import bag from "../assets/bag.jpeg";
import { FaShoppingCart, FaTimes } from "react-icons/fa";
import { useStore } from "../Zustand";
import { Link } from "react-router-dom";

const products = [
  { id: 1, name: "Wig", price: "$30", img: wig },
  { id: 2, name: "Watch", price: "$40", img: watch },
  { id: 3, name: "Underwears", price: "$15", img: underwears },
  { id: 4, name: "Nike Shoes", price: "$80", img: nike },
  { id: 5, name: "Socks", price: "$10", img: socks },
  { id: 6, name: "Glasses", price: "$25", img: glasses },
  { id: 7, name: "Hoodie", price: "$35", img: hoddie },
  { id: 8, name: "Cap", price: "$12", img: Cap },
  { id: 9, name: "Bag", price: "$45", img: bag },
];

const Fashion = () => {

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
              className="w-full h-40 sm:h-60 object-contain rounded-md mb-4 transition-transform duration-300  hover:scale-105"
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

export default Fashion;
