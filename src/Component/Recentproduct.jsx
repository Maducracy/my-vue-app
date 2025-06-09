import  { useState, useEffect } from "react";
import { FaShoppingCart, FaTimes } from "react-icons/fa";
import { useStore } from "../Zustand";
import cat2 from "../assets/cat2.jpg";
import cat4 from "../assets/cat4.jpg";
import product2 from "../assets/product2.jpg";
import product4 from "../assets/product4.jpg";
import product5 from "../assets/product5.jpg";
import product6 from "../assets/product6.jpg";
import product7 from "../assets/product7.jpg";
import product3 from "../assets/product3.jpg";

function Recentproduct() {
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

  const recentProducts = [
    {
      id: 1,
      image: product2,
      title: "Product 1",
      description: "Description for Product 1",
      category: "Category 1",
      rating: { rate: 4.5, count: 10 },
    },
    {
      id: 2,
      image: product4,
      title: "Product 2",
      description: "Description for Product 2",
      category: "Category 2",
      rating: { rate: 3.5, count: 20 },
    },
    {
      id: 3,
      image: product5,
      title: "Product 3",
      description: "Description for Product 3",
      category: "Category 3",
      rating: { rate: 5.0, count: 30 },
    },
    {
      id: 4,
      image: product6,
      title: "Product 4",
      description: "Description for Product 4",
      category: "Category 4",
      rating: { rate: 2.5, count: 40 },
    },
    {
      id: 5,
      image: product7,
      title: "Product 5",
      description: "Description for Product 5",
      category: "Category 5",
      rating: { rate: 4.0, count: 50 },
    },
    {
      id: 6,
      image: cat2,
      title: "Product 6",
      description: "Description for Product 6",
      category: "Category 6",
      rating: { rate: 4.5, count: 60 },
    },
    {
      id: 7,
      image: cat4,
      title: "Product 7",
      description: "Description for Product 7",
      category: "Category 7",
      rating: { rate: 3.5, count: 70 },
    },
    {
      id: 8,
      image: product3,
      title: "Product 8",
      description: "Description for Product 8",
      category: "Category 8",
      rating: { rate: 5.0, count: 80 },
    },
  ];

  return (
    <div className="px-4">
      <h2 className="text-black text-2xl font-bold mb-6">Featured Products</h2>

      {/* Alert Messages */}
      {alertMessage && (
        <div className="fixed top-5 right-5 bg-white text-green-400 px-2 py-2 rounded shadow-md z-50">
          {alertMessage}
        </div>
      )}
      {reverseMessage && (
        <div className="fixed top-5 right-5 bg-white text-red-400 px-4 py-2 rounded shadow-md z-50">
          {reverseMessage}
        </div>
      )}

      <div className="flex overflow-x-auto gap-4 pb-4 no-scrollbar  ">
        {/* Your product cards */}
        {recentProducts.map((product) => (
          <div
            key={product.id}
            className="min-w-[240px] max-w-[240px] bg-white shadow rounded p-3 flex flex-col"
          >
            <img
              src={product.image}
              alt={product.title}
              className="h-full object-cover rounded mb-2"
            />
            <h3 className="text-sm font-semibold">{product.title}</h3>
            <p className="text-xs">{product.description}</p>
            <p className="text-xs text-gray-500">{product.category}</p>
            <p className="text-yellow-500 text-sm">
              {Array(Math.round(product.rating?.rate || 0))
                .fill()
                .map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
            </p>
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
}

export default Recentproduct;
