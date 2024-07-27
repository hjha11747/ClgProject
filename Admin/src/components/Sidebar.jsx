import React from 'react'
import addProduct from  '../assets/addproduct.png'
import listProduct from  '../assets/productlist.png'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='py-7 flex justify-center gap-x-2 w-full bg-white sm:gap-x-4 lg:flex-col lg:pt-20 lg:max-w-60 lg:h-screen lg:justify-start lg:pl-6 lg:gap-y-3'>
        <Link to={'/addproduct'}>
        <button className='flexCenter gap-2 rounded-md bg-primary h-12 w-44 medium-16  xs:w-44 '>
            <img src={addProduct} alt="" height={50} width={50} />
            <span>Add Product</span>
        </button>
        </Link>
        <Link to={'/listproduct'}>
        <button className='flexCenter gap-2 rounded-md bg-primary h-12 w-44 medium-16   xs:w-44 '>
            <img src={listProduct} alt="" height={50} width={50} />
            <span>Product List</span>
        </button>
        </Link>
    </div>
  )
}

export default Sidebar