import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import BestCard from "../Card/BestCard.jsx";
import ProductCard from "../Card/ProductCard.jsx";

const ProductSection = ({ data }) => {
    const { state } = useLocation(); // e.g. "Men" or "Women"
    const [filterData, setFilterData] = useState([]);

    useEffect(() => {
        if (state) {
            const filtered = data.filter((item) => item.category.toLowerCase() === state.toLowerCase());
            setFilterData(filtered);
        } else {
            setFilterData(data); // fallback: show all if no state passed

        }
    }, [data, state]);
    console.log(filterData)

    return (
        <div>
            {filterData.length > 0 ? (
                <div className={'flex  w-full h-screen'}>
                    <aside className={'w-1/3 bg-amber-200 flex flex-col items-center justify-center lg:w-1/4'}>
                            all filters here
                    </aside>
                    <div>
                        <h1>Best Collection for {state}</h1>
                        <div className="collection flex py-2  lg:w-full bg-red-400 justify-center">
                            {filterData.map((item) => (
                                <ProductCard key={item.id} item={item} />


                            ))}
                        </div>
                    </div>
                </div>
            ) : (
                <p>No products found for "{state}"</p>
            )}
        </div>
    );

};

export default ProductSection;
