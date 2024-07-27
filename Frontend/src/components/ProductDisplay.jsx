import React, { useContext, useEffect, useState } from 'react';
import { MdStar } from 'react-icons/md';
import { ShopContext } from '../Context/ShopContext';
import all_product from '../assets/all_products'

const ProductDisplay = (props) => {
    const { product } = props;
    const { addToCart, all_products } = useContext(ShopContext);
    const [selectedSize, setSelectedSize] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Find the product from all_products array by id
   all_product.find((p) => p.id === product.id);

    const handleSizeClick = (size) => {
        setSelectedSize(size);
    };

    return (
        <section>
            <div className='flex flex-col gap-14 xl:flex-row'>
                <div className='flex gap-x-2 xl:flex-[1]'>
                    <div>
                        <img className='rounded-md' src={product.image} alt="" />
                    </div>
                </div>
                <div className='flex flex-col xl:flex-[1.8]'>
                    <h3 className='h3'> {product.name} </h3>
                    <div className='flex gap-x-2 text-secondary medium-22'>
                        <MdStar />
                        <MdStar />
                        <MdStar />
                        <MdStar />
                        <p>(111)</p>
                    </div>

                    <div className='flex gap-x-6 medium-20 my-4'>
                        <div className='line-through'>${product.old_price}</div>
                        <div className='text-secondary '>${product.new_price}</div>
                    </div>
                    <div className='mb-4'>
                        <h4 className='bold-16'>Select Size:</h4>
                        <div className='flex gap-3 my-3'>
                            {['S', 'M', 'L', 'XL'].map((size) => (
                                <div
                                    key={size}
                                    className={`ring-2 ring-slate-900 rounded-xl h-10 w-10 flexCenter cursor-pointer ${selectedSize === size ? 'bg-black text-white' : ''}`}
                                    onClick={() => handleSizeClick(size)}
                                >
                                    {size}
                                </div>
                            ))}
                        </div>
                        <div className='flex flex-col gap-y-3 mb-4 max-w-[555px]'>
                            <button onClick={() => { addToCart(product.id) }} className='btn_dark_outline !rounded-sm uppercase regular-14 tracking-widest'>Add To Cart</button>
                            <button className='btn_dark_rounded !rounded-sm uppercase regular-14 tracking-widest'>Buy It Now</button>
                        </div>
                        <p><span className='medium-16 text-tertiary '> Category: </span>{product.category}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProductDisplay;
