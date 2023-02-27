import React from 'react'
import styles from '../../styles/TestimonialsStyles/Testimonials.module.scss';

const Testimonials = () => {
    return (
        <div className={`${styles.Testimonials} container mt-5 mb-3`}>
            <h1>Testimonials</h1>
            <div className={`${styles.line} mt-4 mb-4`}>

            </div>
            <div className={`${styles.outer_div}`}>
                <div className={`${styles.inner_div}`}>
                    <div>
                        <div className={`${styles.box}`}>
                            <div className={`${styles.small_div}`}></div>
                        </div>
                        <div className={`${styles.info}`}>
                            <h5 className={styles.person}><b>Taylor Robert</b></h5>
                            <label htmlFor="post" className={styles.post}>BackEnd Developer </label>

                            <p className='mt-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, non iusto, dolorum sunt accusamus magni, tempora cum doloribus dicta vitae eum suscipit minus quam at consequuntur numquam id laudantium quidem!</p>
                        </div>
                    </div>
                </div>
                <div className={`${styles.inner_div}`}>
                    <div>
                        <div className={`${styles.small_div}`}></div>
                        <div className={`${styles.info}`}>
                            <h5 className={styles.person}><b>Taylor Robert</b></h5>
                            <label htmlFor="post" className={styles.post}>BackEnd Developer </label>

                            <p className='mt-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, non iusto, dolorum sunt accusamus magni, tempora cum doloribus dicta vitae eum suscipit minus quam at consequuntur numquam id laudantium quidem!</p>
                        </div>
                    </div>

                </div>
            </div>

            <div className={`${styles.mainInfo}`}>
                <div className={`${styles.inner_div_Of_MainInfo}`} >
                    <h1 className={`${styles.fent_heading}`} >CLIENT </h1>
                    <h5>SAYS</h5>
                </div>
            </div>
        </div>
    )
}

export default Testimonials