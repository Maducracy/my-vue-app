import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useStore } from "./Zustand";

const ShopDetail = () => {
  const { id } = useParams();
  const { data, fetchData } = useStore();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (!data || data.length === 0) {
      fetchData();
    }
  }, [data, fetchData]);

  useEffect(() => {
    const foundProduct = data.find((item) => item.id === parseInt(id));
    setProduct(foundProduct || null);
  }, [data, id]);

  // ✅ If store is empty or product is not found, show the message
  if (data.length === 0 || !product) {
    return (
      <div className="text-center mt-10 text-red-600 font-semibold text-lg">
        You haven't added a thing.
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <img
        src={product.image}
        alt={product.title}
        className="w-full max-w-md mx-auto object-contain"
      />
      <h1 className="text-xl font-bold mt-4">{product.title}</h1>
      <p className="text-gray-600 my-2">${product.price}</p>
      <p>{product.description}</p>
    </div>
  );
};

export default ShopDetail;
