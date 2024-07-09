import React from 'react'
import { productlists } from '../assets/data/data'
import Product from '../components/Product'

const Shop = () => {
    return (
        <>
            <div className='container mx-auto px-10 py-[100px]'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                    {productlists && productlists.map((product, i) => (
                        <Product product={product} key={i} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Shop