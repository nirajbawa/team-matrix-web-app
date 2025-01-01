"use client"
import React from 'react';
import LoginForm from './LoginForm';
import Triangle from './Triangle';

function Login() {
    
    return (
        <div className='bg-[#3a0808] min-h-svh flex-col-reverse overflow-x-hidden lg:flex-row text-white flex w-full h-full gap-11 md:gap-36 pb-10 lg:px-28 justify-center items-center' 
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.34), rgba(0, 0, 0, 0.35)), linear-gradient(138deg, rgba(55, 27, 35, 0.59) 0%, rgba(62, 24, 29, 0.3) 12%, rgba(12, 6, 5, 0.53) 80%)` }}>
            <LoginForm/>
            <Triangle/>
        </div>
    )
}

export default Login;