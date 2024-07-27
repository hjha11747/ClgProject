import React from 'react'
import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'

const Item = ({ id, name, image, old_price, new_price, small_images }) => {
    return (
        <div className='rounded-xl overflow-hidden shadow-lg lg:w-[95%]'>
            <div className=' relative flexCenter group overflow-hidden transition-all duration-100 h-60 max-md:h-48 '> {/* Set a fixed height for the parent */}
                <Link to={`/product/${id}`} className='h-12 w-12 bg-white flexCenter rounded-full absolute top-1/3 bottom-1/2 !py-2 z-20 scale-0 group-hover:scale-100 transition-all duration-700'>
                    <FaSearch className='hover:rotate-90 scale-125 absolute right-4 top-4 transition-all duration-200' />
                </Link>
                <div className='h-full w-full'>
                    <img src={image} alt="productImages" className='h-[120%] max-md:h-[100%] w-full object-cover group-hover:scale-110 transition-all duration-1000' /> {/* Ensure the image height is 50% of the parent */}
                </div>
            </div>
            <div className='p-2 overflow-hidden'>
                <h4 className='my-[6px] medium-15 max-md:text-[14px] line-clamp-2 text-gray-30'>{name}</h4>
                <div className='flex gap-5'>
                    <div className='bold-15 max-md:text-[14px]'>${new_price}.00</div>
                    <div className='text-secondary bold-16 line-through max-md:text-[14px]'>${old_price}.00</div>
                </div>
            </div>
        </div>
    )
}

export default Item
