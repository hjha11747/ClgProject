import React, { useEffect } from 'react'
import { MdStar, MdOutlineLocalOffer } from 'react-icons/md'
import { NavLink } from 'react-router-dom'



const Hero = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className='relative bg-hero bg-cover  bg-top bg-no-repeat h-screen w-full max-sm:h-[400px] max-sm:top-10  mb-16'>
            <div className='relative top-40 max-md:top-32 w-[25%] max-sl:w-[35%] m-auto ml-[38%] max-md:pt-[17%]  max-sl:ml-[34%] max-sm:pt-[6%] text-center'>
                <h1 className='text-[30px] leading-tight py-4 max-xsl:py-2 font-semibold capitalize max-lg:text-[24px] max-sm:text-[16px] '>30-70% Off On Everything</h1>
                <NavLink to='/mens' className=' bg-white   max-lg:text-[11px] max-md:text-[10px] max-sm:text-[8px]  max-xsl:ml-[-3%] max-xs:ml-[-10%] max-sm: max-lg:mr-1 px-4 py-1 mr-3 font-semibold rounded-sm max-sm:px-3'>FETILIZER</NavLink>
                <NavLink to='/womens' className=' bg-white  max-lg:text-[11px] max-md:text-[10px] max-sm:text-[8px]  max-sm: max-lg:mr-1 px-4 py-1 mr-3 font-semibold rounded-sm max-sm:px-3'>SEED</NavLink>
                <NavLink to='/kids' className=' bg-white  max-lg:text-[11px] max-md:text-[10px] max-sm:text-[8px]  max-sm: max-lg:mr-1 px-4 py-1 mr-3 font-semibold rounded-sm max-sm:px-3'>TOOL</NavLink>
            </div>
        </section>
    )
}

export default Hero




/*<div className='max_padd_container relative top-40 max-md:top-32  '>
<h1 className='h1 capitalize max-lg:h2 max-sm:h3'>Digital Shopping Hub Junction</h1>

<div className='flexStart !items-center gap-x-4 my-10 max-sm:my-5'>
    <div className='!regular-24 flexCenter gap-x-1 max-lg:regular-18 text-amber-500 '>
        <MdStar />
        <MdStar />
        <MdStar />
        <MdStar />
    </div>
    <div className='bold-16 sm:bol-20'>176k <span className='regular-16 sm:regular-20'> Excellent Reviews
    </span>
    </div>
</div>
<div className='max-xs:flex-col flex gap-2 '>
    <NavLink to={'mens'} className={'btn_dark_rounded flexCenter'}>Shop Now</NavLink>
    <NavLink to={'kids'} className={'btn_dark_rounded flexCenter gap-x-2'}> <MdOutlineLocalOffer className="" /> Offer</NavLink>
</div>
</div>
*/