import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Home from './views/Home'
import Footer from './components/Footer'
import Shop from './views/Shop'
import ProductDetails from './views/ProductDetails'
import ModelCart from './components/cart/ModelCart'

import { MdOutlineStarPurple500 } from "react-icons/md";
import { MdOutlineStarHalf } from "react-icons/md";
import { MdOutlineStarOutline } from "react-icons/md";
import QuickView from './components/QuickView'
import { useEffect } from 'react'
import Cart from './views/Cart'
import Checkout from './components/Checkout'


const ratingStars = (rating) => {
  const totalStars = 5;
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 >= 0.5;
  const stars = [];

  for (let i = 1; i <= totalStars; i++) {
    if (i <= fullStars) {
      stars.push(<MdOutlineStarPurple500 key={i} color='#ff8a00' size={"20px"} />)
    } else if (hasHalfStar && i === fullStars + 1) {
      stars.push(<MdOutlineStarHalf key={i} color='#ff8a00' size={"20px"} />)
    } else {
      stars.push(<MdOutlineStarOutline key={i} color='#ff8a00' size={"20px"} />)
    }
  }

  return stars;
}

function App() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div>
      <Header />
      <ModelCart />
      <QuickView ratingStars={ratingStars} />
      <Checkout />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/product-details/:id' element={<ProductDetails />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
