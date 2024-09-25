import { Link, NavLink } from "react-router-dom"
import logo from '../assets/logo.svg'
import logout from '../assets/logout.svg'
import user from '../assets/user.svg'
import Navbar from "./Navbar"
import { useContext, useState } from "react"
import { MdClose, MdMenu } from "react-icons/md"
import { FaOpencart } from 'react-icons/fa'
import { ShopContext } from "../Context/ShopContext"

const Header = () => {
  const [menuOpened, setmenuOpened] = useState(false)
  const {getTotalCartIitems} = useContext(ShopContext)
  const toggleMenu = () => setmenuOpened(!menuOpened)
  return (
    <header className="fixed top-0 left-0 m-auto md:px-10 w-full bg-white ring-1 ring-slate-900/5 z-50">
      <div className="px-3 flexBetween py-3  max-xs:px-2">
        {/* Logo */}
        <div>
          <Link to='/'> <img src="https://www.zarla.com/images/zarla-shop-stock-1x1-2400x2400-20220124-xq4kmxrq9xqmxpw7dfbq.png?crop=1:1,smart&width=250&dpr=2" alt="" height={60} width={55} /> </Link>
        </div>
        {/* Navbar */}
        {/* Navbar Desktop */}
        <Navbar containerStyles={" hidden md:flex gap-x-5 xl: gap-x-10 medium-15  z-20 "}></Navbar>
        {/* Navbar Mobile */}
        <Navbar containerStyles={`${menuOpened ? "flex items-start w-60 flex-col gap-y-12 fixed top-20 right-6 p-12 bg-white rounded-3xl shadow-md medium-16 ring-1 ring-slate-900/5 transitition-all duration-300" : "flex item-start flex-col gap-y-12 fixed top-20 right-8 p-12 bg-white rounded-3xl shadow-md medium-16 ring-1 ring-slate-900/5 transitition-all duration-300 right-[100%] z-40"}`} />
        {/* Buttons */}
        <div className=" flexBetween sm:gap-x-3 bold-16">
          {!menuOpened ?
            (<MdMenu className="md:hidden cursor-pointer hover:text-secondary mr-2 p-1 ring-1 ring-slate-900/30 h-8 w-8 rounded-full" onClick={toggleMenu} />)
            :

            (<MdClose className="md:hidden cursor-pointer hover:text-secondary mr-2 p-1 ring-1 ring-slate-900/30 h-8 w-8 rounded-full" onClick={toggleMenu} />)}
          <div className="flexBetween sm:gap-x-6 ">
            <NavLink to={"cart-page"} className={"flex"}> <FaOpencart className="p-1 h-8 w-8 ring-slate-900/30 ring-1 rounded-full"/> <span className=" relative flex-center w-5 h-5 rounded-full bg-slate-400 text-black medium-14 -top-2 text-center">{getTotalCartIitems()}</span> </NavLink>
            { localStorage.getItem('auth-token') ? <NavLink to={"logout"} onClick={()=> {localStorage.removeItem('auth-token'); window.location.replace('/')}} className={" bg-slate-400 rounded-md px-3 py-2 flexCenter gap-x-2 medium-16"}> <img src={logout} alt="logoutIcon" height={19}
              width={19}
            /> Logout </NavLink> :
            <NavLink to={"login"} className={" bg-slate-400 rounded-md px-3 py-2 flexCenter gap-x-2 medium-16"}> <img src={user} alt="usericon"  height={19} width={19}/> Login</NavLink>}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header