import React from 'react';
const Login = () => {
    return (
        <div>
		<h1 className='text-6xl my-20 font-bold text-yellow-400'>Welcome</h1>
        <div className='w-80 sm:w-80 mx-auto my-5'>
            <form action="" className='flex flex-col space-y-5'>
                <input className='py-3 rounded-md border-2 border-gray-900 font-bold' type="text" placeholder='Email' required/>
                <input className='py-3 rounded-md border-2 border-gray-900 font-bold' type="password" placeholder='password' required />
                <button className='w-32 text-xl text-white font-bold py-2 rounded-md border-2 bg-sky-500 hover:bg-sky-700' type="submit" id="login-button">Login</button>
                <div className="icon">
            
            <p className='text-left mb-2'>login with google
       
                <svg className='w-5 mt-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"> <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/></svg>
          
            </p>       

        </div>
                <a href="/registration" className='w-32 text-sm text-dark font-bold py-2 rounded-md border-2 hover:bg-sky-700'>Registration</a>
            </form>    
        </div>
        </div>
    );
};

export default Login;