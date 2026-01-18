import React from 'react';
import Banner from '../components/Banner';
import About from '../components/About';
import Reviews from '../components/Reviews';
import CallToAction from '../components/CallToAction';
import BlogSection from '../components/BlogSection';
import FeaturedCollections from '../components/FeaturedCollections';
import Trending from '../components/Trending';

const page = () => {
    return (
        <div>
            <Banner></Banner>
            <Trending></Trending>
            <About></About>
            <Reviews></Reviews>
            <CallToAction></CallToAction>
            <BlogSection></BlogSection>
            <FeaturedCollections></FeaturedCollections>
        </div>
    );
};

export default page;