import React from 'react'
import styles from '../../styles/OurClientStyles/OurClient.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLessThan } from '@fortawesome/free-solid-svg-icons';
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';

const OurClient = () => {
    return (
        <div className={`${styles.our_client}`}>
            <div className={`${styles.outer_div}`}>
                <div className={`${styles.one} mt-3`}>
                    <div className={`${styles.text_containt}`}>
                        <h2>OUR CLIENTS</h2>
                        <div className={`${styles.line} mt-4`}></div>
                    </div>

                    <div className={`${styles.left_right_icon}`}>
                        <div className={`${styles.icons}`}>
                            <div className={`${styles.less_than_icon}`}><FontAwesomeIcon icon={faLessThan} style={{ color: "white" }} /></div>
                        </div>

                        <div className={`${styles.icons}`}>
                            <div className={`${styles.greater_than_icon}`}><FontAwesomeIcon icon={faGreaterThan} style={{ color: "white" }} /></div>
                        </div>
                    </div>

                </div>
                <div className={`${styles.two}`}>
                    <img src="https://media.istockphoto.com/id/1281009425/vector/three-elements-triangle-symbol-abstract-business-logotype.jpg?s=612x612&w=0&k=20&c=CyXS_u8bP7T4V-fh_bmj0pm360JU3LrC9CG3mdpq87M=" alt="client" height={100} width={100} />
                    <img src="https://media.istockphoto.com/id/1286680331/vector/adoption-and-community-care.jpg?s=612x612&w=0&k=20&c=ohbgHT14BhVVbVOc__N5MsBEfoM3EXwzLPxzIFeWHTI=" alt="client" height={100} width={100} />
                    <img src="https://media.istockphoto.com/id/1140553971/vector/abstract-business-arrow-up-logo-icon-vector-design-template.jpg?s=612x612&w=0&k=20&c=N6bFWaKfmFokGSfTNJhEbYDnF1RplWomcNrOKI65cWU=" alt="client" height={100} width={100} />
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAj_ln6qoU-fjffZpgj9DC_q0oRmWFIb5A9Q&usqp=CAUg" alt="client" height={100} width={100} />
                </div>
            </div>
        </div>
    )
}

export default OurClient