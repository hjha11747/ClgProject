import React, { useState, useEffect } from 'react'
import POPULAR from '../assets/popular'
import Item from './Item'

const Popular = () => {

  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    fetch('https://clgproject.onrender.com/popularproducts')
      .then((response) => response.json())
      .then((data) => setPopularProducts(data))
  }, [])

  return (
    <section className='bg-primary'>
      <div className='max_padd_container py-12 xl:py-28 xl:w-[88%] w-full'>
        <h3 className='h3 text-center'>Popular Products</h3>
        <hr className='h-[3px] md:w-1/2 mx-auto bg-gradient-to-l from-transparent via-black to-transparent mb-12' />
        <div className=' grid grid-cols-1 xs:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-6 max-md:gap-2'>
          {popularProducts.map((item) => (
            <Item key={item.id} id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Popular