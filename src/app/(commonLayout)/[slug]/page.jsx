import BookDetails from '@/app/components/BookDetails';
import Image from 'next/image';
import React from 'react';

const TrendingDetails = async({params}) => {
    const {slug}= await params
    const res=await fetch('http://localhost:3000/trending.json')
    const books=await res.json()
    const book=books.filter(b=>b.id===Number(slug))
    console.log(book)
    return (
        <div>
           
           {
            book.map(b=><BookDetails key={b.id} b={b}></BookDetails>)
           }
            
        </div>
    );
};

export default TrendingDetails;