import React, { PropsWithChildren } from 'react';

const PageTitle = ({ children }: PropsWithChildren) => {
    return (
        <header className='bg-[#f9fafb] py-5 px-3.5 sticky top-0' >
            <h3 className="md:text-4xl text-2xl font-semibold  text-black container  mx-auto ">
                {children}
            </h3>
        </header>
    );
};

export default PageTitle;