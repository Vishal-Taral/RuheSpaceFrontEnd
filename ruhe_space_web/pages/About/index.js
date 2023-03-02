import React from 'react';
import Discovery from '@/Components/AboutPageComponent/Discovery';
import AboutUs from '@/Components/AboutPageComponent/AboutUs';
import OurExperts from '../HomePage/OurExperts';
import OurServices from '@/Components/AboutPageComponent/OurServices';
import OurStory from '@/Components/AboutPageComponent/OurStory';

const About = () => {
    return (
        <div>
            <Discovery />
            <AboutUs />
            <OurExperts showExperts={false} />
            <OurServices />
            <OurStory />
        </div>
    )
}

export default About