import { productlists } from "../assets/data/data";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Product from "./Product";

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div onClick={onClick} className="absolute top-1/2 right-0 -translate-y-1/2 z-40 bg-[#333] text-white p-1 rounded-full cursor-pointer">
            <MdOutlineKeyboardArrowRight size={'30px'} />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div onClick={onClick} className="absolute top-1/2 left-0 -translate-y-1/2 z-40 bg-[#333] text-white p-1 rounded-full cursor-pointer">
            <MdKeyboardArrowLeft size={'30px'} />
        </div>
    );
}

const ProductsSlide = ({ title, text }) => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    intialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            }
        ]
    };

    return (
        <div className="container mx-auto px-5 pb-7">
            <div className='p-5'>
                <h2 className='font-semibold text-2xl'>{title}</h2>
                <p>{text}</p>
            </div>
            <div>
                <Slider {...settings} className="">
                    {productlists.map((product) => (
                        <Product product={product} key={product.id} />
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default ProductsSlide