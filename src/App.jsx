import React, { useState } from 'react'

import Home from "./pages/Home.jsx";
import {BrowserRouter, Router, Route, Routes} from "react-router-dom";
import Hero from "./components/Hero.jsx";
import Navbar from "./Common/Navbar.jsx";
import ProductSection from "./pages/ProductSection.jsx";
const App = () => {
    const data=[
        {
            id: '1',
            img:'/shoes/shoe-1.jpg',
            name:"Nike Air Force 1 Mid '07",
            price:98.30,
            type:"Men's Shoe",
            colorStock:6,
            recent:'Best Selling',
            category:'men'

        },
        {
            id: '2',
            img:'/shoes/shoe-7.avif',
            name:"Nike Court Vision Low ",
            price:98.30,
            type:"Men's Shoe",
            colorStock:6,
            recent:'Extra 10% Off',
            category:'kids'

        },
        {
            id: '3',
            img:'/shoes/shoe-3.webp',
            name:"Nike Dunk Low Retro",
            price:98.30,
            type:"Men's Shoe",
            colorStock:6,
            recent:'Extra 20% Off',
            category:'women'
        }
    ]
    return (
      <BrowserRouter>

          <Navbar />
        <Routes>
            <Route  path="/"  element={<Home data={data} />} />
            <Route  path="/products/:name" element={<ProductSection data={data} />} />
        </Routes>
      </BrowserRouter>
    );
};

export default App;
