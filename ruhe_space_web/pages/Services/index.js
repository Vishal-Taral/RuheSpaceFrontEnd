import React from 'react';
import bannerImage from '../../public/Images/Banner.png';
import Image from 'next/image';
import FullInterior from '@/Components/ServicesPageComponent/FullInterior';

const Services = () => {
    return (
        <div>
            <div>
                <Image src={bannerImage} alt="bannerImage" width="100%" height={370} />
            </div>
            <FullInterior />
        </div>
    )
}

export default Services
