import React from 'react';
import bannerImage from '../../public/Images/Banner.png';
import Image from 'next/image';
import FullInterior from '@/Components/ServicesPageComponent/FullInterior';
import Designs from '@/Components/ServicesPageComponent/Designs';
import { useState } from 'react';

const Services = () => {
    const [cardVisibility, setCardVisiblity] = useState(false);

    const toggleCardVisibility = (cardShown) => {
        setCardVisiblity(!cardShown);
    }
    return (
        <div>
            <div>
                <Image src={bannerImage} alt="bannerImage" style={{ width: "100%", height: "50%" }} />
            </div>
            <FullInterior full_interior={true} cardVisiblity={toggleCardVisibility} visibility={cardVisibility} />
            <Designs visibility={cardVisibility} />
            <FullInterior full_interior={false} />
        </div>
    )
}

export default Services
