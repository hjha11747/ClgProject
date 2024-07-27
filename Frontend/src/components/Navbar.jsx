import { NavLink } from 'react-router-dom'
import {MdHomeFilled ,MdCategory ,MdShop2 ,MdContacts} from 'react-icons/md'

const Navbar = ({containerStyles}) => {
  return (
    <nav className={`${containerStyles} ml-16`} >
      <NavLink to={'/'} className={({isActive}) => `${isActive ? "active_link" : ""} mr-8 max-lg:mr-3`}><div className='flexCenter gap-1'> <MdHomeFilled /> Home</div></NavLink>
      <NavLink to={'/mens'} className={({isActive}) => `${isActive ? "active_link" : ""} mr-8 max-lg:mr-3`}><div className='flexCenter gap-1'> <MdCategory /> Men's</div></NavLink>
      <NavLink to={'/womens'} className={({isActive}) => `${isActive ? "active_link" : ""} mr-8 max-lg:mr-3`}><div className='flexCenter gap-1'> <MdShop2/> Women's</div></NavLink>
      <NavLink to={'/kids'} className={({isActive}) => `${isActive ? "active_link" : ""} mr-8 max-lg:mr-3`}><div className='flexCenter gap-1'> <MdContacts /> Kid's</div></NavLink>
    </nav>
  )
}

export default Navbar