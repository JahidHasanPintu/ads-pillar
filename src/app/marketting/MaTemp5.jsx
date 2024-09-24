import React from 'react';

const MaTemp5 = () => {
    return (
        <div className='relative w-[300px] h-[300px] '>
        {/* masking image  */}
        <div className="absolute overflow-hidden w-[191.55px] h-[300px] top-0 right-0">
        <img src="https://img.freepik.com/premium-photo/portrait-beautiful-muslim-woman-hijab-fashion-model-posing-studiojpg_994418-12291.jpg" alt="" className='h-full w-full object-cover' />
        </div>
        {/* shapes of the canvas  */}
        <div className="absolute top-0 bottom-0 left-0 right-0">
       
        <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H263.853H284.891L108.451 165.522L267.457 300H246.419H0V0Z" fill="#142B71"/>
        <path d="M300 5.55819V0H284.891L108.451 165.522L267.457 300H288.495L129.489 165.522L300 5.55819Z" fill="url(#paint0_linear_0_1)"/>
        <defs>
        <linearGradient id="paint0_linear_0_1" x1="108.451" y1="150.04" x2="300" y2="150.04" gradientUnits="userSpaceOnUse">
        <stop stop-color="#FFBF1E"/>
        <stop offset="1" stop-color="#FF9138"/>
        </linearGradient>
        </defs>
        </svg>



        </div>
        
    </div>
    );
};

export default MaTemp5;