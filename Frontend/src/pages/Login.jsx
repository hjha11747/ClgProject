import React ,{useState} from 'react'

const Login = () => {


  const [state, setState] = useState('Login');
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const login = async () => {
    
    try {
      const response = await fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      const responseData = await response.json();
  
      if (response.ok) {
        if (responseData.token) {
          localStorage.setItem('auth-token', responseData.token);
          window.location.replace('/');
        } else {
          alert('Please Sign Up first to Login ');
        }
      } else {
        // Check if the response contains error information
        if (responseData && responseData.error) {
          alert(responseData.error);
        } else {
          alert('An error occurred during login.');
        }
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('An error occurred during login. Please try again later.');
    }
  };
  



  const signup = async () => {
    console.log('sign function executed', formData);
    
    try {
      const response = await fetch('http://localhost:4000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
       
      const responseData = await response.json();
  
      if (response.ok) {
        localStorage.setItem('auth-token', responseData.token);
        window.location.replace('/');
      } else {
        // Check if the response contains error information
        if (responseData && responseData.error) {
          alert(responseData.error);
        } else {
          alert('An error occurred during signup.');
        }
      }
    } catch (error) {
      console.error('Error during signup:', error);
      alert('An error occurred during signup. Please try again later.');
    }
  };
  


  return (
    <section className=' max_padd_container flexCenter flex-col pt-32'>
      <div className='max-w-[555px] h-[530px] bg-white m-auto px-14 py-10 rounded-md ' >
        <h3 className='h3'>{state}</h3>
        <div className='flex flex-col gap-4 mt-7'>
        {state === 'Sign Up' ? <input type="text" placeholder='Your Name' name='username' value={formData.username} onChange={changeHandler} className='h-12 w-full pl-5 bg-slate-900/5 outline-none rounded-xl'/> : ''}
          <input type="email" name='email' placeholder='Your Email' value={formData.email} onChange={changeHandler} className='h-12 w-full pl-5 bg-slate-900/5 outline-none rounded-xl'/>
          <input type="password" name='password' placeholder='Password' value={formData.password} onChange={changeHandler} className='h-12 w-full pl-5 bg-slate-900/5 outline-none rounded-xl'/>
        </div>
        <button onClick={() => {state==="Login" ? login() :signup()}} className='btn_dark_rounded my-5 w-full !rounded-md' >Continue</button>
        {state === 'Sign Up' ? <p className='text-black font-bold'>Already have an Account? <span  onClick={()=> {setState("Login")}}className='text-secondary underline cursor-pointer'>Login</span> </p>:<p className='text-black font-bold'>Create an Account? <span onClick={ () =>{ setState("Sign Up")}} className='text-secondary underline cursor-pointer'>Click here</span> </p>}

        <div className='flexCenter mt-6 gap-3'>
          <input type="checkbox" name='' id='' />
          <p>By continuing, i agree the terms, condition and policy </p>
        </div>
      </div>
    </section>
  )
}

export default Login