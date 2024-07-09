import { useState } from "react"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div onClick={onClick} className="absolute bottom-0 left-1/2 z-40 bg-[#333] text-white p-1 rounded-sm cursor-pointer">
            <MdOutlineKeyboardArrowRight size={'30px'} />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div onClick={onClick} className="absolute bottom-0 left-1/2 -translate-x-full z-40 bg-gray-300 p-1 rounded-sm cursor-pointer">
            <MdKeyboardArrowLeft size={'30px'} />
        </div>
    );
}

const HeroItem = ({ item }) => {
    const [select, setSelect] = useState(item.price[0].color)
    const navigate = useNavigate()

    return (
        <div className='flex relative bg-gray-100 mt-[65px]'>
            <div className='sm:w-[50%] flex justify-center items-center' style={{ height: 'calc(100vh - 65px)' }}>
                <div className='w-[70%]'>
                    <h1 className='text-4xl sm:text-6xl font-semibold mb-2'>{item.title}</h1>
                    <p className='text-gray-500 text-sm mt-3'>{item.description}</p>
                    <div className='flex gap-8 mt-4'>
                        <div>
                            <p className='text-gray-500 text-sm'>Price</p>
                            {item.price.filter((p) => p.color === select).map((pr, i) => (
                                <h3 key={i} className='font-bold text-lg'>${pr.value}</h3>
                            ))}
                        </div>
                        <div>
                            <p className='text-gray-500 text-sm'>Colors</p>
                            <div className='flex gap-2 mt-2'>
                                {item.price.map((p, i) => (
                                    <div key={i} className={`rounded-full w-[13px] h-[13px] cursor-pointer ${p.color === select && 'border-2 border-black'}`} style={{ backgroundColor: p.color }} onClick={() => setSelect(p.color)}></div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col lg:flex-row gap-3 mt-4'>
                        <button className='btn-black'>VIEW DEATILS</button>
                        <button className='btn-white' onClick={() => navigate('/shop')}>VIEW SHOP</button>
                    </div>
                </div>
            </div>
            <div className="w-[50%] lg:w-[43%] bg-white hidden sm:block py-8 px-4" style={{ height: 'calc(100vh - 65px)' }}>
                <img src={item.image} alt="" className='object-contain w-full h-full' />
            </div>
            <div className='px-5 w-[7%] bg-[#333] hidden md:block' style={{ height: 'calc(100vh - 65px)' }}></div>
        </div>
    )
}

const Hero = ({ herolist }) => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
        <div>
            <div className="slider-container">
                <Slider {...settings}>
                    {herolist.map((item) => (
                        <HeroItem item={item} key={item.id} />
                    ))}
                </Slider>
            </div>
        </div>
    )
}


export default Hero