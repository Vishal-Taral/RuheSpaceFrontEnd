import React from 'react'
import styles from '../../styles/OurExpertsStyles/OurExperts.module.scss';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faRss } from '@fortawesome/free-solid-svg-icons';

const OurExperts = ({ showExperts }) => {
    const brands_icon = [faFacebookF, faTwitter, faLinkedinIn, faYoutube, faInstagram, faRss];
    const expert_details = [
        {
            image_url: 'https://media.istockphoto.com/id/1392990621/photo/smart-handsome-positive-indian-or-arabian-guy-with-glasses-in-casual-wear-student-or.jpg?b=1&s=170667a&w=0&k=20&c=kYBQv7SKom27u83XwPbuCUkcmklb8TVTnZoSTuC5Rjo=',
            person_name: 'vishal taral',
            position: 'UI-designer',
        },
        {
            image_url: 'https://media.istockphoto.com/id/1392990621/photo/smart-handsome-positive-indian-or-arabian-guy-with-glasses-in-casual-wear-student-or.jpg?b=1&s=170667a&w=0&k=20&c=kYBQv7SKom27u83XwPbuCUkcmklb8TVTnZoSTuC5Rjo=',
            person_name: 'rohan odel',
            position: 'UI-designer',
        },
        {
            image_url: 'https://media.istockphoto.com/id/1392990621/photo/smart-handsome-positive-indian-or-arabian-guy-with-glasses-in-casual-wear-student-or.jpg?b=1&s=170667a&w=0&k=20&c=kYBQv7SKom27u83XwPbuCUkcmklb8TVTnZoSTuC5Rjo=',
            person_name: 'rushikesh',
            position: 'UI-designer',
        },
        {
            image_url: 'https://media.istockphoto.com/id/1392990621/photo/smart-handsome-positive-indian-or-arabian-guy-with-glasses-in-casual-wear-student-or.jpg?b=1&s=170667a&w=0&k=20&c=kYBQv7SKom27u83XwPbuCUkcmklb8TVTnZoSTuC5Rjo=',
            person_name: 'athrva',
            position: 'UI-designer',
        },
    ]
    return (
        <div className={`${styles.our_experts}`} >
            <div className={`${styles.expert_team} col-6 ${showExperts ? styles.expertBg1 : styles.expertBg2}`} >
                <h1 >OUR EXPERTS</h1>
                <div className='mt-5'>
                    <img className={`${styles.team_pic}`} src="https://media.istockphoto.com/photos/successful-business-team-smiling-teamwork-corporate-office-colleague-picture-id1188452509?b=1&k=20&m=1188452509&s=612x612&w=0&h=pB6BDGGcdFiickl5TD_XIyQsOyCtKnRDoq7kACyYg0A=" alt="team" />
                </div>

                <div className='text-center mt-3'>
                    <h2>ROBERT WILLSON</h2>
                    <h3>Co-manager associated</h3>
                    <div className={`${styles.icon}`}>{brands_icon.map((icons, index) => {
                        return (
                            <div className={`${styles.outer_of_icon} ${showExperts ? styles.icon1 : styles.icon2}`} key={index}><FontAwesomeIcon className={`${styles.brand_icon} ${showExperts ? styles.brand_icon1 : styles.brand_icon2} `} icon={icons} /></div>
                        )
                    })}
                    </div>
                </div>
                {showExperts ? (
                    <div className={`${styles.mainInfo}`}>
                        <div className={`${styles.inner_div_Of_MainInfo}`} >
                            <h1 className={`${styles.fent_heading}`} >EXPERTS</h1>
                            <h4>TEAM MEMBERS</h4>
                        </div>
                    </div>
                ) : <></>}

            </div>

            <div className={`${styles.second}`}>{expert_details.map((details, index) => {
                return (
                    <Card className='text-center' style={{ width: '15rem', height: '17rem' }} key={index} >
                        <Card.Img className={`${styles.expert_image}`} src={details.image_url} />
                        <Card.Body className={`${styles.expert_detail}`}>
                            <Card.Title>{details.person_name}</Card.Title>
                            <Card.Text>{details.position}</Card.Text>
                        </Card.Body>
                    </Card>
                )
            })}
            </div>
        </div>
    )
}

export default OurExperts