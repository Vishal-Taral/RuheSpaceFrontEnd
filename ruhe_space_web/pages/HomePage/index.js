import React from 'react'
import Carousels from './Carousels'
import WelCome from './Welcome'
import LatestProject from './LatestProject'
import WhoWeAre from './WhoWeAre'
import OurExperts from './OurExperts'
import LatestBlog from './LatestBlog'
import SomeFacts from './SomeFacts'
import Testimonials from './Testimonials'
import OurClient from './OurClient'

const HomePage = () => {
    return (
        <div className='mb-5'>
            <Carousels />
            <WelCome />
            <LatestProject />
            <WhoWeAre />
            <OurExperts />
            <LatestBlog />
            <SomeFacts />
            <Testimonials />
            <OurClient />
        </div>
    )
}

export default HomePage;
