import React from 'react'
import styles from '../../styles/AboutUs.module.scss';
import Carousel from 'react-bootstrap/Carousel';

const AboutUs = () => {
    const carousal_data = [
        {
            image_url: "https://img.etimg.com/photo/93265176/93265176.jpg",
        },
        {
            image_url: "https://img.etimg.com/photo/93265176/93265176.jpg",
        },

    ]
    return (
        <div className={`${styles.main1}`}>
            <div className={`${styles.inner_div} container`}>
                <div className={`${styles.one}`}>
                    <div className={`${styles.carousel_div}`}>
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className={`${styles.actual_image} d-block w-100 `}
                                    src="https://img.etimg.com/photo/93265176/93265176.jpg"
                                    alt="First slide"
                                    height="40%"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className={`${styles.actual_image} d-block w-100 `}
                                    src="https://img.etimg.com/photo/93265176/93265176.jpg"
                                    alt="Third slide"
                                    height="40%"

                                />

                            </Carousel.Item>
                        </Carousel>

                    </div>
                </div>

                <div className={`${styles.two} pt-5 `}>
                    <div className={`${styles.containt}`}>
                        <h3 className={styles.heading} >About Us</h3>
                        <h2 className={`${styles.quotes} mt-4`}>OUR MISSION IS THE BEST DEVELOPMENT & INTERIOR DESIGN.</h2>
                        <p className={`${styles.uppercase_text} mt-5`}>DUMMY TEXT IS ALSO USED TO DEMONSTRATE THE APPEARANCE OF DIFFERENT TYPEFACES AND LAYOUTS, AND IN GENERAL </p>
                        <p className={`${styles.lowercase_text}`}>typefaces and layouts, and in appearance of different general the content of dummy text is nonsensical.typefaces and layouts, different general the content of dummy text is nonsensical.</p>
                    </div>

                    <button className={`${styles.read_more} mt-4`}>READ MORE</button>
                </div>
            </div>
        </div>
    )
}

export default AboutUs