import Image from 'next/image';
import React from 'react';
import colImg1 from '../assets/r.avif';
import colImg2 from '../assets/a.avif';

const FeaturedCollections = () => {
  return (
    <div className="md:grid grid-cols-2 items-center gap-8 max-w-6xl mx-auto px-6 mb-20">

      {/* Text Section */}
      <div>
        <h2 className="text-3xl md:text-4xl text-center font-semibold text-gray-900">
          Featured Collections
        </h2>

        <p className="text-gray-700 mt-4">
          Explore our specially curated collections to find books that perfectly match your mood.  
          From heartwarming stories to cozy adventures, each collection is handpicked with care.  
          <span className="text-[#f8b5c9] font-medium"> Discover your next favorite read today!</span>
        </p>

        <p className="mt-3 text-[#f8b5c9] font-semibold italic">
          Curated collections for every cozy moment.
        </p>
      </div>

      {/* Images Section */}
      <div className='relative hidden md:block'>
        {/* First collection image */}
        <div className="relative flex justify-center md:justify-start -rotate-20 md:-rotate-30">
          <Image
            src={colImg1}
            width={300}
            height={180}
            alt="Collection 1"
            className="rounded-lg"
          />
        </div>

        {/* Second collection image */}
        <div className="z-10 relative -top-18 md:-top-8 left-40 md:left-50 flex justify-center md:justify-start rotate-12 md:rotate-10">
          <Image
            src={colImg2}
            width={300}
            height={180}
            alt="Collection 2"
            className="rounded-lg"
          />
        </div>
      </div>

    </div>
  );
};

export default FeaturedCollections;
