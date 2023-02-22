import React from 'react';
import Image from 'next/image';
import logo from '../../public/Images/logoImage.png';
import styles from '../../styles/HeaderStyles/Header.module.scss';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';



const Header = () => {
    const Router = useRouter();
    return (
        <div className={styles.Header}>
            <div>
                <Image src={logo} alt="logo" width="100%" height="100%" />
            </div>

            <div>
                <Nav className="me-auto">
                    <Nav.Link className={styles.Navlinks} href="#home" onClick={() => Router.push('/HomePage')}>HOME</Nav.Link>
                    <Nav.Link className={styles.Navlinks} href="#features" onClick={() => Router.push('/HowItWorks')}>HOW IT WORKS</Nav.Link>
                    <Nav.Link className={styles.Navlinks} href="#features">NEWS</Nav.Link>
                    <Nav.Link className={styles.Navlinks} href="#pricing">WORKS</Nav.Link>
                    <Nav.Link className={styles.Navlinks} href="#features">POST DETAIL</Nav.Link>
                    <Nav.Link className={styles.Navlinks} href="#features">SHORTCODES</Nav.Link>
                    <FontAwesomeIcon icon="fa-sharp fa-regular fa-magnifying-glass" />
                </Nav>
            </div>
        </div>
    )
}

export default Header