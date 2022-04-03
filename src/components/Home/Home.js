import React from 'react';
import BoCarousel from '../Carousel/BoCarousel';
import "./Home.css"
import VideoCarousel from '../VideoCarousel/VideoCarousel';
import SectionTitle from "../SectionTitle/SectionTitle";
const Home = () => {
    return (
        <div className='hompage_area'>
           <BoCarousel/>

            <SectionTitle  title="VIDEOS FOR PLANT BAGAN"/>
            <VideoCarousel/>
        </div>
    );
};

export default Home;