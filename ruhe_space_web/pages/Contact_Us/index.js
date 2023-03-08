import React from 'react';
import TopBanner from '@/Components/ContactUsComponent/TopBanner';
import ContactForm from '@/Components/ContactUsComponent/ContactForm';
import ContactInfo from '@/Components/ContactUsComponent/ContactInfo';
import styles from '../../styles/ContactUsPage.module.scss'

const Contact = () => {
    return (
        <div>
            Contact Us
            <TopBanner />
            <div className={styles.down_div1}>
                <ContactInfo className={styles.one} />
                <ContactForm className={styles.two} />
            </div>
        </div>
    )
}

export default Contact