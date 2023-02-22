import React from 'react';
import styles from '../../styles/LatestBlogStyle/LatestBlog.module.scss';

const LatestBlog = () => {
    return (
        <div className={`${styles.latest_blog} container`}>
            <h1>BLOG POST</h1>
            <div className={`${styles.main1} mt-3`}>
                <div className={`${styles.outer_left}`}>
                    <div >
                        <div className={`${styles.one}`}>
                            <div className={`${styles.two} text-center`}>
                                <h5>TITEL OF FIST BLOG POST </h5>
                            </div>
                        </div>
                    </div>

                    <div >
                        <div className={`${styles.one} mt-4`}>
                            <div className={`${styles.two} text-center`}>
                                <h5>TITEL OF FIST BLOG POST </h5>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`${styles.outer_right}`}>
                    <div className={`${styles.inner_one}`}>
                        <div className={`${styles.inner_two}`}>
                            <h1>SMALL&MINIMAL HOUSE ON PATERS ON HILL</h1>
                            <p>typefaces and layouts, and in appeara nce of different general the content of dummy text is nonsensical.typefaces of dummy text is nonsensical.</p>
                            <a href="#" style={{ color: "white", textDecoration: "none" }}>read more</a>
                        </div>
                    </div>

                    <div className={`${styles.mainInfo} mt-3`}>
                        <div className={`${styles.inner_div_Of_MainInfo}`} >
                            <h1 className={`${styles.fent_heading}`} >BLOG</h1>
                            <h5>POST</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LatestBlog

{/* <div className={`${styles.outer_left}`} >
                <div >
                    <div className={`${styles.one}`}>
                        <div className={`${styles.two} text-center`}>
                            <h5>TITEL OF FIST BLOG POST </h5>
                        </div>
                    </div>
                </div>

                <div className={`${styles.outer_left} mt-4`} >
                    <div className={`${styles.one}`}>
                        <div className={`${styles.two} text-center`}>
                            <h5>TITEL OF FIST BLOG POST </h5>
                        </div>
                    </div>
                </div>
            </div> */}