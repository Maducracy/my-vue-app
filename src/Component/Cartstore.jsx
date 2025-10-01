// import React from "react";
// import { useStore } from "../Zustand";
// import { FaTimes } from "react-icons/fa";
// import { FlutterWaveButton } from "flutterwave-react-v3";

// const Cartstore = () => {
//   const { cart, removecart } = useStore();

//   // Calculate total price
//   const totalAmount = cart.reduce((acc, item) => {
//     let price = item.price;

//     if (typeof price === "string") {
//       price = parseFloat(price.replace(/[^0-9.]/g, ""));
//     }

//     if (typeof price !== "number" || isNaN(price)) {
//       console.warn("Invalid price in cart item:", item);
//       price = 0;
//     }

//     return acc + price;
//   }, 0);

//   const config = {
//     public_key: "FLWPUBK_TEST-00e9287e7984f70a6e59ef068707fcec-X",
//     tx_ref: Date.now().toString(),
//     amount: totalAmount,
//     currency: "USD",
//     payment_options: "card, mobilemoney",
//     customer: {
//       email: "user@example.com",
//       name: "John Doe",
//     },
//     customizations: {
//       title: "Your Store",
//       description: "Payment for items in cart",
//     },
//   };

//   const fwConfig = {
//     ...config,
//     text: "Checkout",
  
  
//     cursor:"pointer",
//     callback: (response) => {
//       console.log("Payment successful", response);
//       // You can clear the cart here if needed
//     },
//     callback: (response) => {
//       console.log("Payment successful", response);
//       // You can clear the cart here if needed
//     },
//     onClose: () => {
//       console.log("Payment modal closed");
//     },
//   };

//   return (
//     <div className="p-4">
//       <h2 className="text-2xl font-bold mb-4 flex justify-center">Your Cart</h2>
//       {cart.length === 0 ? (
//         <p className="text-gray-500 flex justify-center">Your cart is empty.</p>
//       ) : (
//         <>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//             {cart.map((item) => (
//               <div key={item.id} className="p-4 bg-white rounded shadow">
//                 <img
//                   src={item.img || item.image}
//                   alt={item.name || item.title}
//                   className="w-full h-40 object-contain mb-2"
//                 />
//                 <h3 className="text-sm font-semibold mb-2">
//                   {item.name || item.title}
//                 </h3>
//                 <p className="font-bold mb-2">${item.price}</p>
//                 <button
//                   onClick={() => removecart(item.id)}
//                   className="bg-red-600 text-white px-4 py-2 rounded hover:opacity-80 flex items-center justify-center gap-2"
//                 >
//                   <FaTimes />
//                   Remove
//                 </button>
//               </div>
//             ))}
//           </div>

         
//           <div className="mt-6 flex flex-col items-center">
//             <p className="text-lg font-semibold mb-2">
//               Total: ${totalAmount.toFixed(2)}
//             </p>
//             <FlutterWaveButton {...fwConfig} />
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Cartstore;
// src/pages/Cartstore.js
import { useState, useEffect } from "react";
import { useStore } from "../Zustand";
import { FaTimes, FaCheckCircle, FaPlus, FaMinus } from "react-icons/fa";

const Cartstore = () => {
  const { cart, removecart, increaseQty, decreaseQty } = useStore();

  const [formData, setFormData] = useState({ name: "", number: "", amount: "" });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // ✅ Calculate total with quantity
  const total = cart
    .reduce((acc, item) => {
      const price =
        typeof item.price === "string"
          ? parseFloat(item.price.replace(/[^0-9.]/g, ""))
          : item.price;
      return acc + (isNaN(price) ? 0 : price * (item.quantity ?? 1));
    }, 0)
    .toFixed(2);

  useEffect(() => {
    setFormData((prev) => ({ ...prev, amount: total }));
  }, [total]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, number, amount } = formData;

    if (!name || !number || !amount) {
      setError("⚠️ Please fill in all fields.");
      return;
    }

    // Simulate payment success
    setTimeout(() => {
      setSuccess(true);
      setError("");
      // Auto close modal after success
      setTimeout(() => {
        setIsModalOpen(false);
        setSuccess(false);
        setFormData({ name: "", number: "", amount: total });
      }, 2000);
    }, 1000);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">🛒 Your Shopping Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500 text-center text-lg">
          Your cart is empty. <br /> 🛍️ Start shopping!
        </p>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          {/* CART ITEMS */}
          <div className="md:col-span-2 space-y-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition relative"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-24 h-24 object-contain rounded"
                />
                <div className="ml-4 flex-1">
                  <h3 className="text-lg font-semibold line-clamp-1">{item.title}</h3>
                  <p className="text-sm text-gray-500">In Stock</p>

                  {/* Price and Quantity */}
                  <div className="mt-2 flex items-center gap-4">
                    <p className="text-lg font-bold text-green-600">${item.price}</p>

                    {/* Quantity Control */}
                    {/* <div className="flex items-center border rounded-lg overflow-hidden">
                      <button
                        onClick={() => decreaseQty(item.id)}
                        className="px-2 py-1 bg-gray-200 hover:bg-gray-300"
                      >
                        <FaMinus />
                      </button>
                      <span className="px-4">{item.quantity ?? 1}</span>
                      <button
                        onClick={() => increaseQty(item.id)}
                        className="px-2 py-1 bg-gray-200 hover:bg-gray-300"
                      >
                        <FaPlus />
                      </button>
                    </div> */}

                    <p className="text-gray-600 font-medium ml-auto">
                      Subtotal: ${(item.price * (item.quantity ?? 1)).toFixed(2)}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => removecart(item.id)}
                  className="absolute top-3 right-3 text-red-600 hover:text-red-800"
                  title="Remove"
                >
                  <FaTimes size={20} />
                </button>
              </div>
            ))}
          </div>

          {/* ORDER SUMMARY */}
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-20 h-fit">
            <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>${total}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Shipping</span>
              <span className="text-green-600">Free</span>
            </div>
            <div className="border-t my-2"></div>
            <div className="flex justify-between text-lg font-bold">
              <span>Total</span>
              <span>${total}</span>
            </div>
            <button
              onClick={() => {
                setIsModalOpen(true);
                setSuccess(false);
                setError("");
              }}
              className="w-full mt-5 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}

      {/* Checkout Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative animate-fadeIn">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
              title="Close"
            >
              <FaTimes size={20} />
            </button>

            {success ? (
              <div className="flex flex-col items-center text-green-600 py-8">
                <FaCheckCircle className="text-6xl mb-3" />
                <p className="text-lg font-semibold">Payment Successful!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="peer w-full border-b-2 border-gray-300 focus:border-blue-600 outline-none py-2 bg-transparent"
                  />
                  <label
                    className={`absolute left-0 top-2 text-gray-400 text-sm transition-all 
                      ${formData.name && "text-xs -top-4 text-blue-600"}`}
                  >
                    Full Name
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="text"
                    name="number"
                    required
                    value={formData.number}
                    onChange={handleChange}
                    className="peer w-full border-b-2 border-gray-300 focus:border-blue-600 outline-none py-2 bg-transparent"
                  />
                  <label
                    className={`absolute left-0 top-2 text-gray-400 text-sm transition-all 
                      ${formData.number && "text-xs -top-4 text-blue-600"}`}
                  >
                    Card/Bank Number
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="number"
                    name="amount"
                    value={formData.amount}
                    readOnly
                    className="w-full border-b-2 border-gray-300 outline-none py-2 bg-transparent"
                  />
                  <label className="absolute left-0 top-2 text-gray-400 text-sm">
                    Amount
                  </label>
                </div>

                {error && <p className="text-red-500 text-sm">{error}</p>}

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-lg font-semibold transition"
                >
                  Pay Now
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cartstore;
