import React, { useState } from 'react'

import Home from "./pages/Home.jsx";
import {BrowserRouter, Router, Route, Routes, useNavigate} from "react-router-dom";
import Hero from "./components/Home/Hero.jsx";
import Navbar from "./Common/Navbar.jsx";
import ProductSection from "./pages/ProductSection.jsx";
import Footer from "./Common/Footer.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
const App = () => {
    const products = [
        {
            id: 1,
            label: "Best Seller",
            name: "Nike Air Force 1 Mid '07",
            price: 98.3,
            category: "Men's Shoes",
            colors: 6,
            image: "/shoes/shoe-1.jpg",
            for: "Men",
        },
        {
            id: 2,
            label: "Extra 20% off",
            name: "Nike Court Vision Low Next Nature",
            price: 98.3,
            category: "Men's Shoes",
            colors: 4,
            image: "/shoes/shoe-2.webp",
            for: "Men",
        },
        {
            id: 3,
            label: "Sustainable Materials",
            name: "Nike Air Force 1 Shadow",
            price: 98.3,
            category: "Women's Shoes",
            colors: 1,
            image: "/shoes/shoe-3.webp",
            for: "Women",
        },
        {
            id: 4,
            label: "Best Seller",
            name: "Nike Dunk Low Retro",
            price: 98.3,
            category: "Men's Shoes",
            colors: 8,
            image: "/shoes/shoe-4.webp",
            for: "Men",
        },
        {
            id: 5,
            label: "Extra 20% off",
            name: "Nike Air Max SYSTM",
            price: 98.3,
            category: "Men's Shoes",
            colors: 4,
            image: "/shoes/shoe-5.avif",
            for: "Men",
        },
        {
            id: 6,
            label: "Best Seller",
            name: "Nike Air Max 270 React",
            price: 98.3,
            category: "Women's Shoes",
            colors: 1,
            image: "/shoes/shoe-7.avif",
            for: "Women",
        },
        {
            id: 7,
            label: "Extra 20% off",
            name: "Nike Dunk Low Retro SE",
            price: 98.3,
            category: "Men's Shoes",
            colors: 6,
            image: "/shoes/shoe-8.avif",
            for: "Men",
        },
        {
            id: 8,
            label: "Best Seller",
            name: "Nike Air Max 90 SE",
            price: 98.3,
            category: "Kids' Shoes",
            colors: 1,
            image: "/shoes/shoe-9.avif",
            for: "Kids",
        },
        {
            id: 9,
            label: "Extra 10% off",
            name: "Nike Legend Essential 3",
            price: 98.3,
            category: "Women's Training Shoes",
            colors: 4,
            image: "/shoes/shoe-10.avif",
            for: "Women",
        },
        {
            id: 10,
            label: "Best Seller",
            name: "Nike SB Zoom Janoski OG+",
            price: 98.3,
            category: "Men's Shoes",
            colors: 4,
            image: "/shoes/shoe-11.avif",
            for: "Men",
        },
        {
            id: 11,
            label: "Sustainable Materials",
            name: "Jordan Series ES",
            price: 98.3,
            category: "Men's Shoes",
            colors: 1,
            image: "/shoes/shoe-12.avif",
            for: "Men",
        },
        {
            id: 12,
            label: "Extra 20% off",
            name: "Nike Blazer Low '77 Jumbo",
            price: 98.3,
            category: "Kids' Shoes",
            colors: 1,
            image: "/shoes/shoe-13.avif",
            for: "Kids",
        },
        {
            id: 13,
            label: "Extra 20% off",
            name: "Nike Air Max 95 Essential",
            price: 98.3,
            category: "Women's Shoes",
            colors: 1,
            image: "/shoes/shoe-14.avif",
            for: "Women",
        },
        {
            id: 14,
            label: "Extra 20% off",
            name: "Nike React Infinity Run Flyknit",
            price: 98.3,
            category: "Women's Shoes",
            colors: 1,
            image: "/shoes/shoe-15.avif",
            for: "Women",
        },
        {
            id: 15,
            label: "Extra 20% off",
            name: "Nike Pegasus Trail 4",
            price: 98.3,
            category: "Kids' Shoes",
            colors: 1,
            image: "/shoes/shoe-6.avif",
            for: "Kids",
        },
    ];
    const [cartCount, setCartCount] = useState(2);
    const [cartItems, setCartItems] = useState(()=>{
        const saved=localStorage.getItem("cartItems");
        return saved?JSON.parse(saved):[];
    });
    const [favrouite, setFarouite] = useState(() => {
        const saved = localStorage.getItem("favorites");
        return saved ? JSON.parse(saved) : [];
    });
    console.log(cartItems)

    return (
      <BrowserRouter>

          <Navbar cartCount={cartCount} />
        <Routes>
            <Route  path="/"  element={<Home data={products} />} />
            <Route  path="/products/:name" element={<ProductSection data={products} />} />
            <Route path="/product/:id" element={<ProductDetail fav={favrouite} cart={cartItems} setCart={setCartItems} setFav={setFarouite} data={products}/>} />
        </Routes>
          <Footer />
      </BrowserRouter>
    );
};

export default App;
