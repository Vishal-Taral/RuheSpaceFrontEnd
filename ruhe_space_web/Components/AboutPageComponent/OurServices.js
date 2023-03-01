import React from 'react';
import styles from '../../styles/OurServices.module.scss';

const OurServices = () => {
    const services_info = {
        component_name: 'our services',
        middle_image_url: '',
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
    }
    return (
        <div className={`${styles.our_services}`}>
            <div className='container'>
                <h2 className={`${styles.compo_name}`}>Our Services</h2>
                <div className={`${styles.line} mt-4`}></div>
            </div>
            <div>
                <div className='left'></div>
                <div className='middle'></div>
                <div className='right'></div>
            </div>

        </div>
    )
}

export default OurServices