import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import img from '../assets/bn.avif';
import img1 from '../assets/bn1.avif';
import Image from 'next/image';
const CallToAction = () => {
  return (
    <section className="bg-white py-12 mb-20">
      <div className="max-w-6xl mx-auto px-6 text-center md:text-left md:grid grid-cols-2  items-center gap-6">
        
        {/* Text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Find Your Next Cozy Read
          </h2>
          <p className="text-gray-700 mt-4">
            Explore our curated collections and discover books that will warm your heart 
            and spark your imagination. Every story is handpicked just for you.
          </p>
          <Link
            href="/all"
            className="inline-flex items-center gap-2 my-2 font-medium w-[50%] px-8 py-4 bg-[#f8b5c9] rounded-full text-white"
          >
            Explore Collection <ArrowRight className="w-5 h-5" />
          </Link>
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
    </section>
  );
};

export default CallToAction;
