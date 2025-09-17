import React from 'react'

const Trending = () => {

    return (
        <div className={'trending flex flex-col w-full h-100 md:h-120 lg:h-[80vh] mt-5 lg:px-10'}>
            <h1 className={'text-[10px] py-1  font-bold font-[han] lg:text-[1em] pb-5'}>Trending Now</h1>
            <div className="trending-grid h-full lg:px-15 px-2 w-full grid grid-cols-2  gap-4" >
                <div className={'col-span-2 bg-[url("./public/trending-1.png")] relative bg-cover bg-center bg-  h-full w-full bg-red-400'}>
                    <div className={'overlay absolute w-full h-full inset-0 bg-gradient-to-r from-black to-transparent '} />
                    <div className={'textArea relative px-5 text-white flex flex-col top-10 items-start h-full w-full '}>
                        <h1 className={'font-[han] lg:text-[9vh] text-[30px] leading-none uppercase font-[900]'}>React Presto</h1>
                        <p className={'font-[han] text-[8px] lg:text-[15px]'}>With React foam for the most comfortable Presto ever</p>
                        <button className={'flex text-[8px] lg:text-[13px] font-[500] mt-2 text-black   bg-white lg:px-10 lg:py-1 px-2 rounded-full'}>
                            <p>Shop Now</p>
                        </button>

                    </div>
                </div>
                <div className={'bg-red-300 bg-[url("./public/trending-2.png")] bg-cover relative bg-center'}>
                    <div className={'overlay absolute w-full h-full inset-0 bg-gradient-to-t from-black to-transparent '} />
                        <div className={'absolute z-10 text-white bottom-2 left-3 text-[13px] lg:text-[20px] md:text-[16px] font-[han]'}>
                            <p>
                                Summer Must-Haves: Air Max Dia
                            </p>
                        </div>
                </div>
                <div className={'bg-red-500 bg-[url("./public/trending-3.png")] bg-cover relative bg-center'}>
                    <div className={'overlay absolute w-full h-full inset-0 bg-gradient-to-t from-black to-transparent '} />
                    <div className={'absolute z-10 text-white bottom-2 left-3 text-[13px] lg:text-[20px] md:text-[16px] font-[han]'}>
                        <p>
                            Air Jorden 11 Retro Low LE
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Trending
