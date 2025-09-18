import React from 'react'
import {useNavigate} from "react-router-dom";

const Hero = () => {
    const navigate=useNavigate();
    return (
        <section className="hero lg:px-15 px-5 font-[han]  md:h-100  h-50  lg:min-h-150 flex items-center bg-[url('./public/hero-bg.png')] bg-cover bg-no-repeat   relative overflow-hidden">
                <div className="h-full w-2/3  flex flex-col justify-center  bg-cover">
                    <p className={'text-[8px] pl-2 md:text-[20px] lg:text-[20px] text-red-400 font-[500]'}>Bold & Sporty</p>
                    <h1 className={'text-[1.5em] md:text-[3em] lg:text-[7em] lg:font-[800] text-[#111] font-bold leading-none [word-spacing:-5px] '}>
                        Style That Moves With You
                    </h1>
                    <h3 className={' leading-none text-gray-500 md:text-[15px] lg:pr-50 lg:text-[19px] tracking-none text-[7px]'}>Not just style. Not just comfort. Footwear that effortlessly moves with your every step.</h3>
                    <button className={' flex mt-2 md:mt-3 lg:mt-5  border-2 w-fit px-3 py-1 md:px-5 md:py-3 lg:px-7 lg:py-4 rounded-full bg-[#111] text-white'}>
                        <p className={'text-[7px] md:text-[15px]'} onClick={()=>navigate(`/products/collection`)}>Find Your Shoe</p>
                    </button>

                </div>
            <div className={'w-1/2 lg:-rotate-10   h-full flex items-center'
            }>
                <img src="/hero-shoe.png" alt="shoe" />
            </div>
        </section>
    )
}

export default Hero