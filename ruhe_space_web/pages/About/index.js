import React from 'react';
import Discovery from '@/Components/AboutPageComponent/Discovery';
import AboutUs from '@/Components/AboutPageComponent/AboutUs';
import OurExperts from '../HomePage/OurExperts';
import OurServices from '@/Components/AboutPageComponent/OurServices';

const About = () => {
    return (
        <div>
            <Discovery />
            <AboutUs />
            <OurExperts showExperts={false} />
            {/* <OurServices /> */}
        </div>
    )
}

export default About