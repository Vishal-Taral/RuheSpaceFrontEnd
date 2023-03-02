import React from 'react';
import styles from '../../styles/OurStory.module.scss';

const OurStory = () => {
    return (
        <div className={`${styles.our_story} pb-5 pt-5`}>
            <div className={`${styles.inner} container`}>
                <div className={`${styles.one}`}>
                    <h2 className={`${styles.compo_name}`}>Our story</h2>
                    <div className={`${styles.line} mt-4`}></div>
                </div>
                <div className={`${styles.two}`}>
                    <div className={`${styles.park_boathouse_image} mt-4`}>
                        <img src="https://i0.wp.com/www.interiorgardenslv.com/wp-content/uploads/2015/02/indoor-plant-decoration-idea.jpg?resize=750%2C499" alt="home Image" width="100%" height="100%" />
                        <div className={`${styles.park_boathouse_text}`}>
                            <h5 className={`${styles.date}`}>2023 - 2</h5>
                            <h2 className={`${styles.story_name}`}>park boathous</h2>
                            <p className={`${styles.story_description} mt-4`}>VITAE ADIPISCING TURPIS. AENEAN LIGULA NIBH, MOLESTIE ID VIVERRA A, DAPIBUS AT DOLOR. IN IACULIS VIVERRA NEQUE, AC ELEIFEND ANTE LOBORTIS ID. IN VIVERRA IPSUM STIE ID VIVERRA.</p>
                        </div>
                    </div>

                    <div className={`${styles.park_boathouse_image1} mt-4`}>
                        <img src="https://i0.wp.com/www.interiorgardenslv.com/wp-content/uploads/2015/02/indoor-plant-decoration-idea.jpg?resize=750%2C499" alt="home Image" width="100%" height="100%" />
                        <div className={`${styles.park_boathouse_text1}`}>
                            <h5 className={`${styles.date}`}>2023 - 2</h5>
                            <h2 className={`${styles.story_name}`}>park boathous</h2>
                            <p className={`${styles.story_description} mt-4`}>VITAE ADIPISCING TURPIS. AENEAN LIGULA NIBH, MOLESTIE ID VIVERRA A, DAPIBUS AT DOLOR. IN IACULIS VIVERRA NEQUE, AC ELEIFEND ANTE LOBORTIS ID. IN VIVERRA IPSUM STIE ID VIVERRA.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurStory