import { Book } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center py-2 shadow-2xs mb-20'>
            <Link href="/">
            <div className='flex gap-2 items-center'><Book></Book>Bookie</div>
            </Link>
            <div className='flex gap-4 items-center'>
                <Link href="/">Home</Link>
                <Link href="/all">All Books</Link>
                <Link href="/login" className='hover:bg-[#f8b5c9] px-4 py-1 border border-gray rounded-full'>Log In</Link>
            </div>
        </div>
    );
};

export default Navbar;


/**
 * 
 * 
 * 
 *     #ffe0cc
 *     #f8b5c9  
 */