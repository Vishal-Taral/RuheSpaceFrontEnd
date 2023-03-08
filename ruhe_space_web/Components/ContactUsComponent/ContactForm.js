import React from 'react';
import styles from '../../styles/ContactForm.module.scss';
import { faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const ContactForm = () => {
    const contactData = {
        topDivData: [
            {
                title: "Contact US",
                instruction: "Say Hello",
                warning: "Your Email address will not be published . we promise not to spam !"
            },
        ],
    }
    return (
        <div className={`${styles.contact_form}`}>
            <div className={styles.top_div}>{contactData.topDivData.map((data, index) => {
                return (
                    <div key={index}>
                        <h6 className={styles.title}>{data.title}</h6>
                        <h1 className={styles.instruct}>{data.instruction}</h1>
                        <h6 className={styles.warning}>{data.warning}</h6>
                    </div>
                )
            })}
            </div>

            <div className={`${styles.down_div} mt-5 `}>
                <div>
                    <div className={styles.contact_form}>
                        <input type="text" name="Name" id="Name" className={styles.inputs_for_contact} placeholder="Name" />
                        <input type="email" name="email" id="email" className={styles.inputs_for_contact} placeholder="your email" />
                        <input type="tel" name="Phone" id="Phone" className={styles.inputs_for_contact} placeholder="Phone Number" />
                        <input type="text" name="Subject" id="Subject" className={styles.inputs_for_contact} placeholder="Subject" />
                    </div>
                    <textarea name="" id="" cols="50" rows="5" className={styles.inputs_for_massage} placeholder="Write Your Massage" />
                    <button className={`${styles.send_btn}`}>Send Massage</button>
                </div>
            </div>
        </div>
    )
}

export default ContactForm