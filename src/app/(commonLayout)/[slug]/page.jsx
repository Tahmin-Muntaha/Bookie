

import BookDetails from '@/app/components/BookDetails';
import Image from 'next/image';
import books from '@/data/trending'
import React from 'react';

const TrendingDetails = async({params}) => {
    const {slug}=  await params
    // const res=await fetch('/trending.json')
    // const books=await res.json()
    const book=books.find(b=>Number(b.id)===Number(slug))
    if(!book){
        return (
            <p>Book Not Found</p>
        )
    }
    return (
        <div>
           
          {
            <BookDetails key={book.id} b={book}></BookDetails>
          }
            
        </div>
    );
};

export default TrendingDetails;