import { useNavigate } from "react-router-dom"

const BannerCard = ({ title, text, image, flex, start }) => {
    const navigate = useNavigate()

    return (
        <div className={`relative w-full h-full`}>
            <img src={image} alt="" />
            <div className={`absolute ${flex && "flex gap-5"}  ${start ? "left-8 bottom-8 w-[80%]" : "right-8 top-8"}`}>
                <div>
                    <h2 className="font-bold text-3xl">{title}</h2>
                    <p>{text}</p>
                </div>
                <div className="mt-4">
                    <button className="btn-white" onClick={() => navigate('/shop')}>Shop Now</button>
                </div>
            </div>
        </div>
    )
}

const Banner = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-center gap-5 container mx-auto my-16 px-10">
            <div>
                <BannerCard title='Wooden Water Bottles' text='UP TO 80% OFF' image='./images/hero/product1-1.png' flex={true} start={true} />
            </div>
            <div className="flex flex-col gap-6 ">
                <BannerCard title='Wooden Water Bottles' text='UP TO 40% OFF' image='./images/hero/product2.png' flex={false} start={true}  />
                <BannerCard title='Wooden Water Bottles' text='UP TO 90% OFF' image='./images/hero/product3.png' flex={false} start={false} />
            </div>
        </div>
    )
}

export default Banner