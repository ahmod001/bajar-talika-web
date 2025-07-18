import React from 'react';
import { MockupImage } from './ui/MockupImage';
// import mockup from '../../../assets/mockup.png';
import mockup from '../../../assets/mockup.jpg';


const Mockup = () => {
    return (
        <div className="lg:w-1/2 flex justify-center relative">
            <div className="relative w-52 lg:w-[16rem] 2xl:w-[19rem] h-auto">
                <MockupImage src={mockup} alt="Bazar Talika App Mockup" priority />
            </div>
        </div>
    );
};

export default Mockup;