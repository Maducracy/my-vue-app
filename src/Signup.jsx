
import { useState } from 'react';
import { Check, User, Mail, Lock, Store } from 'lucide-react';

export default function SimpleMultiShopSignup() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    selectedShops: []
  });
  const [submitted, setSubmitted] = useState(false);

  // Available shops
  const shops = [
    { id: 1, name: 'Fashion Store', description: 'Latest fashion trends and styles' },
    { id: 2, name: 'Electronics Hub', description: 'Cutting-edge technology and gadgets' },
    { id: 3, name: 'Home Decor', description: 'Beautiful items for your home' },
    { id: 4, name: 'Sports Center', description: 'Equipment and apparel for all sports' },
    { id: 5, name: 'Book Haven', description: 'Books across all genres and topics' }
  ];

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle shop selection
  const handleShopSelection = (shopId) => {
    setFormData(prev => {
      if (prev.selectedShops.includes(shopId)) {
        return { ...prev, selectedShops: prev.selectedShops.filter(id => id !== shopId) };
      } else {
        return { ...prev, selectedShops: [...prev.selectedShops, shopId] };
      }
    });
  };

  // Submit form
  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  // Render confirmation
  const renderConfirmation = () => (
    <div className="text-center py-6">
      <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <Check size={32} className="text-yellow-600" />
      </div>
      <h2 className="text-2xl font-bold mb-2">Sign Up Complete!</h2>
      <p className="text-gray-600 mb-6">Thank you for registering with our shops.</p>
      
      <div className="bg-gray-100 rounded-lg p-4 mb-6">
        <h3 className="font-medium mb-2">You've signed up for:</h3>
        <ul className="space-y-1">
          {formData.selectedShops.map(shopId => {
            const shop = shops.find(s => s.id === shopId);
            return (
              <li key={shopId} className="flex items-center">
                <Check size={14} className="text-yellow-500 mr-2" />
                <span>{shop?.name}</span>
              </li>
            );
          })}
        </ul>
      </div>
      
      <p className="text-sm text-gray-500">
        You'll receive a confirmation email at {formData.email} with further instructions.
      </p>
    </div>
  );

  return (
    <div className="max-w-md mx-auto p-6 bg-white text-gray-800 rounded-lg shadow-lg">
      {/* <h1 className="text-2xl font-bold text-center mb-6">Shop Signup</h1> */}
      
      {!submitted ? (
        <div className="space-y-6">
          {/* Personal Info */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Full Name</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <User size={16} className="text-gray-400" />
                </span>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full pl-10 py-2 border rounded bg-white border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                  placeholder="John Doe"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <Mail size={16} className="text-gray-400" />
                </span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-10 py-2 border rounded  border-gray-700 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                  placeholder="john.doe@example.com"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <Lock size={16} className="text-gray-400" />
                </span>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pl-10 py-2 border rounded  border-gray-700 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                  placeholder="********"
                  required
                />
              </div>
            </div>
          </div>

          {/* Shop Selection */}
          <div>
            <h2 className="text-lg font-semibold mb-3">Select Your Shops</h2>
            <p className="text-gray-600 mb-4 text-sm">Choose the shops you want to sign up for:</p>
            
            <div className="space-y-2">
              {shops.map(shop => (
                <div 
                  key={shop.id}
                  onClick={() => handleShopSelection(shop.id)}
                  className={`p-3 border rounded cursor-pointer transition-colors flex items-center ${
                    formData.selectedShops.includes(shop.id) 
                      ? 'border-yellow-500 bg-yellow-50' 
                      : 'border-gray-300 hover:bg-gray-100'
                  }`}
                >
                  <div className="mr-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                      formData.selectedShops.includes(shop.id) ? 'bg-yellow-500' : 'border border-gray-300'
                    }`}>
                      {formData.selectedShops.includes(shop.id) && (
                        <Check size={12} className="text-black" />
                      )}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center">
                      <Store size={16} className="mr-2 text-gray-400" />
                      <h3 className="font-medium text-sm">{shop.name}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-medium py-2 px-4 rounded"
            disabled={!formData.fullName || !formData.email || !formData.password || formData.selectedShops.length === 0}
          >
            Complete Sign Up
          </button>
        </div>
      ) : (
        renderConfirmation()
      )}
    </div>
  );
}
