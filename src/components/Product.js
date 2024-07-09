import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { MdOutlineStarHalf } from "react-icons/md";
import { MdOutlineStarOutline } from "react-icons/md";

import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { addToCart } from '../redux/slice/cartSlice';
import { handleView } from '../redux/slice/QuickViewSlice';
import { addToFavorite } from "../redux/slice/favoriteSlice";

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

const Product = ({ product }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    return (
        <>
            <div className='group mx-3'>
                <div className='rounded-md overflow-hidden relative'>
                    <img src={product.images[0].image} alt="" className='hover:scale-105 transition-all cursor-pointer w-full' onClick={() => navigate(`/product-details/${product.id}`)} />
                    <div className='absolute top-0 left-0 right-0 flex justify-between'>
                        <div className='bg-[#333] text-white py-1 px-3'>%{product.discount}</div>
                        <div className={`bg-green-700 text-white py-1 px-3 text-[12px] items-center ${product.featured ? "flex" : 'hidden'}`}>Featured</div>
                    </div>
                    <div className={`absolute -bottom-full left-0 right-0 flex justify-center gap-2 group-hover:bottom-3 transition-all duration-500`}>
                        <button className='btn-black text-[11px]' onClick={() => dispatch(handleView(product))}>Quick View</button>
                        <button className='btn-black text-[11px]' onClick={() => dispatch(addToCart({ product: { ...product, color: product.price[0].color }, amount: 1 }))}><FaShoppingCart /></button>
                        <button className='btn-black text-[11px]' onClick={() => dispatch(addToFavorite({ ...product, color: product.price[0].color }))}><FaHeart /></button>
                    </div>
                </div>
                <div className='bg-transparent text-center p-3'>
                    <h3 className='font-semibold'>{product.title}</h3>
                    <div className='flex justify-center my-2 gap-[2px]'>
                        {ratingStars(product.rating)}
                    </div>
                    <span className='line-through mr-4'>${product.price[0].value}</span>
                    <span className='text-green-600 font-semibold'>${(product.price[0].value - (product.price[0].value * product.discount / 100)).toFixed(2)}</span>
                </div>

            </div>
        </>
    )
}

export default Product