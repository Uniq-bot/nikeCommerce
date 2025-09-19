import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate, Navigate } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Navbar from './Common/Navbar.jsx';
import ProductSection from './pages/ProductSection.jsx';
import Footer from './Common/Footer.jsx';
import ProductDetail from './pages/ProductDetail.jsx';
import Cart from './pages/Cart.jsx';
import Login from './pages/Login.jsx';
import Profile from './pages/Profile.jsx';
import SearchResults from './pages/SearchResults.jsx';

// Component to handle conditional rendering of Navbar and Footer
const Layout = ({ children, cartCount, isLoggedIn, setLoggedIn, userData, onLogout }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const isLoginPage = location.pathname === '/login';
    const isProfilePage = location.pathname.startsWith('/profile');

    // Redirect to login if not authenticated and trying to access protected routes
    useEffect(() => {
        const protectedRoutes = ['/profile', '/cart'];
        if (!isLoggedIn && protectedRoutes.some(route => location.pathname.startsWith(route))) {
            navigate('/login');
        }
    }, [isLoggedIn, location.pathname, navigate]);

    return (
        <>
            {!isLoginPage && (
                <Navbar
                    cartCount={cartCount}
                    isLoggedIn={isLoggedIn}
                    setLoggedIn={setLoggedIn}
                    userData={userData}
                    onLogout={onLogout}
                />
            )}
            {children}
            {!isLoginPage && !isProfilePage && <Footer />}
        </>
    );
};

const App = () => {
    // Load user data from localStorage on initial render
    const [userData, setUserData] = useState(() => {
        const savedUser = localStorage.getItem('userData');
        return savedUser ? JSON.parse(savedUser) : null;
    });
    
    const [isLoggedIn, setLoggedIn] = useState(!!localStorage.getItem('userData'));
    const [cartCount, setCartCount] = useState(0);
    const [cartItems, setCartItems] = useState(()=>{
        const saved = localStorage.getItem("cartItems");
        return saved ? JSON.parse(saved) : [];
    });
    const [favorites, setFavorites] = useState(() => {
        const saved = localStorage.getItem("favorites");
        return saved ? JSON.parse(saved) : [];
    });
    const [orders, setOrders] = useState(() => {
        const saved = localStorage.getItem('orders');
        return saved ? JSON.parse(saved) : [];
    });

    // Update localStorage when userData changes
    useEffect(() => {
        if (userData) {
            localStorage.setItem('userData', JSON.stringify(userData));
            setLoggedIn(true);
        } else {
            localStorage.removeItem('userData');
            setLoggedIn(false);
        }
    }, [userData]);

    const handleLogout = () => {
        setUserData(null);
        setLoggedIn(false);
        localStorage.removeItem('userData');
    };

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

    // Update cart count when cart items change
    useEffect(() => {
        setCartCount(cartItems.length);
    }, [cartItems]);

    // Save cart items and favorites to localStorage when they change
    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);

    // Persist orders
    useEffect(() => {
        localStorage.setItem('orders', JSON.stringify(orders));
    }, [orders]);

    return (
        <div className='font-[han]'>
        <Router>
            <Layout
                cartCount={cartCount}
                isLoggedIn={isLoggedIn}
                setLoggedIn={setLoggedIn}
                userData={userData}
                onLogout={handleLogout}
            >
                <Routes>
                    <Route path="/" element={<Home data={products} />} />
                    <Route path="/products/:name" element={<ProductSection data={products} />} />
                    <Route path="/search" element={<SearchResults data={products} />} />
                    <Route 
                        path="/product/:id" 
                        element={
                            <ProductDetail 
                                fav={favorites} 
                                cart={cartItems} 
                                setCart={setCartItems} 
                                setFav={setFavorites} 
                                data={products}
                            />
                        } 
                    />
                    <Route 
                        path='/cart' 
                        element={
                            isLoggedIn ? 
                            <Cart 
                                cartItems={cartItems} 
                                setOrder={setOrders} 
                                setCartItems={setCartItems} 
                            /> : 
                            <Navigate to="/login" />
                        } 
                    />
                    <Route 
                        path='/login' 
                        element={
                            isLoggedIn ? 
                            <Navigate to="/profile" /> : 
                            <Login 
                                setUserData={setUserData} 
                                setLoggedIn={setLoggedIn} 
                            />
                        } 
                    />
                    <Route 
                        path='/profile' 
                        element={
                            isLoggedIn ? 
                            <Profile 
                                userData={userData} 
                                fav={favorites} 
                                order={orders} 
                            /> : 
                            <Navigate to="/login" />
                        } 
                    />
                </Routes>
            </Layout>
        </Router>
        </div>
    );
};

export default App;