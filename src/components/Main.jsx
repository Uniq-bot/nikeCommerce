import React, {useEffect, useState} from 'react'
import Best from "../Section/MainSection/Best.jsx";
import Trending from "../Section/MainSection/Trending.jsx";

const Main = ({data}) => {


    return (
        <section>
            <div>
                <Best bestData={data} />
                <Trending  />

            </div>

        </section>
    )
}
export default Main
