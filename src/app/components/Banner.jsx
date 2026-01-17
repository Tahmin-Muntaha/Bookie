import Image from 'next/image';
import React from 'react';
import img from '../assets/bn.jpg'
const Banner = () => {
    return (
        <div>
            <Image src={img} width={200} height={100} alt="Banner"></Image>
        </div>
    );
};

export default Banner;