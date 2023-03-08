import React from 'react';
import styles from '../../styles/OurServices.module.scss';
import Image from 'next/image';

const OurServices = () => {
    const services_info = {
        component_name: 'our services',
        middle_image_url: 'https://previews.123rf.com/images/brizmaker/brizmaker2007/brizmaker200700056/151063763-vertical-photo-of-comfortable-white-bedroom-interior-in-bohemian-style-with-canopy-over-the-bed-dry-.jpg',
        left_sided_services: [
            {
                servise_name: 'master plane',
                servise_description: 'Vitae adipiscing turpis. Aenean ligula nibh, molestie id viverra a, dapibus at dolor. In iaculis viverra neque, ac eleifend.'
            },
            {
                servise_name: 'architecture',
                servise_description: 'Vitae adipiscing turpis. Aenean ligula nibh, molestie id viverra a, dapibus at dolor. In iaculis viverra neque, ac eleifend.'
            },
            {
                servise_name: 'lanscaping',
                servise_description: 'Vitae adipiscing turpis. Aenean ligula nibh, molestie id viverra a, dapibus at dolor. In iaculis viverra neque, ac eleifend.'
            },
        ],
        right_sided_services: [
            {
                servise_name: 'interior',
                servise_description: 'Vitae adipiscing turpis. Aenean ligula nibh, molestie id viverra a, dapibus at dolor. In iaculis viverra neque, ac eleifend.'
            },
            {
                servise_name: 'construction',
                servise_description: 'Vitae adipiscing turpis. Aenean ligula nibh, molestie id viverra a, dapibus at dolor. In iaculis viverra neque, ac eleifend.'
            },
            {
                servise_name: 'urban design',
                servise_description: 'Vitae adipiscing turpis. Aenean ligula nibh, molestie id viverra a, dapibus at dolor. In iaculis viverra neque, ac eleifend.'
            },
        ]
    };
    return (
        <div className={`${styles.our_services} pt-5 pb-5`}>
            <div className={`${styles.inner}`}>
                <div className={`${styles.one} container `}>
                    <h2 className={`${styles.compo_name}`}>{services_info.component_name}</h2>
                    <div className={`${styles.line} mt-4`}></div>         {/*  Its ONLY for a line  */}
                </div>
                <div className={`${styles.two} mt-5`}>
                    <div className={`${styles.left} col-4`}>{services_info.left_sided_services.map((elem, index) => {
                        return (
                            <div key={index} className={`${styles.div_for_services} `}>
                                <h4>{elem.servise_name}</h4>
                                <p>{elem.servise_description}</p>
                            </div>
                        )
                    })}</div>

                    <div className={`${styles.middle} col-4 ml-5`}>
                        <img className={`${styles.actual_image}`} src={services_info.middle_image_url} alt="picture" />
                    </div>

                    <div className={`${styles.left} col-4`}>{services_info.right_sided_services.map((elem, index) => {
                        return (
                            <div key={index} className={`${styles.div_for_services}`}>
                                <h4>{elem.servise_name}</h4>
                                <p>{elem.servise_description}</p>
                            </div>
                        )
                    })}</div>
                </div>
            </div>
        </div>
    )
}

export default OurServices