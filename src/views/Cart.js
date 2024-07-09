import { useDispatch, useSelector } from 'react-redux'
import BgImage from '../assets/common/Frame.png'

import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { useEffect, useState } from 'react';
import { addToCart, changeQuantity, deleteFromCartOneItem, removeFromCart } from '../redux/slice/cartSlice';
import { IoCloseOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { handleCheckout } from '../redux/slice/checkoutSlice';

const Cart = () => {
    const cart = useSelector((state) => state.cart.cart)
    const totalPriceAll = useSelector((state) => state.cart.totalPriceAll)
    const [amount, setAmount] = useState(1)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    return (
        <div>
            <div className='relative h-[50vh]'>
                <img src={BgImage} alt="" className='w-full h-full object-cover' />
                <h1 className='text-6xl font-semibold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Cart</h1>
            </div>
            <div className='container mx-auto p-10 flex gap-8 flex-col lg:flex-row'>
                <div className='w-full lg:w-[70%] overflow-auto'>
                    <table className='w-full'>
                        <thead>
                            <tr className='bg-gray-100'>
                                <th className='py-3 px-4 text-start'>PRODUCT</th>
                                <th className='py-3 text-start'>TITLE</th>
                                <th>PRICE</th>
                                <th>QUANTITY</th>
                                <th className='px-4'>SUBTOTAL</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart && cart.map((item) => (
                                <tr className='border-b-2 border-gray-200' key={item.id}>
                                    <td>
                                        <img src={item.images[0].image} alt="" className='w-[100px] h-[100px] object-cover my-4 rounded-md cursor-pointer' onClick={() => navigate(`/product-details/${item.id}`)} />
                                    </td>
                                    <td><h3 className='font-semibold px-2'>{item.title}</h3></td>
                                    <td><p className='text-center'>${item.price}</p></td>
                                    <td>
                                        <div className="flex justify-center gap-3 px-4">
                                            <div className='amount border-2 border-[#ddd] w-[40px] h-[40px] text-center flex items-center justify-center bg-gray-100 cursor-pointer' onClick={() => dispatch(addToCart({ product: item, amount: 1 }))}>
                                                <FaPlus />
                                            </div>
                                            <input type="number" className="amount border-2 border-[#ddd] w-[50px] h-[40px] text-center" value={item.quantity} />
                                            <div className='amount border-2 border-[#ddd] w-[40px] h-[40px] text-center flex items-center justify-center bg-gray-100 cursor-pointer' onClick={() => dispatch(removeFromCart(item))}>
                                                <FaMinus />
                                            </div>
                                        </div>
                                    </td>
                                    <td><p className='font-semibold text-green-600 text-center text-lg'>${(item.totalPrice).toFixed(2)}</p></td>
                                    <td>
                                        <div onClick={() => dispatch(deleteFromCartOneItem(item))} className="bg-green-800 text-white p-1 rounded-full cursor-pointer mx-3 w-8 h-8 flex justify-center items-center">
                                            <IoCloseOutline size={'20px'} />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className='w-full lg:w-[30%]'>
                    <div className='bg-gray-100 p-8 rounded-sm'>
                        <h2 className='font-semibold py-2 border-b border-gray-300'>Cart Totals</h2>
                        <div className='flex justify-between text-sm py-2 border-b border-gray-300'>
                            <p>Subtotal: </p>
                            <span>${(totalPriceAll).toFixed(2)}</span>
                        </div>
                        <div className={`flex justify-between text-sm ${totalPriceAll > 100 ? 'text-green-600 font-semibold' : ''} py-2 border-b border-gray-300`}>
                            <p>Shopping: </p>
                            <span>{totalPriceAll > 100 ? "Free" : "$29.00"}</span>
                        </div>
                        <div className='flex justify-between font-semibold py-2'>
                            <p>Total: </p>
                            <span>${(totalPriceAll + (totalPriceAll < 100 ? 29 : 0)).toFixed(2)}</span>
                        </div>
                        <div>
                            <button className="btn-black w-full mt-5 mb-1" onClick={() => dispatch(handleCheckout())}>Proceed To Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart