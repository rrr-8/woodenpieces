import React, { useEffect, useState } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { productlists } from '../assets/data/data';

import { MdOutlineStarPurple500 } from "react-icons/md";
import { MdOutlineStarHalf } from "react-icons/md";
import { MdOutlineStarOutline } from "react-icons/md";

import { FaFacebookF } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";

import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import ProductsSlide from '../components/ProductsSlide';

import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../redux/slice/cartSlice';
import { addToFavorite } from '../redux/slice/favoriteSlice';

const colorsValue = {
    red: "#fe7fef",
    yellow: "#ffff00",
    green: "#008000",
    blue: "#0000ff",
    white: "#f8f8f8",
    brown: "#a52a2a",
    clear: "#ffffff",
    "dark brown": "#654321",
    light: "#f5f5dc",
    black: "#000000",
    natural: "#8b4513",
    "light brown": "#deb887",
    dark: "#696969",
    gray: "#808080",
    beige: "#f5f5dc",
};

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

const ProductDetails = () => {
    const { id } = useParams()
    const product = productlists.find((product) => product.id == id);

    const [amount, setAmount] = useState(1)
    const [select, setSelect] = useState(product.price[0].color)
    const [changeImg, setChangeImg] = useState(0)

    const location = useLocation()

    const dispatch = useDispatch()

    useEffect(() => {
        setSelect(product.price[0].color)
    }, [location.pathname])

    return (
        <>
            <div className='mt-[100px] mb-10 container mx-auto px-10 flex items-center justify-center gap-20 flex-col lg:flex-row'>
                <div className='relative h-full overflow-hidden w-full lg:w-1/2'>
                    <img src={product.images[changeImg].image} alt="" className='h-full w-full hover:scale-105 transition-all rounded-lg' />
                    <div className='absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-4'>
                        {product.images.map((img, i) => (
                            <img src={img.image} key={i} alt="" onClick={() => setChangeImg(i)} className='w-20 cursor-pointer border-4 border-white rounded-lg' />
                        ))}
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    <div className="text-white bg-indigo-500 rounded-sm py-1 px-3 text-[11px] w-fit">SALE {product.discount}% OFF</div>
                    <h2 className="text-3xl font-semibold my-2">{product.title}</h2>

                    <div className="flex items-center gap-2">
                        <div className='flex'>
                            {ratingStars(product.rating)}
                        </div>
                        <span>{product.rating} Review</span>
                    </div>

                    <p className="text-gray-500 text-sm mt-2">{product.description}</p>

                    <div className='mt-5'>
                        <p className='text-gray-500 text-sm'>Colors</p>
                        <div className='flex gap-2 mt-2'>
                            {product.price.map((p, i) => (
                                <div key={i} className={`rounded-full w-[13px] h-[13px] cursor-pointer ${p.color === select && 'border-2 border-black'}`} style={{ backgroundColor: colorsValue[p.color] }} onClick={() => setSelect(p.color)}></div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-3">
                        <p className='text-gray-500 text-sm'>Price</p>
                        {product.price.filter((p) => p.color === select).map((pr, i) => (
                            <div key={i}>
                                <span className='line-through mr-4'>${pr.value}</span>
                                <span className='text-green-600 font-semibold text-xl'>${(pr.value - (pr.value * product.discount / 100)).toFixed(2)}</span>
                            </div>
                        ))}
                    </div>

                    <div className="flex gap-3 py-4">
                        <div className='amount border-2 border-[#ddd] w-[40px] h-[40px] text-center flex items-center justify-center bg-gray-100 cursor-pointer' onClick={() => setAmount(parseInt(amount) + 1)}>
                            <FaPlus />
                        </div>
                        <input type="number" className="amount border-2 border-[#ddd] w-[50px] h-[40px] text-center" value={amount} onChange={(e) => setAmount(e.target.value)} />
                        <div className='amount border-2 border-[#ddd] w-[40px] h-[40px] text-center flex items-center justify-center bg-gray-100 cursor-pointer' onClick={() => setAmount(amount > 1 ? amount - 1 : amount)}>
                            <FaMinus />
                        </div>
                        <button className="btn-black text-sm" onClick={() => dispatch(addToCart({ product: { ...product, color: select }, amount: parseInt(amount) || 1 }))}>ADD TO CART</button>
                    </div>

                    <div className='flex gap-5 border-b-2 pb-4'>
                        <button className="btn-white flex items-center text-sm" onClick={() => dispatch(addToFavorite({ ...product, color: select }))}><FaRegHeart className='mr-1' /> Add To Wishlist</button>
                        <button className="btn-white text-sm">Compare</button>
                    </div>

                    <p className="mt-3 text-sm"><strong>Category: </strong>Wooden Product</p>
                    <p className='text-sm'><strong>Tag: </strong>Wooden</p>
                    <div className="flex items-center gap-1 text-sm">
                        <strong>Share: </strong>
                        <div className="flex gap-1">
                            <FaFacebookF className="cursor-pointer" />
                            <AiFillInstagram className="cursor-pointer" />
                            <FaXTwitter className="cursor-pointer" />
                        </div>
                    </div>
                </div>
            </div>

            <div className='container mx-auto flex items-center flex-col lg:flex-row justify-center gap-20 px-10 my-10'>
                <div className='w-full lg:w-1/2'>
                    <div>
                        <h1 className='text-3xl mb-2 font-semibold'>Fits Your Child</h1>
                        <p className='text-sm text-gray-500'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque beatae ea minus odio ab veritatis quidem. Accusamus, illo, suscipit similique ducimus officia totam molestias dolores libero inventore beatae magni excepturi.
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos perspiciatis possimus itaque soluta quasi voluptate assumenda odio. Expedita perferendis, sapiente eligendi corrupti repudiandae dignissimos eveniet minus culpa eos, tempore velit?
                        </p>
                    </div>
                    <div className='my-6'>
                        <h1 className='text-3xl mb-2 font-semibold'>Specifications</h1>
                        <div className='text-sm text-gray-500'>
                            <p className='py-1'>
                                Assembled Dimensions (L x W x H): 21.5 x 19 x 27
                            </p>
                            <p className='py-1'>
                                Assembled Product Weight: 25 Ibs
                            </p>
                            <p className='py-1'>
                                Harness Mode - Rear-Facing5-40 lbs
                            </p>
                            <p className='py-1'>
                                Harness Mode Forward-Facing25-65 lbs
                            </p>
                            <p className='py-1'>
                                Booster Mode Hamess + Booster40-100 lbs
                            </p>
                            <p className='py-1'>
                                Booster Mode - Backlessn/a
                            </p>
                            <p className='py-1'>
                                Rear-Facing Child Max Height Capacity43 in
                            </p>
                            <p className='py-1'>
                                Forward-Facing Child Max Height Capacity54 in
                            </p>
                        </div>
                    </div>
                </div>
                <div className=' w-full lg:w-1/2'>
                    <div className='flex gap-3 flex-col sm:flex-row mb-3'>
                        <div className='bg-gray-100 text-center p-7 rounded-md w-full sm:w-1/2'>
                            <h2 className='text-lg font-semibold mb-2'>All-in-One Car Seat</h2>
                            <p className='text-gray-500'>One car seat that fits your child, vehicle and lifefrom birth through booster</p>
                        </div>
                        <div className='bg-gray-100 text-center p-7 rounded-md w-full sm:w-1/2'>
                            <h2 className='text-lg font-semibold mb-2'>Easiest to Install Correctly</h2>
                            <p className='text-gray-500'>Easiest to Install Correctly</p>
                        </div>
                    </div>
                    <div className='flex gap-3 flex-col sm:flex-row mb-3'>
                        <div className='bg-gray-100 text-center p-7 rounded-md w-full sm:w-1/2'>
                            <h2 className='text-lg font-semibold mb-2'>Space-Saving Design</h2>
                            <p className='text-gray-500'>Slim, space-saving design takes up less space invehicle without compromising comfort</p>
                        </div>
                        <div className='bg-gray-100 text-center p-7 rounded-md w-full sm:w-1/2'>
                            <h2 className='text-lg font-semibold mb-2'>No Added Chemicals</h2>
                            <p className='text-gray-500'>ClearTex products meet federal flammabilitystandards without added chemicals</p>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <ProductsSlide title="Related Products" text="" />
            </div>
        </>
    )
}

export default ProductDetails