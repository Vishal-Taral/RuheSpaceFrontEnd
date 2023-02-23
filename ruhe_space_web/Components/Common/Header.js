import React from 'react';
import Image from 'next/image';
import Logo from '../../public/Images/logoImage.png';
import styles from '../../styles/HeaderStyles/Header.module.scss';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';



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
                    <FontAwesomeIcon icon="fa-sharp fa-regular fa-magnifying-glass" />
                </Nav>
            </div>
        </div>

        // <nav className="navbar navbar-expand-lg container">
        //     <div className="container-fluid " fixed="top">
        //         <Image src={Logo} alt="logo" width="100%" height="100%" />
        //         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //             <span className="navbar-toggler-icon"></span>
        //         </button>
        //         <div className={`${styles.NavbarItemList} collapse navbar-collapse`} id="navbarSupportedContent" >
        //             <div>
        //                 <ul className={`${styles.NavbarItemList} navbar-nav`} >
        //                     <li className={`${styles.NavbarItemList} nav-item `}>
        //                         <a className={`${styles.navlist} nav-link`} aria-expanded="false" onClick={() => Router.push('/HomePage')}>
        //                             Home
        //                         </a>

        //                         <a className={`${styles.navlist} nav-link`} aria-expanded="false" onClick={() => Router.push('/HowItWorks')}>
        //                             How it works
        //                         </a>

        //                         <a className={`${styles.navlist} nav-link`} aria-expanded="false" >
        //                             Home
        //                         </a>

        //                         <a className={`${styles.navlist} nav-link`} aria-expanded="false" >
        //                             Home
        //                         </a>

        //                         <a className={`${styles.navlist} nav-link`} aria-expanded="false" >
        //                             Home
        //                         </a>

        //                         <a className={`${styles.navlist} nav-link`} aria-expanded="false" >
        //                             Home
        //                         </a>
        //                     </li>
        //                 </ul>
        //             </div>
        //         </div>
        //     </div>
        // </nav>
    )
}

export default Header