import React,{useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

const Offer = () => {
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate('/womens');
    };
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className='bg-slate-300 bg-cover w-[90%] flex justify-between items-center mx-auto rounded-lg  max-sl:h-[200px]'>
            <div className='px-24 py-24 max-lg:px-14 max-md:px-10 max-sm:px-4 text-center'>
                <h2 className='h2 max-xl:h3 max-md:text-[28px] '>Summer Sale 50%</h2>
                <h3 className='h3 capitalize max-xl:text-[25px] max-md:text-[20px]'>Mens Leather Formal Shoes Wear</h3>
                <button onClick={handleNavigation} className='btn_dark_rounded'>Go To Store</button>
            </div>
            <div>
                <img
                    src="https://images.unsplash.com/photo-1488161628813-04466f872be2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fG1vZGVsJTIwZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D"
                    className='w-[400px] h-[450px] max-lg:h-[380px] max-md:h-[350px] max-lg:w-[330px] max-md:w-[300px] rounded-lg max-sl:hidden'
                    alt=""
                />
            </div>
        </section>
    );
}

export default Offer;
