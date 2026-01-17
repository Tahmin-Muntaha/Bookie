import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const layout = ({children}) => {
    return (
        <div className='max-w-350 md:mx-auto py-4 px-12'>
            <Navbar></Navbar>
            <div className=''>{children}</div>
            <Footer></Footer>
        </div>
    );
};

export default layout;