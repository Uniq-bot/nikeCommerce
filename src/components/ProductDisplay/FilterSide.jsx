import React from 'react'

const FilterSide = ({isOpen}) => {
    return (
        <aside
            className={`absolute z-10 lg:absolute bg-gray-500  
              flex-col items-center justify-center 
              w-2/3 lg:w-1/4 h-full lg:h-full
              transition-transform duration-300 ease-in-out
              transform ${isOpen ? "translate-x-0" : "-translate-x-full"} 
               flex`}
        >


        </aside>
    )
}
export default FilterSide
