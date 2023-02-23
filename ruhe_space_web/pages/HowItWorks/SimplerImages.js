import React from 'react';
import Image from 'next/image';
import Img01 from '../../public/Images/Img01.png';
import Img02 from '../../public/Images/Img02.png';

const SimplerImages = () => {
    return (
        <div>
            <div>
                <Image src={Img01} alt="bannerImage" width="100%" height={500} />
            </div>

            <div style={{ marginLeft: "15%" }}>
                <Image src={Img02} alt="bannerImage" width="100%" height={500} />
            </div>
        </div>
    )
}

export default SimplerImages