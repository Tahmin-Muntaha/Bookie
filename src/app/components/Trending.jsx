import React from "react";
import BookCard from "./BookCard";
import books from '@/data/trending.json'
const Trending = async () => {
  // const res = await fetch("/trending.json");
  // const books = await res.json();

  return (
    <div className="mb-20">
      <div className="text-3xl md:text-4xl  text-center font-semibold text-gray-900 mb-8">
        Trending Books
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {books.map((book) => (
          <BookCard key={book.id} book={book}></BookCard>
        ))}
      </div>
    </div>
  );
};

export default Trending;
