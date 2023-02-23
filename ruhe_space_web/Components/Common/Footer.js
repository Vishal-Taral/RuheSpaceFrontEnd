import React from 'react'
import styles from '../../styles/FooterStyles/Footer.module.scss'
import Logo from '../../public/Images/logoImage.png';
import Image from 'next/image';

const Footer = () => {
    return (
        <div className={`${styles.footer} container`}>
            <div>
                <Image src={Logo} alt="logo" width="100%" height="100%" />
            </div>

            <div className={`${styles.middleText}`}>
                <span>© 2022 Designed By thememajestic.</span>
            </div>

            <div>
                <div className={`${styles.footer_liks}`}>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="#" className={`${styles.links}`}>Terms & Conditions</a></li>
                            <li class="breadcrumb-item"><a href="#" className={`${styles.links}`}>Privacy Policy</a></li>
                            <li class="breadcrumb-item"><a href="#" className={`${styles.links}`}>Contact Us </a></li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Footer