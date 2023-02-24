import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Kitchen1 from '../../public/Images/Kitchen1.jpg';
import Kitchen2 from '../../public/Images/Kitchen2.jpg';
import Image from 'next/image';

const Carousels = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item >
                    <Image
                        className="d-block w-100"
                        src={Kitchen1}
                        alt="First slide"
                        height={500}
                    />
                    <Carousel.Caption style={{ position: "absolute", bottom: "10rem", color: "black" }}>
                        <h1 style={{ fontSize: "70px", textShadow: "2px 2px white" }}>MODERN</h1>
                        <p style={{ textShadow: "1px 1px white" }}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                        className="d-block w-100 "
                        src={Kitchen2}
                        alt="Third slide"
                        height={500}
                    />

                    <Carousel.Caption style={{ position: "absolute", bottom: "10rem", color: "black" }}>
                        <h1 style={{ fontSize: "70px", textShadow: "2px 2px white" }}>PERFECT</h1>
                        <p style={{ textShadow: "1px 1px white" }}>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Carousels