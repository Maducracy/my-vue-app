import React from "react";
import { useStore } from "../Zustand";
import { FaTimes } from "react-icons/fa";
import { FlutterWaveButton } from "flutterwave-react-v3";

const Cartstore = () => {
  const { cart, removecart } = useStore();

  // Calculate total price
  const totalAmount = cart.reduce((acc, item) => {
    let price = item.price;

    if (typeof price === "string") {
      price = parseFloat(price.replace(/[^0-9.]/g, ""));
    }

    if (typeof price !== "number" || isNaN(price)) {
      console.warn("Invalid price in cart item:", item);
      price = 0;
    }

    return acc + price;
  }, 0);

  const config = {
    public_key: "FLWPUBK_TEST-00e9287e7984f70a6e59ef068707fcec-X",
    tx_ref: Date.now().toString(),
    amount: totalAmount,
    currency: "USD",
    payment_options: "card, mobilemoney",
    customer: {
      email: "user@example.com",
      name: "John Doe",
    },
    customizations: {
      title: "Your Store",
      description: "Payment for items in cart",
    },
  };

  const fwConfig = {
    ...config,
    text: "Pay Now",
    cursor:"pointer",
    callback: (response) => {
      console.log("Payment successful", response);
      // You can clear the cart here if needed
    },
    onClose: () => {
      console.log("Payment modal closed");
    },
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 flex justify-center">Your Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-500 flex justify-center">Your cart is empty.</p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {cart.map((item) => (
              <div key={item.id} className="p-4 bg-white rounded shadow">
                <img
                  src={item.img || item.image}
                  alt={item.name || item.title}
                  className="w-full h-40 object-contain mb-2"
                />
                <h3 className="text-sm font-semibold mb-2">
                  {item.name || item.title}
                </h3>
                <p className="font-bold mb-2">${item.price}</p>
                <button
                  onClick={() => removecart(item.id)}
                  className="bg-red-600 text-white px-4 py-2 rounded hover:opacity-80 flex items-center justify-center gap-2"
                >
                  <FaTimes />
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Total + Payment Button */}
          <div className="mt-6 flex flex-col items-center">
            <p className="text-lg font-semibold mb-2">
              Total: ${totalAmount.toFixed(2)}
            </p>
            <FlutterWaveButton {...fwConfig} />
          </div>
        </>
      )}
    </div>
  );
};

export default Cartstore;
