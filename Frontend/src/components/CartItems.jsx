import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { TbTrash } from 'react-icons/tb'
import all_product from '../assets/all_products'

const CartItems = () => {
    const { all_products, cartItems, removeFromCart } =useContext(ShopContext)

  return (
    <section className='max_padd_container pt-28'>
        <table className='w-full mx-auto'>
            <thead>
                <tr className='bg-slate-900/10 regular-18 sm:regular-22 text-start py-12'>
                    <th className='p-1 py-2'>Product</th>
                    <th className='p-1 py-2'>Title</th>
                    <th className='p-1 py-2'>Price</th>
                    <th className='p-1 py-2'>Quantity</th>
                    <th className='p-1 py-2'>Total</th>
                    <th className='p-1 py-2'>Remove</th>
                </tr>
            </thead>
            <tbody>
                {all_product.map((e) => {
                    if(cartItems[e.id]>0) {
                        return <tr key={e.id} className=' border-b border-slate-900/20 ring-1 ring-slate-900/10 text-gray-30 p-6 medium-16 text-center'>
                            <td className='flexCenter'>
                                <img src={e.image} alt="producting" height={43} width={43} className='rounded-lg ring-1 ring-slate-900/10 my-1' /></td>
                                <td><div className='line-clamp-3'>{e.name}</div></td>
                                <td>${e.new_price}</td>
                                <td className='w-16 h-16 bg-white rounded-sm '>{cartItems[e.id]}</td>
                                <td>${e.new_price * cartItems[e.id]}</td>
                                <td>
                                    <div className='bold-22 pl-14 cursor-pointer'>
                                        <TbTrash onClick={() => removeFromCart(e.id)} />
                                    </div>
                                </td>
                        </tr>
                    }
                    return null;
                })}
            </tbody>
        </table>
    </section>
  )
}

export default CartItems