import { FaShippingFast } from "react-icons/fa";
import { MdOutlineMarkUnreadChatAlt } from "react-icons/md";
import { FaCircleDollarToSlot } from "react-icons/fa6";
import { BiChat } from "react-icons/bi";

export const additionalInfo = [
    {
        id: 1,
        title: "FREE SHIPPING",
        description: "Enjoy Free Shipping On All Orders - No Minimum Purchase Required.",
        icon: <FaShippingFast size={50} />,
    },
    {
        id: 2,
        title: "24/7 SUPPORT",
        description: "Our Team Is Available 24/7 To Help With Any Questions Or Concerns.",
        icon: <MdOutlineMarkUnreadChatAlt size={50} />,
    },
    {
        id: 3,
        title: "MONEY BACK",
        description: "We Offer A 100% Money-Back Guarantee For Your Satisfaction.",
        icon: <FaCircleDollarToSlot size={50} />,
    },
];

const Info = () => {
    return (
        <div className='container mx-auto px-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 py-24'>
                {additionalInfo.map((info) => (
                    <div className='text-center' key={info.id}>
                        <div className="text-green-700 flex justify-center">{info.icon}</div>
                        <h3 className="font-bold text-lg my-5">{info.title}</h3>
                        <p>{info.description}</p>
                    </div>
                ))}
            </div>

            <div className="bg-[#222] flex justify-between items-center flex-col lg:flex-row gap-2 lg:gap-8 px-10 py-7 text-white mb-10 rounded-md">
                <div className="flex items-center gap-8">
                    <BiChat size={'100px'} />
                    <div>
                        <h3 className="text-xl font-bold">SUBSCRIBE TO OUR NEWSLETTER</h3>
                        <p className="text-[#666]">Get Latest News, Offers And Discounts.</p>
                    </div>
                </div>
                <input type="email" placeholder="Enter Your Email" className="lg:w-[50%] py-2 px-5 rounded-sm outline-none text-black" />
            </div>
        </div>
    )
}

export default Info