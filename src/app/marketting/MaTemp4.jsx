import React from 'react';

const MaTemp4 = () => {
    return (
        <div className='relative w-[300px] h-[300px] '>
        {/* masking image  */}
        <div className="absolute overflow-hidden w-[158.93px] h-[254.17px] top-0 right-0">
        <img src="https://img.freepik.com/premium-photo/portrait-beautiful-muslim-woman-hijab-fashion-model-posing-studiojpg_994418-12291.jpg" alt="" className='h-full w-full object-cover' />
        </div>
        {/* shapes of the canvas  */}
        <div className="absolute top-0 bottom-0 left-0 right-0">
            <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M255.822 251.682C237.99 258.816 217.56 250.062 210.426 232.23L143.538 65.064C143.196 64.212 142.902 63.354 142.632 62.49C137.268 45.306 146.004 26.46 162.99 19.662L212.142 0H188.064L153.69 13.752C138.168 19.962 129.066 35.568 130.29 51.45C130.572 55.122 131.406 58.812 132.846 62.4L204.516 241.53C212.16 260.64 234.054 270.018 253.164 262.374L300.006 243.636V234L255.828 251.676L255.822 251.682Z" fill="url(#paint0_linear_0_1)"/>
            <path d="M130.284 51.456C129.06 35.574 138.162 19.968 153.684 13.758L188.064 0H0V116.424L58.5 57.924C77.952 38.472 108.396 36.33 130.29 51.456H130.284Z" fill="url(#paint1_linear_0_1)"/>
            <path opacity="0.79" d="M300 300V243.636L253.158 262.374C234.048 270.018 212.154 260.64 204.51 241.53L132.84 62.4004C131.406 58.8124 130.572 55.1224 130.284 51.4504C108.39 36.3244 77.946 38.4724 58.494 57.9184L0 116.424V300H300Z" fill="url(#paint2_linear_0_1)"/>
            <defs>
            <linearGradient id="paint0_linear_0_1" x1="374" y1="153" x2="232.284" y2="281.056" gradientUnits="userSpaceOnUse">
            <stop stop-color="#7D27F7"/>
            <stop offset="1" stop-color="#64ADDC"/>
            </linearGradient>
            <linearGradient id="paint1_linear_0_1" x1="22.5" y1="-41" x2="115" y2="70" gradientUnits="userSpaceOnUse">
            <stop stop-color="#7D27F7"/>
            <stop offset="1" stop-color="#64ADDC"/>
            </linearGradient>
            <linearGradient id="paint2_linear_0_1" x1="-92.5" y1="-69.4996" x2="281.5" y2="339" gradientUnits="userSpaceOnUse">
            <stop stop-color="#7D27F7"/>
            <stop offset="1" stop-color="#64ADDC"/>
            </linearGradient>
            </defs>
            </svg>





        </div>
        
    </div>
    );
};

export default MaTemp4;