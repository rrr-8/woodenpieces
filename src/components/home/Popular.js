import React from 'react'
import { productlists } from '../../assets/data/data'
import Product from '../Product'

const Popular = () => {
    return (
        <div className='bg-[#eee] py-10'>
            <div className='container mx-auto px-10'>
                <div className='pb-5'>
                    <h2 className='font-semibold text-2xl'>Most Popular Products</h2>
                    <p>ALL PRODUCTS(39) <span className='text-green-500'>WOODEN PRODUCTS(15)</span></p>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                    {productlists && productlists.map((product) => (
                        <Product product={product} key={product.id}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Popular