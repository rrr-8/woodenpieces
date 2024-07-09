import { NavLink, useNavigate, useLocation } from "react-router-dom"
import { IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

import logo from "../assets/common/logo.png"
import { menulists } from "../assets/data/data";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleIsCart, handleOpen } from "../redux/slice/openModelCartSlice";

const Header = () => {
    const dispatch = useDispatch()
    const totalQuantity = useSelector((state) => state.cart.totalQuantity)
    const totalQuantityFavorite = useSelector((state) => state.favorite.totalQuantityFavorite)

    const navigate = useNavigate();
    let location = useLocation()

    const [open, setOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const menuRef = useRef(null);

    const handleScroll = () => {
        setIsScrolled(window.scrollY > 0);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return () => {
            document.removeEventListener('scroll', handleScroll);
        }
    })

    const isHomePage = location.pathname === '/'
  

    return (
        <header className={`${isHomePage ? "bg-gray-100" : ''} fixed top-0 left-0 z-50 w-full ${isScrolled ? 'shadow-lg bg-gray-100' : ""}`}>
            <div className="relative flex items-center p-0 m-0 mx-auto h-[65px]">
                <div className="pl-5">
                    <img src={logo} alt="logo" onClick={() => navigate('/')} className="cursor-pointer w-[190px] " />
                </div>
                <div className="flex flex-1 ml-10 mr-5">
                    <nav className="hidden lg:flex gap-3 ">
                        {menulists.map((list) => (
                            <NavLink to={list.path} key={list.id} className={({ isActive }) => isActive ? "text-green-500 uppercase" : "uppercase"}>{list.link}</NavLink>
                        ))}
                    </nav>
                </div>
                <div className={`flex gap-3 items-center justify-end h-full px-5 w-[55%] sm:w-[330px] ${isHomePage && !isScrolled ? 'md:bg-[#333] md:text-white' : ''} `}>
                    <button className="hidden md:block">LOGIN/REGISTER</button>
                    <div className="relative">
                        <IoMdHeartEmpty size='23px' className="cursor-pointer" onClick={() => { dispatch(handleOpen()); dispatch(handleIsCart(false)) }} />
                        <div className="absolute -top-2 -right-1 rounded-full p-1 text-[12px] bg-green-500 w-4 h-4 flex items-center justify-center text-white">{totalQuantityFavorite}</div>
                    </div>
                    <div className="relative cursor-pointer" onClick={() => { dispatch(handleOpen()); dispatch(handleIsCart(true)) }}>
                        <IoCartOutline size='23px' />
                        <div className="absolute -top-2 -right-1 rounded-full p-1 text-[12px] bg-green-500 w-4 h-4 flex items-center justify-center text-white">{totalQuantity}</div>
                    </div>
                    <div className="block lg:hidden bg-gray-700 p-1 rounded-md ml-3 cursor-pointer" onClick={() => setOpen(!open)}>
                        {open ? <IoClose color="white" size={'18px'} /> : <IoMenu color="white" size={'18px'} />}
                    </div>
                </div>

               {/* responsivness */}
                <div className={`absolute -bottom-[170px] ${open ? 'left-1/2' : '-left-1/2'} transition-all -translate-x-1/2 bg-[#333] z-40 w-[300px] sm:w-[400px]`}>
                    <nav className="flex flex-col items-start px-4 py-2 text-white">
                        {menulists.map((list) => (
                            <NavLink to={list.path} key={list.id} className={({ isActive }) => isActive ? "text-green-500 uppercase" : "uppercase"} onClick={() => setOpen(false)}>{list.link}</NavLink>
                        ))}
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header