import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center'>
            <div>Bookie</div>
            <div>
                <Link href="/">Home</Link>
            </div>
        </div>
    );
};

export default Navbar;