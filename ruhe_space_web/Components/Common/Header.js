import React from 'react';
import Image from 'next/image';
import Logo from '../../public/Images/logoImage.png';
import styles from '../../styles/HeaderStyles/Header.module.scss';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import { faSearch } from '@fortawesome/free-solid-svg-icons';



const Header = () => {
    const router = useRouter();
    const forNavItems = {
        icon: "",
        navItems: [
            {
                key: "HomePage",
                ItemName: "Home"
            },
            {
                key: "HowItWorks",
                ItemName: "How It Works"
            },
            {
                key: "About",
                ItemName: "About"
            },
            {
                key: "Services",
                ItemName: "Services"
            },
            {
                key: "Projects",
                ItemName: "Project"
            },
            {
                key: "Blog",
                ItemName: "Blog"
            },
            {
                key: "Contact_Us",
                ItemName: "Contact Us"
            },

        ]

    }

    return (
        <nav className={`${styles.header} navbar navbar-expand-lg  p-4 fixed-top`}>
            <div className={` container-fluid`} >
                <Image src={Logo} alt="logo" width="100%" height="100%" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`${styles.NavbarItemList} collapse navbar-collapse`} id="navbarSupportedContent" >{forNavItems.navItems.map((list, index) => {
                    return (
                        <div key={index}>
                            <ul className="navbar-nav" >
                                <li className="nav-item ">
                                    <a className={`${styles.navlist} nav-link`} aria-expanded="false" onClick={() => router.push(list.key)}>
                                        {list.ItemName}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    )
                })} &emsp;&emsp;
                    <FontAwesomeIcon icon={faSearch} width="12px" height="12px" />
                </div>
            </div>
        </nav>
    )
}

export default Header