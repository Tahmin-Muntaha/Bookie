import BookDetails from "@/app/components/BookDetails";
import React from "react";
import books from "@/data/allbook.json"
const AllDetails = async ({ params }) => {
  const { slug } = await params;
  // const res = await fetch("/allbook.json");
  // const books = await res.json();
  const book = books.filter((b) => b.id === Number(slug));
  return (
    <div>
      {book.map((b) => (
        <BookDetails key={b.id} b={b}></BookDetails>
      ))}
    </div>
  );
};

export default AllDetails;
