import React from 'react';

const MaTemp3 = () => {
    return (
        <div className='relative w-[300px] h-[300px] '>
        {/* masking image  */}
        <div className="absolute overflow-hidden w-[203px] h-[300px] top-0 right-0">
        <img src="https://dn9g5fz2o8iu4.cloudfront.net/ga_fmls/res/fc78090504d5941a790c2240d869dfef-1.jpg?v=1690560446" alt="" className='h-full w-full object-cover' />
        </div>
        {/* shapes of the canvas  */}
        <div className="absolute top-0 bottom-0 left-0 right-0">
        <svg width="238" height="300" viewBox="0 0 238 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.38948 230.928C1.39954 229.672 0.619431 228.363 -1.52588e-05 227.055V68.0206C34.521 41.938 142.511 84.9683 101.242 0H174.449C126.273 45.8046 64.8709 100.965 117.033 105.101C120.155 105.349 123.683 105.413 127.646 105.281C204.511 102.741 227.407 120.015 228.789 145.625C232.251 209.739 185.143 256.36 201.916 283.609C205.664 289.699 214.371 297.396 238 300H101.072C88.3953 217.586 21.8036 255.554 2.38948 230.929V230.928Z" fill="url(#paint0_linear_0_1)"/>
            <path d="M101 300H0V227C0.612877 228.307 1.38469 229.619 2.36414 230.875C21.5723 255.519 88.4576 217.524 101 300Z" fill="url(#paint1_linear_0_1)"/>
            <path d="M101.696 0C143.151 84.9411 34.6759 41.9253 0 68V0H101.696Z" fill="url(#paint2_linear_0_1)"/>
            <defs>
            <linearGradient id="paint0_linear_0_1" x1="218" y1="373" x2="33.002" y2="-20.0915" gradientUnits="userSpaceOnUse">
            <stop stop-color="#5AAFFC"/>
            <stop offset="1" stop-color="#0047F9"/>
            </linearGradient>
            <linearGradient id="paint1_linear_0_1" x1="71.5" y1="300" x2="-1.46348e-05" y2="233" gradientUnits="userSpaceOnUse">
            <stop stop-color="#5AAFFC"/>
            <stop offset="1" stop-color="#0047F9"/>
            </linearGradient>
            <linearGradient id="paint2_linear_0_1" x1="101.672" y1="84.5467" x2="78.0164" y2="-18.8779" gradientUnits="userSpaceOnUse">
            <stop stop-color="#5AAFFC"/>
            <stop offset="1" stop-color="#0047F9"/>
            </linearGradient>
            </defs>
            </svg>





        </div>
        
    </div>
    );
};

export default MaTemp3;