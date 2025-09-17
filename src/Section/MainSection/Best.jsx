import React from 'react'
import BestCard from "../../Card/BestCard.jsx";

const Best = ({bestData}) => {



    return (
        <div className={'best w-full font-[han] flex flex-col pb-5  '}>
            <p className={'py-2 lg:pl-10 text-[0.7em] lg:text-[1em] text-[#111] font-bold '}>Best of Air Max</p>
            <div className={'flex h-50  md:h-75 lg:h-100 justify-evenly gap-3 px-2 w-full'}>
                {
                    bestData.map((item,index)=>{
                        return (
                           <BestCard key={index} item={item} />
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Best
