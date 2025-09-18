import React, {useState} from 'react';
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
const SearchRes = ({open}) => {
    return (
        <div className={`w-full ${!open?('h-0 hidden'):('h-screen flex')}  bg-gray-700 transition-all absolute top-16 left-0 right-0 z-10 opacity-20`}>

    </div>)
}

const Navbar = ({cartCount}) => {
    const [showCart, setShowCart] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const [searchOpen, setSearchOpen] = useState(false);

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
                <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200 group">
                    <RiShoppingCartLine className="w-6 h-6 text-gray-700 group-hover:text-blue-600"/>
                    {cartCount > 0 && (<div
                        className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center ">
                        {cartCount}
                    </div>)}
                </button>

                {/* User Account */}
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200 group">
                    <RiUser2Line className="w-6 h-6 text-gray-700 group-hover:text-blue-600"/>
                </button>
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
                        <a href="/commerceApp/public"
                           className="flex items-center gap-3 py-3 px-4 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                            <RiShoppingCartLine className="w-5 h-5 text-gray-600"/>
                            <span className="text-gray-700 font-medium">Shopping Cart ({cartCount})</span>
                        </a>
                    </div>
                </div>
            </aside>
        </div>
    </div>);
};

export default Navbar;