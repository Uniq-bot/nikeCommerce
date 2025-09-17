
const BestCard = ({item, index}) => {
    return (
        <div key={index} className={'  flex flex-col items-center lg:w-1/4 w-1/2'}>
            <div className={'w-full h-[90.5vh] lg:h-[300vh]  md:h-[150vh] relative overflow-hidden '}>
                <img src={item.img} className={'w-full h-full  absolute    object-cover'} alt="" />
                <div className={`absolute ${index>0?('bg-sky-200 text-green-800'):('bg-white text-red-700')} lg:px-5 lg:text-[0.9em] text-[0.7em] px-3 top-2 left-2  rounded-full lg:top-3 lg:left-3 lg:py-1 `}>
                    {item.recent}
                </div>
            </div>
            <div className={'w-full h-full flex  flex-col justify-between'}>
                <div className={'flex h-1/2 justify-between font-[500] font-[han]  mt-2'}>
                    <h1 className={'text-[10px] lg:text-[12px]'}>{item.name}</h1>
                    <h1 className={'text-[10px] lg:text-[12px]'}>$98.30</h1>
                </div>
                <div className={'flex h-1/2 flex-col '}>
                    <p className={'text-[10px] lg:text-[12px] text-gray-500'}>Men's Shoes</p>
                    <p className={'text-[10px] lg:text-[12px] text-gray-500'}>6 Colors</p>
                </div>
            </div>
        </div>
    )
}
export default BestCard
