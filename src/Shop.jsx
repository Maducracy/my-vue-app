// import React, { useEffect, useState } from "react";
// import { useStore } from "./Zustand";
// import { FaStar, FaShoppingCart, FaTimes } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

// const Product = () => {
//   const { data, loading, error, fetchData, addtocart, removecart } = useStore();
//   const [cartItems, setCartItems] = useState({});
//   const [alertMessage, setAlertMessage] = useState("");
//   const [reverseMessage, setReverseMessage] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchData();
//   }, []);

//   useEffect(() => {
//     if (alertMessage) {
//       const timeout = setTimeout(() => setAlertMessage(""), 3000);
//       return () => clearTimeout(timeout);
//     }
//   }, [alertMessage]);

//   useEffect(() => {
//     if (reverseMessage) {
//       const timeout = setTimeout(() => setReverseMessage(""), 3000);
//       return () => clearTimeout(timeout);
//     }
//   }, [reverseMessage]);

//   const handleAddToCart = (productId, product) => {
//     setCartItems((prev) => ({ ...prev, [productId]: true }));
//     addtocart(product);
//     setAlertMessage("Product successfully added to cart!");
//   };

//   const handleRemoveFromCart = (productId, product) => {
//     setCartItems((prev) => ({ ...prev, [productId]: false }));
//     removecart(product.id);
//     setReverseMessage("Product successfully removed from cart!");
//   };
//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-64">
//         <div className="animate-spin rounded-full h-16 w-16 border-4 border-t-4 border-gray-300 border-t-blue-500"></div>
//       </div>
//     );
//   } else {
//    <p className="text-red-500 text-center">Error: {error}</p>;
//   }

//   // if (error) {
//   //   return <p className="text-red-500 text-center">Error: {error}</p>;
//   // }

//   return (
//     <>
//       {alertMessage && (
//         <div className="fixed top-5 right-5 bg-green-600 text-white px-4 py-2 rounded shadow-md z-50">
//           {alertMessage}
//         </div>
//       )}
//       {reverseMessage && (
//         <div className="fixed top-5 right-5 bg-red-600 text-white px-4 py-2 rounded shadow-md z-50">
//           {reverseMessage}
//         </div>
//       )}

//       <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
//         {data &&
//           data.map((product) => (
//             <div
//               key={product.id}
//               className="p-4 rounded shadow bg-white flex flex-col justify-between min-h-[420px] sm:min-h-[400px] md:min-h-[420px] overflow-hidden"
//             >
//               <div>
//                 <div className="mb-4">
//                   <img
//                     src={product.image}
//                     alt={product.title}
//                     className="w-full h-40 object-contain mx-auto transition-transform duration-300  hover:scale-105"
//                   />
//                 </div>

//                 {/* Title with fixed height */}
//                 <h2 className="text-sm font-semibold text-gray-800 mb-2 text-center min-h-[48px]">
//                   {product.title.length > 50
//                     ? product.title.slice(0, 50) + "..."
//                     : product.title}
//                 </h2>

//                 <div className="flex justify-center text-yellow-400 mb-2">
//                   {[...Array(5)].map((_, i) => (
//                     <FaStar key={i} />
//                   ))}
//                 </div>

//                 <div className="flex justify-center gap-2 mb-4">
//                   <p className="text-sm text-gray-500 line-through">
//                     ${(product.price * 1.2).toFixed(2)}
//                   </p>
//                   <p className="text-lg font-extrabold text-gray-900">
//                     ${product.price}
//                   </p>
//                 </div>
//               </div>

//               {/* Button */}
//               <div className="mt-auto">
//                 {cartItems[product.id] ? (
//                   <button
//                     onClick={() => handleRemoveFromCart(product.id, product)}
//                     className="w-full bg-black text-white px-4 py-2 rounded flex items-center justify-center gap-2 hover:scale-105 transition"
//                   >
//                     <FaTimes className="text-white hidden sm:inline" />
//                     Remove Cart
//                   </button>
//                 ) : (
//                   <button
//                     onClick={() => handleAddToCart(product.id, product)}
//                     className="w-full bg-black text-white px-4 py-2 rounded flex items-center justify-center gap-2 hover:scale-105 transition"
//                   >
//                     <FaShoppingCart className="text-white" />
//                     Add to Cart
//                   </button>
//                 )}
//               </div>
//             </div>
//           ))}
//       </div>
//     </>
//   );
// };

// export default Product;
import React, { useEffect, useState } from "react";
import { FaShoppingCart, FaTimes, FaStar, FaRegStar } from "react-icons/fa";
import { useStore } from "./Zustand";

// Fashion images
import wig from "./assets/wig.jpeg";
import watch from "./assets/watch.jpeg";
import underwears from "./assets/underwears.jpeg";
import nike from "./assets/nike.webp";
import socks from "./assets/socks.jpeg";
import glasses from "./assets/glasses.jpeg";
import hoddie from "./assets/hoddie.webp";
import Cap from "./assets/Cap.webp";
import bag from "./assets/bag.jpeg";

// Health & Beauty images
import vitamin from "./assets/vitamin.jpeg";
import facesheet from "./assets/facesheet.jpeg";
import markupkit from "./assets/markupkit.jpeg";
import hairoil from "./assets/hairoil.jpeg";
import toothbrush from "./assets/toothbrush.jpeg";
import sunscreen from "./assets/sunscreen.jpeg";
import lip from "./assets/lip.jpeg";
import perfume from "./assets/perfume.jpeg";
import lotion from "./assets/lotion.jpeg";

// Home & Garden images
import sofa from "./assets/sofa.jpeg";
import canvapaint from "./assets/canvapaint.jpeg";
import lamp from "./assets/lamp.jpeg";
import Blender from "./assets/Blender.jpeg";
import duvet from "./assets/duvet.jpeg";
import patiochair from "./assets/patiochair.jpeg";
import hangpainter from "./assets/hangpainter.jpeg";
import grill from "./assets/grill.jpeg";
import gardentool from "./assets/gardentool.jpeg";
import basket from "./assets/basket.jpeg";

const products = {
  fashion: [
    { id: 1, name: "Wig", price: 30, img: wig },
    { id: 2, name: "Watch", price: 40, img: watch },
    { id: 3, name: "Underwears", price: 15, img: underwears },
    { id: 4, name: "Nike Shoes", price: 80, img: nike },
    { id: 5, name: "Socks", price: 10, img: socks },
    { id: 6, name: "Glasses", price: 25, img: glasses },
    { id: 7, name: "Hoodie", price: 35, img: hoddie },
    { id: 8, name: "Cap", price: 12, img: Cap },
    { id: 9, name: "Bag", price: 45, img: bag },
  ],
  healthBeauty: [
    { id: 20, name: "Vitamins", price: 20, img: vitamin },
    { id: 21, name: "Face Sheet Masks", price: 10, img: facesheet },
    { id: 22, name: "Makeup Kit", price: 50, img: markupkit },
    { id: 23, name: "Hair Oil", price: 18, img: hairoil },
    { id: 24, name: "Toothbrush Set", price: 8, img: toothbrush },
    { id: 25, name: "Sunscreen", price: 15, img: sunscreen },
    { id: 26, name: "Lip Balm", price: 5, img: lip },
    { id: 27, name: "Perfume", price: 35, img: perfume },
    { id: 28, name: "Body Lotion", price: 12, img: lotion },
  ],
  homeGarden: [
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
  ],
};

const Shop = () => {
  const { fetchData, addtocart, removecart, cart } = useStore();

  const [alert, setAlert] = useState("");
  const [reverseAlert, setReverseAlert] = useState("");

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    if (alert) {
      const timeout = setTimeout(() => setAlert(""), 3000);
      return () => clearTimeout(timeout);
    }
  }, [alert]);

  useEffect(() => {
    if (reverseAlert) {
      const timeout = setTimeout(() => setReverseAlert(""), 3000);
      return () => clearTimeout(timeout);
    }
  }, [reverseAlert]);

  const isInCart = (id) => cart.some((item) => item.id === id);

  const handleAdd = (product) => {
    addtocart(product);
    setAlert(`${product.name} added to cart!`);
  };

  const handleRemove = (product) => {
    removecart(product.id);
    setReverseAlert(`${product.name} removed from cart!`);
  };

  const formatPrice = (price) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);

  const renderProducts = (items) =>
    items.map((product) => (
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
          <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
          <p className="text-sm text-gray-500 mb-2">{formatPrice(product.price)}</p>
          <div className="flex items-center text-yellow-400 mb-2">
            {[...Array(5)].map((_, i) =>
              i < Math.floor(Math.random() * 5 + 1) ? <FaStar key={i} /> : <FaRegStar key={i} />
            )}
          </div>
        </div>
        <div>
          {isInCart(product.id) ? (
            <button
              onClick={() => handleRemove(product)}
              className="w-full bg-red-600 text-white py-2 rounded-md text-sm font-medium flex items-center justify-center gap-2 hover:bg-red-700 transition"
              aria-label="Remove from cart"
              title="Remove from cart"
            >
              <FaTimes />
              Remove from cart
            </button>
          ) : (
            <button
              onClick={() => handleAdd(product)}
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
    ));

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-12">
      {/* Alerts */}
      {alert && (
        <div className="fixed top-5 right-5 bg-green-600 text-white px-4 py-2 rounded shadow-md z-50 transition-all">
          {alert}
        </div>
      )}
      {reverseAlert && (
        <div className="fixed top-5 right-5 bg-red-600 text-white px-4 py-2 rounded shadow-md z-50 transition-all">
          {reverseAlert}
        </div>
      )}

      {/* Fashion */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Fashion</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {renderProducts(products.fashion)}
        </div>
      </section>

      {/* Health & Beauty */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Health & Beauty</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {renderProducts(products.healthBeauty)}
        </div>
      </section>

      {/* Home & Garden */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Home & Garden</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {renderProducts(products.homeGarden)}
        </div>
      </section>
    </div>
  );
};

export default Shop;

