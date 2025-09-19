import React, { useState, useEffect } from 'react';
import {RiShoppingCartLine, RiUser2Line, RiMenuLine, RiCloseLine, RiSearchLine} from "@remixicon/react";
import {useNavigate} from "react-router-dom";

const NavBarItems = () => {
    const navItems = [{label: 'Men', path: '/products/men'}, {label: 'Women', path: '/products/women'}, {
        label: 'Kids',
        path: '/products/kids'
    }, {label: 'Collection', path: '/products/collection'}, {label: 'Contacts', path: '/contacts'},];
    const navigate = useNavigate()
    return (<>
        {navItems.map((item, index) => (<span
            key={index}
            onClick={() => navigate(item.path, {state:item.label})}
            className="relative py-2 px-4 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium group"
        >
                    {item.label}
            <span
                className="absolute bottom-0 left-4 right-4 h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                </span>))}
    </>);
};
const SearchRes = ({ open }) => {
    if (!open) return null;
    return (
        <div className="absolute top-16 left-1/2 -translate-x-1/2 z-50">
            <div className="bg-white border border-gray-200 shadow-lg rounded-md px-4 py-2 text-sm text-gray-700 whitespace-nowrap">
                Feature not available
            </div>
        </div>
    );
};

const Navbar = ({ cartCount, isLoggedIn, setLoggedIn, userData, onLogout }) => {
    const [showCart, setShowCart] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [user, setUser] = useState(userData || null);
    const navigate = useNavigate();

    useEffect(() => {
        // Load user data from localStorage if not passed as prop
        if (!userData && isLoggedIn) {
            const savedUser = localStorage.getItem('userData');
            if (savedUser) {
                setUser(JSON.parse(savedUser));
            }
        } else if (userData) {
            setUser(userData);
        }
    }, [userData, isLoggedIn]);

    const handleAuth = () => {
        if (isLoggedIn) {
            navigate('/profile');
        } else {
            navigate('/login');
        }
    };

    const handleLogout = () => {
        if (typeof onLogout === 'function') {
            onLogout();
        } else {
            // fallback local cleanup
            setLoggedIn(false);
            setUser(null);
            localStorage.removeItem('userData');
        }
        navigate('/');
    };

    return (<div className="flex flex-col sticky z-30 top-0 left-0 right-0 w-full">


        <nav className="navbar w-full h-16 bg-white shadow-md flex items-center justify-between px-6 relative z-40">
            <div className="left flex items-center gap-4">
                {/* Logo */}
                <div className="logo flex items-center gap-3" onClick={() => navigate('/')}>
                    <div className="w-10 h-10 rounded-full overflow-hidden ">
                        <img
                            src='/logo.svg'
                            alt="ShopEase"
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>

                {/* Hamburger menu */}
                <button
                    className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {!isOpen ? (<RiMenuLine className="w-5 h-5 text-gray-700"/>) : (
                        <RiCloseLine className="w-5 h-5 text-gray-700"/>)}
                </button>
            </div>

            {/* Desktop Navigation */}
            <div className="middle hidden md:flex items-center gap-8">
                <NavBarItems/>
            </div>

            {/* Search bar - hidden on mobile */}
            <div className="hidden lg:flex items-center bg-gray-100 rounded-full px-4 py-2 w-80">
                <RiSearchLine className="w-5 h-5 text-gray-400 mr-3"/>
                <input
                    value={searchQuery}
                    onChange={(e)=>setSearchQuery(e.target.value)}
                    onKeyDown={(e)=>{
                        if(e.key==='Enter'){
                            const q = searchQuery.trim();
                            if(q){
                                navigate(`/search?q=${encodeURIComponent(q)}`);
                                setSearchOpen(false);
                            }
                        }
                    }}
                    onFocus={() => setSearchOpen(!searchOpen)}
                    onBlur={() => setSearchOpen(false)}// delay so clicks work

                    type="text"
                    placeholder="Search products..."
                    className="bg-transparent flex-1 outline-none text-gray-700 placeholder-gray-400"
                />
            </div>
            <div>
                <SearchRes open={searchOpen} />
            </div>

            {/* Right side actions */}
            <div className="right flex items-center gap-4">
                {/* Search icon for mobile/tablet */}


                {/* Shopping Cart */}
                <button onClick={()=>navigate('/cart')} className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200 group">
                    <RiShoppingCartLine className="w-6 h-6 text-gray-700 group-hover:text-blue-600"/>
                    {cartCount > 0 && (<div
                        className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center ">
                        {cartCount}
                    </div>)}
                </button>

                {/* User Account */}
                <div className="relative group">
                    <button
                        onClick={handleAuth}
                        className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                    >
                        <div className="relative">
                            <RiUser2Line className="w-6 h-6 text-gray-700 group-hover:text-blue-600" />
                            {isLoggedIn && cartCount > 0 && (
                                <span className="absolute -top-1 -right-1 w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs">
                                    {cartCount}
                                </span>
                            )}
                        </div>
                        {isLoggedIn && user && (
                            <span className="hidden md:inline text-sm font-medium text-gray-700">
                                Hi, {user.fullName ? user.fullName.split(' ')[0] : 'User'}
                            </span>
                        )}
                    </button>
                    
                    {/* Dropdown menu */}
                    {isLoggedIn && (
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 hidden group-hover:block">
                            <div className="px-4 py-2 border-b border-gray-100">
                                <p className="text-sm font-medium text-gray-900">{user?.fullName || 'User'}</p>
                                <p className="text-xs text-gray-500 truncate">{user?.email || ''}</p>
                            </div>
                            <button
                                onClick={() => navigate('/profile')}
                                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                                My Profile
                            </button>
                            <button
                                onClick={() => navigate('/orders')}
                                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                                My Orders
                            </button>
                            <button
                                onClick={handleLogout}
                                className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 border-t border-gray-100 mt-1"
                            >
                                Sign Out
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </nav>

        {/* Mobile menu overlay */}
        {isOpen && (<div
            className="fixed inset-0 bg-[#404142] opacity-60  z-40 md:hidden"
            onClick={() => setIsOpen(false)}
        />)}

        {/* Mobile menu */}
        <div className="relative md:hidden">
            <aside
                className={`fixed top-0 left-0 w-80 h-full bg-white shadow-xl z-40 transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
            >
                {/* Mobile menu header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                    <div className="flex items-center gap-3" onClick={() => navigate('/')}>
                        <div className="w-8 h-8 rounded-full overflow-hidden">
                            <img
                                src={'/logo.svg'}
                                alt="ShopEase"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="p-2 hover:bg-gray-100 rounded-lg"
                    >
                        <RiCloseLine className="w-5 h-5 text-gray-700"/>
                    </button>
                </div>

                {/* Mobile search */}
                <div className="p-6 border-b border-gray-200">
                    <div className="flex items-center bg-gray-100 rounded-full px-4 py-3">
                        <RiSearchLine className="w-5 h-5 text-gray-400 mr-3"/>
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e)=>setSearchQuery(e.target.value)}
                            onKeyDown={(e)=>{
                                if(e.key==='Enter'){
                                    const q = searchQuery.trim();
                                    if(q){
                                        navigate(`/search?q=${encodeURIComponent(q)}`);
                                        setIsOpen(false);
                                    }
                                }
                            }}
                            placeholder="Search products..."
                            className="bg-transparent flex-1 outline-none text-gray-700 placeholder-gray-400"
                        />
                    </div>
                </div>

                {/* Mobile navigation items */}
                <div className="flex flex-col p-6 gap-2">
                    <NavBarItems/>

                    {/* Additional mobile menu items */}
                    <div className="border-t border-gray-200 pt-4 mt-4">
                        <a href="/commerceApp/public"
                           className="flex items-center gap-3 py-3 px-4 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                            <RiUser2Line className="w-5 h-5 text-gray-600"/>
                            <span className="text-gray-700 font-medium">My Account</span>
                        </a>

                    </div>
                </div>
            </aside>
        </div>
    </div>);
};

export default Navbar;