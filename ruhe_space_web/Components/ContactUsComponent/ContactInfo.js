import React from 'react'
import { faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../../styles/ContactInfo.module.scss';

const ContactInfo = () => {

    const contactData = {
        topDivData: [
            {
                title: "Contact US",
                instruction: "Say Hello",
                warning: "Your Email address will not be published . we promise not to spam !"
            },
        ],
        downDivData: [
            {
                icon: faLocationDot,
                infoType: "Address",
                infoField: ["29 Sandy Lane, Weirton,wv, 26062 United States", "12 Exchange Street, Narragansett,ri, 2882  United States"]
            },
            {
                icon: faEnvelope,
                infoType: "Email",
                infoField: [
                    "vishaltaral@gmail.com", "rohanOdel1997@gmail.com"
                ]
            },
            {
                icon: faPhone,
                infoType: "Phone",
                infoField: [7767034533, 8007994566,],
            },
        ]
    }
    return (
        <div className={`${styles.Cont_info}`}>
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
                <div>{contactData.downDivData.map((data1, index) => {
                    return (
                        <div className={`${styles.contact_info} mt-3`} key={index}>
                            <div className={`${styles.icon}`}>
                                <div className={styles.outer_of_icon}>
                                    <FontAwesomeIcon className={`${styles.actual_icon}`} icon={data1.icon} />
                                </div>
                            </div>

                            <div className={`${styles.information}`}>
                                <h4 className={`${styles.info_type}`}>{data1.infoType}</h4>
                                <div className={`${styles.info_field}`}>{data1.infoField.map((data2, index) => {
                                    return (
                                        <p className={styles.actual_info} key={index}>{data2}</p>
                                    )
                                })}
                                </div>
                            </div>
                        </div>
                    )
                })}

                </div>
            </div>
        </div>
    )
}

export default ContactInfo