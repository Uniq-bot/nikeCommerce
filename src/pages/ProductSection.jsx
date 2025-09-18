import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import ProductCard from "../Card/ProductCard.jsx";
import FilterSide from "../components/ProductDisplay/FilterSide.jsx";
import {RiFilterFill} from "@remixicon/react";
import {RiCloseLine} from "@remixicon/react";

const ProductSection = ({ data }) => {
    const { state } = useLocation(); // e.g. "Men" or "Women"
    const [filterData, setFilterData] = useState([]);
    const [filtersIsOpen, setFiltersIsOpen] = useState(false);
    // console.log(data)


    useEffect(() => {
        if (state) {
            if (state.toLowerCase() === "collection") {
                // show everything if it's "Collection"
                setFilterData(data);
            } else {
                // strict match for Men, Women, Kid
                const filtered = data.filter(
                    (item) => item.for.toLowerCase() === state.toLowerCase()
                );
                setFilterData(filtered);
            }
        } else {
            setFilterData(data); // fallback: show all
        }
    }, [data, state]);
    return (
        <div>
            {filterData.length > 0 ? (
                <div className="flex bg-gray-200 lg:flex-row flex-col relative w-full min-h-screen ">
                    {/* Toggle button (mobile only) */}
                    <button
                        className=" fixed z-50 bottom-4 right-4 p-3 bg-gray-800 text-white rounded-full shadow-lg"
                        onClick={() => setFiltersIsOpen(!filtersIsOpen)}
                    >
                        {filtersIsOpen ? <RiCloseLine /> : <RiFilterFill />}
                    </button>

                    {/* Sidebar */}
                    <FilterSide isOpen={filtersIsOpen} />

                    {/* Product Section */}
                    <div className="flex-1 p-4">
                        <h1 className="text-xl font-bold mb-4">
                            {state==='Collection'?'Best Collection':`Best Collection for ${state}`}
                        </h1>
                        <div className="collection grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
                            {filterData.map((item) => (
                                <ProductCard key={item.id} item={item} />
                            ))}
                        </div>
                    </div>
                </div>
            ) : (
                <p className={'w-full h-screen'}>No products found for "{state}"</p>
            )}
        </div>
    );
};

export default ProductSection;
