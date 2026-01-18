import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BookCard = ({ book }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden border border-gray-100 flex flex-col">
      
      
      <div className="relative h-[260px] w-full bg-[#ffe0cc]">
        <Image
          src={book.img}          
          alt={book.bookName}
          fill
          className="object-cover"
        />
      </div>

      
      <div className="p-5 flex flex-col flex-1">
        
        <h1 className="text-lg font-semibold line-clamp-2">
          {book.bookName}
        </h1>

        
        <p className="text-sm text-gray-500 mt-1">{book.author}</p>

       
        <div className="flex flex-wrap gap-2 mt-3 text-xs">
          <span className="bg-[#f8b5c9] text-white px-2 py-1 rounded-full">
            {book.category}
          </span>
          <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full">
            {book.language}
          </span>
        </div>

        
        <div className="flex justify-between items-center mt-3">
          <span className="flex gap-2 text-yellow-500 font-semibold">
            <Star></Star>{book.rating}
          </span>
          <span className="font-semibold text-gray-800">
            ${book.price}
          </span>
        </div>

       
        <Link
          href={`/all/${book.id}`}
          className="mt-4 inline-block text-center w-full bg-[#f8b5c9] hover:bg-[#f3a8c0] text-white py-2 rounded-lg font-medium transition"
        >
          View Details →
        </Link>
      </div>
    </div>
  );
};

export default BookCard;
