import Image from 'next/image';
import React from 'react';
import img from '../assets/bn.avif';
import img1 from '../assets/bn1.avif';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const Banner = () => {
  return (
    <section className=" py-12 mb-20">
      <div className="md:grid grid-cols-2 items-center gap-8 max-w-6xl mx-auto px-6">
        {/* Image */}
        <div className='relative'>
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
        {/* Text */}
        <div className="flex flex-col justify-center gap-4">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Read Something <span className="text-[#f8b5c9]">lovely</span> today.
          </h1>

          <p className="text-gray-700">
            Discover our hand-picked collection of cozy reads and heartwarming stories.
          </p>

          <Link
            href="/all"
            className="inline-flex items-center gap-2  font-medium w-[40%] px-8 py-4 bg-[#f8b5c9] rounded-full text-white"
          >
            Shop Collection <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
