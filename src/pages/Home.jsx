import React from 'react'
import Navbar from "../Common/Navbar.jsx";
import Hero from "../components/Home/Hero.jsx";
import Main from "../components/Home/Main.jsx";
import SubHero from "../components/Home/SubHero.jsx";
import Footer from "../Common/Footer.jsx";

const Home = ({data}) => {
    return (
        <div className="flex flex-col ">
            <Hero />
            <Main data={data} />
            <SubHero />








        </div>
    )
}
export default Home
