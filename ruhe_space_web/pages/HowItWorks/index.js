import React from 'react'
import { Container } from 'react-bootstrap'
import Image from 'next/image';
import SomeInfo from './SomeInfo';
import SimplerImages from './SimplerImages';


const HowItWorks = () => {
    return (
        <div>
            <Container>
                <h2 >HOW IT WORKS</h2>
            </Container>
            <SimplerImages />
            <SomeInfo />
        </div>
    )
}

export default HowItWorks