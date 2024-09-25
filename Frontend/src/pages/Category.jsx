import React, { useContext, useState, useEffect } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import Item from '../components/Item';
import { ShopContext } from '../Context/ShopContext';

const Category = ({ category, banner }) => {
  const { all_products } = useContext(ShopContext);

  const [allproducts, setAllProducts] = useState([]);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [category]);

  useEffect(() => {
    fetch('http://localhost:4000/allproducts')
      .then((response) => response.json())
      .then((data) => setAllProducts(data));
  }, []);



  const handleShowMoreToggle = () => {
    setShowMore(!showMore);
  };

  return (
    <section className='max_padd_container py-20'>
      <div>
        <div>
          <img src={banner} alt="" className='my-6 max-sm:h-[28vh] max-md:h-[30vh] max-lg:h-[40vh]' />
        </div>
        <div className='flexBetween my-8 mx-2'>
          <h5 className='max-md:text-[13px]'><span className='font-bold max-md:text-[13px]'>  {showMore ? 'Showing 1-36' : 'Showing 1-12'} </span>out of 36 products </h5>
          <div className='flexBetween max-sm:px-4 gap-x-4 px-8 py-3 rounded-xl ring-1 ring-slate-900/15 max-md:px-4 max-md:py-1 max-md:text-[11px]'>Products</div>
        </div>
        <div className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 max-md:gap-2 lg:px-20 lg:w-[90%] lg:ml-10'>
          {all_products.map((item) => {
            if (category === item.category) {
              return <Item key={item.id} id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price} />
            }
          })}
        </div>
        <div className='mt-6 text-center'>
          {showMore && (
            <div className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 max-md:gap-2 lg:w-[90%] lg:ml-10'>
              {all_products.map((item) => {
                if (category !== item.category) {
                  return <Item key={item.id} id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price} />
                }
              })}
            </div>
          )}
          <button className='btn_dark_rounded mt-10' onClick={handleShowMoreToggle}>
            {showMore ? 'Show Less' : 'Show More'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Category;
