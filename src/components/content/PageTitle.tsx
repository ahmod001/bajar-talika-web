import React, { PropsWithChildren } from 'react';
import Link from 'next/link';
import { IoChevronBack } from 'react-icons/io5';

// GoToHomepage Component
const GoToHomepage = () => {
  return (
    <Link href="/" className="mt-1 mr-3 py-1">
      <IoChevronBack className="md:text-3xl text-2xl " />
    </Link>
  );
};
GoToHomepage.displayName = 'GoToHomepage';

// Main PageTitle Component
const PageTitle = ({ children }: PropsWithChildren) => {
  return (
    <header className='bg-gradient-to-r from-[#1F6B38] to-[#144B26] py-5 px-3.5 sticky top-0'>
      <h3 className="md:text-4xl text-2xl font-semibold text-white container mx-auto flex items-center">
        <GoToHomepage />
        {children}
      </h3>
    </header>
  );
};
PageTitle.displayName = 'PageTitle';

export default PageTitle;