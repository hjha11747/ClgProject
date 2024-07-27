import React from 'react'

const NewsLetter = () => {
  return (
    <section className=' m-auto max_padd_container py-12 bg-white w-[90%] h-[350px] max-md:h-[300px] max-sm:h-[270px] rounded-lg pt-24 max-sm:pt-20 max-md:pt-20'>
      <div className='mx-auto text-center flexcenter flex-col gap-y-8'>
        <h3 className='h3 max-lg:text-[28px] max-sm:text-[21px]'>Get Execlusive Offers On Your Email</h3>
        <h4 className='uppercase bold-18 max-lg:text-[15px] max-sm:text-[10px]'>Subscribe To Our Newslatter And Stay Updated</h4>
        <div className='flexBetween mt-6 mx-auto rounded-xl ring-1 ring-slate-900/5 hover:ring-slate-900/15 bg-primary w-full max-w-[588px] max-lg:max-w-[450px] max-sm:max-w-[350px]'>
          <input type="email" placeholder='Your Email Address' className='w-full bg-transparent ml-7 border-none outline-none regular-16' />
          <button className='btn_dark_rounded'>Subscribe</button>
        </div>
      </div>
    </section>
  )
}

export default NewsLetter