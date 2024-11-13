"use client"
import React from 'react';
import LoginForm from './LoginForm';
import Triangle from './Triangle';

function Login() {
    
    return (
        <div className='bg-[#3a0808] min-h-svh flex-col-reverse overflow-x-hidden lg:flex-row text-white flex w-full h-full gap-36 pb-10 lg:px-28 justify-center items-center' style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(135deg, rgba(55,27,35,0.8688725490196079) 0%, rgba(62,24,29,0.7120098039215687) 12%, rgba(12,6,5,0.633578431372549) 80%)` }}>
            <LoginForm/>
            <Triangle/>
        </div>
    )
}

export default Login;