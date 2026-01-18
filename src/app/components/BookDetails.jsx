import Image from 'next/image';
import React from 'react';
import { Star } from 'lucide-react';

const BookDetails = ({ b }) => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-md mt-8">
      
      {/* Image */}
      <div className="w-full flex justify-center mb-6">
        <div className="relative w-[300px] h-[400px] rounded-xl overflow-hidden bg-[#ffe0cc]">
          <Image
            src={b.img}
            alt={b.bookName}
            width={300}      // fixed width
            height={400}     // fixed height
            className="object-cover"
          />
        </div>
      </div>

      {/* Title & Author */}
      <h1 className="text-3xl font-bold mb-2">{b.bookName}</h1>
      <p className="text-gray-500 text-lg mb-4">{b.author}</p>

      {/* Badges */}
      <div className="flex flex-wrap gap-3 mb-4 text-sm">
        <span className="bg-[#f8b5c9] text-white px-3 py-1 rounded-full">{b.category}</span>
        <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full">{b.language}</span>
      </div>

      {/* Rating & Price */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2 text-yellow-500 font-semibold">
          <Star size={20} /> {b.rating}
        </div>
        <div className="text-xl font-bold text-gray-800">${b.price}</div>
      </div>

      {/* Description */}
      <div className="text-gray-700 leading-relaxed text-lg">
        {b.description}
      </div>

    </div>
  );
};

export default BookDetails;
