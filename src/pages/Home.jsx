import React from 'react'
import Navbar from "../Common/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import Main from "../components/Main.jsx";
import SubHero from "../components/SubHero.jsx";
import Footer from "../Common/Footer.jsx";

const Home = ({data}) => {
    return (
        <div className="flex flex-col ">
            <Hero />
            <Main data={data} />
            <SubHero />
            <Footer />








        </div>
    )
}
export default Home
