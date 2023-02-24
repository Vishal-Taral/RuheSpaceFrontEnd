import React from 'react';
import Image from 'next/image';
import Logo from '../../public/Images/logoImage.png';
import styles from '../../styles/HeaderStyles/Header.module.scss';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import { faSearch } from '@fortawesome/free-solid-svg-icons';



const Header = () => {
    const Router = useRouter();
    return (
        <div className={`${styles.Header} fixed-top`}>
            <div>
                <Image src={Logo} alt="logo" width="100%" height="100%" />
            </div>

            <div>
                <Nav className="me-auto">
                    <Nav.Link className={styles.Navlinks} onClick={() => Router.push('/HomePage')}>HOME</Nav.Link>
                    <Nav.Link className={styles.Navlinks} onClick={() => Router.push('/HowItWorks')}>HOW IT WORKS</Nav.Link>
                    <Nav.Link className={styles.Navlinks} >NEWS</Nav.Link>
                    <Nav.Link className={styles.Navlinks} >WORKS</Nav.Link>
                    <Nav.Link className={styles.Navlinks} >POST DETAIL</Nav.Link>
                    <Nav.Link className={styles.Navlinks} >SHORTCODES</Nav.Link>
                    <Nav.Link className={styles.Navlinks} ><FontAwesomeIcon icon={faSearch} width="15px" height="15px" /></Nav.Link>
                </Nav>
            </div>
        </div>
    )
}

export default Header