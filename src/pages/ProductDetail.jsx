import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import { RiHeart2Fill, RiHeart2Line, RiStarFill } from "@remixicon/react";
import ProductCard from "../Card/ProductCard.jsx";

const ProductDetail = ({ data, fav, setFav, cart, setCart }) => {
    const { state } = useLocation(); // product object passed via navigate

    const [selectedSize, setSelectedSize] = useState('');
    const sizes = ['4', '5.5', '6', '6.5', '7', '7.5', '8', '8.5', '9', '9.5'];

    // Guard if state missing
    if (!state) return <div className="p-8">No product selected.</div>;

    // Derived booleans (always accurate)
    const isAdded = cart?.some((item) => item.id === state.id) ?? false;
    const isFavorite = fav?.some((item) => item.id === state.id) ?? false;

    // Initialize cart & fav from localStorage once (safe if parent hasn't)
    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cartItems") || "[]");
        const storedFav = JSON.parse(localStorage.getItem("favorites") || "[]");
        // Only set if parent state is empty to avoid overwriting intentionally passed data
        if (!cart || cart.length === 0) setCart(storedCart);
        if (!fav || fav.length === 0) setFav(storedFav);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // run once on mount

    // Toggle cart: update parent state and localStorage atomically
    const toggleCart = () => {
        if (!selectedSize) {
            alert("Please select a size before adding to cart");
            return;
        }

        setCart((prev = []) => {
            const exists = prev.some((item) => item.id === state.id);
            const updated = exists ? prev.filter((item) => item.id !== state.id) : [...prev, { ...state, selectedSize }];
            localStorage.setItem("cartItems", JSON.stringify(updated));
            return updated;
        });
    };

    // Toggle favorite: update parent state and localStorage atomically
    const toggleFav = () => {
        setFav((prev = []) => {
            const exists = prev.some((item) => item.id === state.id);
            const updated = exists ? prev.filter((item) => item.id !== state.id) : [...prev, state];
            localStorage.setItem("favorites", JSON.stringify(updated));
            return updated;
        });
    };

    return (
        <>
            <div className="w-full font-[han] min-h-screen bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 py-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-8">
                        {/* Left Side - Product Images */}
                        <div className="space-y-4">
                            <div className="bg-white rounded-lg shadow-sm">
                                <div className="relative aspect-square">
                                    <div className="absolute top-4 left-4 bg-black text-white p-2  rounded text-sm flex items-center gap-1">
                                        <RiStarFill className="w-3 h-3" />

                                    </div>
                                    <img
                                        src={state.image}
                                        alt={state.name}
                                        className="w-full h-full object-cover"
                                        fetchpriority="high"
                                        decoding="async"
                                        width="1000"
                                        height="1000"
                                    />
                                </div>
                            </div>

                            {/* Thumbnail Images - Optional */}
                            <div className="flex gap-2 overflow-x-auto pb-2">
                                {[1, 2, 3, 4].map((index) => (
                                    <div
                                        key={index}
                                        className="flex-shrink-0 w-16 h-16 bg-white rounded border hover:border-gray-400 cursor-pointer overflow-hidden"
                                    >
                                        <img
                                            src={state.image}
                                            alt={`Product view ${index}`}
                                            className="w-full h-full object-cover"
                                            loading="lazy"
                                            decoding="async"
                                            width="64"
                                            height="64"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Side - Product Details */}
                        <div className="space-y-6">
                            <div>
                                <h1 className="text-2xl font-bold text-gray-900 mb-1">{state.name}</h1>
                                <p className="text-gray-600 mb-2">{state.category}</p>
                                <p className="text-2xl font-bold text-gray-900 mb-1">${state.price}</p>
                                {state.label && <p className="text-green-600 font-medium">{state.label}</p>}
                            </div>

                            {/* Size Selection */}
                            <div>
                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="font-medium text-gray-900">Select Size</h3>
                                    <button className="text-gray-500 text-sm underline hover:text-gray-700">
                                        Size Guide
                                    </button>
                                </div>
                                <div className="grid grid-cols-5 gap-2">
                                    {sizes.map((size) => (
                                        <button
                                            key={size}
                                            onClick={() => setSelectedSize(size)}
                                            className={`aspect-square border rounded-lg flex items-center justify-center text-sm font-medium transition-colors ${
                                                selectedSize === size
                                                    ? 'border-black bg-black text-white'
                                                    : 'border-gray-300 hover:border-gray-400'
                                            }`}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="space-y-3">
                                <button
                                    onClick={toggleCart}
                                    disabled={isAdded}
                                    className={`w-full py-4 rounded-full font-medium transition-colors ${
                                        isAdded
                                            ? 'bg-gray-400 text-gray-700 cursor-not-allowed'
                                            : 'bg-black text-white hover:bg-gray-800'
                                    }`}
                                >
                                    {isAdded ? 'Added to Bag' : 'Add to Bag'}
                                </button>

                                <button
                                    onClick={toggleFav}
                                    className="w-full border border-gray-300 py-4 rounded-full font-medium hover:border-gray-400 transition-colors flex items-center justify-center gap-2"
                                >
                                    {isFavorite ? (
                                        <>
                                            <RiHeart2Fill className="w-5 h-5 text-red-500" />
                                            Favorited
                                        </>
                                    ) : (
                                        <>
                                            <RiHeart2Line className="w-5 h-5" />
                                            Favorite
                                        </>
                                    )}
                                </button>
                            </div>

                            {/* Product Details Section */}
                            <div>
                                <h3 className="font-medium text-gray-900 mb-3">Product Details</h3>
                                <div className="text-gray-700 text-sm space-y-2">
                                    <p>
                                        The Air Max 90 stays true to its running roots with the iconic Waffle sole,
                                        stitched overlays and classic TPU details. Classic colours celebrate your fresh
                                        look while Max Air cushioning adds comfort to your journey.
                                    </p>
                                    <div className="space-y-1">
                                        <p>• Padded collar</p>
                                        <p>• Foam midsole</p>
                                        <p>• Shown: Coconut Milk/Team Red/Platinum Tint/Pure Platinum</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* You may also like */}
            {data && data.length > 1 && (
                <div className="bg-white py-12">
                    <div className="max-w-6xl mx-auto px-4">
                        <h2 className="font-bold text-xl mb-8">You may also like</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {data
                                .filter((item) => item.id !== state.id)
                                .slice(5, 9)
                                .map((item) => (
                                    <ProductCard key={item.id} item={item} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ProductDetail;