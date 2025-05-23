import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import {  FaShoppingCart } from "react-icons/fa";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://api.escuelajs.co/api/v1/products');
        if (!response.ok) throw new Error('Failed to fetch products');

        const data = await response.json();

        // ✅ Filter out broken products
        const validProducts = data.filter(
          (p) =>
            p.title &&
            p.price &&
            Array.isArray(p.images) &&
            p.images.length > 0 &&
            typeof p.images[0] === 'string' &&
            p.images[0].trim() !== ''
        );

        setProducts(validProducts.slice(0, 20)); // ✅ Limit to first 24
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-t-4 border-gray-300 border-t-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return <p className="text-center text-red-600 font-semibold">Error: {error}</p>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center mb-6">New Orders</h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
        {products.map((product) => (
          <div
            key={product.id}
            className="p-4 bg-white rounded shadow flex flex-col justify-between min-h-[400px]"
          >
            <img
              src={product.images?.[0] || 'https://via.placeholder.com/150'}
              alt={product.title}
              className="w-full h-40 object-contain mb-3"
            />
            <h2 className="text-sm font-semibold min-h-[48px]">
              {product.title.length > 24
                ? product.title.slice(0, 20) + '...'
                : product.title}
            </h2>

            <div className="flex justify-center text-yellow-400 my-2">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>

            <div className="flex justify-center gap-2 mb-4">
              <p className="text-sm text-gray-500 line-through">
                ${(product.price * 1.2).toFixed(2)}
              </p>
              <p className="text-lg font-bold">${product.price}</p>
              <button className='"w-full bg-black text-white px-4 py-2 rounded flex items-center justify-center gap-2 hover:scale-105 transition'
                
              >      <FaShoppingCart />Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
