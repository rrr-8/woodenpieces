import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../redux/slice/cartSlice'
import { handleCheckout } from '../redux/slice/checkoutSlice'

const Checkout = () => {
    const dispatch = useDispatch()
    const checkoutIsOpen = useSelector((state) => state.checkout.checkoutIsOpen)
    const totalPriceAll = useSelector((state) => state.cart.totalPriceAll)

    return (
        <div>
            {checkoutIsOpen && <div className='fixed w-full h-full top-0 left-0 z-50 flex items-center justify-center'>
                <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50' onClick={() => dispatch(handleCheckout())}></div>
                <div className='bg-white rounded-md w-full mx-4 sm:w-[350px] overflow-hidden relative text-center p-8' style={{ zIndex: 300 }}>
                    <h2 className='text-2xl font-semibold'>Checkout</h2>
                    <p className='text-sm text-gray-400 mb-3'>Payment test using siripe</p>
                    <hr className='w-1/2 mx-auto' />
                    <p className='mt-2'>serajs.net@gmail.com</p>
                    <form action="" className='my-3'>
                        <input type="number" className='border border-gray-200 rounded-sm py-1 px-3 mb-3 w-full' placeholder='Cart Number' required />
                        <div className='flex'>
                            <input type="text" className='border border-gray-200 rounded-sm py-1 px-3 w-1/2' placeholder='MM / YY' required />
                            <input type="number" className='border border-gray-200 rounded-sm py-1 px-3 w-1/2' placeholder='CVC' required />
                        </div>
                        <button className="btn-black w-full mt-7 mb-1" onClick={() => { dispatch(handleCheckout()); dispatch(clearCart()) }}>Pay ${(totalPriceAll + (totalPriceAll < 100 ? 29 : 0)).toFixed(2)}</button>
                    </form>
                </div>
            </div>}

        </div>
    )
}

export default Checkout