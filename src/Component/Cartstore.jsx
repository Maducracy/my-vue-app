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
import { useStore,  } from "../Zustand";
import { useProductStore} from  "../Store"
import { FaTimes, FaCheckCircle } from "react-icons/fa";
const Cartstore = () => {
  const { cart, removecart } = useStore();
  

  const [formData, setFormData] = useState({ name: "", number: "", amount: "" });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const total = cart.reduce((acc, item) => {
    let price = typeof item.price === "string"
      ? parseFloat(item.price.replace(/[^0-9.]/g, ""))
      : item.price;
    return acc + (isNaN(price) ? 0 : price);
  }, 0).toFixed(2);

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
      setError("Please fill in all fields.");
      return;
    }

    // Simulate payment processing
    setTimeout(() => {
      setSuccess(true);
      setError("");
    }, 1200);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">🛒 Your Shopping Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500 text-center text-lg">Your cart is empty.</p>
      ) : (
        <>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="relative p-4 rounded-2xl bg-white shadow-md hover:shadow-lg transition"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-44 object-contain rounded mb-3"
                  />
                  <h3 className="text-lg font-semibold truncate mb-1">{item.title}</h3>
                  <p className="text-green-600 font-bold text-lg">${item.price}</p>
                  <button
                    onClick={() => removecart(item.id)}
                    className="absolute top-2 right-2 text-red-600 hover:text-red-800"
                    title="Remove"
                  >
                    <FaTimes size={20} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 flex justify-center">
            <button
              onClick={() => {
                setIsModalOpen(true);
                setSuccess(false);
                setError("");
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-medium transition"
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-300 ease-out bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative">
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
                  <label className="absolute left-0 top-2 text-gray-400 text-sm transition-all peer-focus:text-xs peer-focus:-top-4 peer-focus:text-blue-600 peer-valid:text-xs peer-valid:-top-4">
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
                  <label className="absolute left-0 top-2 text-gray-400 text-sm transition-all peer-focus:text-xs peer-focus:-top-4 peer-focus:text-blue-600 peer-valid:text-xs peer-valid:-top-4">
                    Card/Bank Number
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="number"
                    name="amount"
                    value={formData.amount}
                    readOnly
                    className=" peer w-full border-b-2 border-gray-300 focus:border-blue-600 outline-none py-2 bg-transparent"
                  />
                  <label className="">
                    Price  Amount
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
