import Image from 'next/image';
import React from 'react';
import reviewer1 from '../assets/r.avif';
import reviewer2 from '../assets/r2.avif';

const Reviews = () => {
  return (
    <section className="md:grid grid-cols-2 items-center gap-8 max-w-6xl mx-auto px-6 mb-20">
      {/* Images Section */}
      <div className="relative hidden md:block">
        {/* First reviewer image */}
        <div className="relative flex justify-center md:justify-start -rotate-20 md:-rotate-30">
          <Image
            src={reviewer1}
            width={300}
            height={180}
            alt="Reviewer 1"
            className="rounded-lg"
          />
        </div>

        {/* Second reviewer image */}
        <div className="z-10 relative -top-18 md:-top-8 left-40 md:left-50 flex justify-center md:justify-start rotate-12 md:rotate-10">
          <Image
            src={reviewer2}
            width={300}
            height={180}
            alt="Reviewer 2"
            className="rounded-lg"
          />
        </div>
      </div>
      {/* Text Section */}
      <div>
        <h2 className="text-3xl md:text-4xl text-center font-semibold text-gray-900">
          What Our Readers Say
        </h2>

        <p className="text-gray-700 mt-4">
          Hear from our cozy book lovers! Our readers share their experiences, favorite stories, and why they love 
          the handpicked collections from <span className="text-[#f8b5c9] font-medium">Cozy Bookstore</span>.
        </p>

        <div className="mt-6 flex flex-col gap-4">
          {/* Review 1 */}
          <div className=" p-4 rounded-lg">
            <p className="text-gray-800 italic">"I found the perfect books for my evenings! Every story feels like a warm hug."</p>
            <p className="text-gray-900 font-semibold mt-2">— Sarah L.</p>
          </div>

          {/* Review 2 */}
          <div className=" p-4 rounded-lg">
            <p className="text-gray-800 italic">"The selection is amazing. Cozy Bookstore makes reading truly relaxing and fun."</p>
            <p className="text-gray-900 font-semibold mt-2">— James K.</p>
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default Reviews;
