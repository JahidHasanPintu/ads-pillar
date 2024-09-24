import React from 'react';

const MaTemp8 = () => {
    return (
        <div className='relative w-[300px] h-[300px] '>
        {/* masking image  */}
        <div className="absolute overflow-hidden w-[180px] h-[274.17px] bottom-0 left-0">
        <img src="https://dn9g5fz2o8iu4.cloudfront.net/ga_fmls/res/fc78090504d5941a790c2240d869dfef-1.jpg?v=1690560446" alt="" className='h-full w-full object-cover' />
        </div>
        {/* shapes of the canvas  */}
        <div className="absolute top-0 bottom-0 left-0 right-0">
            <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M114.476 44.8759L121.658 21.1911C122.678 17.8232 125.789 15.5128 129.31 15.5128H300V0H0V43.8124H108.969C110.9 43.8124 112.758 44.1913 114.476 44.882V44.8759Z" fill="url(#paint0_linear_0_1)"/>
            <path d="M129.31 15.5186C125.789 15.5186 122.678 17.8229 121.657 21.1968L114.476 44.8817C118.351 46.4403 121.48 49.6003 122.929 53.7016L168.398 183.006C169.058 184.876 167.67 186.838 165.684 186.838H152.243L156.014 197.449L177.56 258.033H300V15.5186H129.31Z" fill="url(#paint1_linear_0_1)"/>
            <path d="M168.398 183.006L122.929 53.7021C121.486 49.5947 118.351 46.4346 114.476 44.8821C112.758 44.1915 110.894 43.8125 108.969 43.8125H0V54.8573H94.8617C101.121 54.8573 106.707 58.7997 108.804 64.698L136.015 141.205L152.243 186.838H165.684C167.664 186.838 169.058 184.876 168.398 183.006Z" fill="url(#paint2_linear_0_1)"/>
            <path d="M177.566 258.027H154.364C149.639 258.027 145.501 261.175 144.236 265.729L134.726 300H300V258.027H177.56H177.566Z" fill="url(#paint3_linear_0_1)"/>
            <defs>
            <linearGradient id="paint0_linear_0_1" x1="341.062" y1="-26.8938" x2="-5.50099" y2="108.798" gradientUnits="userSpaceOnUse">
            <stop stop-color="#14224C"/>
            <stop offset="1" stop-color="#14338E"/>
            </linearGradient>
            <linearGradient id="paint1_linear_0_1" x1="65.0949" y1="-9.47431" x2="420.032" y2="37.721" gradientUnits="userSpaceOnUse">
            <stop stop-color="#7D27F7"/>
            <stop offset="1" stop-color="#64ADDC"/>
            </linearGradient>
            <linearGradient id="paint2_linear_0_1" x1="-39.7294" y1="11.0021" x2="117.66" y2="181.533" gradientUnits="userSpaceOnUse">
            <stop stop-color="#14224C"/>
            <stop offset="1" stop-color="#14338E"/>
            </linearGradient>
            <linearGradient id="paint3_linear_0_1" x1="134.726" y1="279.014" x2="300" y2="279.014" gradientUnits="userSpaceOnUse">
            <stop stop-color="#14224C"/>
            <stop offset="1" stop-color="#14338E"/>
            </linearGradient>
            </defs>
            </svg>



        </div>
        
    </div>
    );
};

export default MaTemp8;