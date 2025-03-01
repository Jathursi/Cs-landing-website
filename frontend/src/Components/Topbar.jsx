import React from 'react'
// import {MdOutlineShoppingCart} from 'react-icons/md';
import {MdMenu} from 'react-icons/md';
import Sidebar from './Sidebar'

const NavbarMenu = [
    {
        id: 1,
        name: 'Home',
        url: '/'
    }
    ,
    {
        id: 2,
        name: 'About',
        url: '/about'
    }
    ,
    {
        id: 3,
        name: 'Gallery',
        url: '/gallery'
    },
    {

        id: 4,
        name: 'Events',
        url: '/events'
    },
    {
        id: 5,
        name: 'Team',
        url: '/team'
    },
    {
        id: 6,
        name: 'Contact',
        url: '/contact'
    }
]
function Topbar() {
    const [open, setOpen] = React.useState(false)
  return (
    <nav className='shadow-lg'>
        <div className='container '>
            <div className='flex justify-between items-center py-4'>
                {/* Logo */}
                <div>
                    <h1 className='text-2xl font-bold'>Comp Soc</h1>
                </div>
                {/* Menu */}
                <div className='hidden md:block'>
                    <ul className='flex items-center space-x-4'>
                        {NavbarMenu.map((menu, index) => (
                            <li key={menu.id}>
                                <a href={menu.url} className='text-gray-800 hover:text-gray-600'>
                                    {menu.name}
                                </a>
                            </li>
                        ))}
                        {/* <button className = ' text-2xl rounded-full p-2'>
                            <MdOutlineShoppingCart />
                        </button> */}
                    </ul>
                </div>
                {/* Mobile */}
                <div className='md:hidden'>
                    <MdMenu className='text-4xl' onClick={()=>setOpen(!open)}/>
                </div>
            </div>
        </div>
        <Sidebar open={open}/>
    </nav>
  )
}

export default Topbar