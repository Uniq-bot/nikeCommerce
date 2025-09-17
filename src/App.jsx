import React, { useState } from 'react'

import Home from "./pages/Home.jsx";
import {BrowserRouter, Router, Route, Routes} from "react-router-dom";
import Hero from "./components/Home/Hero.jsx";
import Navbar from "./Common/Navbar.jsx";
import ProductSection from "./pages/ProductSection.jsx";
import Footer from "./Common/Footer.jsx";
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
        },
        {
            id: 2,
            label: "Extra 20% off",
            name: "Nike Court Vision Low Next Nature",
            price: 98.3,
            category: "Men's Shoes",
            colors: 4,
            image: "/shoes/shoe-2.webp",
        },
        {
            id: 3,
            label: "Sustainable Materials",
            name: "Nike Air Force 1 Shadow",
            price: 98.3,
            category: "Women's Shoes",
            colors: 1,
            image: "/shoes/shoe-3.webp",
        },
        {
            id: 4,
            label: "Best Seller",
            name: "Nike Dunk Low Retro",
            price: 98.3,
            category: "Men's Shoes",
            colors: 8,
            image: "/shoes/shoe-4.webp",
        },
        {
            id: 5,
            label: "Extra 20% off",
            name: "Nike Air Max SYSTM",
            price: 98.3,
            category: "Men's Shoes",
            colors: 4,
            image: "/shoes/shoe-5.avif",
        },
        {
            id: 6,
            label: "Best Seller",
            name: "Nike Air Max 270 React",
            price: 98.3,
            category: "Women's Shoes",
            colors: 1,
            image: "/shoes/shoe-7.avif",
        },
        {
            id: 7,
            label: "Extra 20% off",
            name: "Nike Dunk Low Retro SE",
            price: 98.3,
            category: "Men's Shoes",
            colors: 6,
            image: "/shoes/shoe-8.avif",
        },
        {
            id: 8,
            label: "Best Seller",
            name: "Nike Air Max 90 SE",
            price: 98.3,
            category: "Men's Shoes",
            colors: 1,
            image: "/shoes/shoe-9.avif",
        },
        {
            id: 9,
            label: "Extra 10% off",
            name: "Nike Legend Essential 3",
            price: 98.3,
            category: "Men's Training Shoes",
            colors: 4,
            image: "/shoes/shoe-10.avif",
        },
        {
            id: 10,
            label: "Best Seller",
            name: "Nike SB Zoom Janoski OG+",
            price: 98.3,
            category: "Men's Shoes",
            colors: 4,
            image: "/shoes/shoe-11.avif",
        },
        {
            id: 11,
            label: "Sustainable Materials",
            name: "Jordan Series ES",
            price: 98.3,
            category: "Men's Shoes",
            colors: 1,
            image: "/shoes/shoe-12.avif",
        },
        {
            id: 12,
            label: "Extra 20% off",
            name: "Nike Blazer Low '77 Jumbo",
            price: 98.3,
            category: "Women's Shoes",
            colors: 1,
            image: "/shoes/shoe-13.avif",
        },
        {
            id: 13,
            label: "Extra 20% off",
            name: "Nike Air Max 95 Essential",
            price: 98.3,
            category: "Women's Shoes",
            colors: 1,
            image: "/shoes/shoe-14.avif",
        },
        {
            id: 14,
            label: "Extra 20% off",
            name: "Nike React Infinity Run Flyknit",
            price: 98.3,
            category: "Women's Shoes",
            colors: 1,
            image: "/shoes/shoe-15.avif",
        },
        {
            id: 15,
            label: "Extra 20% off",
            name: "Nike Pegasus Trail 4",
            price: 98.3,
            category: "Women's Shoes",
            colors: 1,
            image: "/shoes/shoe-6.avif",
        },
    ];

    return (
      <BrowserRouter>

          <Navbar />
        <Routes>
            <Route  path="/"  element={<Home data={products} />} />
            <Route  path="/products/:name" element={<ProductSection data={products} />} />
        </Routes>
          <Footer />
      </BrowserRouter>
    );
};

export default App;
