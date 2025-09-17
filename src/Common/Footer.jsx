import React from 'react'
import {RiUserLocationFill} from "@remixicon/react";

const Footer = () => {
    const footerNavigation = [{
        category: "Featured",
        items: [{name: "Air Force 1", url: "/featured/air-force-1"}, {
            name: "Huarache",
            url: "/featured/huarache"
        }, {name: "Air Max 90", url: "/featured/air-max-90"}, {name: "Air Max 95", url: "/featured/air-max-95"}]
    }, {
        category: "Shoes",
        items: [{name: "All Shoes", url: "/shoes/all"}, {
            name: "Custom Shoes",
            url: "/shoes/custom"
        }, {name: "Jordan Shoes", url: "/shoes/jordan"}, {name: "Running Shoes", url: "/shoes/running"}]
    }, {
        category: "Clothing",
        items: [{name: "All Clothing", url: "/clothing/all"}, {
            name: "Modest Wear",
            url: "/clothing/modest-wear"
        }, {name: "Hoodies & Pullovers", url: "/clothing/hoodies-pullovers"}, {
            name: "Shirts & Tops",
            url: "/clothing/shirts-tops"
        }]
    }, {
        category: "Kids",
        items: [{name: "Infant & Toddler Shoes", url: "/kids/infant-toddler-shoes"}, {
            name: "Kids' Shoes",
            url: "/kids/shoes"
        }, {name: "Kids' Jordan Shoes", url: "/kids/jordan-shoes"}, {
            name: "Kids' Basketball Shoes",
            url: "/kids/basketball-shoes"
        }]
    }];
    return (<footer
        className={'footer bg-[#111] text-white flex flex-col justify-between items-center font-[han] w-full gap-3  pt-10 min-h-70'}>
        <div
            className={'footerMain w-full grid grid-cols-2 md:grid-cols-3 justify-center px-20 lg:grid-cols-6 gap-5 items-center '}>
            <div className={' w-full lg:w-30 md:w-30 '}>
                <img src={'/logoWhite.svg'} className={'w-full h-full items-center object-contain'} alt={'logo'}/>

            </div>
            {/*categories*/}
            {footerNavigation.map((item) => (<div className={'flex flex-col justify-center'} key={item.category}>
                <h1 className={' text-[12px] lg:text-[15px]'}>{item.category}</h1>
                <div className={'flex flex-col '}>
                    {item.items.map((item, index) => (<a href={item.url} key={index}
                                                  className={'text-[10px] lg:text-[12px] font-mono font-[100]'}>{item.name}</a>))}
                </div>
            </div>))}
            <div className={'flex gap-4 justify-center'}>
                <div className={'bg-white p-2 rounded-full '}>
                    <img src={'facebook.svg'}  alt={'instagram'}/>
                </div>
                <div className={'bg-white p-2 rounded-full '}>
                    <img src={'instagram.svg'} alt={'instagram'}/>
                </div>
                <div className={'bg-white p-2 rounded-full '}>
                    <img src={'x.svg'} alt={'instagram'}/>
                </div>
            </div>


        </div>
        <div className={'w-full p-3 flex justify-between  border-t-1 border-white'}>
            <div>
                <p className={'flex w-full items-center text-[10px] h-full'}>
                    <RiUserLocationFill/> <span>Bhaktapur</span>
                </p>
            </div>
            <div className={'flex text-[10px] gap-2 items-center justify-center'}>
                    <span>
                        Guide
                    </span>
                <span>
                        Terms of Sale
                    </span>
                <span>
                        Terms of Use
                    </span>
                <span>
                        Nike Privacy Policy
                    </span>

            </div>

        </div>

    </footer>)
}
export default Footer
