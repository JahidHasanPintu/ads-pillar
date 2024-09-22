import React from 'react';

const page = () => {
    return (
        <div className='relative w-[400] h-[400] '>
            {/* masking image  */}
            <div className="absolute overflow-hidden w-[158px] h-[259.83px] top-[65.33px] left-[214.65px] ">
            <img src="https://st4.depositphotos.com/36511404/38390/i/450/depositphotos_383909766-stock-photo-closeup-beautiful-female-muslim-model.jpg" alt="" className='h-full w-full object-cover' />
            </div>
            {/* shapes of the canvas  */}
            <div className="absolute top-0 bottom-0 left-0 right-0">
            <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H400V400H0V0ZM372.646 65.333H214.646V325.166H372.646V65.333Z" fill="#032859"/>
            <mask id="mask0_0_1" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="313" y="26" width="80" height="78">
            <path d="M313.359 26.8545H392.359V103.479H313.359V26.8545Z" fill="black"/>
            </mask>
            <g mask="url(#mask0_0_1)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M313.359 24.8545H311.359V26.8545V65.333H315.359V28.8545H390.781V101.48H372.646V105.48H392.781H394.781V103.48V26.8545V24.8545H392.781H313.359Z" fill="white"/>
            </g>
            <mask id="mask1_0_1" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="185" y="289" width="80" height="78">
            <path d="M185.385 289.562H264.385V366.188H185.385V289.562Z" fill="black"/>
            </mask>
            <g mask="url(#mask1_0_1)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M214.646 287.562H185.385H183.385V289.562V366.188V368.188H185.385H264.807H266.807V366.188V325.166H262.807V364.188H187.385V291.562H214.646V287.562Z" fill="white"/>
            </g>
            <path d="M29.3384 374H43.9217V385.062H29.3384V374Z" fill="black"/>
            <path d="M48.4478 374H63.0155V385.062H48.4478V374Z" fill="white"/>
            <path d="M67.5625 374H82.125V385.062H67.5625V374Z" fill="#0C4189"/>
            <mask id="mask2_0_1" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="206" y="54" width="175" height="282">
            <path d="M206.854 54.8857H380.068V335.323H206.854V54.8857Z" fill="black"/>
            </mask>
            <g mask="url(#mask2_0_1)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M380.068 54.8857H206.854V335.006H380.068V54.8857ZM372.646 65.333H214.646V325.166H372.646V65.333Z" fill="white"/>
            </g>
            <rect x="28" y="-12" width="103" height="70" fill="white"/>
            </svg>

            </div>
            
        </div>
    );
};

export default page;