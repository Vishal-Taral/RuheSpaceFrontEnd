import React from 'react';
import Image from 'next/image';
import Img01 from '../../public/Images/Img01.png';
import Img02 from '../../public/Images/Img02.png';
import styles from '../../styles/HowItWorksStyles/SimplerImagesStyles/SimplerImages.module.scss';
import bannerImage from '../../public/Images/Banner.png';

const SimplerImages = () => {
    return (
        <div className={`${styles.simpler_images}`}>
            <div className='mt-5'>
                <Image src={bannerImage} alt="bannerImage" width="100%" height={370} />
            </div>

            <div>
                <Image src={Img01} alt="bannerImage" width="100%" height={500} priority />
            </div>

            <div>
                <Image src={Img02} alt="bannerImage" width="100%" height={500} priority />
            </div>
        </div>
    )
}

export default SimplerImages