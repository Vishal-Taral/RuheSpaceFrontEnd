import React from 'react'
import styles from '../../styles/OurExpertsStyles/OurExperts.module.scss';
import Card from 'react-bootstrap/Card';

const OurExperts = () => {
    return (
        <div className={`${styles.our_experts}`} >
            <div className={`${styles.expert_team} col-6`} >
                <h1 >OUR EXPERTS</h1>
                <div className='mt-5'>
                    <img className={`${styles.team_pic}`} src="https://media.istockphoto.com/photos/successful-business-team-smiling-teamwork-corporate-office-colleague-picture-id1188452509?b=1&k=20&m=1188452509&s=612x612&w=0&h=pB6BDGGcdFiickl5TD_XIyQsOyCtKnRDoq7kACyYg0A=" alt="team" />
                </div>

                <div className='text-center mt-3'>
                    <h2>ROBERT WILLSON</h2>
                    <h3>Co-manager associated</h3>
                    <div className='icon'>
                        icons
                    </div>
                </div>

                <div className={`${styles.mainInfo}`}>
                    <div className={`${styles.inner_div_Of_MainInfo}`} >
                        <h1 className={`${styles.fent_heading}`} >EXPERTS</h1>
                        <h4>TEAM MEMBERS</h4>
                    </div>
                </div>
            </div>

            <div className={`${styles.second}`}>
                <Card className='text-center' style={{ width: '15rem', height: '17rem' }}>
                    <Card.Img src="https://media.istockphoto.com/id/1392990621/photo/smart-handsome-positive-indian-or-arabian-guy-with-glasses-in-casual-wear-student-or.jpg?b=1&s=170667a&w=0&k=20&c=kYBQv7SKom27u83XwPbuCUkcmklb8TVTnZoSTuC5Rjo=" />
                    <Card.Body>
                        <Card.Title>Vishal Taral</Card.Title>
                        <Card.Text>UI designer</Card.Text>
                    </Card.Body>
                </Card>

                <Card className='text-center' style={{ width: '15rem', height: '17rem' }}>
                    <Card.Img src="https://media.istockphoto.com/id/1392990621/photo/smart-handsome-positive-indian-or-arabian-guy-with-glasses-in-casual-wear-student-or.jpg?b=1&s=170667a&w=0&k=20&c=kYBQv7SKom27u83XwPbuCUkcmklb8TVTnZoSTuC5Rjo=" />
                    <Card.Body>
                        <Card.Title>rohan odel</Card.Title>
                        <Card.Text>UI designer</Card.Text>
                    </Card.Body>
                </Card>

                <Card className='text-center' style={{ width: '15rem', height: '17rem' }}>
                    <Card.Img variant="top" src="https://media.istockphoto.com/id/1392990621/photo/smart-handsome-positive-indian-or-arabian-guy-with-glasses-in-casual-wear-student-or.jpg?b=1&s=170667a&w=0&k=20&c=kYBQv7SKom27u83XwPbuCUkcmklb8TVTnZoSTuC5Rjo=" />
                    <Card.Body>
                        <Card.Title>rushikesh </Card.Title>
                        <Card.Text>UI designer</Card.Text>
                    </Card.Body>
                </Card>

                <Card className='text-center' style={{ width: '15rem', height: '17rem' }}>
                    <Card.Img src="https://media.istockphoto.com/id/1392990621/photo/smart-handsome-positive-indian-or-arabian-guy-with-glasses-in-casual-wear-student-or.jpg?b=1&s=170667a&w=0&k=20&c=kYBQv7SKom27u83XwPbuCUkcmklb8TVTnZoSTuC5Rjo=" />
                    <Card.Body>
                        <Card.Title>atharva</Card.Title>
                        <Card.Text>UI designer</Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default OurExperts