import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div onClick={onClick} className="absolute top-1/2 right-0 -translate-y-1/2 z-40 bg-[#ddd] text-black p-1 rounded-full cursor-pointer">
            <MdOutlineKeyboardArrowRight size={'30px'} />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div onClick={onClick} className="absolute top-1/2 right-[50px] -translate-y-1/2 z-40 bg-[#ddd] text-black p-1 rounded-full cursor-pointer">
            <MdKeyboardArrowLeft size={'30px'} />
        </div>
    );
}

const Testimonials = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
        <section className='testimonials'>
            <div className='container mx-auto flex justify-between items-center gap-20 pt-10 md:pt-40  pb-10 px-8'>
                <div className='w-1/2 items-center justify-center hidden md:flex'>
                    <div className='relative w-80 h-80 bg-white rounded-full z-40'>
                        <img src="/public/images/hero/girl.png" alt="" className='absolute -top-[79px] left-0 z-10 rounded-b-full' />
                        <div className='absolute top-1/2 -translate-y-1/2 -right-14 bg-[#ffffffbe] p-3 z-50 rounded-md'>
                            <p className='mb-1 text-gray-500'>Our Satisfied User</p>
                            <div className='flex relative'>
                                <img src="/public/images/testimonial/pic1-2.png" alt="" className='rounded-full border border-white' />
                                <img src="/public/images/testimonial/pic2-2.png" alt="" className='rounded-full border border-white relative -left-3' />
                                <div className='rounded-full border border-gray-500 w-[51px] h-[51px] flex items-center justify-center bg-white relative -left-6'>+12k</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full md:w-1/2'>
                    <h2 className='text-3xl font-bold mb-3'>What our clients say about us</h2>
                    <p className='text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit unde ratione animi corrupti velit. Officia laboriosam numquam modi aut, perferendis voluptatum aliquid et nam voluptas est quia sapiente reprehenderit reiciendis.</p>
                    <div className='py-5 max-w-full md:max-w-[300px] lg:max-w-full'>
                        <Slider {...settings}>
                            <TestimonialsCard name="Joe Do" post="Postgraduate Student" cover="../images/testimonial/pic5.jpg" />
                            <TestimonialsCard name="Kenneth Fong" post="Undergraduate Student" cover="../images/testimonial/pic6.jpg" />
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    )
}

const TestimonialsCard = ({ name, post, cover }) => {
    return (
        <div className='flex gap-6'>
            <img src={cover} alt="" className='rounded-full w-[50px]' />
            <div>
                <h3 className='font-semibold'>{name}</h3>
                <p className='text-sm text-gray-500'>{post}</p>
            </div>
        </div>
    )
}

export default Testimonials