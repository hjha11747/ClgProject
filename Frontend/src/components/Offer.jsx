import React,{useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

const Offer = () => {
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate('/mens');
    };
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className='bg-slate-300 bg-cover w-[90%] flex justify-between items-center mx-auto rounded-lg  max-sl:h-[200px]'>
            <div className='px-24 py-24 max-lg:px-14 max-md:px-10 max-sm:px-4 text-center'>
                <h2 className='text-[37px] font-bold max-xl:h3 max-md:text-[28px] '>Summer Sale 50% Off</h2>
                <h3 className='text-[27px] font-semibold py-2 capitalize max-xl:text-[25px] max-md:text-[20px]'>On the Fertilizers</h3>
                <button onClick={handleNavigation} className='btn_dark_rounded'>Go To Store</button>
            </div>
            <div>
                <img
                    src="https://c0.wallpaperflare.com/preview/218/590/515/rice-cultivation-rice-fields-english-farmers-agriculture.jpg"
                    className='w-[1000px] h-[450px] max-lg:h-[380px] max-md:h-[350px] max-lg:w-[330px] max-md:w-[300px] rounded-lg max-sl:hidden'
                    alt=""
                />
            </div>
        </section>
    );
}

export default Offer;
