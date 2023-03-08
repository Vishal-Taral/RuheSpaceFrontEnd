import React from 'react';
import styles from '../../styles/TopBanner.module.scss';

const TopBanner = () => {
    return (
        <div className={`${styles.top_banner}`}>
            <h1>Contact</h1>

            <nav aria-label="breadcrumb" className='d-flex '>
                <h6 className="breadcrumb-item"><a href="#" className='text-light text-decoration-none'> Home</a></h6>
                <ul>
                    <li class="breadcrumb-item " aria-current="page"><h6><a href="#" className='text-light text-decoration-none'>Library</a></h6> </li>
                </ul>
            </nav>
        </div>
    )
}

export default TopBanner