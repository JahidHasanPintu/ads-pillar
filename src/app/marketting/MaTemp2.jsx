import React from 'react';

const MaTemp2 = () => {
    return (
        <div className='relative w-[300px] h-[300px] '>
        {/* masking image  */}
        <div className="absolute overflow-hidden w-[166px] h-[207px] top-0 right-0">
        <img src="https://img.freepik.com/premium-photo/portrait-beautiful-muslim-woman-hijab-fashion-model-posing-studiojpg_994418-12291.jpg" alt="" className='h-full w-full object-cover' />
        </div>
        {/* shapes of the canvas  */}
        <div className="absolute top-0 bottom-0 left-0 right-0">
        <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="134" height="300" fill="black"/>
<rect x="134" y="207" width="166" height="93" fill="#EEC5B1"/>
</svg>



        </div>
        
    </div>
    );
};

export default MaTemp2;