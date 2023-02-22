import React from 'react';
import styles from '../../styles/WhoWeAreStyles/WhoWeAre.module.scss';
import Carousel from 'react-bootstrap/Carousel';
// import HomeImage from '../../../public/Images/HomeImage.jpg';
// import Image from 'next/image';

const WhoWeAre = () => {

    return (
        <div className={`${styles.Welcome}`}>
            <div>
                <div className={`${styles.main1} mt-3 mb-3 `} >
                    <div className={`${styles.containt}`}>
                        <h3 className={styles.heading} >Who We Are</h3>
                        <h2 className={`${styles.quotes} mt-2`}> WE ARE CREATIVE ARCHITECTURE STUDIO</h2>
                        <p className={`${styles.paragraph} mt-3`}>DUMMY TEXT IS ALSO USED TO DEMONSTRATE THE APPEARANCE OF DIFFERENT TYPEFACES AND LAYOUTS, AND IN GENERAL
                            typefaces and layouts, and in appearance of different general the content of dummy text is nonsensical.typefaces and layouts, different general the content of dummy text is nonsensical.</p>
                        <button className={styles.readMorebtn}>READ MORE &emsp;&emsp;- </button>
                    </div>
                    <div className={styles.mainHomeImage}>
                        <div className={styles.HomeImage1} >
                            {/* <img src='https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?cs=srgb&dl=pexels-vecislavas-popa-1643383.jpg&fm=jpg' alt="HomeImage" className={styles.actualImage} /> */}
                            <Carousel>
                                <Carousel.Item interval={100}>
                                    <img
                                        src="https://resources.stuff.co.nz/content/dam/images/1/7/8/5/p/i/image.related.StuffLandscapeSixteenByNine.1420x800.1784hf.png/1443662333526.jpg"
                                        className={`${styles.actualImage} d-block w-100 h-50`}
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className={`${styles.actualImage} d-block w-100`}
                                        src="https://resources.stuff.co.nz/content/dam/images/1/7/8/5/p/i/image.related.StuffLandscapeSixteenByNine.1420x800.1784hf.png/1443662333526.jpg"
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                </div>
                <div className={`${styles.mainInfo}`}>
                    <div className={`${styles.inner_div_Of_MainInfo}`} >
                        <h1 className={`${styles.fent_heading}`} >30+ PROJECT</h1>
                        <h4>COMPLETED</h4>
                    </div>
                </div>
            </div>
        </div>

    )
}


export default WhoWeAre;