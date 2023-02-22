import React from 'react'
import { Container } from 'react-bootstrap'
import bannerImage from '../../public/Images/Banner.png';
import Image from 'next/image';
import SomeInfo from './SomeInfo';


const HowItWorks = () => {
    return (
        <div>
            <Container>
                <h2 >HOW IT WORKS</h2>
            </Container>
            <div className='mt-5'>
                <Image src={bannerImage} alt="bannerImage" width="100%" height={370} />
            </div>
            <SomeInfo />
        </div>
    )
}

export default HowItWorks