import { useDispatch, useSelector } from 'react-redux'
import { handleIsCart, handleOpen } from '../../redux/slice/openModelCartSlice'

import { IoCloseOutline } from "react-icons/io5";
import { deleteFromCartOneItem } from '../../redux/slice/cartSlice';
import { deleteFromFavorite } from '../../redux/slice/favoriteSlice';
import { useNavigate } from 'react-router-dom';
import { handleCheckout } from '../../redux/slice/checkoutSlice';

const ModelCart = () => {
    const navigate = useNavigate()

    const dispatch = useDispatch()
    const openCart = useSelector((state) => state.modelCart.openCart)
    const isCart = useSelector((state) => state.modelCart.isCart)

    const cart = useSelector((state) => state.cart.cart)
    const totalQuantity = useSelector((state) => state.cart.totalQuantity);
    const totalPriceAll = useSelector((state) => state.cart.totalPriceAll);

    const favorite = useSelector((state) => state.favorite.favorite);
    const totalQuantityFavorite = useSelector((state) => state.favorite.totalQuantityFavorite)

    return (
        <div>
            {openCart && <div className='fixed w-full h-full top-0 left-0 z-50 flex items-center justify-center'>
                <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50' onClick={() => dispatch(handleOpen())}></div>
                <div className='absolute top-0 right-0 w-full sm:w-[450px] h-full bg-white py-8'>
                    <div className='absolute top-1 left-1 cursor-pointer sm:hidden' onClick={() => dispatch(handleOpen())}><IoCloseOutline size={'30px'} /></div>
                    <div className='flex justify-between items-center mb-5 px-8'>
                        <div className={`flex gap-2 items-center py-2 border-b-2 ${isCart ? "border-green-600 text-green-600" : 'border-gray-300'} w-1/2 cursor-pointer`} onClick={() => dispatch(handleIsCart(true))}>
                            <p>Shopping Cart</p>
                            <div className='rounded-full bg-[#333] text-white w-6 h-6 flex justify-center items-center text-[12px]'>{totalQuantity}</div>
                        </div>
                        <div className={`flex gap-2 items-center justify-end py-2 border-b-2 ${!isCart ? "border-green-600 text-green-600" : 'border-gray-300'} w-1/2 cursor-pointer`} onClick={() => dispatch(handleIsCart(false))}>
                            <p>Wishlist</p>
                            <div className='rounded-full bg-[#333] text-white w-6 h-6 flex justify-center items-center text-[12px]'>{totalQuantityFavorite}</div>
                        </div>
                    </div>

                    {isCart &&
                        <div className='overflow-auto h-[65%] pl-8 pr-2'>
                            {cart && cart.map((item, i) => (
                                <div key={i} className='flex items-center justify-between gap-2 py-3 border-b-2 border-gray-200'>
                                    <div className='flex gap-5 items-center'>
                                        <img src={item.images[0].image} alt="" onClick={() => { navigate(`/product-details/${item.id}`); dispatch(handleOpen()) }} className='w-[100px] h-[100px] object-cover rounded-lg cursor-pointer' />
                                        <div>
                                            <h3 className='font-semibold text-lg'>{item.title}</h3>
                                            <p className='text-[12px]'>Color: {item.color}</p>
                                            <p className='text-[12px]'>{item.quantity} x ${item.price}</p>
                                            <p className='font-semibold text-sm'>Total Price: <span className='text-green-700'>${(item.totalPrice).toFixed(2)}</span></p>
                                        </div>
                                    </div>
                                    <div onClick={() => dispatch(deleteFromCartOneItem(item))} className="bg-gray-200 text-black p-1 rounded-full cursor-pointer">
                                        <IoCloseOutline size={'20px'} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    }

                    {isCart &&
                        <div className='px-8 mt-5'>
                            <div className='flex justify-between text-sm'>
                                <p>Subtotal: </p>
                                <span>${(totalPriceAll).toFixed(2)}</span>
                            </div>
                            <div className={`flex justify-between text-sm ${totalPriceAll > 100 ? 'text-green-600 font-semibold' : ''}`}>
                                <p>Shopping: </p>
                                <span>{totalPriceAll > 100 ? "Free" : "$29.00"}</span>
                            </div>
                            <div className='flex justify-between font-semibold'>
                                <p>Total: </p>
                                <span>${(totalPriceAll + (totalPriceAll < 100 ? 29 : 0)).toFixed(2)}</span >
                            </div>
                            <div>
                                <button className="btn-white w-full mt-3 mb-1" onClick={() => { dispatch(handleCheckout()); dispatch(handleOpen()) }}>Pay ${(totalPriceAll + (totalPriceAll < 100 ? 29 : 0)).toFixed(2)}</button>
                                <button className="btn-black w-full my-1" onClick={() => navigate("/cart")}>View Cart</button>
                            </div>
                        </div>
                    }

                    {!isCart &&
                        <div className='overflow-auto h-[80%] pl-8 pr-2'>
                            {favorite && favorite.map((item, i) => (
                                <div key={i} className='flex items-center justify-between gap-2 py-3 border-b-2 border-gray-200'>
                                    <div className='flex gap-5 items-center'>
                                        <img src={item.images[0].image} alt="" onClick={() => { navigate(`/product-details/${item.id}`); dispatch(handleOpen()) }} className='w-[100px] h-[100px] object-cover rounded-lg cursor-pointer' />
                                        <div>
                                            <h3 className='font-semibold text-lg'>{item.title}</h3>
                                            <p className='text-[12px]'>{item.description.slice(0, 40)}...</p>
                                            <p className='text-[12px]'>Color: {item.color}</p>
                                            <div className='flex gap-3 items-center text-sm mt-1'>
                                                <span className='line-through text-gray-400'>${item.price}</span>
                                                <span className='text-green-700 font-semibold'>${(item.price - (item.price * item.discount / 100)).toFixed(2)}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div onClick={() => dispatch(deleteFromFavorite(item))} className="bg-gray-200 text-black p-1 rounded-full cursor-pointer">
                                        <IoCloseOutline size={'20px'} />
                                    </div>
                                </div>
                            ))}
                        </div>}
                </div>
            </div>
            }
        </div>
    )
}

export default ModelCart