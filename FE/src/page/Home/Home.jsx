import React from 'react'
import Header from '../../components/Header/Header'
import Carousels from '../../components/Carousel/Carousel'
import CatSlider from '../../components/CatSlider/CatSlider'
import Footer from '../../components/Footer/Footer'
import ContactBox from '../../components/ContactBox/ContactBox'
export default function Home() {
    return (
        <div>
            <Header></Header>
            <ContactBox></ContactBox>
            <Carousels></Carousels>
            <CatSlider></CatSlider>
            <Footer></Footer>
        </div>
    )
}
