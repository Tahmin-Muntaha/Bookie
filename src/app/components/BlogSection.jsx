import Image from 'next/image';
import React from 'react';
import blogImg1 from '../assets/a.avif';
import blogImg2 from '../assets/a1.avif';

const BlogSection = () => {
  return (
    <div className="md:grid grid-cols-2 items-center gap-8 max-w-6xl mx-auto px-6 mb-20">
 {/* Images Section */}
      <div className='relative hidden md:block'>
        {/* First blog image */}
        <div className="relative flex justify-center md:justify-start -rotate-20 md:-rotate-30">
          <Image
            src={blogImg1}
            width={300}
            height={180}
            alt="Blog Post 1"
            className="rounded-lg"
          />
        </div>

        {/* Second blog image */}
        <div className="z-10 relative -top-18 md:-top-8 left-40 md:left-50 flex justify-center md:justify-start rotate-12 md:rotate-10">
          <Image
            src={blogImg2}
            width={300}
            height={180}
            alt="Blog Post 2"
            className="rounded-lg"
          />
        </div>
      </div>
      {/* Text Section */}
      <div>
        <h2 className="text-3xl md:text-4xl text-center font-semibold text-gray-900">
          From Our Blog
        </h2>

        <p className="text-gray-700 mt-4">
          Stay updated with cozy reading tips, author interviews, and handpicked book recommendations. 
          Our blog brings you closer to the stories and authors you’ll love. 
          <span className="text-[#f8b5c9] font-medium"> Discover, read, and get inspired!</span>
        </p>

        <p className="mt-3 text-[#f8b5c9] font-semibold italic">
          Stories, insights, and cozy moments.
        </p>
      </div>

     

    </div>
  );
};

export default BlogSection;
