import React from 'react';

const page = () => {
    return (
        <div>
            <div className="relative h-[400px] w-[400px]">
                {/* masking image  */}
                <div className="absolute overflow-hiden w-[232px] h-[400px] top-0 left-[168px]">
                    <img className='h-full w-full object-conver'  src="https://images.pexels.com/photos/237437/pexels-photo-237437.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>
                {/* shpae design  */}
                <div className="absolute top-0 bottom-0 left-0 right-0">
            
                    <svg width="296" height="400" viewBox="0 0 296 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M229.675 113.208C223.714 55.4809 188.322 13.6831 171.371 0H0V400H182.175C182.92 380.267 202.727 314.097 212.537 283.479C224.757 245.486 230.792 196.595 232.282 176.898C234.369 153.484 231.413 124.682 229.675 113.208Z" fill="#1A2736"/>
                    <path d="M296 402C207.041 334.822 60.0634 331.932 0 340.406V402H296Z" fill="#F9C700"/>
                    </svg>


                </div>
                <div className="absolute"></div>
            </div>
        </div>
    );
};

export default page;