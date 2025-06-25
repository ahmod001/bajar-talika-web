import React from 'react';
import { FloatingCircle } from './ui/FloatingCircle';
import { MockupImage } from './ui/MockupImage';
import mockup from '../../../assets/mockup.jpg';


const Mockup = () => {
    return (
        <div className="lg:w-1/2 flex lg:justify-end justify-center relative">
            <div className="relative w-60 lg:w-80 xl:w-[23rem] h-auto">
                <MockupImage src={mockup} alt="Bazar Talika App Mockup" priority />
                <FloatingCircle size="lg" position="bottom-left" />
                <FloatingCircle size="md" position="top-right" />
            </div>
        </div>
    );
};

export default Mockup;