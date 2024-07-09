import { useNavigate } from "react-router-dom"
import logo from "../assets/common/logo.png"
import { pageLinks } from "../assets/data/data"

const Footer = () => {
    const navigate = useNavigate()

    return (
        <div className="bg-gray-100">
            <div className='container mx-auto px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 py-10'>
                <div>
                    <img src={logo} alt="logo" className='h-[30px] cursor-pointer mb-2' onClick={() => navigate('/')} />
                    <p className="text-gray-500 text-[13px]">Address: istanbul, Turkey</p>
                    <p className="text-gray-500 text-[13px]">Email: <a href="mailto:abdallasraj62@gmail.com">abdallasraj62@gmail.com</a></p>
                    <p className="text-gray-500 text-[13px]">Call: <a href="tel:+905013362511">+90 501 336 25 11</a></p>
                    <h2 className="mt-3 text-gray-500">Subscribe To Our Newsletter</h2>
                    <input type="text" className="bg-gray-100 border border-gray-500 py-2 px-3 rounded-md outline-none mt-2 w-[280px]" placeholder="Enter your email address" />
                </div>
                {pageLinks.map((link, i) => (
                    <div key={link.category}>
                        <h2 className="font-semibold text-lg">{link.category}</h2>
                        {link.pages.map((page) => (
                            <p key={page.id} className="text-[13px] text-gray-500 my-1 hover:text-gray-900">{page.title}</p>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Footer