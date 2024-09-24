import React from 'react';

const MaTemp9 = () => {
    return (
        <div className='relative w-[300px] h-[300px] '>
        {/* masking image  */}
        <div className="absolute overflow-hidden w-[180px] h-[280px] bottom-0 right-0">
        <img src="https://dn9g5fz2o8iu4.cloudfront.net/ga_fmls/res/fc78090504d5941a790c2240d869dfef-1.jpg?v=1690560446" alt="" className='h-full w-full object-cover' />
        </div>
        {/* shapes of the canvas  */}
        <div className="absolute top-0 bottom-0 left-0 right-0">
        <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M136.323 176.339C129.869 170.822 129.155 160.113 134.801 153.552L211.714 64.1552L183.312 43.3598C177.443 39.0617 176.788 30.5432 181.931 25.3986L207.33 0H0V203.451L20.9453 169.13C38.0758 141.06 72.3474 134.907 96.254 155.608L263 299.998H280.947L136.323 176.337V176.339Z" fill="#414199"/>
            <path d="M183.31 43.3598L211.712 64.1552L238.085 33.5044C250.727 18.8113 271.009 17.1005 285.42 29.5097L300 42.0653V0H207.33L181.931 25.3986C176.787 30.5432 177.443 39.0617 183.312 43.3598H183.31Z" fill="#FFCB05"/>
            <path d="M20.9453 169.13L0 203.451V300H263L96.254 155.61C72.3457 134.908 38.0758 141.06 20.9453 169.132V169.13Z" fill="#FFCB05"/>
            </svg>
        </div>
        
    </div>
    );
};

export default MaTemp9;