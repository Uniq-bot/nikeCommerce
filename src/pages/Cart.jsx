import React from "react";
import { Minus, Plus, X } from "lucide-react";

const Cart = ({ cartItems = [], setCartItems }) => {
    // ✅ Remove item from cart
    const handleRemove = (id) => {
        const updated = cartItems.filter((item) => item.id !== id);
        setCartItems(updated);
        localStorage.setItem("cartItems", JSON.stringify(updated));
    };

    // ✅ Increase quantity
    const handleIncrease = (id) => {
        const updated = cartItems.map((item) =>
            item.id === id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
        );
        setCartItems(updated);
        localStorage.setItem("cartItems", JSON.stringify(updated));
    };

    // ✅ Decrease quantity
    const handleDecrease = (id) => {
        const updated = cartItems.map((item) =>
            item.id === id && (item.quantity || 1) > 1
                ? { ...item, quantity: item.quantity - 1 }
                : item
        );
        setCartItems(updated);
        localStorage.setItem("cartItems", JSON.stringify(updated));
    };

    // ✅ Calculate totals
    const subtotal = cartItems.reduce(
        (acc, item) => acc + item.price * (item.quantity || 1),
        0
    );
    const deliveryHandling = cartItems.length > 0 ? 10 : 0; // flat $10 if cart not empty
    const total = subtotal + deliveryHandling;

    return (
        <div className="max-w-6xl min-h-170  mx-auto p-4 bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Cart Items */}
                <div className="lg:col-span-2">
                    <h1 className="text-2xl font-bold mb-6">Cart</h1>

                    {cartItems.length === 0 ? (
                        <p className="text-gray-600">Your cart is empty.</p>
                    ) : (
                        <div className="space-y-6">
                            {cartItems.map((item) => (
                                <div key={item.id} className="bg-gray-50 rounded-lg p-4">
                                    {/* Delivery Status */}
                                    <div className="text-orange-600 text-sm font-medium mb-3">
                                        Estimated arrival 24 Sep 2025
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        {/* Product Image */}
                                        <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center overflow-hidden">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-full h-full object-cover"
                                                onError={(e) => {
                                                    e.target.src = "/api/placeholder/80/80";
                                                }}
                                            />
                                        </div>

                                        {/* Product Details */}
                                        <div className="flex-1">
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <h3 className="font-semibold text-lg">{item.name}</h3>
                                                    <p className="text-gray-600 text-sm">{item.category}</p>
                                                    <p className="text-sm text-gray-600 mt-1">
                                                        Size {item.size || 10}
                                                    </p>
                                                </div>
                                                <div className="text-right">
                                                    <p className="font-semibold text-lg">
                                                        ${(item.price * (item.quantity || 1)).toFixed(2)}
                                                    </p>
                                                    <button
                                                        onClick={() => handleRemove(item.id)}
                                                        className="text-gray-400 hover:text-red-500 mt-2"
                                                    >
                                                        <X size={16} />
                                                    </button>
                                                </div>
                                            </div>

                                            {/* Quantity Controls */}
                                            <div className="flex items-center space-x-3 mt-4">
                                                <span className="text-sm text-gray-600">Quantity</span>
                                                <div className="flex items-center border rounded">
                                                    <button
                                                        onClick={() => handleDecrease(item.id)}
                                                        className="p-1 hover:bg-gray-100"
                                                    >
                                                        <Minus size={16} />
                                                    </button>
                                                    <span className="px-3 py-1 border-l border-r">
                            {item.quantity || 1}
                          </span>
                                                    <button
                                                        onClick={() => handleIncrease(item.id)}
                                                        className="p-1 hover:bg-gray-100"
                                                    >
                                                        <Plus size={16} />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Order Summary */}
                <div className="lg:col-span-1">
                    <div className="bg-white rounded-lg p-6 shadow-sm border">
                        <h2 className="text-xl font-bold mb-6">Summary</h2>

                        <div className="space-y-4">
                            <div className="flex justify-between">
                                <span>Subtotal</span>
                                <span className="font-semibold">${subtotal.toFixed(2)}</span>
                            </div>

                            <div className="flex justify-between">
                                <span>Estimated Delivery & Handling</span>
                                <span className="font-semibold">
                  ${deliveryHandling.toFixed(2)}
                </span>
                            </div>

                            <div className="border-t pt-4">
                                <div className="flex justify-between text-lg font-bold">
                                    <span>Total</span>
                                    <span>${total.toFixed(2)}</span>
                                </div>
                            </div>
                        </div>

                        <button className="w-full bg-black text-white py-3 rounded-full mt-6 font-medium hover:bg-gray-800 transition-colors">
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
