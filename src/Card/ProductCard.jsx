import React from 'react'

const ProductCard = ({index, item}) => {
    return (
        <div key={index} className={'flex flex-col items-center h-70 px-2 lg:h-70    lg:w-full w-full'}>
            <div className={'w-full h-5/2 relative overflow-hidden '}>
                <img src={item.image} className={'w-full h-full  absolute hover:scale-110  transition-all   object-cover'} alt="" />
                <div className={`absolute ${index>0?('bg-sky-200 text-green-800'):('bg-white text-red-700')} lg:px-3 lg:text-[0.8em] text-[0.7em] px-3 top-2 left-2  rounded-full lg:top-2 lg:left-2 lg:py-1 `}>
                    {item.label}
                </div>
            </div>
            <div className={'w-full h-full flex  flex-col justify-between'}>
                <div className={'flex h-1/2 justify-between font-[500] font-[han]  mt-2'}>
                    <h1 className={'text-[10px] lg:text-[12px]'}>{item.name}</h1>
                    <h1 className={'text-[10px] lg:text-[12px]'}>$98.30</h1>
                </div>
                <div className={'flex h-1/2 flex-col '}>
                    <p className={'text-[10px] lg:text-[12px] text-gray-500'}>{item.category}</p>
                    <p className={'text-[10px] lg:text-[12px] text-gray-500'}>{item.colors} Colors</p>
                </div>
            </div>
        </div>
    )
}
export default ProductCard
