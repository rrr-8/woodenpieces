import { IoClose } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/slice/cartSlice";
import { handleView } from "../redux/slice/QuickViewSlice";

const QuickView = ({ ratingStars }) => {
    const product = useSelector((state) => state.quickView.product)
    const openQuickView = useSelector((state) => state.quickView.openQuickView)
    const dispatch = useDispatch();

    const [amount, setAmount] = useState(1)

    return (
        <div>
            {openQuickView && product.title && <div className='fixed w-full h-full top-0 left-0 z-50 flex items-center justify-center'>
                <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50' onClick={() => dispatch(handleView(product))}></div>
                <div className='bg-white rounded-md h-[350px] w-[700px] relative flex mx-4 flex-col sm:flex-row overflow-auto sm:overflow-hidden' style={{ zIndex: 300 }}>
                    <div className='h-1/2 sm:h-full sm:overflow-hidden w-full sm:w-1/2'>
                        <img src={product.images[0].image} alt="" className='h-full w-full sm:hover:scale-105 transition-all object-cover' />
                    </div>
                    <div className="sm:overflow-auto px-6 py-6 w-full sm:w-1/2">
                        <div className="text-white bg-indigo-500 rounded-sm py-1 px-3 text-[11px] w-fit">SALE {product.discount}% OFF</div>
                        <h2 className="text-3xl font-semibold my-2">{product.title}</h2>
                        <div className="flex">
                            {ratingStars(product.rating)}
                        </div>
                        <div className="mt-3">
                            <span className='line-through mr-4'>${product.price[0].value}</span>
                            <span className='text-green-600 font-semibold text-lg'>${(product.price[0].value - (product.price[0].value * product.discount / 100)).toFixed(2)}</span>
                        </div>
                        <p className="text-gray-500 text-[11px] mt-2">{product.description}</p>
                        <div className="flex gap-3 py-4 border-b-2">
                            <input type="number" className="amount border-2 border-[#333] w-[40px] h-[40px] text-center" value={amount} onChange={(e) => setAmount(e.target.value)} />
                            <button className="btn-black text-sm" onClick={() => dispatch(addToCart({ product: { ...product, color: product.price[0].color }, amount: parseInt(amount) || 1 }))}>ADD TO CART</button>
                        </div>
                        <p className="mt-3"><strong>Category: </strong>Wooden Product</p>
                        <p><strong>Tag: </strong>Wooden</p>
                        <div className="flex items-center gap-1">
                            <strong>Share: </strong>
                            <div className="flex gap-1">
                                <FaFacebookF className="cursor-pointer" />
                                <AiFillInstagram className="cursor-pointer" />
                                <FaXTwitter className="cursor-pointer" />
                            </div>
                        </div>
                    </div>
                    <div className="absolute top-0 right-0 bg-green-700 text-white p-2 cursor-pointer" onClick={() => dispatch(handleView(product))}>
                        <IoClose size={'20px'} />
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default QuickView