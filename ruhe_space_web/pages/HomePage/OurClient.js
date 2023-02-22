import React from 'react'
import styles from '../../styles/OurClientStyles/OurClient.module.scss';

const OurClient = () => {
    return (
        <div className={`${styles.our_client} container`}>
            <div className={`${styles.outer_div}`}>
                <div className={`${styles.one}`}>
                    <h3>OUR CLIENTS</h3>
                </div>
                <div className={`${styles.two}`}>
                    <img src="" alt="client" />
                    <img src="" alt="client" />
                    <img src="" alt="client" />
                    <img src="" alt="client" />
                </div>
            </div>
        </div>
    )
}

export default OurClient