import Hero from '../components/home/Hero'
import Banner from '../components/home/Banner'

import { herolist } from "../assets/data/data"
import Popular from '../components/home/Popular'
import Info from '../components/home/Info'
import Promotional from '../components/home/Promotional'
import ProductsSlide from '../components/ProductsSlide'
import Testimonials from '../components/home/Testimonials'

const Home = () => {
    return (
        <div>
            <Hero herolist={herolist} />
            <Banner />
            <Popular />
            <Info />
            <Promotional />
            <ProductsSlide title="What's trending now" text="DISCOVER THE MOST TRENDING PRODUCTS IN MOONCART." />
            <Testimonials />
        </div>
    )
}

export default Home