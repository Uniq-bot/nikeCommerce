import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, LogOut, User, ShoppingBag, Star, CreditCard, MapPin } from 'lucide-react';

const Profile = ({ userData, fav = [], order = [] }) => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('My Orders');
    const [user, setUser] = useState(userData || {});

    const tabs = [
        { id: 'orders', label: 'My Orders', icon: <ShoppingBag size={18} className="mr-2" /> },
        { id: 'favorites', label: 'Favorites', icon: <Heart size={18} className="mr-2" /> },
        { id: 'details', label: 'My Details', icon: <User size={18} className="mr-2" /> },
        { id: 'payment', label: 'Payment Methods', icon: <CreditCard size={18} className="mr-2" /> },
        { id: 'address', label: 'Address Book', icon: <MapPin size={18} className="mr-2" /> },
    ];

    useEffect(() => {
        // Load user data from localStorage if not passed as prop
        if (!userData || Object.keys(userData).length === 0) {
            const savedUser = localStorage.getItem('userData');
            if (savedUser) {
                setUser(JSON.parse(savedUser));
            } else {
                navigate('/login');
            }
        }
    }, [userData, navigate]);

    const handleLogout = () => {
        localStorage.removeItem('userData');
        navigate('/');
        // Force reload to reset app state
        window.location.reload();
    };

    const renderContent = () => {
        switch (activeTab) {
            case 'My Orders':
                return order.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {order.map((product) => (
                            <OrderItem key={product.id} product={product} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <ShoppingBag className="w-12 h-12 mx-auto text-gray-400 mb-4" />
                        <h3 className="text-lg font-medium text-gray-900 mb-2">No orders yet</h3>
                        <p className="text-gray-500 mb-6">When you place an order, it will appear here.</p>
                        <button
                            onClick={() => navigate('/products/men')}
                            className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors"
                        >
                            Start Shopping
                        </button>
                    </div>
                );

            case 'Favorites':
                return fav.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {fav.map((product) => (
                            <ProductItem key={product.id} product={product} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <Heart className="w-12 h-12 mx-auto text-gray-400 mb-4" />
                        <h3 className="text-lg font-medium text-gray-900 mb-2">No favorites yet</h3>
                        <p className="text-gray-500 mb-6">Save items you love to your favorites.</p>
                        <button
                            onClick={() => navigate('/products/men')}
                            className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors"
                        >
                            Browse Products
                        </button>
                    </div>
                );

            case 'My Details':
                return (
                    <div className="bg-white rounded-lg shadow p-4 sm:p-6">
                        <h3 className="text-lg font-medium text-gray-900 mb-6">Personal Information</h3>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                <div className="mt-1">{user.fullName || 'Not provided'}</div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <div className="mt-1">{user.email || 'Not provided'}</div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Member Since</label>
                                <div className="mt-1">
                                    {user.joinDate ? new Date(user.joinDate).toLocaleDateString() : 'N/A'}
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case 'Payment Methods':
            case 'Address Book':
                return (
                    <div className="bg-white rounded-lg shadow p-6 text-center">
                        <h3 className="text-lg font-medium text-gray-900 mb-2">{activeTab}</h3>
                        <p className="text-gray-500">This feature is coming soon.</p>
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-6 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 md:gap-8">
                {/* Sidebar */}
                <div className="w-full md:w-64 flex-shrink-0">
                    <div className="bg-white rounded-lg shadow p-6">
                        <div className="flex items-center space-x-4 mb-6">
                            <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                                <User size={24} />
                            </div>
                            <div>
                                <h2 className="font-medium text-gray-900">{user.fullName || 'Guest'}</h2>
                                <p className="text-sm text-gray-500">{user.email || 'guest@example.com'}</p>
                            </div>
                        </div>
                        <nav className="space-y-1 mb-6">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.label)}
                                    className={`w-full flex items-center px-3 sm:px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                                        activeTab === tab.label
                                            ? 'bg-gray-100 text-gray-900'
                                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                    }`}
                                >
                                    {tab.icon}
                                    {tab.label}
                                </button>
                            ))}
                        </nav>
                        <button
                            onClick={handleLogout}
                            className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-red-600 bg-red-50 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 mt-4"
                        >
                            <LogOut size={18} className="mr-2" />
                            Sign Out
                        </button>
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex-1">
                    <div className="mb-4 sm:mb-6">
                        <h1 className="text-2xl font-bold text-gray-900">My Account</h1>
                        <p className="text-gray-500">Manage your Nike account and preferences</p>
                    </div>
                    {renderContent()}
                </div>
            </div>
        </div>
    );
};

// Reusable Product Item Component
const ProductItem = ({ product }) => (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow overflow-hidden">
        <div className="relative aspect-square bg-gray-100 flex items-center justify-center">
            <img 
                src={product.image} 
                alt={product.name} 
                className="object-cover w-full h-full" 
                loading="lazy"
                decoding="async"
                width="400"
                height="400"
                onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/300x300?text=Product+Image';
                }}
            />
            {product.label && (
                <span className="absolute top-2 left-2 text-xs font-semibold px-2 py-1 rounded bg-green-100 text-green-600">
                    {product.label}
                </span>
            )}
        </div>
        <div className="p-4">
            <h3 className="font-medium text-gray-900 mb-1">{product.name}</h3>
            <p className="text-gray-600 text-sm mb-1">{product.category}</p>
            <p className="font-semibold text-gray-900">${product.price}</p>
        </div>
    </div>
);

// Reusable Order Item Component
const OrderItem = ({ product }) => (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
        <div className="p-4 border-b border-gray-200">
            <div className="flex justify-between items-start">
                <div>
                    <p className="text-sm font-medium text-gray-900">Order #{(Math.random() * 1000000).toFixed(0)}</p>
                    <p className="text-sm text-gray-500">Delivered on {new Date().toLocaleDateString()}</p>
                </div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Delivered
                </span>
            </div>
        </div>
        <div className="p-4">
            <div className="flex items-center">
                <div className="flex-shrink-0 h-16 w-16 bg-gray-200 rounded-md overflow-hidden">
                    <img 
                        src={product.image} 
                        alt={product.name} 
                        className="h-full w-full object-cover"
                        loading="lazy"
                        decoding="async"
                        width="100"
                        height="100"
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = 'https://via.placeholder.com/100?text=Product';
                        }}
                    />
                </div>
                <div className="ml-4 flex-1">
                    <h4 className="text-sm font-medium text-gray-900">{product.name}</h4>
                    <p className="text-sm text-gray-500">Size: US 10</p>
                    <p className="text-sm text-gray-500">Qty: 1</p>
                </div>
                <div className="ml-4 text-right">
                    <p className="text-sm font-medium text-gray-900">${product.price}</p>
                    <button className="mt-2 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                        Buy Again
                    </button>
                </div>
            </div>
        </div>
    </div>
);

export default Profile;
