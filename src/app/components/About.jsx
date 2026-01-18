import Image from 'next/image';
import React from 'react';
import img from '../assets/a.avif';
import img1 from '../assets/a1.avif';
const About = () => {
    return (
        <div className="md:grid grid-cols-2 items-center gap-8 max-w-6xl mx-auto px-6 mb-20">
            <div>
            <h2 className="text-3xl md:text-4xl  text-center font-semibold text-gray-900">
  Our Mission
</h2>
<p className="text-gray-700 mt-4">
  At <span className="text-[#f8b5c9] font-medium">Cozy Bookstore</span>, we handpick books 
  that warm your heart and inspire your mind. From timeless classics to the latest cozy reads, 
  our mission is to make your reading experience delightful and memorable.
</p>
<p className="mt-3 text-[#f8b5c9] font-semibold italic">
  Curated reads, cozy moments.
</p>

        </div>



        <div className='relative hidden md:block'>
                    <div className="relative  flex justify-center md:justify-start -rotate-20 md:-rotate-30">
                  <Image
                    src={img}
                    width={300}
                    height={180}
                    alt="Banner"
                    className="rounded-lg  "
                  />
                </div>
                <div className="z-10 relative -top-18 md:-top-8 left-40 md:left-50 flex justify-center md:justify-start rotate-12 md:rotate-10">
                  <Image
                    src={img1}
                    width={300}
                    height={180}
                    alt="Banner"
                    className="rounded-lg "
                  />
                </div>
        
                </div>
        </div>
        

    );
};

export default About;