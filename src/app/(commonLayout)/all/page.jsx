import AllBookCard from '@/app/components/AllBookCard';
import React from 'react';

const AllPage = async() => {
    const res=await fetch('http://localhost:3000/allbook.json')
    const books=await res.json()

    return (
        <div className='mb-20'>
            <div className="text-3xl md:text-4xl my-4 text-center font-semibold text-gray-900">All Books</div>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                {
                    books.map(book=><AllBookCard key={book.id} book={book}></AllBookCard>)
                }
            </div>
        </div>
    );
};

export default AllPage;